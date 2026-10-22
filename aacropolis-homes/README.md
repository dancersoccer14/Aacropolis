# Aacropolis Homes (headless Wix frontend)

Next.js (App Router, TypeScript) rebuild of https://www.aacropolishomes.com, including pages that
are hidden from the Wix menu.

## Pages
| Route | Wix source | Notes |
|---|---|---|
| `/` | `/` | Hero |
| `/digitalwelcome` | `/copy-of-home-1` (hidden) | "Welcome" landing page, set to `noindex` |
| `/show-homes` | `/show-homes` | |
| `/about` | `/about` | |
| `/gallery` | `/gallery` | 25 images |
| `/our-homes` | `/our-homes` | Estate, duplex, infill, acreage, rear lane |
| `/quick-possession` | `/quick-possession` | |
| `/process` | `/process` | 9 steps |
| `/promotions` | `/copy-of-about` | Referral + registration form (mailto for now) |
| `/video-tours` | `/copy-of-show-homes` | Video embed needs re-adding |
| `/blog`, `/blog/[slug]` | `/blog`, `/post/[slug]` | Wix Blog via headless SDK, local fallback |

Old Wix URLs redirect (301) in `next.config.mjs`.

## Run
```bash
npm install
cp .env.example .env.local   # optional: add WIX_CLIENT_ID
npm run dev
```

## Wix headless
1. In Wix: Settings > Headless Settings > create an OAuth app, copy the Client ID.
2. Set `WIX_CLIENT_ID` locally and in your host (Vercel/Netlify).
3. `lib/wix.ts` reads Blog posts; with no ID it falls back to `lib/posts.ts`.
   Blog bodies from Wix come as rich content; add `@wix/ricos` to render them fully.

## Still to do / not captured
- Wix "More..." menu: any further pages were not reachable from the public site.
- Blog journal entries #1-#5 were not found; only #6, #7 and two other posts are included.
- Blog categories (Getting Started, Your Community): empty on the live site.
- Video tour embed, and the referral form backend.
- Images and PDFs still load from Wix's CDN (`static.wixstatic.com`, `/_files/ugd/...`).
  Download them into `public/` before the Wix site is turned off.
