export default function StackDetails() {
  const items: Array<{
    name: string;
    what: string;
    get: string;
    why: string;
  }> = [
    {
      name: 'Elevair Hub (your CRM)',
      what: 'One place for every lead, note, and deal.',
      get: 'Easy pipeline view; timelines for each contact; tasks that keep your team moving.',
      why: 'Nothing slips. Anyone can see “who said what” and “what’s next.”',
    },
    {
      name: 'Elevair Flows (automations)',
      what: 'Prebuilt workflows that route new leads, send follow‑ups, and set reminders.',
      get: '“New lead” alerts, 5‑touch follow‑ups, stop rules when someone replies.',
      why: 'Speed + consistency = more booked calls without more staff.',
    },
    {
      name: 'Elevair Outreach (outbound)',
      what: 'A done‑for‑you cold email/DM engine.',
      get: 'Target lists, warmup, proven scripts, scheduled sends, replies into your calendar/CRM.',
      why: 'Daily pipeline of conversations with the right buyers.',
    },
    {
      name: 'Elevair Agent (AI)',
      what: 'A helpful assistant that answers inbound questions, drafts replies, and summarizes calls.',
      get: 'Instant answers on your site, faster email replies, action items after every call.',
      why: 'You look responsive 24/7 and fewer leads go cold.',
    },
    {
      name: 'Elevair Insight (analytics)',
      what: 'Simple funnel and revenue views (no fluff).',
      get: 'Leads, win rate, speed‑to‑lead, and what’s working.',
      why: 'You’ll know where to push for more revenue.',
    },
    {
      name: 'Elevair Schedule (scheduler)',
      what: 'Booking links and round‑robin routing.',
      get: 'Fewer back‑and‑forth emails; reminders and no‑show handling.',
      why: 'More meetings with less hassle.',
    },
    {
      name: 'Elevair Intake (forms)',
      what: 'Lead forms with spam protection and UTM capture.',
      get: 'Clean submissions, contact info, source tracking.',
      why: 'Better targeting and follow‑ups that convert.',
    },
    {
      name: 'Elevair Coach (call coach)',
      what: 'Call recording, transcripts, and next steps.',
      get: 'Key moments highlighted and “do this next” notes.',
      why: 'Reps get better fast; fewer deals dropped.',
    },
  ];
  return (
    <section id="stack" aria-labelledby="stack-title">
      <div className="mx-auto w-full max-w-6xl px-6 py-18 md:py-24">
        <h2 id="stack-title" className="text-3xl md:text-4xl font-bold tracking-tight">Elevair Stack</h2>
        <p className="text-slate-300 mt-2">Owner‑friendly tools that keep leads moving. Click to learn more.</p>
        <div className="mt-6 space-y-3">
          {items.map((it, idx) => (
            <details
              key={it.name}
              className="group rounded-2xl border border-white/10 bg-white/[.02] focus-within:ring-2 focus-within:ring-cyan-400/40"
              open={idx === 0}
            >
              <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3">
                <span className="font-semibold">{it.name}</span>
                <svg
                  className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-slate-300">
                <dl className="grid gap-4 md:grid-cols-3 md:gap-6">
                  <div>
                    <dt className="font-medium text-white">What it is</dt>
                    <dd>{it.what}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-white">What you get</dt>
                    <dd>{it.get}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-white">Why it matters</dt>
                    <dd>{it.why}</dd>
                  </div>
                </dl>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
