import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const telHref = (num: string) => `tel:${num.replace(/\s+/g, "")}`;

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M6.6 10.8c1.5 3 4 5.5 7 7l2.3-2.3c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.9 22 2 13.1 2 2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8z" />
  </svg>
);

interface ResourceCardProps {
  name: string;
  href: string;
  description: string;
  hours?: string;
  phone?: string;
  badge?: string;
}

const ResourceCard = ({ name, href, description, hours, phone, badge }: ResourceCardProps) => (
  <div className="bg-white border border-[#EFE6E1] rounded-2xl p-5">
    <h3 className="font-semibold text-base text-soft-black mb-2 flex items-center gap-2 flex-wrap">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-[#F2D7CE] underline-offset-2 hover:text-mountain-orange transition-colors"
      >
        {name}
      </a>
      <span className="text-[11px] text-text-medium border border-[#EFE6E1] rounded-full w-5 h-5 inline-flex items-center justify-center flex-shrink-0">
        ↗
      </span>
      {badge && (
        <span className="text-[10px] font-semibold tracking-wide uppercase text-lake-blue bg-[#EDF4FA] px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </h3>
    <p className="text-text-medium text-sm mb-1">{description}</p>
    {hours && <p className="text-text-medium text-sm">{hours}</p>}
    {phone && (
      <a
        href={telHref(phone)}
        className="block font-semibold text-mountain-orange text-base mt-2 font-title hover:underline"
      >
        {phone}
      </a>
    )}
  </div>
);

const Help = () => {
  const [postnr, setPostnr] = useState("");
  const [regionFound, setRegionFound] = useState<string | null>(null);
  const [regionError, setRegionError] = useState<string | null>(null);

  const handleFindRegion = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = postnr.trim();
    const code = parseInt(trimmed, 10);
    setRegionFound(null);
    setRegionError(null);

    if (!trimmed || isNaN(code) || trimmed.length !== 4) {
      setRegionError("Skriv et postnummer med 4 cifre, fx 8000.");
      return;
    }

    let region = "";
    if (code >= 1000 && code <= 3699) region = "Hovedstaden";
    else if (code >= 3700 && code <= 3799) region = "Hovedstaden (Bornholm)";
    else if (code >= 3800 && code <= 3999) region = "Hovedstaden";
    else if (code >= 4000 && code <= 4999) region = "Sjælland";
    else if (code >= 5000 && code <= 6999) region = "Syddanmark";
    else if (code >= 7000 && code <= 8999) region = "Midtjylland";
    else if (code >= 9000 && code <= 9999) region = "Nordjylland";

    if (region) {
      setRegionFound(region);
    } else {
      setRegionError("Det postnummer kunne vi ikke genkende. Se hele tabellen ovenfor.");
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Hjælp"
        description="Har du brug for hjælp med bipolar lidelse, en krise eller selvmordstanker? Find akutte numre, gratis rådgivning og regional hjælp i Danmark her."
        path="/hjaelp"
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Spring til indhold
      </a>

      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-warm-white px-6 pt-32 pb-10 md:pt-40 md:pb-14">
          <div className="max-w-[1040px] mx-auto">
            <h1 className="font-title text-4xl md:text-5xl font-semibold leading-[1.12] text-soft-black mb-4">
              Har du brug for hjælp?
            </h1>
            <p className="text-[17px] text-text-medium max-w-[600px] mb-5 leading-relaxed">
              Uanset om det er akut, eller om du bare har brug for nogen at tale med i dag, er der hjælp at få. Se
              hvilke muligheder der er, og ræk ud til dem der passer bedst til din situation.
            </p>
            <div className="bg-white border border-[#F2D7CE] rounded-2xl px-5 py-4 max-w-[640px] text-sm text-text-medium mb-5">
              MitLivMed® er ikke en krisetjeneste. Vi opfordrer dig til at bruge ressourcerne herunder, hvis du har
              brug for akut eller professionel hjælp.
            </div>
            <p className="text-sm text-text-medium">
              <strong className="text-soft-black">Sidst opdateret: 18. august 2026.</strong> Opdateres løbende.
            </p>
          </div>
        </section>

        {/* Akut fare */}
        <section id="akut-fare" className="bg-warm-white px-6 py-10">
          <div className="max-w-[1040px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-text-medium mb-2">Akut fare</p>
            <h2 className="font-title text-[1.75rem] font-semibold text-soft-black mb-5">
              Ring her, hvis du er i fare
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#FBE3E0] border-2 border-mountain-orange rounded-2xl px-4 py-5 sm:px-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span className="w-12 h-12 rounded-full bg-mountain-orange flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </span>
                  <div className="min-w-0">
                    <p className="font-title font-semibold text-xl text-soft-black mb-0.5">Ring 112</p>
                    <p className="text-text-medium text-sm">Akut fare</p>
                  </div>
                </div>
                <a
                  href={telHref("112")}
                  className="font-title text-xl sm:text-[1.9rem] font-semibold text-mountain-orange whitespace-nowrap flex-shrink-0 hover:underline"
                >
                  112
                </a>
              </div>
              <div className="bg-[#FBE3E0] border-2 border-mountain-orange rounded-2xl px-4 py-5 sm:px-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span className="w-12 h-12 rounded-full bg-mountain-orange flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </span>
                  <div className="min-w-0">
                    <p className="font-title font-semibold text-xl text-soft-black mb-0.5">Ring Livslinien</p>
                    <p className="text-text-medium text-sm">
                      Krise og selvmordstanker
                      <br />
                      Alle dage kl. 09–05
                    </p>
                  </div>
                </div>
                <a
                  href={telHref("70 20 12 01")}
                  className="font-title text-lg sm:text-[1.9rem] font-semibold text-mountain-orange whitespace-nowrap flex-shrink-0 hover:underline"
                >
                  70 20 12 01
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Regional hjælp */}
        <section className="bg-warm-white px-6 py-10">
          <div className="max-w-[1040px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-text-medium mb-2">Regional hjælp</p>
            <h2 className="font-title text-[1.75rem] font-semibold text-soft-black mb-3">Find lokal akut hjælp</h2>
            <p className="text-text-medium text-sm max-w-[640px] mb-6">
              Uden for din egen læges åbningstid kan du kontakte din regions lægevagt. Siden august 2026 har alle fem
              regioners lægevagter psykiatrifaglig rådgivning direkte på samme nummer, du behøver ikke ringe et andet
              sted hen for psykiatrisk hjælp.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[#EFE6E1] mb-4">
              <table className="w-full min-w-[520px] border-collapse text-sm bg-white">
                <thead>
                  <tr>
                    <th className="text-left bg-[#EDFAEF] text-[#4D8055] text-[10px] uppercase tracking-[2px] font-semibold px-5 py-3">Region</th>
                    <th className="text-left bg-[#EDFAEF] text-[#4D8055] text-[10px] uppercase tracking-[2px] font-semibold pl-5 pr-2 py-3">Lægevagt / akuttelefon</th>
                    <th className="text-left bg-[#EDFAEF] text-[#4D8055] text-[10px] uppercase tracking-[2px] font-semibold pl-2 pr-5 py-3">Åbningstid</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { region: "Hovedstaden", num: "1813", hours: "Døgnåbent" },
                    { region: "Sjælland", num: "1818", hours: "Hverdage 16–08.\nDøgnåbent i weekend/helligdage." },
                    { region: "Syddanmark", num: "70 11 07 07", hours: "Hverdage 16–08.\nDøgnåbent i weekend/helligdage." },
                    { region: "Midtjylland", num: "70 11 31 31", hours: "Hverdage 16–08.\nDøgnåbent i weekend/helligdage." },
                    { region: "Nordjylland", num: "70 15 03 00", hours: "Hverdage 16–08.\nDøgnåbent i weekend/helligdage." },
                  ].map((row) => (
                    <tr key={row.region}>
                      <td className="px-5 py-3.5 border-t border-[#EFE6E1] font-semibold text-soft-black">
                        {row.region}
                      </td>
                      <td className="pl-5 pr-2 py-3.5 border-t border-[#EFE6E1] font-semibold text-mountain-orange whitespace-nowrap">
                        <a href={telHref(row.num)} className="hover:underline">
                          {row.num}
                        </a>
                      </td>
                      <td className="pl-2 pr-5 py-3.5 border-t border-[#EFE6E1] text-text-medium whitespace-pre-line">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#EDFAEF] border border-[#4D8055] text-[#4D8055] rounded-xl px-4 py-3 text-sm mb-4">
              📣 Nyt siden august 2026: alle regioner har nu en fælles akutlinje til psykisk krise, integreret i
              lægevagten. Du ringer samme sted hen, uanset om det er en fysisk eller psykisk krise.
            </div>

            {/* Postal code finder */}
            <div
              className={`rounded-2xl px-5 py-4 border mb-4 transition-colors ${
                regionFound ? "bg-[#EDFAEF] border-[#4D8055]" : "bg-[#FFEECC] border-[#A67A21]"
              }`}
            >
              <p className="font-semibold text-sm text-soft-black mb-1">📍 Kender du ikke din region?</p>
              <p className="text-sm text-text-medium mb-3">
                Indtast dit postnummer, og se hvilken region der gælder for dig.
              </p>
              <form onSubmit={handleFindRegion} className="flex items-center gap-2">
                <input
                  type="text"
                  value={postnr}
                  onChange={(e) => setPostnr(e.target.value)}
                  placeholder="fx 8000"
                  maxLength={4}
                  inputMode="numeric"
                  className="w-28 px-3 py-2 rounded-lg border border-[#EFE6E1] text-sm bg-white"
                />
                <button
                  type="submit"
                  className={`px-4 h-9 rounded-lg font-medium text-sm text-white transition-colors ${
                    regionFound ? "bg-[#4D8055]" : "bg-soft-black"
                  }`}
                >
                  Find region
                </button>
              </form>
              {regionFound && (
                <p className="text-sm text-soft-black mt-2">
                  Du hører til <strong className="text-[#4D8055]">Region {regionFound}</strong>.
                </p>
              )}
              {regionError && (
                <p className="text-sm text-soft-black mt-2">{regionError}</p>
              )}
            </div>

            <p className="text-sm text-text-medium">
              Læs mere:{" "}
              <a
                href="https://www.sst.dk/en-af-os/akut-hjaelp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mountain-orange font-medium hover:underline"
              >
                Sundhedsstyrelsens "Akut hjælp" (EN AF OS)
              </a>
              {" · "}
              <a
                href="https://www.borger.dk/sundhed-og-sygdom/akut-behov-for-hjaelp/Laegevagten"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mountain-orange font-medium hover:underline"
              >
                Lægevagten på borger.dk
              </a>
              {" · "}
              <a
                href="https://www.sst.dk/nyheder/2026/akuttelefon-til-mennesker-i-akut-psykisk-krise-er-etableret-i-hele-landet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mountain-orange font-medium hover:underline"
              >
                Akuttelefon til psykisk krise, etableret i hele landet (SST, aug. 2026)
              </a>
              <br />
              Lægevagten og akuttelefonen kan vurdere din situation og henvise dig videre. Ring altid dit regions
              nummer, hvis du er usikker.
            </p>
          </div>
        </section>

        {/* Ring / Gratis rådgivning */}
        <section id="ring" className="bg-warm-white px-6 py-10">
          <div className="max-w-[1040px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-text-medium mb-2">Ring</p>
            <h2 className="font-title text-[1.75rem] font-semibold text-soft-black mb-2">Tal med nogen i dag</h2>
            <p className="text-text-medium text-sm mb-6">Gratis og anonymt. Du behøver ikke oplyse dit navn.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ResourceCard
                name="Psykiatrifondens Rådgivning"
                href="https://psykiatrifonden.dk"
                description="For dig med psykiske udfordringer."
                hours="Man–tor 10–22, fre–søn 10–18"
                phone="39 25 25 25"
              />
              <ResourceCard
                name="SIND Rådgivning"
                href="https://sindraadgivning.dk"
                description="For dig med psykiske udfordringer."
                hours="Man/ons/fre 9–15, tir/tor 10–16"
                phone="70 23 27 50"
              />
              <ResourceCard
                name="DepressionsLinien"
                href="https://depressionsforeningen.dk"
                description="For voksne (18+) med depression eller bipolar lidelse."
                hours="Man–fre 19–21"
                phone="33 12 47 47"
              />
              <ResourceCard
                name="AngstTelefonen"
                href="https://angststress.dk"
                description="For dig med angst eller stress."
                hours="Tir 10–13, man–tor 19–22, søn 16–18"
                phone="70 27 13 20"
              />
            </div>
          </div>
        </section>

        {/* Skriv */}
        <section className="bg-warm-white px-6 py-10">
          <div className="max-w-[1040px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-text-medium mb-2">Skriv</p>
            <h2 className="font-title text-[1.75rem] font-semibold text-soft-black mb-2">Online hjælp</h2>
            <p className="text-text-medium text-sm mb-6">Hvis det er lettere at skrive end at ringe.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[680px]">
              <ResourceCard
                name="Livslinien (chat)"
                href="https://livslinien.dk"
                description="Krise og selvmordstanker. Chat på hjemmesiden i stedet for at ringe."
                hours='Chatten har åbent man–fre 17–21, lør–søn 13–17. (Telefonlinjen har længere åbent, se "Akut fare" ovenfor.)'
              />
              <ResourceCard
                name="SocialSpace"
                href="https://socialspace.dk"
                description="Anonymt overblik i app over gratis rådgivning og hjælpetilbud, så du kan finde det, der passer til det, der fylder, i dit eget tempo."
                badge="App"
              />
            </div>
          </div>
        </section>

        {/* Målrettet hjælp */}
        <section className="bg-warm-white px-6 py-10">
          <div className="max-w-[1040px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-text-medium mb-2">Målrettet hjælp</p>
            <h2 className="font-title text-[1.75rem] font-semibold text-soft-black mb-6">Hjælp til unge og pårørende</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[2px] text-mountain-orange mb-2">Til dig under 25</p>
                <p className="text-sm text-text-medium mb-4">Tilbud der er lavet specifikt til dig.</p>
                <div className="flex flex-col gap-4">
                  <ResourceCard
                    name="Headspace"
                    href="https://headspace.dk"
                    description="Gratis og anonym rådgivning til unge 12–25 år. Book en samtale via chat, eller skriv en SMS til dit lokale center."
                    hours="SMS til dit headspace-center"
                    phone="54 54 12 45"
                  />
                  <ResourceCard
                    name="BørneTelefonen"
                    href="https://bornetelefonen.dk"
                    description="Gratis og anonym hjælp til børn og unge. Åben 24 timer i døgnet, alle dage."
                    phone="116 111"
                  />
                  <ResourceCard
                    name="SIND Ungdom"
                    href="https://sindungdom.dk"
                    description="Rådgivning til unge, der har spørgsmål om psykisk sygdom, egen eller hos en de er tæt på."
                    hours="Ons 12.30–14.00"
                    phone="53 76 70 72"
                  />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[2px] text-mountain-orange mb-2">Til pårørende</p>
                <p className="text-sm text-text-medium mb-4">
                  Du behøver ikke have en diagnose for at søge hjælp. Pårørende har også brug for støtte, og det er
                  okay at række ud.
                </p>
                <div className="flex flex-col gap-4">
                  <ResourceCard
                    name="Bedre Psykiatri"
                    href="https://bedrepsykiatri.dk"
                    description="Rådgivning til pårørende til mennesker med psykisk sygdom."
                    hours="Man og tor 10–11 (tidsbooking og korte spørgsmål)"
                    phone="71 74 34 91"
                  />
                  <ResourceCard
                    name="Psykiatrifondens Rådgivning"
                    href="https://psykiatrifonden.dk"
                    description="For pårørende til mennesker med psykiske udfordringer."
                    hours="Man–tor 10–22, fre–søn 10–18"
                    phone="39 25 25 25"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Om MitLivMed */}
        <section className="bg-warm-white px-6 py-10">
          <div className="max-w-[1040px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-text-medium mb-2">Om MitLivMed</p>
            <h2 className="font-title text-[1.75rem] font-semibold text-soft-black mb-2">
              Er MitLivMed det rette for mig lige nu?
            </h2>
            <p className="text-text-medium text-sm max-w-[640px] mb-6">
              MitLivMed er et fællesskab for mennesker med bipolar affektiv lidelse, ikke en krisetjeneste eller et
              behandlingstilbud.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white border border-[#EFE6E1] rounded-2xl p-7">
                <h3 className="font-title text-[1.1rem] font-semibold text-[#4D8055] mb-4">Vi er</h3>
                <ul className="m-0 p-0 list-none">
                  {[
                    "Eksperter på vores eget emne: livet med bipolar lidelse.",
                    "Vidende om generel viden om behandlingstilbud, hverdag og restitution.",
                    "Et sted der møder dig varmt, uanset hvor du er på din rejse.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className={`py-3 text-sm text-text-medium ${i > 0 ? "border-t border-[#EFE6E1]" : ""}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-[#EFE6E1] rounded-2xl p-7">
                <h3 className="font-title text-[1.1rem] font-semibold text-mountain-orange mb-4">Vi er ikke</h3>
                <ul className="m-0 p-0 list-none">
                  {[
                    "De rette til at hjælpe med aktive selvmordstanker eller en akut psykisk krise.",
                    "En erstatning for din behandler, psykolog eller psykiater.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className={`py-3 text-sm text-text-medium ${i > 0 ? "border-t border-[#EFE6E1]" : ""}`}
                    >
                      {item}
                    </li>
                  ))}
                  <li className="py-3 text-sm text-text-medium border-t border-[#EFE6E1]">
                    <strong className="text-soft-black">Har du brug for hjælp nu?</strong> Ring{" "}
                    <a href={telHref("112")} className="text-mountain-orange font-semibold hover:underline">
                      112
                    </a>
                    , eller se stederne ovenfor.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Foreslå ressource */}
        <section className="bg-warm-white px-6 py-10 pb-16">
          <div className="max-w-[1040px] mx-auto">
            <div className="bg-white border border-[#EFE6E1] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 flex-wrap">
              <div>
                <h2 className="font-title text-[1.35rem] font-semibold text-soft-black mb-2">
                  Kender du en god ressource, vi mangler?
                </h2>
                <p className="text-sm text-text-medium max-w-[460px]">
                  Denne liste opdateres løbende. Har du et forslag til en rådgivning, en linje eller et tilbud, vi bør
                  have med, eller har du fundet noget der er forkert, forældet eller ikke virker (fx et dødt link eller
                  et forkert nummer), så hører vi gerne fra dig.
                </p>
              </div>
              <form
                action="mailto:kontakt@mitlivmed.dk"
                method="post"
                encType="text/plain"
                className="flex gap-2 flex-1 min-w-[260px]"
              >
                <input
                  type="text"
                  name="forslag"
                  placeholder="Skriv dit forslag eller din rettelse her…"
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-[#EFE6E1] text-sm bg-warm-white"
                />
                <button
                  type="submit"
                  className="bg-mountain-orange text-white rounded-xl px-5 font-medium text-sm cursor-pointer hover:bg-mountain-orange/90 transition-colors"
                >
                  Send →
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
