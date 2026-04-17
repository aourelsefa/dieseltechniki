const stats = [
  {
    value: "47+",
    label: "Χρόνια εμπειρίας",
    sub: "Συνεπής παρουσία στο service και την επισκευή",
  },
  {
    value: "2.500+",
    label: "Ευχαριστημένοι πελάτες",
    sub: "Ιδιώτες & επαγγελματίες",
  },
  {
    value: "24–48ω",
    label: "Γρήγορη εξυπηρέτηση",
    sub: "Όπου είναι εφικτό",
  },
] as const;

export default function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 id="stats-heading" className="sr-only">
          Στοιχεία εμπιστοσύνης
        </h2>
        <div className="grid gap-8 rounded-2xl border border-navy-800/40 bg-navy-900 p-8 shadow-xl sm:grid-cols-3 sm:gap-0 sm:p-10 sm:divide-x sm:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:px-4">
              <p className="font-sans text-4xl font-bold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 font-sans text-lg font-bold text-white">{stat.label}</p>
              <p className="mt-1 text-sm font-light text-navy-200">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
