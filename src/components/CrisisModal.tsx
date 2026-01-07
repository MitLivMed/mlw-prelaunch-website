import { useEffect, useRef } from "react";
import { X, Phone, ExternalLink } from "lucide-react";

interface CrisisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tier1Resources = [
  { label: "Ring 112", phone: "112", note: "Akut fare" },
  { label: "Ring Livslinien", phone: "70201201", note: "Krise og selvmordstanker", extra: "Alle dage. Chat i åbningstid på livslinien.dk" },
];

const tier2Resources = [
  { name: "Psykiatrifondens Rådgivning", url: "https://psykiatrifonden.dk", target: "Angst, depression, pårørende" },
  { name: "SIND Rådgivning", url: "https://sindraadgivning.dk", target: "Dig og pårørende" },
  { name: "DepressionsLinien", phone: "33124774", phoneDisplay: "33 12 47 74", url: "https://depressionsforeningen.dk", target: "Voksne 18+ med depression/bipolar" },
  { name: "headspace", url: "https://headspace.dk", target: "Unge 12-25, gratis og anonymt" },
  { name: "BørneTelefonen", phone: "116111", phoneDisplay: "116 111", url: "https://bornetelefonen.dk", target: "Børn og unge, gratis og anonymt" },
];

const tier3Resources = [
  { name: "Sundhedsstyrelsens \"Akut hjælp\"", url: "https://www.sundhed.dk", note: "samler relevante tilbud" },
  { name: "Lægevagten", url: "https://www.laegevagten.dk", note: "hjælp udenfor egen læges åbningstid" },
];

const CrisisModal = ({ isOpen, onClose }: CrisisModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      // Focus trap
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

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-foreground/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="crisis-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <h2 id="crisis-modal-title" className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-foreground">
            Har du brug for hjælp nu?
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex-shrink-0"
            aria-label="Luk"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          {/* Tier 1: Emergency */}
          <div>
            <h3 className="text-xs sm:text-sm font-heading font-semibold text-text-light uppercase tracking-wide mb-3 sm:mb-4">
              Akut hjælp
            </h3>
            <div className="grid gap-2 sm:gap-3">
              {tier1Resources.map((resource) => (
                <a
                  key={resource.phone}
                  href={`tel:${resource.phone}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-destructive/10 border-2 border-destructive rounded-xl hover:bg-destructive/20 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-destructive flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-destructive-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading font-semibold text-base sm:text-lg text-foreground group-hover:text-destructive transition-colors">
                      {resource.label}
                    </div>
                    <div className="text-xs sm:text-sm text-text-medium">{resource.note}</div>
                    {resource.extra && (
                      <div className="text-xs text-text-light mt-1 hidden sm:block">{resource.extra}</div>
                    )}
                  </div>
                  <div className="text-xl sm:text-2xl font-heading font-bold text-destructive flex-shrink-0">{resource.phone}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Tier 2: Talk to someone */}
          <div>
            <h3 className="text-xs sm:text-sm font-heading font-semibold text-text-light uppercase tracking-wide mb-3 sm:mb-4">
              Tal med nogen i dag
            </h3>
            <div className="grid gap-2 sm:gap-3">
              {tier2Resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-muted/50 border border-border rounded-xl hover:bg-muted hover:border-primary/30 transition-colors group cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-heading font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">{resource.name}</div>
                    <div className="text-xs sm:text-sm text-text-light">{resource.target}</div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    {resource.phone && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.location.href = `tel:${resource.phone}`;
                        }}
                        className="flex items-center gap-1 text-xs sm:text-sm text-primary hover:text-secondary transition-colors font-medium whitespace-nowrap"
                      >
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">{resource.phoneDisplay}</span>
                      </span>
                    )}
                    <ExternalLink className="w-4 h-4 text-text-light group-hover:text-primary transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Tier 3: Local help */}
          <div>
            <h3 className="text-xs sm:text-sm font-heading font-semibold text-text-light uppercase tracking-wide mb-3 sm:mb-4">
              Find lokal hjælp
            </h3>
            <div className="space-y-2">
              {tier3Resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base text-primary hover:text-secondary transition-colors font-body underline underline-offset-2"
                >
                  <span>{resource.name}</span>
                  <span className="text-text-light no-underline">— {resource.note}</span>
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border px-4 sm:px-6 py-3 sm:py-4 text-center">
          <p className="text-xs sm:text-sm text-text-light font-body">
            MitLivMed er ikke en krisetjeneste. Brug venligst ressourcerne ovenfor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrisisModal;
