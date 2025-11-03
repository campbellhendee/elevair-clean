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
      <div className="container-section max-w-4xl">
        <div className="page-header text-left">
          <h1>About Elevair</h1>
          <p>We exist to fix slow follow‑ups and leaky funnels for owner‑led teams. Simple systems, fast results.</p>
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
        {/* Our Story (moved below team) */}
        <div className="card-surface p-6 mt-8">
          <h2 className="text-xl font-semibold">Our Story</h2>
          <p className="text-slate-300 mt-2">
            We’re high‑school friends building in Austin. Over the last four years
            we’ve worked hands‑on with AI—learning to code with models, prototyping
            nights and weekends, and turning experiments into tools that actually
            get used. Elevair is our way of giving owner‑led teams the same edge:
            faster follow‑ups, clean handoffs, and systems that quietly do the work.
          </p>
          <p className="text-slate-300 mt-3">
            We believe small teams should feel bigger than they are. If AI can save
            an hour of busywork, we’ll chase that hour—and give it back to your
            customers.
          </p>
        </div>
        </div>
        <div className="mt-10">
          <a href="/book" className="btn-primary">Book a call</a>
        </div>
      </div>
    </main>
  );
}
