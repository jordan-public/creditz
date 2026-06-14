"use client";

import { useEffect, useState } from "react";
import type { SignerRequest } from "@swype-org/deposit";
import { BlinkDepositButton, useBlinkDeposit } from "@swype-org/deposit/react";
import { AppShell } from "@/components/AppShell";
import { apiFetch } from "@/lib/api-client";
import { loadLocalNote, makeCircuitCommitment, randomNoteField, saveLocalNote, shortNoteId } from "@/lib/client-note";

const blinkChainId = Number(process.env.NEXT_PUBLIC_BLINK_CHAIN_ID ?? "84532");
const blinkToken = process.env.NEXT_PUBLIC_BLINK_TOKEN_ADDRESS ?? "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
const blinkTreasury = process.env.NEXT_PUBLIC_BLINK_TREASURY_ADDRESS ?? "";
const blinkMerchantId = process.env.NEXT_PUBLIC_BLINK_MERCHANT_ID;

async function blinkSigner(data: SignerRequest) {
  const response = await apiFetch("/api/sign-payment", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(body?.error ?? `Blink signer failed with HTTP ${response.status}.`);
  }
  return response.json();
}

function creditsMinorUnits(amount: string) {
  const trimmed = amount.trim();
  if (!/^\d+(\.\d{0,6})?$/.test(trimmed)) {
    throw new Error("Enter a dollar amount with up to 6 decimals.");
  }
  const [whole, fraction = ""] = trimmed.split(".");
  return (BigInt(whole) * 1_000_000n + BigInt(fraction.padEnd(6, "0"))).toString();
}

function amountNumber(amount: string) {
  const value = Number(amount);
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error("Enter a positive amount.");
  }
  return value;
}

export default function BuyPage() {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("25.00");
  const [policyId, setPolicyId] = useState("campus-cafeteria-v1");
  const [status, setStatus] = useState<{ type: "ok" | "error" | "info"; message: string }>({
    type: "info",
    message: "Deposit Base Sepolia USDC with Blink, then issue the same amount of private Credits."
  });
  const { status: blinkStatus, requestDeposit, displayMessage, error } = useBlinkDeposit({
    signer: blinkSigner,
    environment: "sandbox",
    merchantId: blinkMerchantId
  });

  useEffect(() => {
    setUserId(window.localStorage.getItem("creditz.user-id") ?? "");
  }, []);

  async function buyCredits() {
    if (!userId) {
      setStatus({ type: "error", message: "Register first so the Credits can be issued to your local user." });
      return;
    }
    if (!blinkTreasury) {
      setStatus({ type: "error", message: "Blink treasury address is not configured." });
      return;
    }

    let depositAmount: number;
    let minorUnits: string;
    try {
      depositAmount = amountNumber(amount);
      minorUnits = creditsMinorUnits(amount);
    } catch (caught) {
      setStatus({ type: "error", message: caught instanceof Error ? caught.message : "Invalid amount." });
      return;
    }

    setStatus({ type: "info", message: "Opening Blink payment flow..." });
    try {
      const result = await requestDeposit({
        amount: depositAmount,
        chainId: blinkChainId,
        address: blinkTreasury,
        token: blinkToken,
        reference: `creditz-buy-${Date.now()}`,
        metadata: { product: "creditz", userId, creditsMinorUnits: minorUnits }
      });

      if (!result.transfer?.id || !result.transfer.status) {
        setStatus({ type: "error", message: "Blink returned without a completed transfer ID." });
        return;
      }

      const asset = "Credits";
      const existingNote = loadLocalNote();
      if (existingNote && (existingNote.asset !== asset || existingNote.policyId !== policyId)) {
        setStatus({
          type: "error",
          message: "Existing local note uses a different asset or policy. Spend it first or use matching policy."
        });
        return;
      }

      const ownerSecret = existingNote?.ownerSecret ?? randomNoteField();
      const nonce = randomNoteField();
      const nextBalance = existingNote ? (BigInt(existingNote.balance) + BigInt(minorUnits)).toString() : minorUnits;
      const commitment = makeCircuitCommitment(ownerSecret, asset, nextBalance, policyId, nonce);
      const response = await apiFetch("/api/reload", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userId, commitment, amount: minorUnits, asset, policyId })
      });
      const body = await response.json();
      if (!response.ok) {
        setStatus({ type: "error", message: body.error ?? "Credits issuance failed after Blink payment." });
        return;
      }

      saveLocalNote({ ownerSecret, balance: nextBalance, nonce, commitment, asset, policyId, proofMode: "provekit" });
      setStatus({
        type: "ok",
        message: `Blink transfer ${result.transfer.id} ${result.transfer.status}. Issued ${minorUnits} Credits minor units into private note ${shortNoteId(commitment)}.`
      });
    } catch {
      setStatus({ type: "error", message: displayMessage ?? "Blink payment failed." });
    }
  }

  return (
    <AppShell>
      <h1>Buy Credits</h1>
      <p className="lead">
        Deposit USDC through Blink on Base Sepolia. When Blink reports the transfer complete, Creditz issues the same
        amount as private Credits using the regular issuer path.
      </p>
      <section className="panel form">
        <label>
          User ID
          <input value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="usr_..." />
        </label>
        <label>
          Amount in Credits
          <input value={amount} onChange={(event) => setAmount(event.target.value)} inputMode="decimal" />
        </label>
        <label>
          Policy
          <select value={policyId} onChange={(event) => setPolicyId(event.target.value)}>
            <option value="campus-cafeteria-v1">campus-cafeteria-v1</option>
          </select>
        </label>
        <div className="blink-button-wrap">
          <BlinkDepositButton
            onClick={buyCredits}
            disabled={blinkStatus === "signer-loading" || blinkStatus === "iframe-active"}
            loading={blinkStatus === "signer-loading"}
          />
        </div>
        <div className={`status ${status.type === "ok" ? "ok" : status.type === "error" ? "error" : ""}`}>
          {error ? displayMessage : status.message}
        </div>
        <p className="muted">
          Destination: Base Sepolia USDC to <code>{blinkTreasury || "not configured"}</code>
        </p>
      </section>
    </AppShell>
  );
}
