# Pre-Launch Website Development Kickoff

**Updated:** 2026-01-12 (v5)
**Linear Project:** [Pre-launch website](https://linear.app/mitlivmed/project/pre-launch-website-95067c272412)
**Repo:** `git@github.com:MitLivMed/mlw-prelaunch-website.git`

---

## Completed ✅

| ID | Title |
|----|-------|
| MIT-24 | Footer social icons (LinkedIn added, URLs updated) |
| MIT-26 | About page (`/om-os`) |
| MIT-27 | Legal placeholder pages (`/privatlivspolitik`, `/vilkaar`, `/cookies`) |
| MIT-32 | Cofounder feedback (CTA copy, microcopy, carousel spacing) |
| MIT-33 | Hero video (YouTube embed) |
| MIT-36 | Journey section refresh (new images + copy) |

**Also done:**
- Wave background effect on all new pages (90% opacity)
- Button styling consistency
- Header "Om os" link fix
- FinalCTA simplified to button only (prep for Tally.so)
- Journey card image alignment fix (flexbox)
- Removed `design/` folder from repo (belongs in planning project)
- Deployment setup: dual-remote for Vercel free tier (see CLAUDE.md)
- Added `vercel.json` for SPA routing (fixes 404 on direct URL access)

---

## In Progress / CPO Review

| ID | Title | Status |
|----|-------|--------|
| MIT-37 | Color scheme review | Live at `/test/color-variations` for CPO review |
| MIT-35 | Intro positioning text | CPO reviewing wording |

**MIT-37 output:** 8 color variations with live switcher UI at [/test/color-variations](https://mlwlandingpage.vercel.app/test/color-variations). Press 1-8 to switch. Shows full site with real components.

---

## Next Up (Priority Order)

| ID | Title | Notes |
|----|-------|-------|
| MIT-29 | Static SEO files | `robots.txt`, `sitemap.xml`, favicons |
| MIT-28 | Meta tags & SEO | `react-helmet-async`, Layout component |
| MIT-25 | Waves divider fix | PNG scaling + spacing issues |
| MIT-30 | Tally + HubSpot | Form integration |
| MIT-31 | Pre-launch testing | Last |

---

## Blocked / Backlog

| ID | Title | Blocker |
|----|-------|---------|
| MIT-40 | Wave divider alternatives | Backlog - fact box concept with 3 copy variations |
| MIT-38 | Feedback tab | Backlog - deprioritized |

---

## Deployment

Vercel free tier requires personal repo. Dual-remote setup:

```bash
# Deploy to production (push to both)
git push origin main && git push personal main --force
```

- `origin` = MitLivMed org repo (source of truth)
- `personal` = Fuhr/mlw-prelaunch-website (Vercel deploys from here)

See `/deploy` skill or CLAUDE.md for details.

---

## Reference Docs (in `docs/`)

- `color-variations.html` - 8 color schemes for CPO review (MIT-37)
- `mitlivmed-meta-tags.md` - Meta tag specs for MIT-28
- `signup-form-prd.md` - Tally form fields for MIT-30
- `mitlivmed-welcome-email.md` - HubSpot email copy

---

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide icons

---

## Commands

```bash
# Start dev server
npm run dev
# → http://localhost:8080

# Build for production
npm run build

# Type check
npx tsc --noEmit

# Deploy to production
git push origin main && git push personal main --force
```

---

## Constraints

1. **Keep it simple** — minimal changes, avoid over-engineering
2. **Danish-first** — all user-facing copy in Danish
3. **Health-sensitive** — crisis resources in footer, "not medical advice" disclaimer
4. **Accessibility** — WCAG AA target, keyboard navigable
5. **No secrets in code** — use environment variables for any keys

---

## Questions?

If anything is unclear, check the Linear issue for details or ask. Don't guess on copy or user-facing decisions.
