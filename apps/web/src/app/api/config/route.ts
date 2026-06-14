import { json, options } from "@/lib/server/http";

export const OPTIONS = options;

export async function GET() {
  return json({
    proverMode: process.env.PROVER_MODE === "miniapp" ? "miniapp" : "backend"
  });
}
