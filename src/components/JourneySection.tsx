import desertImage from "@/assets/desert.png";
import lakeImage from "@/assets/lake.png";
import plainsImage from "@/assets/plains.png";
import mountainImage from "@/assets/mountain.png";

const cards = [
  {
    id: "desert",
    image: desertImage,
    title: "Ørkenen",
    description: "Noget føles forkert. Du er ikke alene. Du har ikke ord for det endnu.",
  },
  {
    id: "lake",
    image: lakeImage,
    title: "Søen",
    description: "Du fik diagnosen. Hvad nu? Du navigerer kaosset i en ny virkelighed.",
  },
  {
    id: "plains",
    image: plainsImage,
    title: "Sletterne",
    description: "Hverdagen er den svære del. Rutinen er det, der mangler kunne findes.",
  },
  {
    id: "mountain",
    image: mountainImage,
    title: "Bjerget",
    description: "Du mestrer dig selv og din historie kan lyse vejen for andre.",
  },
];

const JourneySection = () => {
  return (
    <section className="py-16 md:py-24 bg-desert/40">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground leading-tight mb-4">
            Livet efter diagnosen er ikke én vej.
          </h2>
          <p className="text-lg md:text-xl text-text-medium font-body">
            Den består af en række landskaber, mange genkender
          </p>
        </div>

        {/* Landscape Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header (Title + Description) */}
              <div className="mb-3">
                <h3 className="text-lg md:text-xl font-heading font-semibold text-primary mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-text-medium font-body leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
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
      </div>
    </section>
  );
};

export default JourneySection;
