# Pre-Launch Website Development Kickoff

**Date:** 2026-01-08
**Project:** MitLivMed Pre-Launch Landing Page
**Linear Project:** [Pre-launch website](https://linear.app/mitlivmed/project/pre-launch-website-95067c272412)

---

## What is MitLivMed?

MitLivMed ("MyLifeWith" in Danish) is a peer-support community for people with bipolar disorder. The product helps people navigate life after diagnosis by connecting them with others who share practical, lived experience.

**Key positioning:**
- Not therapy, not medical advice — peer support
- Danish-first, building for international
- Health-sensitive: ethics matter, minimize data collection
- Product principle: "Dream big, act quick, start small, be kind"

---

## Current State

The landing page is built and functional. This sprint focuses on polish and launch readiness:
- Fix visual bugs (waves divider, footer icons)
- Add missing pages (About, Legal placeholders)
- SEO infrastructure (meta tags, static files)
- Form integration (Tally + HubSpot)
- Testing

---

## Tasks (in execution order)

Work through these Linear issues in order:

| # | ID | Title | Key Files |
|---|-----|-------|-----------|
| 1 | MIT-24 | Footer social icons | `src/components/Footer.tsx` |
| 2 | MIT-25 | Waves divider fix | `src/components/WavesDivider.tsx` |
| 3 | MIT-26 | About page (/om-os) | Create `src/pages/About.tsx`, update `App.tsx` |
| 4 | MIT-27 | Legal placeholder pages | Create pages for `/privatlivspolitik`, `/vilkaar`, `/cookies` |
| 5 | MIT-28 | Meta tags & SEO infrastructure | Install `react-helmet-async`, create Layout component |
| 6 | MIT-29 | Static SEO files | `public/robots.txt`, `public/sitemap.xml`, favicons |
| 7 | MIT-30 | Tally.so + HubSpot integration | Form embed, welcome email automation |
| 8 | MIT-31 | Pre-launch testing | Lighthouse, accessibility, cross-browser |

---

## Reference Documents

All in `docs/`:

| Document | Purpose |
|----------|---------|
| `Site copy.md` | Copy for About page (founder story) |
| `mitlivmed-meta-tags.md` | Meta tag specifications |
| `signup-form-prd.md` | Tally form field specifications |
| `mitlivmed-welcome-email.md` | Welcome email copy for HubSpot |
| `mitlivmed-launch-playbook.md` | Full launch checklist (reference) |
| `landing-page-prp.md` | Product requirements (reference) |

---

## Task Details

### MIT-24: Footer Social Icons
- Add LinkedIn icon (use Lucide `Linkedin`)
- Update URLs:
  - Instagram: `https://www.instagram.com/mitlivmed/`
  - LinkedIn: `https://www.linkedin.com/company/mitlivmed/`
  - Facebook: `#` (placeholder)
  - TikTok: `#` (placeholder)

### MIT-25: Waves Divider Fix
- Current PNG doesn't scale properly across viewports
- Test two approaches:
  1. CSS fixed-height with `object-fit: cover`
  2. Inline SVG (check if `design/images/waves.svg` exists or create from PNG)
- Pick whichever looks better across 320px → 1440px

### MIT-26: About Page
- Route: `/om-os`
- Content: Founder story from `docs/Site copy.md`
- Match existing page styling
- Add to navigation if appropriate

### MIT-27: Legal Placeholder Pages
- Routes: `/privatlivspolitik`, `/vilkaar`, `/cookies`
- Placeholder text: "Denne side er under udarbejdelse." (This page is under construction)
- Legal team is drafting real content
- Link from footer

### MIT-28: Meta Tags & SEO
- Install `react-helmet-async`
- Create reusable Layout/SEO component
- Implement tags per `docs/mitlivmed-meta-tags.md`
- Add JSON-LD structured data (Organization schema)

### MIT-29: Static SEO Files
- `public/robots.txt` - allow all, point to sitemap
- `public/sitemap.xml` - list all pages
- Favicons via realfavicongenerator.net (needs logo asset)
- OG image (1200×630px) - may need design input

### MIT-30: Tally + HubSpot
- Form fields per `docs/signup-form-prd.md`
- Hidden UTM fields for tracking
- HubSpot integration for email automation
- Welcome email copy in `docs/mitlivmed-welcome-email.md`

### MIT-31: Testing
**Automated:**
- Lighthouse: Performance, Accessibility, SEO > 90
- axe DevTools accessibility audit

**Manual:**
- Browsers: Chrome, Safari, Firefox, Edge
- Viewports: 320px, 375px, 768px, 1024px, 1440px
- Form submission end-to-end
- Social share previews (use debuggers)
- Keyboard navigation
- Crisis modal focus trap

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
