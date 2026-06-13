"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { apiFetch } from "@/lib/api-client";
import { makeCircuitCommitment, randomNoteField, saveLocalNote } from "@/lib/client-note";

export default function IssuerPage() {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("25000000");
  const [policyId, setPolicyId] = useState("campus-cafeteria-v1");
  const [status, setStatus] = useState("Load 25 USDC credits for the registered local user.");

  useEffect(() => {
    setUserId(window.localStorage.getItem("creditz.user-id") ?? "");
  }, []);

  async function reload() {
    const ownerSecret = randomNoteField();
    const nonce = randomNoteField();
    const asset = "USDC";
    const commitment = makeCircuitCommitment(ownerSecret, asset, amount, policyId, nonce);
    const response = await apiFetch("/api/reload", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userId, commitment, amount, asset, policyId })
    });
    const body = await response.json();
    if (!response.ok) {
      setStatus(body.error ?? "Reload failed.");
      return;
    }
    saveLocalNote({ ownerSecret, balance: amount, nonce, commitment, asset, policyId, proofMode: "provekit" });
    setStatus(`Created private note ${commitment.slice(0, 18)}... and stored the secret only in this browser.`);
  }

  return (
    <AppShell>
      <h1>Issuer reload</h1>
      <p className="lead">Create a private credit note commitment for a registered user. For the MVP, the browser keeps the note secret.</p>
      <section className="panel form">
        <label>
          User ID
          <input value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="usr_..." />
        </label>
        <label>
          Amount in USDC minor units
          <input value={amount} onChange={(event) => setAmount(event.target.value)} inputMode="numeric" />
        </label>
        <label>
          Policy
          <select value={policyId} onChange={(event) => setPolicyId(event.target.value)}>
            <option value="campus-cafeteria-v1">campus-cafeteria-v1</option>
          </select>
        </label>
        <button className="primary" type="button" onClick={reload}>
          Reload credits
        </button>
        <div className="status">{status}</div>
      </section>
    </AppShell>
  );
}
