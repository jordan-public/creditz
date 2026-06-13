import { NextResponse } from "next/server";
import { get, run, transaction } from "@/lib/server/db";
import { verifySpendProof, type SpendProof } from "@/lib/server/proof";
import { verifyWorldProof } from "@/lib/server/world";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    userId?: string;
    proof?: SpendProof;
    worldProof?: Record<string, unknown>;
  };

  if (!body.userId || !body.proof) {
    return NextResponse.json({ ok: false, error: "Missing user or private spend proof." }, { status: 400 });
  }
  const userId = body.userId;
  const proof = body.proof;

  const user = get<{ world_nullifier_hash: string }>("select world_nullifier_hash from users where id = @id", {
    id: userId
  });
  if (!user) {
    return NextResponse.json({ ok: false, error: "User is not registered." }, { status: 404 });
  }

  const action = process.env.NEXT_PUBLIC_WORLD_ACTION_SPEND ?? "creditz-spend-v1";
  const world = await verifyWorldProof(action, body.worldProof ?? {}, proof.invoice_nonce);
  if (!world.ok) {
    return NextResponse.json({ ok: false, error: world.error ?? "World ID spend proof required." }, { status: 401 });
  }

  if (!verifySpendProof(proof)) {
    return NextResponse.json({ ok: false, error: "Private balance-transition proof is invalid." }, { status: 400 });
  }

  try {
    transaction(() => {
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
      if (invoice.policy_id !== proof.policy_id) throw new Error("Invoice policy mismatch.");
      if (invoice.asset !== proof.asset_id) throw new Error("Invoice asset mismatch.");
      if (invoice.merchant_id !== proof.merchant_id) throw new Error("Invoice merchant mismatch.");

      const merchant = get(
        "select merchant_id from merchants where merchant_id = @merchant_id and policy_id = @policy_id",
        {
          merchant_id: proof.merchant_id,
          policy_id: proof.policy_id
        }
      );
      if (!merchant) throw new Error("Merchant is not approved for this policy.");

      const commitment = get("select commitment from commitments where commitment = @commitment", {
        commitment: proof.old_commitment
      });
      if (!commitment) throw new Error("Old commitment is not known.");

      run(
        `insert into spent_nullifiers(nullifier, invoice_nonce, spent_at)
         values (@nullifier, @invoice_nonce, @spent_at)`,
        {
          nullifier: proof.old_nullifier,
          invoice_nonce: proof.invoice_nonce,
          spent_at: new Date().toISOString()
        }
      );
      run(
        `insert into commitments(commitment, user_id, asset, policy_id, created_at)
         values (@commitment, @user_id, @asset, @policy_id, @created_at)`,
        {
          commitment: proof.new_commitment,
          user_id: userId,
          asset: proof.asset_id,
          policy_id: proof.policy_id,
          created_at: new Date().toISOString()
        }
      );
      run("update invoices set paid_at = @paid_at where invoice_nonce = @invoice_nonce", {
        paid_at: new Date().toISOString(),
        invoice_nonce: proof.invoice_nonce
      });
    });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : String(error) }, { status: 409 });
  }

  return NextResponse.json({ ok: true, newCommitment: proof.new_commitment });
}
