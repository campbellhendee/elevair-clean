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
    <section id="stack">
      <div className="mx-auto w-full max-w-6xl px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Elevair Stack</h2>
        <p className="text-slate-300 mt-2">Owner‑friendly tools that keep leads moving. Click to learn more.</p>
        <div className="mt-6 space-y-3">
          {items.map((it) => (
            <details key={it.name} className="rounded-2xl border border-white/10 bg-white/[.02]">
              <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between">
                <span className="font-semibold">{it.name}</span>
                <span className="text-sm text-slate-400">Learn more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300">
                <dl className="space-y-2">
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
