import Link from "next/link";

import { SITE_PHONE_TEL_HREF } from "./site";

export default function CTABanner() {
  return (
    <section aria-labelledby="cta-heading" className="bg-navy-900 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-navy-950/80 px-6 py-12 shadow-2xl sm:px-12 sm:py-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 id="cta-heading" className="font-sans text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Έτοιμοι για ραντεβού ή ενημέρωση;
            </h2>
            <p className="mt-3 text-lg font-light text-navy-100">
              Καλέστε μας σήμερα για ραντεβού ή ενημέρωση — είμαστε εδώ για να λύσουμε το πρόβλημα του οχήματός σας γρήγορα
              και με επαγγελματισμό.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
            <a
              href={SITE_PHONE_TEL_HREF}
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-center text-base font-bold text-navy-900 transition hover:bg-navy-50"
            >
              Κάλεσε Τώρα
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 bg-transparent px-8 py-3.5 text-center text-base font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Κλείσε Ραντεβού
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
