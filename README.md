# Elevair — Next.js 14 + Tailwind Site

## Quick Start
1) npm install
2) npm run dev

## Deploy to your website (Vercel)

You’ve got two easy paths. If you already use Vercel, Option A is the simplest.

### Option A — Vercel Git Integration (recommended)
1) Push this repo to GitHub (it already is if you’re reading on GitHub).
2) In Vercel Dashboard → New Project → Import Git Repository → pick this repo.
3) Framework will auto-detect (Next.js). Keep defaults and click Deploy.
4) Add your custom domain in Vercel → Settings → Domains.

That’s it. Every push to `main` will auto-deploy.

### Option B — GitHub Actions workflow (included)
This repo includes `.github/workflows/deploy-vercel.yml` which builds with `vercel build` and deploys with `vercel deploy --prebuilt` when you push to `main`.

Before it can run, add these GitHub repository secrets (Settings → Secrets and variables → Actions → New repository secret):
- VERCEL_TOKEN — Create in Vercel: Account Settings → Tokens → Create
- VERCEL_ORG_ID — In Vercel: Settings → General → find “ID” for your Team/Account
- VERCEL_PROJECT_ID — In Vercel: Project → Settings → General → “Project ID”

After adding those three secrets, push to `main` to trigger a deploy. The workflow will:
1) Install dependencies
2) Pull Vercel env metadata (`vercel pull`)
3) Build (`vercel build`)
4) Deploy to production (`vercel deploy --prebuilt --prod`)

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

### Troubleshooting
- Build fails on CI: open the workflow run logs in GitHub Actions. Most issues are missing secrets or env vars.
- Need Preview deployments: both Vercel Git Integration and the included workflow can be adjusted to deploy previews on PRs.
