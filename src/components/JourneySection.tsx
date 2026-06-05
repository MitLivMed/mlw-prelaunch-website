import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JourneyCardModal, { JourneyCard } from "./JourneyCardModal";
import desertImage from "@/assets/journey/desert.png";
import jungleImage from "@/assets/journey/jungle.png";
import plainsImage from "@/assets/journey/plains.png";
import valleyImage from "@/assets/journey/valley.png";
import mountainImage from "@/assets/journey/mountain.png";

const cards: (JourneyCard & { description: string })[] = [
  {
    id: "desert",
    image: desertImage,
    title: "Ørkenen",
    description: "Noget føles forkert. Du kan mærke det, før du kan forklare det. Du er ikke alene, mens du finder ordene.",
    details: {
      emoji: "🌅🏜️",
      modalTitle: "Velkommen til Ørkenen",
      intro: [
        "Noget føles forkert. Måske har du ikke ord for det endnu. Måske leder du efter svar, du ikke engang kender spørgsmålene til.",
        "Det er okay. Du er her, og det er nok.",
      ],
      sections: [
        {
          header: "Ørkenen er for dig, der er tidligt på rejsen",
          body: "uanset om du er udiagnosticeret, nyligt diagnosticeret, eller bare ved, at noget ikke stemmer. Terrænet er ukendt. Måske føles det ensomt. Men andre har gået her før dig.",
        },
        {
          header: "Her deler vi ting som:",
          bullets: [
            'Forvirring og usikkerhed — "er det bare mig?"',
            "At finde de rigtige fagfolk",
            "Hvad sker der egentlig med mig?",
            "At fortælle familie eller venner",
            "De første skridt, uanset hvor små de er",
          ],
        },
      ],
      outro: [
        "Du behøver ikke dele noget, du ikke er klar til. At læse med tæller også. Der er ingen forkerte spørgsmål her. Kun mennesker, der forstår.",
      ],
      quote: "Du er ikke faret vild. Andre har gået dette terræn.",
    },
  },
  {
    id: "jungle",
    image: jungleImage,
    title: "Junglen",
    description: "Du har fået en diagnose. Hvad gør man så? Her kan du skabe overblik i alt det nye og høre andres oplevelser.",
    details: {
      emoji: "🌊",
      modalTitle: "Velkommen til Junglen",
      intro: [
        "Du har fået svar — men nu skal du lære at leve med dem. En ny virkelighed, du ikke valgte, men som du skal navigere i. Vandet er dybt, og det bevæger sig.",
      ],
      sections: [
        {
          header: "Søen er for dig, der er midt i store forandringer",
          body: "— diagnose, behandling, medicin, identitet. Alt det, der vælter rundt, når du prøver at finde fodfæste i noget nyt.",
        },
        {
          header: "Her deler vi ting som:",
          bullets: [
            "Behandling og medicinrejsen",
            "Sorg over det liv, du troede du ville have",
            "Nye rutiner, der (måske) virker",
            "Identitet — hvem er jeg nu?",
            "At lære at svømme, én dag ad gangen",
          ],
        },
      ],
      outro: [
        "Det er rodet. Det er svært. Og det er helt normalt. Du behøver ikke have styr på noget for at være her.",
      ],
      quote: "Heling er rodet og ikke-lineær. Her flyder du med andre, der forstår.",
    },
  },
  {
    id: "valley",
    image: valleyImage,
    title: "Dalen",
    description: "Nogle dage er det bare for tungt at bære alene. Her behøver du ikke forklare det eller pakke det pænt ind. Du må bare lægge det fra dig.",
    imgClassName: "object-bottom md:object-center",
    details: {
      emoji: "🌄",
      modalTitle: "Velkommen til Dalen",
      intro: [
        "Nogle dage er det bare for meget. Du kan ikke forklare det. Du kan ikke pakke det pænt ind. Det er bare tungt, og du bærer det alene.",
        "Dalen er for dig, der har brug for at lægge det fra dig. Ikke løse det. Ikke forklare det. Bare slippe det.",
      ],
      sections: [
        {
          header: "Her må du:",
          bullets: [
            "Skrive det, du ikke kan sige til nogen du kender",
            "Lade det være rodet, grimt og ufiltreret",
            "Dumpe det hele, uden at pakke det ind",
            "Eksistere i det tunge, uden at skulle præstere noget",
          ],
        },
      ],
      outro: [
        'Du behøver ikke skrive trigger advarsel. Du behøver ikke afslutte med "men jeg har det nok godt". Du behøver ikke svare nogen, og medmindre du beder om det, forventes folk ikke at svare.',
        "Du kan falde hertil fra alle steder. Det er ikke din skyld, og du er ikke alene.",
      ],
      callout:
        "🤍 Vigtigt: Alt, der deles her, er personlige erfaringer — ikke medicinsk rådgivning. Har du brug for akut hjælp? Se Hjælp & SOS.",
    },
  },
  {
    id: "plains",
    image: plainsImage,
    title: "Sletten",
    description: "Hverdagen kan ofte være en svære del. Rutinerne er det, der kan skabe ro, og vi deler & bygger dem sammen i små skridt.",
    details: {
      emoji: "🌾",
      modalTitle: "Velkommen til Sletten",
      intro: [
        "Du følger din behandling. Går på arbejde. Prøver at holde balancen. Det er ikke nødvendigvis glamourøst, men det er dit liv — og du lever det.",
      ],
      sections: [
        {
          header: "Sletten er for dig, der har fundet en rytme",
          body: "— ikke perfekt, men funktionel. Du ved, hvad der virker for dig det meste af tiden. Du lever dit liv uden eller mellem episoderne.",
        },
        {
          header: "Her deler vi ting som:",
          bullets: [
            "Hverdagens små sejre (og nederlag)",
            "Rutiner, der holder dig på sporet",
            "Arbejde, relationer, og alt det praktiske",
            "Motivation på de dage, hvor det hele føles fladt",
            "Tips og tricks fra hverdagen",
          ],
        },
      ],
      outro: [
        "Her fejrer vi det, andre ikke ser. En hel uge uden at aflyse planer. En god nats søvn. At huske sin medicin.",
      ],
      quote: "Det uglamourøse slid er der, hvor det rigtige liv sker, eller bygges op.",
    },
  },
  {
    id: "mountain",
    image: mountainImage,
    title: "Bjerget",
    description: "Du kender dine mønstre og dine behov. Hvis du har lyst, kan din historier og erfaringer også blive et lys for andre.",
    details: {
      emoji: "⛰️",
      modalTitle: "Velkommen til Bjerget",
      intro: [
        "Du har været igennem noget. Du har perspektiv, du ikke bad om, men som du er glad for i dag. Du er klar til at række hånden ud.",
      ],
      sections: [
        {
          header: "Bjerget er for dig, der har fundet mening i rejsen",
          body: "— ikke som ekspert, men som én der forstår. Du defineres ikke længere af din diagnose. Du har lært noget, du gerne vil dele.",
        },
        {
          header: "Her deler vi ting som:",
          bullets: [
            "Erfaringer og perspektiv fra den anden side",
            "Hvad du ville ønske, du havde vidst",
            "At støtte andre uden at overtage",
            "At finde mening i det, du har været igennem",
            "Refleksioner over rejsen",
          ],
        },
      ],
      outro: [
        "Det her er ikke et sted for svar med stort S. Det er et sted for ærlige erfaringer fra mennesker, der stadig er på vej.",
      ],
      quote: "Du har optjent perspektiv. Her lyser du vejen for andre.",
    },
  },
];

const JourneySection = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const sectionRef = useRef<HTMLElement>(null);

  const activeCard = cards.find((c) => c.title.toLowerCase() === slug) ?? null;

  // Keep the journey section framed behind the overlay (and on close)
  useEffect(() => {
    if (slug) {
      sectionRef.current?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    }
  }, [slug]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="py-16 md:py-24 bg-plain-green-10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground leading-tight mb-4">
            Livet efter diagnosen er ikke én vej
          </h2>
          <p className="text-lg md:text-xl text-plains-text font-body">
            Den består af en række landskaber, mange genkender
          </p>
        </div>

        {/* Landscape Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 max-w-3xl md:max-w-6xl mx-auto items-stretch">
          {cards.map((card, index) => (
            <div
              key={card.id}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/landskaber/${card.title.toLowerCase()}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(`/landskaber/${card.title.toLowerCase()}`);
                }
              }}
              className="group animate-fade-in-up flex flex-col cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-mountain-orange focus-visible:ring-offset-2 focus-visible:ring-offset-plain-green-10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header (Title + Description) */}
              <div className="mb-3 px-2 md:px-0">
                <h3 className="text-lg md:text-xl font-heading font-semibold text-plains-accent mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-plains-text font-body leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Image */}
              <div className="relative aspect-[16/9] md:aspect-[3/4] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow mt-auto">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="eager"
                  decoding="sync"
                  className={`w-full h-full object-cover [backface-visibility:hidden] group-hover:scale-105 transition-transform duration-500 ${card.imgClassName ?? ""}`}
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Three Challenges Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground leading-tight">
              De tre store udfordringer vi løser,{" "}
              <span className="text-mountain-orange">sammen</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
            <div>
              <h4 className="text-lg md:text-xl font-heading font-semibold text-plains-accent mb-3">
                At søge dybere indsigt
              </h4>
              <p className="text-plains-text font-body leading-relaxed">
                Når livet forandres, hjælper "3 tips til…" sjældent. Man har brug for nuancer, kontekst. Man søger fortællinger, der går et spadestik dybere for bedre at forstå sig selv og sin situation, og ikke blot optimere sin hverdag.
              </p>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-heading font-semibold text-plains-accent mb-3">
                At finde det rette fællesskab
              </h4>
              <p className="text-plains-text font-body leading-relaxed">
                De fleste støttegrupper er enten for brede eller for tilfældige. Man kan stå i en helt bestemt fase og stadig føle sig alene. Behovet er et fællesskab med mennesker, der faktisk genkender det sted, man er, og hvor man kan dele og lytte uden at skulle forklare alt fra bunden.
              </p>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-heading font-semibold text-plains-accent mb-3">
                At opdage det relevante indhold
              </h4>
              <p className="text-plains-text font-body leading-relaxed">
                Online er der uendeligt meget indhold. Men når man har begrænset energi, bliver det hurtigt støj: repetitivt, overfladisk eller bare forkert timet. Man har brug for hjælp til at finde det, der giver mening lige nu og på et sprog man forstår - uden doomscrolling, uden at spilde sin dyrebare tid.
              </p>
            </div>
          </div>
        </div>
      </div>

      <JourneyCardModal card={activeCard} onClose={() => navigate("/")} />
    </section>
  );
};

export default JourneySection;
