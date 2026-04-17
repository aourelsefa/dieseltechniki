import Link from "next/link";

import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from "./site";

export default function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-navy-100 bg-white px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-light bg-[length:64px_64px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-flex items-center rounded-full border border-navy-200 bg-navy-50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-navy-800 sm:text-sm">
          Συνεργείο αυτοκινήτων · Service · Ισχυρή εξειδίκευση diesel
        </p>
        <h1
          id="hero-heading"
          className="font-sans text-3xl font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Πλήρες service και επισκευή αυτοκινήτων — εμπειρία και αξιοπιστία
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-600 sm:text-xl">
          Στο Diesel Techniki καλύπτουμε ολόκληρο το φάσμα της φροντίδας του οχήματός σας, με σύγχρονο διαγνωστικό
          εξοπλισμό και τεκμηριωμένες λύσεις. Σε κινητήρες diesel και συστήματα υψηλής πίεσης διαθέτουμε ιδιαίτερη,
          αποδεδειγμένη τεχνογνωσία.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href={SITE_PHONE_TEL_HREF}
            className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-navy-900 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-navy-900/20 transition hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
          >
            Κάλεσε Τώρα
          </a>
          <Link
            href="#contact"
            className="inline-flex min-w-[200px] items-center justify-center rounded-lg border-2 border-navy-200 bg-white px-8 py-3.5 text-base font-bold text-navy-900 transition hover:border-navy-300 hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-400"
          >
            Κλείσε Ραντεβού
          </Link>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Τηλέφωνο: <span className="font-medium text-navy-800">{SITE_PHONE_DISPLAY}</span>
        </p>
      </div>
    </section>
  );
}
