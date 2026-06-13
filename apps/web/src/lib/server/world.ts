export type WorldProof = {
  merkle_root?: string;
  nullifier_hash?: string;
  proof?: string;
  verification_level?: string;
  [key: string]: unknown;
};

export async function verifyWorldProof(action: string, proof: WorldProof, signal = "") {
  const appId = process.env.NEXT_PUBLIC_WORLD_APP_ID;
  const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
  const endpoint = process.env.WORLD_ID_VERIFY_ENDPOINT ?? "https://developer.worldcoin.org/api/v2/verify";

  if (!appId && demoMode) {
    return {
      ok: true,
      nullifierHash: proof.nullifier_hash ?? `demo-${action}-${Date.now()}`
    };
  }

  if (!appId) {
    return { ok: false, error: "NEXT_PUBLIC_WORLD_APP_ID is required outside demo mode." };
  }

  const response = await fetch(`${endpoint}/${appId}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...proof, action, signal })
  });

  const body = (await response.json().catch(() => ({}))) as { success?: boolean; code?: string; detail?: string };
  if (!response.ok || !body.success) {
    return { ok: false, error: body.detail ?? body.code ?? "World ID verification failed." };
  }

  return { ok: true, nullifierHash: proof.nullifier_hash };
}
