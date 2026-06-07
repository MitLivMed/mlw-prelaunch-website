import { useCallback, useRef } from "react";
import { useModalKeyboard } from "@/hooks/use-modal-keyboard";
import { Link } from "react-router-dom";
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
  calloutAction?: { label: string; href: string };
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
  prevCard?: JourneyCard;
  nextCard?: JourneyCard;
  onPrev?: () => void;
  onNext?: () => void;
}

const JourneyCardModal = ({ card, onClose, prevCard, nextCard, onPrev, onNext }: JourneyCardModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleArrowKeys = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") onPrev?.();
    if (e.key === "ArrowRight") onNext?.();
  }, [onPrev, onNext]);

  useModalKeyboard({ isOpen: !!card, modalRef, closeButtonRef, onClose, onExtraKeyDown: handleArrowKeys });

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

      {/* Prev card nav */}
      {onPrev && prevCard && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-mountain-orange rounded-xl"
          aria-label={`Forrige: ${prevCard.title}`}
        >
          <div className="relative w-36 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
            <img
              src={prevCard.image}
              alt={prevCard.title}
              className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${prevCard.imgClassName ?? ""}`}
            />
            <div className="relative m-[20%] bg-warm-white rounded-lg flex flex-row items-center justify-center gap-1 py-1 pl-3 pr-3">
              <ChevronLeft className="w-4 h-4 text-soft-black flex-shrink-0" />
              <span className="text-[14px] font-heading text-soft-black text-center leading-tight">{prevCard.title}</span>
            </div>
          </div>
        </button>
      )}

      {/* Next card nav */}
      {onNext && nextCard && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-mountain-orange rounded-xl"
          aria-label={`Næste: ${nextCard.title}`}
        >
          <div className="relative w-36 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
            <img
              src={nextCard.image}
              alt={nextCard.title}
              className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${nextCard.imgClassName ?? ""}`}
            />
            <div className="relative m-[20%] bg-warm-white rounded-lg flex flex-row items-center justify-center gap-1 py-1 pl-3 pr-3">
              <span className="text-[14px] font-heading text-soft-black text-center leading-tight">{nextCard.title}</span>
              <ChevronRight className="w-4 h-4 text-soft-black flex-shrink-0" />
            </div>
          </div>
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
              {details.calloutAction && (
                <> <Link
                  to={details.calloutAction.href}
                  className="underline font-medium text-mountain-orange hover:text-mountain-orange/70 transition-colors"
                >
                  {details.calloutAction.label}
                </Link></>
              )}
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
