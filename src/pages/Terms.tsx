import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
const Terms = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Brugerbetingelser"
        description="Læs MitLivMeds brugerbetingelser for adgang til og brug af fællesskabsplatformen."
        path="/brugerbetingelser"
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
              Brugerbetingelser
            </h1>

            {/* Version badge */}
            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-plain-green-30 text-plain-green-100 border border-plain-green-30">
                Version 1.0
              </span>
              <span className="text-sm text-text-light">
                Sidst opdateret: 27. september 2026
              </span>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                1. Definitioner
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                I disse betingelser gælder følgende definitioner:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2">
                <li>
                  <strong className="text-foreground">"MitLivMed"</strong> betyder MitLivMed ApS,
                  CVR-nr. 46193040, Otto Busses Vej 5, 2. tv, 2450 København SV. E-mail:{" "}
                  <a
                    href="mailto:kontakt@mitlivmed.dk"
                    className="text-mountain-orange hover:text-mountain-orange/90 underline"
                  >
                    kontakt@mitlivmed.dk
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-foreground">"Platformen"</strong> betyder MitLivMeds
                  digitale tjenester, herunder fællesskab, rum, indhold, funktioner og værktøjer,
                  der stilles til rådighed af MitLivMed – uanset hvilken teknisk løsning de
                  leveres via.
                </li>
                <li>
                  <strong className="text-foreground">"Bruger"</strong> eller{" "}
                  <strong className="text-foreground">"du"</strong> betyder enhver person, der
                  opretter en konto på Platformen og accepterer disse betingelser.
                </li>
                <li>
                  <strong className="text-foreground">"Indhold"</strong> betyder alt
                  bruger-genereret materiale, herunder opslag, kommentarer, personlige historier,
                  billeder og øvrige bidrag.
                </li>
                <li>
                  <strong className="text-foreground">"Guides"</strong> betyder frivillige
                  moderatorer, der er udpeget af MitLivMed til at facilitere og moderere
                  fællesskabet.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                2. Betingelser for brug
              </h2>
              <div className="font-body text-text-medium leading-relaxed space-y-3">
                <p>
                  2.1. Du skal være mindst <strong className="text-foreground">18 år</strong> for
                  at oprette en konto og bruge Platformen.
                </p>
                <p>
                  2.2. Hver person må kun oprette{" "}
                  <strong className="text-foreground">én konto</strong>. Duplikerede konti kan
                  blive lukket uden varsel.
                </p>
                <p>
                  2.3. Du skal opgive{" "}
                  <strong className="text-foreground">korrekte oplysninger</strong> ved oprettelse
                  af din konto. Du er ansvarlig for at holde dine kontooplysninger opdaterede.
                </p>
                <p>
                  2.4. Din konto er <strong className="text-foreground">personlig</strong> og må
                  ikke deles med eller overdrages til andre.
                </p>
                <p>
                  2.5. Ved at oprette en konto accepterer du disse brugerbetingelser, samt at du
                  har læst vores{" "}
                  <a
                    href="/privatlivspolitik"
                    className="text-mountain-orange hover:text-mountain-orange/90 underline"
                  >
                    privatlivspolitik
                  </a>
                  .
                </p>
                <p>
                  2.6. MitLivMed er et{" "}
                  <strong className="text-foreground">peer-support-fællesskab</strong> — ikke en
                  sundhedsudbyder eller sundhedsperson. Se § 3 for mere information.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                3. Sundhedsoplysninger — VIGTIGT!
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                <strong className="text-foreground">
                  Læs dette afsnit grundigt. Det vedrører din sundhed og sikkerhed.
                </strong>
              </p>
              <div className="font-body text-text-medium leading-relaxed space-y-3 mb-4">
                <p>
                  3.1.{" "}
                  <strong className="text-foreground">
                    MitLivMed er IKKE en sundhedsudbyder, behandler eller klinik og har ingen
                    ansatte sundhedspersoner.
                  </strong>{" "}
                  Hverken MitLivMed, vores Guides eller andre brugere yder sundhedsfaglig
                  rådgivning, diagnose eller behandling. MitLivMed har heller ingen
                  sundhedspersoner ansat eller tilknyttet.
                </p>
                <p>
                  3.2.{" "}
                  <strong className="text-foreground">
                    Intet indhold på Platformen udgør medicinsk rådgivning.
                  </strong>{" "}
                  Alt Indhold er udtryk for personlige oplevelser og ikke klinisk vejledning.
                  Indhold på Platformen kan ikke erstatte professionel sundhedsrådgivning.
                </p>
                <p>
                  3.3. <strong className="text-foreground">Kontakt altid en sundhedsperson</strong>
                  , hvis du har spørgsmål om din sundhed, medicinering eller behandling. Træf ikke
                  beslutninger om din sundhed udelukkende på baggrund af Indhold delt i
                  fællesskabet.
                </p>
              </div>
              <p className="font-body font-semibold text-foreground mb-2">3.4. I krise:</p>
              <div className="bg-white border border-mountain-orange-10 rounded-lg p-4 font-body text-text-medium space-y-1 mb-4">
                <p>
                  <strong className="text-foreground">Livslinien:</strong>{" "}
                  <a
                    href="tel:70201201"
                    className="text-mountain-orange hover:text-mountain-orange/90 font-semibold"
                  >
                    70 201 201
                  </a>{" "}
                  (24 timer, alle dage)
                </p>
                <p>
                  <strong className="text-foreground">Akut fare:</strong> Ring{" "}
                  <a
                    href="tel:112"
                    className="text-mountain-orange hover:text-mountain-orange/90 font-semibold"
                  >
                    112
                  </a>
                </p>
              </div>
              <p className="font-body text-text-medium leading-relaxed">
                3.5. <strong className="text-foreground">MitLivMed kan ikke holdes ansvarlig</strong>{" "}
                for beslutninger, handlinger eller undladelser, der er truffet på baggrund af
                Indhold. Du bruger Platformen og Indholdet på eget ansvar.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                4. Brugerindhold og licens
              </h2>
              <div className="font-body text-text-medium leading-relaxed space-y-3">
                <p>
                  4.1. <strong className="text-foreground">Du ejer dit indhold.</strong> MitLivMed
                  gør ikke krav på ejerskab over det Indhold, du deler på Platformen, bortset fra
                  hvad fremgår under punkt 4.2 nedenfor.
                </p>
                <p>
                  4.2. Ved at dele Indhold på Platformen giver du MitLivMed en{" "}
                  <strong className="text-foreground">
                    ikke-eksklusiv, vederlagsfri licens
                  </strong>{" "}
                  til at vise, kuratere og moderere Indholdet. Denne licens gives udelukkende med
                  det formål at drifte fællesskabet — herunder at vise opslag, moderere Indhold og
                  tilrettelægge Platformens rum.
                </p>
                <p>
                  4.3. Licensen <strong className="text-foreground">ophører</strong>, når dit
                  Indhold eller din konto slettes.
                </p>
                <p>
                  4.4. <strong className="text-foreground">Ved kontosletning</strong> slettes alt
                  dit Indhold. Se § 8 for nærmere detaljer om sletning.
                </p>
                <p>
                  4.5. <strong className="text-foreground">Video- og interviewindhold</strong>{" "}
                  (f.eks. brugerhistorier til ekstern brug) kræver{" "}
                  <strong className="text-foreground">
                    separat, skriftligt samtykke
                  </strong>{" "}
                  og en selvstændig aftale om immaterielle rettigheder. Sådant samtykke er ikke
                  dækket af disse betingelser.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                5. Adfærdsregler
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                MitLivMed bygger på gensidig respekt og omsorg. Følgende regler gælder for al
                aktivitet på Platformen:
              </p>
              <div className="font-body text-text-medium leading-relaxed space-y-3 mb-4">
                <p>
                  5.1. <strong className="text-foreground">Vær venlig.</strong> Mød hinanden med
                  varme og respekt — også på svære dage.
                </p>
                <p>
                  5.2. <strong className="text-foreground">Del fra din egen oplevelse.</strong>{" "}
                  Brug "jeg"-sprog. Vi giver ikke medicinsk rådgivning til hinanden.
                </p>
                <p>
                  5.3. <strong className="text-foreground">Respekter fortrolighed.</strong> Det,
                  der deles i fællesskabet, bliver i fællesskabet. Del ikke andres historier uden
                  for Platformen.
                </p>
                <p>
                  5.4. <strong className="text-foreground">Pas på dig selv.</strong> Det er okay at
                  tage pauser, sige nej og trække sig fra en samtale.
                </p>
              </div>
              <p className="font-body font-semibold text-foreground mb-2">
                5.5. Vi tolererer ikke:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2 mb-4">
                <li>Nedladende, diskriminerende eller krænkende sprog</li>
                <li>Uopfordret medicinsk rådgivning eller "diagnosering" af andre</li>
                <li>Deling af andres private oplysninger (doxxing)</li>
                <li>Spam, reklame eller selvpromovering</li>
                <li>Indhold, der opfordrer til selvskade eller er ulovligt</li>
              </ul>
              <div className="font-body text-text-medium leading-relaxed space-y-3">
                <p>
                  5.6. Se vores fulde fællesskabsregler i MitLivMed-fællesskabet for detaljerede
                  retningslinjer.
                </p>
                <p>
                  5.7. MitLivMed forbeholder sig ret til at{" "}
                  <strong className="text-foreground">
                    moderere, fjerne indhold eller suspendere konti
                  </strong>{" "}
                  ved overtrædelse af disse adfærdsregler eller de fulde fællesskabsregler.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                6. Immaterielle rettigheder
              </h2>
              <div className="font-body text-text-medium leading-relaxed space-y-3">
                <p>6.1. MitLivMed forbeholder sig alle rettigheder til Platformen.</p>
                <p>
                  6.2. <strong className="text-foreground">Brugere ejer deres eget indhold</strong>
                  , jf. § 4.
                </p>
                <p>
                  6.3. MitLivMeds navn, logo og varemærker må{" "}
                  <strong className="text-foreground">
                    ikke bruges uden forudgående skriftlig tilladelse
                  </strong>{" "}
                  fra MitLivMed.
                </p>
                <p>
                  6.4. Intet i disse betingelser overfører immaterielle rettigheder fra den ene
                  part til den anden, ud over den licens, der er beskrevet i § 4.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                7. Ansvarsfraskrivelse og ansvarsbegrænsning
              </h2>
              <div className="font-body text-text-medium leading-relaxed space-y-3 mb-4">
                <p>
                  7.1. Platformen leveres <strong className="text-foreground">"som den er"</strong>{" "}
                  (as-is) og <strong className="text-foreground">"som tilgængelig"</strong> (as
                  available). MitLivMed giver ingen garantier — hverken udtrykkelige eller
                  stiltiende — vedrørende Platformens tilgængelighed, nøjagtighed eller egnethed
                  til et bestemt formål.
                </p>
                <p>
                  7.2. MitLivMed garanterer ikke uafbrudt drift eller fejlfri tjeneste. Platformen
                  kan være midlertidigt utilgængelig som følge af vedligeholdelse, opdateringer
                  eller forhold uden for MitLivMeds kontrol.
                </p>
              </div>
              <p className="font-body font-semibold text-foreground mb-2">
                7.3. MitLivMed er <strong>ikke ansvarlig</strong> for:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2 mb-4">
                <li>
                  Indhold delt af brugere (herunder rigtigheden, fuldstændigheden eller
                  lovligheden heraf)
                </li>
                <li>Tab, skade eller ulempe, der direkte eller indirekte følger af brug af Platformen</li>
                <li>Handlinger eller beslutninger truffet på baggrund af brugerindhold</li>
              </ul>
              <p className="font-body text-text-medium leading-relaxed">
                7.4. Den ansvarsfraskrivelse, der er beskrevet i § 3.5, gælder i tillæg til dette
                afsnit.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                8. Opsigelse og sletning
              </h2>
              <div className="font-body text-text-medium leading-relaxed space-y-3">
                <p>
                  8.1. <strong className="text-foreground">Du kan til enhver tid slette din konto</strong>{" "}
                  via Platformen eller ved at sende en e-mail til{" "}
                  <a
                    href="mailto:privacy@mitlivmed.dk"
                    className="text-mountain-orange hover:text-mountain-orange/90 underline"
                  >
                    privacy@mitlivmed.dk
                  </a>
                  .
                </p>
                <p>
                  8.2. <strong className="text-foreground">MitLivMed kan opsige din konto</strong>{" "}
                  ved overtrædelse af disse betingelser. Hvor det er rimeligt, giver MitLivMed dig
                  besked med en passende frist.
                </p>
                <p>
                  8.3. Ved <strong className="text-foreground">alvorlige overtrædelser</strong> —
                  herunder chikane, trusler eller deling af ulovligt indhold — kan MitLivMed
                  suspendere din konto med øjeblikkelig virkning og uden forudgående varsel.
                </p>
                <p>
                  8.4. <strong className="text-foreground">Ved kontosletning</strong> slettes alle
                  dine personoplysninger og dit indhold i overensstemmelse med vores
                  privatlivspolitik.
                </p>
                <p>
                  8.5. MitLivMed kan opbevare{" "}
                  <strong className="text-foreground">anonymiserede, aggregerede data</strong>, som
                  ikke kan henføres til individuelle brugere, også efter kontosletning.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                9. Ændringer af betingelserne
              </h2>
              <div className="font-body text-text-medium leading-relaxed space-y-3">
                <p>9.1. MitLivMed kan opdatere disse betingelser fra tid til anden.</p>
                <p>
                  9.2. Ved <strong className="text-foreground">væsentlige ændringer</strong> giver
                  MitLivMed dig besked pr. e-mail mindst{" "}
                  <strong className="text-foreground">30 dage</strong> før ændringerne træder i
                  kraft.
                </p>
                <p>
                  9.3. Fortsat brug af Platformen efter udløbet af varslingsperioden anses som
                  accept af de opdaterede betingelser.
                </p>
                <p>
                  9.4. Hvis du{" "}
                  <strong className="text-foreground">ikke accepterer</strong> de opdaterede
                  betingelser, kan du slette din konto inden ændringerne træder i kraft, jf. §
                  8.1.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                10. Lovvalg og tvister
              </h2>
              <div className="font-body text-text-medium leading-relaxed space-y-3">
                <p>
                  10.1. Disse betingelser er underlagt <strong className="text-foreground">dansk ret</strong>.
                </p>
                <p>
                  10.2. Eventuelle tvister, der udspringer af eller relaterer sig til disse
                  betingelser, afgøres ved de{" "}
                  <strong className="text-foreground">danske domstole</strong> med Københavns
                  Byret som rette værneting i første instans.
                </p>
                <p>
                  10.3. Dine rettigheder i henhold til ufravigelig EU- og dansk
                  forbrugerlovgivning berøres ikke af disse betingelser.
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                Kontakt
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Har du spørgsmål til disse betingelser, er du velkommen til at kontakte os:
              </p>
              <div className="font-body text-text-medium leading-relaxed space-y-1">
                <p className="font-semibold text-foreground">MitLivMed ApS</p>
                <p>Otto Busses Vej 5, 2. tv</p>
                <p>2450 København SV</p>
                <p>CVR-nr.: 46193040</p>
                <p className="pt-2">
                  E-mail:{" "}
                  <a
                    href="mailto:kontakt@mitlivmed.dk"
                    className="text-mountain-orange hover:text-mountain-orange/90 underline"
                  >
                    kontakt@mitlivmed.dk
                  </a>
                </p>
                <p>
                  Persondata:{" "}
                  <a
                    href="mailto:privacy@mitlivmed.dk"
                    className="text-mountain-orange hover:text-mountain-orange/90 underline"
                  >
                    privacy@mitlivmed.dk
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
