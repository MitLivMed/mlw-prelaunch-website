# MitLivMed Meta Tags Implementation

> Ready-to-use meta configuration for Next.js 14+ App Router.  
> Includes SEO, Open Graph, Twitter Cards, and structured data.

---

## Quick Start

Copy the metadata export to your `app/layout.tsx` or `app/page.tsx`.

---

## Option 1: In layout.tsx (Recommended)

```tsx
// app/layout.tsx
import type { Metadata } from 'next'

const siteUrl = 'https://mitlivmed.dk' // Update with your actual domain

export const metadata: Metadata = {
  // Basic Meta
  title: 'MitLivMed — Fællesskab for mennesker med bipolar',
  description: 'Hverdagen efter diagnosen er den svære del. MitLivMed er et peer-support fællesskab, hvor mennesker med bipolar deler det, der faktisk hjælper. Åbner 2026.',
  
  // Indexing
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: siteUrl,
    siteName: 'MitLivMed',
    title: 'MitLivMed — Fællesskab for mennesker med bipolar',
    description: 'Hverdagen efter diagnosen er den svære del. Et peer-support fællesskab, hvor mennesker med bipolar deler det, der faktisk hjælper.',
    images: [
      {
        url: '/images/og-image.png', // Create this image: 1200x630px
        width: 1200,
        height: 630,
        alt: 'MitLivMed — Fællesskab for mennesker med bipolar',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'MitLivMed — Fællesskab for mennesker med bipolar',
    description: 'Hverdagen efter diagnosen er den svære del. Et peer-support fællesskab, hvor mennesker med bipolar deler det, der faktisk hjælper.',
    images: ['/images/og-image.png'],
    // creator: '@mitlivmed', // Add when you have Twitter account
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Theme
  themeColor: '#FCFAF7', // Your warm off-white background
  
  // Verification (add these after setting up Search Console)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
```

---

## Option 2: Separate metadata.ts file

```tsx
// app/metadata.ts
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mitlivmed.dk'

export const siteMetadata: Metadata = {
  title: {
    default: 'MitLivMed — Fællesskab for mennesker med bipolar',
    template: '%s | MitLivMed', // For subpages like "Privacy Policy | MitLivMed"
  },
  description: 'Hverdagen efter diagnosen er den svære del. MitLivMed er et peer-support fællesskab, hvor mennesker med bipolar deler det, der faktisk hjælper. Åbner 2026.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: siteUrl,
    siteName: 'MitLivMed',
    title: 'MitLivMed — Fællesskab for mennesker med bipolar',
    description: 'Hverdagen efter diagnosen er den svære del. Et peer-support fællesskab, hvor mennesker med bipolar deler det, der faktisk hjælper.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MitLivMed — Fællesskab for mennesker med bipolar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MitLivMed — Fællesskab for mennesker med bipolar',
    description: 'Hverdagen efter diagnosen er den svære del. Et peer-support fællesskab, hvor mennesker med bipolar deler det, der faktisk hjælper.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#FCFAF7',
}

// Then in layout.tsx:
// import { siteMetadata } from './metadata'
// export const metadata = siteMetadata
```

---

## Structured Data (JSON-LD)

Add this component and include it in your layout:

```tsx
// components/structured-data.tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MitLivMed',
    url: 'https://mitlivmed.dk',
    logo: 'https://mitlivmed.dk/images/mitlivmed-logo.png',
    description: 'Et peer-support fællesskab for mennesker med bipolar affektiv lidelse',
    foundingDate: '2025',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@mitlivmed.dk',
      contactType: 'customer support',
      availableLanguage: ['Danish', 'English'],
    },
    sameAs: [
      // Add your social profiles when created
      // 'https://www.instagram.com/mitlivmed',
      // 'https://www.linkedin.com/company/mitlivmed',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// For the landing page specifically, you can also add WebPage schema:
export function WebPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'MitLivMed — Fællesskab for mennesker med bipolar',
    description: 'Skriv dig op til tidlig adgang til MitLivMed, et peer-support fællesskab for mennesker med bipolar.',
    url: 'https://mitlivmed.dk',
    inLanguage: 'da',
    isPartOf: {
      '@type': 'WebSite',
      name: 'MitLivMed',
      url: 'https://mitlivmed.dk',
    },
    about: {
      '@type': 'Thing',
      name: 'Bipolar affektiv lidelse',
      sameAs: 'https://da.wikipedia.org/wiki/Bipolar_lidelse',
    },
    mainEntity: {
      '@type': 'Product',
      name: 'MitLivMed',
      description: 'Peer-support platform for mennesker med bipolar',
      brand: {
        '@type': 'Brand',
        name: 'MitLivMed',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
        price: '0',
        priceCurrency: 'DKK',
        availabilityStarts: '2026-01-01',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

**Usage in layout.tsx:**
```tsx
import { OrganizationSchema, WebPageSchema } from '@/components/structured-data'

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <OrganizationSchema />
        <WebPageSchema />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## Privacy Policy Page Meta

```tsx
// app/privacy/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privatlivspolitik',
  description: 'Læs om hvordan MitLivMed indsamler, bruger og beskytter dine personlige oplysninger.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    // Your privacy policy content
  )
}
```

---

## robots.txt

Create this file at `public/robots.txt`:

```
# MitLivMed robots.txt

User-agent: *
Allow: /

# Sitemap
Sitemap: https://mitlivmed.dk/sitemap.xml

# Disallow admin/API routes if any
# Disallow: /api/
```

---

## Sitemap Configuration

Next.js 14 can auto-generate sitemaps:

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mitlivmed.dk'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    // Add more pages as you create them
  ]
}
```

---

## OG Image Specification

Create `/public/images/og-image.png` with these specs:

| Property | Value |
|----------|-------|
| Dimensions | 1200 × 630 px |
| Format | PNG or JPG |
| File size | < 1MB (ideally < 300KB) |

**Suggested design:**
- Background: Your warm off-white (#FCFAF7) or gradient version
- Logo: Centered or top-left
- Headline: "Fællesskab for mennesker med bipolar"
- Subline: "Åbner 2026 — Skriv dig op"
- Accent: Lantern orange (#F58220) for visual interest
- Consider adding the waves graphic subtly

**Quick creation options:**
- Figma (use your existing design system)
- Canva (free, quick)
- og-image.vercel.app (code-based generation)

---

## Favicon Set

You'll need these files in `/public/`:

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 32×32 | Classic browser favicon |
| `favicon-16x16.png` | 16×16 | Small favicon |
| `favicon-32x32.png` | 32×32 | Standard favicon |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-192x192.png` | 192×192 | Android |
| `android-chrome-512x512.png` | 512×512 | Android splash |

**Quick generation:**
Use [realfavicongenerator.net](https://realfavicongenerator.net) — upload your logo, it generates all sizes.

---

## Verification After Deployment

### Test Tools

| Tool | URL | What it checks |
|------|-----|----------------|
| Google Rich Results | search.google.com/test/rich-results | Structured data |
| Twitter Card Validator | cards-dev.twitter.com/validator | Twitter preview |
| Facebook Debugger | developers.facebook.com/tools/debug | OG tags |
| LinkedIn Inspector | linkedin.com/post-inspector | LinkedIn preview |
| OpenGraph.xyz | opengraph.xyz | All social previews |

### Manual Checklist

- [ ] Title shows correctly in browser tab
- [ ] Description appears in search results (use Google site:yoursite.com)
- [ ] OG image loads when sharing to Twitter
- [ ] OG image loads when sharing to Facebook
- [ ] OG image loads when sharing to LinkedIn
- [ ] Favicon shows in browser tab
- [ ] Apple touch icon shows when adding to iOS home screen
- [ ] Structured data validates without errors
- [ ] robots.txt accessible at /robots.txt
- [ ] sitemap.xml accessible at /sitemap.xml

---

## English Version (If Adding Later)

When you add English support, you'll need `hreflang` tags:

```tsx
export const metadata: Metadata = {
  // ... other metadata
  alternates: {
    canonical: '/',
    languages: {
      'da': '/',
      'en': '/en',
    },
  },
}
```

And separate meta content for the English page:

```tsx
// app/en/page.tsx or via i18n routing
export const metadata: Metadata = {
  title: 'MitLivMed — Community for people living with bipolar',
  description: 'The everyday part is the hard part. MitLivMed is a peer-support community where people living with bipolar share what actually helps. Opening 2026.',
  openGraph: {
    locale: 'en_US',
    // ... rest of OG config
  },
}
```
