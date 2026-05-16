"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CategoryMenu from "./CategoryMenu";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="relative w-full flex-grow flex flex-col px-6 md:px-12 py-10 overflow-hidden">



      {/* Huge Background Text Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 md:top-4 left-0 w-full text-center pointer-events-none z-0 flex flex-col items-center justify-center"
      >
        <div className="relative w-full flex items-center justify-center mt-4">
          <h1
            className="text-[12vw] md:text-[10vw] lg:text-[8rem] leading-none text-brand-heading tracking-widest relative z-10 px-4 md:px-12 inline-block uppercase font-bold"
            style={{ fontFamily: "'TAN Pearl', serif", textShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}
          >
            Aurelia
          </h1>
        </div>
      </motion.div>

      {/* Main Content 3-Column Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 h-full items-center mt-28 md:mt-48 max-w-[1600px] mx-auto w-full flex-grow">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col space-y-20 md:pr-16 md:self-center z-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-heading leading-[1.1]">
            ELEGANT <br />
            <span className="text-brand-heading/90">JEWELRY</span>
          </h2>
          <p className="text-brand-body font-sans text-sm md:text-base leading-relaxed max-w-[280px]">
            Discover exquisite jewelry inspired by the beauty of the heavens. Each piece is crafted to bring elegance and grace to your most cherished occasions.
          </p>
          <button className="flex items-center gap-3 bg-brand-btn text-brand-light rounded-full py-3.5 px-8 w-fit hover:bg-brand-btn-hover transition-colors group shadow-sm">
            <span className="font-sans text-xs tracking-[0.15em] uppercase font-medium">Shop Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </button>
        </motion.div>

        {/* Center Column - Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative h-[60vh] md:h-[80vh] w-full flex justify-center items-end order-first md:order-none z-10 -mt-16 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full h-full min-h-[400px]"
          >
            <Image
              src="/images/hero-hand-new.png"
              alt="Mannequin hand wearing diamond rings"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
              className="object-contain object-center scale-125 md:scale-[1.45] -translate-y-12 md:-translate-y-24 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center h-full space-y-22 md:self-center z-20"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-brand-heading md:text-right leading-snug tracking-wide uppercase">
            A Celestial Touch <br />
            For Timeless Moments
          </h3>
          <CategoryMenu />
        </motion.div>

      </div>
    </main>
  );
}
