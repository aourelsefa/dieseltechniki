"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { href: "#top", label: "Αρχική" },
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#why-us", label: "Γιατί εμάς" },
  { href: "#testimonials", label: "Αξιολογήσεις" },
  { href: "#contact", label: "Επικοινωνία" },
] as const;

export default function SiteHeader() {
  const headerRowRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [headerHeight, setHeaderHeight] = useState(56);

  const closeMenu = () => {
    detailsRef.current?.removeAttribute("open");
  };

  useLayoutEffect(() => {
    const el = headerRowRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && detailsRef.current?.open) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header className="sticky top-0 z-[100] border-b border-navy-100 bg-white shadow-sm">
      <div
        ref={headerRowRef}
        className="relative mx-auto flex min-h-[3.5rem] max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:min-h-0 sm:px-6 sm:py-4"
      >
        <Link
          href="#top"
          className="relative z-[110] min-w-0 font-display text-lg font-semibold tracking-tight text-navy-950 sm:text-xl md:text-2xl"
          onClick={closeMenu}
        >
          Diesel<span className="text-navy-700"> Techniki</span>
        </Link>

        <nav aria-label="Κύρια πλοήγηση" className="font-headerNav hidden md:block">
          <ul className="flex flex-wrap items-center justify-end gap-1 lg:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2.5 py-2 text-sm font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-950 lg:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Native <details>/<summary>: reliable taps on Chrome + phones (no React overlay stacking) */}
        <details
          ref={detailsRef}
          className="mobile-nav-details relative z-[110] md:hidden"
          onToggle={(e) => {
            document.body.style.overflow = e.currentTarget.open ? "hidden" : "";
          }}
        >
          <summary
            className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-lg text-navy-800 [-webkit-tap-highlight-color:transparent] touch-manipulation transition hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500 [&::-webkit-details-marker]:hidden"
            aria-controls="mobile-navigation"
            aria-label="Μενού πλοήγησης"
          >
            {/* pointer-events-none so taps hit <summary> (some browsers mishandle SVG as target) */}
            <span className="pointer-events-none relative flex h-6 w-6 items-center justify-center">
              <FaBars className="mobile-nav-icon-menu absolute h-6 w-6" aria-hidden />
              <FaTimes className="mobile-nav-icon-close absolute h-6 w-6" aria-hidden />
            </span>
          </summary>

          <div
            className="fixed left-0 right-0 z-[80] cursor-default bg-navy-950/40 md:hidden"
            style={{ top: headerHeight, bottom: 0 }}
            aria-hidden
            onClick={closeMenu}
          />

          <nav
            id="mobile-navigation"
            className="font-headerNav fixed left-0 right-0 z-[90] max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto overscroll-contain border-b border-navy-100 bg-white shadow-lg md:hidden"
            style={{ top: headerHeight }}
            aria-label="Κύρια πλοήγηση — κινητό"
          >
            <ul className="flex flex-col px-2 py-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block min-h-[48px] rounded-lg px-4 py-3.5 text-base font-medium text-navy-800 transition hover:bg-navy-50 active:bg-navy-100"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
