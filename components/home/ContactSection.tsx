import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import { SITE_MAPS_EMBED_SRC, SITE_MAPS_SHARE_URL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from "./site";

const ADDRESS_LINES = ["Ηρώς Κωνσταντοπούλου 114", "Ηλιούπολη, 16346"] as const;

const hours = [
  { day: "Δευτέρα – Παρασκευή", time: "08:30 – 17:00" },
  { day: "Σάββατο – Κυριακή", time: "Κλειστά" },
] as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-navy-100 bg-white px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="contact-heading" className="font-sans text-3xl font-bold text-navy-950 sm:text-4xl">
            Επικοινωνία
          </h2>
          <p className="mt-4 text-lg font-light text-slate-600">Επισκεφθείτε μας ή καλέστε για ραντεβού και ενημέρωση κόστους.</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div className="flex gap-4 rounded-xl border border-navy-100 bg-slate-50/60 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-100 text-navy-800">
                <FaPhone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-sans text-lg font-bold text-navy-950">Τηλέφωνο</h3>
                <a href={SITE_PHONE_TEL_HREF} className="mt-1 block text-lg font-medium text-navy-700 hover:underline">
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-navy-100 bg-slate-50/60 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-100 text-navy-800">
                <FaMapMarkerAlt className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-sans text-lg font-bold text-navy-950">Διεύθυνση</h3>
                <address className="mt-1 not-italic leading-relaxed text-slate-600">
                  {ADDRESS_LINES.map((line, i) => (
                    <span key={line}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={SITE_MAPS_SHARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-navy-700 underline decoration-navy-300 underline-offset-2 hover:text-navy-900"
                >
                  Άνοιγμα στο Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-navy-100 bg-slate-50/60 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-100 text-navy-800">
                <FaClock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-sans text-lg font-bold text-navy-950">Ωράριο λειτουργίας</h3>
                <ul className="mt-2 space-y-2 text-slate-600">
                  {hours.map((row) => (
                    <li key={row.day} className="flex justify-between gap-4 text-sm sm:text-base">
                      <span>{row.day}</span>
                      <span className="font-medium text-navy-900">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full bg-navy-50">
              <iframe
                title="Χάρτης Google Maps — Diesel Techniki"
                src={SITE_MAPS_EMBED_SRC}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="border-t border-navy-100 px-4 py-3 text-center text-sm text-slate-500">
              <a
                href={SITE_MAPS_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy-700 hover:underline"
              >
                Μεγαλύτερος χάρτης / οδηγίες στο Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
