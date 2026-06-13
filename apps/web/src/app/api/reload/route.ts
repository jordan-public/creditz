import { get } from "@/lib/server/db";
import { json, options } from "@/lib/server/http";
import { recordReload } from "@/lib/server/ledger";

export const OPTIONS = options;

export async function POST(request: Request) {
  const body = (await request.json()) as {
    userId?: string;
    commitment?: string;
    amount?: string;
    asset?: string;
    policyId?: string;
  };

  if (!body.userId || !body.commitment || !body.amount || BigInt(body.amount) <= 0n) {
    return json({ ok: false, error: "Missing user, commitment, or positive amount." }, { status: 400 });
  }

  const user = get("select id from users where id = @id", { id: body.userId });
  if (!user) {
    return json({ ok: false, error: "User is not registered." }, { status: 404 });
  }

  try {
    await recordReload({
      commitment: body.commitment,
      userId: body.userId,
      amount: body.amount,
      asset: body.asset ?? "Credits",
      policyId: body.policyId ?? "campus-cafeteria-v1"
    });
  } catch (error) {
    return json({ ok: false, error: String(error) }, { status: 409 });
  }

  return json({ ok: true, commitment: body.commitment });
}
