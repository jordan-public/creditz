#!/usr/bin/env node
import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

function fail(message) {
  console.error(message);
  process.exit(1);
}

function run(command, args) {
  const result = spawnSync(command, args, { encoding: "utf8" });
  if (result.error) fail(result.error.message);
  if (result.status !== 0) fail(result.stderr || result.stdout || `${command} ${args.join(" ")} failed`);
  return result.stdout;
}

function normalize(value) {
  const text = String(value);
  if (/^0x[0-9a-fA-F]+$/.test(text)) {
    return `0x${text.slice(2).padStart(64, "0").toLowerCase()}`;
  }
  if (/^\d+$/.test(text)) {
    return `0x${BigInt(text).toString(16).padStart(64, "0")}`;
  }
  return text;
}

function parsePublicInputs(output) {
  const inputs = new Map();
  for (const line of output.split("\n")) {
    const match = line.match(/^\s*([a-zA-Z_][a-zA-Z0-9_]*)(?:\s+\([^)]*\))?:\s+(0x[0-9a-fA-F]+)/);
    if (match) inputs.set(match[1], normalize(match[2]));
  }
  return inputs;
}

let raw = "";
process.stdin.setEncoding("utf8");
for await (const chunk of process.stdin) raw += chunk;

const { statement, proof } = JSON.parse(raw);
const cli = process.env.PROVEKIT_CLI ?? "provekit-cli";
const verifierKey = process.env.PROVEKIT_VERIFIER_KEY;
const proofPath = proof?.proof;

if (!verifierKey) fail("PROVEKIT_VERIFIER_KEY is required.");
if (!proofPath) fail("Proof envelope must include proof path.");
if (!existsSync(verifierKey)) fail(`Verifier key not found: ${verifierKey}`);
if (!existsSync(proofPath)) fail(`Proof file not found: ${proofPath}`);

const publicInputs = parsePublicInputs(run(cli, ["show-inputs", "--hex", verifierKey, proofPath]));
for (const key of [
  "old_commitment",
  "old_nullifier",
  "new_commitment",
  "asset_id",
  "policy_id",
  "merchant_id",
  "amount",
  "invoice_nonce",
  "expires_at",
  "current_time_or_block_time"
]) {
  const actual = publicInputs.get(key);
  const expected = normalize(statement[key]);
  if (actual !== expected) {
    fail(`Public input mismatch for ${key}: expected ${expected}, got ${actual ?? "<missing>"}`);
  }
}

run(cli, ["verify", "-v", verifierKey, "--proof", proofPath]);
