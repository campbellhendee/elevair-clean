import { Bolt } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-slate-400">
        <div className="flex items-center gap-2"><Bolt className="h-4 w-4 text-cyan-400" /><span>Elevair</span></div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#proof" className="hover:text-white">Proof</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/book"
            aria-label="Book a call"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
          >
            Book a call
          </a>
          <span>© {new Date().getFullYear()} Elevair. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
