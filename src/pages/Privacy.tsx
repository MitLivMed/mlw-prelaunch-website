import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import wavesImage from "@/assets/waves-trans.png";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privatlivspolitik"
        description="Læs om hvordan MitLivMed indsamler, bruger og beskytter dine personlige oplysninger."
        path="/privatlivspolitik"
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
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Privatlivspolitik
            </h1>

            {/* Version badge */}
            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                Version 1.0
              </span>
              <span className="text-sm text-text-light">
                Sidst opdateret: 20. januar 2026
              </span>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                1. Dataansvarlig
              </h2>
              <div className="font-body text-text-medium leading-relaxed space-y-1">
                <p className="font-semibold text-foreground">MitLivMed ApS</p>
                <p>CVR: 46193040</p>
                <p>Gothersgade 103, 4. th.</p>
                <p>1123 København K</p>
                <p className="pt-2">
                  E-mail:{" "}
                  <a
                    href="mailto:privacy@mitlivmed.dk"
                    className="text-primary hover:underline"
                  >
                    privacy@mitlivmed.dk
                  </a>
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                2. Hvilke data indsamler vi?
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                På nuværende tidspunkt (betatest-venteliste) indsamler vi:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Data
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Kilde
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-text-medium">
                    <tr className="bg-background">
                      <td className="px-4 py-3 border-b border-border">E-mailadresse</td>
                      <td className="px-4 py-3 border-b border-border">Din tilmelding</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="px-4 py-3 border-b border-border">Navn (valgfrit)</td>
                      <td className="px-4 py-3 border-b border-border">Din tilmelding</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="px-4 py-3 border-b border-border">Evt. fritekst</td>
                      <td className="px-4 py-3 border-b border-border">Din tilmelding</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="px-4 py-3">Pårørende (Ja/Nej)</td>
                      <td className="px-4 py-3">Din tilmelding</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-body text-text-medium leading-relaxed">
                Vi indsamler <strong>ikke</strong> CPR-nummer, helbredsoplysninger eller andre
                følsomme data via tilmeldingsformularen.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                3. Formål
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                Vi bruger dine oplysninger til:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2">
                <li>At kontakte dig om betatest og lancering af MitLivMed</li>
                <li>At sende dig relevante opdateringer om produktet</li>
                <li>At forberede onboarding til betatest</li>
              </ul>
              <p className="font-body text-text-medium leading-relaxed mt-4">
                Vi bruger <strong>ikke</strong> dine data til markedsføring til tredjepart eller
                videresalg.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                4. Retsgrundlag
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-2">
                Vi behandler dine personoplysninger på baggrund af:
              </p>
              <p className="font-body text-text-medium leading-relaxed">
                <strong>Samtykke (GDPR Art. 6, stk. 1, litra a)</strong> — Du giver dit samtykke,
                når du tilmelder dig ventelisten.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                5. Modtagere og databehandlere
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Vi deler dine data med følgende tredjeparter, der behandler data på vores vegne:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Databehandler
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Formål
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Lokation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-text-medium">
                    <tr className="bg-background">
                      <td className="px-4 py-3 border-b border-border">Tally.so</td>
                      <td className="px-4 py-3 border-b border-border">Formular/tilmelding</td>
                      <td className="px-4 py-3 border-b border-border">Belgien (EU)</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="px-4 py-3 border-b border-border">Google Workspace</td>
                      <td className="px-4 py-3 border-b border-border">E-mail (manuel håndtering)</td>
                      <td className="px-4 py-3 border-b border-border">EU (med US backup)</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="px-4 py-3">Vercel</td>
                      <td className="px-4 py-3">Webhosting</td>
                      <td className="px-4 py-3">EU region</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                6. Overførsel til tredjelande
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Dine data opbevares primært i EU. Følgende leverandører kan have backup/processing i
                USA:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Leverandør
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Primær lokation
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Overførselsgrundlag
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-text-medium">
                    <tr className="bg-background">
                      <td className="px-4 py-3 border-b border-border">Google Workspace</td>
                      <td className="px-4 py-3 border-b border-border">EU</td>
                      <td className="px-4 py-3 border-b border-border">EU-US Data Privacy Framework</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="px-4 py-3 border-b border-border">Vercel</td>
                      <td className="px-4 py-3 border-b border-border">EU region</td>
                      <td className="px-4 py-3 border-b border-border">Standard Contractual Clauses (SCC)</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="px-4 py-3">Tally.so</td>
                      <td className="px-4 py-3">Belgien (EU)</td>
                      <td className="px-4 py-3">Ingen tredjelandsoverførsel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                7. Opbevaring og sletning
              </h2>
              <p className="font-body text-text-medium leading-relaxed">
                Vi opbevarer dine data <strong>indtil betatesten afsluttes</strong>.
              </p>
              <p className="font-body text-text-medium leading-relaxed mt-3">
                Herefter slettes dine data automatisk, medmindre vi har et andet lovligt grundlag
                for fortsat opbevaring.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                8. Dine rettigheder
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Du har følgende rettigheder i henhold til GDPR:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Rettighed
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Beskrivelse
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-text-medium">
                    <tr className="bg-background">
                      <td className="px-4 py-3 border-b border-border font-semibold">Indsigt</td>
                      <td className="px-4 py-3 border-b border-border">
                        Du kan få oplyst, hvilke data vi har om dig
                      </td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="px-4 py-3 border-b border-border font-semibold">Berigtigelse</td>
                      <td className="px-4 py-3 border-b border-border">
                        Du kan få rettet ukorrekte oplysninger
                      </td>
                    </tr>
                    <tr className="bg-background">
                      <td className="px-4 py-3 border-b border-border font-semibold">Sletning</td>
                      <td className="px-4 py-3 border-b border-border">
                        Du kan bede os slette dine data
                      </td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="px-4 py-3 border-b border-border font-semibold">Begrænsning</td>
                      <td className="px-4 py-3 border-b border-border">
                        Du kan bede os begrænse behandlingen
                      </td>
                    </tr>
                    <tr className="bg-background">
                      <td className="px-4 py-3 border-b border-border font-semibold">Dataportabilitet</td>
                      <td className="px-4 py-3 border-b border-border">
                        Du kan få udleveret dine data i et maskinlæsbart format
                      </td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="px-4 py-3 font-semibold">Indsigelse</td>
                      <td className="px-4 py-3">Du kan gøre indsigelse mod behandlingen</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-body text-text-medium leading-relaxed">
                For at udøve dine rettigheder, kontakt os på:{" "}
                <a
                  href="mailto:privacy@mitlivmed.dk"
                  className="text-primary hover:underline font-semibold"
                >
                  privacy@mitlivmed.dk
                </a>
              </p>
              <p className="font-body text-text-medium leading-relaxed mt-2">
                Vi besvarer henvendelser inden for 30 dage.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                9. Tilbagetrækning af samtykke
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                Du kan til enhver tid trække dit samtykke tilbage ved at:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2">
                <li>
                  Sende en e-mail til{" "}
                  <a
                    href="mailto:privacy@mitlivmed.dk"
                    className="text-primary hover:underline"
                  >
                    privacy@mitlivmed.dk
                  </a>
                </li>
                <li>Klikke på afmeld-linket i vores e-mails</li>
              </ul>
              <p className="font-body text-text-medium leading-relaxed mt-4">
                Tilbagetrækning påvirker ikke lovligheden af den behandling, der er sket før
                tilbagetrækningen.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                10. Klagevejledning
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Hvis du er utilfreds med vores behandling af dine personoplysninger, kan du klage
                til:
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-4 font-body text-text-medium space-y-1">
                <p className="font-semibold text-foreground">Datatilsynet</p>
                <p>Carl Jacobsens Vej 35</p>
                <p>2500 Valby</p>
                <p className="pt-2">
                  E-mail:{" "}
                  <a
                    href="mailto:dt@datatilsynet.dk"
                    className="text-primary hover:underline"
                  >
                    dt@datatilsynet.dk
                  </a>
                </p>
                <p>Telefon: 33 19 32 00</p>
                <p>
                  Web:{" "}
                  <a
                    href="https://www.datatilsynet.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    datatilsynet.dk
                  </a>
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                11. Ændringer til denne politik
              </h2>
              <p className="font-body text-text-medium leading-relaxed">
                Vi opdaterer denne privatlivspolitik, når det er nødvendigt. Ved væsentlige
                ændringer informerer vi dig via e-mail. Den seneste version kan altid findes på{" "}
                <a href="/privatlivspolitik" className="text-primary hover:underline">
                  mitlivmed.dk/privatlivspolitik
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

export default Privacy;
