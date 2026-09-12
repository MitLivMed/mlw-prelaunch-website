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
    id: "forrest",
    image: jungleImage,
    title: "Skoven",
    description: "I skoven leves det meste af livet med bipolar: dage hvor du finder overblik, dage hvor det hele er tungt, og dage hvor du bare følger stien.",
    details: {
      emoji: "🌲",
      modalTitle: "Velkommen til Skoven",
      intro: [
        "Skoven er for dig, der er midt i alt det, en diagnose bringer med sig - nyt sprog, ny behandling, ny hverdag. For dig, der har fundet en rytme i det. For dig, når hverdagen kan være meget at bære alene.",
      ],
      sections: [
        {
          header: "Her deler vi ting som:",
          bullets: [
            "Identitet - hvem er jeg nu?",
            "Erfaringer med behandling Rutiner der (måske) virker, og hverdagens små sejre",
            "Sorg over det liv, du troede du ville have",
            "Arbejde, relationer og alt det praktiske",
            "De dage hvor du bare må lægge det fra dig uden at forklare",
          ],
        },
      ],
      outro: [
        "Det er rodet. Det er hverdag. Du behøver ikke have styr på noget, præstere noget eller pakke det pænt ind for at være her.",
      ],
      callout: "💚Vigtigt: Alt, der deles her, er personlige erfaringer - ikke medicinsk rådgivning. Har du brug for akut hjælp? Se ",
      calloutAction: { label: "Hjælp & SOS", href: "https://www.mitlivmed.dk/akut" },
      quote: "I Skoven går du i dit eget tempo sammen med andre, der kender stierne.",
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

  const activeIndex = cards.findIndex((c) => c.title.toLowerCase() === slug);
  const activeCard = activeIndex !== -1 ? cards[activeIndex] : null;
  const prevCard = activeIndex > 0 ? cards[activeIndex - 1] : null;
  const nextCard = activeIndex < cards.length - 1 ? cards[activeIndex + 1] : null;

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-3xl md:max-w-4xl mx-auto items-stretch">
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

      <JourneyCardModal
        card={activeCard}
        onClose={() => navigate("/")}
        prevCard={prevCard ?? undefined}
        nextCard={nextCard ?? undefined}
        onPrev={prevCard ? () => navigate(`/landskaber/${prevCard.title.toLowerCase()}`) : undefined}
        onNext={nextCard ? () => navigate(`/landskaber/${nextCard.title.toLowerCase()}`) : undefined}
      />
    </section>
  );
};

export default JourneySection;
