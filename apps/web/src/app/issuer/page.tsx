"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { apiFetch } from "@/lib/api-client";
import { loadLocalNote, makeCircuitCommitment, randomNoteField, saveLocalNote, shortNoteId } from "@/lib/client-note";

export default function IssuerPage() {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("25000000");
  const [policyId, setPolicyId] = useState("campus-cafeteria-v1");
  const [replaceNote, setReplaceNote] = useState(false);
  const [status, setStatus] = useState("Load 25 Credits for the registered local user. No issuer World ID proof is required.");

  useEffect(() => {
    setUserId(window.localStorage.getItem("creditz.user-id") ?? "");
  }, []);

  async function reload() {
    const asset = "Credits";
    const existingNote = replaceNote ? null : loadLocalNote();
    let parsedAmount = 0n;
    try {
      parsedAmount = BigInt(amount || "0");
    } catch {
      setStatus("Enter a valid Credits amount in minor units.");
      return;
    }
    if (parsedAmount <= 0n) {
      setStatus("Enter a positive Credits amount.");
      return;
    }
    if (existingNote && (existingNote.asset !== asset || existingNote.policyId !== policyId)) {
      setStatus("Existing local note uses a different asset or policy. Replace it or choose the matching policy.");
      return;
    }

    const ownerSecret = existingNote?.ownerSecret ?? randomNoteField();
    const nonce = randomNoteField();
    const nextBalance = existingNote ? (BigInt(existingNote.balance) + parsedAmount).toString() : amount;
    const commitment = makeCircuitCommitment(ownerSecret, asset, nextBalance, policyId, nonce);
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
    saveLocalNote({ ownerSecret, balance: nextBalance, nonce, commitment, asset, policyId, proofMode: "provekit" });
    setStatus(
      existingNote
        ? `Added ${amount} minor units. New private balance is stored only in this browser as note ${shortNoteId(commitment)}.`
        : `Created private note ${shortNoteId(commitment)} and stored the secret only in this browser.`
    );
  }

  return (
    <AppShell>
      <h1>Issuer reload</h1>
      <p className="lead">
        Create a private credit note commitment for a registered user. Issuer authorization is separate from World ID; for the
        MVP, the browser keeps the note secret.
      </p>
      <section className="panel form">
        <label>
          User ID
          <input value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="usr_..." />
        </label>
        <label>
          Amount in Credits minor units
          <input value={amount} onChange={(event) => setAmount(event.target.value)} inputMode="numeric" />
        </label>
        <label>
          Policy
          <select value={policyId} onChange={(event) => setPolicyId(event.target.value)}>
            <option value="campus-cafeteria-v1">campus-cafeteria-v1</option>
          </select>
        </label>
        <label className="check-row">
          <input type="checkbox" checked={replaceNote} onChange={(event) => setReplaceNote(event.target.checked)} />
          Replace existing local note instead of adding to it
        </label>
        <button className="primary" type="button" onClick={reload}>
          Reload credits
        </button>
        <div className="status">{status}</div>
      </section>
    </AppShell>
  );
}
