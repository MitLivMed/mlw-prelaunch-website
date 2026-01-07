import { useState } from "react";
import wavesImage from "@/assets/waves-trans.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";

const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;

    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section
      id="signup"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Waves background */}
      <div className="absolute inset-0">
        <img
          src={wavesImage}
          alt=""
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-8">
            Vær med fra start når vi lancerer MitLivMed i 2026
          </h2>

          {isSubmitted ? (
            <div className="animate-scale-in bg-secondary/10 border border-secondary/30 rounded-2xl p-8">
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
              <p className="text-xl font-heading font-medium text-foreground mb-2">
                Tak! Du er skrevet op.
              </p>
              <p className="text-text-medium font-body">
                Vi sender dig besked, når MitLivMed åbner.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Input
                  type="email"
                  placeholder="Din e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="sm:w-80 h-12 text-base font-body border-border focus:border-primary focus:ring-primary"
                />
                <Button
                  type="submit"
                  disabled={!email || !consent || isLoading}
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold cta-shadow hover:cta-shadow-hover hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isLoading ? "Sender..." : "Skriv dig op til tidlig adgang"}
                </Button>
              </div>

              <div className="flex items-start gap-3 justify-center max-w-md mx-auto">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-text-medium font-body text-left cursor-pointer"
                >
                  Jeg accepterer, at MitLivMed må kontakte mig via e-mail om lanceringen.
                </label>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
