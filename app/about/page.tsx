import Image from "next/image";
import fs from "fs";
import path from "path";

function teamSrc(base: string, fallback: string) {
  const exts = ["jpg", "jpeg", "png", "webp", "avif"] as const;
  for (const ext of exts) {
    try {
      const p = path.join(process.cwd(), "public", "team", `${base}.${ext}`);
      if (fs.existsSync(p)) return `/team/${base}.${ext}`;
    } catch {}
  }
  return fallback;
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="container-section max-w-5xl">
        <div className="page-header text-left">
          <h1>About Elevair</h1>
          <p>We help owner‑led teams accelerate follow‑ups and build connected pipelines. Simple systems, real growth.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card-surface p-6">
            <div className="mb-4">
              <Image
                src={teamSrc("campbell-hendee", "/team/campbell-placeholder.svg")}
                alt="Team headshot"
                width={640}
                height={640}
                className="w-full aspect-square object-cover rounded-xl"
                priority
                placeholder="blur"
                blurDataURL={BLUR}
                sizes="(min-width: 768px) 360px, 100vw"
              />
            </div>
            <h2 className="text-xl font-semibold">Campbell Hendee</h2>
            <p className="text-slate-300 mt-2">
              Co‑founder focused on ops, CRM, and automation. Currently taking a
              professional AI course from UT Austin’s McCombs School of Business
              and working toward a certificate. Builds simple, reliable systems
              that speed follow‑ups and keep pipelines moving.
            </p>
          </div>
          <div className="card-surface p-6">
            <div className="mb-4">
              <Image
                src={teamSrc("walker-deyo", "/team/walker-placeholder.svg")}
                alt="Team headshot"
                width={640}
                height={640}
                className="w-full aspect-square object-cover rounded-xl"
                placeholder="blur"
                blurDataURL={BLUR}
                sizes="(min-width: 768px) 360px, 100vw"
              />
            </div>
            <h2 className="text-xl font-semibold">Walker Deyo</h2>
            <p className="text-slate-300 mt-2">
              Co‑founder focused on growth and product. Four years working with
              AI and shipping real tools—learned to code by collaborating with
              AI models. Helps businesses convert more leads and automate the
              busywork.
            </p>
        </div>
        {/* Close team grid before Our Story to center below */}
        </div>
        {/* Our Story (moved below team) */}
        <div className="card-surface p-6 mt-8 max-w-4xl md:max-w-5xl mx-auto text-center relative">
          {/* Subtle glow background */}
          <div aria-hidden className="pointer-events-none absolute -inset-20 opacity-70">
            <div className="absolute inset-0 bg-[radial-gradient(600px_220px_at_50%_0%,rgba(34,211,238,.14),transparent_60%)]" />
          </div>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">Our Story</h2>
          <div aria-hidden className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <p className="text-slate-300 mt-3 leading-relaxed">
            We’re high‑school friends building in Austin. Over the last four years
            we’ve worked hands‑on with AI—learning to code with models, prototyping
            nights and weekends, and turning experiments into tools that actually
            get used. Elevair is our way of giving owner‑led teams the same edge:
            faster follow‑ups, clean handoffs, and systems that quietly do the work.
          </p>
          <p className="text-slate-300 mt-4 leading-relaxed">
            We believe small teams should feel bigger than they are. If AI can save
            an hour of busywork, we’ll chase that hour—and give it back to your
            customers.
          </p>
        </div>
        <div className="mt-10">
          <a href="/book" className="btn-primary">Book a call</a>
        </div>
      </div>
    </main>
  );
}
// Tiny blur placeholder (fast-embed SVG)
const BLUR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+PHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPScjMTExJy8+PC9zdmc+";
