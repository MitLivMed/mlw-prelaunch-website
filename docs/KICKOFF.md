# Pre-Launch Website Development Kickoff

**Updated:** 2026-01-09
**Linear Project:** [Pre-launch website](https://linear.app/mitlivmed/project/pre-launch-website-95067c272412)
**Repo:** `git@github.com:MitLivMed/mlw-prelaunch-website.git`

---

## Completed ✅

| ID | Title |
|----|-------|
| MIT-24 | Footer social icons (LinkedIn added, URLs updated) |
| MIT-26 | About page (`/om-os`) |
| MIT-27 | Legal placeholder pages (`/privatlivspolitik`, `/vilkaar`, `/cookies`) |
| MIT-32.4 | Header "Om os" link fix |

**Also done:** Wave background effect on all new pages (90% opacity), button styling consistency.

---

## Next Up

| ID | Title | Notes |
|----|-------|-------|
| MIT-29 | Static SEO files | Quick win: `robots.txt`, `sitemap.xml`, favicons |
| MIT-28 | Meta tags & SEO | `react-helmet-async`, Layout component |
| MIT-32 | Co-founder feedback | 8 remaining items (see below) |
| MIT-30 | Tally + HubSpot | Form integration |
| MIT-25 | Waves divider fix | May take time |
| MIT-31 | Pre-launch testing | Last |

**Blocked:** MIT-33 (hero video) - waiting for video link

---

## MIT-32: Co-founder Feedback (remaining items)

1. ~~Item 4: Om os link~~ ✅
2. CTA copy change: "vær med i beta inden vi lancerer - test og hjælp"
3. Remove waves divider, reduce spacing around testimonials
5. Rewrite CTA: "Mitlivmed lancerer i 2026 - sign up som beta bruger"
6. Add intro text about peers/movement
7. Rewrite 4 journey stage descriptions (Ørkenen, Søen, etc.)
8. Update journey images to match brand + female persona
9. Add feedback tab with simple form

---

## Reference Docs (in `docs/`)

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
npm run typecheck
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
