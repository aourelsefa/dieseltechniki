import Link from "next/link";

const navItems = [
  { href: "#top", label: "Αρχική" },
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#why-us", label: "Γιατί εμείς" },
  { href: "#testimonials", label: "Αξιολογήσεις" },
  { href: "#contact", label: "Επικοινωνία" },
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-navy-950 sm:text-2xl"
        >
          Diesel<span className="text-navy-700"> Techniki</span>
        </Link>
        <nav aria-label="Κύρια πλοήγηση" className="font-headerNav">
          <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2.5 py-2 text-xs font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-950 sm:px-3 sm:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
