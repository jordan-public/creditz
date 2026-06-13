import { all } from "@/lib/server/db";
import { json, options } from "@/lib/server/http";

export const OPTIONS = options;

export async function GET() {
  return json({
    users: all("select id, world_nullifier_hash, deposit_public_key, created_at from users order by created_at desc"),
    commitments: all("select commitment, user_id, asset, policy_id, created_at from commitments order by created_at desc"),
    spentNullifiers: all("select nullifier, invoice_nonce, spent_at from spent_nullifiers order by spent_at desc"),
    merchants: all("select merchant_id, merchant_address, policy_id, display_name from merchants order by merchant_id"),
    invoices: all("select invoice_nonce, merchant_id, amount, asset, policy_id, expires_at, paid_at from invoices order by expires_at desc")
  });
}
