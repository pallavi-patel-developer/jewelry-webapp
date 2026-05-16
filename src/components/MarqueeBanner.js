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
    <div className="w-full -mt-16 -mb-1 flex flex-col gap-0 relative z-30">

      <div className="w-full overflow-hidden rotate-1">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {repeated.map((item, i) => (
            <span key={i} className="px-10 text-brand-heading/25 font-serif text-2xl md:text-4xl tracking-[0.25em] uppercase font-bold">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="w-full overflow-hidden -rotate-2 bg-brand-heading py-4 shadow-lg">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {repeated.map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-8 text-brand-light font-sans text-sm tracking-[0.2em] uppercase font-medium">
              {item}
              <span className="text-brand-btn opacity-80">
                {i % 3 === 0 ? <Diamond className="w-3 h-3 inline" /> : i % 3 === 1 ? <Sparkles className="w-3 h-3 inline" /> : <Star className="w-3 h-3 inline" />}
              </span>
            </span>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
