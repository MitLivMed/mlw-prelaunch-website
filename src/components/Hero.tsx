import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pb-14 md:pt-32 md:pb-18 lg:pb-22 overflow-visible">
      {/* Hero gradient background - extends past section to be hidden by wave's opaque areas */}
      <div 
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(128, 178, 253, 0.10) 0%, rgba(128, 178, 253, 0.10) 43%, rgba(255, 123, 2, 0.19) 100%)",
          height: "calc(100% + 150px)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Title */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-foreground leading-tight mb-2">
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
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
          {/* Video */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/VqFSCk_9NRA"
                title="MitLivMed video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Copy + CTA */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg md:text-xl text-text-dark font-body leading-relaxed mb-4">
              Diagnosen er startskuddet, ikke målstregen.
              <br />
              Der er hjælp, men hverdagen kan føles svær.
            </p>
            <p className="text-base md:text-lg text-text-dark font-body leading-relaxed mb-4">
              <strong className="font-semibold">Vi bygger noget til det, der kommer efter: resten af ens liv</strong>
            </p>
            <p className="text-base md:text-lg text-text-dark font-body leading-relaxed mb-4">
              MitLivMed er et digitalt fællesskab, hvor mennesker med bipolar affektiv lidelse kan dele deres historier og erfaringer,{" "}
              <span className="underline decoration-primary decoration-2 underline-offset-2">skræddersyet til dig</span>.
              {" "}Ikke medicinsk rådgivning. Ikke krisestøtte.
            </p>
            <p className="text-base md:text-lg text-text-dark font-body leading-relaxed mb-8">
              Vi er en bevægelse af mennesker, der deler det, der hjælper os med at leve godt med bipolar, i håb om at vi kan lære af at gå i hinandens fodspor.
            </p>

            <div className="space-y-3">
              <Button
                data-tally-open="0Q87J0"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-base px-8 py-6 cta-shadow hover:cta-shadow-hover hover:scale-105 transition-all"
              >
                Skriv dig op som betatester
              </Button>
              <p className="text-sm text-text-light font-body">
                MitLivMed lancerer i 2026. Er du nysgerrig eller har du lyst til at hjælpe os, så skriv dig op som betatester og sæt dit præg på MitLivMed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
