export type WorldVerificationPayload = {
  action: string;
  signal?: string;
  proof: Record<string, unknown>;
};

export async function verifyWorldId(payload: WorldVerificationPayload, appId: string, endpoint: string) {
  const response = await fetch(`${endpoint}/${appId}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...payload.proof, action: payload.action, signal: payload.signal ?? "" })
  });
  return response.json();
}
