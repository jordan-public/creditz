// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {CreditRegistry} from "../src/CreditRegistry.sol";
import {MockUSDC} from "../src/MockUSDC.sol";

interface Vm {
    function addr(uint256 privateKey) external returns (address);
    function sign(uint256 privateKey, bytes32 digest) external returns (uint8 v, bytes32 r, bytes32 s);
}

contract CreditRegistryTest {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    uint256 private constant ATTESTER_KEY = 0xA11CE;
    CreditRegistry private registry;
    MockUSDC private usdc;

    struct PrivateSpendCase {
        bytes32 oldCommitment;
        bytes32 oldNullifier;
        bytes32 newCommitment;
        bytes32 policyId;
        bytes32 invoiceNonce;
        address merchant;
        uint256 amount;
        bytes proof;
    }

    function setUp() public {
        registry = new CreditRegistry(vm.addr(ATTESTER_KEY));
        usdc = new MockUSDC();
        usdc.mint(address(this), 100e6);
        require(usdc.approve(address(registry), type(uint256).max), "approve");
    }

    function testRegisterHumanRejectsDuplicateNullifier() public {
        registry.registerHuman(123);
        try registry.registerHuman(123) {
            revert("duplicate registration accepted");
        } catch {}
    }

    function testDepositCreditTransfersAssetAndStoresCommitment() public {
        bytes32 commitment = keccak256("old-note");

        registry.depositCredit(commitment, 25e6, address(usdc));

        require(registry.commitments(commitment), "commitment not stored");
        require(registry.commitmentAmounts(commitment) == 25e6, "commitment amount");
        require(registry.commitmentAssets(commitment) == address(usdc), "commitment asset");
        require(registry.issuerDeposits(address(this), address(usdc)) == 25e6, "issuer deposit");
        require(usdc.balanceOf(address(registry)) == 25e6, "registry balance");
        require(usdc.balanceOf(address(this)) == 75e6, "issuer balance");
    }

    function testPolicyRootCanBeRecorded() public {
        bytes32 policyId = keccak256("campus-cafeteria-v1");
        bytes32 root = keccak256("merchant-root");

        registry.setPolicyRoot(policyId, root);

        require(registry.policyRoots(policyId) == root, "policy root");
    }

    function testSpendRequiresBackendAttestationAndRejectsReplay() public {
        bytes32 oldNullifier = keccak256("old-nullifier");
        bytes32 newCommitment = keccak256("new-note");
        address merchant = address(0xCAFE);
        uint256 amount = 6500000;
        bytes memory proof = hex"1234";

        registry.spend(oldNullifier, newCommitment, merchant, amount, proof, _signature(oldNullifier, newCommitment, merchant, amount, proof));

        require(registry.spentNullifiers(oldNullifier), "nullifier not spent");
        require(registry.commitments(newCommitment), "new commitment not stored");

        try registry.spend(oldNullifier, keccak256("another-note"), merchant, amount, proof, _signature(oldNullifier, keccak256("another-note"), merchant, amount, proof)) {
            revert("replay accepted");
        } catch {}
    }

    function testSpendRejectsBadAttestation() public {
        try registry.spend(keccak256("old"), keccak256("new"), address(0xCAFE), 1, hex"1234", hex"badd") {
            revert("bad attestation accepted");
        } catch {}
    }

    function testPrivateCreditSpendRecordsSettlementAndRejectsReplay() public {
        PrivateSpendCase memory spendCase = PrivateSpendCase({
            oldCommitment: keccak256("old-private-note"),
            oldNullifier: keccak256("old-private-nullifier"),
            newCommitment: keccak256("new-private-note"),
            policyId: keccak256("campus-cafeteria-v1"),
            invoiceNonce: keccak256("invoice-1"),
            merchant: address(0xCAFE),
            amount: 6500000,
            proof: hex"9876"
        });

        registry.depositCredit(spendCase.oldCommitment, 25e6, address(usdc));
        registry.approveMerchant(spendCase.policyId, spendCase.merchant, true);

        _spendPrivateCredits(spendCase);

        require(registry.spentNullifiers(spendCase.oldNullifier), "nullifier not spent");
        require(registry.commitments(spendCase.newCommitment), "new commitment not stored");

        (bytes32 settledNullifier, bytes32 settledCommitment, address settledMerchant, uint256 settledAmount, bytes32 settledPolicy, uint256 settledAt) =
            registry.merchantSettlements(spendCase.invoiceNonce);
        require(settledNullifier == spendCase.oldNullifier, "settlement nullifier");
        require(settledCommitment == spendCase.newCommitment, "settlement commitment");
        require(settledMerchant == spendCase.merchant, "settlement merchant");
        require(settledAmount == spendCase.amount, "settlement amount");
        require(settledPolicy == spendCase.policyId, "settlement policy");
        require(settledAt != 0, "settlement time");

        spendCase.newCommitment = keccak256("another-private-note");
        spendCase.invoiceNonce = keccak256("invoice-2");
        try this.trySpendPrivateCredits(spendCase) {
            revert("nullifier replay accepted");
        } catch {}
    }

    function testPrivateCreditSpendRequiresMerchantApproval() public {
        PrivateSpendCase memory spendCase = PrivateSpendCase({
            oldCommitment: keccak256("policy-old-note"),
            oldNullifier: keccak256("policy-nullifier"),
            newCommitment: keccak256("policy-new-note"),
            policyId: keccak256("campus-cafeteria-v1"),
            invoiceNonce: keccak256("policy-invoice"),
            merchant: address(0xBEEF),
            amount: 1e6,
            proof: hex"1122"
        });

        registry.depositCredit(spendCase.oldCommitment, 25e6, address(usdc));

        try this.trySpendPrivateCredits(spendCase) {
            revert("unapproved merchant accepted");
        } catch {}
    }

    function trySpendPrivateCredits(PrivateSpendCase memory spendCase) external {
        _spendPrivateCredits(spendCase);
    }

    function _signature(bytes32 oldNullifier, bytes32 newCommitment, address merchant, uint256 amount, bytes memory proof)
        internal
        returns (bytes memory)
    {
        bytes32 digest = keccak256(abi.encodePacked(address(registry), block.chainid, oldNullifier, newCommitment, merchant, amount, keccak256(proof)));
        bytes32 ethHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", digest));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ATTESTER_KEY, ethHash);
        return abi.encodePacked(r, s, v);
    }

    function _privateCreditSignature(
        bytes32 oldCommitment,
        bytes32 oldNullifier,
        bytes32 newCommitment,
        bytes32 policyId,
        bytes32 invoiceNonce,
        address merchant,
        uint256 amount,
        bytes memory proof
    ) internal returns (bytes memory) {
        bytes32 digest = keccak256(
            abi.encodePacked(
                address(registry),
                block.chainid,
                oldCommitment,
                oldNullifier,
                newCommitment,
                policyId,
                invoiceNonce,
                merchant,
                amount,
                keccak256(proof)
            )
        );
        bytes32 ethHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", digest));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ATTESTER_KEY, ethHash);
        return abi.encodePacked(r, s, v);
    }

    function _spendPrivateCredits(PrivateSpendCase memory spendCase) internal {
        registry.spendPrivateCredits(
            spendCase.oldCommitment,
            spendCase.oldNullifier,
            spendCase.newCommitment,
            spendCase.policyId,
            spendCase.invoiceNonce,
            spendCase.merchant,
            spendCase.amount,
            spendCase.proof,
            _privateCreditSignature(
                spendCase.oldCommitment,
                spendCase.oldNullifier,
                spendCase.newCommitment,
                spendCase.policyId,
                spendCase.invoiceNonce,
                spendCase.merchant,
                spendCase.amount,
                spendCase.proof
            )
        );
    }
}
