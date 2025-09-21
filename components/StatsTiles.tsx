export default function StatsTiles() {
  const stats = [
    { label: "Reply time", before: "12h", after: "5m" },
    { label: "Bookings per week", before: "8", after: "19" },
    { label: "Show-up rate", before: "62%", after: "81%" }
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