'use client';
import Link from 'next/link';
import { trackBookClick } from '../lib/analytics';

export type CTAPlacement = 'header'|'hero'|'hero-proof'|'section'|'sticky'|'footer'|'thanks';

type Props = {
  href: string;
  children: React.ReactNode;
  placement: CTAPlacement;
  variant?: 'primary'|'secondary';
  className?: string;
};

export default function CTAButton({ href, children, placement, variant='primary', className }: Props) {
  const focus = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';
  const basePrimary =
    `inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-slate-900 font-semibold hover:bg-cyan-300 transition ${focus}`;
  const baseSecondary =
    `inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-white hover:bg-white/5 ${focus}`;
  const cls = `${variant === 'primary' ? basePrimary : baseSecondary}${className ? ' ' + className : ''}`;
  return (
    <Link
      href={href}
      className={cls}
      data-placement={placement}
      onClick={() => trackBookClick(placement)}
    >
      {children}
    </Link>
  );
}
