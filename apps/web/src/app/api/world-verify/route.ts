import { NextResponse } from "next/server";
import { verifyWorldProof } from "@/lib/server/world";

export async function POST(request: Request) {
  const body = (await request.json()) as { action?: string; signal?: string; proof?: Record<string, unknown> };
  if (!body.action || !body.proof) {
    return NextResponse.json({ ok: false, error: "Missing action or proof." }, { status: 400 });
  }

  const result = await verifyWorldProof(body.action, body.proof, body.signal ?? "");
  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}
