"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { apiFetch } from "@/lib/api-client";

type DebugState = Record<string, Array<Record<string, unknown>>>;

export default function DebugPage() {
  const [state, setState] = useState<DebugState | null>(null);

  async function load() {
    const response = await apiFetch("/api/debug", { cache: "no-store" });
    setState(await response.json());
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <AppShell>
      <h1>Debug ledger</h1>
      <p className="lead">Public demo state: commitments, nullifiers, merchants, and invoices. Local note secrets are not shown here.</p>
      <button type="button" onClick={load}>
        Refresh
      </button>
      {state &&
        Object.entries(state).map(([name, rows]) => (
          <section className="panel" key={name} style={{ marginTop: 16 }}>
            <h2>{name}</h2>
            <div style={{ overflowX: "auto" }}>
              <table className="table">
                <thead>
                  <tr>
                    {Object.keys(rows[0] ?? { empty: "" }).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.length === 0 ? (
                    <tr>
                      <td>empty</td>
                    </tr>
                  ) : (
                    rows.map((row, index) => (
                      <tr key={index}>
                        {Object.values(row).map((value, valueIndex) => (
                          <td key={valueIndex}>{String(value ?? "")}</td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        ))}
    </AppShell>
  );
}
