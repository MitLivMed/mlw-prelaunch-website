# Pre-Launch Website Development Kickoff

**Updated:** 2026-01-12 (v7)
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
| MIT-35 | Intro positioning text ("bevægelse" copy in hero) |
| MIT-39 | Glassmorphism navbar (transparent→blur on scroll) |
| MIT-25 | Waves divider removed (divider component only, background effect kept) |
| MIT-42 | Founder photo on About page (large photo + mission/belief copy) |

**Also done (this session):**
- About page redesign: Mission statement, core belief callout, founder story, large photo at bottom
- Title updated to "Grundlægger og adm. direktør"

---

## In Progress / CPO Review

| ID | Title | Status |
|----|-------|--------|
| MIT-37 | Color scheme review | Live at `/test/color-variations` for CPO review |

**MIT-37:** 8 color variations with live switcher at `/test/color-variations`. Press 1-8 to switch.

---

## Next Up (Priority Order)

| ID | Title | Notes |
|----|-------|-------|
| MIT-29 | Static SEO files | `robots.txt`, `sitemap.xml`, favicons |
| MIT-28 | Meta tags & SEO | `react-helmet-async`, Layout component |
| MIT-30 | Tally + HubSpot | Form integration |
| MIT-31 | Pre-launch testing | Last |

---

## Backlog

| ID | Title | Notes |
|----|-------|-------|
| MIT-41 | Section divider alternatives | Created this session - explore options after wave divider removal |
| MIT-40 | Wave divider alternatives | Fact box concept with 3 copy variations |
| MIT-38 | Feedback tab | Deprioritized |

---

## Deployment

Domain is now live. Dual-remote setup for Vercel:

```bash
# Deploy to production (push to both)
git push origin main && git push personal main --force
```

- `origin` = MitLivMed org repo (source of truth)
- `personal` = Fuhr/mlw-prelaunch-website (Vercel deploys from here)

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
