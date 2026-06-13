// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IERC20Like {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract CreditRegistry {
    address public immutable backendAttester;

    struct MerchantSettlement {
        bytes32 oldNullifier;
        bytes32 newCommitment;
        address merchant;
        uint256 amount;
        bytes32 policyId;
        uint256 settledAt;
    }

    mapping(uint256 => bool) public registeredHumans;
    mapping(bytes32 => bool) public commitments;
    mapping(bytes32 => bool) public spentNullifiers;
    mapping(bytes32 => uint256) public commitmentAmounts;
    mapping(bytes32 => address) public commitmentAssets;
    mapping(address => mapping(address => uint256)) public issuerDeposits;
    mapping(bytes32 => mapping(address => bool)) public approvedMerchants;
    mapping(bytes32 => bytes32) public policyRoots;
    mapping(bytes32 => MerchantSettlement) public merchantSettlements;

    event HumanRegistered(address indexed account, uint256 worldNullifierHash);
    event CreditDeposited(address indexed issuer, bytes32 indexed commitment, uint256 amount, address indexed asset);
    event Spent(bytes32 indexed oldNullifier, bytes32 indexed newCommitment, address indexed merchant, uint256 amount, bytes32 policyId, bytes32 invoiceNonce);
    event MerchantApproved(bytes32 indexed policyId, address indexed merchant, bool approved);
    event PolicyRootSet(bytes32 indexed policyId, bytes32 root);

    constructor(address attester) {
        backendAttester = attester;
    }

    function registerHuman(uint256 worldNullifierHash) external {
        require(worldNullifierHash != 0, "nullifier");
        require(!registeredHumans[worldNullifierHash], "registered");
        registeredHumans[worldNullifierHash] = true;
        emit HumanRegistered(msg.sender, worldNullifierHash);
    }

    function approveMerchant(bytes32 policyId, address merchant, bool approved) external {
        // MVP: issuer/admin access control is intentionally omitted for the hackathon contract skeleton.
        approvedMerchants[policyId][merchant] = approved;
        emit MerchantApproved(policyId, merchant, approved);
    }

    function setPolicyRoot(bytes32 policyId, bytes32 root) external {
        // MVP: issuer/admin access control is intentionally omitted for the hackathon contract skeleton.
        require(policyId != bytes32(0), "policy");
        policyRoots[policyId] = root;
        emit PolicyRootSet(policyId, root);
    }

    function depositCredit(bytes32 commitment, uint256 amount, address asset) external {
        require(commitment != bytes32(0), "commitment");
        require(amount > 0, "amount");
        require(!commitments[commitment], "exists");
        commitments[commitment] = true;
        commitmentAmounts[commitment] = amount;
        commitmentAssets[commitment] = asset;
        issuerDeposits[msg.sender][asset] += amount;
        require(IERC20Like(asset).transferFrom(msg.sender, address(this), amount), "transfer");
        emit CreditDeposited(msg.sender, commitment, amount, asset);
    }

    function spend(
        bytes32 oldNullifier,
        bytes32 newCommitment,
        address merchant,
        uint256 amount,
        bytes calldata proof,
        bytes calldata worldProofOrBackendAttestation
    ) external {
        require(oldNullifier != bytes32(0), "nullifier");
        require(newCommitment != bytes32(0), "new commitment");
        require(!spentNullifiers[oldNullifier], "spent");
        require(!commitments[newCommitment], "commitment exists");
        require(amount > 0, "amount");
        require(_hasBackendAttestation(oldNullifier, newCommitment, merchant, amount, proof, worldProofOrBackendAttestation), "attestation");

        spentNullifiers[oldNullifier] = true;
        commitments[newCommitment] = true;
        emit Spent(oldNullifier, newCommitment, merchant, amount, bytes32(0), bytes32(0));
    }

    function spendPrivateCredits(
        bytes32 oldCommitment,
        bytes32 oldNullifier,
        bytes32 newCommitment,
        bytes32 policyId,
        bytes32 invoiceNonce,
        address merchant,
        uint256 amount,
        bytes calldata proof,
        bytes calldata backendAttestation
    ) external {
        require(oldCommitment != bytes32(0), "old commitment");
        require(oldNullifier != bytes32(0), "nullifier");
        require(newCommitment != bytes32(0), "new commitment");
        require(policyId != bytes32(0), "policy");
        require(invoiceNonce != bytes32(0), "invoice");
        require(amount > 0, "amount");
        require(commitments[oldCommitment], "unknown old commitment");
        require(!spentNullifiers[oldNullifier], "spent");
        require(!commitments[newCommitment], "commitment exists");
        require(approvedMerchants[policyId][merchant], "merchant");
        require(merchantSettlements[invoiceNonce].settledAt == 0, "invoice settled");
        require(_hasPrivateCreditAttestation(oldCommitment, oldNullifier, newCommitment, policyId, invoiceNonce, merchant, amount, proof, backendAttestation), "attestation");

        spentNullifiers[oldNullifier] = true;
        commitments[newCommitment] = true;
        merchantSettlements[invoiceNonce] = MerchantSettlement({
            oldNullifier: oldNullifier,
            newCommitment: newCommitment,
            merchant: merchant,
            amount: amount,
            policyId: policyId,
            settledAt: block.timestamp
        });

        emit Spent(oldNullifier, newCommitment, merchant, amount, policyId, invoiceNonce);
    }

    function _hasBackendAttestation(
        bytes32 oldNullifier,
        bytes32 newCommitment,
        address merchant,
        uint256 amount,
        bytes calldata proof,
        bytes calldata signature
    ) internal view returns (bool) {
        bytes32 digest = keccak256(abi.encodePacked(address(this), block.chainid, oldNullifier, newCommitment, merchant, amount, keccak256(proof)));
        bytes32 ethHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", digest));
        return _recover(ethHash, signature) == backendAttester;
    }

    function _hasPrivateCreditAttestation(
        bytes32 oldCommitment,
        bytes32 oldNullifier,
        bytes32 newCommitment,
        bytes32 policyId,
        bytes32 invoiceNonce,
        address merchant,
        uint256 amount,
        bytes calldata proof,
        bytes calldata signature
    ) internal view returns (bool) {
        bytes32 digest = keccak256(
            abi.encodePacked(
                address(this),
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
        return _recover(ethHash, signature) == backendAttester;
    }

    function _recover(bytes32 digest, bytes calldata signature) internal pure returns (address) {
        if (signature.length != 65) return address(0);
        bytes32 r;
        bytes32 s;
        uint8 v;
        assembly {
            r := calldataload(signature.offset)
            s := calldataload(add(signature.offset, 32))
            v := byte(0, calldataload(add(signature.offset, 64)))
        }
        if (v < 27) v += 27;
        return ecrecover(digest, v, r, s);
    }
}
