import Image from "next/image";
import fs from "fs";
import path from "path";

function teamSrc(filename: string, fallback: string) {
  try {
    const p = path.join(process.cwd(), "public", "team", filename);
    if (fs.existsSync(p)) return `/team/${filename}`;
  } catch {}
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
                src={teamSrc("campbell-hendee.jpg", "/team/campbell-placeholder.svg")}
                alt="Team headshot"
                width={640}
                height={640}
                className="w-full aspect-square object-cover rounded-xl"
                priority
              />
            </div>
            <h2 className="text-xl font-semibold">Campbell Hendee</h2>
            <p className="text-slate-300 mt-2">Co‑founder. Ops and systems. Placeholder bio here.</p>
          </div>
          <div className="card-surface p-6">
            <div className="mb-4">
              <Image
                src={teamSrc("walker-deyo.jpg", "/team/walker-placeholder.svg")}
                alt="Team headshot"
                width={640}
                height={640}
                className="w-full aspect-square object-cover rounded-xl"
              />
            </div>
            <h2 className="text-xl font-semibold">Walker Deyo</h2>
            <p className="text-slate-300 mt-2">Co‑founder. Growth and product. Placeholder bio here.</p>
          </div>
        </div>
        <div className="mt-10">
          <a href="/book" className="btn-primary">Book a call</a>
        </div>
      </div>
    </main>
  );
}
