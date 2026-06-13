"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { WorldIdButton } from "@/components/WorldIdButton";
import { apiFetch } from "@/lib/api-client";
import { randomHex } from "@/lib/client-note";

export default function RegisterPage() {
  const [depositPublicKey, setDepositPublicKey] = useState("");
  const [status, setStatus] = useState<{ type: "ok" | "error" | "info"; message: string }>({
    type: "info",
    message: "Create a local deposit key, then verify with World ID."
  });
  const [userId, setUserId] = useState<string | null>(null);

  function ensureDepositKey() {
    const key = depositPublicKey || randomHex(32);
    setDepositPublicKey(key);
    return key;
  }

  return (
    <AppShell>
      <h1>Register</h1>
      <p className="lead">World ID is the human binding. The backend stores the World nullifier hash and a deposit key only.</p>
      <section className="panel">
        <div className="form">
          <label>
            Deposit public key
            <input value={depositPublicKey} onChange={(event) => setDepositPublicKey(event.target.value)} />
          </label>
          <div className="actions">
            <button type="button" onClick={ensureDepositKey}>
              Generate key
            </button>
            <WorldIdButton
              action={process.env.NEXT_PUBLIC_WORLD_ACTION_REGISTER ?? "creditz-register-v1"}
              signal={depositPublicKey}
              label="Verify and register"
              onVerified={async (proof) => {
                const key = ensureDepositKey();
                const response = await apiFetch("/api/register", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ worldProof: proof, depositPublicKey: key })
                });
                const body = await response.json();
                if (!response.ok) {
                  setStatus({ type: "error", message: body.error ?? "Registration failed." });
                  return;
                }
                window.localStorage.setItem("creditz.user-id", body.userId);
                setUserId(body.userId);
                setStatus({ type: "ok", message: `Registered ${body.userId}.` });
              }}
            />
          </div>
          <div className={`status ${status.type === "ok" ? "ok" : status.type === "error" ? "error" : ""}`}>
            {status.message}
          </div>
          {userId && <p className="muted">Saved locally as <code>{userId}</code>.</p>}
        </div>
      </section>
    </AppShell>
  );
}
