import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const h2 = "font-heading text-xl md:text-2xl font-semibold text-foreground mb-4";
const p = "font-body text-text-medium leading-relaxed mb-3";
const lead = "font-body text-foreground font-semibold leading-relaxed mb-3";
const ul = "list-disc list-inside font-body text-text-medium leading-relaxed space-y-2 ml-2 mb-4";
const th = "text-left px-4 py-3 font-heading font-medium text-foreground border-b border-border";
const td = "px-4 py-3 border-b border-border";
const tdKey = `${td} font-semibold text-foreground`;

const Table = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto mb-4">
    <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
      <thead>
        <tr className="bg-mountain-orange-10">
          {head.map((h) => (
            <th key={h} className={th}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="font-body text-text-medium align-top">
        {rows.map((row, i) => (
          <tr key={row[0]} className={i % 2 === 0 ? "bg-warm-white" : "bg-mountain-orange-10"}>
            {row.map((cell, j) => (
              <td key={j} className={j === 0 ? tdKey : td}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Bullets = ({ items }: { items: string[][] }) => (
  <ul className={ul}>
    {items.map(([title, text]) => (
      <li key={title}>
        <strong className="text-foreground">{title}</strong> {text}
      </li>
    ))}
  </ul>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-mountain-orange hover:text-mountain-orange/90 underline">
    {children}
  </a>
);

const Marketing = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Markedsføringspolitik"
        description="Læs hvordan MitLivMed kontakter dig om nye produkter, tilbud og medlemskaber, og hvordan du siger nej."
        path="/markedsfoeringspolitik"
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
              Markedsføringspolitik
            </h1>

            {/* Version badge */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-plain-green-30 text-plain-green-100 border border-plain-green-30">
                Version 1.1
              </span>
              <span className="text-sm text-text-light">
                Sidst opdateret: 6. oktober 2026 · Træder i kraft: 6. oktober 2026
              </span>
            </div>

            <section className="mb-10">
              <h2 className={h2}>1. Formål og omfang</h2>
              <p className={lead}>
                Vi sender dig kun markedsføring, hvis du har sagt ja til det, og du kan altid sige
                nej igen med ét klik.
              </p>
              <p className={p}>
                Denne politik forklarer, hvordan MitLivMed ApS (CVR: 46193040) kontakter dig om nye
                produkter, tilbud og medlemskaber. Den gælder for mitlivmed.dk og for vores
                fællesskab på fællesskab.mitlivmed.dk.
              </p>
              <p className={p}>
                Politikken dækker kun markedsføring. Beskeder, som vi skal sende for at drive din
                konto, fx login-links, kvitteringer, betalingsbeskeder, sikkerhedsadvarsler og
                ændringer i vores vilkår, er ikke markedsføring og er omfattet af vores{" "}
                <A href="/privatlivspolitik">privatlivspolitik</A>.
              </p>
              <p className={p}>
                Vi bruger ikke undtagelsen for eksisterende kunder i markedsføringsloven. Det
                betyder, at vi altid beder om dit samtykke, også hvis du allerede er medlem.
              </p>
              <p className={p}>
                Wiith er MitLivMed ApS&apos; engelske brand. Politikken gælder også, når vi skriver
                til dig under navnet Wiith.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={h2}>2. Hvad vi kan sende dig</h2>
              <p className={lead}>
                Med dit samtykke kan vi sende dig e-mails om fire ting. Alle fire er dækket af ét
                samtykke (se afsnit 3).
              </p>
              <Table
                head={["Type", "Indhold", "Eksempel"]}
                rows={[
                  [
                    "Nyheder og produkter",
                    "Nye funktioner, ydelser, forløb eller indhold fra MitLivMed og Wiith",
                    "\"Nyt: aftengrupper ledet af ligemænd i Aarhus\"",
                  ],
                  [
                    "Tilbud",
                    "Rabatter, prøveperioder, støttede eller donationsbaserede medlemskaber",
                    "\"Din første måned til halv pris\"",
                  ],
                  [
                    "Påmindelser om at gøre tilmeldingen færdig",
                    "En kort opfølgning, hvis du er begyndt at blive medlem, men ikke er blevet færdig",
                    "\"Du er begyndt på dit medlemskab, vil du gøre det færdigt?\"",
                  ],
                  [
                    "Besked om udløbende prøveperiode",
                    "En kort besked, når din prøveperiode eller gratis periode er ved at udløbe",
                    "\"Din prøveperiode udløber om tre dage\"",
                  ],
                ]}
              />
              <p className={p}>
                Vi sælger eller deler ikke dine kontaktoplysninger med andre virksomheder til deres
                markedsføring. Vi sender ikke markedsføring på vegne af samarbejdspartnere.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={h2}>3. Dit samtykke</h2>
              <p className={lead}>
                Vi beder aktivt om dit udtrykkelige samtykke, og et nej påvirker aldrig din adgang
                til MitLivMed eller fællesskabet.
              </p>
              <Bullets
                items={[
                  [
                    "Udtrykkeligt samtykke.",
                    "Fordi det at være medlem kan sige noget om dit helbred, beder vi om dit udtrykkelige samtykke, jf. databeskyttelsesforordningens art. 9, stk. 2, litra a.",
                  ],
                  ["Kun aktivt tilvalg.", "Samtykkefeltet er aldrig forudafkrydset. Du sætter selv krydset."],
                  [
                    "Adskilt fra vores vilkår.",
                    "Når du accepterer vores medlemsvilkår eller privatlivspolitik, siger du ikke ja til markedsføring.",
                  ],
                  [
                    "Klart, hvad du får.",
                    "Ét samtykke dækker alle fire typer beskeder, vi sender. Samtykketeksten nævner dem alle, kanalen (e-mail) og, at vi følger, om du åbner og klikker i vores e-mails (se afsnit 4).",
                  ],
                  [
                    "Vi registrerer det.",
                    "Vi gemmer, hvornår du gav samtykke, hvad du fik vist, og hvor (hjemmeside eller fællesskab), så vi kan dokumentere det.",
                  ],
                  [
                    "Aldersgrænse.",
                    "Vi sender kun markedsføring til personer, der er fyldt 18 år.",
                  ],
                  [
                    "Samtykket bortfalder.",
                    "Hvis du ikke har haft kontakt med os i 24 måneder (login, åbning eller klik), spørger vi dig igen, før vi sender noget.",
                  ],
                ]}
              />
            </section>

            <section className="mb-10">
              <h2 className={h2}>4. Opfølgning ud fra din interesse</h2>
              <p className={p}>
                Hvis du har sagt ja til markedsføring på e-mail, kan vi følge op, når du har vist
                interesse, men ikke er blevet færdig med din tilmelding. Vi ser kun på enkelte
                handlinger på din konto og aldrig på noget om dit helbred.
              </p>
              <p className={lead}>Det ser vi på:</p>
              <ul className={ul}>
                <li>Du har oprettet en konto eller profil i fællesskabet, men ikke valgt et medlemskab.</li>
                <li>Du har påbegyndt betalingen, men ikke gennemført den.</li>
                <li>Din prøveperiode eller gratis periode er ved at udløbe.</li>
                <li>Du har åbnet eller klikket på et link i en af vores markedsførings-e-mails.</li>
              </ul>
              <p className={p}>
                <strong className="text-foreground">Sporing af åbninger og klik.</strong> Vi følger,
                om du åbner og klikker i vores markedsførings-e-mails, via et lille usynligt billede
                og sporede links. Det er en del af dit samtykke og stopper, når du trækker det
                tilbage.
              </p>
              <p className={p}>
                <strong className="text-foreground">Profilering.</strong> Fordi vi vælger, hvem der
                får en påmindelse, ud fra disse handlinger, er det profilering i
                databeskyttelsesreglernes forstand. Vi træffer ingen afgørelser, der har retlig
                eller tilsvarende betydning for dig.
              </p>
              <p className={lead}>Det bruger vi aldrig til markedsføring:</p>
              <ul className={ul}>
                <li>Det, du skriver i fællesskabet, i opslag, beskeder eller på din profil.</li>
                <li>Hvilke grupper, kategorier eller emner i fællesskabet du læser eller er med i.</li>
                <li>
                  Oplysninger om din diagnose, dit helbred eller dit velbefindende, også dem du
                  giver os ved tilmelding.
                </li>
                <li>Data købt af eller delt af andre virksomheder.</li>
              </ul>
              <p className={p}>
                Fordi MitLivMed støtter mennesker, der lever med psykiske lidelser, kan det i sig
                selv sige noget om dit helbred, at du er bruger. Derfor holder vi bevidst vores
                markedsføring generel: Alle beskeder giver mening for enhver, der interesserer sig
                for MitLivMed, og ingen besked henviser til dit helbred.
              </p>
              <p className={p}>
                Du har til enhver tid ret til at gøre indsigelse mod denne form for opfølgning, og
                så stopper vi med det samme.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={h2}>5. Hvordan og hvor ofte</h2>
              <p className={lead}>
                Vi sender kun markedsføring på e-mail, og højst så ofte som her:
              </p>
              <Table
                head={["Hvad", "Hvor ofte"]}
                rows={[
                  ["Nyheder, produkter og tilbud", "Højst 4 e-mails pr. måned"],
                  [
                    "Påmindelser om at gøre tilmeldingen færdig",
                    "Højst 2 e-mails pr. påbegyndt tilmelding, inden for 7 dage. De stopper, så snart du har gennemført tilmeldingen",
                  ],
                  ["Besked om udløbende prøveperiode", "Én e-mail pr. prøveperiode"],
                ]}
              />
              <p className={p}>
                Vi sender ikke markedsføring via sms, telefonopkald, push-beskeder, i Companion App
                eller via private beskeder i fællesskabet. Hvis vi en dag ønsker at bruge en anden
                kanal, beder vi først om dit samtykke til den kanal.
              </p>
              <p className={p}>
                Vi uploader ikke din e-mailadresse til annonceplatforme som Meta, Google eller
                TikTok, og vi bruger den ikke til målrettede annoncer.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={h2}>6. Sådan siger du nej igen</h2>
              <p className={lead}>
                Du kan til enhver tid trække dit samtykke tilbage, gratis og lige så nemt, som du
                gav det. Det gælder alle typer markedsføring.
              </p>
              <ul className={ul}>
                <li>Klik på "Afmeld" nederst i enhver markedsførings-e-mail. Afmeldingen gælder med det samme.</li>
                <li>
                  Ret dine valg i dine{" "}
                  <A href="https://fællesskab.mitlivmed.dk/u/mitlivmed/preferences/profile">
                    præferencer i fællesskabet
                  </A>
                  . Det gælder også med det samme.
                </li>
                <li>
                  Skriv til os på <A href="mailto:kontakt@mitlivmed.dk">kontakt@mitlivmed.dk</A>.
                  Vi behandler din henvendelse inden for 48 timer.
                </li>
              </ul>
              <p className={p}>
                Når du har afmeldt dig, gemmer vi din e-mailadresse på en intern spærreliste, så du
                ikke ved en fejl får markedsføring igen. Spærrelisten bruges kun til det formål.
              </p>
              <p className={p}>
                Tilbagetrækningen gør ikke vores tidligere behandling af dine oplysninger ulovlig,
                og du beholder fuld adgang til dit medlemskab og fællesskabet. Hvis du lukker eller
                sletter din konto, trækkes dit samtykke til markedsføring tilbage samtidig.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={h2}>7. Dine data og dine rettigheder</h2>
              <p className={lead}>
                Vi bruger så få data som muligt, og grundlaget er dit udtrykkelige samtykke.
              </p>
              <Table
                head={["Emne", "Hvad gælder"]}
                rows={[
                  [
                    "Data vi bruger",
                    "Navn, e-mailadresse, dine valg om markedsføring og registreringen af dit samtykke, status for tilmelding og betaling, åbninger af og klik i e-mails",
                  ],
                  [
                    "Retsgrundlag",
                    "Dit udtrykkelige samtykke (databeskyttelsesforordningens art. 6, stk. 1, litra a og art. 9, stk. 2, litra a) og markedsføringslovens § 10",
                  ],
                  [
                    "Opbevaring",
                    "Markedsføringsdata slettes, når du trækker dit samtykke tilbage. Dokumentation for samtykket gemmes i 2 år efter, at vi sidst har brugt det, og din e-mailadresse bliver på spærrelisten, så vi ikke sender igen",
                  ],
                  [
                    "Databehandlere",
                    "Brevo og OVHcloud (hosting, EU). Begge med databehandleraftaler og med data opbevaret i EU/EØS",
                  ],
                  [
                    "Dine rettigheder",
                    "Indsigt, berigtigelse, sletning, begrænsning, dataportabilitet, tilbagetrækning af samtykke og indsigelse mod direkte markedsføring (databeskyttelsesforordningens art. 21)",
                  ],
                  ["Kontakt", "MitLivMed ApS, Otto Busses Vej 5, 2. tv, 2450 København SV. E-mail: privacy@mitlivmed.dk"],
                  [
                    "Klager",
                    "Datatilsynet (datatilsynet.dk) for databeskyttelse. Forbrugerombudsmanden (forbrugerombudsmanden.dk) for markedsføring",
                  ],
                ]}
              />
              <p className={p}>
                Vi kan opdatere denne politik. Hvis en ændring påvirker det, du har givet samtykke
                til, spørger vi dig igen. Tidligere versioner af politikken gemmer vi, så vi kan
                vise, hvad der gjaldt, da du gav dit samtykke.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Marketing;
