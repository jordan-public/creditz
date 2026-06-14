"use client";

import { keccak256, stringToBytes } from "viem";
import type { LocalNote } from "./client-note";
import { bytes32, circuitHash, fieldId } from "./proof-ids";

export type InvoiceForProof = {
  merchant_id: string;
  amount: string;
  asset: string;
  invoice_nonce: string;
  expires_at: number;
  policy_id: string;
};

export type ProveKitProofEnvelope = {
  scheme: "provekit-noir-credit-spend-v1";
  circuit: "credit_spend";
  public_inputs_hash: string;
  proof: string;
  verification_key_hash?: string;
};

export type SpendProof = {
  mode: "provekit";
  old_commitment: string;
  old_nullifier: string;
  new_commitment: string;
  asset_id: string;
  policy_id: string;
  merchant_id: string;
  amount: string;
  invoice_nonce: string;
  expires_at: number;
  current_time_or_block_time: number;
  proof?: ProveKitProofEnvelope;
};

export type MiniAppProverInput = {
  note: LocalNote;
  invoice: InvoiceForProof;
  newNonce: string;
  statement: SpendProof;
  privateInputs: {
    ownerSecret: string;
    oldBalance: string;
    oldNonce: string;
    newNonce: string;
    merchantPolicyWitness: string;
  };
};

type BrowserProveKit = {
  prove: (input: MiniAppProverInput) => Promise<ProveKitProofEnvelope | string>;
};

declare global {
  interface Window {
    CreditzProveKit?: BrowserProveKit;
  }
}

function hashFields(fields: Array<string | number | bigint>) {
  return keccak256(stringToBytes(fields.map(String).join("|")));
}

function publicInputEntries(statement: SpendProof) {
  return [
    ["old_commitment", statement.old_commitment],
    ["old_nullifier", statement.old_nullifier],
    ["new_commitment", statement.new_commitment],
    ["asset_id", statement.asset_id],
    ["policy_id", statement.policy_id],
    ["merchant_id", statement.merchant_id],
    ["amount", statement.amount],
    ["invoice_nonce", statement.invoice_nonce],
    ["expires_at", statement.expires_at],
    ["current_time_or_block_time", statement.current_time_or_block_time]
  ] as const;
}

export function publicInputsHash(statement: SpendProof) {
  return hashFields(publicInputEntries(statement).map(([key, value]) => `${key}:${String(value)}`));
}

export function buildSpendStatement(note: LocalNote, invoice: InvoiceForProof, newNonce: string) {
  const newBalance = (BigInt(note.balance) - BigInt(invoice.amount)).toString();
  const statement: SpendProof = {
    mode: "provekit",
    old_commitment: note.commitment,
    old_nullifier: circuitHash(note.ownerSecret, note.nonce, invoice.invoice_nonce, 0n, 0n),
    new_commitment: circuitHash(note.ownerSecret, fieldId("asset", note.asset), newBalance, fieldId("policy", note.policyId), newNonce),
    asset_id: fieldId("asset", invoice.asset),
    policy_id: fieldId("policy", invoice.policy_id),
    merchant_id: fieldId("merchant", invoice.merchant_id),
    amount: invoice.amount,
    invoice_nonce: bytes32(invoice.invoice_nonce),
    expires_at: invoice.expires_at,
    current_time_or_block_time: Math.floor(Date.now() / 1000)
  };

  const expectedCommitment = circuitHash(note.ownerSecret, fieldId("asset", note.asset), note.balance, fieldId("policy", note.policyId), note.nonce);
  if (statement.old_commitment !== expectedCommitment) {
    throw new Error("Local note commitment does not match its private inputs.");
  }

  return { statement, nextNote: { balance: newBalance, nonce: newNonce, commitment: statement.new_commitment } };
}

export async function proveInMiniApp(note: LocalNote, invoice: InvoiceForProof, newNonce: string) {
  const { statement, nextNote } = buildSpendStatement(note, invoice, newNonce);
  const provider = window.CreditzProveKit;
  if (!provider) {
    throw new Error(
      "Mini App prover is selected, but no browser ProveKit provider is installed. Use PROVER_MODE=backend or load a browser-compatible prover as window.CreditzProveKit."
    );
  }

  const proofResult = await provider.prove({
    note,
    invoice,
    newNonce,
    statement,
    privateInputs: {
      ownerSecret: note.ownerSecret,
      oldBalance: note.balance,
      oldNonce: note.nonce,
      newNonce,
      merchantPolicyWitness: "1"
    }
  });
  const envelope = typeof proofResult === "string" ? (JSON.parse(proofResult) as ProveKitProofEnvelope) : proofResult;

  return {
    proof: {
      ...statement,
      proof: {
        ...envelope,
        scheme: "provekit-noir-credit-spend-v1" as const,
        circuit: "credit_spend" as const,
        public_inputs_hash: publicInputsHash(statement)
      }
    },
    nextNote
  };
}
