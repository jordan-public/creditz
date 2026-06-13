const FIELD_MODULUS_BITS = 248n;
const FIELD_MODULUS = 21888242871839275222246405745257275088548364400416034343698204186575808495617n;

export const FIELD_IDS = {
  asset: {
    Credits: "1001"
  },
  policy: {
    "campus-cafeteria-v1": "2001"
  },
  merchant: {
    "campus-cafe-1": "3001"
  }
} as const;

export function fieldId(kind: keyof typeof FIELD_IDS, value: string) {
  const table = FIELD_IDS[kind] as Record<string, string>;
  return table[value] ?? value;
}

export function fieldValue(value: string | number | bigint) {
  if (typeof value === "bigint") return value;
  if (typeof value === "number") return BigInt(value);
  if (/^0x[0-9a-fA-F]+$/.test(value)) return BigInt(value);
  if (/^[0-9a-fA-F]{16,}$/.test(value)) return BigInt(`0x${value}`);
  return BigInt(value);
}

export function bytes32(value: string | number | bigint) {
  return `0x${fieldValue(value).toString(16).padStart(64, "0")}`;
}

export function fieldDecimal(value: string | number | bigint) {
  return fieldValue(value).toString();
}

export function randomFieldDecimal(bytes = 16) {
  const values = new Uint8Array(bytes);
  crypto.getRandomValues(values);
  let value = 0n;
  for (const next of values) value = (value << 8n) + BigInt(next);
  return (value % (1n << FIELD_MODULUS_BITS)).toString();
}

export function circuitHash(a: string | bigint, b: string | bigint, c: string | bigint, d: string | bigint, e: string | bigint) {
  const value =
    fieldValue(a) * 1315423911n +
    fieldValue(b) * 2654435761n +
    fieldValue(c) * 97531n +
    fieldValue(d) * 8191n +
    fieldValue(e);
  return bytes32(value % FIELD_MODULUS);
}

export function equivalentField(kind: keyof typeof FIELD_IDS, labeledValue: string, proofValue: string) {
  if (labeledValue === proofValue) return true;
  try {
    return fieldDecimal(fieldId(kind, labeledValue)) === fieldDecimal(proofValue);
  } catch {
    return false;
  }
}
