export type ProveKitStatement = {
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
};

export type ProveKitProofEnvelope = {
  scheme: "provekit-noir-credit-spend-v1";
  circuit: "credit_spend";
  public_inputs_hash: string;
  proof: string;
  verification_key_hash?: string;
};

export function buildVerifierInput(statement: ProveKitStatement, proof: ProveKitProofEnvelope) {
  return { statement, proof };
}
