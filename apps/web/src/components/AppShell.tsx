import Link from "next/link";
import { CircleDollarSign } from "lucide-react";

const nav = [
  ["/register", "Register"],
  ["/issuer", "Issuer"],
  ["/merchant", "Merchant"],
  ["/spend", "Spend"],
  ["/debug", "Debug"]
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <header className="topbar">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <CircleDollarSign size={18} />
          </span>
          Creditz
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {nav.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="main">{children}</main>
    </div>
  );
}
