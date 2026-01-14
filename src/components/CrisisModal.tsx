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
  {
    name: "Psykiatrifondens Rådgivning",
    url: "https://psykiatrifonden.dk",
    phone: "39252525",
    phoneDisplay: "39 25 25 25",
    target: "For dig med psykiske udfordringer og for pårørende.",
    hours: "Man-tor 10-22, fre-søn 10-18",
    extra: "Du kan også kontakte chatrådgivning eller brevkasse."
  },
  {
    name: "SIND Rådgivning",
    url: "https://sindraadgivning.dk",
    phone: "70232750",
    phoneDisplay: "70 23 27 50",
    target: "For dig med psykiske udfordringer og for pårørende.",
    hours: "Man/ons/fre 9-15, tir/tor 10-16"
  },
  {
    name: "DepressionsLinien (DepressionsForeningen)",
    phone: "33124774",
    phoneDisplay: "33 12 47 74",
    url: "https://depressionsforeningen.dk",
    target: "For voksne (18+) med depression eller bipolar lidelse samt pårørende.",
    hours: "Man-fre kl. 19-21 (undtagen helligdage)"
  },
  {
    name: "Headspace",
    url: "https://headspace.dk",
    target: "Gratis og anonym rådgivning til unge 12-25 år (chat og samtaler)."
  },
  {
    name: "SocialSpace",
    url: "https://socialspace.dk",
    target: "Anonymt overblik i appen over gratis rådgivning og hjælpetilbud, så du kan finde det, der passer til det, der fylder."
  },
  {
    name: "BørneTelefonen",
    phone: "116111",
    phoneDisplay: "116 111",
    url: "https://bornetelefonen.dk",
    target: "Gratis og anonym hjælp til børn og unge.",
    hours: "Åben 24 timer i døgnet inkl. helligdage"
  },
];

const tier3Resources = [
  { name: "Sundhedsstyrelsens \"Akut hjælp\" (EN AF OS)", url: "https://www.sst.dk/en-af-os/akut-hjaelp", note: "Overblik over akuttilbud og psykiatriske akutmodtagelser i din region." },
  { name: "Lægevagten", url: "https://www.borger.dk/sundhed-og-sygdom/akut-behov-for-hjaelp/Laegevagten", note: "Hjælp udenfor egen læges åbningstid (nummer afhænger af region)." },
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
              Tal med nogen i dag - Gratis og Anonymt
            </h3>
            <div className="grid gap-2 sm:gap-3">
              {tier2Resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 sm:p-4 bg-muted/50 border border-border rounded-xl hover:bg-muted hover:border-primary/30 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">{resource.name}</div>
                      <div className="text-xs sm:text-sm text-text-medium mt-0.5">{resource.target}</div>
                      {resource.phone && (
                        <div className="text-xs sm:text-sm text-text-light mt-1">
                          Tlf.{" "}
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.location.href = `tel:${resource.phone}`;
                            }}
                            className="text-primary hover:text-secondary transition-colors font-medium"
                          >
                            {resource.phoneDisplay}
                          </span>
                        </div>
                      )}
                      {resource.hours && (
                        <div className="text-xs text-text-light mt-0.5">{resource.hours}</div>
                      )}
                      {resource.extra && (
                        <div className="text-xs text-text-light mt-0.5">{resource.extra}</div>
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-light group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Tier 3: Local help */}
          <div>
            <h3 className="text-xs sm:text-sm font-heading font-semibold text-text-light uppercase tracking-wide mb-3 sm:mb-4">
              Find lokal akut hjælp
            </h3>
            <div className="space-y-3">
              {tier3Resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm sm:text-base font-body group"
                >
                  <span className="text-primary hover:text-secondary transition-colors underline underline-offset-2 group-hover:text-secondary">
                    {resource.name}
                  </span>
                  <ExternalLink className="w-3 h-3 inline-block ml-1 text-primary group-hover:text-secondary" />
                  <span className="block text-text-light text-xs sm:text-sm mt-0.5">{resource.note}</span>
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
