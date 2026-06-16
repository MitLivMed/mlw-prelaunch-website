import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logos/logo.svg";
import { Button } from "@/components/ui/button";
import { openSignupForm } from "@/lib/tally";
import { useCtaTracking } from "@/hooks/use-analytics";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { trackCtaClick } = useCtaTracking();

  useEffect(() => {
    const handleScroll = () => {
      // Show glassmorphism after scrolling a small amount
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isMenuOpen
          ? 'bg-warm-white'
          : isScrolled
            ? 'bg-warm-white/70 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MitLivMed" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/om-os"
            className="text-text-medium hover:text-foreground transition-colors font-body text-sm"
          >
            Om os
          </Link>
          <Link
            to="/stoettemedlemskab"
            className="text-text-medium hover:text-foreground transition-colors font-body text-sm"
          >
            Støt
          </Link>
          <a
            href="https://shop.mitlivmed.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-medium hover:text-foreground transition-colors font-body text-sm"
          >
            Butik
          </a>
          <Button
            onClick={() => { openSignupForm('header_desktop'); trackCtaClick('header_desktop'); }}
            className="bg-mountain-orange hover:bg-mountain-orange/90 text-warm-white font-heading font-medium hover:scale-105 transition-all"
          >
            Skriv dig på ventelisten →
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Luk menu" : "Åbn menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-warm-white border-b border-border shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/om-os"
              className="text-text-medium hover:text-foreground transition-colors font-body py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Om os
            </Link>
            <Link
              to="/stoettemedlemskab"
              className="text-text-medium hover:text-foreground transition-colors font-body py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Støt
            </Link>
            <a
              href="https://shop.mitlivmed.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-medium hover:text-foreground transition-colors font-body py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Butik
            </a>
            <Button
              onClick={() => {
                openSignupForm('header_mobile');
                trackCtaClick('header_mobile');
                setIsMenuOpen(false);
              }}
              className="bg-mountain-orange hover:bg-mountain-orange/90 text-warm-white font-heading font-medium w-full"
            >
              Skriv dig på ventelisten →
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
