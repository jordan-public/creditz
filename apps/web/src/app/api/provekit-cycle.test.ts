import { describe, expect, it } from "vitest";
import { run } from "@/lib/server/db";
import { publicInputsHash, type SpendProof } from "@/lib/server/proof";
import { POST as spend } from "./spend/route";

const required = [
  "PROVEKIT_VERIFY_BIN",
  "PROVEKIT_VERIFY_ARGS",
  "PROVEKIT_CLI",
  "PROVEKIT_VERIFIER_KEY",
  "PROVEKIT_PROOF_PATH"
];

const hasProveKitFixture = required.every((key) => process.env[key]);
const maybeDescribe = hasProveKitFixture ? describe : describe.skip;

const jsonRequest = (body: unknown) =>
  new Request("http://localhost.test", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });

const callSpend = async <T>(body: unknown) => {
  const response = await spend(jsonRequest(body));
  return {
    status: response.status,
    body: (await response.json()) as T
  };
};

const proofStatement: SpendProof = {
  mode: "provekit",
  old_commitment: "0x0000000000000000000000000000000000000000000000000240f8c4135e5c88",
  old_nullifier: "0x0000000000000000000000000000000000000000000000000241e291d7a22b9e",
  new_commitment: "0x0000000000000000000000000000000000000000000000000240f83078e981b0",
  asset_id: "0x00000000000000000000000000000000000000000000000000000000000003e9",
  policy_id: "0x00000000000000000000000000000000000000000000000000000000000007d1",
  merchant_id: "0x0000000000000000000000000000000000000000000000000000000000000bb9",
  amount: "6500000",
  invoice_nonce: "0x000000000000000000000000000000000000000000000000000000000000002a",
  expires_at: 1893456000,
  current_time_or_block_time: 1781376111
};

function resetLedger(userId: string) {
  run("delete from spent_nullifiers where nullifier = @nullifier", { nullifier: proofStatement.old_nullifier });
  run("delete from commitments where commitment in (@old_commitment, @new_commitment)", {
    old_commitment: proofStatement.old_commitment,
    new_commitment: proofStatement.new_commitment
  });
  run("delete from invoices where invoice_nonce = @invoice_nonce", { invoice_nonce: proofStatement.invoice_nonce });
  run("delete from merchants where merchant_id = @merchant_id", { merchant_id: proofStatement.merchant_id });
  run("delete from users where id = @id", { id: userId });
}

function seedLedger(userId: string) {
  run(
    `insert into users(id, world_nullifier_hash, deposit_public_key, created_at)
     values (@id, @world_nullifier_hash, @deposit_public_key, @created_at)`,
    {
      id: userId,
      world_nullifier_hash: "provekit-cycle-human",
      deposit_public_key: "provekit-cycle-deposit",
      created_at: new Date().toISOString()
    }
  );
  run(
    `insert into merchants(merchant_id, merchant_address, policy_id, display_name)
     values (@merchant_id, @merchant_address, @policy_id, @display_name)`,
    {
      merchant_id: proofStatement.merchant_id,
      merchant_address: "0x00000000000000000000000000000000000cafe1",
      policy_id: proofStatement.policy_id,
      display_name: "ProveKit Cafe"
    }
  );
  run(
    `insert into invoices(invoice_nonce, merchant_id, amount, asset, policy_id, expires_at, paid_at)
     values (@invoice_nonce, @merchant_id, @amount, @asset, @policy_id, @expires_at, null)`,
    {
      invoice_nonce: proofStatement.invoice_nonce,
      merchant_id: proofStatement.merchant_id,
      amount: proofStatement.amount,
      asset: proofStatement.asset_id,
      policy_id: proofStatement.policy_id,
      expires_at: proofStatement.expires_at
    }
  );
  run(
    `insert into commitments(commitment, user_id, asset, policy_id, created_at)
     values (@commitment, @user_id, @asset, @policy_id, @created_at)`,
    {
      commitment: proofStatement.old_commitment,
      user_id: userId,
      asset: proofStatement.asset_id,
      policy_id: proofStatement.policy_id,
      created_at: new Date().toISOString()
    }
  );
}

maybeDescribe("ProveKit verification and nullifier cycle", () => {
  it("verifies a real ProveKit proof, records the nullifier, and rejects nullifier replay", async () => {
    const userId = "usr_provekit_cycle";
    resetLedger(userId);
    seedLedger(userId);

    const proof: SpendProof = {
      ...proofStatement,
      proof: {
        scheme: "provekit-noir-credit-spend-v1",
        circuit: "credit_spend",
        public_inputs_hash: publicInputsHash(proofStatement),
        proof: process.env.PROVEKIT_PROOF_PATH!
      }
    };

    const firstSpend = await callSpend<{ newCommitment: string }>({
      userId,
      proof,
      worldProof: { nullifier_hash: "provekit-cycle-world", proof: "0x0", merkle_root: "0x0" }
    });
    expect(firstSpend, JSON.stringify(firstSpend.body)).toMatchObject({ status: 200 });
    expect(firstSpend.body.newCommitment).toBe(proofStatement.new_commitment);

    run("update invoices set paid_at = null where invoice_nonce = @invoice_nonce", {
      invoice_nonce: proofStatement.invoice_nonce
    });

    const replay = await callSpend<{ error: string }>({
      userId,
      proof,
      worldProof: { nullifier_hash: "provekit-cycle-world-replay", proof: "0x0", merkle_root: "0x0" }
    });
    expect(replay.status).toBe(409);
    expect(replay.body.error).toBe("Nullifier has already been spent.");
  });
});
