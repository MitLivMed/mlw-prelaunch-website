# MitLivMed Landing Page — Product Requirement Prompt (PRP)

> A PRP is PRD + curated codebase intelligence + agent/runbook — the minimum viable packet an AI needs to plausibly ship production-ready code on the first pass.

---

## 0. Company Context

### Why We Exist

> Support ends when the crisis ends. We're building the space for everything that comes next.

Most mental health products focus on treatment. We focus on *life after diagnosis* — the everyday part that no one talks about.

### Our Mission

> Empower people living with mental disorders to master everyday life — through relatable storytelling, guided reflection, and safe community.

### Our Core Belief

> People don't need more diagnoses or dopamine hits; they need role models, emotional literacy, and self-efficacy tools wrapped in a community that feels human.

### Our Principles

| Principle | What It Means |
|-----------|---------------|
| **Benevolence** | We act in service of the user |
| **Lived Experience** | Authenticity over authority |
| **Trust** | Safety is non-negotiable |
| **Restraint** | We don't overreach, diagnose, or advise |

### What We Are / Aren't

| We Are | We're Not |
|--------|-----------|
| Peer support | Therapy |
| Lived experience | Medical advice |
| Recovery companion | Crisis support |
| "Life after diagnosis" | Clinical intervention |

### Product Principle

> "Dream big, act quick, start small, be kind."

### Tone

"Warm Scandinavian Clarity" — calm, grounded, trustworthy. Like a quiet conversation with someone who understands. Not clinical, not startup-y.

### Target Audience

People with bipolar seeking support and recognition after diagnosis; also their partners, family, and friends.

---

For full brand guidelines, see: `Branding and Marketing/MitLivMed-Brand-Book-v0.5.md`

---

## 1. Goal

Build a pre-launch signup landing page for MitLivMed.

**Technical requirements:**
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + shadcn/ui (customized)
- **Mobile-first:** Mandatory — must work at 320px width
- **Language:** Danish only (no i18n for now)
- **Accessibility:** WCAG AA compliant

---

## 2. Why

- **Validate product-market fit** via waitlist conversion rate
- **Build trust** before launch (early 2026)
- **Introduce the brand** with "Warm Scandinavian Clarity" aesthetic
- **Handle objections inline** — no separate FAQ section

---

## 3. What (Page Sections)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  MitLivMed™                                    Om os   [Skriv dig op →] │
├─────────────────────────────────────────────────────────────────────────┤
│                        Det ingen taler om..                             │
│                   Hvad sker der efter diagnosen?                        │
│                                                                         │
│   ┌─────────────────────────┐    │    Vi bygger noget til det, der      │
│   │      ▶ VIDEO            │    │    kommer efter...                   │
│   │      (placeholder)      │    │                                      │
│   │    Vimeo / YouTube      │    │    [██ Skriv dig op til tidlig ██]   │
│   └─────────────────────────┘    │    MitLivMed åbner i starten af 2026 │
├─────────────────────────────────────────────────────────────────────────┤
│  ~~~~~~~~~~~~~~~~~~~~ WAVES DIVIDER (waves-trans.png) ~~~~~~~~~~~~~~~~~~│
├─────────────────────────────────────────────────────────────────────────┤
│                         ══ CAROUSEL ══                                  │
│   ❝ Quote slides → Transition → Fact slides → CTA ❞                    │
├─────────────────────────────────────────────────────────────────────────┤
│                          (warm sand background)                         │
│        Livet efter diagnosen er ikke én vej...                          │
│   [DESERT] [LAKE] [PLAINS] [MOUNTAIN]                                   │
├─────────────────────────────────────────────────────────────────────────┤
│   Hvad er MitLivMed?              │  Hvad er MitLivMed ikke?            │
│   (paragraphs)                    │  (bullets + crisis modal trigger)   │
├─────────────────────────────────────────────────────────────────────────┤
│  ~~~~~~~~~~~~~~~~~~~~ WAVES BACKGROUND ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│
│           Vær med fra start når vi lancerer MitLivMed i 2026            │
│              [██████ Skriv dig op til tidlig adgang ██████]             │
├─────────────────────────────────────────────────────────────────────────┤
│                              FOOTER                                     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Section Details

| # | Section | Background | Content |
|---|---------|------------|---------|
| 1 | **Header** | Transparent/sticky | Logo, "Om os" link, CTA button, mobile hamburger |
| 2 | **Hero** | `#FCFAF7` | Centered title, Video (left col) + Copy/CTA (right col) |
| 3 | **Waves Divider** | — | `waves-trans.png` as visual separator |
| 4 | **Carousel** | `#FCFAF7` | 9-slide narrative (quotes → facts → CTA) |
| 5 | **Journey** | `#E8D5B5` (Desert) | Title + 4 landscape cards |
| 6 | **What is/isn't** | `#FCFAF7` | Two columns, crisis modal on right |
| 7 | **Final CTA** | Waves bg | Closing headline + signup CTA |
| 8 | **Footer** | Dark | Contact, legal, crisis, about link |

---

## 4. Context

### 4.1 Design System

#### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#FCFAF7` | Page background (warm off-white) |
| `--lantern` | `#F58220` | CTAs, primary accent |
| `--lake` | `#2C5F63` | Secondary accent, headers |
| `--desert` | `#E8D5B5` | Journey section bg, warm accent |
| `--plains` | `#D4D9C1` | Tertiary accent |
| `--mountain` | `#F2F4F7` | Light accent |
| `--text-dark` | `#2D2D2D` | Primary body text |
| `--text-medium` | `#5A5A5A` | Secondary text |
| `--warm-black` | `#3D2E1F` | Logo text |

#### Typography

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| Headings | Satoshi | 500-700 | varies | 1.2 |
| Body | Figtree | 400 | 16-18px | 1.7 |
| Logo | Reddit Sans | 600 | — | — |

**Font imports:**
```css
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Reddit+Sans:wght@400;500;600;700&display=swap');
```

#### Visual Effects

- **Film grain overlay:** SVG noise at 2-3% opacity for organic feel
- **CTA button shadow:** `0 4px 14px rgba(245, 130, 32, 0.3)`

---

### 4.2 Assets

All assets located in `public/images/` (copy from `design/images/`):

| File | Usage |
|------|-------|
| `mitlivmed-gradient-logo-transparent-cropped 1.png` | Logo in header |
| `waves-trans.png` | Divider after hero, background in final CTA |
| `desert.png` | Journey card 1 |
| `lake.png` | Journey card 2 |
| `plains.png` | Journey card 3 |
| `mountain.png` | Journey card 4 |

**Image handling:** Use `next/image` component (NOT base64). Enables auto-optimization, lazy loading, responsive sizing.

---

### 4.3 Copy (Verbatim — Danish Only)

#### Hero Section

**Title (centered):**
```
Det ingen taler om..
Hvad sker der efter diagnosen?
```

**Body copy (right column):**
```
Støtten stopper, når krisen stopper.  
Mestringen af hverdagen er den svære del.

Vi bygger noget til det, der kommer efter:

MitLivMed er et digitalt fællesskab, hvor mennesker med bipolar affektiv lidelse kan dele deres historier og erfaringer, skræddersyet til dig. Ikke medicinsk rådgivning. Ikke krisestøtte. Bare mennesker, der deler det, der hjælper dem med at leve godt med bipolar.
```

**CTA button:** `Skriv dig op til tidlig adgang`

**Microcopy:** `MitLivMed åbner i starten af 2026`

---

#### Carousel Content

**Header:** `Kan du genkende det?`

**Quotes (5 slides, 3 sec each):**
1. "Jeg er så træt af at forklare mig til folk, der ikke forstår."
2. "Det er ikke episoderne, der slider mig ned. Det er hverdagen imellem."
3. "Jeg har googlet mig gennem alt. Det meste er støj — eller direkte skadeligt."
4. "Jeg vil gerne tro på, at det bliver bedre. Men ikke hvis det føles som en løgn."
5. "Nogle gange har jeg bare brug for at vide, at nogen har stået her før mig."

**Transition (1 slide, 3 sec):**
```
Det er ikke dig, der er forkert. Det er hullet efter behandlingen.
```

**Facts (2 slides, 3 sec each):**

Fact 1:
- Stat: `42-51%`
- Text: "bliver sendt hjem uden opfølgning den første måned — netop når risikoen er størst."
- Highlight: "Tidlig kontakt reducerer den risiko med 18%."
- Source: Stein BD, et al. PMC, 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8695636/

Fact 2:
- Stat: `1 ud af 5`
- Text: "opnår meningsfuld bedring gennem peer-støtte."
- Highlight: "Effekter der holder i mindst 6-9 måneder."
- Source: Høgh Egmose C, et al. Psychiatric Services, 2023. https://pubmed.ncbi.nlm.nih.gov/36751908/

**Closing/CTA (1 slide, 8 sec):**
```
Det her er ikke tomme ord. Det er dokumenteret, og det er derfor, vi bygger MitLivMed.
```
Button: `Kom i gang`

---

#### Journey Section

**Title:**
```
Livet efter diagnosen er ikke én vej.
Den består af en række landskaber, mange genkender
```

**Cards (4):**

| Card | Image | Title | Description |
|------|-------|-------|-------------|
| 1 | desert.png | Ørkenen | "Noget føles forkert. Du er ikke alene." |
| 2 | lake.png | Søen | "Du fik diagnosen. Hvad nu?" |
| 3 | plains.png | Sletterne | "Hverdagen er den svære del." |
| 4 | mountain.png | Bjerget | "Din historie kan lyse vejen for andre." |

---

#### What is MitLivMed?

```
MitLivMed er et modereret digitalt fællesskab for mennesker med bipolar. Her deler vi levede erfaringer gennem videoer og indlæg med fokus på det der faktisk har hjulpet os i hverdagen.

Det er til dig, der savner støtte og spejling efter diagnosen. Måske leder du efter håb, genkendelse, eller bare nogen der har stået der før.

Du behøver ikke dele noget selv. Du kan følge med, lære, reflektere — eller bidrage, hvis du har lyst. Du bestemmer.

Alt indhold bliver gennemgået, og fællesskabet er modereret og guidet af fagpersoner, så din oplevelse føles trygt med respekt for dit privatliv.

Pårørende er også velkomne. Partnere, familie og venner til mennesker med bipolar kan deltage, så længe de følger fællesskabets retningslinjer.
```

---

#### What isn't MitLivMed?

```markdown
- **Ikke terapi eller behandling.** MitLivMed er et fællesskabs- og refleksionsværktøj. Det erstatter ikke din behandler.

- **Ikke medicinsk rådgivning.** Vi kan ikke vurdere din situation, stille diagnoser eller anbefale medicin.

- **Ikke krisestøtte.** Vi kan ikke hjælpe i akutte kriser. Hvis du har brug for hjælp nu, så find den her:
```

**Button:** `Har du brug for hjælp?` → triggers crisis modal

---

#### Crisis Modal

**Header:** `Har du brug for hjælp nu?`

**Tier 1 — Akut (large buttons):**

| Label | Action | Note |
|-------|--------|------|
| Ring 112 | `tel:112` | Akut fare |
| Ring Livslinien | `tel:70201201` | Krise og selvmordstanker |

Microcopy under Livslinien: "Alle dage. Chat i åbningstid på livslinien.dk"

**Tier 2 — Tal med nogen i dag (cards):**

| Ressource | Telefon | Link | Målgruppe |
|-----------|---------|------|-----------|
| Psykiatrifondens Rådgivning | — | psykiatrifonden.dk | Angst, depression, pårørende |
| SIND Rådgivning | — | sindraadgivning.dk | Dig og pårørende |
| DepressionsLinien | 33 12 47 74 | depressionsforeningen.dk | Voksne 18+ med depression/bipolar |
| headspace | — | headspace.dk | Unge 12-25, gratis og anonymt |
| BørneTelefonen | 116 111 | bornetelefonen.dk | Børn og unge, gratis og anonymt |

**Tier 3 — Find lokal hjælp (text links):**
- Sundhedsstyrelsens "Akut hjælp" — samler relevante tilbud
- Lægevagten — hjælp udenfor egen læges åbningstid

**Modal behavior:**
- Dismiss: X icon + click outside
- Mobile: Full-screen takeover, large touch targets
- Accessibility: Focus trap, Escape key closes, `tel:` links work on mobile

---

#### Final CTA Section

**Title:**
```
Vær med fra start når vi lancerer MitLivMed i 2026
```

**Button:** `Skriv dig op til tidlig adgang`

**Success message:** `Tak! Du er skrevet op. Vi sender dig besked, når MitLivMed åbner.`

---

#### Footer

- Contact link
- Legal links (privacy policy, terms)
- Crisis resources link
- About link

---

### 4.4 Video Placeholder

The hero video is not yet finalized. Implement as a placeholder component that can swap between:
- Vimeo embed
- YouTube embed

Use a simple prop or environment variable to switch. For now, show a placeholder with play button overlay.

---

### 4.5 Form Integration

Use **Tally.so** embed for signup form. The form should appear in the hero and final CTA sections.

**Fields:**
- Email (required)
- Consent checkbox (required)

**UTM parameter passthrough:** Pass any URL params to hidden Tally fields.

---

### 4.6 Carousel Component

**IMPORTANT: Use the existing carousel code below as the basis. Adapt it for Next.js — do NOT rewrite from scratch.**

The carousel was already built by Claude. Adapt it with these changes:
1. Replace base64 logo with `next/image` component
2. Replace `Inter` font references with `Figtree`
3. Update background color to `#FCFAF7`
4. Remove language toggle (Danish only)
5. Keep all visual appearance and behavior intact

#### Carousel Content Data (Danish only)

```jsx
const content = {
  header: "Kan du genkende det?",
  quotes: [
    "Jeg er så træt af at forklare mig til folk, der ikke forstår.",
    "Det er ikke episoderne, der slider mig ned. Det er hverdagen imellem.",
    "Jeg har googlet mig gennem alt. Det meste er støj — eller direkte skadeligt.",
    "Jeg vil gerne tro på, at det bliver bedre. Men ikke hvis det føles som en løgn.",
    "Nogle gange har jeg bare brug for at vide, at nogen har stået her før mig."
  ],
  transition: "Det er ikke dig, der er forkert. Det er hullet efter behandlingen.",
  facts: [
    {
      stat: "42-51%",
      text: "bliver sendt hjem uden opfølgning den første måned — netop når risikoen er størst.",
      highlight: "Tidlig kontakt reducerer den risiko med 18%.",
      footnote: 1
    },
    {
      stat: "1 ud af 5",
      text: "opnår meningsfuld bedring gennem peer-støtte.",
      highlight: "Effekter der holder i mindst 6-9 måneder.",
      footnote: 2
    }
  ],
  closing: "Det her er ikke tomme ord. Det er dokumenteret, og det er derfor, vi bygger MitLivMed.",
  cta: "Kom i gang",
  footnotes: [
    { text: 'Stein BD, et al. "Outpatient Follow-up After Psychiatric Hospitalization." PMC, 2021.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8695636/' },
    { text: 'Høgh Egmose C, et al. Copenhagen Research Center for Mental Health. Psychiatric Services, 2023.', url: 'https://pubmed.ncbi.nlm.nih.gov/36751908/' }
  ]
};
```

#### Carousel Behavior

- **Autoplay:** 3 seconds per slide, 8 seconds on CTA slide
- **Pause on hover**, resume on mouse leave
- **Navigation:** Arrow buttons + clickable progress dots
- **Progress dots:** Teal for quotes, Orange for transition/facts/CTA
- **Animation:** Fade in with slight translateY (0.6s ease-out)

#### Carousel Component Structure (Adapt this)

```jsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MitLivMedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const content = { /* Danish content from above */ };

  const totalSlides = content.quotes.length + 1 + content.facts.length + 1; // 9 total
  const lastSlideIndex = totalSlides - 1;

  // Autoplay logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const duration = currentSlide === lastSlideIndex ? 8000 : 3000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, duration);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, currentSlide, lastSlideIndex, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const getSlideType = () => {
    if (currentSlide < content.quotes.length) return 'quote';
    if (currentSlide === content.quotes.length) return 'transition';
    if (currentSlide < content.quotes.length + 1 + content.facts.length) return 'fact';
    return 'closing';
  };

  const getSlideContent = () => {
    // Quote slides (0-4)
    if (currentSlide < content.quotes.length) {
      return (
        <div className="flex flex-col items-center justify-center min-h-64 px-6 text-center">
          <div className="text-6xl opacity-20 mb-4 text-lantern font-serif">"</div>
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl italic text-text-dark font-body" style={{ lineHeight: 1.7 }}>
            {content.quotes[currentSlide]}
          </p>
          <div className="text-6xl opacity-20 mt-4 rotate-180 text-lantern font-serif">"</div>
        </div>
      );
    }

    // Transition slide
    if (currentSlide === content.quotes.length) {
      return (
        <div className="flex flex-col items-center justify-center min-h-64 px-6 text-center">
          <div className="w-16 h-px mb-8 bg-gradient-to-r from-transparent via-lantern to-transparent"></div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight max-w-2xl text-lake font-heading">
            {content.transition}
          </p>
          <div className="w-16 h-px mt-8 bg-gradient-to-r from-transparent via-lantern to-transparent"></div>
        </div>
      );
    }

    // Fact slides
    const factIndex = currentSlide - content.quotes.length - 1;
    if (factIndex < content.facts.length) {
      const fact = content.facts[factIndex];
      return (
        <div className="flex flex-col items-center justify-center min-h-64 px-6 text-center">
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-lantern font-heading">
            {fact.stat}
          </div>
          <p className="text-lg md:text-xl max-w-xl mb-4 text-text-medium font-body" style={{ lineHeight: 1.7 }}>
            {fact.text}
          </p>
          <p className="text-lg md:text-xl font-medium max-w-xl mb-6 text-lake font-body">
            {fact.highlight}
          </p>
          {/* Inline footnote */}
          <div className="max-w-lg px-4 py-3 rounded-lg bg-lantern/5">
            <p className="text-xs text-text-light font-body" style={{ lineHeight: 1.5 }}>
              <sup className="mr-1 text-lantern">{fact.footnote}</sup>
              {content.footnotes[fact.footnote - 1].text}{' '}
              <a
                href={content.footnotes[fact.footnote - 1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-lantern hover:text-lake transition-colors"
              >
                Kilde ↗
              </a>
            </p>
          </div>
        </div>
      );
    }

    // Closing/CTA slide
    return (
      <div className="flex flex-col items-center justify-center min-h-64 px-6 text-center">
        <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-2xl mb-8 text-text-dark font-heading" style={{ lineHeight: 1.5 }}>
          {content.closing}
        </p>
        <button
          className="px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-lantern text-background font-heading"
          style={{ boxShadow: '0 4px 14px rgba(245, 130, 32, 0.3)' }}
        >
          {content.cta}
        </button>
      </div>
    );
  };

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Film grain texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.02,
        }}
      />

      {/* Subtle gradient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(245, 130, 32, 0.04) 0%, transparent 50%)`,
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 py-8 md:py-16">

        {/* Section header */}
        <div className={`mb-8 md:mb-12 transition-all duration-500 ${getSlideType() === 'quote' ? 'opacity-100' : 'opacity-40'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide text-text-dark font-heading">
            {content.header}
          </h2>
        </div>

        {/* Carousel container */}
        <div
          className="w-full max-w-4xl relative px-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slide content with fade animation */}
          <div className="relative overflow-hidden">
            <div key={currentSlide} className="animate-fadeIn">
              {getSlideContent()}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-plains hover:text-lantern transition-colors"
            aria-label="Forrige slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-plains hover:text-lantern transition-colors"
            aria-label="Næste slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex items-center gap-2 mt-8 md:mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => {
            let type = 'quote';
            if (index === content.quotes.length) type = 'transition';
            else if (index > content.quotes.length && index < content.quotes.length + 1 + content.facts.length) type = 'fact';
            else if (index >= content.quotes.length + 1 + content.facts.length) type = 'closing';

            const isActive = currentSlide === index;
            const isFactOrTransition = type === 'fact' || type === 'transition' || type === 'closing';

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  isActive ? 'w-8' : 'w-2'
                } h-2`}
                style={{
                  backgroundColor: isActive
                    ? (isFactOrTransition ? '#F58220' : '#2C5F63')
                    : (isFactOrTransition ? 'rgba(245, 130, 32, 0.3)' : '#D4D9C1')
                }}
                aria-label={`Gå til slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Auto-play indicator */}
        <div className="mt-4 text-xs text-text-light font-body">
          {isAutoPlaying ? (
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-lantern" />
              Automatisk afspilning
            </span>
          ) : (
            <span className="text-text-light/60">Sat på pause</span>
          )}
        </div>
      </div>
    </section>
  );
}
```

#### Required Tailwind Config Extensions

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#FCFAF7',
        lantern: '#F58220',
        lake: '#2C5F63',
        desert: '#E8D5B5',
        plains: '#D4D9C1',
        mountain: '#F2F4F7',
        'text-dark': '#2D2D2D',
        'text-medium': '#5A5A5A',
        'text-light': '#8A8A8A',
        'warm-black': '#3D2E1F',
      },
      fontFamily: {
        heading: ['Satoshi', 'sans-serif'],
        body: ['Figtree', 'sans-serif'],
        logo: ['"Reddit Sans"', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
```

---

## 5. Blueprint (Implementation Order)

### Phase 1: Project Setup
1. Initialize Next.js 14+ project with App Router
2. Install and configure Tailwind CSS
3. Install shadcn/ui, customize theme with brand colors
4. Set up fonts (Satoshi via Fontshare, Figtree + Reddit Sans via Google Fonts)
5. Copy image assets to `public/images/`

### Phase 2: Core Components
6. Header component (logo, "Om os", CTA)
7. Video placeholder component (swappable embed)
8. Hero section (centered title, two-column layout)
9. Waves divider component
10. Carousel component (adapt from reference above)

### Phase 3: Content Sections
11. Journey landscapes section (4 cards)
12. "What is" section (paragraphs)
13. "What isn't" section (bullets + crisis button)
14. Crisis modal component
15. Final CTA section

### Phase 4: Integration
16. Footer component
17. Tally.so form integration
18. Mobile responsive pass (test at 320px, 375px, 768px, 1024px)

### Phase 5: Polish
19. Accessibility audit (focus states, keyboard nav, screen reader)
20. Performance audit (Lighthouse)
21. Cross-browser testing

---

## 6. Validation Checklist

### Functionality
- [ ] All copy matches source exactly (no placeholders, no AI rewrites)
- [ ] Crisis modal opens, closes with X/Escape/outside click
- [ ] Crisis modal has focus trap
- [ ] `tel:` links work on mobile
- [ ] Form submissions work (Tally.so)
- [ ] Video placeholder displays correctly
- [ ] Carousel autoplay works (3s/8s timing)
- [ ] Carousel pauses on hover

### Responsive
- [ ] Works at 320px width (mobile-first)
- [ ] Works at 375px (iPhone)
- [ ] Works at 768px (tablet)
- [ ] Works at 1024px+ (desktop)
- [ ] Header hamburger menu on mobile

### Accessibility
- [ ] Lighthouse accessibility score ≥ 90
- [ ] Color contrast ≥ 4.5:1 for body text
- [ ] Visible focus states on all interactive elements
- [ ] Skip-to-content link
- [ ] Semantic HTML (headings, landmarks)
- [ ] Alt text for all images
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] Keyboard navigation for carousel

### Visual
- [ ] All CTAs use Lantern Orange (`#F58220`)
- [ ] Background is warm off-white (`#FCFAF7`)
- [ ] Fonts load correctly (Satoshi, Figtree, Reddit Sans)
- [ ] Film grain overlay visible but subtle
- [ ] Images display correctly via `next/image`

### Performance
- [ ] Lighthouse performance score ≥ 80
- [ ] Images optimized (WebP/AVIF via Next.js)
- [ ] No layout shift on load

---

## Reference Files

| File | Purpose |
|------|---------|
| `design/Site copy.md` | All page copy |
| `design/Carousel Module/MitLivMed Carousel Component Documentation.md` | Carousel spec |
| `design/Carousel Module/mitlivmed-carousel-branded.jsx` | Original carousel (reference) |
| `design/MLW website mockup v2 -desktop.png` | Visual reference |
| `design/images/` | Image assets |
| `docs/signup-form-prd.md` | Form requirements |
| `Branding and Marketing/MitLivMed-Brand-Book-v0.5.md` | Brand guidelines |

---

## Notes for Agent

1. **Do NOT use base64 for images.** Use `next/image` with files in `public/images/`.

2. **Copy must be verbatim.** Do not rewrite, improve, or "enhance" the Danish copy. It has been carefully reviewed for legal/ethical compliance.

3. **Mobile-first is mandatory.** Start with mobile layout, then add breakpoints for larger screens.

4. **Carousel:** Adapt the provided component code. Keep the visual appearance and behavior intact. Only change: images via next/image, Figtree font, #FCFAF7 background, Danish only.

5. **Film grain:** Use SVG noise texture at 2-3% opacity for organic, non-clinical feel.

6. **Crisis modal is safety-critical.** Must work perfectly. Focus trap, keyboard accessible, `tel:` links must work.

7. **Danish only for now.** No i18n setup needed.
