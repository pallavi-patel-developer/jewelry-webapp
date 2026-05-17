"use client";

import { motion } from "framer-motion";
import { Diamond, Sparkles, Star } from "lucide-react";

const items = [
  "RINGS", "EARRINGS", "NECKLACES", "BRACELETS", "PENDANTS",
  "FINE JEWELRY", "GOLD", "ANKLET", "CELESTIQUE", "TIMELESS ELEGANCE", "LUXURY COLLECTION",
];

export default function MarqueeBanner() {
  const repeated = [...items, ...items, ...items];

  return (
    <div 
      className="w-full mt-0 mb-0 flex flex-col gap-0 relative z-30"
      style={{ transform: "none !important", rotate: "0deg !important" }}
    >
      <div 
        className="w-full overflow-hidden bg-black py-4 shadow-lg"
        style={{ transform: "none !important", rotate: "0deg !important" }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ rotate: "0deg !important" }}
        >
          {repeated.map((item, i) => (
            <span 
              key={i} 
              className="flex items-center gap-4 px-8 text-brand-light font-sans text-sm tracking-[0.2em] uppercase font-medium"
              style={{ transform: "none !important", rotate: "0deg !important" }}
            >
              {item}
              <span 
                className="text-[#d4af37] opacity-90"
                style={{ transform: "none !important", rotate: "0deg !important" }}
              >
                {i % 3 === 0 ? <Diamond className="w-3 h-3 inline" /> : i % 3 === 1 ? <Sparkles className="w-3 h-3 inline" /> : <Star className="w-3 h-3 inline" />}
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
