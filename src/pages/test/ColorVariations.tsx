import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WavesDivider from "@/components/WavesDivider";
import Carousel from "@/components/Carousel";
import JourneySection from "@/components/JourneySection";
import WhatIsSection from "@/components/WhatIsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// Color variations data from docs/color-variations.html
const variations = {
  baseline: {
    name: "1. Baseline (Current)",
    group: "brandbook",
    colors: {
      "--background": "40 50% 97.5%",
      "--foreground": "0 0% 17%",
      "--accent": "27 91% 54%",
      "--secondary": "183 38% 28%",
      "--desert": "36 45% 81%",
      "--plains": "72 22% 81%",
      "--warm-black": "30 33% 18%",
      "--text-dark": "0 0% 18%",
      "--text-medium": "0 0% 35%",
      "--text-light": "0 0% 54%",
      "--border": "36 30% 85%",
    },
  },
  lake: {
    name: "2. Lake-Forward",
    group: "brandbook",
    colors: {
      "--background": "170 25% 97%",
      "--foreground": "183 30% 12%",
      "--accent": "183 45% 32%",
      "--secondary": "183 38% 28%",
      "--desert": "180 20% 88%",
      "--plains": "175 18% 85%",
      "--warm-black": "183 35% 18%",
      "--text-dark": "183 30% 15%",
      "--text-medium": "180 18% 38%",
      "--text-light": "175 12% 52%",
      "--border": "180 18% 85%",
    },
  },
  desert: {
    name: "3. Desert-Warm",
    group: "brandbook",
    colors: {
      "--background": "38 55% 96%",
      "--foreground": "28 25% 18%",
      "--accent": "32 55% 42%",
      "--secondary": "28 40% 35%",
      "--desert": "36 50% 82%",
      "--plains": "40 35% 85%",
      "--warm-black": "28 30% 18%",
      "--text-dark": "28 25% 20%",
      "--text-medium": "32 18% 42%",
      "--text-light": "35 12% 55%",
      "--border": "38 30% 82%",
    },
  },
  plains: {
    name: "4. Plains-Minimal",
    group: "brandbook",
    colors: {
      "--background": "85 22% 96%",
      "--foreground": "95 20% 15%",
      "--accent": "95 35% 38%",
      "--secondary": "100 25% 35%",
      "--desert": "80 18% 84%",
      "--plains": "85 22% 82%",
      "--warm-black": "95 25% 18%",
      "--text-dark": "95 20% 18%",
      "--text-medium": "90 15% 40%",
      "--text-light": "85 10% 52%",
      "--border": "85 18% 85%",
    },
  },
  contrast: {
    name: "5. High-Contrast",
    group: "brandbook",
    colors: {
      "--background": "0 0% 100%",
      "--foreground": "0 0% 8%",
      "--accent": "0 0% 15%",
      "--secondary": "0 0% 25%",
      "--desert": "0 0% 95%",
      "--plains": "0 0% 92%",
      "--warm-black": "0 0% 8%",
      "--text-dark": "0 0% 8%",
      "--text-medium": "0 0% 30%",
      "--text-light": "0 0% 50%",
      "--border": "0 0% 88%",
    },
  },
  dusk: {
    name: "6. Dusk",
    group: "creative",
    colors: {
      "--background": "270 18% 97%",
      "--foreground": "270 25% 15%",
      "--accent": "270 40% 50%",
      "--secondary": "280 35% 45%",
      "--desert": "265 18% 88%",
      "--plains": "270 15% 86%",
      "--warm-black": "270 25% 18%",
      "--text-dark": "270 22% 18%",
      "--text-medium": "268 15% 42%",
      "--text-light": "265 10% 55%",
      "--border": "268 15% 85%",
    },
  },
  forest: {
    name: "7. Forest",
    group: "creative",
    colors: {
      "--background": "135 18% 96%",
      "--foreground": "145 30% 12%",
      "--accent": "145 45% 32%",
      "--secondary": "150 40% 28%",
      "--desert": "138 18% 86%",
      "--plains": "140 20% 84%",
      "--warm-black": "145 30% 15%",
      "--text-dark": "145 28% 15%",
      "--text-medium": "142 18% 38%",
      "--text-light": "138 12% 52%",
      "--border": "140 15% 85%",
    },
  },
  coastal: {
    name: "8. Coastal",
    group: "creative",
    colors: {
      "--background": "200 22% 97%",
      "--foreground": "210 32% 15%",
      "--accent": "200 55% 42%",
      "--secondary": "205 50% 38%",
      "--desert": "42 28% 86%",
      "--plains": "198 22% 88%",
      "--warm-black": "210 30% 18%",
      "--text-dark": "210 28% 18%",
      "--text-medium": "205 18% 42%",
      "--text-light": "200 12% 55%",
      "--border": "200 18% 85%",
    },
  },
} as const;

type VariationKey = keyof typeof variations;

// Store original CSS values to restore on unmount
let originalValues: Record<string, string> = {};

const ColorVariations = () => {
  const [activeVariation, setActiveVariation] = useState<VariationKey>("baseline");

  // Apply color variation
  const applyVariation = (key: VariationKey) => {
    const variation = variations[key];
    Object.entries(variation.colors).forEach(([prop, value]) => {
      document.documentElement.style.setProperty(prop, value);
    });
    setActiveVariation(key);
  };

  // Keyboard shortcuts (1-8)
  useEffect(() => {
    const keyMap: Record<string, VariationKey> = {
      "1": "baseline",
      "2": "lake",
      "3": "desert",
      "4": "plains",
      "5": "contrast",
      "6": "dusk",
      "7": "forest",
      "8": "coastal",
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (keyMap[e.key]) {
        applyVariation(keyMap[e.key]);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  // Store original values on mount and restore on unmount
  useEffect(() => {
    const props = Object.keys(variations.baseline.colors);
    props.forEach((prop) => {
      originalValues[prop] = getComputedStyle(document.documentElement).getPropertyValue(prop);
    });

    return () => {
      // Restore original values when leaving the page
      Object.entries(originalValues).forEach(([prop, value]) => {
        document.documentElement.style.setProperty(prop, value);
      });
    };
  }, []);

  const brandbookVariations = Object.entries(variations).filter(([_, v]) => v.group === "brandbook");
  const creativeVariations = Object.entries(variations).filter(([_, v]) => v.group === "creative");

  return (
    <div className="min-h-screen bg-background">
      {/* Color Switcher Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-white/97 backdrop-blur-xl border-b border-black/5 py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="font-heading text-xs font-semibold text-[#1A1612] uppercase tracking-wider">
              Farveskema Review
            </span>
            <span className="font-body text-xs text-gray-500">
              Aktiv: <strong className="text-primary font-semibold">{variations[activeVariation].name}</strong>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mr-1 hidden sm:inline">
                Brandbook:
              </span>
              {brandbookVariations.map(([key, variation]) => (
                <button
                  key={key}
                  onClick={() => applyVariation(key as VariationKey)}
                  className={`font-body text-xs font-medium px-3 py-1.5 rounded border transition-all ${
                    activeVariation === key
                      ? "bg-primary border-primary text-white"
                      : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {variation.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mr-1 hidden sm:inline">
                Creative:
              </span>
              {creativeVariations.map(([key, variation]) => (
                <button
                  key={key}
                  onClick={() => applyVariation(key as VariationKey)}
                  className={`font-body text-xs font-medium px-3 py-1.5 rounded border transition-all ${
                    activeVariation === key
                      ? "bg-primary border-primary text-white"
                      : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {variation.name}
                </button>
              ))}
            </div>
            <span className="text-[11px] text-gray-400 ml-auto hidden md:inline">
              Tryk 1-8 for at skifte
            </span>
          </div>
        </div>
      </div>

      {/* Spacer for fixed switcher */}
      <div className="h-20" />

      {/* Film grain overlay */}
      <div className="film-grain" aria-hidden="true" />

      <Header />

      <main>
        <Hero />
        <WavesDivider />
        <Carousel />
        <JourneySection />
        <WhatIsSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default ColorVariations;
