// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface ICreditSpendVerifier {
    function verify(bytes calldata proof, bytes32[] calldata publicInputs) external view returns (bool);
}

contract CreditRegistry {
    address public immutable backendAttester;
    address public immutable creditSpendVerifier;

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
    mapping(address => uint256) public issuerCreditsIssued;
    mapping(bytes32 => mapping(address => bool)) public approvedMerchants;
    mapping(bytes32 => bytes32) public policyRoots;
    mapping(bytes32 => MerchantSettlement) public merchantSettlements;

    event HumanRegistered(address indexed account, uint256 worldNullifierHash);
    event CreditIssued(address indexed issuer, bytes32 indexed commitment, uint256 amount);
    event Spent(bytes32 indexed oldNullifier, bytes32 indexed newCommitment, address indexed merchant, uint256 amount, bytes32 policyId, bytes32 invoiceNonce);
    event MerchantApproved(bytes32 indexed policyId, address indexed merchant, bool approved);
    event PolicyRootSet(bytes32 indexed policyId, bytes32 root);

    constructor(address attester, address verifier) {
        backendAttester = attester;
        creditSpendVerifier = verifier;
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

    function issueCredit(bytes32 commitment, uint256 amount) external {
        require(commitment != bytes32(0), "commitment");
        require(amount > 0, "amount");
        require(!commitments[commitment], "exists");
        commitments[commitment] = true;
        issuerCreditsIssued[msg.sender] += amount;
        emit CreditIssued(msg.sender, commitment, amount);
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
        bytes32 assetId,
        bytes32 policyId,
        bytes32 merchantId,
        bytes32 invoiceNonce,
        uint256 expiresAt,
        uint256 currentTimeOrBlockTime,
        address merchant,
        uint256 amount,
        bytes calldata proof
    ) external {
        require(oldCommitment != bytes32(0), "old commitment");
        require(oldNullifier != bytes32(0), "nullifier");
        require(newCommitment != bytes32(0), "new commitment");
        require(assetId != bytes32(0), "asset");
        require(policyId != bytes32(0), "policy");
        require(merchantId != bytes32(0), "merchant id");
        require(invoiceNonce != bytes32(0), "invoice");
        require(amount > 0, "amount");
        require(creditSpendVerifier != address(0), "verifier");
        require(block.timestamp <= expiresAt, "invoice expired");
        require(currentTimeOrBlockTime <= expiresAt, "proof expired");
        require(commitments[oldCommitment], "unknown old commitment");
        require(!spentNullifiers[oldNullifier], "spent");
        require(!commitments[newCommitment], "commitment exists");
        require(approvedMerchants[policyId][merchant], "merchant");
        require(merchantSettlements[invoiceNonce].settledAt == 0, "invoice settled");
        require(
            _verifyPrivateCreditProof(
                oldCommitment,
                oldNullifier,
                newCommitment,
                assetId,
                policyId,
                merchantId,
                invoiceNonce,
                expiresAt,
                currentTimeOrBlockTime,
                amount,
                proof
            ),
            "proof"
        );

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

    function _verifyPrivateCreditProof(
        bytes32 oldCommitment,
        bytes32 oldNullifier,
        bytes32 newCommitment,
        bytes32 assetId,
        bytes32 policyId,
        bytes32 merchantId,
        bytes32 invoiceNonce,
        uint256 expiresAt,
        uint256 currentTimeOrBlockTime,
        uint256 amount,
        bytes calldata proof
    ) internal view returns (bool) {
        bytes32[] memory publicInputs = new bytes32[](10);
        publicInputs[0] = oldCommitment;
        publicInputs[1] = oldNullifier;
        publicInputs[2] = newCommitment;
        publicInputs[3] = assetId;
        publicInputs[4] = policyId;
        publicInputs[5] = merchantId;
        publicInputs[6] = bytes32(uint256(amount));
        publicInputs[7] = invoiceNonce;
        publicInputs[8] = bytes32(uint256(expiresAt));
        publicInputs[9] = bytes32(uint256(currentTimeOrBlockTime));
        return ICreditSpendVerifier(creditSpendVerifier).verify(proof, publicInputs);
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
