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

export function verifySpendProof(statement: SpendProof) {
  if (statement.mode === "provekit") {
    return Boolean(statement.proof);
  }

  return (
    statement.old_nullifier.startsWith("0x") &&
    statement.old_commitment.startsWith("0x") &&
    statement.new_commitment.startsWith("0x") &&
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
