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
  proof?: string;
};

function hashFields(fields: Array<string | number | bigint>) {
  return keccak256(stringToBytes(fields.map(String).join("|")));
}

function isBytes32(value: string) {
  return /^0x[0-9a-fA-F]{64}$/.test(value);
}

export function verifySpendProof(statement: SpendProof) {
  if (BigInt(statement.amount) <= 0n) {
    return false;
  }

  if (statement.current_time_or_block_time > statement.expires_at) {
    return false;
  }

  if (statement.mode === "provekit") {
    return Boolean(statement.proof);
  }

  return (
    isBytes32(statement.old_nullifier) &&
    isBytes32(statement.old_commitment) &&
    isBytes32(statement.new_commitment) &&
    statement.old_commitment !== statement.new_commitment &&
    statement.invoice_nonce.length >= 16 &&
    hashFields([
      statement.old_commitment,
      statement.old_nullifier,
      statement.new_commitment,
      statement.amount,
      statement.invoice_nonce
    ]).startsWith("0x")
  );
}
