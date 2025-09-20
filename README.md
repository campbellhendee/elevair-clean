# Elevair — Next.js 14 + Tailwind Site

## Quick Start
1) npm install
2) npm run dev

## Deploy to your website (Vercel Git Integration)

We use Vercel’s native Git Integration (no GitHub Actions, no CLI tokens). Every push to `main` builds and deploys.

1) In Vercel Dashboard → New Project → Import Git Repository → pick this repo.
2) Framework: Next.js (auto-detected)
3) Project → Settings → Build & Output
	- Install Command: `npm ci`
	- Build Command: `next build`
	- Output Directory: `out`
	- Node.js Version: `20.x`
	- Ignored Build Step: leave blank
4) Add your custom domain in Project → Settings → Domains.

Environment variables (set in Vercel → Project → Settings → Environment Variables):
- NEXT_PUBLIC_SUPPORT_EMAIL
- NEXT_PUBLIC_CALENDLY_URL
- NEXT_PUBLIC_TALLY_URL (optional)
- NEXT_PUBLIC_GA_MEASUREMENT_ID
- NEXT_PUBLIC_PHONE (optional)

### Environment variables (optional)
Set in Vercel Project → Settings → Environment Variables. All are safe `NEXT_PUBLIC_*` and only used on the client:
- NEXT_PUBLIC_SUPPORT_EMAIL — Shown on the Contact page (default: growth@elevair.org)
- NEXT_PUBLIC_TALLY_URL — If set, embeds your Tally form on /contact
- NEXT_PUBLIC_GA_MEASUREMENT_ID — Enables Google Analytics tracking
- NEXT_PUBLIC_BRAND_COLOR — Hex color, with or without `#`

### Local production build (sanity check)
You can verify builds locally:
1) npm ci
2) npm run build

If that succeeds, Vercel will deploy fine.

### Custom domain
In Vercel, open your Project → Settings → Domains → Add `yourdomain.com`. Follow the DNS instructions provided by Vercel. Once DNS propagates, your site will be live at your domain.

### Verification after pushing to main
- Vercel build uses Node 20.x, `npm ci`, `next build`, outputs to `out`
- Production domain serves the new build
- /book loads inline Calendly if `NEXT_PUBLIC_CALENDLY_URL` is set
- /contact loads Tally if `NEXT_PUBLIC_TALLY_URL` is set
- Optional: /sitemap.xml and /robots.txt are present

### Troubleshooting
- Build fails on CI: open the workflow run logs in GitHub Actions. Most issues are missing secrets or env vars.
- Need Preview deployments: both Vercel Git Integration and the included workflow can be adjusted to deploy previews on PRs.
