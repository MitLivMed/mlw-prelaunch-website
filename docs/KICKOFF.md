# Pre-Launch Website Development Kickoff

**Updated:** 2026-01-09 (v2)
**Linear Project:** [Pre-launch website](https://linear.app/mitlivmed/project/pre-launch-website-95067c272412)
**Repo:** `git@github.com:MitLivMed/mlw-prelaunch-website.git`

---

## Completed ✅

| ID | Title |
|----|-------|
| MIT-24 | Footer social icons (LinkedIn added, URLs updated) |
| MIT-26 | About page (`/om-os`) |
| MIT-27 | Legal placeholder pages (`/privatlivspolitik`, `/vilkaar`, `/cookies`) |

**Also done:** Wave background effect on all new pages (90% opacity), button styling consistency, header "Om os" link fix.

---

## Next Up (Priority Order)

| ID | Title | Notes |
|----|-------|-------|
| MIT-33 | Hero video | YouTube placeholder: `https://www.youtube.com/watch?v=VqFSCk_9NRA` |
| MIT-32 | Cofounder feedback (copy + spacing) | See details below |
| MIT-29 | Static SEO files | `robots.txt`, `sitemap.xml`, favicons |
| MIT-28 | Meta tags & SEO | `react-helmet-async`, Layout component |
| MIT-37 | Color scheme review | Less orange, more earth tones |
| MIT-25 | Waves divider fix | PNG scaling + spacing issues |
| MIT-30 | Tally + HubSpot | Form integration |
| MIT-31 | Pre-launch testing | Last |

---

## MIT-32: Cofounder Feedback (scoped)

**Dev-ready items only:**

1. **CTA button copy:** Change to "vær med i beta inden vi lancerer - test og hjælp"
2. **Microcopy under CTA:** Change to "Mitlivmed lancerer i 2026 - sign up som beta bruger og hjælp allerede nu"
3. **Spacing:** Reduce vertical padding around carousel/testimonials section

**Note:** Waves divider stays - continue fixing in MIT-25.

---

## MIT-33: Hero Video

Embed this YouTube video as placeholder in hero section:
```
https://www.youtube.com/watch?v=VqFSCk_9NRA
```

Use responsive YouTube embed. Final video will replace this later.

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
| MIT-36 | Journey section refresh | Waiting for new images from CPO |
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
