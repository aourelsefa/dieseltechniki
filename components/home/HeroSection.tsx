import Image from "next/image";
import Link from "next/link";

import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from "./site";

export default function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[min(88vh,52rem)] flex-col justify-center overflow-hidden border-b border-navy-900/20 px-4 pb-14 pt-12 sm:px-6 sm:pb-24 sm:pt-20 md:min-h-[min(90vh,56rem)] md:pb-28 md:pt-24"
    >
      {/* Background photo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/thanos-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Readability overlay: dark gradient + slight vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/65 to-navy-950/90"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,transparent,rgba(12,21,38,0.5))]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl text-center sm:max-w-4xl">
        <p className="mb-4 inline-flex max-w-[min(100%,26rem)] flex-wrap items-center justify-center gap-x-1 gap-y-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase leading-snug tracking-wide text-white/95 backdrop-blur-sm sm:mb-5 sm:px-4 sm:text-sm">
          Συνεργείο αυτοκινήτων · Service · Ισχυρή εξειδίκευση diesel
        </p>
        <div className="mx-auto max-w-[19rem] sm:max-w-xl md:max-w-2xl lg:max-w-[40rem]">
          <h1
            id="hero-heading"
            className="text-pretty font-sans text-xl font-bold leading-snug tracking-normal text-white drop-shadow-sm sm:text-2xl sm:leading-[1.4] md:text-3xl md:leading-tight lg:text-4xl"
          >
            Πλήρες service και επισκευή αυτοκινήτων — εμπειρία και αξιοπιστία
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-navy-100/95 sm:mt-8 sm:max-w-xl sm:text-[1.05rem] md:max-w-2xl md:text-lg">
          Σύγχρονο service με πολυετή εμπειρία· ιδιαίτερη τεχνογνωσία σε diesel και συστήματα υψηλής πίεσης.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <a
            href={SITE_PHONE_TEL_HREF}
            className="inline-flex min-h-[48px] w-full min-w-0 items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-bold text-navy-900 shadow-lg shadow-black/20 transition hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Κάλεσε Τώρα
          </a>
          <Link
            href="#contact"
            className="inline-flex min-h-[48px] w-full min-w-0 items-center justify-center rounded-lg border-2 border-white/35 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Κλείσε Ραντεβού
          </Link>
        </div>
        <p className="mt-6 text-sm text-navy-200/95 sm:mt-8">
          Τηλέφωνο: <span className="font-medium text-white">{SITE_PHONE_DISPLAY}</span>
        </p>
      </div>
    </section>
  );
}
