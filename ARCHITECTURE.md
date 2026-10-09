# Architecture

How mitlivmed.dk is built, what each page talks to, and how it reaches production. For setup commands and the list of keys, see [README.md](README.md).

## Overview

```
Browser ── mitlivmed.dk (Vercel: static HTML from dist/)
   │
   ├── api.mitlivmed.dk (mitlivmed-api: Express + Prisma + Postgres, OVH VPS)
   │      ├── Stripe (checkout, webhooks)
   │      ├── Brevo SMTP (e-mails)
   │      └── Discourse (fællesskab.mitlivmed.dk)
   ├── js.stripe.com / checkout.stripe.com (Embedded Checkout on /stoet)
   ├── eu.i.posthog.com (cookieless analytics)
   └── youtube-nocookie.com (videos, loaded on click)
```

The website has no server code of its own. Everything that stores data or sends e-mail happens in the API (repo `MitLivMed/mitlivmed-api`, endpoints documented in its `docs/website-endpoints.md`).

## Repository layout

| Path | What |
|---|---|
| `site/*.html` | One file per page. Each page has its CSS inline |
| `site/partials/` | Shared page parts, inserted at build time: `head.html` (favicons, OG tags, `mlm.js`) and `footer.html` |
| `site/js/mlm.js` | The shared script, bundled by Vite (see below) |
| `site/public/` | Copied as-is: images (`mitlivmed_assets/`, `mitlivmed_thumbs/`), favicons, fonts, `share.js`/`share.css`, `widow.js`, `robots.txt`, `sitemap.xml` |
| `vite.config.js` | The build: every `site/*.html` is a page; the `partials` plugin; CSS left untouched |
| `vercel.json` | Build settings, clean URLs, rewrites, redirects, security headers |

## Build

`npm run build` runs Vite, which:

1. Replaces each `<!-- partial:name -->` marker with `site/partials/name.html`.
2. Bundles `site/js/mlm.js` and its npm packages (`posthog-js`, `@stripe/stripe-js`) into `dist/assets/mlm-<hash>.js`.
3. Writes every page to `dist/`.

The pages' inline CSS is passed through untouched (no transform, no minify), so the built pages look exactly like the source.

## Pages

| Page | Purpose | Talks to |
|---|---|---|
| `index` | Home: landscapes, articles, events, share panel | Landscape cards go to `opret` (see below) |
| `trivselsgrupper` | Trivselsgruppe signup | `POST /api/trivsel/signup`, then `tak-trivselsgruppe` |
| `tak-trivselsgruppe` | Thank-you after signup (noindex) | — |
| `stoet` | Monthly support, 50/75/100 kr or a custom amount ≥ 50 | `POST /api/donations/checkout`, then Stripe Embedded Checkout in the page |
| `tak-stoette` | Thank-you after payment (noindex) | `GET /api/payments/session-status` |
| `stipendier` | Stipend application | `POST /api/stipend/apply` |
| `kontakt` | Contact form | `POST /api/contact` (to kontakt@, or privacy@ for privacy questions) |
| `nyhedsbrev` | Newsletter signup (double opt-in) | `POST /api/newsletter/subscribe` |
| `hjaelp`, `om-os` | Content | — |
| Legal pages | `privatlivspolitik`, `brugerbetingelser`, `cookies`, `markedsfoeringspolitik`, `samtykkeerklaering`, `tilgaengelighed` | — |
| `404` | Not found (noindex) | — |
| `opret` | Forum signup: account, 7 questions, consents | `POST /api/community/signup` |

"Log ind" links go straight to `https://fællesskab.mitlivmed.dk/login`.

## The shared script: `site/js/mlm.js`

Loaded on every page through `partials/head.html`. It exposes `window.MLM` for the pages' inline scripts:

| | What |
|---|---|
| `MLM.api.get(path)` / `MLM.api.post(path, body)` | Calls the API (`VITE_API_BASE_URL`, default `https://api.mitlivmed.dk`) with `credentials: "include"`. Throws `MLM.ApiError` with `status` and the API's `error` code |
| `MLM.track(event, props)` | Sends a PostHog event |
| `MLM.stripe()` | Loads Stripe.js on first use (only `/stoet`) |
| `MLM.wireForm(form, options)` | Sends a form to the API: honeypot, disabled button while sending, `form_start`/`form_submit` events, error messages |

Every "Opret profil" link points at `opret.html`; `mlm.js` sends a `cta_click` event for it.

### Analytics (PostHog)

Cookieless (`persistence: "memory"`), so no consent banner is needed. Autocapture, session recording, heatmaps, surveys and external scripts are off. Analytics is off on `localhost` and when `VITE_POSTHOG_KEY` is missing.

| Event | When |
|---|---|
| `$pageview` | Every page load |
| `scroll_depth` | 25/50/75/100 % |
| `cta_click` | An "Opret profil" button (`location`: where it sits) |
| `form_start`, `form_submit` | A form is started/sent (`form_id` only) |
| `video_play` | A YouTube video starts |
| `404` | The 404 page is shown |

**Never put form values, landskab, newsletter group or other health data in events or URLs.**

### Other scripts (`site/public/`, not bundled)

- `share.js` + `share.css`: the "Del med en, du holder af" panel. Nothing leaves the browser.
- `widow.js`: keeps the last two words of a line together.

## Forms

Each form has:

- a hidden honeypot field `website` that bots fill in. The API then answers "success" without storing or sending anything;
- a guard that always blocks the browser's native submit, so field values can never end up in the URL if `mlm.js` fails to load;
- an error line (`role="alert"`) with a fallback e-mail address.

Option values must match the API's slugs, e.g. landskab `oerkenen`/`skoven`/`bjerget`, stipend purpose `trivselsgrupper`/`andet`, newsletter group `paaroerende`/`fagperson`/`andre`.

### Payment flow (`/stoet`)

1. The visitor picks an amount and enters an e-mail address.
2. `POST /api/donations/checkout {amountDkk, email, name, recurring: true}` returns a Stripe `clientSecret`.
3. Stripe Embedded Checkout opens in the page.
4. Stripe sends the visitor to `/donation/retur?session_id=…`, which Vercel serves as `tak-stoette.html` (rewrite, so the query string survives).
5. `tak-stoette` calls `GET /api/payments/session-status` and shows thanks only if the status is `complete`.
6. The API's Stripe webhook records the donation and sends the confirmation e-mail.

### Newsletter (double opt-in)

1. `POST /api/newsletter/subscribe` stores a pending signup and e-mails a confirmation link.
2. The link (`GET /api/newsletter/confirm`) redirects to `/nyhedsbrev?status=bekraeftet`, or `?status=ugyldigt` if it is expired or invalid. The page shows a message for each.

## Hosting: `vercel.json`

- **Clean URLs:** `/kontakt` serves `kontakt.html`, and `/kontakt.html` redirects to `/kontakt`.
- **Rewrites:** `/til-dig` serves the home page (the share link). `/donation/retur` serves `tak-stoette.html`.
- **Redirects (308) from the old site:**

  | Old | New |
  |---|---|
  | `/stoettemedlemskab` | `/stoet` |
  | `/trivselsgruppe` | `/trivselsgrupper` |
  | `/akut` | `/hjaelp#akut` |
  | `/landskaber/*` | `/trivselsgrupper` |
  | `/vilkaar` | `/brugerbetingelser` |

- **Security headers** on every page: `Content-Security-Policy`, `X-Frame-Options`, `Referrer-Policy`, `X-Content-Type-Options`, `Permissions-Policy`. **When a page starts loading something from a new domain, add it to the CSP**, or the browser blocks it.
- Pages that use `<base href="/">` (`404`, `tak-stoette`) do so because they can be served from a nested path.

## Environments

| | Website | API | Stripe |
|---|---|---|---|
| **Local** | `npm run dev`, or `npx vercel dev` to test `vercel.json` | `mitlivmed-api` on `localhost:3001` with Docker Postgres | Test keys + `stripe listen` |
| **Vercel preview** (every PR) | Behind Vercel Authentication | Production API; its CORS only allows mitlivmed.dk, so forms and payment fail on previews | — |
| **Production** | mitlivmed.dk | api.mitlivmed.dk | Live keys |

There is no staging environment (decided 7 Oct 2026); full end-to-end tests run locally. For the local API setup see `mitlivmed-api/docs/testing-payments-locally.md`.

Keys come from Vercel's environment variables at build time (`import.meta.env.VITE_*`); see the table in the README. Locally they go in `.env.local` (gitignored).

## Deploy

Vercel deploys directly from this repo (`MitLivMed/mlw-prelaunch-website`):

- every push to a branch with a PR gets a preview deployment;
- **a merge to `main` is a production deploy.** Nothing is merged to `main` without Tonni's explicit approval.

**Rollback:** revert the merge commit on `main` (or promote the previous deployment in the Vercel dashboard).

## Signup flow (`/opret`, MLM-2557)

1. **Landscape cards** on the home page store the chosen landscape in `sessionStorage` (`mlm_landskab`) and go to `opret.html`. The page reads it once to preselect the landscape, then removes it. **Landskab never goes in a URL or an analytics event.**
2. **Steps:** account (e-mail, username, password), 7 questions, consents.
   - Anyone under 18 is stopped at the birth-date step.
   - Any bipolar answer other than the first goes to `nyhedsbrev?gruppe=…` and gets no profile.
3. **"Opret profil"** sends everything to `POST /api/community/signup`.
   - The password is read from the account step and sent only in that HTTPS request body. It is cleared from the page after success.
   - Answer values are the exact Discourse option texts, so they must match the API's `src/config/communitySignup.ts`.
4. **Success:** "Tjek din indbakke". Discourse sends the activation e-mail.
   - An e-mail that already has a profile gets the same screen; the API e-mails the owner instead, so the page never reveals who is a member.
5. **Errors:**
   - username taken, or password refused: back to the account step with the message at the field;
   - otherwise a message on the consent step.
6. **The consent texts on the page are stored word for word in the API** (`SIGNUP_CONSENT_WORDING`). **If a consent text on `opret.html` changes, update it there the same day.**

## Planned changes

- The shop link is commented out in the footer (`<!-- SHOP: hidden … -->`) until the shop bug is fixed.
