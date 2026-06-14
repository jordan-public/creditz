import Link from "next/link";
import { CircleDollarSign } from "lucide-react";

const navGroups = [
  {
    label: "User",
    items: [
      ["/register", "Register"],
      ["/spend", "Spend"]
    ]
  },
  {
    label: "Operations",
    items: [
      ["/issuer", "Issuer"],
      ["/merchant", "Merchant"]
    ]
  },
  {
    label: "System",
    items: [["/debug", "Debug"]]
  }
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
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <span className="nav-label">{group.label}</span>
              <div className="nav-links">
                {group.items.map(([href, label]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </header>
      <main className="main">{children}</main>
    </div>
  );
}
