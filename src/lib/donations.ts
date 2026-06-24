/** Donation + fund + checkout-status calls against the MitLivMed backend. */
import { apiFetch } from "./api";

export const DONATION_PRESETS = [50, 75, 100] as const;
export const MIN_DONATION_DKK = 50;

export interface DonationCheckoutInput {
  amountDkk: number;
  email: string;
  name?: string;
  recurring: boolean;
}

export function createDonationCheckout(
  input: DonationCheckoutInput,
): Promise<{ clientSecret: string }> {
  return apiFetch<{ clientSecret: string }>("/api/donations/checkout", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export interface FundStatus {
  balanceDkk: number;
  activeSubsidisedCount: number;
}

export function getFundStatus(): Promise<FundStatus> {
  return apiFetch<FundStatus>("/api/donations/fund-status");
}

export interface SessionStatus {
  status: string | null;
  customerEmail: string | null;
  mode: string | null;
  subscriptionId: string | null;
  paymentIntentId: string | null;
}

export function getSessionStatus(sessionId: string): Promise<SessionStatus> {
  return apiFetch<SessionStatus>(
    `/api/payments/session-status?session_id=${encodeURIComponent(sessionId)}`,
  );
}
