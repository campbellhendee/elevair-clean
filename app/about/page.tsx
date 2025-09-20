export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Elevair</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">We exist to fix slow follow‑ups and leaky funnels for owner‑led teams. Simple systems, fast results.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
            <h2 className="text-xl font-semibold">Campbell Hendee</h2>
            <p className="text-slate-300 mt-2">Co‑founder. Ops and systems. Placeholder bio here.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
            <h2 className="text-xl font-semibold">Walker Deyo</h2>
            <p className="text-slate-300 mt-2">Co‑founder. Growth and product. Placeholder bio here.</p>
          </div>
        </div>
        <div className="mt-10">
          <a href="/book" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-slate-900 font-semibold hover:bg-cyan-300 transition">Book a free consultation</a>
        </div>
      </div>
    </main>
  );
}
