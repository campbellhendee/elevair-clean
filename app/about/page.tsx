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
        {/* Our Story */}
        <div className="card-surface p-6 mt-6">
          <h2 className="text-xl font-semibold">Our Story</h2>
          <p className="text-slate-300 mt-2">
            We’re high‑school friends and students living in Austin. Over the past
            four years we’ve worked hands‑on with AI and learned to code by
            collaborating with AI models. Elevair grew from a simple idea:
            help owner‑led businesses automate the boring stuff—faster follow‑ups,
            scheduling, and clean handoffs—so teams can focus on customers.
          </p>
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
        </div>
        <div className="mt-10">
          <a href="/book" className="btn-primary">Book a call</a>
        </div>
      </div>
    </main>
  );
}
