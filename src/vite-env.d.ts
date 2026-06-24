/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the MitLivMed backend API, e.g. http://localhost:3001 or https://api.mitlivmed.dk */
  readonly VITE_API_BASE_URL?: string;
  /** Stripe publishable key (pk_test_… locally, pk_live_… in prod). Safe to ship to the browser. */
  readonly VITE_STRIPE_PUBLISHABLE_KEY?: string;
  readonly VITE_POSTHOG_KEY?: string;
  readonly VITE_POSTHOG_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
