import { FaOilCan, FaStethoscope, FaCogs, FaWind } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { MdOutlineLocalCarWash } from "react-icons/md";

const services = [
  {
    title: "Επισκευή κινητήρων diesel",
    description:
      "Το σημείο όπου η εξειδίκευσή μας ξεχωρίζει: διάγνωση, ανακατασκευή και ρύθμιση κινητήρων diesel — common rail και κλασικά συστήματα — με έμφαση στην απόδοση και την κατανάλωση.",
    icon: FaCogs,
  },
  {
    title: "Επισκευή turbo",
    description:
      "Έλεγχος, επισκευή και αντικατάσταση turbo· σωστή ισορροπία πίεσης και ασφαλής λειτουργία για κάθε χρήση.",
    icon: FaWind,
  },
  {
    title: "Καθαρισμός μπεκ",
    description:
      "Καθαρισμός και ρύθμιση μπεκ υψηλής πίεσης για ομαλή λειτουργία, μείωση καπνού και σταθερή απόκριση στο γκάζι.",
    icon: MdCleaningServices,
  },
  {
    title: "Διαγνωστικός έλεγχος",
    description:
      "Πλήρης ηλεκτρονικός έλεγχος με σύγχρονα εργαλεία — εντοπισμός κωδικών σφαλμάτων και πρόληψη δαπανηρών βλαβών.",
    icon: FaStethoscope,
  },
  {
    title: "Αλλαγή λαδιών",
    description:
      "Αλλαγή λιπαντικών και φίλτρων σύμφωνα με τις προδιαγραφές του κατασκευαστή για μέγιστη προστασία του κινητήρα.",
    icon: FaOilCan,
  },
  {
    title: "Συντήρηση & service",
    description:
      "Προγραμματισμένη συντήρηση, έλεγχοι ασφαλείας και ολοκληρωμένο service για επιβατικά και επαγγελματικά οχήματα.",
    icon: MdOutlineLocalCarWash,
  },
] as const;

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="services-heading" className="font-sans text-3xl font-bold text-navy-950 sm:text-4xl">
            Υπηρεσίες
          </h2>
          <p className="mt-4 text-lg font-light text-slate-600">
            Από τη συντήρηση και το service μέχρι την απαιτητική επισκευή — με έμφαση εκεί που η τεχνική απαιτεί βαθιά γνώση
            (diesel, turbo, μπεκ).
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition hover:border-navy-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-800 transition group-hover:bg-navy-100">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-sans text-xl font-bold text-navy-950">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-slate-600">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
