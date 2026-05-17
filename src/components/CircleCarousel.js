"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkle, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function CircleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(460);
  const wheelTimeout = useRef(false);

  // Responsive radius calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(230); // mobile
      } else if (window.innerWidth < 1024) {
        setRadius(340); // tablet
      } else {
        setRadius(420); // desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Scroll handler for Carousel Rotation
  const handleWheel = (e) => {
    // Only capture vertical scroll on the carousel box
    if (Math.abs(e.deltaY) < 20) return;
    
    // Prevent default body scrolling while interacting with carousel
    e.preventDefault();

    if (wheelTimeout.current) return;

    if (e.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }

    wheelTimeout.current = true;
    setTimeout(() => {
      wheelTimeout.current = false;
    }, 450); // 450ms debounce for smooth wheel feel
  };

  // Active product reference
  const activeProduct = products[activeIndex];

  return (
    <div className="w-full px-4 md:px-10 pb-12 relative z-20 overflow-hidden select-none">
      {/* Outer Editorial Container with Wheel Listener */}
      <div 
        onWheel={handleWheel}
        className="relative w-full h-[70vh] md:h-[80vh] bg-[#FAF6F0] rounded-sm border border-brand-border/30 shadow-md flex items-center overflow-hidden"
      >
        
        {/* ─── LEFT: Massive Curved Brand Shield (Center of Wheel) ─── */}
        <div 
          className="absolute -left-[35vh] md:-left-[45vh] w-[80vh] md:w-[100vh] h-[80vh] md:h-[100vh] rounded-full bg-[#736357] text-[#FAF6F0] flex items-center justify-end pr-20 md:pr-32 z-30 shadow-2xl transition-all duration-500"
          style={{
            boxShadow: "10px 0px 40px rgba(0,0,0,0.15)",
          }}
        >
          {/* Inner Text Brand block */}
          <div className="flex flex-col items-center text-center max-w-[240px] md:max-w-[280px] pr-2 md:pr-8">
            {/* Top gold line */}
            <div className="w-20 h-[1px] bg-[#FAF6F0]/30 mb-4" />
            
            <p className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] text-[#FAF6F0]/70 uppercase mb-2">
              Aurelia Luxury
            </p>
            
            <h2 className="font-serif text-2xl md:text-4xl tracking-[0.1em] text-[#FAF6F0] uppercase leading-none font-bold mb-2">
              NEW
            </h2>
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-[#FAF6F0]/90 uppercase leading-none font-medium mb-3">
              COLLECTION
            </h2>
            
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkle className="w-3 h-3 text-brand-btn fill-current" />
            </div>

            <p className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-brand-btn uppercase font-semibold">
              RATICS JEWELRY
            </p>

            {/* Bottom gold line */}
            <div className="w-20 h-[1px] bg-[#FAF6F0]/30 mt-5" />
          </div>
        </div>

        {/* ─── CONTROLS: Luxury Nav Arrows ─── */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-40 flex gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-[#736357]/80 backdrop-blur-md text-[#FAF6F0] flex items-center justify-center hover:bg-[#736357] hover:scale-105 transition-all duration-300 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-[#736357]/80 backdrop-blur-md text-[#FAF6F0] flex items-center justify-center hover:bg-[#736357] hover:scale-105 transition-all duration-300 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* ─── CENTER: Rotating Circular Arc of Products ─── */}
        <div className="absolute inset-y-0 right-0 left-0 z-10 flex items-center pointer-events-none">
          <div className="relative w-full h-full">
            {products.map((product, index) => {
              // Calculate wrapping diff relative to activeIndex
              let diff = index - activeIndex;
              const half = Math.floor(products.length / 2);
              if (diff > half) diff -= products.length;
              if (diff < -half) diff += products.length;

              // Angle for each slot (spacing of 28 degrees)
              const angle = diff * 28;

              // Hide items that are too far behind the wheel curves
              const isVisible = Math.abs(diff) <= 2;

              return (
                <div
                  key={product.id}
                  className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-auto cursor-pointer select-none origin-left"
                  style={{
                    transform: `translateY(-50%) rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? "visible" : "hidden",
                    zIndex: 20 - Math.abs(diff),
                    transition: "transform 0.8s cubic-bezier(0.25, 1, 0.33, 1), opacity 0.8s, visibility 0.8s",
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="block group">
                    {/* Curved/Arched Luxury Card */}
                    <div 
                      className={`relative w-[140px] md:w-[220px] aspect-[4/5] bg-white rounded-l-[40px] rounded-r-[10px] md:rounded-l-[80px] md:rounded-r-[20px] overflow-hidden shadow-lg border border-brand-border/20 transition-all duration-500 ${
                        diff === 0 
                          ? "ring-2 ring-brand-btn ring-offset-4 ring-offset-[#FAF6F0] scale-105" 
                          : "opacity-60 scale-95 hover:opacity-90"
                      }`}
                    >
                      {/* Luxury Silk BG embedded */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 140px, 220px"
                        className="object-cover p-5 md:p-8 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── RIGHT: Active Product Description panel (Dynamic changes) ─── */}
        <div className="absolute right-6 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 z-30 w-full max-w-[280px] md:max-w-[340px] pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col text-left p-6 md:p-8 bg-white/65 backdrop-blur-md rounded-sm border border-brand-border/20 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-sans text-[9px] tracking-[0.25em] text-brand-btn uppercase font-bold">
                  {activeProduct.category}
                </span>
                <span className="text-brand-heading/30">•</span>
                <span className="font-sans text-[9px] tracking-[0.2em] text-brand-body uppercase font-semibold">
                  {activeProduct.material}
                </span>
              </div>

              <h3 className="font-serif text-xl md:text-3xl text-brand-heading uppercase tracking-wide leading-tight mb-3 font-bold">
                {activeProduct.name}
              </h3>

              {/* Decorative divider */}
              <div className="w-16 h-[1px] bg-brand-btn/40 mb-4" />

              <p className="font-sans text-[11px] md:text-xs text-brand-body leading-relaxed mb-6 font-medium">
                {activeProduct.description}
              </p>

              <div className="flex justify-between items-center mt-auto pt-2 border-t border-brand-border/10">
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] tracking-widest text-brand-body/60 uppercase">
                    Value
                  </span>
                  <span className="font-sans text-lg md:text-xl font-bold text-brand-heading tracking-wide">
                    {activeProduct.discountedPrice}
                  </span>
                </div>

                <Link
                  href={`/product/${activeProduct.id}`}
                  className="inline-flex items-center gap-2 bg-brand-heading text-[#FAF6F0] font-sans text-[9px] tracking-[0.2em] uppercase py-3 px-5 hover:bg-brand-btn hover:text-white transition-all duration-300 group rounded-sm shadow-md"
                >
                  View Piece
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
