import { describe, expect, it } from "vitest";
import { publicInputsHash, verifySpendProof, type SpendProof } from "./proof";

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
  it("accepts a well-formed demo statement", async () => {
    await expect(verifySpendProof(baseProof)).resolves.toEqual({ ok: true });
  });

  it("rejects zero amount, malformed nullifier, reused commitment, and expired statement", async () => {
    await expect(verifySpendProof({ ...baseProof, amount: "0" })).resolves.toMatchObject({ ok: false });
    await expect(verifySpendProof({ ...baseProof, old_nullifier: "0xabc" })).resolves.toMatchObject({ ok: false });
    await expect(verifySpendProof({ ...baseProof, new_commitment: baseProof.old_commitment })).resolves.toMatchObject({
      ok: false
    });
    await expect(verifySpendProof({ ...baseProof, current_time_or_block_time: 201 })).resolves.toMatchObject({
      ok: false
    });
  });

  it("requires a bound ProveKit proof envelope", async () => {
    await expect(verifySpendProof({ ...baseProof, mode: "provekit", proof: undefined })).resolves.toMatchObject({
      ok: false,
      error: "Missing ProveKit proof envelope."
    });
    await expect(verifySpendProof({ ...baseProof, mode: "provekit", proof: "0xproof" })).resolves.toMatchObject({
      ok: false,
      error: "Missing ProveKit proof envelope."
    });

    await expect(
      verifySpendProof({
        ...baseProof,
        mode: "provekit",
        proof: {
          scheme: "provekit-noir-credit-spend-v1",
          circuit: "credit_spend",
          public_inputs_hash: publicInputsHash({ ...baseProof, amount: "1000000" }),
          proof: "0xproof"
        }
      })
    ).resolves.toMatchObject({
      ok: false,
      error: "ProveKit proof is not bound to these public inputs."
    });
  });

  it("requires an external ProveKit verifier for bound proof envelopes", async () => {
    await expect(
      verifySpendProof({
        ...baseProof,
        mode: "provekit",
        proof: {
          scheme: "provekit-noir-credit-spend-v1",
          circuit: "credit_spend",
          public_inputs_hash: publicInputsHash(baseProof),
          proof: "0xproof"
        }
      })
    ).resolves.toMatchObject({
      ok: false,
      error: "PROVEKIT_VERIFY_BIN is required for provekit proof verification."
    });
  });
});
