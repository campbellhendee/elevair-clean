"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const INPUT_CLASS =
  "bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/30 transition-all w-full";

interface InfoCard {
  label: string;
  content: React.ReactNode;
}

const INFO_CARDS: InfoCard[] = [
  {
    label: "Email Us",
    content: (
      <a
        href="mailto:growth@elevair.org"
        className="text-white text-sm hover:text-indigo-400 transition-colors"
      >
        growth@elevair.org
      </a>
    ),
  },
  {
    label: "Book a Call",
    content: (
      <Link
        href="/book"
        className="text-white text-sm hover:text-indigo-400 transition-colors"
      >
        Skip the form. Let&apos;s talk.
      </Link>
    ),
  },
  {
    label: "Response Time",
    content: (
      <p className="text-white text-sm">
        We respond to every inquiry within 24 hours.
      </p>
    ),
  },
  {
    label: "Based in",
    content: <p className="text-white text-sm">Austin, Texas</p>,
  },
];

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string) || "";
    const fromEmail = (fd.get("email") as string) || "";
    const phone = (fd.get("phone") as string) || "";
    const company = (fd.get("company") as string) || "";
    const message = (fd.get("message") as string) || "";

    const subject = encodeURIComponent("Consultation request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${fromEmail}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`
    );
    const href = `mailto:growth@elevair.org?subject=${subject}&body=${body}`;
    window.location.href = href;

    setTimeout(() => setSending(false), 1000);
  }

  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-10">
          {/* Left column — form */}
          <div className="md:col-span-3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400">
              Get in Touch
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">
              Let&apos;s talk about your business
            </h1>
            <p className="text-slate-400 mt-4 max-w-lg">
              Tell us about your business and what you&apos;re looking to
              automate. We&apos;ll get back to you within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 grid grid-cols-1 gap-5"
            >
              <div>
                <label className="block text-sm text-slate-400 font-medium mb-1.5">
                  Name
                </label>
                <input
                  name="name"
                  placeholder="Jane Smith"
                  className={INPUT_CLASS}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 font-medium mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  className={INPUT_CLASS}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 font-medium mb-1.5">
                  Phone
                </label>
                <input
                  name="phone"
                  placeholder="(555) 000-0000"
                  className={INPUT_CLASS}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 font-medium mb-1.5">
                  Company
                </label>
                <input
                  name="company"
                  placeholder="Acme Inc."
                  className={INPUT_CLASS}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 font-medium mb-1.5">
                  What would you like to automate?
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your current workflow and where things slow down..."
                  className={`${INPUT_CLASS} min-h-[140px] resize-y`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-3.5 font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Opening email client..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right column — info cards */}
          <div className="md:col-span-2 space-y-4 md:pt-14">
            {INFO_CARDS.map((card) => (
              <div
                key={card.label}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5"
              >
                <p className="text-xs font-mono tracking-wider uppercase text-indigo-400 mb-2">
                  {card.label}
                </p>
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
