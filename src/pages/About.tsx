import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import wavesImage from "@/assets/waves-trans.png";
import jWhiteImage from "@/assets/j-white.jpg";
import jOrangeImage from "@/assets/j-orange.jpg";

type LayoutType = "hero" | "inline";
type PhotoType = "white" | "orange";

const About = () => {
  const [layout, setLayout] = useState<LayoutType>("hero");
  const [photo, setPhoto] = useState<PhotoType>("white");

  const currentPhoto = photo === "white" ? jWhiteImage : jOrangeImage;

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

      {/* Toggle Bar */}
      <div className="fixed top-16 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-b border-desert/30 py-3 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {/* Layout Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-text-light uppercase tracking-wider">
              Layout:
            </span>
            <div className="flex rounded-lg overflow-hidden border border-desert">
              <button
                onClick={() => setLayout("hero")}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${
                  layout === "hero"
                    ? "bg-primary text-white"
                    : "bg-white text-text-medium hover:bg-desert/20"
                }`}
              >
                Hero
              </button>
              <button
                onClick={() => setLayout("inline")}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${
                  layout === "inline"
                    ? "bg-primary text-white"
                    : "bg-white text-text-medium hover:bg-desert/20"
                }`}
              >
                Inline
              </button>
            </div>
          </div>

          {/* Photo Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-text-light uppercase tracking-wider">
              Foto:
            </span>
            <div className="flex rounded-lg overflow-hidden border border-desert">
              <button
                onClick={() => setPhoto("white")}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${
                  photo === "white"
                    ? "bg-secondary text-white"
                    : "bg-white text-text-medium hover:bg-desert/20"
                }`}
              >
                Hvid bg
              </button>
              <button
                onClick={() => setPhoto("orange")}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${
                  photo === "orange"
                    ? "bg-secondary text-white"
                    : "bg-white text-text-medium hover:bg-desert/20"
                }`}
              >
                Orange bg
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed toggle bar */}
      <div className="h-12" />

      <main id="main-content" className="relative py-16 md:py-24 overflow-hidden">
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
          <div className="max-w-3xl mx-auto">

            {/* LAYOUT A: Hero Placement */}
            {layout === "hero" && (
              <>
                {/* Hero with photo */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-desert/30 to-secondary/20 rounded-2xl blur-sm group-hover:blur-md transition-all" />
                      <img
                        src={currentPhoto}
                        alt="Jesper Ohrt Juel Jensen, medgrundlægger af MitLivMed"
                        className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-lg ring-2 ring-white/50"
                      />
                    </div>
                  </div>

                  {/* Headline */}
                  <div className="text-center md:text-left">
                    <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                      Bygget på personlige erfaringer
                    </h1>
                    <p className="font-body text-lg text-text-medium">
                      MitLivMed er skabt ud fra et behov, jeg selv stod i.
                    </p>
                  </div>
                </div>

                {/* Founder story */}
                <div className="font-body text-text-medium leading-relaxed space-y-6">
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
              </>
            )}

            {/* LAYOUT B: Inline Placement */}
            {layout === "inline" && (
              <>
                {/* Hero section */}
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">
                  Bygget på personlige erfaringer
                </h1>

                {/* Founder story */}
                <div className="font-body text-text-medium leading-relaxed space-y-6">
                  <p>MitLivMed er skabt ud fra et behov, jeg selv stod i.</p>

                  {/* Photo inline with name introduction */}
                  <div className="sm:flex sm:gap-6 sm:items-start">
                    <div className="float-left mr-6 mb-4 sm:float-none sm:mr-0 sm:mb-0 sm:flex-shrink-0">
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-desert/30 to-secondary/20 rounded-xl blur-sm group-hover:blur-md transition-all" />
                        <img
                          src={currentPhoto}
                          alt="Jesper Ohrt Juel Jensen, medgrundlægger af MitLivMed"
                          className="relative w-32 h-32 md:w-36 md:h-36 object-cover rounded-lg shadow-lg ring-2 ring-white/50"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="mb-6">
                        Jeg hedder <strong className="text-foreground">Jesper Ohrt Juel Jensen</strong>, og jeg er medgrundlægger.
                      </p>
                      <p>
                        For nogle år siden blev jeg ramt af en depression, der vendte alt på hovedet. Jeg ledte efter andre med bipolar, som jeg kunne spejle mig i. Ikke for at få råd eller diagnoser, bare for at se, at man godt kan få et godt liv alligevel.
                      </p>
                    </div>
                  </div>

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
              </>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
