"use client";

import { ArrowRight, Disc, Gem, Link as LinkIcon, CircleDot } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "RINGS", icon: Disc, href: "/rings" },
  { name: "EARRINGS", icon: CircleDot, href: "/earrings" },
  { name: "NECKLACES", icon: LinkIcon, href: "/necklaces" },
  { name: "BRACELETS", icon: Gem, href: "/bracelets" }
];

export default function CategoryMenu() {
  return (
    <div className="w-full max-w-sm md:ml-auto mt-8 md:mt-0 space-y-3">
      {categories.map((category, index) => (
        <motion.a
          key={category.name}
          href={category.href}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          className="flex justify-between items-center py-4 px-6 bg-white/40 backdrop-blur-sm rounded-sm text-brand-heading hover:bg-white/60 group transition-all border border-brand-border/30 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <category.icon className="w-5 h-5 text-brand-btn/80" strokeWidth={1.5} />
            <span className="font-sans tracking-[0.2em] text-xs group-hover:translate-x-1 transition-transform duration-300 font-bold">
              {category.name}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-brand-heading/40 group-hover:text-brand-heading group-hover:translate-x-1 transition-all duration-300" strokeWidth={1.5} />
        </motion.a>
      ))}
    </div>
  );
}
