import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Images for team members (replace stock photo with actual photos when available)
import photoJesper from "@/assets/staff/jesper-photo.png";
import photoAlex from "@/assets/staff/alex-photo.png";
import photoHelena from "@/assets/staff/helena-photo.png";
import photoHelenaB from "@/assets/staff/helena-b-photo.png";
import photoLisa from "@/assets/staff/lisa-photo.png";
import photoStock from "@/assets/staff/stock-photo.png";

type TeamMember = {
  name: string;
  title: string;
  photo: string | null;
};

const teamMembers: TeamMember[] = [
  {
    name: "Jesper Ohrt Juel Jensen",
    title: "Medstifter & Daglig Leder | Diagnoseret bipolar type 1",
    photo: photoJesper,
  },
  {
    name: "Helena Levison",
    title: "Medstifter, Fællesskab & Events",
    photo: photoHelena,
  },
  {
    name: "Alex Vilfort",
    title: "Producer",
    photo: photoAlex,
  },
  {
    name: "Sanne Hermann",
    title: "Moderator",
    photo: photoStock,
  },
  {
    name: "Lisa Brix Pedersen",
    title: "Redaktør",
    photo: photoLisa,
  },
  {
    name: "Helena Bright",
    title: "Sociale Medier & Klipper",
    photo: photoHelenaB,
  },
  {
    name: "Tonni Hyldgaard",
    title: "IT-ansvarlig",
    photo: photoStock,
  },
];

const About = () => {
  const mission = {
    statement: "Vi hjælper mennesker med psykiske lidelser, ligesom os selv, med at mestre hverdagen gennem fortællinger man kan spejle sig i, guidet refleksion, og et trygt fællesskab.",
    belief: "Vi har brug for rollemodeller, følelsesmæssig forståelse, og værktøjer til at klare hverdagen - pakket ind i et fællesskab der føles menneskeligt og med teknologi der støtter op og gør aspekter af livet nemmere.",
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Om os"
        description="Mød teamet bag MitLivMed og lær om vores mission: at hjælpe mennesker med bipolar med at mestre hverdagen gennem fællesskab og delte erfaringer."
        path="/om-os"
      />
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Spring til indhold
      </a>

      <Header />

      <main id="main-content" className="relative overflow-hidden">


        <div className="relative z-10">
          {/* Mission & Story section */}
          <div className="pt-24 md:pt-32 pb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                {/* Mission statement */}
                <div className="text-center mb-12">
                  <p className="text-xs font-semibold text-mountain-orange uppercase tracking-[0.2em] mb-4">
                    Vores mission
                  </p>
                  <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug max-w-3xl mx-auto">
                    {mission.statement}
                  </h1>
                </div>

                {/* Core belief callout */}
                <div className="bg-plain-green-10 border border-plain-green rounded-2xl p-6 md:p-8 mb-12">
                  <p className="text-xs font-semibold text-plain-green-110 uppercase tracking-[0.2em] mb-3">
                    Det vi tror på
                  </p>
                  <p className="font-body text-text-medium leading-relaxed">
                    {mission.belief}
                  </p>
                </div>

                {/* Story */}
                <div className="font-body text-text-medium leading-relaxed space-y-5">
                  <p className="text-lg text-foreground font-medium">
                    MitLivMed er skabt ud fra et behov, jeg selv stod i.
                  </p>

                  <p>
                    For år tilbage blev jeg ramt af en depression, der vendte alt på hovedet og senere blev jeg diagnosticeret som bipolar. Jeg ledte efter andre med bipolar, som jeg kunne spejle sig i. Ikke for at få råd eller diagnoser, bare for at se, at man godt kan få et godt liv alligevel og træde i andres spor.
                  </p>

                  <p>
                    Men det, jeg fandt online, var enten for lidt eller for meget støj. Et par kendte ansigter, og ting der føltes mere kaotiske end hjælpsomme. Det gav mig ikke håb. Det gjorde mig mest bare mere alene.
                  </p>

                  <p>Jeg manglede noget andet. Jeg havde brug for at møde:</p>

                  <ul className="space-y-2 ml-1">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-mountain-orange mt-2.5 flex-shrink-0" />
                      <span>Nogen der har prøvet det, jeg gik igennem og kan sige højt, hvad der faktisk hjalp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-mountain-orange mt-2.5 flex-shrink-0" />
                      <span>Nogen der står i samme situationer nu, så man ikke føler sig alene</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-mountain-orange mt-2.5 flex-shrink-0" />
                      <span>Nogen der kan give håb, uden at det bliver "positivt på kommando"</span>
                    </li>
                  </ul>

                  <p className="pt-4">
                    Det blev startskuddet. Derfor bygger vi <strong className="text-foreground">MitLivMed</strong> - et modereret digitalt fællesskab for mennesker med bipolar, hvor du kan møde andres erfaringer, når du har brug for det.
                  </p>

                  <p className="text-lg text-foreground font-medium pt-2">
                    Det handler om det, der kommer efter: hverdagen, relationerne, rutinerne, og håbet, der føles ægte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team section */}
          <div className="pb-16 md:pb-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground text-center mb-10">
                  Holdet bag MitLivMed
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-center text-center">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-36 h-36 md:w-44 md:h-44 object-cover object-top rounded-2xl shadow-md mb-4"
                        />
                      ) : (
                        <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl shadow-md mb-4 bg-primary/10 flex items-center justify-center">
                          <span className="font-heading text-3xl font-semibold text-primary/60">
                            {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                      )}
                      <p className="font-heading text-base font-semibold text-foreground">
                        {member.name}
                      </p>
                      <p className="text-sm text-text-medium mt-1">{member.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer section */}
          <div className="pb-16 md:pb-24">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Bliv Frivillig
                </h2>
                <p className="font-body text-text-medium leading-relaxed">
                  Hvis du har lyst til at hjælpe på anden måde end som betatester før lancering, så skriv til os på{" "}
                  <a
                    href="mailto:kontakt@mitlivmed.dk?subject=Frivillig%20i%20MitLivMed"
                    className="text-mountain-orange hover:text-mountain-orange/80 underline transition-colors"
                  >
                    kontakt@mitlivmed.dk
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
