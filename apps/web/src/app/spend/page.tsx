"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { WorldIdButton } from "@/components/WorldIdButton";
import { apiFetch } from "@/lib/api-client";
import { loadLocalNote, randomNoteField, saveLocalNote, shortNoteId } from "@/lib/client-note";

type Invoice = {
  merchant_id: string;
  merchant_address: string;
  amount: string;
  asset: string;
  invoice_nonce: string;
  expires_at: number;
  policy_id: string;
};

export default function SpendPage() {
  const [userId, setUserId] = useState("");
  const [rawInvoice, setRawInvoice] = useState("");
  const [status, setStatus] = useState("Paste the merchant QR payload, then approve the World ID spend.");
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
    setStatus("Generating ProveKit balance proof...");
    const proofResponse = await apiFetch("/api/provekit/prove", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ note, invoice, newNonce })
    });
    const proofBody = await proofResponse.json();
    if (!proofResponse.ok) {
      setStatus(proofBody.error ?? "ProveKit proof generation failed.");
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
        <WorldIdButton
          action={process.env.NEXT_PUBLIC_WORLD_ACTION_SPEND ?? "creditz-spend-v1"}
          signal={invoice?.invoice_nonce ?? ""}
          label="Verify human and pay"
          onVerified={submitSpend}
        />
        <div className="status">{status}</div>
      </section>
    </AppShell>
  );
}
