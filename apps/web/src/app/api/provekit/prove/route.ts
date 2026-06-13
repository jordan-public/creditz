import { existsSync, mkdirSync, readFileSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { json, options } from "@/lib/server/http";
import { publicInputsHash, type SpendProof } from "@/lib/server/proof";
import { bytes32, circuitHash, fieldDecimal, fieldId } from "@/lib/proof-ids";

export const OPTIONS = options;

type ProveRequest = {
  note?: {
    ownerSecret?: string;
    balance?: string;
    nonce?: string;
    commitment?: string;
    asset?: string;
    policyId?: string;
  };
  invoice?: {
    merchant_id?: string;
    amount?: string;
    asset?: string;
    invoice_nonce?: string;
    expires_at?: number;
    policy_id?: string;
  };
  newNonce?: string;
};

function tomlString(value: string | number | bigint) {
  return `"${fieldDecimal(value)}"`;
}

function writeProverToml(path: string, statement: SpendProof, privateInputs: { ownerSecret: string; oldBalance: string; oldNonce: string; newNonce: string }) {
  const body = [
    `old_commitment = ${tomlString(statement.old_commitment)}`,
    `old_nullifier = ${tomlString(statement.old_nullifier)}`,
    `new_commitment = ${tomlString(statement.new_commitment)}`,
    `asset_id = ${tomlString(statement.asset_id)}`,
    `policy_id = ${tomlString(statement.policy_id)}`,
    `merchant_id = ${tomlString(statement.merchant_id)}`,
    `amount = "${statement.amount}"`,
    `invoice_nonce = ${tomlString(statement.invoice_nonce)}`,
    `expires_at = "${statement.expires_at}"`,
    `current_time_or_block_time = "${statement.current_time_or_block_time}"`,
    "",
    `owner_secret = ${tomlString(privateInputs.ownerSecret)}`,
    `old_balance = "${privateInputs.oldBalance}"`,
    `old_nonce = ${tomlString(privateInputs.oldNonce)}`,
    `new_nonce = ${tomlString(privateInputs.newNonce)}`,
    `merchant_policy_witness = "1"`,
    ""
  ].join("\n");
  writeFileSync(path, body);
}

function repoRoot() {
  const fromWorkspace = resolve(process.cwd(), "../..");
  return existsSync(resolve(fromWorkspace, "circuits/credit_spend/Nargo.toml")) ? fromWorkspace : process.cwd();
}

function runCommand(command: string, args: string[], cwd?: string) {
  const result = spawnSync(command, args, { cwd, encoding: "utf8", timeout: 120_000 });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || `${command} failed.`);
  return result;
}

function runProveKit(args: string[]) {
  runCommand(process.env.PROVEKIT_CLI ?? "provekit-cli", args);
}

function defaultBbBin(root: string) {
  const local = resolve(root, ".toolhome/.bb/bb");
  return existsSync(local) ? local : "bb";
}

function generateOnchainProof(
  statement: SpendProof,
  privateInputs: { ownerSecret: string; oldBalance: string; oldNonce: string; newNonce: string }
) {
  const root = repoRoot();
  const circuitDir = resolve(root, "circuits/credit_spend");
  const bb = process.env.BB_BIN ?? defaultBbBin(root);
  const nargo = process.env.NARGO_BIN ?? "nargo";
  const vkPath = resolve(root, process.env.BB_EVM_VK_PATH ?? "circuits/credit_spend/evm/vk");
  const bytecodePath = resolve(circuitDir, "target/credit_spend.json");
  if (!existsSync(vkPath)) throw new Error(`EVM verification key not found: ${vkPath}`);
  if (!existsSync(bytecodePath)) throw new Error(`Noir bytecode not found: ${bytecodePath}`);

  const id = `credit_spend_${randomUUID().replace(/-/g, "")}`;
  const inputPath = resolve(circuitDir, `${id}.toml`);
  const witnessName = `${id}_witness`;
  const witnessPath = resolve(circuitDir, `target/${witnessName}.gz`);
  const proofDir = resolve(root, ".data/bb", id);
  const proofPath = resolve(proofDir, "proof");
  mkdirSync(proofDir, { recursive: true });

  try {
    writeProverToml(inputPath, statement, privateInputs);
    runCommand(nargo, ["execute", "-p", id, witnessName], circuitDir);
    runCommand(
      bb,
      ["prove", "-b", bytecodePath, "-w", witnessPath, "-k", vkPath, "-o", proofDir, "-t", "evm", "--verify"],
      root
    );
    return `0x${readFileSync(proofPath).toString("hex")}`;
  } finally {
    for (const path of [inputPath, witnessPath]) {
      try {
        unlinkSync(path);
      } catch {}
    }
    try {
      rmSync(proofDir, { recursive: true, force: true });
    } catch {}
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as ProveRequest;
  const note = body.note;
  const invoice = body.invoice;
  if (!note?.ownerSecret || !note.balance || !note.nonce || !note.commitment || !note.asset || !note.policyId || !invoice?.amount || !invoice.asset || !invoice.policy_id || !invoice.merchant_id || !invoice.invoice_nonce || !invoice.expires_at || !body.newNonce) {
    return json({ ok: false, error: "Missing note, invoice, or new nonce for ProveKit proof generation." }, { status: 400 });
  }

  if (BigInt(note.balance) < BigInt(invoice.amount)) {
    return json({ ok: false, error: "Private note balance is insufficient." }, { status: 400 });
  }

  const newBalance = (BigInt(note.balance) - BigInt(invoice.amount)).toString();
  const statement: SpendProof = {
    mode: "provekit",
    old_commitment: note.commitment,
    old_nullifier: circuitHash(note.ownerSecret, note.nonce, invoice.invoice_nonce, 0n, 0n),
    new_commitment: circuitHash(note.ownerSecret, fieldId("asset", note.asset), newBalance, fieldId("policy", note.policyId), body.newNonce),
    asset_id: fieldId("asset", invoice.asset),
    policy_id: fieldId("policy", invoice.policy_id),
    merchant_id: fieldId("merchant", invoice.merchant_id),
    amount: invoice.amount,
    invoice_nonce: bytes32(invoice.invoice_nonce),
    expires_at: invoice.expires_at,
    current_time_or_block_time: Math.floor(Date.now() / 1000)
  };

  if (statement.old_commitment !== circuitHash(note.ownerSecret, fieldId("asset", note.asset), note.balance, fieldId("policy", note.policyId), note.nonce)) {
    return json({ ok: false, error: "Local note commitment does not match its private inputs." }, { status: 400 });
  }

  try {
    if (process.env.LEDGER_MODE === "onchain") {
      const proofHex = generateOnchainProof(statement, {
        ownerSecret: note.ownerSecret,
        oldBalance: note.balance,
        oldNonce: note.nonce,
        newNonce: body.newNonce
      });
      return json({
        ok: true,
        proof: {
          ...statement,
          proof: {
            scheme: "bb-ultrahonk-credit-spend-v1",
            circuit: "credit_spend",
            public_inputs_hash: publicInputsHash(statement),
            proof: proofHex
          }
        },
        nextNote: {
          balance: newBalance,
          nonce: body.newNonce,
          commitment: statement.new_commitment
        }
      });
    }

    const proverKey = process.env.PROVEKIT_PROVER_KEY;
    if (!proverKey) {
      return json({ ok: false, error: "PROVEKIT_PROVER_KEY is required for Mini App ProveKit spends." }, { status: 500 });
    }
    const proofDir = resolve(process.cwd(), process.env.PROVEKIT_PROOF_DIR ?? ".data/provekit");
    mkdirSync(proofDir, { recursive: true });
    const id = randomUUID();
    const inputPath = resolve(proofDir, `${id}.Prover.toml`);
    const proofPath = resolve(proofDir, `${id}.proof.np`);
    if (dirname(inputPath) !== proofDir || dirname(proofPath) !== proofDir) {
      throw new Error("Invalid ProveKit proof output path.");
    }

    writeProverToml(inputPath, statement, {
      ownerSecret: note.ownerSecret,
      oldBalance: note.balance,
      oldNonce: note.nonce,
      newNonce: body.newNonce
    });
    try {
      runProveKit(["prove", "-p", proverKey, "-i", inputPath, "-o", proofPath]);
    } finally {
      unlinkSync(inputPath);
    }

    return json({
      ok: true,
      proof: {
        ...statement,
        proof: {
          scheme: "provekit-noir-credit-spend-v1",
          circuit: "credit_spend",
          public_inputs_hash: publicInputsHash(statement),
          proof: proofPath
        }
      },
      nextNote: {
        balance: newBalance,
        nonce: body.newNonce,
        commitment: statement.new_commitment
      }
    });
  } catch (error) {
    return json({ ok: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
