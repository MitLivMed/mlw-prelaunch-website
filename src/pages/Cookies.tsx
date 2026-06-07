import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
const Cookies = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Cookiepolitik"
        description="Læs om hvordan MitLivMed bruger cookies på vores hjemmeside."
        path="/cookies"
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

      <main id="main-content" className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Cookiepolitik
            </h1>

            {/* Version badge */}
            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-plain-green-10 text-plain-green-100 border border-plain-green-30">
                Version 1.0
              </span>
              <span className="text-sm text-text-light">
                Sidst opdateret: 20. januar 2026
              </span>
            </div>

            {/* Highlight box - "Den korte version" */}
            <div className="bg-plain-green-10 border border-plain-green-30 rounded-lg p-6 mb-10">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                Den korte version
              </h2>
              <p className="font-body text-text-medium leading-relaxed">
                Vi bruger ikke cookies til at tracke dig. Ingen tracking-cookies, ingen
                reklame-cookies.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                1. Hvad er cookies?
              </h2>
              <p className="font-body text-text-medium leading-relaxed">
                Cookies er små tekstfiler, som websites kan gemme i din browser for at huske
                information om dig.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                2. Bruger MitLivMed cookies?
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                <strong>Nej — vi bruger ingen cookies til tracking eller analyse.</strong>
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Vi har valgt en cookie-fri tilgang til analytics:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
                  <thead>
                    <tr className="bg-mountain-orange/10">
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Type
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Bruges?
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Forklaring
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-text-medium">
                    <tr className="bg-warm-white">
                      <td className="px-4 py-3 border-b border-border">Tracking-cookies</td>
                      <td className="px-4 py-3 border-b border-border">Nej</td>
                      <td className="px-4 py-3 border-b border-border">
                        Vi bruger PostHog i cookieless mode
                      </td>
                    </tr>
                    <tr className="bg-mountain-orange/10">
                      <td className="px-4 py-3 border-b border-border">Reklame-cookies</td>
                      <td className="px-4 py-3 border-b border-border">Nej</td>
                      <td className="px-4 py-3 border-b border-border">Vi viser ingen reklamer</td>
                    </tr>
                    <tr className="bg-warm-white">
                      <td className="px-4 py-3 border-b border-border">Session-cookies</td>
                      <td className="px-4 py-3 border-b border-border">Nej</td>
                      <td className="px-4 py-3 border-b border-border">
                        Landingpage er statisk uden login
                      </td>
                    </tr>
                    <tr className="bg-mountain-orange/10">
                      <td className="px-4 py-3">Nødvendige cookies</td>
                      <td className="px-4 py-3">Nej*</td>
                      <td className="px-4 py-3">
                        Ingen teknisk nødvendige cookies på nuværende tidspunkt
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-body text-sm text-text-light italic">
                *Kan ændre sig ved fremtidige features (fx login). I så fald opdateres denne
                politik.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                3. Hvad er "cookieless analytics"?
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Vi bruger PostHog til at forstå, hvordan vores website bruges — men uden at gemme
                data i din browser.
              </p>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Sådan fungerer det:
              </h3>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2">
                <li>Ingen cookies sættes i din browser</li>
                <li>Ingen personlig identifikation lagres</li>
                <li>Aggregeret, anonym data bruges til at forbedre websitet</li>
                <li>Du kan ikke genkendes på tværs af sessioner</li>
              </ul>
              <p className="font-body text-text-medium leading-relaxed mt-4">
                Dette giver os indsigt i, om websitet fungerer godt, uden at kompromittere dit
                privatliv.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                4. Tredjepartscookies
              </h2>
              <p className="font-body text-text-medium leading-relaxed">
                Vores website indeholder ingen tredjepartscookies fra reklame- eller
                tracking-netværk.
              </p>
              <p className="font-body text-text-medium leading-relaxed mt-3">
                Hvis vi embedder eksternt indhold (fx YouTube-videoer) i fremtiden, kan disse sætte
                deres egne cookies. Vi vil i så fald opdatere denne politik.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                5. Spørgsmål?
              </h2>
              <p className="font-body text-text-medium leading-relaxed">
                Kontakt os på{" "}
                <a
                  href="mailto:privacy@mitlivmed.dk"
                  className="text-mountain-orange hover:text-mountain-orange/90 underline font-semibold"
                >
                  privacy@mitlivmed.dk
                </a>{" "}
                hvis du har spørgsmål om cookies.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                6. Ændringer
              </h2>
              <p className="font-body text-text-medium leading-relaxed">
                Vi opdaterer denne cookiepolitik, når det er nødvendigt. Den seneste version findes{" "}
                <strong>altid</strong> på{" "}
                <a href="/cookies" className="text-mountain-orange hover:text-mountain-orange/90">
                  mitlivmed.dk/cookies
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
