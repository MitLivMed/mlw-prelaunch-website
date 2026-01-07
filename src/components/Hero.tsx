import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-16 sm:pb-20 md:pt-32 md:pb-24 lg:pb-28 overflow-visible">
      {/* Hero gradient background - extends past section to be hidden by wave's opaque areas */}
      <div 
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(128, 178, 253, 0.10) 0%, rgba(128, 178, 253, 0.10) 43%, rgba(255, 123, 2, 0.19) 100%)",
          height: "calc(100% + 80px)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Title */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight mb-2">
            Det ingen taler om..
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold leading-tight">
            Hvad sker der{" "}
            <span className="relative inline-block">
              <span className="text-primary">efter</span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/30 rounded-full" />
            </span>{" "}
            diagnosen?
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Video Placeholder */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-video bg-gradient-to-br from-desert/50 to-plains/50 rounded-xl overflow-hidden group cursor-pointer shadow-lg">
              {/* Placeholder thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center cta-shadow group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Coming soon overlay */}
              <div className="absolute bottom-4 left-4 bg-foreground/80 text-background px-3 py-1 rounded-full text-xs font-body">
                Video kommer snart
              </div>
            </div>
          </div>

          {/* Copy + CTA */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg md:text-xl text-text-dark font-body leading-relaxed mb-4">
              Støtten stopper, når krisen stopper.
              <br />
              Mestringen af hverdagen er den svære del.
            </p>
            <p className="text-base md:text-lg text-text-dark font-body leading-relaxed mb-4">
              <strong className="font-semibold">Vi bygger noget til det, der kommer efter:</strong>
            </p>
            <p className="text-base md:text-lg text-text-medium font-body leading-relaxed mb-8">
              MitLivMed er et digitalt fællesskab, hvor mennesker med bipolar affektiv lidelse kan dele deres historier og erfaringer,{" "}
              <span className="underline decoration-primary decoration-2 underline-offset-2">skræddersyet til dig</span>.
              {" "}Ikke medicinsk rådgivning. Ikke krisestøtte. Bare mennesker, der deler det, der hjælper dem med at leve godt med bipolar.
            </p>

            <div className="space-y-3">
              <Button
                onClick={scrollToSignup}
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-base px-8 py-6 cta-shadow hover:cta-shadow-hover hover:scale-105 transition-all"
              >
                Skriv dig op til tidlig adgang
              </Button>
              <p className="text-sm text-text-light font-body">
                MitLivMed åbner i starten af 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
