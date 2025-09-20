export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-slate-300">We respect your privacy. We only use the information you share to contact you and improve our services. We do not sell your data.</p>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">What we collect</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-300 space-y-2">
          <li>Contact details you submit (name, email, phone)</li>
          <li>Message content from forms and emails</li>
          <li>Basic analytics (page views, clicks) to improve the site</li>
        </ul>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">How we use it</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-300 space-y-2">
          <li>To respond to your inquiries and schedule consultations</li>
          <li>To improve our website and services</li>
          <li>To send important updates about our work (rarely)</li>
        </ul>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">Data retention</h2>
        <p className="mt-3 text-slate-300">We retain information only as long as needed to provide services and meet legal obligations. You can request deletion at any time.</p>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 text-slate-300">Questions? Email <a className="underline" href="mailto:campbellhendee@elevair.org,williamdeyo@elevair.org?subject=Privacy%20question">growth@elevair.org</a>.</p>
        <p className="mt-10 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
