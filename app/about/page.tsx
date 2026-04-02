import Image from "next/image";
import fs from "fs";
import path from "path";
import Link from "next/link";

function teamSrc(base: string, fallback: string): string {
  const exts = ["jpg", "jpeg", "png", "webp", "avif"] as const;
  for (const ext of exts) {
    try {
      const p = path.join(process.cwd(), "public", "team", `${base}.${ext}`);
      if (fs.existsSync(p)) return `/team/${base}.${ext}`;
    } catch {}
  }
  return fallback;
}

const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+PHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPScjMTExJy8+PC9zdmc+";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-5 h-px bg-indigo-500" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400">
              Our Team
            </span>
            <span className="w-5 h-px bg-indigo-500" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Two Founders. Zero Fluff.
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            We build AI automation for businesses. No outsourcing, no layers
            &mdash; when you work with Elevair, you work directly with us.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Campbell */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] overflow-hidden">
            <Image
              src={teamSrc("campbell-hendee", "/team/campbell-placeholder.svg")}
              alt="Campbell Hendee"
              width={640}
              height={480}
              className="w-full aspect-[4/3] object-cover"
              priority
              placeholder="blur"
              blurDataURL={BLUR}
              sizes="(min-width: 768px) 480px, 100vw"
            />
            <div className="p-8">
              <h2 className="font-heading text-2xl font-bold text-white">
                Campbell Hendee
              </h2>
              <p className="text-sm font-medium text-indigo-400 mt-1">
                Co-founder &middot; Operations &amp; Automation
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                Focused on CRM systems, workflow automation, and building
                infrastructure that runs without manual intervention. Currently
                completing a professional AI certificate at UT Austin&apos;s
                McCombs School of Business.
              </p>
            </div>
          </div>

          {/* Walker */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] overflow-hidden">
            <Image
              src={teamSrc("walker-deyo", "/team/walker-placeholder.svg")}
              alt="Walker Deyo"
              width={640}
              height={480}
              className="w-full aspect-[4/3] object-cover"
              placeholder="blur"
              blurDataURL={BLUR}
              sizes="(min-width: 768px) 480px, 100vw"
            />
            <div className="p-8">
              <h2 className="font-heading text-2xl font-bold text-white">
                Walker Deyo
              </h2>
              <p className="text-sm font-medium text-indigo-400 mt-1">
                Co-founder &middot; Growth &amp; Product
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                Four years hands-on with AI. Learned to code by working directly
                with AI models and shipping real products. Specializes in lead
                conversion and building automation that businesses actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] p-10 md:p-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-5 h-px bg-indigo-500" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400">
                Our Story
              </span>
              <span className="w-5 h-px bg-indigo-500" />
            </div>
            <p className="text-slate-400 leading-relaxed">
              High school friends building in Austin. Over the last four years,
              we&apos;ve been deep in AI &mdash; prototyping on nights and
              weekends, turning experiments into real tools that teams actually
              use.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              Elevair exists because we kept seeing the same problem: small teams
              drowning in manual follow-ups, missed calls, and leads going cold.
              We knew AI could fix that. So we built the systems.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              When you work with Elevair, there&apos;s no account manager, no
              offshore team, no runaround. You get us &mdash; building,
              optimizing, and picking up the phone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
          Want to see what we&apos;d build for you?
        </h2>
        <Link
          href="/onboarding.html"
          className="mt-8 inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-4 font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
