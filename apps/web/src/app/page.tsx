import { AppShell } from "@/components/AppShell";
import { appHref } from "@/lib/app-href";
import { BadgeCheck, Landmark, QrCode, ShieldCheck, WalletCards } from "lucide-react";

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
          <div className="action-groups">
            <div className="action-group">
              <span>User</span>
              <div className="actions">
                <a className="button primary" href={appHref("/register")}>
                  <BadgeCheck size={18} /> Register with World ID
                </a>
                <a className="button" href={appHref("/spend")}>
                  <ShieldCheck size={18} /> Spend privately
                </a>
              </div>
            </div>
            <div className="action-group">
              <span>Operations</span>
              <div className="actions">
                <a className="button" href={appHref("/issuer")}>
                  <WalletCards size={18} /> Reload credits
                </a>
                <a className="button" href={appHref("/merchant")}>
                  <QrCode size={18} /> Create invoice
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Campus cafe counter with private payment overlay" />
      </section>

      <section className="grid" aria-label="Demo flow">
        {[
          ["User: Register", "World ID registration stores only an app-scoped nullifier hash."],
          ["Operations: Reload", "Issuer creates a hidden balance commitment for a registered user without proving personhood."],
          ["Operations: Invoice", "Merchant creates a short-lived QR payload for an in-person purchase."],
          ["User: Spend", "Spend uses World ID plus the private balance proof, burns the old nullifier, and inserts a new hidden commitment."]
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
          Register, reload 25 Credits, create a 6.50 Credits campus cafe invoice, pay it once, then replay the same invoice
          to see DB-level nullifier and invoice protection reject it.
        </p>
      </section>
    </AppShell>
  );
}
