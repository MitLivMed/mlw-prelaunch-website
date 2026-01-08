## Overview

The `mitlivmed-carousel-branded.jsx` is a React component that serves as the hero section for the MitLivMed landing page. It's designed to emotionally engage visitors through a narrative flow: relatable quotes → pivotal transition → research-backed statistics → call-to-action.

The carousel supports Danish (primary) and English languages, with automatic progression and manual navigation.

---

## Design Philosophy

### Brand Aesthetic: "Warm Scandinavian Clarity"

- Clean, minimal layout with generous whitespace
- Warm eggshell background (`#FDFBF7`)
- Subtle film grain texture overlay for organic feel
- Typography hierarchy using Satoshi (headings), Inter (body), and Reddit Sans (logo)

### Emotional Flow

The carousel follows a deliberate narrative structure:

1. **Quotes (5 slides)** — Relatable pain points that visitors identify with
2. **Transition (1 slide)** — Reframe: "It's not you, it's the gap after treatment"
3. **Facts (2 slides)** — Research-backed statistics with inline citations
4. **CTA (1 slide)** — Call to action with longer pause time

---

## Technical Implementation

### Dependencies

```jsx
import React, { useState, useEffect } from 'react';
```

No external dependencies beyond React. All styling is inline for artifact compatibility.

### Font Imports (via CSS)

```css
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Reddit+Sans:wght@400;500;600;700&display=swap');
```

### Logo Handling

The MitLivMed logo is embedded as a base64 data URL to work within sandboxed artifact environments where filesystem paths don't resolve:

```jsx
const LOGO_BASE64 = "data:image/webp;base64,UklGR...";
```

The logo image file is located at `/mnt/user-data/uploads/mitlivmed-gradient-logo-transparent-cropped.png` if re-conversion is needed.

---

## Color Palette

|Name|Hex|Usage|
|---|---|---|
|Lantern Orange|`#F58220`|Primary accent, CTAs, highlights, progress dots|
|Lake Teal|`#2C5F63`|Secondary accent, journey stage color, headers|
|Warm Black|`#3D2E1F`|Logo text (Reddit Sans)|
|Base/Eggshell|`#FDFBF7`|Background|
|Text Dark|`#2D2D2D`|Primary body text|
|Text Medium|`#5A5A5A`|Secondary body text|
|Text Light|`#8A8A8A`|Footnotes, meta text|
|Cream Border|`#E8D5B5`|Subtle borders, dividers|
|Sage|`#D4D9C1`|Inactive progress dots|

---

## Content Structure

### Bilingual Content Object

```jsx
const content = {
  da: {
    header: "Kan du genkende det?",
    quotes: [...],           // 5 relatable quotes
    transition: "...",       // Pivotal reframe statement
    facts: [                 // Research statistics
      { stat: "42-51%", text: "...", highlight: "...", footnote: 1 },
      { stat: "1 ud af 5", text: "...", highlight: "...", footnote: 2 }
    ],
    closing: "...",          // CTA slide text
    cta: "Kom i gang",
    footnotes: [
      { text: "Citation...", url: "https://..." },
      { text: "Citation...", url: "https://..." }
    ],
    langSwitch: "English"
  },
  en: { ... }
};
```

### Footnotes with Source Links

Each fact slide displays its citation inline with a clickable "Kilde ↗" (Danish) or "Source ↗" (English) link:

**Source URLs:**

1. https://pmc.ncbi.nlm.nih.gov/articles/PMC8695636/
2. https://pubmed.ncbi.nlm.nih.gov/36751908/

---

## Carousel Behavior

### Autoplay Logic

- **Standard slides:** 3 seconds
- **CTA slide (last):** 8 seconds (longer pause before loop)
- Pauses on hover
- Resumes on mouse leave

```jsx
const duration = currentSlide === lastSlideIndex ? 8000 : 3000;
```

### Navigation

- **Arrow buttons:** Previous/Next with hover color change
- **Progress dots:** Click to jump to any slide
    - Teal dots for quotes
    - Orange dots for transition/facts/CTA
    - Active dot expands horizontally

### Slide Type Detection

```jsx
const getSlideType = () => {
  if (currentSlide < c.quotes.length) return 'quote';
  if (currentSlide === c.quotes.length) return 'transition';
  if (currentSlide < c.quotes.length + 1 + c.facts.length) return 'fact';
  return 'closing';
};
```

---

## Visual Elements

### Film Grain Overlay

Subtle SVG noise texture at 2% opacity for warmth:

```jsx
backgroundImage: `url("data:image/svg+xml,...")`,
opacity: 0.02
```

### Gradient Background

Soft radial gradient from top center:

```jsx
background: `radial-gradient(ellipse at 50% 0%, rgba(245, 130, 32, 0.04) 0%, transparent 50%)`
```

### Quote Styling

- Large decorative quotation marks in Lantern Orange (20% opacity)
- Italic text, Inter font, generous line height (1.7)

### Fact Styling

- Large stat number in Lantern Orange, Satoshi font
- Supporting text in medium gray
- Highlight text in Lake Teal
- Inline footnote in subtle orange-tinted card

### CTA Button

```jsx
style={{ 
  backgroundColor: '#F58220', 
  color: '#FDFBF7',
  fontFamily: 'Satoshi, sans-serif',
  boxShadow: '0 4px 14px rgba(245, 130, 32, 0.3)'
}}
```

---

## Header Component

### Logo + Wordmark

- Logo image (base64 embedded)
- "MitLivMed" text in Reddit Sans, warm black (`#3D2E1F`)

### Language Toggle

- Rounded pill button
- Cream border, switches between "English" / "Dansk"
- Hover effect: border and text turn Lantern Orange

---

## Animation

### Fade In (CSS Keyframes)

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Applied to slide content on each transition.

---

## File Locations

|Asset|Path|
|---|---|
|Component|`/mnt/user-data/outputs/mitlivmed-carousel-branded.jsx`|
|Logo (original)|`/mnt/user-data/uploads/mitlivmed-gradient-logo-transparent-cropped.png`|
|This documentation|`/mnt/user-data/outputs/mitlivmed-carousel-documentation.md`|

---

## Future Considerations

### Removed Features (by design decision)

- **Animated wave background** — Was too dynamic/distracting; removed in favor of clean static background

### Potential Enhancements

- Add more fact slides as research is gathered
- Implement touch/swipe gestures for mobile
- Add analytics tracking for slide views and CTA clicks
- Consider A/B testing different quote orders
- Integrate with CMS for content management

---

## Usage

```jsx
import MitLivMedCarousel from './mitlivmed-carousel-branded';

function LandingPage() {
  return (
    <div>
      <MitLivMedCarousel />
      {/* Additional sections below */}
    </div>
  );
}
```

The component is self-contained and fills the viewport height (`min-h-screen`). Additional page sections can be added below it.