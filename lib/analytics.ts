// lib/analytics.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

export function initGA() {
  if (!GA_ID) return;
  // GA snippet is injected in layout via <Script>
}

export function track(event: string, params: Record<string, any> = {}) {
  if (!GA_ID) return;
  // @ts-ignore
  if (typeof window !== 'undefined') window.gtag?.('event', event, params);
}

export function trackBookClick(placement: string) {
  track('book_click', { placement });
}

export function getUTMSearch(): string {
  if (typeof window === 'undefined') return '';
  const qs = window.location.search;
  return qs && qs.length > 0 ? qs : '';
}

export function brandColorNoHash(): string {
  const c = (process.env.NEXT_PUBLIC_BRAND_COLOR ?? '').trim();
  return c.startsWith('#') ? c.slice(1) : c;
}
