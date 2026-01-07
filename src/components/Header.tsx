import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="MitLivMed" className="h-8 w-auto" />
          <span className="font-logo font-semibold text-warm-black text-lg">
            MitLivMed<sup className="text-xs text-text-light ml-0.5">beta</sup>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-text-medium hover:text-foreground transition-colors font-body text-sm"
          >
            Om os
          </a>
          <Button
            onClick={scrollToSignup}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-medium cta-shadow hover:cta-shadow-hover transition-all"
          >
            Skriv dig op →
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#about"
              className="text-text-medium hover:text-foreground transition-colors font-body py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Om os
            </a>
            <Button
              onClick={scrollToSignup}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-medium cta-shadow w-full"
            >
              Skriv dig op →
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
