"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { WorldIdButton } from "@/components/WorldIdButton";
import { apiFetch } from "@/lib/api-client";
import { loadLocalNote, randomNoteField, saveLocalNote, shortNoteId } from "@/lib/client-note";
import { proveInMiniApp } from "@/lib/miniapp-prover";

type Invoice = {
  merchant_id: string;
  merchant_address: string;
  amount: string;
  asset: string;
  invoice_nonce: string;
  expires_at: number;
  policy_id: string;
};

const proverMode = process.env.NEXT_PUBLIC_PROVER_MODE === "miniapp" ? "miniapp" : "backend";

export default function SpendPage() {
  const [userId, setUserId] = useState("");
  const [rawInvoice, setRawInvoice] = useState("");
  const [status, setStatus] = useState("Paste the merchant QR payload, then approve the World ID spend.");
  const [balanceStatus, setBalanceStatus] = useState("Balance is stored only in this browser.");
  const invoice = useMemo(() => {
    try {
      return rawInvoice ? (JSON.parse(rawInvoice) as Invoice) : null;
    } catch {
      return null;
    }
  }, [rawInvoice]);

  useEffect(() => {
    setUserId(window.localStorage.getItem("creditz.user-id") ?? "");
  }, []);

  function showBalance() {
    const note = loadLocalNote();
    if (!note) {
      setBalanceStatus("No private note found in this browser.");
      return;
    }

    const major = BigInt(note.balance) / 1_000_000n;
    const minor = BigInt(note.balance) % 1_000_000n;
    setBalanceStatus(
      `${major}.${minor.toString().padStart(6, "0")} ${note.asset} available locally. Commitment ${shortNoteId(note.commitment)}.`
    );
  }

  async function submitSpend(worldProof: unknown) {
    const note = loadLocalNote();
    if (!note || !invoice) {
      setStatus("Missing local note or invoice.");
      return;
    }
    if (note.asset !== invoice.asset || note.policyId !== invoice.policy_id) {
      setStatus("Local note does not match invoice asset or policy.");
      return;
    }

    const oldBalance = BigInt(note.balance);
    const amount = BigInt(invoice.amount);
    if (oldBalance < amount) {
      setStatus("Private note balance is insufficient.");
      return;
    }

    const newNonce = randomNoteField();
    setStatus(proverMode === "miniapp" ? "Generating ProveKit balance proof in the Mini App..." : "Generating ProveKit balance proof...");

    let proofBody: {
      proof: {
        new_commitment: string;
      };
      nextNote: {
        balance: string;
        nonce: string;
        commitment: string;
      };
    };
    try {
      if (proverMode === "miniapp") {
        proofBody = await proveInMiniApp(note, invoice, newNonce);
      } else {
        const proofResponse = await apiFetch("/api/provekit/prove", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ note, invoice, newNonce })
        });
        const body = await proofResponse.json();
        if (!proofResponse.ok) {
          setStatus(body.error ?? "ProveKit proof generation failed.");
          return;
        }
        proofBody = body;
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "ProveKit proof generation failed.");
      return;
    }

    const proof = proofBody.proof;

    const response = await apiFetch("/api/spend", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userId, proof, worldProof })
    });
    const body = await response.json();
    if (!response.ok) {
      setStatus(body.error ?? "Spend failed.");
      return;
    }

    saveLocalNote({
      ...note,
      balance: proofBody.nextNote.balance,
      nonce: proofBody.nextNote.nonce,
      commitment: proofBody.nextNote.commitment,
      proofMode: "provekit"
    });
    setStatus(`Paid ${invoice.amount} minor units. New hidden commitment ${shortNoteId(proof.new_commitment)}.`);
  }

  return (
    <AppShell>
      <h1>Spend</h1>
      <p className="lead">The backend sees the invoice, nullifier, and new commitment. It does not receive the local remaining balance.</p>
      <section className="panel form">
        <label>
          User ID
          <input value={userId} onChange={(event) => setUserId(event.target.value)} />
        </label>
        <label>
          Merchant QR payload
          <textarea value={rawInvoice} onChange={(event) => setRawInvoice(event.target.value)} />
        </label>
        {invoice && (
          <div className="status ok">
            Invoice for {invoice.amount} {invoice.asset} at {invoice.merchant_id}, expires {new Date(invoice.expires_at * 1000).toLocaleTimeString()}.
          </div>
        )}
        <div className="inline-actions">
          <button type="button" onClick={showBalance}>
            Balance
          </button>
          <div className="status local-balance">{balanceStatus}</div>
        </div>
        <WorldIdButton
          action={process.env.NEXT_PUBLIC_WORLD_ACTION_SPEND ?? "creditz-spend-v1"}
          signal={invoice?.invoice_nonce ?? ""}
          label="Verify human and pay"
          onVerified={submitSpend}
        />
        <div className="status">{status}</div>
        <div className="status">Prover mode: {proverMode === "miniapp" ? "Mini App" : "Backend"}.</div>
      </section>
    </AppShell>
  );
}
