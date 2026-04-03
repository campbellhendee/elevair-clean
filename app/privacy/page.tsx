export default function Privacy() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">Privacy Policy</h1>
          <p className="mt-6 text-slate-400 leading-relaxed">We respect your privacy. We only use the information you share to contact you and improve our services. We do not sell your data.</p>

          <h2 className="mt-10 font-heading text-xl font-bold text-white">What we collect</h2>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />Contact details you submit (name, email, phone)</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />Message content from forms and emails</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />Basic analytics (page views, clicks) to improve the site</li>
          </ul>

          <h2 className="mt-10 font-heading text-xl font-bold text-white">How we use it</h2>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />To respond to your inquiries and schedule consultations</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />To improve our website and services</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />To send important updates about our work (rarely)</li>
          </ul>

          <h2 className="mt-10 font-heading text-xl font-bold text-white">Data retention</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">We retain information only as long as needed to provide services and meet legal obligations. You can request deletion at any time.</p>

          <h2 className="mt-10 font-heading text-xl font-bold text-white">Contact</h2>
          <p className="mt-4 text-slate-400">Questions? Email <a className="text-indigo-400 hover:text-indigo-300 transition-colors" href="mailto:growth@elevair.org">growth@elevair.org</a>.</p>

          <p className="mt-12 text-xs text-slate-600">Last updated: April 2026</p>
        </div>
      </section>
    </main>
  );
}
