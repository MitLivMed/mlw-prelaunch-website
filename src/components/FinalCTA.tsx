import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="signup"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-desert/30"
    >

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-8">
            Vær med fra start når vi lancerer MitLivMed i 2026
          </h2>

          <Button
            onClick={scrollToTop}
            size="lg"
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
