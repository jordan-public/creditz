import { NextResponse } from "next/server";
import { get, run } from "@/lib/server/db";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    userId?: string;
    commitment?: string;
    amount?: string;
    asset?: string;
    policyId?: string;
  };

  if (!body.userId || !body.commitment || !body.amount || BigInt(body.amount) <= 0n) {
    return NextResponse.json({ ok: false, error: "Missing user, commitment, or positive amount." }, { status: 400 });
  }

  const user = get("select id from users where id = @id", { id: body.userId });
  if (!user) {
    return NextResponse.json({ ok: false, error: "User is not registered." }, { status: 404 });
  }

  try {
    run(
      `insert into commitments(commitment, user_id, asset, policy_id, created_at)
       values (@commitment, @user_id, @asset, @policy_id, @created_at)`,
      {
        commitment: body.commitment,
        user_id: body.userId,
        asset: body.asset ?? "USDC",
        policy_id: body.policyId ?? "campus-cafeteria-v1",
        created_at: new Date().toISOString()
      }
    );
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 409 });
  }

  return NextResponse.json({ ok: true, commitment: body.commitment });
}
