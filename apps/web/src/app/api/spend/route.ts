import { get, run } from "@/lib/server/db";
import { json, options } from "@/lib/server/http";
import { commitmentExists, nullifierSpent, recordSpend } from "@/lib/server/ledger";
import { verifySpendProof, type SpendProof } from "@/lib/server/proof";
import { verifyWorldProof } from "@/lib/server/world";
import { equivalentField } from "@/lib/proof-ids";

export const OPTIONS = options;

export async function POST(request: Request) {
  const body = (await request.json()) as {
    userId?: string;
    proof?: SpendProof;
    worldProof?: Record<string, unknown>;
  };

  if (!body.userId || !body.proof) {
    return json({ ok: false, error: "Missing user or private spend proof." }, { status: 400 });
  }
  const userId = body.userId;
  const proof = body.proof;

  const user = get<{ world_nullifier_hash: string }>("select world_nullifier_hash from users where id = @id", {
    id: userId
  });
  if (!user) {
    return json({ ok: false, error: "User is not registered." }, { status: 404 });
  }

  const action = process.env.NEXT_PUBLIC_WORLD_ACTION_SPEND ?? "creditz-spend-v1";
  const world = await verifyWorldProof(action, body.worldProof ?? {}, proof.invoice_nonce);
  if (!world.ok) {
    return json({ ok: false, error: world.error ?? "World ID spend proof required." }, { status: 401 });
  }

  const proofVerification = await verifySpendProof(proof);
  if (!proofVerification.ok) {
    return json(
      { ok: false, error: proofVerification.error ?? "Private balance-transition proof is invalid." },
      { status: 400 }
    );
  }

  try {
    const invoice = get<{
      paid_at: string | null;
      expires_at: number;
      amount: string;
      policy_id: string;
      asset: string;
      merchant_id: string;
    }>(
      "select paid_at, expires_at, amount, policy_id, asset, merchant_id from invoices where invoice_nonce = @invoice_nonce",
      { invoice_nonce: proof.invoice_nonce }
    );
    if (!invoice) throw new Error("Invoice does not exist.");
    if (invoice.paid_at) throw new Error("Invoice has already been paid.");
    if (invoice.expires_at < Math.floor(Date.now() / 1000)) throw new Error("Invoice is expired.");
    if (invoice.amount !== proof.amount) throw new Error("Invoice amount mismatch.");
    if (!equivalentField("policy", invoice.policy_id, proof.policy_id)) throw new Error("Invoice policy mismatch.");
    if (!equivalentField("asset", invoice.asset, proof.asset_id)) throw new Error("Invoice asset mismatch.");
    if (!equivalentField("merchant", invoice.merchant_id, proof.merchant_id)) throw new Error("Invoice merchant mismatch.");

    const merchant = get<{ merchant_address: string }>(
      "select merchant_address from merchants where merchant_id = @merchant_id and policy_id = @policy_id",
      {
        merchant_id: invoice.merchant_id,
        policy_id: invoice.policy_id
      }
    );
    if (!merchant) throw new Error("Merchant is not approved for this policy.");

    if (await nullifierSpent(proof.old_nullifier)) throw new Error("Nullifier has already been spent.");
    if (!(await commitmentExists(proof.old_commitment, userId))) throw new Error("Old commitment is not known for this user.");
    if (await commitmentExists(proof.new_commitment)) throw new Error("New commitment already exists.");

    await recordSpend({ userId, proof, merchantAddress: merchant.merchant_address });
    run("update invoices set paid_at = @paid_at where invoice_nonce = @invoice_nonce", {
      paid_at: new Date().toISOString(),
      invoice_nonce: proof.invoice_nonce
    });
  } catch (error) {
    return json({ ok: false, error: error instanceof Error ? error.message : String(error) }, { status: 409 });
  }

  return json({ ok: true, newCommitment: proof.new_commitment });
}
