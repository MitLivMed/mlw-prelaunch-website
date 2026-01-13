import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import wavesImage from "@/assets/waves-trans.png";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  const mission = {
    statement: "Vi hjælper mennesker med psykiske lidelser med at mestre hverdagen gennem fortællinger man kan spejle sig i, guidet refleksion og et trygt fællesskab.",
    belief: "Folk har ikke brug for flere diagnoser eller quick fixes. De har brug for rollemodeller, følelsesmæssig forståelse og værktøjer til at klare hverdagen — pakket ind i et fællesskab der føles menneskeligt.",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Om os"
        description="Mød teamet bag MitLivMed og lær om vores mission: at hjælpe mennesker med bipolar med at mestre hverdagen gennem fællesskab og delte erfaringer."
        path="/om-os"
      />
      {/* Film grain overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Spring til indhold
      </a>

      <Header />

      <main id="main-content" className="relative overflow-hidden">
        {/* Waves background */}
        <div className="absolute inset-0">
          <img
            src={wavesImage}
            alt=""
            className="w-full h-full object-cover opacity-70"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10">
          {/* Mission & Story section */}
          <div className="pt-24 md:pt-32 pb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                {/* Mission statement */}
                <div className="text-center mb-12">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
                    Vores mission
                  </p>
                  <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug max-w-3xl mx-auto">
                    {mission.statement}
                  </h1>
                </div>

                {/* Core belief callout */}
                <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6 md:p-8 mb-12">
                  <p className="text-xs font-semibold text-secondary uppercase tracking-[0.2em] mb-3">
                    Det vi tror på
                  </p>
                  <p className="font-body text-text-medium leading-relaxed">
                    {mission.belief}
                  </p>
                </div>

                {/* Story */}
                <div className="font-body text-text-medium leading-relaxed space-y-5">
                  <p className="text-lg text-foreground font-medium">
                    MitLivMed er skabt ud fra et behov, jeg selv stod i.
                  </p>

                  <p>
                    For nogle år siden blev jeg ramt af en depression, der vendte alt på hovedet. Jeg ledte efter andre med bipolar, som jeg kunne spejle sig i. Ikke for at få råd eller diagnoser — bare for at se, at man godt kan få et godt liv alligevel.
                  </p>

                  <p>
                    Men det, jeg fandt online, var enten for lidt eller for meget støj. Et par kendte ansigter, og ting der føltes mere kaotiske end hjælpsomme. Det gav mig ikke håb. Det gjorde mig mest bare mere alene.
                  </p>

                  <p>Jeg manglede noget andet. Jeg havde brug for at møde:</p>

                  <ul className="space-y-2 ml-1">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>Nogen der har prøvet det, og kan sige højt, hvad der faktisk hjalp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>Nogen der står i det nu, så man ikke føler sig alene</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>Nogen der kan give håb, uden at det bliver "positivt på kommando"</span>
                    </li>
                  </ul>

                  <p className="pt-4">
                    Det blev startskuddet. Derfor bygger vi <strong className="text-foreground">MitLivMed</strong> — et modereret digitalt fællesskab for mennesker med bipolar, hvor du kan møde andres erfaringer, når du har brug for det.
                  </p>

                  <p className="text-lg text-foreground font-medium pt-2">
                    Det handler om det, der kommer efter: hverdagen, relationerne, rutinerne, og håbet der føles ægte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder photo section */}
          <div className="pb-16 md:pb-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                {/* Large centered photo */}
                <div className="relative inline-block mb-8">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-primary/10 via-desert/20 to-secondary/10 rounded-3xl blur-xl" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-desert/30 to-secondary/20 rounded-2xl" />

                  <img
                    src={founderImage}
                    alt="Jesper Ohrt Juel Jensen, grundlægger af MitLivMed"
                    className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover object-top rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Founder name */}
                <div>
                  <p className="font-heading text-xl md:text-2xl font-semibold text-foreground">
                    Jesper Ohrt Juel Jensen
                  </p>
                  <p className="text-text-medium mt-1">Grundlægger og adm. direktør</p>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer section */}
          <div className="pb-16 md:pb-24">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Bliv Frivillig
                </h2>
                <p className="font-body text-text-medium leading-relaxed">
                  Hvis du har lyst til at hjælpe på anden måde end som betatester før lancering, så skriv til os på{" "}
                  <a
                    href="mailto:kontakt@mitlivmed.dk?subject=Frivillig%20i%20MitLivMed"
                    className="text-primary hover:text-primary/80 underline transition-colors"
                  >
                    kontakt@mitlivmed.dk
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
