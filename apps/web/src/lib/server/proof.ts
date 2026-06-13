import { spawnSync } from "node:child_process";
import { keccak256, stringToBytes } from "viem";

export type SpendProof = {
  mode: "demo-keccak" | "provekit";
  old_commitment: string;
  old_nullifier: string;
  new_commitment: string;
  asset_id: string;
  policy_id: string;
  merchant_id: string;
  amount: string;
  invoice_nonce: string;
  expires_at: number;
  current_time_or_block_time: number;
  proof?: string | ProveKitProofEnvelope;
};

export type ProveKitProofEnvelope = {
  scheme: "provekit-noir-credit-spend-v1" | "bb-ultrahonk-credit-spend-v1";
  circuit: "credit_spend";
  public_inputs_hash: string;
  proof: string;
  verification_key_hash?: string;
};

export type ProofVerificationResult = {
  ok: boolean;
  error?: string;
};

function hashFields(fields: Array<string | number | bigint>) {
  return keccak256(stringToBytes(fields.map(String).join("|")));
}

function isBytes32(value: string) {
  return /^0x[0-9a-fA-F]{64}$/.test(value);
}

function publicInputEntries(statement: SpendProof) {
  return [
    ["old_commitment", statement.old_commitment],
    ["old_nullifier", statement.old_nullifier],
    ["new_commitment", statement.new_commitment],
    ["asset_id", statement.asset_id],
    ["policy_id", statement.policy_id],
    ["merchant_id", statement.merchant_id],
    ["amount", statement.amount],
    ["invoice_nonce", statement.invoice_nonce],
    ["expires_at", statement.expires_at],
    ["current_time_or_block_time", statement.current_time_or_block_time]
  ] as const;
}

export function publicInputsHash(statement: SpendProof) {
  return hashFields(publicInputEntries(statement).map(([key, value]) => `${key}:${String(value)}`));
}

function parseEnvelope(proof: SpendProof["proof"]): ProveKitProofEnvelope | null {
  if (!proof) return null;
  if (typeof proof === "string") {
    try {
      return JSON.parse(proof) as ProveKitProofEnvelope;
    } catch {
      return null;
    }
  }
  return proof;
}

function runExternalVerifier(statement: SpendProof, envelope: ProveKitProofEnvelope) {
  const verifierBin = process.env.PROVEKIT_VERIFY_BIN;
  if (!verifierBin) {
    return { ok: false, error: "PROVEKIT_VERIFY_BIN is required for provekit proof verification." };
  }

  const args = process.env.PROVEKIT_VERIFY_ARGS?.split(" ").filter(Boolean) ?? [];
  const result = spawnSync(verifierBin, args, {
    input: JSON.stringify({ statement: Object.fromEntries(publicInputEntries(statement)), proof: envelope }),
    encoding: "utf8",
    timeout: 30_000
  });

  if (result.error) {
    return { ok: false, error: result.error.message };
  }
  if (result.status !== 0) {
    return { ok: false, error: result.stderr || result.stdout || "ProveKit verifier rejected the proof." };
  }
  return { ok: true };
}

export async function verifySpendProof(statement: SpendProof): Promise<ProofVerificationResult> {
  if (BigInt(statement.amount) <= 0n) {
    return { ok: false, error: "Amount must be positive." };
  }

  if (statement.current_time_or_block_time > statement.expires_at) {
    return { ok: false, error: "Private proof statement is expired." };
  }

  if (!isBytes32(statement.old_nullifier)) {
    return { ok: false, error: "Old nullifier must be bytes32." };
  }
  if (!isBytes32(statement.old_commitment)) {
    return { ok: false, error: "Old commitment must be bytes32." };
  }
  if (!isBytes32(statement.new_commitment)) {
    return { ok: false, error: "New commitment must be bytes32." };
  }
  if (statement.old_commitment === statement.new_commitment) {
    return { ok: false, error: "New commitment must differ from the old commitment." };
  }
  if (statement.invoice_nonce.length < 16) {
    return { ok: false, error: "Invoice nonce is malformed." };
  }

  if (statement.mode === "provekit") {
    const envelope = parseEnvelope(statement.proof);
    if (!envelope) {
      return { ok: false, error: "Missing ProveKit proof envelope." };
    }
    if ((envelope.scheme !== "provekit-noir-credit-spend-v1" && envelope.scheme !== "bb-ultrahonk-credit-spend-v1") || envelope.circuit !== "credit_spend") {
      return { ok: false, error: "Unsupported ProveKit proof envelope." };
    }
    if (envelope.public_inputs_hash !== publicInputsHash(statement)) {
      return { ok: false, error: "ProveKit proof is not bound to these public inputs." };
    }
    if (envelope.scheme === "bb-ultrahonk-credit-spend-v1") {
      if (!/^0x[0-9a-fA-F]+$/.test(envelope.proof)) {
        return { ok: false, error: "On-chain proof must be hex-encoded." };
      }
      if (process.env.LEDGER_MODE === "onchain") {
        return { ok: true };
      }
      return { ok: false, error: "On-chain UltraHonk proofs require LEDGER_MODE=onchain." };
    }
    return runExternalVerifier(statement, envelope);
  }

  return { ok: true };
}
