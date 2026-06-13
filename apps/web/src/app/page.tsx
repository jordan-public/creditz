import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { BadgeCheck, Landmark, QrCode, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <AppShell>
      <section className="hero">
        <div>
          <h1>Human-bound private campus credits.</h1>
          <p>
            Creditz is a World Mini App MVP for reloadable meal-card credits. World ID binds each spend to the
            registered human, while a Noir/ProveKit balance transition keeps the remaining balance hidden.
          </p>
          <div className="actions">
            <Link className="button primary" href="/register">
              <BadgeCheck size={18} /> Register with World ID
            </Link>
            <Link className="button" href="/merchant">
              <QrCode size={18} /> Create invoice
            </Link>
            <Link className="button" href="/spend">
              <ShieldCheck size={18} /> Spend privately
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Campus cafe counter with private payment overlay" />
      </section>

      <section className="grid" aria-label="Demo flow">
        {[
          ["1. Verify", "World ID registration stores only an app-scoped nullifier hash."],
          ["2. Reload", "Issuer creates a hidden balance commitment for a registered user."],
          ["3. Invoice", "Merchant creates a short-lived QR payload for an in-person purchase."],
          ["4. Prove", "Spend burns the old nullifier and inserts a new hidden commitment."]
        ].map(([title, body]) => (
          <article className="card" key={title}>
            <h2>{title}</h2>
            <p className="muted">{body}</p>
          </article>
        ))}
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2>
          <Landmark size={20} /> Demo target
        </h2>
        <p className="muted">
          Register, reload 25 USDC, create a 6.50 USDC campus cafe invoice, pay it once, then replay the same invoice
          to see DB-level nullifier and invoice protection reject it.
        </p>
      </section>
    </AppShell>
  );
}
