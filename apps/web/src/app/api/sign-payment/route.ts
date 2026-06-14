import { createSign, randomUUID } from "node:crypto";
import { json, options } from "@/lib/server/http";

export const runtime = "nodejs";
export const OPTIONS = options;

const evmAddressPattern = /^0x[a-fA-F0-9]{40}$/;
const callbackSchemePattern = /^[a-zA-Z][a-zA-Z0-9+\-.]*$/;

function envPrivateKey() {
  const value = process.env.MERCHANT_PRIVATE_KEY;
  if (!value) {
    throw new Error("MERCHANT_PRIVATE_KEY is required.");
  }
  return value.replace(/\\n/g, "\n");
}

function expectedMerchantId() {
  const merchantId = process.env.BLINK_MERCHANT_ID ?? process.env.MERCHANT_ID;
  if (!merchantId) {
    throw new Error("BLINK_MERCHANT_ID or MERCHANT_ID is required.");
  }
  return merchantId;
}

function expectedChainId() {
  return Number(process.env.NEXT_PUBLIC_BLINK_CHAIN_ID ?? "84532");
}

function expectedToken() {
  return process.env.NEXT_PUBLIC_BLINK_TOKEN_ADDRESS ?? "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
}

function expectedTreasury() {
  const treasury = process.env.NEXT_PUBLIC_BLINK_TREASURY_ADDRESS ?? process.env.ADDRESS;
  if (!treasury) {
    throw new Error("NEXT_PUBLIC_BLINK_TREASURY_ADDRESS or ADDRESS is required.");
  }
  return treasury;
}

function signPayload(payload: string, privateKeyPem: string) {
  const signer = createSign("SHA256");
  signer.update(payload);
  signer.end();
  return signer.sign(privateKeyPem).toString("base64url");
}

function validationErrors(body: Record<string, unknown>) {
  const errors: string[] = [];
  const chainId = expectedChainId();
  const token = expectedToken();
  const treasury = expectedTreasury();

  if (!Number.isFinite(body.amount) || Number(body.amount) <= 0) {
    errors.push("amount must be a positive number.");
  }
  if (!Number.isInteger(body.chainId) || body.chainId !== chainId) {
    errors.push(`chainId must be ${chainId}.`);
  }
  if (typeof body.address !== "string" || !evmAddressPattern.test(body.address)) {
    errors.push("address must be a 0x-prefixed, 40-character hex string.");
  } else if (body.address.toLowerCase() !== treasury.toLowerCase()) {
    errors.push("address must match the configured Creditz treasury.");
  }
  if (typeof body.token !== "string" || !evmAddressPattern.test(body.token)) {
    errors.push("token must be a 0x-prefixed, 40-character hex contract address.");
  } else if (body.token.toLowerCase() !== token.toLowerCase()) {
    errors.push(`token must be ${token}.`);
  }
  if (body.callbackScheme !== null && body.callbackScheme !== undefined) {
    if (typeof body.callbackScheme !== "string" || !callbackSchemePattern.test(body.callbackScheme)) {
      errors.push("callbackScheme must be null or a valid URI scheme.");
    }
  }
  if (body.version !== undefined && (typeof body.version !== "string" || body.version.length === 0)) {
    errors.push("version must be a non-empty string.");
  }

  return errors;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: "Request body must be JSON." }, { status: 400 });
  }

  let merchantId: string;
  let privateKeyPem: string;
  let errors: string[];
  try {
    merchantId = expectedMerchantId();
    privateKeyPem = envPrivateKey();
    errors = validationErrors(body);
  } catch (error) {
    return json({ error: String(error) }, { status: 500 });
  }

  if (errors.length > 0) {
    return json({ error: errors.join(" ") }, { status: 400 });
  }

  const amount = Number(body.amount);
  const chainId = Number(body.chainId);
  const address = String(body.address);
  const token = String(body.token);
  const callbackScheme = body.callbackScheme === undefined ? null : (body.callbackScheme as string | null);
  const version = typeof body.version === "string" ? body.version : "v1";
  const idempotencyKey = randomUUID();
  const signatureTimestamp = new Date().toISOString();

  const payloadObject = {
    amount,
    chainId,
    address,
    token,
    idempotencyKey,
    callbackScheme,
    signatureTimestamp,
    version
  };
  const payload = Buffer.from(JSON.stringify(payloadObject), "utf8").toString("base64url");
  let signature: string;
  try {
    signature = signPayload(payload, privateKeyPem);
  } catch {
    return json({ error: "Failed to sign Blink payment payload." }, { status: 500 });
  }

  return json(
    {
      merchantId,
      payload,
      signature,
      preview: { amount, chainId, address, token, idempotencyKey }
    },
    { headers: { "cache-control": "no-store" } }
  );
}
