export default function FallbackForm({ email }: { email: string }) {
  const to = email || 'growth@elevair.org';
  return (
    <form action={`mailto:${to}`} method="post" encType="text/plain" className="mt-8 grid grid-cols-1 gap-3">
      <input name="name" placeholder="Name" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" />
      <input type="email" name="email" placeholder="Email" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" />
      <input name="phone" placeholder="Phone" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" />
      <input name="company" placeholder="Company" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" />
      <textarea name="message" placeholder="How do leads come in? Where do they stall?" className="rounded-md bg-white/5 border border-white/10 px-3 py-2 min-h-[120px]"></textarea>
      <button className="mt-2 inline-flex items-center justify-center rounded-md bg-cyan-400 px-4 py-2 font-semibold text-slate-900 hover:bg-cyan-300">Email us</button>
    </form>
  );
}
