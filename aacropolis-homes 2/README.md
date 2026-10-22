# Aacropolis Homes: headless Wix frontend on GitHub Pages

Next.js (App Router, TypeScript) static export of https://www.aacropolishomes.com.
Wix is the content backend (Blog via the Wix headless SDK); GitHub Actions builds the site
and publishes it to GitHub Pages.

## Go live (one-time setup)
1. Push this folder's contents to the **root** of your repo (`package.json` at top level).
2. Repo **Settings > Pages > Build and deployment > Source: GitHub Actions**.
3. (Optional, for Wix blog) **Settings > Secrets and variables > Actions > Variables**:
   - `WIX_CLIENT_ID` = your Wix Headless OAuth client ID
     (Wix dashboard > Settings > Headless Settings). This ID is public by design, so a variable is fine.
   - `CUSTOM_DOMAIN` = e.g. `www.aacropolishomes.com` (only once you point DNS at GitHub).
4. Open the **Actions** tab and run **Build and deploy to GitHub Pages** (or just push to `main`).
5. Your site appears at `https://<user>.github.io/<repo>/` (or your custom domain).

## How Wix content gets in
- The blog is fetched from Wix **at build time**. The site rebuilds on every push,
  **daily at 11:00 UTC**, and whenever you click *Run workflow*.
- To rebuild the moment you publish in Wix, create a Wix Automation that sends an HTTP request to
  `POST https://api.github.com/repos/<user>/<repo>/dispatches` with body `{"event_type":"wix-publish"}`
  and a GitHub token that has repo access. (Optional; the daily rebuild works without it.)
- With no `WIX_CLIENT_ID`, the site uses the local copy of the posts in `lib/posts.ts`.
- Anything needing a live server (Wix Forms/CRM submissions, members, stores, checkout) can't run
  on GitHub Pages. Call Wix's public APIs from the browser, or use Wix's own forms embeds.

## Pages
| Route | Wix source | Notes |
|---|---|---|
| `/` | `/` | Hero |
| `/digitalwelcome/` | `/copy-of-home-1` (hidden) | Welcome landing page, `noindex` |
| `/show-homes/` | `/show-homes` | |
| `/about/` | `/about` | |
| `/gallery/` | `/gallery` | 25 images |
| `/our-homes/` | `/our-homes` | Estate, duplex, infill, acreage, rear lane |
| `/quick-possession/` | `/quick-possession` | |
| `/process/` | `/process` | 9 steps |
| `/promotions/` | `/copy-of-about` | Referral + registration form (opens email) |
| `/video-tours/` | `/copy-of-show-homes` | Video embed needs re-adding |
| `/blog/`, `/blog/<slug>/` | `/blog`, `/post/<slug>` | Wix Blog, local fallback |

Old Wix URLs (`/copy-of-about`, `/copy-of-show-homes`, `/copy-of-home-1`, `/post/<slug>`) are small
static pages that forward visitors to the new routes. GitHub Pages can't send real 301s, so when you
move the live domain, keep Wix's own redirects or accept the soft redirects.

## Local development
```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # outputs static site to ./out
```

## Not captured from the live site
- Wix "More..." menu pages not reachable publicly; blog journal entries #1-#5; empty blog categories.
- Video tour embed; referral form backend.
- Images and PDFs still load from Wix's CDN (`static.wixstatic.com`, `/_files/ugd/...`).
  Download them into `public/` before the Wix site is turned off.
