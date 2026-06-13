import { json, options } from "@/lib/server/http";
import { verifyWorldProof } from "@/lib/server/world";

export const OPTIONS = options;

export async function POST(request: Request) {
  const body = (await request.json()) as { action?: string; signal?: string; proof?: Record<string, unknown> };
  if (!body.action || !body.proof) {
    return json({ ok: false, error: "Missing action or proof." }, { status: 400 });
  }

  const result = await verifyWorldProof(body.action, body.proof, body.signal ?? "");
  return json(result, { status: result.ok ? 200 : 400 });
}
