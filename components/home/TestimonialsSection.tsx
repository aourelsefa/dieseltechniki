const reviews = [
  {
    name: "Νίκος Π.",
    role: "ΙΧ · Ford Transit",
    text: "Άμεση διάγνωση, σωστή τιμή και το van δούλεψε σαν καινούργιο. Συνεργείο που εμπιστεύομαι χωρίς δεύτερη σκέψη.",
    rating: 5,
  },
  {
    name: "Μαρία Κ.",
    role: "Επαγγελματικό · Mercedes Sprinter",
    text: "Επαγγελματικό service στο στόλο μας. Τηρούν χρονοδιαγράμματα και μας ενημερώνουν πριν από κάθε επιπλέον εργασία.",
    rating: 5,
  },
  {
    name: "Γιώργος Α.",
    role: "ΙΧ · BMW 320d",
    text: "Μετά τον καθαρισμό μπεκ και το service, η κατανάλωση έπεσε αισθητά. Ευγενικοί, καθαροί χώροι, σοβαρή δουλειά.",
    rating: 5,
  },
] as const;

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="testimonials-heading" className="font-sans text-3xl font-bold text-navy-950 sm:text-4xl">
            Αξιολογήσεις Πελατών
          </h2>
          <p className="mt-4 text-lg font-light text-slate-600">Η φήμη μας χτίζεται στη συνέπεια και στην ικανοποίηση κάθε πελάτη.</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-xl border border-navy-100 bg-slate-50/80 p-6 shadow-sm"
            >
              <div className="flex gap-1 text-navy-600" aria-label={`${review.rating} στα 5 αστέρια`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-light leading-relaxed text-slate-700">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-navy-100 pt-4">
                <p className="font-bold text-navy-950">{review.name}</p>
                <p className="text-sm text-slate-500">{review.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
