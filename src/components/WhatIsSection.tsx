import { useState } from "react";
import CrisisModal from "./CrisisModal";

const WhatIsSection = () => {
  const [isCrisisModalOpen, setIsCrisisModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
            {/* What IS MitLivMed */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                Hvad er MitLivMed?
              </h2>
              <div className="space-y-4 text-text-medium font-body leading-relaxed">
                <p>
                  MitLivMed er et modereret digitalt fællesskab for mennesker med bipolar. Her deler vi levede erfaringer gennem videoer og indlæg med fokus på det der faktisk har hjulpet os i hverdagen.
                </p>
                <p>
                  Det er til dig, der savner støtte og spejling efter diagnosen. Måske leder du efter håb, genkendelse, eller bare nogen der har stået der før.
                </p>
                <p>
                  Du behøver ikke dele noget selv. Du kan følge med, lære, reflektere, eller bidrage, hvis du har lyst. Du bestemmer.
                </p>
                <p>
                  Alt indhold bliver gennemgået, og fællesskabet er modereret og efter retningslinjer fra fagpersoner, så din oplevelse føles trygt med respekt for dit privatliv.
                </p>
                <p className="text-text-dark font-medium">
                  Pårørende er også velkomne. Partnere, familie og venner til mennesker med bipolar kan deltage, så længe de følger fællesskabets retningslinjer og respekterer, at den primære del af fællesskabet tilhører dem med diagnosen - eller dem som mistænker at de har den.
                </p>
              </div>
            </div>

            {/* What ISN'T MitLivMed */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                Hvad er MitLivMed ikke?
              </h2>
              <ul className="space-y-4 text-text-medium font-body leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-text-dark">Ikke terapi eller behandling.</strong>
                    <br />
                    MitLivMed er et fællesskabs- og refleksionsværktøj. Det erstatter ikke din behandler.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-text-dark">Ikke medicinsk rådgivning.</strong>
                    <br />
                    Vi kan ikke vurdere din situation, stille diagnoser eller anbefale medicin.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-text-dark">Ikke krisestøtte.</strong>
                    <br />
                    Vi kan ikke hjælpe i akutte kriser. Hvis du har brug for hjælp nu, så find den her:
                  </span>
                </li>
              </ul>

              {/* Crisis Help Button */}
              <div className="mt-6 md:mt-6 text-center md:text-left">
                <button
                  onClick={() => setIsCrisisModalOpen(true)}
                  className="text-primary hover:text-secondary underline underline-offset-4 font-body font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  Har du brug for hjælp? Klik her
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CrisisModal isOpen={isCrisisModalOpen} onClose={() => setIsCrisisModalOpen(false)} />
    </>
  );
};

export default WhatIsSection;
