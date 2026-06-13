"use client";

import Image from "next/image";
import { useState } from "react";
import QRCode from "qrcode";
import { AppShell } from "@/components/AppShell";

export default function MerchantPage() {
  const [amount, setAmount] = useState("6500000");
  const [payload, setPayload] = useState("");
  const [qr, setQr] = useState("");
  const [status, setStatus] = useState("Create a short-lived invoice for 6.50 USDC.");

  async function createInvoice() {
    const response = await fetch("/api/merchant", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ merchantId: "campus-cafe-1", amount, asset: "USDC", ttlSeconds: 180 })
    });
    const body = await response.json();
    if (!response.ok) {
      setStatus(body.error ?? "Invoice creation failed.");
      return;
    }
    const nextPayload = JSON.stringify(body.invoice);
    setPayload(nextPayload);
    setQr(await QRCode.toDataURL(nextPayload, { margin: 1, width: 300 }));
    setStatus("Invoice ready. Paste or scan this payload on the spend screen.");
  }

  return (
    <AppShell>
      <h1>Merchant invoice</h1>
      <p className="lead">Campus Cafe creates an invoice with a nonce and expiry. The same invoice cannot be paid twice.</p>
      <section className="grid">
        <div className="panel form">
          <label>
            Amount in USDC minor units
            <input value={amount} onChange={(event) => setAmount(event.target.value)} inputMode="numeric" />
          </label>
          <button className="primary" type="button" onClick={createInvoice}>
            Create QR invoice
          </button>
          <div className="status">{status}</div>
          <label>
            QR payload
            <textarea value={payload} readOnly />
          </label>
        </div>
        <div className="panel qr">
          {qr ? (
            <Image src={qr} alt="Merchant invoice QR code" width={300} height={300} unoptimized />
          ) : (
            <span className="muted">QR appears here.</span>
          )}
        </div>
      </section>
    </AppShell>
  );
}
