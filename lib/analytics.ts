export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

export function track(event: string, params: Record<string, any> = {}) {
  if (!GA_ID) return;
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', event, params);
  }
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
