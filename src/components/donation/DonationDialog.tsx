import { useEffect, useState } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getStripe } from "@/lib/stripe";
import {
  createDonationCheckout,
  DONATION_PRESETS,
  MIN_DONATION_DKK,
} from "@/lib/donations";
import { apiErrorCode, ApiError } from "@/lib/api";

interface DonationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Preselect a preset tier (e.g. when a price card is clicked). */
  initialAmount?: number;
  /** Default billing interval. */
  initialRecurring?: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DonationDialog({
  open,
  onOpenChange,
  initialAmount,
  initialRecurring = true,
}: DonationDialogProps) {
  const [recurring, setRecurring] = useState(initialRecurring);
  const [preset, setPreset] = useState<number | null>(initialAmount ?? 75);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  // Reset to a clean form each time the dialog opens.
  useEffect(() => {
    if (open) {
      setRecurring(initialRecurring);
      setPreset(initialAmount ?? 75);
      setCustomAmount("");
      setError(null);
      setSubmitting(false);
      setClientSecret(null);
    }
  }, [open, initialAmount, initialRecurring]);

  const effectiveAmount =
    preset ?? (customAmount ? Math.floor(Number(customAmount)) : NaN);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!Number.isFinite(effectiveAmount) || effectiveAmount < MIN_DONATION_DKK) {
      setError(`Beløbet skal være mindst ${String(MIN_DONATION_DKK)} kr.`);
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError("Indtast en gyldig e-mailadresse.");
      return;
    }

    setSubmitting(true);
    try {
      const { clientSecret: secret } = await createDonationCheckout({
        amountDkk: effectiveAmount,
        email: email.trim(),
        name: name.trim() || undefined,
        recurring,
      });
      setClientSecret(secret);
    } catch (err) {
      if (apiErrorCode(err) || (err instanceof ApiError && err.status === 400)) {
        setError(`Beløbet skal være mindst ${String(MIN_DONATION_DKK)} kr.`);
      } else {
        setError("Noget gik galt. Prøv igen om lidt.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
        {clientSecret ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-title">Gennemfør din støtte</DialogTitle>
              <DialogDescription>
                Betalingen håndteres sikkert af Stripe.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-2">
              <EmbeddedCheckoutProvider
                stripe={getStripe()}
                options={{ clientSecret }}
              >
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="font-title text-2xl">
                Bliv støttemedlem
              </DialogTitle>
              <DialogDescription>
                Vælg dit bidrag. Ethvert beløb over {MIN_DONATION_DKK} kr går
                direkte til stipendiepuljen.
              </DialogDescription>
            </DialogHeader>

            {/* One-time / monthly toggle */}
            <div className="mt-5 grid grid-cols-2 gap-2 rounded-lg bg-[#F2EAE0] p-1">
              <button
                type="button"
                onClick={() => { setRecurring(true); }}
                className={`rounded-md py-2 text-sm font-medium transition-colors ${
                  recurring
                    ? "bg-mountain-orange text-white"
                    : "text-text-medium hover:text-soft-black"
                }`}
              >
                Månedligt
              </button>
              <button
                type="button"
                onClick={() => { setRecurring(false); }}
                className={`rounded-md py-2 text-sm font-medium transition-colors ${
                  !recurring
                    ? "bg-mountain-orange text-white"
                    : "text-text-medium hover:text-soft-black"
                }`}
              >
                Engangsbeløb
              </button>
            </div>

            {/* Preset tiers */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {DONATION_PRESETS.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    setPreset(amount);
                    setCustomAmount("");
                  }}
                  className={`rounded-lg border-[1.5px] py-3 text-center transition-all ${
                    preset === amount
                      ? "border-mountain-orange bg-mountain-orange-10"
                      : "border-[#E8DDD2] hover:border-mountain-orange"
                  }`}
                >
                  <span className="font-title text-xl font-semibold text-soft-black">
                    {amount}
                  </span>
                  <span className="block text-[11px] text-text-medium">
                    kr{recurring ? " / md" : ""}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="mt-3">
              <Label htmlFor="custom-amount" className="text-xs text-text-medium">
                Eller vælg selv (min. {MIN_DONATION_DKK} kr)
              </Label>
              <div className="relative mt-1">
                <Input
                  id="custom-amount"
                  type="number"
                  inputMode="numeric"
                  min={MIN_DONATION_DKK}
                  placeholder="Andet beløb"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setPreset(null);
                  }}
                  className="pr-10"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-text-light">
                  kr
                </span>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-4 space-y-3">
              <div>
                <Label htmlFor="donor-email" className="text-xs text-text-medium">
                  E-mail
                </Label>
                <Input
                  id="donor-email"
                  type="email"
                  required
                  placeholder="dig@eksempel.dk"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); }}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="donor-name" className="text-xs text-text-medium">
                  Navn (valgfrit)
                </Label>
                <Input
                  id="donor-name"
                  placeholder="Dit navn"
                  value={name}
                  onChange={(e) => { setName(e.target.value); }}
                  className="mt-1"
                />
              </div>
            </div>

            {error && (
              <p className="mt-3 text-sm text-red-600" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 w-full rounded-md bg-mountain-orange px-8 py-3.5 font-body text-[15px] font-medium text-white transition-colors hover:bg-mountain-orange-110 disabled:opacity-60"
            >
              {submitting
                ? "Et øjeblik…"
                : recurring
                  ? "Fortsæt til månedlig støtte →"
                  : "Fortsæt til betaling →"}
            </button>
            <p className="mt-3 text-center text-xs text-text-light">
              {recurring ? "Opsig når som helst. Ingen binding." : "Enkelt bidrag."}
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
