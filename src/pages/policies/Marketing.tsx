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
            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-plain-green-30 text-plain-green-100 border border-plain-green-30">
                Version 1.0
              </span>
              <span className="text-sm text-text-light">
                Sidst opdateret: 3. oktober 2026
              </span>
            </div>

            <section className="mb-10">
              <h2 className={h2}>1. Formål og omfang</h2>
              <p className={lead}>
                Vi sender dig kun markedsføring, hvis du har sagt ja til det, og du kan altid sige
                nej igen med ét klik.
              </p>
              <p className={p}>
                Denne politik forklarer, hvordan MitLivMed ApS (CVR: 46193040) kontakter dig om nye produkter, tilbud og medlemskaber. Den gælder for
                mitlivmed.dk og for vores fællesskab på fællesskab.mitlivmed.dk.
              </p>
              <p className={p}>
                Politikken dækker kun markedsføring. Beskeder, som vi skal sende for at drive din
                konto, fx login-links, kvitteringer, betalingsbeskeder, sikkerhedsadvarsler og
                ændringer i vores vilkår, er ikke markedsføring og er omfattet af vores{" "}
                <a href="/privatlivspolitik" className="text-mountain-orange hover:text-mountain-orange/90 underline">
                  privatlivspolitik
                </a>
                .
              </p>
            </section>

            <section className="mb-10">
              <h2 className={h2}>2. Hvad vi kan sende dig</h2>
              <p className={lead}>
                Med dit samtykke kan vi sende dig e-mails om tre ting, som alle er dækket af ét
                samtykke.
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
                    "\"Du er begyndt på dit medlemskab – vil du gøre det færdigt?\"",
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
                Vi beder aktivt om dit samtykke, og et nej påvirker aldrig din adgang til MitLivMed
                eller fællesskabet.
              </p>
              <Bullets
                items={[
                  ["Kun aktivt tilvalg.", "Samtykkefeltet er aldrig forudafkrydset. Du sætter selv krydset."],
                  [
                    "Adskilt fra vores vilkår.",
                    "Når du accepterer vores medlemsvilkår eller privatlivspolitik, siger du ikke ja til markedsføring.",
                  ],
                  [
                    "Klart, hvad du får.",
                    "Samtykketeksten nævner alle typer beskeder, vi sender, og kanalen (e-mail).",
                  ],
                  [
                    "Vi registrerer det.",
                    "Vi gemmer, hvornår du gav samtykke, hvad du fik vist, og hvor (hjemmeside eller fællesskab), så vi kan dokumentere det.",
                  ],
                  [
                    "Samtykket kan bortfalde.",
                    "Hvis vi ikke har brugt dit samtykke i længere tid, spørger vi dig igen, før vi sender noget.",
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
                <li>Du har åbnet eller klikket på et link i en af vores markedsførings-e-mails.</li>
                <li>Din prøveperiode eller gratis periode er ved at udløbe.</li>
              </ul>
              <p className={lead}>Det bruger vi aldrig til markedsføring:</p>
              <ul className={ul}>
                <li>Det, du skriver i fællesskabet, i opslag, beskeder eller på din profil.</li>
                <li>Hvilke grupper, kategorier eller emner i fællesskabet du læser eller er med i.</li>
                <li>
                  Oplysninger om din diagnose, dit helbred eller dit velbefindende, heller ikke dem
                  du giver os ved tilmelding.
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
                Vi sender kun markedsføring på e-mail.
              </p>
              <p className={p}>
                Vi sender ikke markedsføring via sms, telefonopkald eller private beskeder i
                fællesskabet. Hvis vi en dag ønsker at bruge en anden kanal, beder vi først om dit
                samtykke til den kanal.
              </p>
              <p className={p}>
                Vi sender kun påmindelser, hvis du begynder på en tilmelding, men ikke gør den
                færdig. De stopper, så snart du har gennemført din tilmelding.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={h2}>6. Sådan siger du nej igen</h2>
              <p className={lead}>
                Du kan til enhver tid trække dit samtykke tilbage, gratis og lige så nemt, som du
                gav det.
              </p>
              <ul className={ul}>
                <li>Klik på "Afmeld" nederst i enhver markedsførings-e-mail.</li>
                <li>
                  Ret dine valg i dine{" "}
                  <a
                    href="https://fællesskab.mitlivmed.dk/u/mitlivmed/preferences/profile"
                    className="text-mountain-orange hover:text-mountain-orange/90 underline"
                  >
                    præferencer i fællesskabet
                  </a>
                  .
                </li>
                <li>
                  Skriv til os på{" "}
                  <a href="mailto:kontakt@mitlivmed.dk" className="text-mountain-orange hover:text-mountain-orange/90 underline">
                    kontakt@mitlivmed.dk
                  </a>
                  .
                </li>
              </ul>
              <p className={p}>
                Vi stopper inden for 48 timer. Tilbagetrækningen påvirker ikke markedsføring, der
                allerede er sendt, og du beholder fuld adgang til dit medlemskab og fællesskabet.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={h2}>7. Dine data og dine rettigheder</h2>
              <p className={lead}>Vi bruger så få data som muligt, og grundlaget er dit samtykke.</p>
              <Table
                head={["Emne", "Hvad gælder"]}
                rows={[
                  [
                    "Data vi bruger",
                    "Navn, e-mailadresse, dine valg om markedsføring og registreringen af dit samtykke, status for tilmelding og betaling, åbninger af og klik i e-mails",
                  ],
                  [
                    "Retsgrundlag",
                    "Dit samtykke (databeskyttelsesforordningens art. 6, stk. 1, litra a) og markedsføringslovens § 10",
                  ],
                  [
                    "Opbevaring",
                    "Markedsføringsdata slettes, når du trækker dit samtykke tilbage. Dokumentation for samtykket gemmes i [2 år] efter, at vi sidst har brugt det, så vi kan dokumentere, at vi overholder reglerne",
                  ],
                  [
                    "Databehandlere",
                    "[E-mailudbyder], OVHcloud (hosting, EU). Alle med databehandleraftaler og med data opbevaret i EU/EØS",
                  ],
                  [
                    "Dine rettigheder",
                    "Indsigt, berigtigelse, sletning, begrænsning, dataportabilitet og indsigelse mod direkte markedsføring (databeskyttelsesforordningens art. 21)",
                  ],
                  ["Kontakt", "[Den dataansvarliges navn, adresse, privacy-e-mail]"],
                  ["Klager", "Datatilsynet, datatilsynet.dk"],
                ]}
              />
              <p className={p}>
                Vi kan opdatere denne politik. Hvis en ændring påvirker det, du har givet samtykke
                til, spørger vi dig igen.
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
