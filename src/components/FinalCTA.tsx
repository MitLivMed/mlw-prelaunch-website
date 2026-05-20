import wavesImage from "@/assets/waves-trans.png";
import { Button } from "@/components/ui/button";
import { openSignupForm } from "@/lib/tally";

const FinalCTA = () => {

  return (
    <section
      id="signup"
      className="relative py-16 md:py-24 bg-warm-white overflow-hidden"
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-8">
            Vær med fra start når vi lancerer MitLivMed i 2026
          </h2>

          <Button
            size="lg"
            onClick={() => openSignupForm('final_cta')}
            className="bg-mountain-orange hover:bg-mountain-orange/90 text-warm-white font-heading font-semibold text-base px-8 py-6 hover:scale-105 transition-all"
          >
            Skriv dig på ventelisten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
