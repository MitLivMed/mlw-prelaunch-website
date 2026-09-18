import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import jesperPhoto from "@/assets/staff/jesper-photo.png";

const Wave = ({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) => (
  <div style={{ lineHeight: 0, background: to }}>
    <svg viewBox="0 0 1440 44" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 44 }}>
      {flip
        ? <path d="M0,0 L1440,0 L1440,22 C1080,34 1080,10 720,22 C360,34 360,10 0,22 Z" fill={from} />
        : <path d="M0,22 C360,10 360,34 720,22 C1080,10 1080,34 1440,22 L1440,0 L0,0 Z" fill={from} />}
    </svg>
  </div>
);

const CheckIcon = ({ color }: { color: string }) => (
  <span style={{ color, fontWeight: 700, flexShrink: 0 }}>✓</span>
);

const TrivselsGrupper = () => {
  const [stipendieOpen, setStipendieOpen] = useState(false);
  const [leaveConfirmOpen, setLeaveConfirmOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [formHasContent, setFormHasContent] = useState(false);

  const openStipendie = () => setStipendieOpen(true);

  const attemptCloseStipendie = () => {
    if (formHasContent) {
      setLeaveConfirmOpen(true);
    } else {
      setStipendieOpen(false);
    }
  };

  const stages = ["Ungdom · 16–25 år", "Midtliv · 26–49 år", "Erfaren · 50+ år"];

  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Trivsels Grupper"
        description="Trivsels Grupper er en lille, fast gruppe for mennesker, der lever med det samme som dig. Her lærer du redskaber og øver dem sammen med andre."
        path="/trivsels-gruppe"
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Spring til indhold
      </a>

      <Header />

      <main id="main-content">
        {/* HERO */}
        <section className="bg-warm-white px-8 pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="max-w-[780px] mx-auto text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-mountain-orange mb-4 font-body">
              Trivsels Grupper
            </p>
            <h1 className="font-title text-4xl md:text-[54px] font-bold leading-[1.15] text-soft-black mb-6">
              Først kom diagnosen, nu kommer trivslen.
            </h1>
            <p className="text-[19px] leading-[1.55] text-text-medium max-w-[640px] mx-auto mb-9 font-body">
              Trivsels Grupper er en lille, fast gruppe for mennesker, der lever med det samme som dig. Her lærer du redskaber og øver dem sammen med andre, igen og igen. Det gør en forskel i din hverdag, og med tiden også i måden, du ser på dit liv med bipolar.
            </p>
            <a
              href="#tilmelding"
              className="inline-block font-body font-bold text-base text-white bg-mountain-orange px-8 py-4 rounded-full hover:bg-mountain-orange-110 transition-colors"
            >
              Skriv dig op
            </a>
          </div>
        </section>

        <Wave from="#FAF6F5" to="#FFFFFF" />

        {/* RECOGNITION */}
        <section className="bg-white px-8 py-20">
          <div className="max-w-[1040px] mx-auto text-center">
            <h2 className="font-title text-[34px] font-bold text-soft-black mb-12">
              Kan du genkende det?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                "Du har måske været på et kursus og fået det basale at vide. Eller måske slet ingenting? Men at have det godt med bipolar er ikke noget, man lærer én gang. Det er noget, man arbejder med hele vejen.",
                "Uanset hvor du starter, lærer du redskaber her. Sammen med andre finder du hurtigt ud af, hvad der virker for dig.",
                "Du leder efter en fast gruppe, hvor din tilstedeværelse betyder noget. Ikke endnu en app, du glemmer at åbne.",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full border-2 mt-1" style={{ borderColor: "#82AED9" }} />
                  <p className="text-text-medium font-body text-base">{text}</p>
                </div>
              ))}
            </div>
            <blockquote className="max-w-[720px] mx-auto mt-14 pl-7 border-l-4" style={{ borderColor: "#82AED9" }}>
              <p className="font-title text-2xl italic leading-[1.4] text-soft-black mb-4">
                "60.000–120.000 danskere skønnes at leve med bipolar lidelse, og de fleste oplever, at støtten aftager, når den indledende behandling er overstået."
              </p>
              <cite className="font-body text-[13px] not-italic text-text-light">
                Kilde: Dansk Bipolar Database, Sundhedsvæsenets Kvalitetsinstitut, 2025
              </cite>
            </blockquote>
          </div>
        </section>

        <Wave from="#FFFFFF" to="#EDFAEF" flip />

        {/* HOW IT WORKS */}
        <section className="bg-plain-green-10 px-8 py-20">
          <div className="max-w-[1040px] mx-auto text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-mountain-orange mb-4 font-body">
              Sådan fungerer det
            </p>
            <h2 className="font-title text-[34px] font-bold text-soft-black mb-4">
              En fast gruppe. Ikke et åbent forum.
            </h2>
            <p className="text-[19px] leading-[1.55] text-text-medium max-w-[640px] mx-auto mb-10 font-body">
              Vi holder grupperne små med vilje. Der er nok til, at du aldrig er den eneste, der siger noget, men få nok til, at du ikke forsvinder i mængden.
            </p>

            <div className="bg-white border border-[#E8DED4] rounded-[20px] p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-left">
              {[
                { num: "Maks. 12 deltagere", lbl: "Plads nok til alle, men ikke så stor, at du ikke når at lære de andre at kende." },
                { num: "Hver 2. uge", lbl: "Hver 2. uge møder du de andre online. Det ligger fast i din kalender, så du slipper for at booke igen og igen." },
                { num: "1 dagsorden", lbl: "Fast dagsorden hver session, så du altid ved, hvad der skal ske, og hvad der forventes af dig." },
                { num: "∞", lbl: "Din plads i gruppen har ingen udløbsdato. Du kan blive i gruppen, så længe den giver dig værdi." },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-title text-[26px] font-bold text-soft-black mb-2 whitespace-nowrap">{s.num}</div>
                  <div className="font-body text-sm leading-[1.5] text-text-medium">{s.lbl}</div>
                </div>
              ))}
            </div>

            <h3 className="font-title text-[22px] font-bold text-soft-black mb-3">
              Fire greb, du øver sammen med de andre
            </h3>
            <p className="text-base text-text-medium font-body max-w-[640px] mx-auto mb-8">
              Grupperne handler om konkrete greb til hverdagen med bipolar. Du vender tilbage til dem session efter session. Det er ikke en liste, du krydser af og bliver færdig med.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
              {[
                { title: "Motivation og retning", body: "At holde fast i, hvorfor du gør en indsats, også på de svære dage." },
                { title: "Genkende dine egne mønstre", body: "At blive bedre til at spotte dine tidlige tegn og reagere på dem i tide." },
                { title: "Håndtering af op- og nedture", body: "Konkrete greb til at møde svingninger i humør og energi, før de vokser sig store." },
                { title: "Balance i hverdagen", body: "At bygge rutiner og grænser, der bærer dig gennem en almindelig uge." },
              ].map((m, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 mt-1" style={{ borderColor: "#7ACC88" }} />
                  <div>
                    <h3 className="font-title text-[22px] font-bold text-soft-black mb-1">{m.title}</h3>
                    <p className="font-body text-base text-text-medium">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Wave from="#EDFAEF" to="#EDF4FA" />

        {/* SELF-HELP TOOLS */}
        <section className="bg-lake-blue-10 px-8 py-20">
          <div className="max-w-[1040px] mx-auto text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-mountain-orange mb-4 font-body">
              Selvhjælpsværktøjer på vej
            </p>
            <h2 className="font-title text-[34px] font-bold text-soft-black mb-4">
              Hjælp, lige når du har brug for den
            </h2>
            <p className="text-[19px] leading-[1.55] text-text-medium max-w-[640px] mx-auto mb-9 font-body">
              Vi er ved at lave redskaberne fra grupperne om til selvhjælpsværktøjer, der lever online, helt gratis. Det er ikke en smagsprøve på gruppen. Vi gør det, fordi hjælp skal være til at få fat i, når det er svært, og ikke kun når gruppen mødes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-left">
              <div className="bg-white rounded-[18px] p-8">
                <span className="inline-block font-body text-[12px] font-bold uppercase tracking-[0.05em] text-soft-black bg-lake-blue-30 px-3 py-1 rounded-full mb-3">
                  Online, gratis, når det passer dig
                </span>
                <h3 className="font-title text-[19px] font-bold text-soft-black mb-3">
                  Selvhjælpsværktøjer, der lever online
                </h3>
                <p className="font-body text-[15px] text-text-medium">
                  Du kan lære de fire greb i dit eget tempo: motivation, dine egne mønstre, op- og nedture og balance i hverdagen. Det er åbent hele døgnet, der er ingen ventetid, og du skal ikke tilmelde dig.
                </p>
              </div>
              <div className="bg-white rounded-[18px] p-8">
                <span className="inline-block font-body text-[12px] font-bold uppercase tracking-[0.05em] text-soft-black bg-plain-green-30 px-3 py-1 rounded-full mb-3">
                  I en gruppe, sammen med andre
                </span>
                <h3 className="font-title text-[19px] font-bold text-soft-black mb-3">
                  Trivsels Grupper
                </h3>
                <p className="font-body text-[15px] text-text-medium">
                  Gruppen giver dig det, en skærm ikke kan: en fast plads hver anden uge, mennesker der selv kender livet med bipolar, og nogen der ser dig over tid, også når det er svært. Og du får chancen for selv at betyde noget for en anden.
                </p>
              </div>
            </div>
            <p className="text-[19px] leading-[1.55] text-text-medium font-body mt-7">
              Begge dele hjælper, og de fleste har glæde af begge.
            </p>
          </div>
        </section>

        <Wave from="#EDF4FA" to="#FFFFFF" flip />

        {/* LIFE STAGES */}
        <section className="bg-white px-8 py-20">
          <div className="max-w-[1040px] mx-auto text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-mountain-orange mb-4 font-body">
              3 livsfaser
            </p>
            <h2 className="font-title text-[34px] font-bold text-soft-black mb-4">
              Din gruppe baseres på din livsfase
            </h2>
            <p className="text-[19px] leading-[1.55] text-text-medium max-w-[640px] mx-auto mb-10 font-body">
              De spørgsmål, der fylder mest i livet med bipolar, ændrer sig over tid. Derfor bliver din gruppe sammensat af andre i samme livsfase.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {/* Ungdom */}
              <div className="rounded-2xl p-7 flex flex-col" style={{ background: "#FAF3D9" }}>
                <div className="flex items-center gap-2 font-body text-[13px] font-bold uppercase tracking-[0.06em] mb-3" style={{ color: "#9c7a1f" }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#d9b93f" }} />
                  Ungdom · 16–25 år
                </div>
                <h3 className="font-title text-[19px] font-bold text-soft-black mb-3">
                  Når livet med bipolar lige er begyndt
                </h3>
                <p className="font-body text-[15px] text-text-medium flex-1">
                  For dig, der er tæt på diagnosen, måske stadig bor hjemme eller er under uddannelse, og skal finde ud af, hvordan bipolar fylder i et liv.
                </p>
                <a
                  href="#tilmelding"
                  className="mt-4 inline-block font-title font-bold text-[15px] px-5 py-3 rounded-lg border-2 text-center transition-colors"
                  style={{ color: "#9c7a1f", borderColor: "#d9b93f" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#d9b93f"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#9c7a1f"; }}
                >
                  Skriv dig op til livsfasen Ungdom
                </a>
              </div>

              {/* Midtliv */}
              <div className="rounded-2xl p-7 flex flex-col bg-plain-green-30">
                <div className="flex items-center gap-2 font-body text-[13px] font-bold uppercase tracking-[0.06em] mb-3" style={{ color: "#3d5a3b" }}>
                  <span className="w-2 h-2 rounded-full inline-block bg-plain-green" />
                  Midtliv · 26–49 år
                </div>
                <h3 className="font-title text-[19px] font-bold text-soft-black mb-3">
                  Når bipolar skal dele plads med alt det andet
                </h3>
                <p className="font-body text-[15px] text-text-medium flex-1">
                  For dig, der balancerer bipolar med job, parforhold og måske børn, og har brug for redskaber, der holder i en fyldt kalender.
                </p>
                <a
                  href="#tilmelding"
                  className="mt-4 inline-block font-title font-bold text-[15px] px-5 py-3 rounded-lg border-2 text-center transition-colors"
                  style={{ color: "#3d5a3b", borderColor: "#4FAE62" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#4FAE62"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#3d5a3b"; }}
                >
                  Skriv dig op til livsfasen Midtliv
                </a>
              </div>

              {/* Erfaren */}
              <div className="rounded-2xl p-7 flex flex-col bg-lake-blue-30">
                <div className="flex items-center gap-2 font-body text-[13px] font-bold uppercase tracking-[0.06em] mb-3" style={{ color: "#46698C" }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#46698C" }} />
                  Erfaren · 50+ år
                </div>
                <h3 className="font-title text-[19px] font-bold text-soft-black mb-3">
                  Bipolar har været en del af dit liv længe
                </h3>
                <p className="font-body text-[15px] text-text-medium flex-1">
                  Uanset om du har haft din diagnose i årtier eller fået den for nylig, har du levet et helt voksenliv og har et erfarent perspektiv.
                </p>
                <a
                  href="#tilmelding"
                  className="mt-4 inline-block font-title font-bold text-[15px] px-5 py-3 rounded-lg border-2 text-center transition-colors"
                  style={{ color: "#46698C", borderColor: "#46698C" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#46698C"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#46698C"; }}
                >
                  Skriv dig op til livsfasen Erfaren
                </a>
              </div>
            </div>
          </div>
        </section>

        <Wave from="#FFFFFF" to="#FAF6F5" />

        {/* TRUST */}
        <section className="bg-warm-white px-8 py-20">
          <div className="max-w-[1040px] mx-auto text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-mountain-orange mb-4 font-body">
              Ledet med omtanke
            </p>
            <h2 className="font-title text-[34px] font-bold text-soft-black mb-8">
              Trygheden er ikke tilfældig
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-left">
              <div className="space-y-4">
                {[
                  "Grupperne ledes af facilitatorer, der er uddannet til lige præcis de her grupper, og som får faglig supervision undervejs. De stiller ikke diagnoser og behandler ikke. Deres opgave er at holde rummet trygt og sørge for, at hver session har en fast form.",
                  "Det er ikke altid let at få det bedre. At arbejde med sine egne mønstre kræver noget af dig, og det er helt normalt, hvis det til tider føles tungt.",
                  "Derfor holder facilitatorerne løbende øje med, hvordan du og de andre har det. Og hvis en gruppe ikke er nok for dig, er der en klar vej videre til professionel hjælp.",
                ].map((p, i) => (
                  <p key={i} className="font-body text-[19px] leading-[1.55] text-text-medium">{p}</p>
                ))}
              </div>
              <ul className="bg-white border border-[#E8DED4] rounded-2xl px-8 py-2 list-none">
                {[
                  "Uddannede facilitatorer, der holder rammen for gruppen",
                  "Fast faglig supervision af alle facilitatorer",
                  "Løbende tjek ind med alle deltagere, ikke kun ved indmeldelse",
                  "Klar vej videre til professionel hjælp, hvis der er behov for det",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 font-body text-[15px] text-text-medium py-3 border-b border-[#E8DED4] last:border-b-0">
                    <CheckIcon color="#4FAE62" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Wave from="#FAF6F5" to="#EDF4FA" flip />

        {/* FACILITATOR CTA */}
        <section className="bg-lake-blue-10 px-8 py-10">
          <div className="max-w-[1040px] mx-auto text-center">
            <p className="font-body text-[15px] text-text-medium">
              Er du interesseret i at blive facilitator? Har du selv bipolar?{" "}
              Skriv til os på{" "}
              <a
                href="mailto:kontakt@mitlivmed.dk?subject=Frivillig%20i%20MitLivMed"
                className="text-mountain-orange font-bold"
              >
                kontakt@mitlivmed.dk
              </a>
            </p>
          </div>
        </section>

        <Wave from="#EDF4FA" to="#DAE6F2" />

        {/* METHOD HERITAGE */}
        <section className="px-8 py-20 bg-lake-blue-30">
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="font-title text-[34px] font-bold text-soft-black mb-6">
              Bygget på metoder med over 50 års historik
            </h2>
            <p className="font-body text-[19px] leading-[1.55] text-text-medium mb-4">
              Trivsels Grupper bygger på værktøjer fra Thrive-appen — metoder, der har været brugt og videreudviklet i foreningslivet i over 50 år. Det er ikke en ny, uafprøvet idé, men en tilgang med en lang praksis bag sig, som i dag anvendes af flere organisationer i Danmark.
            </p>
            <p className="font-body text-[19px] leading-[1.55] text-text-medium">
              Facilitatorerne, der leder grupperne, er uddannet i netop disse metoder og modtager løbende faglig supervision, så kvaliteten holdes ensartet på tværs af alle grupper.
            </p>
          </div>
        </section>

        <Wave from="#DAE6F2" to="#FAF6F5" flip />

        {/* IS / IS NOT */}
        <section className="bg-warm-white px-8 py-20">
          <div className="max-w-[1040px] mx-auto text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-mountain-orange mb-4 font-body">
              Vigtigt at vide
            </p>
            <h2 className="font-title text-[34px] font-bold text-soft-black mb-8">
              Hvad Trivsels Grupper er, og ikke er
            </h2>
            <div className="bg-white border border-[#E8DED4] rounded-2xl overflow-hidden text-left">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:border-r border-[#E8DED4] border-t-4" style={{ borderTopColor: "#4FAE62" }}>
                  <h3 className="font-title text-[18px] font-bold text-soft-black mb-4">Gruppen er</h3>
                  <ul className="list-none space-y-0">
                    {[
                      "En fast, mindre gruppe, hvor du øver konkrete redskaber til at leve med bipolar, sammen med andre.",
                      "Ledet af uddannede facilitatorer, der får løbende faglig supervision, ikke behandere.",
                      "Bygget op om at arbejde med motivation, mønstre og balance i hverdagen.",
                      "Opdelt efter livsfase, så din gruppe består af andre, du kan relatere til.",
                      "Et sted, hvor du øver de gratis selvhjælpsværktøjer sammen med andre i stedet for alene foran en skærm.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 font-body text-[15px] text-text-medium py-3.5 border-b border-[#E8DED4] last:border-b-0">
                        <span className="font-bold flex-shrink-0" style={{ color: "#4FAE62" }}>+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-t-4" style={{ borderTopColor: "#BF5B39" }}>
                  <h3 className="font-title text-[18px] font-bold text-soft-black mb-4">Gruppen er ikke</h3>
                  <ul className="list-none space-y-0">
                    {[
                      { bold: "Ikke behandling eller terapi.", rest: " Gruppen erstatter ikke din behandler, psykolog eller psykiater." },
                      { bold: "Ikke medicinsk rådgivning.", rest: " Vi stiller ikke diagnoser og anbefaler ikke medicin." },
                      { bold: "Ikke krisehjælp.", rest: " Brug for hjælp nu? Ring 112, eller se steder du kan få hjælp fra her." },
                      { bold: "Ingen garanti for et bestemt resultat.", rest: " Vi lover ikke en bestemt fremgang, og en gruppe er ikke det rette tilbud for alle." },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 font-body text-[15px] text-text-medium py-3.5 border-b border-[#E8DED4] last:border-b-0">
                        <span className="font-bold text-mountain-orange flex-shrink-0">−</span>
                        <span><strong className="text-soft-black">{item.bold}</strong>{item.rest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <a
              href="/akut"
              className="inline-block mt-6 font-body text-[14px] font-bold text-soft-black bg-white border border-[#E8DED4] rounded-full px-6 py-3.5 hover:border-mountain-orange transition-colors"
            >
              Har du brug for hjælp nu? Klik her
            </a>
          </div>
        </section>

        <Wave from="#FAF6F5" to="#FFFFFF" flip />

        {/* PRICING */}
        <section className="bg-white px-8 py-20 text-center">
          <div className="max-w-[1040px] mx-auto">
            <h2 className="font-title text-[34px] font-bold text-soft-black mb-8">
              Hvad kommer det til at koste?
            </h2>
            <div className="max-w-[560px] mx-auto bg-white border border-[#E8DED4] rounded-[20px] p-11 text-center">
              <div className="font-title text-[48px] font-bold text-soft-black leading-none mb-1">
                149 kr.{" "}
                <span className="text-[20px] font-normal text-text-medium">/ måned</span>
              </div>
              <p className="font-body text-[14px] text-text-light mb-7">Når din gruppe starter</p>
              <ul className="list-none text-left border-t border-[#E8DED4] pt-5 mb-7 space-y-1">
                {[
                  "Adgang til din faste gruppe",
                  "Faglig facilitering hver session",
                  "Løbende supervision af facilitatorerne",
                  "Ingen binding, du kan opsige når som helst",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 font-body text-[15px] text-text-medium py-1.5">
                    <CheckIcon color="#4FAE62" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#tilmelding"
                className="inline-block font-body font-bold text-base text-white bg-mountain-orange px-8 py-4 rounded-full hover:bg-mountain-orange-110 transition-colors"
              >
                Skriv mig op
              </a>
              <p className="font-body text-[13px] text-text-light mt-4">
                De gratis selvhjælpsværktøjer er for alle. Det, du betaler for her, er selve gruppen: menneskene, den faste plads og hjælpen undervejs.
              </p>
            </div>
          </div>
        </section>

        <Wave from="#FFFFFF" to="#FFEECC" />

        {/* STIPENDIE BANNER */}
        <section className="bg-desert-yellow-30 px-8 py-7">
          <div className="max-w-[1040px] mx-auto flex items-center gap-5">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{ background: "#f5dfa8", color: "#8a4318" }}
            >
              ★
            </div>
            <p className="font-body text-[15px] text-text-medium">
              <strong className="text-soft-black">Har du ikke råd til gruppen?</strong>{" "}
              Du kan søge om et stipendie, der dækker hele eller dele af prisen.{" "}
              <button
                onClick={openStipendie}
                className="text-mountain-orange font-bold underline bg-transparent border-none cursor-pointer p-0"
              >
                Læs mere
              </button>
            </p>
          </div>
        </section>

        <Wave from="#FFEECC" to="#6DBB7C" flip />

        {/* ADGANG FOR ALLE */}
        <section className="px-8 py-16" style={{ background: "#6DBB7C" }}>
          <div className="max-w-[640px] mx-auto">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-4 font-body" style={{ color: "#f5fff2" }}>
              Ansøg et stipendie hvis økonomien driller
            </p>
            <h2 className="font-title text-[34px] font-bold text-white mb-6">
              Adgang for alle
            </h2>
            <div className="bg-white rounded-2xl p-10">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={jesperPhoto}
                  alt="Jesper Juel Jensen"
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-title font-bold text-[17px] text-soft-black">Jesper Juel Jensen</div>
                  <div className="font-body text-[13px] text-text-light">Stifter, MitLivMed</div>
                </div>
              </div>
              <div className="font-title text-[64px] leading-[0.5] mb-4" style={{ color: "#4FAE62" }}>"</div>
              <div className="space-y-4">
                {[
                  "Vores mål er, at MitLivMed skal være tilgængeligt for alle, uanset økonomisk situation. Vi skal fungere som en sund virksomhed, men penge må aldrig være grunden til, at et menneske ikke kan få gavn af det, vi har bygget.",
                  "Fællesskabet er og vil altid være gratis. Ingen ansøgning, ingen betaling, adgang til fællesskabet, indhold og de første redskaber fra dag ét.",
                  "Hvis du ønsker mere struktureret støtte men ikke har mulighed for at betale, kan du søge om adgang gennem MitLivMed Stipendier. Ansøgninger gennemgås månedligt, og formålet er enkelt: økonomi skal ikke stå i vejen for den rette hjælp.",
                  "Hvis du har mulighed for at betale for et medlemskab, håber vi du vil overveje det. På den måde er du med til at gøre det muligt for os at tilbyde stipendier til dem, der har mest brug for det.",
                ].map((p, i) => (
                  <p key={i} className="font-title text-[19px] italic leading-[1.55] text-soft-black">{p}</p>
                ))}
              </div>
              <p className="font-title italic text-text-medium text-base mt-5">— Jesper</p>
            </div>
            <div className="mt-6">
              <button
                onClick={openStipendie}
                className="inline-block font-body font-bold text-base px-8 py-4 rounded-full transition-colors"
                style={{ background: "#fff", color: "#4FAE62" }}
              >
                Søg om stipendie →
              </button>
            </div>
          </div>
        </section>

        <Wave from="#6DBB7C" to="#FFFFFF" />

        {/* SIGN UP */}
        <section className="bg-white px-8 py-20" id="tilmelding">
          <div className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div className="text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-mountain-orange mb-4 font-body">
                Ingen betaling. Ingen binding.
              </p>
              <h2 className="font-title text-[34px] font-bold text-soft-black mb-4">
                Skriv dig op, og hør fra os, når din gruppe er klar
              </h2>
              <p className="font-body text-[19px] leading-[1.55] text-text-medium">
                Vi danner de første livsfase-grupper, når der er tilmeldte nok. Det koster ikke noget at skrive sig op, og du forpligter dig ikke til noget. Vi kontakter dig, så snart der er en gruppe klar til dig.
              </p>
            </div>
            <div className="bg-white border border-[#E8DED4] rounded-[20px] p-10">
              <div className="space-y-5">
                <div>
                  <label className="block font-body text-[14px] font-bold text-soft-black mb-2">Navn</label>
                  <input
                    type="text"
                    className="w-full font-body text-[15px] px-4 py-3.5 rounded-xl border border-[#E8DED4] bg-warm-white text-soft-black outline-none focus:border-mountain-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-[14px] font-bold text-soft-black mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full font-body text-[15px] px-4 py-3.5 rounded-xl border border-[#E8DED4] bg-warm-white text-soft-black outline-none focus:border-mountain-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-[14px] font-bold text-soft-black mb-2">Telefon (valgfrit)</label>
                  <input
                    type="tel"
                    className="w-full font-body text-[15px] px-4 py-3.5 rounded-xl border border-[#E8DED4] bg-warm-white text-soft-black outline-none focus:border-mountain-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-[14px] font-bold text-soft-black mb-2">Livsfase</label>
                  <div className="flex flex-wrap gap-2.5">
                    {stages.map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => setSelectedStage(stage)}
                        className="font-body text-[14px] px-4 py-2.5 rounded-full border transition-colors"
                        style={{
                          borderColor: selectedStage === stage ? "#BF5B39" : "#E8DED4",
                          background: selectedStage === stage ? "#F2D7CE" : "#FAF6F5",
                          color: selectedStage === stage ? "#BF5B39" : "#5c5650",
                        }}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-body text-[14px] font-bold text-soft-black mb-2">
                    Hvad vil du gerne have til fælles med de andre i din gruppe? (valgfrit)
                  </label>
                  <textarea
                    rows={3}
                    onChange={e => setFormHasContent(e.target.value.length > 0)}
                    className="w-full font-body text-[15px] px-4 py-3.5 rounded-xl border border-[#E8DED4] bg-warm-white text-soft-black outline-none focus:border-mountain-orange transition-colors resize-y"
                  />
                </div>
                <button
                  type="button"
                  className="block w-full text-center font-body font-bold text-base text-white bg-mountain-orange px-8 py-4 rounded-full hover:bg-mountain-orange-110 transition-colors"
                >
                  Skriv mig op
                </button>
                <p className="font-body text-[12px] text-text-light">
                  Vi bruger kun dine oplysninger til at kontakte dig om Trivsels Grupper. Læs mere i vores{" "}
                  <a href="/privatlivspolitik" className="underline">privatlivspolitik</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Wave from="#FFFFFF" to="#FAF6F5" flip />

        {/* FAQ */}
        <section className="bg-warm-white px-8 py-20">
          <div className="max-w-[1040px] mx-auto">
            <h2 className="font-title text-[34px] font-bold text-soft-black mb-8 text-center">
              Ofte stillede spørgsmål
            </h2>
            <div className="divide-y divide-[#E8DED4] border-t border-[#E8DED4]">
              {[
                {
                  q: "Hvor meget tid skal jeg sætte af?",
                  a: "En session på 90 min hver 2. uge, der ligger fast i din kalender. Du skal ikke booke den selv.",
                },
                {
                  q: "Skal jeg lave noget mellem møderne?",
                  a: "Mellem møderne bruger du redskaberne i din egen hverdag. At lære dem er én ting; at få dem til at virke i dit liv er noget andet, og det er præcis her gruppen bliver vigtig. Du kan fortælle de andre, hvordan det gik, spejle dig i deres oplevelser, glæde dig over deres fremskridt og få hjælp, når du sidder fast.",
                },
                {
                  q: "Hvad koster det?",
                  a: "Det koster 149 kr. om måneden at deltage i Trivsels Grupper. Har du ikke råd til det lige nu, kan du søge om et stipendie. Stipendiet er betalt af støttemedlemmer, der ønsker at hjælpe mennesker, der har økonomiske udfordringer.",
                },
                {
                  q: "Hvorfor koster det noget nu?",
                  a: "Målet er, at kommunen, regionen eller et forsikringsselskab kommer til at betale for grupperne, enten for dig eller gennem dit arbejde. Men før vi kan vise, at det virker for den her gruppe mennesker, er vi nødt til at bede om egen betaling. Det arbejder vi på at ændre. Og har du ikke råd lige nu, kan du altid søge om et stipendie. Ingen skal holdes ude på grund af penge.",
                },
                {
                  q: "Hvorfor betale for en gruppe, når redskaberne bliver gratis?",
                  a: "Fordi du får noget andet i gruppen end selve redskaberne. Online kan du lære grebene i dit eget tempo, gratis. I gruppen får du mennesker: en fast plads hver anden uge, andre der kender bipolar indefra, nogen der følger dig over tid, og facilitatorer under supervision, der holder rummet trygt. De fleste får mest ud af at bruge begge dele.",
                },
                {
                  q: "Koster de gratis selvhjælpsværktøjer noget?",
                  a: "Nej, de bliver gratis for alle, uden tilmelding og uden binding. Vi tror på, at de her redskaber skal være der, lige når du har brug for dem.",
                },
                {
                  q: "Hvornår åbner selvhjælpsværktøjerne?",
                  a: "Vi bygger dem lige nu. Hold øje med vores hjemmeside og sociale kanaler.",
                },
                {
                  q: "Skal jeg ligne de andre i gruppen for at få noget ud af det?",
                  a: "Nej. I behøver ikke ligne hinanden på overfladen. Du vil blive sat i en gruppe, hvor vi tror på, at det er et godt match. Blandt andet tager vi højde for, hvilken livsfase du/I er i. Ultimativt er det, der binder jer sammen, at I alle kender livet med bipolar indefra.",
                },
                {
                  q: "Er det ikke bare endnu en psykoedukationsgruppe?",
                  a: "Nej. Psykoedukation giver dig basal viden om bipolar og er et afgrænset forløb. Her lærer du vigtige redskaber og øver dem sammen med andre, så længe det giver værdi for dig.",
                },
                {
                  q: "Hvad hvis jeg får en depression eller mani og ikke har overskud til en session?",
                  a: "Det er helt okay at melde afbud eller sidde over en gang imellem. Gruppen er der stadig, når du er klar igen, og facilitatorerne tjekker løbende ind med dig. Dog skal det nævnes, at hvis du stopper i din gruppe og senere tilmelder dig igen, kan vi ikke garantere dig, at du kan komme tilbage i den gamle gruppe.",
                },
              ].map((item, i) => (
                <details key={i} className="group py-1">
                  <summary className="flex justify-between items-center font-title text-[18px] font-bold text-soft-black py-5 cursor-pointer list-none">
                    {item.q}
                    <span className="text-2xl text-mountain-orange flex-shrink-0 ml-4 group-open:hidden">+</span>
                    <span className="text-2xl text-mountain-orange flex-shrink-0 ml-4 hidden group-open:inline">−</span>
                  </summary>
                  <p className="font-body text-[15px] text-text-medium pb-5 max-w-[640px]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div className="bg-lake-blue-10 py-8 px-8 text-center">
          <p className="font-body text-[13px] text-text-light">
            MitLivMed™ Trivsels Grupper er ikke en krisetjeneste.{" "}
            <a href="/akut" className="text-mountain-orange font-bold">
              Har du brug for hjælp? Klik her for at se dine muligheder.
            </a>
          </p>
        </div>
      </main>

      <Footer />

      {/* STIPENDIE MODAL */}
      {stipendieOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(43,36,32,0.55)" }}
          onClick={(e) => { if (e.target === e.currentTarget) attemptCloseStipendie(); }}
        >
          <div className="bg-warm-white rounded-[20px] max-w-[560px] w-full max-h-[88vh] overflow-y-auto p-10 relative">
            <button
              className="absolute top-5 right-5 text-text-light hover:text-soft-black text-[22px] leading-none bg-transparent border-none cursor-pointer"
              onClick={attemptCloseStipendie}
              aria-label="Luk"
            >
              ×
            </button>
            <h2 className="font-title text-[24px] font-bold text-soft-black mb-3">MitLivMed Stipendier</h2>
            <p className="font-body text-[15px] text-text-medium mb-6">
              MitLivMed fællesskabet er altid gratis. Stipendier gives til mere struktureret støtte for dem der har brug for det men ikke har mulighed for at betale. Ansøgninger gennemgås månedligt og vi vender tilbage inden for 10 dage.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block font-body text-[13px] font-bold text-soft-black mb-2">Hvad ønsker du stipendiet til?</label>
                <select className="w-full font-body text-[14.5px] px-3.5 py-3 rounded-xl border border-[#E8DED4] bg-white text-soft-black outline-none focus:border-mountain-orange">
                  <option>Trivsels Grupper</option>
                  <option>Andet (beskriv nedenfor)</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-[13px] font-bold text-soft-black mb-2">Hvorfor ønsker du at søge om stipendie?</label>
                <textarea
                  rows={3}
                  onChange={e => setFormHasContent(e.target.value.length > 0)}
                  className="w-full font-body text-[14.5px] px-3.5 py-3 rounded-xl border border-[#E8DED4] bg-white text-soft-black outline-none focus:border-mountain-orange resize-y"
                />
              </div>
              <div>
                <label className="block font-body text-[13px] font-bold text-soft-black mb-2">Hvor længe ønsker du at modtage støtte?</label>
                <select className="w-full font-body text-[14.5px] px-3.5 py-3 rounded-xl border border-[#E8DED4] bg-white text-soft-black outline-none focus:border-mountain-orange">
                  <option>1 måned</option>
                  <option>3 måneder</option>
                  <option>6 måneder</option>
                  <option>Andet</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-[13px] font-bold text-soft-black mb-2">Fornavn</label>
                <input type="text" onChange={e => setFormHasContent(e.target.value.length > 0)} className="w-full font-body text-[14.5px] px-3.5 py-3 rounded-xl border border-[#E8DED4] bg-white text-soft-black outline-none focus:border-mountain-orange" />
              </div>
              <div>
                <label className="block font-body text-[13px] font-bold text-soft-black mb-2">Efternavn</label>
                <input type="text" onChange={e => setFormHasContent(e.target.value.length > 0)} className="w-full font-body text-[14.5px] px-3.5 py-3 rounded-xl border border-[#E8DED4] bg-white text-soft-black outline-none focus:border-mountain-orange" />
              </div>
              <div>
                <label className="block font-body text-[13px] font-bold text-soft-black mb-2">E-mail</label>
                <input type="email" onChange={e => setFormHasContent(e.target.value.length > 0)} className="w-full font-body text-[14.5px] px-3.5 py-3 rounded-xl border border-[#E8DED4] bg-white text-soft-black outline-none focus:border-mountain-orange" />
              </div>
              <div>
                <label className="block font-body text-[13px] font-bold text-soft-black mb-2">Telefonnummer</label>
                <input type="tel" onChange={e => setFormHasContent(e.target.value.length > 0)} className="w-full font-body text-[14.5px] px-3.5 py-3 rounded-xl border border-[#E8DED4] bg-white text-soft-black outline-none focus:border-mountain-orange" />
              </div>
              <div className="flex gap-3 items-start">
                <input type="checkbox" id="gdpr" className="mt-1 flex-shrink-0" />
                <label htmlFor="gdpr" className="font-body text-[13px] text-text-medium font-normal">
                  Jeg giver samtykke til at MitLivMed opbevarer mine oplysninger med henblik på behandling af min stipendieansøgning. Oplysningerne opbevares i op til 6 måneder og slettes derefter, medmindre du forlænger. Læs mere i vores privatlivspolitik.
                </label>
              </div>
              <button
                type="button"
                className="block w-full text-center font-body font-bold text-base text-white bg-mountain-orange px-8 py-4 rounded-full hover:bg-mountain-orange-110 transition-colors"
              >
                Send ansøgning →
              </button>
              <p className="font-body text-[12.5px] text-text-light">
                Vi opbevarer dine oplysninger i op til 6 måneder. MitLivMed fællesskabet er og vil altid være gratis. Din ansøgning påvirker ikke din adgang til det.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* LEAVE CONFIRM MODAL */}
      {leaveConfirmOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6" style={{ background: "rgba(43,36,32,0.45)" }}>
          <div className="bg-warm-white rounded-2xl max-w-[400px] w-full p-7 text-center">
            <h2 className="font-title text-[19px] font-bold text-soft-black leading-[1.4] mb-6">
              Er du sikker på at du gerne vil forlade din ansøgning?
            </h2>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => { setLeaveConfirmOpen(false); setStipendieOpen(false); setFormHasContent(false); }}
                className="font-body font-bold text-[14px] text-white bg-mountain-orange px-6 py-3 rounded-full border-none cursor-pointer"
              >
                Ja, forlad
              </button>
              <button
                onClick={() => setLeaveConfirmOpen(false)}
                className="font-body font-bold text-[14px] text-soft-black bg-white px-6 py-3 rounded-full border border-[#E8DED4] cursor-pointer"
              >
                Nej, bliv
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrivselsGrupper;
