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
  // Premium variants (rounded-full, subtle glow)
  const basePrimary = `btn-primary ${focus}`;
  const baseSecondary = `btn-secondary ${focus}`;
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
