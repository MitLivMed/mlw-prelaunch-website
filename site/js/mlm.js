/**
 * Shared client code for every page (MLM-2554), ported from the React app
 * (src/lib/api.ts, src/lib/posthog.ts, src/hooks/use-analytics.ts).
 *
 * Keys and URLs come from Vercel environment variables at build time
 * (import.meta.env.VITE_*), exactly like on the old site: nothing is
 * hard-coded. Exposed as window.MLM for the pages' inline scripts:
 *   MLM.api.get(path) / MLM.api.post(path, body)  -> parsed JSON
 *   MLM.track(event, props)                        -> PostHog event
 *   MLM.stripe()                                   -> Promise<Stripe> (Stripe.js)
 *   MLM.wireForm(form, options)                    -> sends a form to the API
 * Never put form values, landskab or other health data in events.
 */
import posthog from "posthog-js";
// "pure": Stripe.js is only fetched when MLM.stripe() is called (the støt page),
// not on every page load.
import { loadStripe } from "@stripe/stripe-js/pure";

// ── API client ────────────────────────────────────────────────────────────
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://api.mitlivmed.dk";

class ApiError extends Error {
  constructor(status, body, message) {
    super(message ?? `API request failed (${status})`);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
    // The backend's `{ error: "<code>" }` on 4xx, if any.
    this.code = body && typeof body === "object" && typeof body.error === "string" ? body.error : null;
  }
}

async function apiFetch(path, init = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(init.headers ?? {}) },
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) throw new ApiError(res.status, data, data && data.error ? String(data.error) : undefined);
  return data;
}

const api = {
  get: (path) => apiFetch(path),
  post: (path, body) => apiFetch(path, { method: "POST", body: JSON.stringify(body) }),
};

// ── Analytics (PostHog, cookieless) ───────────────────────────────────────
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || "https://eu.i.posthog.com";
// Never from a developer's machine: `vercel dev` uses the project's real key.
const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
const analyticsOn = Boolean(POSTHOG_KEY) && !isLocal;

if (analyticsOn) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    // Cookieless mode - no consent banner needed
    persistence: "memory",
    // Disable session recording for privacy
    disable_session_recording: true,
    // Pageviews are sent manually below
    capture_pageview: false,
    // Keep events clean and intentional
    autocapture: false,
    // Only the events below: no heatmaps, dead clicks, web vitals or surveys,
    // even if they are switched on in the PostHog project settings
    capture_heatmaps: false,
    capture_dead_clicks: false,
    capture_performance: false,
    disable_surveys: true,
    // Don't load extra scripts from PostHog's servers (keeps the CSP tight)
    disable_external_dependency_loading: true,
    loaded: (ph) => {
      if (import.meta.env.DEV) ph.debug();
    },
  });
} else if (import.meta.env.DEV) {
  console.info(`PostHog: analytics disabled (${isLocal ? "localhost" : "no VITE_POSTHOG_KEY"}).`);
}

function track(event, props) {
  if (analyticsOn) posthog.capture(event, props);
}

// Page view on every page
track("$pageview", { $current_url: window.location.href, path: window.location.pathname });

// The 404 page marks itself with data-page="404"
if (document.documentElement.dataset.page === "404") track("404", { path: window.location.pathname });

// Scroll depth milestones
const scrolled = new Set();
window.addEventListener(
  "scroll",
  () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    for (const milestone of [25, 50, 75, 100]) {
      if (percent >= milestone && !scrolled.has(milestone)) {
        scrolled.add(milestone);
        track("scroll_depth", { percent: milestone });
      }
    }
  },
  { passive: true },
);

// Video play: the pages swap a thumbnail for a youtube-nocookie iframe on click
new MutationObserver((mutations) => {
  for (const m of mutations) {
    for (const node of m.addedNodes) {
      const id = node.tagName === "IFRAME" && (node.src.match(/youtube-nocookie\.com\/embed\/([\w-]+)/) || [])[1];
      if (id) track("video_play", { video_id: id });
    }
  }
}).observe(document.body, { childList: true, subtree: true });

// ── Stripe (ported from src/lib/stripe.ts) ────────────────────────────────
// The publishable key is public by design; it comes from the env like the rest.
let stripePromise = null;
function stripe() {
  if (!stripePromise) {
    const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (!key) console.error("[stripe] VITE_STRIPE_PUBLISHABLE_KEY is not set: checkout will not load.");
    stripePromise = loadStripe(key ?? "");
  }
  return stripePromise;
}

// ── Forms (MLM-2556) ──────────────────────────────────────────────────────
// Sends a form to an API endpoint. Options:
//   name     form id for analytics (never field values)
//   path     API path, e.g. "/api/contact"
//   build()  returns the JSON body, or null to stop (e.g. failed validation)
//   done(result, body)  shows the success state
//   error    element for error messages (role="alert")
//   fallback e-mail address to offer when sending fails (default kontakt@)
// Each form has a hidden honeypot field name="website" that only bots fill in.
function wireForm(form, { name, path, build, done, error, fallback = "kontakt@mitlivmed.dk" }) {
  let started = false;
  form.addEventListener("focusin", () => {
    if (!started) {
      started = true;
      track("form_start", { form_id: name });
    }
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const body = build();
    if (!body) return;
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) body.website = honeypot.value;
    const button = form.querySelector('[type="submit"]');
    button.disabled = true;
    error.hidden = true;
    try {
      const result = await api.post(path, body);
      track("form_submit", { form_id: name });
      done(result, body);
    } catch (err) {
      const to = typeof fallback === "function" ? fallback() : fallback;
      error.textContent =
        err instanceof ApiError && err.status === 429
          ? "Du har sendt flere gange på kort tid. Vent lidt, og prøv igen."
          : `Det lykkedes ikke at sende. Prøv igen, eller skriv til ${to}.`;
      error.hidden = false;
    } finally {
      button.disabled = false;
    }
  });
}

window.MLM = { api, ApiError, track, stripe, wireForm };
