import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
const Privacy = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Privatlivspolitik"
        description="Læs om hvordan MitLivMed indsamler, bruger og beskytter dine personlige oplysninger."
        path="/privatlivspolitik"
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
              Privatlivspolitik
            </h1>

            {/* Version badge */}
            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-plain-green-30 text-plain-green-100 border border-plain-green-30">
                Version 2.0
              </span>
              <span className="text-sm text-text-light">
                Sidst opdateret: 27. september 2026
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
                <p>Otto Busses Vej 5, 2. tv</p>
                <p>2450 København SV</p>
                <p className="pt-2">
                  E-mail:{" "}
                  <a
                    href="mailto:privacy@mitlivmed.dk"
                    className="text-mountain-orange hover:text-mountain-orange/90 underline"
                  >
                    privacy@mitlivmed.dk
                  </a>
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                2. Hvilke kategorier af personoplysninger indsamler vi?
              </h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
                  <thead>
                    <tr className="bg-mountain-orange-10">
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Kategori
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Data
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Behandlingsgrundlag
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Formål
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-text-medium align-top">
                    <tr className="bg-warm-white">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        Kontooplysninger
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Visningsnavn, e-mailadresse
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        GDPR art. 6, stk. 1, litra b, da oplysningerne er nødvendige for
                        profiloprettelse
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Levering og drift af peer-support-fællesskab og kontakt til dig med
                        informationer og ændringer i tjenesten
                      </td>
                    </tr>
                    <tr className="bg-mountain-orange-10">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        Sundhedsrelaterede oplysninger (særligt beskyttet efter GDPR art. 9)
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Diagnose/tilstand (via rum-medlemskab), rejsefase, emner du følger
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        GDPR art. 6, stk. 1, litra a og undtagelsen i GDPR art. 9, stk. 2, litra a
                        — se afsnit 3, herunder om hvordan du tilbagekalder dit samtykke.
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Matchning af relevant indhold og peers samt personalisering af
                        fællesskabsoplevelsen
                      </td>
                    </tr>
                    <tr className="bg-warm-white">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        Brugerindhold (kan være omfattet af GDPR art. 9 afhængig af indholdet)
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Opslag, kommentarer, historier, introduktioner i fællesskabet og
                        rum-medlemskab.
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        GDPR art. 6, stk. 1, litra b, fordi vi som en del af ydelsen skal behandle
                        de oplysninger, de selv vælger at gøre tilgængelige. Hertil, i det omfang
                        du vælger at offentliggøre helbredsoplysninger, finder undtagelsen i GDPR
                        art. 9, stk. 2, litra e anvendelse.
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Levering og drift af peer-support-fællesskab
                      </td>
                    </tr>
                    <tr className="bg-mountain-orange-10">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        Formulardata
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Svar på valgfrie trivselsmålinger
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        GDPR art. 6, stk. 1, litra f, fordi det er i vores legitime interesse at
                        behandle dine svar til forbedring af vores ydelser, hvilken ikke
                        overstiger dine rettigheder og frihedsrettigheder, fordi det er frivilligt
                        at svare
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Trivselsmålinger — valgfrie spørgeskemaer, der hjælper os med at forstå, om
                        fællesskabet gør en positiv forskel og forbedre vores ydelser
                      </td>
                    </tr>
                    <tr className="bg-warm-white">
                      <td className="px-4 py-3 font-semibold text-foreground">Adfærdsdata</td>
                      <td className="px-4 py-3">
                        Engagement-mønstre, tidsstempler, rumdeltagelse
                      </td>
                      <td className="px-4 py-3">
                        GDPR art. 6, stk. 1, litra f, fordi det er i vores legitime interesse at
                        sikre stabil og sikker drift af platformen
                      </td>
                      <td className="px-4 py-3">
                        Sikring af platformens drift og sikkerhed
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                3. Behandling af helbredsoplysninger
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-6">
                <strong className="text-foreground">Vigtigt:</strong> Dette afsnit vedrører
                behandling af strukturerede sundhedsrelaterede oplysninger samt det af dit
                brugerindhold, som kategoriseres som helbredsoplysninger. Denne type oplysninger,
                såkaldte "særlige kategorier af personoplysninger", er underlagt restriktive krav
                efter GDPR og må som udgangspunkt ikke behandles, medmindre en af en række
                undtagelser gør sig gældende, jf. GDPR art. 9, stk. 1 og stk. 2. Læs derfor dette
                afsnit omhyggeligt.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                3.1 Hvad er helbredsoplysninger i denne sammenhæng?
              </h3>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                Når du bruger MitLivMed-fællesskabet, behandler vi oplysninger, der relaterer sig
                til din sundhed. Det omfatter:
              </p>
              <p className="font-body font-semibold text-foreground mb-2">
                Strukturerede sundhedsrelaterede oplysninger:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2 mb-4">
                <li>
                  <strong className="text-foreground">Rum-medlemskab:</strong> De diagnose- eller
                  tilstandsspecifikke rum, du vælger at deltage i (f.eks. et rum for Bipolar,
                  depression, eller ADHD), afslører oplysninger om din sundhed.
                </li>
                <li>
                  <strong className="text-foreground">Rejsefase:</strong> Den fase du befinder dig
                  i på din rejse (Ørkenen, Skoven, og Bjerget) er en sundhedsrelateret oplysning.
                </li>
              </ul>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Vi behandler kun disse oplysninger, hvis du har givet os dit udtrykkelige samtykke
                hertil. Samtykket er frivilligt. Det vil sige, at du kun kan bruge fællesskabets
                basale funktioner såfremt at du har givet samtykke til behandling af disse
                strukturerede sundhedsdata.
              </p>
              <p className="font-body font-semibold text-foreground mb-2">
                Brugerindhold, der udgør helbredsoplysninger:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2 mb-6">
                <li>
                  <strong className="text-foreground">Indhold du deler:</strong> Opslag og
                  kommentarer, hvor du fortæller om din sundhedsrejse, er sundhedsdata.
                </li>
                <li>
                  <strong className="text-foreground">Emner du følger:</strong> De emner, du aktivt
                  følger i fællesskabet, kan indikere sundhedsrelaterede interesser eller
                  tilstande.
                </li>
              </ul>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                3.2 Hvorfor har vi brug for disse data?
              </h3>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                MitLivMed er et peer-support-fællesskab for mennesker med psykiske diagnoser. For
                at skabe et meningsfuldt fællesskab, hvor du møder andre i lignende situationer, er
                det nødvendigt at behandle dine helbredsoplysninger. Uden disse oplysninger kan vi
                ikke:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2 mb-6">
                <li>Forbinde dig med relevante peers, der forstår din situation</li>
                <li>Vise dig indhold, der er relevant for din rejsefase</li>
                <li>Organisere fællesskabet i meningsfulde rum</li>
              </ul>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                3.3 Hvordan beskytter vi dine sundhedsdata?
              </h3>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Vi tager beskyttelsen af dine helbredsoplysninger alvorligt og har truffet en
                række konkrete valg for at holde dem sikre.
              </p>
              <p className="font-body font-semibold text-foreground mb-1">
                Dine data er krypterede
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Alle oplysninger om dig er krypterede, både når de ligger gemt på vores server, og
                når de sendes mellem din enhed og fællesskabet. Det betyder, at uvedkommende ikke
                kan læse dem, selv hvis de på en eller anden måde får adgang til dem.
              </p>
              <p className="font-body font-semibold text-foreground mb-1">
                Kun ganske få mennesker har adgang
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Adgang til dine personoplysninger er begrænset til et meget lille antal
                administratorer med et legitimt behov for det.
              </p>
              <p className="font-body font-semibold text-foreground mb-1">
                Dine data forlader ikke EU
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Fællesskabet drives på MitLivMeds egen server hos en fransk cloud-leverandør
                (OVHcloud) i Gravelines, Frankrig. Leverandøren er officielt certificeret til at
                opbevare sundhedsdata i Frankrig (den såkaldte HDS-certificering). Dine
                oplysninger opbevares og behandles udelukkende inden for EU og overføres ikke til
                USA eller andre lande uden for EU.
              </p>
              <p className="font-body font-semibold text-foreground mb-1">
                Vores e-mails afslører ikke dit helbred
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Når fællesskabet sender dig en e-mail, fx fordi nogen har svaret på dit indlæg,
                indeholder e-mailen ikke selve indholdet af indlægget. Du modtager kun en neutral
                besked om, at der er ny aktivitet, og et link til at logge ind. Det betyder, at
                indholdet af dine sundhedsrelaterede bidrag aldrig forlader vores sikre server via
                e-mail.
              </p>
              <p className="font-body font-semibold text-foreground mb-1">
                Vi logger kun det nødvendige
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-6">
                Vi fører sikkerhedslogge over tekniske hændelser på serveren, for eksempel hvem
                der har logget ind som administrator, og hvornår. Disse logge opbevares hos den
                samme certificerede leverandør og bruges udelukkende til sikkerhedsformål. Vi
                logger ikke, hvilke emner eller indlæg du læser.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                3.4 Tilbagetrækning af samtykke
              </h3>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                Du kan til enhver tid trække dit samtykke til behandling af sundhedsdata tilbage
                enten ved at sende en besked til{" "}
                <a
                  href="mailto:privacy@mitlivmed.dk"
                  className="text-mountain-orange hover:text-mountain-orange/90"
                >
                  privacy@mitlivmed.dk
                </a>{" "}
                eller slette din konto via fællesskabsplatformen.
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                Hvis du trækker dit samtykke tilbage, sker følgende:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2 mb-4">
                <li>Dine strukturerede sundhedsrelaterede oplysninger slettes</li>
                <li>Du mister adgang til diagnosespecifikke rum og personaliserede funktioner</li>
                <li>Dit øvrige indhold slettes i overensstemmelse med afsnit 6</li>
              </ul>
              <p className="font-body text-text-medium leading-relaxed">
                Tilbagetrækning af samtykke berører ikke lovligheden af den behandling, der er
                foretaget inden tilbagetrækningen, jf. GDPR Art. 7, stk. 3.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                4. Databehandlere
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Vi benytter følgende databehandlere:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
                  <thead>
                    <tr className="bg-mountain-orange-10">
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Databehandler
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Formål
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Lokation
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Overførselsgrundlag i tilfælde af tredjelandsoverførsler
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-text-medium align-top">
                    <tr className="bg-warm-white">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        OVHcloud (OVH SAS)
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Hosting, drift, lagring og backup af fællesskabsplatformen (selvhostet
                        Discourse), inkl. sundhedsdata
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Frankrig (Gravelines/GRA), HDS-certificeret
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Ingen tredjelandsoverførsel — data forbliver i EU/EEA.
                      </td>
                    </tr>
                    <tr className="bg-mountain-orange-10">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        OVHcloud Logs Data Platform (Enterprise)
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Sikkerheds- og systemlogning (adgangs-/fejlologs forwardes ikke, jf. Log
                        Scope-ADR)
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Frankrig, HDS-certificeret
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Ingen tredjelandsoverførsel.
                      </td>
                    </tr>
                    <tr className="bg-warm-white">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        Brevo
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Transaktionel e-mail (login-links, notifikationer) — indhold minimeret,
                        ingen sundhedsoplysninger i mailen
                      </td>
                      <td className="px-4 py-3 border-b border-border">Frankrig/EU</td>
                      <td className="px-4 py-3 border-b border-border">
                        Ingen tredjelandsoverførsel.
                      </td>
                    </tr>
                    <tr className="bg-mountain-orange-10">
                      <td className="px-4 py-3 font-semibold text-foreground">YouTube</td>
                      <td className="px-4 py-3">
                        Afspilning af video interview med medlemmer, der deler deres oplevelse med
                        bipolar lidelse. Thumbnails fra YouTube indlæses automatisk ved
                        sidevisning. Selve videoafspilleren indlæses kun, hvis brugeren aktivt
                        klikker på videoen (lazy load).
                      </td>
                      <td className="px-4 py-3">
                        Primært EU (Google Ireland), men Google kan behandle data på servere i USA
                        og andre tredjelande som en del af sin globale infrastruktur.
                      </td>
                      <td className="px-4 py-3">
                        EU-Kommissionens standardkontraktbestemmelser (SCC), jf. GDPR artikel 46,
                        stk. 2, litra c, i henhold til Googles databehandlingsvilkår (Google Ads
                        Data Processing Terms).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-body text-text-medium leading-relaxed mb-2">
                Der er indgået databehandleraftaler (DPA) med alle databehandlere.
              </p>
              <p className="font-body text-text-medium leading-relaxed">
                Denne liste opdateres løbende i takt med, at tjenesten udvikles.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                5. Cookies og analyse
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                MitLivMed bruger PostHog til cookiefri analyse på vores øvrige platforme. PostHog
                anvendes ikke på fællesskabsforummet.
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                <strong className="text-foreground">Fællesskabsforummet</strong> anvender
                udelukkende Discourse's eget indbyggede analyseværktøj. Al data om brugeradfærd –
                såsom likes, visninger af opslag, artikler og videoer – behandles og opbevares
                inden for vores egne OVHcloud-servere.
              </p>
              <p className="font-body font-semibold text-foreground mb-2">
                Tredjeparts datatransmission
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                I visse situationer sendes data til tredjeparts tjenester:
              </p>
              <ul className="list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2 mb-4">
                <li>
                  <strong className="text-foreground">YouTube:</strong> Hvis du vælger at afspille
                  videomateriale på platformen, sendes din IP-adresse til YouTube (Google).
                </li>
                <li>
                  <strong className="text-foreground">Login-udbydere:</strong> Hvis du aktivt
                  vælger at logge ind via en tredjeparts login-udbyder (i øjeblikket Google og
                  Facebook), videregives de nødvendige oplysninger til den pågældende udbyder.
                </li>
              </ul>
              <p className="font-body text-text-medium leading-relaxed">
                Vi aktiverer kun tredjeparts integrationer, som du selv initierer. Der indsamles
                ingen data fra disse tjenester uden din aktive handling.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                6. Opbevaring og sletning
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Dine data opbevares, så længe din konto eksisterer i MitLivMed-fællesskabet.
              </p>
              <p className="font-body font-semibold text-foreground mb-3">Ved kontosletning:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
                  <thead>
                    <tr className="bg-mountain-orange-10">
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        System
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Hvad slettes
                      </th>
                      <th className="text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border">
                        Tidsramme
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-text-medium align-top">
                    <tr className="bg-warm-white">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        Fællesskabsplatform (Discourse/OVHcloud)
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Profil, opslag, private beskeder, uploads, kategori-/rumdeltagelse
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Når en konto slettes, fjernes alle personlige oplysninger, navn,
                        e-mailadresse, profilbillede og biografi, øjeblikkeligt. Af tekniske
                        årsager kan spor af oplysningerne dog forekomme i vores sikkerhedskopier i
                        op til 30 dage, hvorefter de slettes automatisk.
                      </td>
                    </tr>
                    <tr className="bg-mountain-orange-10">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        Backup (OVHcloud Object Storage + instance-snapshots)
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        Fulde daglige Discourse-backups
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        5 dages rullende backup-retention + versionering. Slettet data kan derfor
                        eksistere i backup, indtil den cykler ud; ved gendannelse fra backup
                        genanvendes sletning.
                      </td>
                    </tr>
                    <tr className="bg-warm-white">
                      <td className="px-4 py-3 border-b border-border font-semibold text-foreground">
                        Sikkerheds-/systemlog (OVHcloud LDP Enterprise)
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        System-/auth-/audit-log og Discourse-fejllog (adgangs- og databaselog
                        forwardes ikke)
                      </td>
                      <td className="px-4 py-3 border-b border-border">
                        MitLivMed opbevarer system logs i 30 dage og forummets adgangslogfiler,
                        herunder fejlbeskeder, i 14 dage. Fejlbeskeder i adgangslogfiler kan i
                        sjældne tilfælde indeholde følsomme personoplysninger (særlige kategorier
                        af personoplysninger, jf. GDPR art. 9). Disse logfiler opbevares
                        udelukkende med henblik på fejlsøgning og sikkerhed og slettes automatisk
                        efter 14 dage.
                      </td>
                    </tr>
                    <tr className="bg-mountain-orange-10">
                      <td className="px-4 py-3 font-semibold text-foreground">
                        Samtykkeregistrering
                      </td>
                      <td className="px-4 py-3">
                        Hvad der er givet samtykke til, version, tidsstempel
                      </td>
                      <td className="px-4 py-3">
                        Samtykkeregistret opbevares i anonymiseret form i op til 1 år efter
                        kontosletning som dokumentation for at vilkårene er blevet accepteret, jf.
                        GDPR art. 5, stk. 2. Det anonymiserede register indeholder ingen navn,
                        e-mailadresse eller andre oplysninger der kan knyttes til en bestemt
                        person, og kan derfor ikke bruges til at identificere den tidligere
                        bruger.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                7. Dine rettigheder
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Du har nedenstående rettigheder, som du kan udøve ved at kontakte os via
                ovennævnte kontaktoplysninger. Din anmodning vil blive besvaret gratis, hurtigst
                muligt og senest en måned efter modtagelse, dog op til to måneder hvis nødvendigt
                af hensyn til anmodningens kompleksitet eller antal. Ved grundløse eller
                overdrevne anmodninger har vi ret til at afvise den eller kræve et rimeligt gebyr
                for at besvare den.
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                <strong className="text-foreground">Ret til at klage.</strong> Du kan til enhver
                tid klage over behandlingen ved at kontakte os. Derudover kan du altid klage til
                Datatilsynet, eller til tilsynet i det land, hvor du har bopæl eller i det land,
                hvor du mener, overtrædelsen af GDPR eller databeskyttelsesloven har fundet sted.
              </p>
              <div className="bg-white border border-mountain-orange-10 rounded-lg p-4 font-body text-lake-blue-100 space-y-1 mb-4">
                <p className="font-semibold text-foreground">Datatilsynet</p>
                <p>
                  Web:{" "}
                  <a
                    href="https://www.datatilsynet.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mountain-orange hover:text-mountain-orange/90"
                  >
                    datatilsynet.dk
                  </a>
                </p>
                <p>
                  E-mail:{" "}
                  <a
                    href="mailto:dt@datatilsynet.dk"
                    className="text-mountain-orange hover:text-mountain-orange/90"
                  >
                    dt@datatilsynet.dk
                  </a>
                </p>
                <p>Telefon: +45 33 19 32 00</p>
              </div>
              <p className="font-body text-text-medium leading-relaxed">
                Kontakt:{" "}
                <a
                  href="mailto:privacy@mitlivmed.dk"
                  className="text-mountain-orange hover:text-mountain-orange/90 font-semibold"
                >
                  privacy@mitlivmed.dk
                </a>
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                8. Ændringer til denne politik
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                Vi opdaterer denne privatlivspolitik, når det er nødvendigt — f.eks. ved nye
                funktioner, nye databehandlere eller ændringer i lovgivningen.
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-3">
                Ved væsentlige ændringer giver vi dig besked mindst 30 dage inden ændringen
                træder i kraft via den e-mailadresse, du har registreret.
              </p>
              <p className="font-body text-text-medium leading-relaxed">
                Den seneste version af privatlivspolitikken er altid tilgængelig på{" "}
                <a
                  href="/privatlivspolitik"
                  className="text-mountain-orange hover:text-mountain-orange/90"
                >
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
