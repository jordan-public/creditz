import { CircleDollarSign } from "lucide-react";
import { appHref } from "@/lib/app-href";

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
        <a href={appHref("/")} className="brand">
          <span className="brand-mark">
            <CircleDollarSign size={18} />
          </span>
          Creditz
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <span className="nav-label">{group.label}</span>
              <div className="nav-links">
                {group.items.map(([href, label]) => (
                  <a key={href} href={appHref(href)}>
                    {label}
                  </a>
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
