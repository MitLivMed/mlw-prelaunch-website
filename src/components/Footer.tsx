import { useState } from "react";
import { Link } from "react-router-dom";
import CrisisModal from "./CrisisModal";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [isCrisisModalOpen, setIsCrisisModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-background text-text-dark py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Two column layout */}
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
              {/* Left column - Brand */}
              <div className="max-w-lg">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-1">
                  MitLivMed ApS
                </h3>
                <p className="text-text-light font-body text-xs mb-3">
                  Gothersgade 103, 4. th.<br />
                  1123 København K<br />
                  CVR: 46193040
                </p>
                <p className="text-text-medium font-body text-sm leading-relaxed mb-6">
                  Vi styrker mennesker, der lever med psykiske lidelser, til at mestre hverdagen gennem relaterbar historiefortælling, guidet refleksion og et trygt fællesskab.
                </p>
                {/* Social icons */}
                <div className="flex items-center gap-4">
                  <a href="https://www.instagram.com/mitlivmed/" className="text-text-light hover:text-text-dark transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/mitlivmed/" className="text-text-light hover:text-text-dark transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Right column - Links */}
              <div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-4">
                  Virksomhed
                </h4>
                <nav className="flex flex-col gap-3 text-sm font-body text-text-medium">
                  <Link to="/om-os" className="hover:text-text-dark transition-colors">
                    Om MitLivMed
                  </Link>
                  <a href="mailto:kontakt@mitlivmed.dk" className="hover:text-text-dark transition-colors">
                    Kontakt
                  </a>
                  <Link to="/privatlivspolitik" className="hover:text-text-dark transition-colors">
                    Privatlivspolitik
                  </Link>
                  <Link to="/cookies" className="hover:text-text-dark transition-colors">
                    Cookiepolitik
                  </Link>
                </nav>
              </div>
            </div>

            {/* Bottom row */}
            <div className="text-center text-xs text-text-light font-body">
              <p>© Copyright MitLivMed ApS 2026 - Built with kindness in Copenhagen</p>
            </div>
          </div>
        </div>
      </footer>

      <CrisisModal isOpen={isCrisisModalOpen} onClose={() => setIsCrisisModalOpen(false)} />
    </>
  );
};

export default Footer;
