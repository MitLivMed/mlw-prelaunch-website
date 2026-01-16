import desertImage from "@/assets/desert.png";
import lakeImage from "@/assets/lake.png";
import plainsImage from "@/assets/plains.png";
import mountainImage from "@/assets/mountain.png";

const cards = [
  {
    id: "desert",
    image: desertImage,
    title: "Ørkenen",
    description: "Noget føles forkert. Du kan mærke det, før du kan forklare det. Du er ikke alene, mens du finder ordene.",
  },
  {
    id: "lake",
    image: lakeImage,
    title: "Søen",
    description: "Du har fået en diagnose. Hvad gør man så? Her kan du skabe overblik i alt det nye og høre andres oplevelser.",
  },
  {
    id: "plains",
    image: plainsImage,
    title: "Sletten",
    description: "Hverdagen kan ofte være en svære del. Rutinerne er det, der kan skabe ro, og vi deler & bygger dem sammen i små skridt.",
  },
  {
    id: "mountain",
    image: mountainImage,
    title: "Bjerget",
    description: "Du kender dine mønstre og dine behov. Hvis du har lyst, kan din historier og erfaringer også blive et lys for andre.",
  },
];

const JourneySection = () => {
  return (
    <section className="py-16 md:py-24 bg-plains/40">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto items-stretch">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header (Title + Description) */}
              <div className="mb-3">
                <h3 className="text-lg md:text-xl font-heading font-semibold text-plains-accent mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-plains-text font-body leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow mt-auto">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              <span className="text-primary underline decoration-primary decoration-2 underline-offset-2">sammen</span>
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
    </section>
  );
};

export default JourneySection;
