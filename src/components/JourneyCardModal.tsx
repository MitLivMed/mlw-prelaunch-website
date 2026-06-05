import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export type CardDetails = {
  emoji: string;
  modalTitle: string;
  intro: string[];
  sections: { header: string; body?: string; bullets?: string[] }[];
  outro?: string[];
  quote?: string;
  callout?: string;
};

export type JourneyCard = {
  id: string;
  image: string;
  title: string;
  imgClassName?: string;
  details: CardDetails;
};

interface JourneyCardModalProps {
  card: JourneyCard | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const JourneyCardModal = ({ card, onClose, onPrev, onNext }: JourneyCardModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap, Esc handling and body scroll lock (mirrors CrisisModal)
  useEffect(() => {
    if (!card) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [card, onClose]);

  if (!card) return null;

  const { details } = card;
  const titleId = `journey-modal-title-${card.id}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-warm-white/10 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <Helmet>
        <title>{details.modalTitle} | MitLivMed</title>
      </Helmet>

      {/* Prev arrow */}
      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 sm:left-6 p-2 rounded-full bg-warm-white/80 hover:bg-warm-white shadow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mountain-orange"
          aria-label="Forrige landskab"
        >
          <ChevronLeft className="w-6 h-6 text-soft-black" />
        </button>
      )}

      {/* Next arrow */}
      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 sm:right-6 p-2 rounded-full bg-warm-white/80 hover:bg-warm-white shadow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mountain-orange"
          aria-label="Næste landskab"
        >
          <ChevronRight className="w-6 h-6 text-soft-black" />
        </button>
      )}

      <div
        ref={modalRef}
        className="relative bg-warm-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-mountain-orange-10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mountain-orange"
          aria-label="Luk"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-soft-black" />
        </button>

        {/* Landscape image */}
        <div className="rounded-xl overflow-hidden aspect-[16/9] mb-5">
          <img
            src={card.image}
            alt={card.title}
            className={`w-full h-full object-cover ${card.imgClassName ?? ""}`}
          />
        </div>

        {/* Title */}
        <h2
          id={titleId}
          className="font-title text-3xl md:text-4xl font-semibold text-soft-black mb-4"
        >
          {details.modalTitle}
        </h2>

        {/* Content */}
        <div className="space-y-4 font-body text-soft-black leading-relaxed">
          {details.intro.map((paragraph, i) => (
            <p key={`intro-${i}`}>{paragraph}</p>
          ))}

          {details.sections.map((section, i) => (
            <div key={`section-${i}`} className="space-y-2">
              <p>
                <span className="font-semibold text-soft-black">
                  {section.header}
                </span>
                {section.body && <> {section.body}</>}
              </p>
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-1">
                  {section.bullets.map((bullet, j) => (
                    <li key={`bullet-${i}-${j}`}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {details.outro?.map((paragraph, i) => (
            <p key={`outro-${i}`}>{paragraph}</p>
          ))}

          {details.callout && (
            <div className="bg-plain-green-10 border-l-4 border-plain-green rounded-lg p-4 text-sm">
              {details.callout}
            </div>
          )}

          {details.quote && (
            <p className="italic text-center text-soft-black pt-2">
              "{details.quote}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneyCardModal;
