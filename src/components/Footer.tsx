import { useState } from "react";
import CrisisModal from "./CrisisModal";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [isCrisisModalOpen, setIsCrisisModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-warm-black text-background/90 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Top row */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src={logo} alt="MitLivMed" className="h-8 w-auto brightness-0 invert opacity-80" />
                <span className="font-logo font-semibold text-lg">
                  MitLivMed<sup className="text-xs opacity-60 ml-0.5">beta</sup>
                </span>
              </div>

              {/* Links */}
              <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-body">
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  Om os
                </a>
                <a
                  href="mailto:kontakt@mitlivmed.dk"
                  className="hover:text-primary transition-colors"
                >
                  Kontakt
                </a>
                <button
                  onClick={() => setIsCrisisModalOpen(true)}
                  className="hover:text-primary transition-colors"
                >
                  Krisehjælp
                </button>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Privatlivspolitik
                </a>
              </nav>
            </div>

            {/* Divider */}
            <div className="h-px bg-background/20 mb-8" />

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/60 font-body">
              <p>© 2025 MitLivMed. Alle rettigheder forbeholdes.</p>
              <p>
                MitLivMed er ikke en lægelig tjeneste eller krisetjeneste.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <CrisisModal isOpen={isCrisisModalOpen} onClose={() => setIsCrisisModalOpen(false)} />
    </>
  );
};

export default Footer;
