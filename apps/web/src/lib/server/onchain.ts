import { createPublicClient, createWalletClient, encodePacked, http, keccak256, stringToHex, type Address, type Hex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
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
    name: "depositCredit",
    stateMutability: "nonpayable",
    inputs: [
      { name: "commitment", type: "bytes32" },
      { name: "amount", type: "uint256" },
      { name: "asset", type: "address" }
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

function backingAssetAddress() {
  return (process.env.BACKING_ASSET_ADDRESS ?? required("MOCK_USDC_ADDRESS")) as Address;
}

function normalizePrivateKey(value: string) {
  return (value.startsWith("0x") ? value : `0x${value}`) as Hex;
}

function clients() {
  const transport = http(required("RPC_URL"));
  const account = privateKeyToAccount(normalizePrivateKey(required("PRIVATE_KEY")));
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
  const privateKey = normalizePrivateKey(process.env.BACKEND_ATTESTER_PRIVATE_KEY ?? required("PRIVATE_KEY"));
  const account = privateKeyToAccount(privateKey);
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

export async function onchainDepositCredit(commitment: string, amount: string) {
  const { publicClient, walletClient, account } = clients();
  const hash = await walletClient.writeContract({
    account,
    chain: null,
    address: registryAddress(),
    abi: CREDIT_REGISTRY_ABI,
    functionName: "depositCredit",
    args: [commitment as Hex, BigInt(amount), backingAssetAddress()]
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
