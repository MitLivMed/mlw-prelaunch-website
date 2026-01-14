# Analytics Setup - Executive Summary

**Date:** January 14, 2026
**Ticket:** MIT-45

## What We Added
PostHog analytics on the landing page to track visitor behavior and measure conversion funnel performance.

## Why PostHog?
- **EU-hosted** (eu.posthog.com) — GDPR compliant, data stays in EU
- **Cookieless mode** — No consent banner needed, no tracking cookies stored
- **Free tier** — 1M events/month, more than enough for pre-launch
- **Full control** — We own the data, can export anytime

## What We're Tracking

| Event | What it tells us |
|-------|------------------|
| `pageview` | How many visitors, which pages |
| `scroll_depth` | Are people reading the full page? (25/50/75/100%) |
| `video_play` | Are people watching the video? |
| `video_progress` | How much of the video do they watch? |
| `form_start` | How many people open the signup form |
| `form_submit` | How many complete signup (conversion!) |
| `crisis_modal_open` | Are people clicking the crisis resources link |

## Key Metric: Conversion Rate
`form_submit ÷ pageview` = What % of visitors sign up as beta testers

## Privacy Approach
- **No cookies** from our analytics (memory-only storage)
- **No session recording** — we don't watch what users do
- **No consent banner needed** — cookieless = no GDPR cookie consent required
- YouTube sets cookies only when video plays (unavoidable, but disclosed in cookie policy)

## Access
PostHog dashboard: https://eu.posthog.com
(Soren has login credentials)

## Technical Details
- Config: `src/lib/posthog.ts`
- Event hooks: `src/hooks/use-analytics.ts`
- Tally form tracking: `src/lib/tally.ts`
- YouTube tracking: `src/components/YouTubePlayer.tsx`
- Environment variables: `.env` (not committed), `.env.example` (template)
