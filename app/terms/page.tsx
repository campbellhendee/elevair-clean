export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-4 text-slate-300">By using this website and engaging Elevair, you agree to these terms.</p>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">Services</h2>
        <p className="mt-3 text-slate-300">We provide strategy, implementation, and support for sales systems and automations. Deliverables and timelines will be agreed in writing.</p>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">Payments</h2>
        <p className="mt-3 text-slate-300">Fees and payment schedules are specified in proposals or invoices. Deposits are non-refundable once work begins.</p>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">Confidentiality</h2>
        <p className="mt-3 text-slate-300">We treat your data as confidential and only use it to deliver services. You agree to the same regarding our materials.</p>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">Limitations</h2>
        <p className="mt-3 text-slate-300">We do our best work, but outcomes depend on many factors. We don’t guarantee specific revenue results.</p>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 text-slate-300">Questions? Email <a className="underline" href="mailto:campbellhendee@elevair.org,williamdeyo@elevair.org?subject=Terms%20question">growth@elevair.org</a>.</p>
        <p className="mt-10 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
