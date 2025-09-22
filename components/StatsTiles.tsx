export default function StatsTiles() {
  const stats = [
    { label: "AI Response", before: "Manual", after: "Instant" },
    { label: "Availability", before: "9-5", after: "24/7" },
    { label: "Training Data", before: "Generic", after: "Custom" }
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center transition-all duration-300 hover:bg-white/[0.04] hover:border-cyan-400/20"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <p className="text-sm font-medium text-slate-400 mb-2">{stat.label}</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl font-bold text-slate-300">{stat.before}</span>
            <span className="text-cyan-400 text-xl">→</span>
            <span className="text-2xl font-bold text-white">{stat.after}</span>
          </div>
        </div>
      ))}
    </div>
  );
}