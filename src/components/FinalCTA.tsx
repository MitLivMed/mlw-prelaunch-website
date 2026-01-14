import wavesImage from "@/assets/waves-trans.png";
import { Button } from "@/components/ui/button";
import { openSignupForm } from "@/lib/tally";

const FinalCTA = () => {

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
          className="w-full h-full object-cover opacity-90"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-8">
            Vær med fra start når vi lancerer MitLivMed i 2026
          </h2>

          <Button
            size="lg"
            onClick={() => openSignupForm('final_cta')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-base px-8 py-6 cta-shadow hover:cta-shadow-hover hover:scale-105 transition-all"
          >
            Skriv dig op som betatester
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
