# Pre-Launch Website Development Kickoff

**Updated:** 2026-01-09 (v3)
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

---

## Next Up (Priority Order)

| ID | Title | Notes |
|----|-------|-------|
| MIT-29 | Static SEO files | `robots.txt`, `sitemap.xml`, favicons |
| MIT-28 | Meta tags & SEO | `react-helmet-async`, Layout component |
| MIT-37 | Color scheme review | Less orange, more earth tones |
| MIT-25 | Waves divider fix | PNG scaling + spacing issues |
| MIT-30 | Tally + HubSpot | Form integration |
| MIT-31 | Pre-launch testing | Last |

---

## MIT-37: Color Scheme Review

Cofounder feedback: too much orange, should be more earth-toned.

**Brandbook colors:**
- **Lantern Orange #F58220** → Primary CTA only (use sparingly)
- **Lake #2C5F63** → Links, dividers, charts
- **Desert #E8D5B5** → Warm accent
- **Plains #D4D9C1** → Surface/background blocks
- **Off-white #FAFEFA** → Main background
- **Charcoal #1A1612** → Main text

Audit implementation and reduce orange where it's not a CTA.

---

## Blocked / CPO Review

| ID | Title | Blocker |
|----|-------|---------|
| MIT-35 | Intro positioning text | CPO reviewing wording |
| MIT-38 | Feedback tab | Backlog - deprioritized |

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
npx tsc --noEmit
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
