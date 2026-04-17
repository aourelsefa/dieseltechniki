import Link from "next/link";

import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from "./site";

export default function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-navy-100 bg-white px-4 pb-14 pt-12 sm:px-6 sm:pb-24 sm:pt-20 md:pb-28 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-light bg-[length:48px_48px] sm:bg-[length:64px_64px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
      <div className="relative mx-auto max-w-3xl text-center sm:max-w-4xl">
        <p className="mb-4 inline-flex max-w-[min(100%,26rem)] flex-wrap items-center justify-center gap-x-1 gap-y-1 rounded-full border border-navy-200 bg-navy-50 px-3 py-1.5 text-[10px] font-medium uppercase leading-snug tracking-wide text-navy-800 sm:mb-5 sm:px-4 sm:text-sm">
          Συνεργείο αυτοκινήτων · Service · Ισχυρή εξειδίκευση diesel
        </p>
        <div className="mx-auto max-w-[19rem] sm:max-w-xl md:max-w-2xl lg:max-w-[40rem]">
          <h1
            id="hero-heading"
            className="text-pretty font-sans text-xl font-bold leading-snug tracking-normal text-navy-950 sm:text-2xl sm:leading-[1.4] md:text-3xl md:leading-tight lg:text-4xl"
          >
            Πλήρες service και επισκευή αυτοκινήτων — εμπειρία και αξιοπιστία
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-slate-600 sm:mt-8 sm:max-w-xl sm:text-[1.05rem] md:max-w-2xl md:text-lg">
          Σύγχρονο service με πολυετή εμπειρία· ιδιαίτερη τεχνογνωσία σε diesel και συστήματα υψηλής πίεσης.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <a
            href={SITE_PHONE_TEL_HREF}
            className="inline-flex min-h-[48px] w-full min-w-0 items-center justify-center rounded-lg bg-navy-900 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-navy-900/20 transition hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Κάλεσε Τώρα
          </a>
          <Link
            href="#contact"
            className="inline-flex min-h-[48px] w-full min-w-0 items-center justify-center rounded-lg border-2 border-navy-200 bg-white px-6 py-3.5 text-base font-bold text-navy-900 transition hover:border-navy-300 hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-400 sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Κλείσε Ραντεβού
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-500 sm:mt-8">
          Τηλέφωνο: <span className="font-medium text-navy-800">{SITE_PHONE_DISPLAY}</span>
        </p>
      </div>
    </section>
  );
}
