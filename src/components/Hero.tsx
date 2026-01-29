import { Button } from "@/components/ui/button";
import { openSignupForm } from "@/lib/tally";
import YouTubePlayer from "./YouTubePlayer";

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
<span className="text-primary">efter</span>{" "}
            diagnosen?
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
          {/* Video */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <YouTubePlayer
                videoId="g5g9MU010NI"
                title="MitLivMed video"
              />
            </div>
          </div>

          {/* Copy + CTA */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg md:text-xl text-text-dark font-body leading-relaxed mb-4">
              Diagnosen er startskuddet - ikke målstregen.
              <br />
              Der er hjælp, men hverdagen kan føles svær.
            </p>
            <p className="text-base md:text-lg text-text-dark font-body leading-relaxed mb-4 md:mb-4">
              <strong className="font-semibold">Vi bygger noget til det, der kommer efter: resten af livet</strong>
            </p>

            {/* CTA - mobile only (above the fold) */}
            <div className="md:hidden space-y-3 mb-6">
              <Button
                size="lg"
                onClick={() => openSignupForm('hero')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-base px-8 py-6 cta-shadow hover:cta-shadow-hover hover:scale-105 transition-all"
              >
                Skriv dig på ventelisten
              </Button>
              <p className="text-sm text-text-light font-body">
                MitLivMed lancerer i 2026. Er du nysgerrig eller har du lyst til at hjælpe os, så skriv dig op som betatester og sæt dit præg på MitLivMed.
              </p>
            </div>

            <p className="text-base md:text-lg text-text-dark font-body leading-relaxed mb-4">
              MitLivMed er et digitalt fællesskab,{" "}
              <span className="underline decoration-foreground decoration-2 underline-offset-2">skræddersyet til dig</span>
              , hvor mennesker med bipolar affektiv lidelse kan dele deres historier og erfaringer. Ikke medicinsk rådgivning. Ikke krisestøtte.
            </p>
            <p className="text-base md:text-lg text-text-dark font-body leading-relaxed mb-8 md:mb-8">
              Vi er en bevægelse af mennesker, der deler det, der hjælper os med at leve godt med bipolar, i håb om at vi kan lære af at gå i hinandens fodspor.
            </p>

            {/* CTA - desktop only */}
            <div className="hidden md:block space-y-3">
              <Button
                size="lg"
                onClick={() => openSignupForm('hero')}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-base px-8 py-6 cta-shadow hover:cta-shadow-hover hover:scale-105 transition-all"
              >
                Skriv dig på ventelisten
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
