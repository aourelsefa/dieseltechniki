import { FaAward, FaBolt, FaHandshake, FaShieldAlt } from "react-icons/fa";

const points = [
  {
    title: "Εξειδίκευση που μετράει στο diesel",
    text: "Σε κινητήρες diesel και συστήματα common rail η εμπειρία μας είναι το ανταγωνιστικό μας πλεονέκτημα — στοχευμένη επισκευή, όχι γενικές «λύσεις».",
    icon: FaAward,
  },
  {
    title: "Γρήγορη εξυπηρέτηση",
    text: "Οργανώνουμε τη δουλειά ώστε να μειώνουμε τον χρόνο ακινησίας του οχήματός σας, χωρίς συμβιβασμούς στην ποιότητα.",
    icon: FaBolt,
  },
  {
    title: "Αξιοπιστία & διαφάνεια",
    text: "Σας ενημερώνουμε για τη βλάβη, το κόστος και τις επιλογές πριν προχωρήσουμε — χωρίς κρυφές χρεώσεις.",
    icon: FaHandshake,
  },
  {
    title: "Σύγχρονος εξοπλισμός",
    text: "Διαγνωστικά εργαλεία και διαδικασίες που καλύπτουν τις απαιτήσεις των σύγχρονων οχημάτων — βενζίνη, diesel και υβριδικά.",
    icon: FaShieldAlt,
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="scroll-mt-24 border-y border-navy-800/30 bg-navy-900 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="why-heading" className="font-sans text-3xl font-bold text-white sm:text-4xl">
            Γιατί να μας επιλέξετε
          </h2>
          <p className="mt-4 text-lg font-light text-navy-100">
            Εμπειρία, ταχύτητα και σταθερή ποιότητα — για ιδιώτες και επαγγελματίες που θέλουν το όχημά τους σωστά στημένο,
            χωρίς συμβιβασμούς.
          </p>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <li
                key={point.title}
                className="relative flex gap-5 rounded-xl border border-white/10 bg-navy-950/50 p-6 sm:p-8"
              >
                <span
                  className="font-sans text-5xl font-bold leading-none text-white/[0.07] sm:absolute sm:right-6 sm:top-6 sm:text-6xl"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative min-w-0 flex-1">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white">{point.title}</h3>
                  <p className="mt-2 font-light text-navy-100/90">{point.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
