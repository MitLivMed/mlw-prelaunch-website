import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
const Consent = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Samtykkeerklæring"
        description="Læs om MitLivMeds behandling af dine sundhedsrelaterede oplysninger, jf. GDPR artikel 9."
        path="/samtykkeerklaering"
      />

      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-mountain-orange focus:text-mountain-orange-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Spring til indhold
      </a>

      <Header />

      <main id="main-content" className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Samtykkeerklæring
            </h1>

            {/* Version badge */}
            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-plain-green-30 text-plain-green-100 border border-plain-green-30">
                Version 1.0
              </span>
              <span className="text-sm text-text-light">
                Sidst opdateret: 3. oktober 2026
              </span>
            </div>

            {/* Intro */}
            <section className="mb-10">
              <p className="font-body font-semibold text-foreground mb-4">
                Vores behandling af dine sundhedsrelaterede oplysninger
              </p>
              <div className="font-body text-text-medium leading-relaxed space-y-4">
                <p>
                  MitLivMed er et peer-support-fællesskab for mennesker, der lever med psykiske
                  diagnoser. Vi bliver derfor nødt til at behandle helbredsoplysninger om dig for
                  at levere vores ydelser.
                </p>
                <p>
                  Vi behandler overordnet to kategorier af helbredsoplysninger om dig, hhv.
                  strukturerede sundhedsrelaterede oplysninger (se pkt. 1) og brugerindhold, der
                  udgør helbredsoplysninger. Eftersom undtagelsen til behandling af
                  helbredsoplysninger i brugerindhold udgøres af GDPR artikel 9, stk. 2, litra e,
                  fordi du selv har valgt at offentliggøre dem, vedrører denne samtykkeerklæring
                  alene behandling af strukturerede sundhedsrelaterede oplysninger.
                </p>
                <p>
                  <strong className="text-foreground">MitLivMed ApS</strong>, CVR-nr. 46193040,
                  Otto Busses Vej 5, 2., 2450 København SV (
                  <strong className="text-foreground">MitLivMed</strong>) er dataansvarlig for
                  behandlingen af dine personoplysninger, herunder dine helbredsoplysninger. Du
                  kan til enhver tid kontakte os på mail{" "}
                  <a
                    href="mailto:privacy@mitlivmed.dk"
                    className="text-mountain-orange hover:text-mountain-orange/90 underline"
                  >
                    privacy@mitlivmed.dk
                  </a>
                  , hvis du har spørgsmål til behandlingen eller ønsker at udøve dine individuelle
                  rettigheder. Du kan læse mere om dine rettigheder i vores{" "}
                  <Link
                    to="/privatlivspolitik"
                    className="text-mountain-orange hover:text-mountain-orange/90 underline"
                  >
                    privatlivspolitik her
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                1. Strukturerede sundhedsrelaterede oplysninger
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                Strukturerede sundhedsrelaterede oplysninger udgør følgende typer oplysninger:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2 mb-4">
                <li>
                  Din deltagelse i diagnosespecifikke rum (f.eks. "Bipolar - Skoven")
                </li>
                <li>Din rejsefase (Ørkenen, Skoven, Bjerget), koblet til specifikke diagnoser</li>
              </ul>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                MitLivMed behandler disse data på baggrund af dit udtrykkelige samtykke i henhold
                til denne samtykkeerklæring, jf. GDPR artikel 9, stk. 2, litra a.
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Samtykket er obligatorisk. Det vil sige, at du ikke kan bruge fællesskabets
                funktioner uden at give samtykke til behandling af disse strukturerede
                sundhedsdata.
              </p>
              <p className="font-body text-text-medium leading-relaxed">
                Strukturerede sundhedsdata opbevares på MitLivMeds egen, selv hostede
                fællesskabsplatform (Discourse) hos OVHcloud, Public Cloud, i Gravelines
                (Frankrig). Platformen er et HDS-certificeret miljø (fransk certificering til
                hosting af sundhedsdata), og dine sundhedsdata forbliver inden for EU/EEA.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                2. Hvad vi bruger dine helbredsoplysninger til?
              </h2>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2">
                <li>At forbinde dig med relevante peers og indhold</li>
                <li>At tilpasse din fællesskabsoplevelse baseret på din rejsefase</li>
                <li>
                  At udarbejde anonymiserede aggregeret data for at forstå, om fællesskabet gør en
                  forskel
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                3. Tilbagetrækning af samtykke og kontakt
              </h2>
              <p className="font-body text-text-medium leading-relaxed">
                Du kan til enhver tid trække dit samtykke til behandling af strukturerede
                sundhedsrelaterede oplysninger tilbage ved enten at sende en e-mail til{" "}
                <a
                  href="mailto:privacy@mitlivmed.dk"
                  className="text-mountain-orange hover:text-mountain-orange/90 underline"
                >
                  privacy@mitlivmed.dk
                </a>{" "}
                eller slette din konto.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consent;
