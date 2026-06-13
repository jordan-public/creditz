import { describe, expect, it } from "vitest";
import type { SpendProof } from "@/lib/server/proof";
import { run } from "@/lib/server/db";
import { POST as createInvoice } from "./merchant/route";
import { POST as register } from "./register/route";
import { POST as reload } from "./reload/route";
import { POST as spend } from "./spend/route";

const jsonRequest = (body: unknown) =>
  new Request("http://localhost.test", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });

const call = async <T>(handler: (request: Request) => Promise<Response>, body: unknown) => {
  const response = await handler(jsonRequest(body));
  return {
    status: response.status,
    body: (await response.json()) as T
  };
};

const hex = (seed: string) => `0x${Buffer.from(seed).toString("hex").padEnd(64, "0").slice(0, 64)}`;

async function registeredUser(seed: string) {
  const response = await call<{ userId: string }>(register, {
    depositPublicKey: hex(`${seed}-deposit`),
    worldProof: {
      nullifier_hash: `demo-register-${seed}`,
      proof: "0x0",
      merkle_root: "0x0"
    }
  });

  expect(response.status).toBe(200);
  return response.body.userId;
}

async function loadedNote(seed: string) {
  const userId = await registeredUser(seed);
  const oldCommitment = hex(`${seed}-old-commitment`);
  const response = await call(reload, {
    userId,
    commitment: oldCommitment,
    amount: "25000000",
    asset: "Credits",
    policyId: "campus-cafeteria-v1"
  });

  expect(response.status).toBe(200);
  return { userId, oldCommitment };
}

async function invoice(seed: string, amount = "6500000") {
  const response = await call<{ invoice: SpendProof & { asset: string; merchant_id: string; policy_id: string } }>(
    createInvoice,
    {
      merchantId: "campus-cafe-1",
      amount,
      asset: "Credits",
      ttlSeconds: 180
    }
  );

  expect(response.status).toBe(200);
  return { ...response.body.invoice, seed };
}

function proofFor(params: {
  seed: string;
  oldCommitment: string;
  oldNullifier?: string;
  invoice: Awaited<ReturnType<typeof invoice>>;
}): SpendProof {
  return {
    mode: "demo-keccak",
    old_commitment: params.oldCommitment,
    old_nullifier: params.oldNullifier ?? hex(`${params.seed}-old-nullifier`),
    new_commitment: hex(`${params.seed}-new-commitment-${params.invoice.invoice_nonce}`),
    asset_id: params.invoice.asset,
    policy_id: params.invoice.policy_id,
    merchant_id: params.invoice.merchant_id,
    amount: params.invoice.amount,
    invoice_nonce: params.invoice.invoice_nonce,
    expires_at: params.invoice.expires_at,
    current_time_or_block_time: Math.floor(Date.now() / 1000)
  };
}

describe("Creditz API flow", () => {
  it("registers, reloads, spends once, and rejects invoice replay", async () => {
    const seed = "happy-path";
    const note = await loadedNote(seed);
    const bill = await invoice(seed);
    const proof = proofFor({ seed, oldCommitment: note.oldCommitment, invoice: bill });

    const firstSpend = await call(spend, {
      userId: note.userId,
      proof,
      worldProof: { nullifier_hash: `${seed}-spend`, proof: "0x0", merkle_root: "0x0" }
    });
    expect(firstSpend.status).toBe(200);

    const replay = await call<{ error: string }>(spend, {
      userId: note.userId,
      proof: { ...proof, new_commitment: hex(`${seed}-replay-new`) },
      worldProof: { nullifier_hash: `${seed}-spend-replay`, proof: "0x0", merkle_root: "0x0" }
    });
    expect(replay.status).toBe(409);
    expect(replay.body.error).toBe("Invoice has already been paid.");
  });

  it("rejects a proof whose merchant does not match the invoice", async () => {
    const seed = "merchant-mismatch";
    const note = await loadedNote(seed);
    const bill = await invoice(seed);

    const response = await call<{ error: string }>(spend, {
      userId: note.userId,
      proof: { ...proofFor({ seed, oldCommitment: note.oldCommitment, invoice: bill }), merchant_id: "unapproved-cafe" },
      worldProof: { nullifier_hash: `${seed}-spend`, proof: "0x0", merkle_root: "0x0" }
    });

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("Invoice merchant mismatch.");
  });

  it("rejects expired private proof statements before ledger mutation", async () => {
    const seed = "expired-proof";
    const note = await loadedNote(seed);
    const bill = await invoice(seed);
    const proof = proofFor({ seed, oldCommitment: note.oldCommitment, invoice: bill });

    const response = await call<{ error: string }>(spend, {
      userId: note.userId,
      proof: { ...proof, current_time_or_block_time: proof.expires_at + 1 },
      worldProof: { nullifier_hash: `${seed}-spend`, proof: "0x0", merkle_root: "0x0" }
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Private proof statement is expired.");
  });

  it("enforces DB-level nullifier uniqueness across separate invoices", async () => {
    const seed = "duplicate-nullifier";
    const note = await loadedNote(seed);
    const firstBill = await invoice(`${seed}-first`, "1000000");
    const secondBill = await invoice(`${seed}-second`, "1000000");
    const oldNullifier = hex(`${seed}-shared-nullifier`);

    const firstProof = proofFor({ seed, oldCommitment: note.oldCommitment, oldNullifier, invoice: firstBill });
    const firstSpend = await call(spend, {
      userId: note.userId,
      proof: firstProof,
      worldProof: { nullifier_hash: `${seed}-spend-1`, proof: "0x0", merkle_root: "0x0" }
    });
    expect(firstSpend.status).toBe(200);

    run(
      `insert into commitments(commitment, user_id, asset, policy_id, created_at)
       values (@commitment, @user_id, @asset, @policy_id, @created_at)
       on conflict do nothing`,
      {
        commitment: firstProof.new_commitment,
        user_id: note.userId,
        asset: "Credits",
        policy_id: "campus-cafeteria-v1",
        created_at: new Date().toISOString()
      }
    );

    const secondSpend = await call<{ error: string }>(spend, {
      userId: note.userId,
      proof: {
        ...proofFor({
          seed: `${seed}-second`,
          oldCommitment: firstProof.new_commitment,
          oldNullifier,
          invoice: secondBill
        }),
        new_commitment: hex(`${seed}-second-new-commitment`)
      },
      worldProof: { nullifier_hash: `${seed}-spend-2`, proof: "0x0", merkle_root: "0x0" }
    });

    expect(secondSpend.status).toBe(409);
    expect(secondSpend.body.error).toBe("Nullifier has already been spent.");
  });

  it("rejects spends when the old commitment belongs to another user", async () => {
    const owner = await loadedNote("owner-commitment");
    const attacker = await registeredUser("attacker-other-suffix");
    const bill = await invoice("stolen-commitment", "1000000");

    const response = await call<{ error: string }>(spend, {
      userId: attacker,
      proof: proofFor({ seed: "stolen-commitment", oldCommitment: owner.oldCommitment, invoice: bill }),
      worldProof: { nullifier_hash: "stolen-commitment-spend", proof: "0x0", merkle_root: "0x0" }
    });

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("Old commitment is not known for this user.");
  });

  it("rejects a duplicated new commitment before ledger mutation", async () => {
    const seed = "duplicate-new-commitment";
    const note = await loadedNote(seed);
    const bill = await invoice(seed, "1000000");
    const duplicate = hex(`${seed}-duplicate-new`);

    run(
      `insert into commitments(commitment, user_id, asset, policy_id, created_at)
       values (@commitment, @user_id, @asset, @policy_id, @created_at)`,
      {
        commitment: duplicate,
        user_id: note.userId,
        asset: "Credits",
        policy_id: "campus-cafeteria-v1",
        created_at: new Date().toISOString()
      }
    );

    const response = await call<{ error: string }>(spend, {
      userId: note.userId,
      proof: {
        ...proofFor({ seed, oldCommitment: note.oldCommitment, invoice: bill }),
        new_commitment: duplicate
      },
      worldProof: { nullifier_hash: `${seed}-spend`, proof: "0x0", merkle_root: "0x0" }
    });

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("New commitment already exists.");
  });
});
