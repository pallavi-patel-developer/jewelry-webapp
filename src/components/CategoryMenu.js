"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["RINGS", "EARRINGS", "NECKLACES", "BRACELETS"];

export default function CategoryMenu() {
  return (
    <div className="w-full max-w-sm md:ml-auto mt-12 md:mt-0 space-y-3">
      {categories.map((category, index) => (
        <motion.a 
          key={category}
          href={`#${category.toLowerCase()}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          className="flex justify-between items-center py-4 px-6 bg-brand-card rounded-lg text-brand-heading hover:shadow-md group transition-all border border-brand-border"
        >
          <span className="font-sans tracking-[0.15em] text-sm group-hover:translate-x-2 transition-transform duration-300 font-semibold">
            {category}
          </span>
          <ArrowRight className="w-5 h-5 text-brand-btn group-hover:text-brand-heading group-hover:-translate-x-1 transition-all duration-300" strokeWidth={2} />
        </motion.a>
      ))}
    </div>
  );
}
