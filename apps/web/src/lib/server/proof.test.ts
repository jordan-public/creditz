import { describe, expect, it } from "vitest";
import { verifySpendProof, type SpendProof } from "./proof";

const baseProof: SpendProof = {
  mode: "demo-keccak",
  old_commitment: `0x${"1".repeat(64)}`,
  old_nullifier: `0x${"2".repeat(64)}`,
  new_commitment: `0x${"3".repeat(64)}`,
  asset_id: "USDC",
  policy_id: "campus-cafeteria-v1",
  merchant_id: "campus-cafe-1",
  amount: "6500000",
  invoice_nonce: "1234567890abcdef",
  expires_at: 200,
  current_time_or_block_time: 100
};

describe("verifySpendProof", () => {
  it("accepts a well-formed demo statement", () => {
    expect(verifySpendProof(baseProof)).toBe(true);
  });

  it("rejects zero amount, malformed nullifier, reused commitment, and expired statement", () => {
    expect(verifySpendProof({ ...baseProof, amount: "0" })).toBe(false);
    expect(verifySpendProof({ ...baseProof, old_nullifier: "0xabc" })).toBe(false);
    expect(verifySpendProof({ ...baseProof, new_commitment: baseProof.old_commitment })).toBe(false);
    expect(verifySpendProof({ ...baseProof, current_time_or_block_time: 201 })).toBe(false);
  });

  it("requires a proof blob in ProveKit mode", () => {
    expect(verifySpendProof({ ...baseProof, mode: "provekit", proof: undefined })).toBe(false);
    expect(verifySpendProof({ ...baseProof, mode: "provekit", proof: "0xproof" })).toBe(true);
  });
});
