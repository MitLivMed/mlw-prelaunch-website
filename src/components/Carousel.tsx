import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const content = {
  header: "Kan du genkende det?",
  quotes: [
    "Jeg er så træt af at forklare mig til folk, der ikke forstår.",
    "Det er ikke episoderne, der slider mig ned. Det er hverdagen imellem.",
    "Jeg har googlet mig gennem alt. Det meste er støj — eller direkte skadeligt.",
    "Jeg vil gerne tro på, at det bliver bedre. Men ikke hvis det føles som en løgn.",
    "Nogle gange har jeg bare brug for at vide, at nogen har stået her før mig.",
  ],
  transition: "Det er ikke dig, der er forkert. Det er hullet efter behandlingen.",
  facts: [
    {
      stat: "42-51%",
      text: "bliver sendt hjem uden opfølgning den første måned — netop når risikoen er størst.",
      highlight: "Tidlig kontakt reducerer den risiko med 18%.",
      footnote: 1,
    },
    {
      stat: "1 ud af 5",
      text: "opnår meningsfuld bedring gennem peer-støtte.",
      highlight: "Effekter der holder i mindst 6-9 måneder.",
      footnote: 2,
    },
  ],
  closing: "Det her er ikke tomme ord. Det er dokumenteret, og det er derfor, vi bygger MitLivMed.",
  cta: "Skriv dig op som betatester",
  footnotes: [
    {
      text: 'Stein BD, et al. "Outpatient Follow-up After Psychiatric Hospitalization." PMC, 2021.',
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8695636/",
    },
    {
      text: "Høgh Egmose C, et al. Copenhagen Research Center for Mental Health. Psychiatric Services, 2023.",
      url: "https://pubmed.ncbi.nlm.nih.gov/36751908/",
    },
  ],
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = content.quotes.length + 1 + content.facts.length + 1;
  const lastSlideIndex = totalSlides - 1;

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  }, [totalSlides]);

  // Autoplay logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const duration = currentSlide === lastSlideIndex ? 8000 : 3000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, duration);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, currentSlide, lastSlideIndex, totalSlides]);

  const getSlideType = () => {
    if (currentSlide < content.quotes.length) return "quote";
    if (currentSlide === content.quotes.length) return "transition";
    if (currentSlide < content.quotes.length + 1 + content.facts.length) return "fact";
    return "closing";
  };

  const getSlideContent = () => {
    // Quote slides (0-4)
    if (currentSlide < content.quotes.length) {
      return (
        <div className="flex flex-col items-center justify-center min-h-64 px-6 text-center">
          <div className="text-5xl md:text-6xl opacity-20 mb-4 text-primary font-serif">"</div>
          <p className="text-lg md:text-xl lg:text-2xl font-body font-light leading-relaxed max-w-2xl italic text-text-dark">
            {content.quotes[currentSlide]}
          </p>
          <div className="text-5xl md:text-6xl opacity-20 mt-4 rotate-180 text-primary font-serif">"</div>
        </div>
      );
    }

    // Transition slide
    if (currentSlide === content.quotes.length) {
      return (
        <div className="flex flex-col items-center justify-center min-h-64 px-6 text-center">
          <div className="w-16 h-px mb-8 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold leading-tight max-w-2xl text-primary">
            {content.transition}
          </p>
          <div className="w-16 h-px mt-8 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      );
    }

    // Fact slides
    const factIndex = currentSlide - content.quotes.length - 1;
    if (factIndex < content.facts.length) {
      const fact = content.facts[factIndex];
      return (
        <div className="flex flex-col items-center justify-center min-h-64 px-6 text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 tracking-tight text-primary">
            {fact.stat}
          </div>
          <p className="text-base md:text-lg max-w-xl mb-4 text-text-medium font-body leading-relaxed">
            {fact.text}
          </p>
          <p className="text-base md:text-lg font-semibold max-w-xl mb-6 text-plains-text font-body">
            {fact.highlight}
          </p>
          {/* Inline footnote */}
          <div className="max-w-lg px-4 py-3 rounded-lg bg-primary/5">
            <p className="text-xs text-text-light font-body leading-relaxed">
              <sup className="mr-1 text-primary">{fact.footnote}</sup>
              {content.footnotes[fact.footnote - 1].text}{" "}
              <a
                href={content.footnotes[fact.footnote - 1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-secondary transition-colors"
              >
                Kilde ↗
              </a>
            </p>
          </div>
        </div>
      );
    }

    // Closing/CTA slide
    return (
      <div className="flex flex-col items-center justify-center min-h-64 px-6 text-center">
        <p className="text-lg md:text-xl lg:text-2xl font-heading font-medium leading-relaxed max-w-2xl mb-8 text-text-dark">
          {content.closing}
        </p>
        <Button
          data-tally-open="0Q87J0"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-base px-8 py-6 cta-shadow hover:cta-shadow-hover hover:scale-105 transition-all"
        >
          {content.cta}
        </Button>
      </div>
    );
  };

  return (
    <section className="pt-[74px] pb-14 md:pt-[92px] md:pb-[74px] bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-8 md:mb-12 transition-all duration-500 ${
            getSlideType() === "quote" ? "opacity-100" : "opacity-40"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-text-dark">
            {content.header}
          </h2>
        </div>

        {/* Carousel container */}
        <div
          className="w-full max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slide content with fade animation */}
          <div className="relative overflow-hidden">
            <div key={currentSlide} className="animate-fade-in">
              {getSlideContent()}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-plains hover:text-primary transition-colors"
            aria-label="Forrige slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-plains hover:text-primary transition-colors"
            aria-label="Næste slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => {
            let type = "quote";
            if (index === content.quotes.length) type = "transition";
            else if (index > content.quotes.length && index < content.quotes.length + 1 + content.facts.length)
              type = "fact";
            else if (index >= content.quotes.length + 1 + content.facts.length) type = "closing";

            const isActive = currentSlide === index;
            const isFactOrTransition = type === "fact" || type === "transition" || type === "closing";

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${isActive ? "w-8" : "w-2"} h-2`}
                style={{
                  backgroundColor: isActive
                    ? isFactOrTransition
                      ? "hsl(var(--primary))"
                      : "hsl(var(--secondary))"
                    : isFactOrTransition
                    ? "hsla(27, 91%, 54%, 0.3)"
                    : "hsl(var(--plains))",
                }}
                aria-label={`Gå til slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4 text-xs text-text-light font-body">
          {isAutoPlaying ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-primary" />
              Automatisk afspilning
            </span>
          ) : (
            <span className="opacity-60">Sat på pause</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
