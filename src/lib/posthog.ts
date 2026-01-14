import posthog from 'posthog-js';

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com';

export function initPostHog() {
  if (!POSTHOG_KEY) {
    console.warn('PostHog: No API key found. Analytics disabled.');
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    // Cookieless mode - no consent banner needed
    persistence: 'memory',
    // Disable session recording for privacy
    disable_session_recording: true,
    // Don't track pageviews automatically - we'll do it manually for SPAs
    capture_pageview: false,
    // Disable autocapture to keep events clean and intentional
    autocapture: false,
    // Enable debug mode in development
    loaded: (posthog) => {
      if (import.meta.env.DEV) {
        console.log('PostHog: Initialized successfully');
        posthog.debug();
      }
    },
  });
}

export { posthog };
