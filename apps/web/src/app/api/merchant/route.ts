import { randomBytes } from "node:crypto";
import { get, run } from "@/lib/server/db";
import { json, options } from "@/lib/server/http";

export const OPTIONS = options;

export async function POST(request: Request) {
  const body = (await request.json()) as {
    merchantId?: string;
    amount?: string;
    asset?: string;
    ttlSeconds?: number;
  };

  if (!body.amount || BigInt(body.amount) <= 0n) {
    return json({ ok: false, error: "Amount must be positive." }, { status: 400 });
  }

  const merchant = get<{ merchant_id: string; merchant_address: string; policy_id: string; display_name: string }>(
    "select * from merchants where merchant_id = @merchant_id",
    { merchant_id: body.merchantId ?? "campus-cafe-1" }
  );
  if (!merchant) {
    return json({ ok: false, error: "Merchant is not approved." }, { status: 404 });
  }

  const invoice = {
    merchant_id: merchant.merchant_id,
    merchant_address: merchant.merchant_address,
    amount: body.amount,
    asset: body.asset ?? "USDC",
    invoice_nonce: randomBytes(16).toString("hex"),
    expires_at: Math.floor(Date.now() / 1000) + (body.ttlSeconds ?? 180),
    policy_id: merchant.policy_id
  };

  run(
    `insert into invoices(invoice_nonce, merchant_id, amount, asset, policy_id, expires_at)
     values (@invoice_nonce, @merchant_id, @amount, @asset, @policy_id, @expires_at)`,
    invoice
  );

  return json({ ok: true, invoice });
}
