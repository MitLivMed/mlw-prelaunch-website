/**
 * Lazily-loaded Stripe.js singleton for Embedded Checkout.
 *
 * Uses the publishable key (VITE_STRIPE_PUBLISHABLE_KEY) — safe in the browser.
 * loadStripe is memoised so Stripe.js is fetched at most once per page load.
 */
import { loadStripe, type Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      console.error(
        "[stripe] VITE_STRIPE_PUBLISHABLE_KEY is not set — checkout will not load.",
      );
    }
    stripePromise = loadStripe(key ?? "");
  }
  return stripePromise;
}
