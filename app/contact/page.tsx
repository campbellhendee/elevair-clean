"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Prefer to share details before booking? Fill out this quick form and we'll get back to you within 24 hours.
          </p>
        </div>
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white shadow-lg">
          <iframe
            src="https://tally.so/embed/3xKjA5?alignLeft=1&hideTitle=1&transparentBackground=0&dynamicHeight=1"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact form"
            className="w-full"
          />
        </div>
      </div>
    </main>
  );
}