import { NextResponse } from "next/server";
import { run } from "@/lib/server/db";
import { verifyWorldProof } from "@/lib/server/world";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    worldProof?: Record<string, unknown>;
    depositPublicKey?: string;
  };

  const action = process.env.NEXT_PUBLIC_WORLD_ACTION_REGISTER ?? "creditz-register-v1";
  const verification = await verifyWorldProof(action, body.worldProof ?? {}, body.depositPublicKey ?? "");
  if (!verification.ok || !verification.nullifierHash) {
    return NextResponse.json({ ok: false, error: verification.error ?? "World ID proof required." }, { status: 401 });
  }

  const userId = `usr_${String(verification.nullifierHash).slice(-12)}`;
  try {
    run(
      `insert into users(id, world_nullifier_hash, deposit_public_key, created_at)
       values (@id, @world_nullifier_hash, @deposit_public_key, @created_at)
       on conflict(world_nullifier_hash) do update set deposit_public_key = excluded.deposit_public_key`,
      {
        id: userId,
        world_nullifier_hash: String(verification.nullifierHash),
        deposit_public_key: body.depositPublicKey ?? null,
        created_at: new Date().toISOString()
      }
    );
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 409 });
  }

  return NextResponse.json({ ok: true, userId, worldNullifierHash: verification.nullifierHash });
}
