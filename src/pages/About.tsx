import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
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

      <main id="main-content" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-desert/30">

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Hero section */}
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Bygget på personlige erfaringer
            </h1>

            {/* Founder story */}
            <div className="font-body text-text-medium leading-relaxed space-y-6">
              <p>MitLivMed er skabt ud fra et behov, jeg selv stod i.</p>

              <p>
                Jeg hedder <strong className="text-foreground">Jesper Ohrt Juel Jensen</strong>, og jeg er medgrundlægger.
              </p>

              <p>
                For nogle år siden blev jeg ramt af en depression, der vendte alt på hovedet. Jeg ledte efter andre med bipolar, som jeg kunne spejle mig i. Ikke for at få råd eller diagnoser, bare for at se, at man godt kan få et godt liv alligevel.
              </p>

              <p>Men det, jeg fandt online, var enten for lidt eller for meget støj.</p>

              <p>
                Et par kendte ansigter, og ting der føltes mere kaotiske end hjælpsomme. Det gav mig ikke håb. Det gjorde mig mest bare mere alene.
              </p>

              <p>Jeg manglede noget andet.</p>

              <p>Jeg havde brug for at møde:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>nogen der har prøvet det, og kan sige højt, hvad der faktisk hjalp</li>
                <li>nogen der står i det nu, så man ikke føler sig alene</li>
                <li>nogen der kan give håb, uden at det bliver "positivt på kommando"</li>
              </ul>

              <p>Det blev startskuddet.</p>

              <p>
                Derfor bygger vi <strong className="text-foreground">MitLivMed</strong> som et modereret digitalt fællesskab for mennesker med bipolar, hvor du kan møde andres erfaringer, når du har brug for det. Det handler om det, der kommer efter: <strong className="text-foreground">hverdagen, relationerne, rutinerne, og håbet der føles ægte</strong>.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
