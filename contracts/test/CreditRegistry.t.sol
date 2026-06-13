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
        require(usdc.balanceOf(address(registry)) == 25e6, "registry balance");
        require(usdc.balanceOf(address(this)) == 75e6, "issuer balance");
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

    function _signature(bytes32 oldNullifier, bytes32 newCommitment, address merchant, uint256 amount, bytes memory proof)
        internal
        returns (bytes memory)
    {
        bytes32 digest = keccak256(abi.encodePacked(address(registry), block.chainid, oldNullifier, newCommitment, merchant, amount, keccak256(proof)));
        bytes32 ethHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", digest));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ATTESTER_KEY, ethHash);
        return abi.encodePacked(r, s, v);
    }
}
