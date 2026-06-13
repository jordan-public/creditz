import { createPublicClient, createWalletClient, encodePacked, http, keccak256, stringToHex, type Address, type Hex } from "viem";
import { mnemonicToAccount, privateKeyToAccount } from "viem/accounts";
import { bytes32 } from "@/lib/proof-ids";
import type { SpendProof } from "./proof";

export const CREDIT_REGISTRY_ABI = [
  {
    type: "function",
    name: "commitments",
    stateMutability: "view",
    inputs: [{ name: "", type: "bytes32" }],
    outputs: [{ name: "", type: "bool" }]
  },
  {
    type: "function",
    name: "spentNullifiers",
    stateMutability: "view",
    inputs: [{ name: "", type: "bytes32" }],
    outputs: [{ name: "", type: "bool" }]
  },
  {
    type: "function",
    name: "registeredHumans",
    stateMutability: "view",
    inputs: [{ name: "", type: "uint256" }],
    outputs: [{ name: "", type: "bool" }]
  },
  {
    type: "function",
    name: "registerHuman",
    stateMutability: "nonpayable",
    inputs: [{ name: "worldNullifierHash", type: "uint256" }],
    outputs: []
  },
  {
    type: "function",
    name: "approvedMerchants",
    stateMutability: "view",
    inputs: [
      { name: "", type: "bytes32" },
      { name: "", type: "address" }
    ],
    outputs: [{ name: "", type: "bool" }]
  },
  {
    type: "function",
    name: "approveMerchant",
    stateMutability: "nonpayable",
    inputs: [
      { name: "policyId", type: "bytes32" },
      { name: "merchant", type: "address" },
      { name: "approved", type: "bool" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "issueCredit",
    stateMutability: "nonpayable",
    inputs: [
      { name: "commitment", type: "bytes32" },
      { name: "amount", type: "uint256" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "spendPrivateCredits",
    stateMutability: "nonpayable",
    inputs: [
      { name: "oldCommitment", type: "bytes32" },
      { name: "oldNullifier", type: "bytes32" },
      { name: "newCommitment", type: "bytes32" },
      { name: "policyId", type: "bytes32" },
      { name: "invoiceNonce", type: "bytes32" },
      { name: "merchant", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "proof", type: "bytes" },
      { name: "backendAttestation", type: "bytes" }
    ],
    outputs: []
  }
] as const;

export function isOnchainLedger() {
  return process.env.LEDGER_MODE === "onchain";
}

function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required when LEDGER_MODE=onchain.`);
  return value;
}

function registryAddress() {
  return required("CREDIT_REGISTRY_ADDRESS") as Address;
}

function normalizePrivateKey(value: string) {
  return (value.startsWith("0x") ? value : `0x${value}`) as Hex;
}

function signerAccount() {
  const account = process.env.PRIVATE_KEY
    ? privateKeyToAccount(normalizePrivateKey(process.env.PRIVATE_KEY))
    : mnemonicToAccount(required("PASSPHRASE"));
  const expectedAddress = process.env.ADDRESS;
  if (expectedAddress && account.address.toLowerCase() !== expectedAddress.toLowerCase()) {
    throw new Error("ADDRESS does not match the configured signer.");
  }
  return account;
}

function clients() {
  const transport = http(required("RPC_URL"));
  const account = signerAccount();
  return {
    publicClient: createPublicClient({ transport }),
    walletClient: createWalletClient({ account, transport }),
    account
  };
}

function proofBytes(proof: SpendProof) {
  return stringToHex(JSON.stringify(proof.proof ?? proof));
}

async function privateCreditAttestation(proof: SpendProof, merchant: Address) {
  const account = process.env.BACKEND_ATTESTER_PRIVATE_KEY
    ? privateKeyToAccount(normalizePrivateKey(process.env.BACKEND_ATTESTER_PRIVATE_KEY))
    : signerAccount();
  const { publicClient } = clients();
  const chainId = await publicClient.getChainId();
  const proofPayload = proofBytes(proof);
  const digest = keccak256(
    encodePacked(
      ["address", "uint256", "bytes32", "bytes32", "bytes32", "bytes32", "bytes32", "address", "uint256", "bytes32"],
      [
        registryAddress(),
        BigInt(chainId),
        proof.old_commitment as Hex,
        proof.old_nullifier as Hex,
        proof.new_commitment as Hex,
        bytes32(proof.policy_id) as Hex,
        bytes32(proof.invoice_nonce) as Hex,
        merchant,
        BigInt(proof.amount),
        keccak256(proofPayload)
      ]
    )
  );
  return account.signMessage({ message: { raw: digest } });
}

export async function onchainCommitmentExists(commitment: string) {
  const { publicClient } = clients();
  return publicClient.readContract({
    address: registryAddress(),
    abi: CREDIT_REGISTRY_ABI,
    functionName: "commitments",
    args: [commitment as Hex]
  });
}

export async function onchainNullifierSpent(nullifier: string) {
  const { publicClient } = clients();
  return publicClient.readContract({
    address: registryAddress(),
    abi: CREDIT_REGISTRY_ABI,
    functionName: "spentNullifiers",
    args: [nullifier as Hex]
  });
}

export async function onchainRegisterHuman(worldNullifierHash: string) {
  const { publicClient, walletClient, account } = clients();
  const nullifier = BigInt(worldNullifierHash);
  const alreadyRegistered = await publicClient.readContract({
    address: registryAddress(),
    abi: CREDIT_REGISTRY_ABI,
    functionName: "registeredHumans",
    args: [nullifier]
  });
  if (alreadyRegistered) return null;

  const hash = await walletClient.writeContract({
    account,
    chain: null,
    address: registryAddress(),
    abi: CREDIT_REGISTRY_ABI,
    functionName: "registerHuman",
    args: [nullifier]
  });
  await publicClient.waitForTransactionReceipt({ hash });
  return hash;
}

export async function onchainEnsureMerchantApproved(policyId: string, merchant: Address) {
  const { publicClient, walletClient, account } = clients();
  const policy = bytes32(policyId) as Hex;
  const alreadyApproved = await publicClient.readContract({
    address: registryAddress(),
    abi: CREDIT_REGISTRY_ABI,
    functionName: "approvedMerchants",
    args: [policy, merchant]
  });
  if (alreadyApproved) return null;

  const hash = await walletClient.writeContract({
    account,
    chain: null,
    address: registryAddress(),
    abi: CREDIT_REGISTRY_ABI,
    functionName: "approveMerchant",
    args: [policy, merchant, true]
  });
  await publicClient.waitForTransactionReceipt({ hash });
  return hash;
}

export async function onchainIssueCredit(commitment: string, amount: string) {
  const { publicClient, walletClient, account } = clients();
  const hash = await walletClient.writeContract({
    account,
    chain: null,
    address: registryAddress(),
    abi: CREDIT_REGISTRY_ABI,
    functionName: "issueCredit",
    args: [commitment as Hex, BigInt(amount)]
  });
  await publicClient.waitForTransactionReceipt({ hash });
  return hash;
}

export async function onchainSpendPrivateCredits(proof: SpendProof, merchant: Address) {
  const { publicClient, walletClient, account } = clients();
  const proofPayload = proofBytes(proof);
  const attestation = await privateCreditAttestation(proof, merchant);
  const hash = await walletClient.writeContract({
    account,
    chain: null,
    address: registryAddress(),
    abi: CREDIT_REGISTRY_ABI,
    functionName: "spendPrivateCredits",
    args: [
      proof.old_commitment as Hex,
      proof.old_nullifier as Hex,
      proof.new_commitment as Hex,
      bytes32(proof.policy_id) as Hex,
      bytes32(proof.invoice_nonce) as Hex,
      merchant,
      BigInt(proof.amount),
      proofPayload,
      attestation
    ]
  });
  await publicClient.waitForTransactionReceipt({ hash });
  return hash;
}
