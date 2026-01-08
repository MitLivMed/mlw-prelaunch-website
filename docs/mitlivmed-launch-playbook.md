# MitLivMed Pre-Launch Playbook

> A step-by-step checklist for launching the MitLivMed waitlist landing page.  
> Covers everything beyond design/development: SEO, analytics, legal, and go-to-market readiness.

---

## Status Legend

- ⬜ Not started  
- 🟡 In progress / Partially done  
- ✅ Complete  
- 🔲 Blocked / Waiting on dependency

---

## Phase 1: Infrastructure & Domain

### 1.1 Domain Setup

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Secure primary domain (mitlivmed.dk or similar) | ⬜ | | Check availability |
| Configure DNS to point to Vercel | ⬜ | | A record + CNAME for www |
| Enable HTTPS / SSL certificate | ⬜ | | Automatic via Vercel |
| Set up domain email (hello@mitlivmed.dk) | ⬜ | | Google Workspace, Fastmail, or Zoho |
| Configure SPF, DKIM, DMARC for email deliverability | ⬜ | | Critical for Tally notifications |

### 1.2 Hosting Configuration (Vercel)

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Connect GitHub repo to Vercel | ⬜ | | |
| Set production branch | ⬜ | | Likely `main` |
| Configure environment variables | ⬜ | | Analytics IDs, feature flags |
| Set up preview deployments for PRs | ⬜ | | Built-in with Vercel |
| Configure custom 404 page | ⬜ | | Should match brand |

---

## Phase 2: SEO & Meta Configuration

### 2.1 Core Meta Tags

**Decision needed:** Your PRP says "Danish only" but PRD says "DA + EN from day 1". Clarify before writing meta content.

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Write page title (50-60 chars) | ⬜ | | See suggestions below |
| Write meta description (150-160 chars) | ⬜ | | See suggestions below |
| Set canonical URL | ⬜ | | `https://mitlivmed.dk/` |
| Add language declaration | ⬜ | | `lang="da"` in HTML |
| Create favicon set | ⬜ | | favicon.ico, apple-touch-icon, android icons |

**Suggested meta content (Danish):**

```html
<title>MitLivMed — Fællesskab for mennesker med bipolar | Skriv dig op</title>
<meta name="description" content="Hverdagen efter diagnosen er den svære del. MitLivMed er et peer-support fællesskab, hvor mennesker med bipolar deler det, der faktisk hjælper. Åbner 2026.">
```

### 2.2 Open Graph Tags (Social Sharing)

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Create OG image (1200×630px) | ⬜ | | Brand colors, logo, tagline |
| Set og:title | ⬜ | | Can match page title |
| Set og:description | ⬜ | | Can match meta description |
| Set og:image | ⬜ | | Full URL to image |
| Set og:url | ⬜ | | Canonical URL |
| Set og:type | ⬜ | | `website` |
| Set og:locale | ⬜ | | `da_DK` |

### 2.3 Twitter Card Tags

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Set twitter:card | ⬜ | | `summary_large_image` |
| Set twitter:title | ⬜ | | |
| Set twitter:description | ⬜ | | |
| Set twitter:image | ⬜ | | Same as OG image |
| Set twitter:site (optional) | ⬜ | | @mitlivmed if account exists |

### 2.4 Technical SEO

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Create robots.txt | ⬜ | | Allow all, point to sitemap |
| Create sitemap.xml | ⬜ | | Next.js can auto-generate |
| Submit sitemap to Google Search Console | ⬜ | | After domain verification |
| Submit sitemap to Bing Webmaster Tools | ⬜ | | Optional but free traffic |
| Add structured data (Organization schema) | ⬜ | | JSON-LD in head |

**robots.txt template:**
```
User-agent: *
Allow: /

Sitemap: https://mitlivmed.dk/sitemap.xml
```

**Organization schema template:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MitLivMed",
  "url": "https://mitlivmed.dk",
  "logo": "https://mitlivmed.dk/images/mitlivmed-logo.png",
  "description": "Et peer-support fællesskab for mennesker med bipolar",
  "foundingDate": "2025"
}
```

---

## Phase 3: Analytics & Tracking

### 3.1 Choose Analytics Provider

**Decision required** — Your PRD lists three options:

| Option | Pros | Cons | GDPR |
|--------|------|------|------|
| **GA4** | Free, powerful, familiar | Google's data practices, requires consent | Needs consent banner |
| **PostHog** | EU hosting available, product analytics focus | Learning curve | Can be GDPR-compliant |
| **Plausible/Fathom** | No cookies, no consent needed, simple | Less detailed, paid | GDPR-friendly by design |

**Recommendation for your stage:** Plausible or Fathom. You get the core metrics (visitors, sources, conversions) without cookie consent complexity. You can always add GA4 later.

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Decide on analytics provider | ⬜ | | |
| Create account and get tracking code | ⬜ | | |
| Install tracking snippet | ⬜ | | In `_app.js` or layout |
| Configure custom events | ⬜ | | See event list below |
| Test tracking in preview environment | ⬜ | | Verify events fire |

### 3.2 Events to Track (from your PRD)

| Event | Trigger | Priority |
|-------|---------|----------|
| `page_view` | Page load | Must have |
| `video_play` | Video starts | Must have |
| `video_progress` | 25%, 50%, 75%, 100% | Nice to have |
| `scroll_depth` | 25%, 50%, 75%, 100% | Nice to have |
| `cta_click` | Any CTA button (with location) | Must have |
| `form_start` | Tally form opens | Must have |
| `form_submit` | Tally submission confirmed | Must have |
| `crisis_modal_open` | Crisis modal triggered | Must have |
| `language_switch` | DA/EN toggle (if implemented) | If applicable |

### 3.3 Tally.so Configuration

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Create Tally form with required fields | ⬜ | | Email, consent, interest |
| Add hidden fields for UTM passthrough | ⬜ | | utm_source, utm_medium, utm_campaign |
| Configure success redirect | ⬜ | | Back to landing page with ?success=1 |
| Set up email notifications | ⬜ | | Alert on new signups |
| Test form submission end-to-end | ⬜ | | |

**Tally hidden fields for UTM tracking:**
- `utm_source`
- `utm_medium`  
- `utm_campaign`
- `utm_content`
- `utm_term`
- `referrer` (document.referrer)

---

## Phase 4: GDPR & Legal Compliance

### 4.1 Cookie Consent (If Using Cookies)

**Decision required** — Your PRD lists: Cookiebot, CookieYes, Osano

If you use Plausible/Fathom (no cookies), you can skip the consent banner for analytics. You may still need one if Vimeo or Tally set cookies.

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Audit all cookies/trackers on site | ⬜ | | Use browser dev tools |
| Decide if consent banner needed | ⬜ | | Depends on tracking choice |
| If yes: choose provider | ⬜ | | |
| If yes: implement and configure | ⬜ | | |
| If yes: test consent flow | ⬜ | | |

### 4.2 Privacy Policy

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Draft privacy policy | ⬜ | | See template below |
| Legal review (recommended) | ⬜ | | Given mental health context |
| Create /privacy page | ⬜ | | |
| Link from footer and signup form | ⬜ | | |

**Privacy policy must cover:**
- What data you collect (email, optional fields)
- Why you collect it (waitlist, updates)
- How long you keep it
- Who has access (you, Tally.so, email provider)
- User rights (access, deletion, portability)
- Contact for data requests
- Lawful basis (consent)

### 4.3 Other Legal

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Add "Not medical advice" disclaimer | ⬜ | | Footer — already in PRD |
| Add crisis resources | ⬜ | | Footer — already in PRD |
| Consider terms of service (optional for waitlist) | ⬜ | | Can add later |

---

## Phase 5: Security & Performance

### 5.1 Security Headers

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Configure Content-Security-Policy | ⬜ | | Allow Vimeo, Tally, fonts |
| Add X-Frame-Options | ⬜ | | `SAMEORIGIN` |
| Add X-Content-Type-Options | ⬜ | | `nosniff` |
| Add Referrer-Policy | ⬜ | | `strict-origin-when-cross-origin` |
| Add Permissions-Policy | ⬜ | | Restrict unused browser features |
| Test with securityheaders.com | ⬜ | | Aim for A grade |

**Vercel headers config (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### 5.2 Performance Audit

**Your targets (from PRD):** LCP < 2.5s, FID < 100ms, CLS < 0.1, Lighthouse > 90

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Run Lighthouse audit | ⬜ | | Performance, Accessibility, SEO |
| Optimize images (WebP via next/image) | ⬜ | | Should be automatic |
| Audit font loading | ⬜ | | Use font-display: swap |
| Lazy load below-fold content | ⬜ | | Video embed especially |
| Test on slow 3G | ⬜ | | Chrome DevTools throttling |
| Run PageSpeed Insights | ⬜ | | Real-world data after launch |

### 5.3 Accessibility Audit

**Your target:** WCAG AA

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Run axe DevTools audit | ⬜ | | Browser extension |
| Test keyboard navigation | ⬜ | | All interactive elements |
| Test with screen reader | ⬜ | | VoiceOver or NVDA |
| Verify color contrast (4.5:1) | ⬜ | | Especially Lantern on white |
| Add skip-to-content link | ⬜ | | Required per PRD |
| Test crisis modal focus trap | ⬜ | | Safety-critical |
| Verify reduced-motion support | ⬜ | | Carousel especially |

---

## Phase 6: Pre-Launch Testing

### 6.1 Functional Testing

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| All copy matches PRD exactly | ⬜ | | No AI rewrites |
| CTA buttons work (scroll/open Tally) | ⬜ | | |
| Crisis modal opens and closes | ⬜ | | X, Escape, outside click |
| tel: links work on mobile | ⬜ | | 112, Livslinien |
| Video placeholder displays | ⬜ | | Swap test Vimeo/YouTube |
| Carousel autoplay (3s/8s timing) | ⬜ | | |
| Carousel pause on hover | ⬜ | | |
| Form submission works | ⬜ | | End-to-end with Tally |
| Success state displays after signup | ⬜ | | |
| UTM parameters pass through | ⬜ | | Test with ?utm_source=test |

### 6.2 Cross-Browser Testing

| Browser | Desktop | Mobile | Status |
|---------|---------|--------|--------|
| Chrome | ⬜ | ⬜ | |
| Firefox | ⬜ | — | |
| Safari | ⬜ | ⬜ (iOS) | |
| Edge | ⬜ | — | |

### 6.3 Responsive Testing

| Breakpoint | Width | Status | Notes |
|------------|-------|--------|-------|
| Mobile small | 320px | ⬜ | Minimum viable |
| Mobile | 375px | ⬜ | iPhone standard |
| Tablet | 768px | ⬜ | |
| Desktop | 1024px | ⬜ | |
| Large desktop | 1440px | ⬜ | |

### 6.4 Social Share Preview Testing

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Test Twitter Card Validator | ⬜ | | cards-dev.twitter.com/validator |
| Test Facebook Sharing Debugger | ⬜ | | developers.facebook.com/tools/debug |
| Test LinkedIn Post Inspector | ⬜ | | linkedin.com/post-inspector |
| Manual test: share to each platform | ⬜ | | Verify image renders correctly |

---

## Phase 7: Go-to-Market Readiness

### 7.1 Email Automation

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Choose email provider | ⬜ | | Mailchimp, ConvertKit, Loops, etc. |
| Connect Tally to email provider | ⬜ | | Via Zapier or native integration |
| Draft welcome email | ⬜ | | Confirm signup, set expectations |
| Set up automation flow | ⬜ | | Trigger on new Tally submission |
| Test end-to-end | ⬜ | | Submit form, receive email |

**Welcome email should include:**
- Confirmation they're on the waitlist
- What to expect (launch timeline, update frequency)
- What MitLivMed is/isn't (reinforce positioning)
- How to unsubscribe
- Crisis resources (safety)

### 7.2 Social Profiles

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Create/update Instagram | ⬜ | | |
| Create/update TikTok | ⬜ | | |
| Create/update LinkedIn | ⬜ | | |
| Create/update YouTube | ⬜ | | |
| Consistent bio and links across all | ⬜ | | |
| Profile images match brand | ⬜ | | |

### 7.3 Search Console Setup

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Verify domain in Google Search Console | ⬜ | | DNS or HTML file method |
| Submit sitemap | ⬜ | | |
| Request indexing for homepage | ⬜ | | |
| Set up Bing Webmaster Tools (optional) | ⬜ | | Can import from GSC |

### 7.4 Launch Day Checklist

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Remove any "under construction" states | ⬜ | | |
| Verify production environment variables | ⬜ | | Analytics, etc. |
| Check analytics is receiving data | ⬜ | | |
| Test signup flow one more time | ⬜ | | |
| Prepare launch announcement | ⬜ | | Social posts ready |
| Brief anyone who needs to know | ⬜ | | |
| Set up uptime monitoring (optional) | ⬜ | | UptimeRobot, Vercel built-in |

---

## Phase 8: Post-Launch

### 8.1 First Week Monitoring

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| Daily check: analytics working? | ⬜ | | |
| Daily check: form submissions coming through? | ⬜ | | |
| Daily check: any error reports? | ⬜ | | Vercel logs |
| Review conversion rate | ⬜ | | Visitors → signups |
| Review traffic sources | ⬜ | | Which channels working |
| Gather qualitative feedback | ⬜ | | Ask early signups |

### 8.2 Optimization Opportunities

| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| A/B test headline (if traffic allows) | ⬜ | | You have 3 options in PRD |
| Review video engagement | ⬜ | | Play rate, completion |
| Review scroll depth | ⬜ | | Where do people drop off |
| Iterate on copy if needed | ⬜ | | Based on feedback |

---

## Quick Reference: Key Decisions Needed

| Decision | Options | Recommendation | Status |
|----------|---------|----------------|--------|
| Analytics provider | GA4, PostHog, Plausible | Plausible (no consent needed) | ⬜ |
| Cookie consent | Cookiebot, CookieYes, Osano | Skip if using Plausible | ⬜ |
| Email provider | Mailchimp, ConvertKit, Loops | ConvertKit (creator-friendly) | ⬜ |
| Language at launch | DA only vs DA+EN | Start DA, add EN when video ready | ⬜ |

---

## Files to Create

| File | Purpose | Status |
|------|---------|--------|
| `/public/robots.txt` | Search engine crawling | ⬜ |
| `/public/sitemap.xml` | Search engine indexing | ⬜ |
| `/app/privacy/page.tsx` | Privacy policy | ⬜ |
| `/public/images/og-image.png` | Social sharing image | ⬜ |
| `/public/favicon.ico` | Browser tab icon | ⬜ |
| `/public/apple-touch-icon.png` | iOS home screen | ⬜ |
| `vercel.json` | Security headers, redirects | ⬜ |

---

## Timeline Suggestion

| Week | Focus |
|------|-------|
| Week 1 | Phase 1-2: Infrastructure, domain, meta tags |
| Week 2 | Phase 3-4: Analytics, legal, privacy policy |
| Week 3 | Phase 5-6: Security, performance, testing |
| Week 4 | Phase 7: Email automation, social, soft launch |

---

*Last updated: [DATE]*  
*Owner: [NAME]*
