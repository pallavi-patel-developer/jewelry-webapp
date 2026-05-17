"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkle, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function SilverCircleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(540);
  const wheelTimeout = useRef(false);

  // Filter products for Silver Collection (White Gold, Platinum, or silver-colored)
  const silverProducts = products.filter(
    (p) =>
      p.material.toLowerCase().includes("white gold") ||
      p.material.toLowerCase().includes("platinum") ||
      p.name.toLowerCase().includes("silver") ||
      p.category === "Rings" ||
      p.id === 4 ||
      p.id === 5
  );

  // Responsive radius calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(270);
      } else if (window.innerWidth < 1024) {
        setRadius(420);
      } else {
        setRadius(540);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % silverProducts.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + silverProducts.length) % silverProducts.length);
  };

  // Scroll handler for Carousel Rotation
  const handleWheel = (e) => {
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
    }, 450);
  };

  // Active product reference
  const activeProduct = silverProducts[activeIndex];

  return (
    <div className="w-full pb-16 relative z-20 overflow-hidden select-none">
      {/* Outer Editorial Container - Dark Theme (h-[75vh] md:h-[90vh]) - Full Screen Bleed */}
      <div
        onWheel={handleWheel}
        className="relative w-full h-[75vh] md:h-[90vh] bg-[#121212] border-y border-white/10 shadow-2xl flex items-center overflow-hidden"
      >

        {/* ─── RIGHT: Massive Curved Brand Shield (Center of Wheel on RIGHT) ─── */}
        <div
          className="absolute -right-[40vh] md:-right-[50vh] w-[90vh] md:w-[115vh] h-[90vh] md:h-[115vh] rounded-full bg-[#1C1C1C] text-white flex items-center justify-start pl-20 md:pl-40 z-30 shadow-2xl transition-all duration-500 border border-white/5"
          style={{
            boxShadow: "-15px 0px 50px rgba(0,0,0,0.4)",
          }}
        >
          {/* Inner Text Brand block (Mirrored layout, Left-aligned) */}
          <div className="flex flex-col items-start text-left max-w-[280px] md:max-w-[340px] pl-4 md:pl-12">

            {/* Cursive Custom Cursive Logo "PJ" exactly like screenshot */}
            <div className="font-serif italic text-4xl md:text-6xl text-brand-btn font-light leading-none mb-6 self-start">
              PJ
            </div>

            {/* Top divider */}
            <div className="w-28 h-[1px] bg-white/20 mb-6" />

            <h2 className="font-serif text-3xl md:text-5xl tracking-[0.15em] text-white uppercase leading-none font-bold mb-3">
              2025
            </h2>
            <h2 className="font-sans text-xs md:text-sm tracking-[0.25em] text-white/80 uppercase font-semibold mb-6">
              SILVER COLLECTION
            </h2>

            {/* Bottom divider */}
            <div className="w-28 h-[1px] bg-white/20 mb-8" />

            {/* Contact details exactly like screen shot */}
            <div className="flex flex-col space-y-2.5 text-[9px] md:text-[10px] tracking-[0.1em] text-white/50 uppercase font-semibold">
              <div>
                <span className="text-white/35 block mb-0.5">Contact Info:</span>
                <span className="text-white/80 font-mono">0843082982</span>
              </div>
              <div>
                <span className="text-white/35 block mb-0.5">Email:</span>
                <span className="text-white/80">Sales@pneumajewellers.co.za</span>
              </div>
              <div>
                <span className="text-white/35 block mb-0.5">Location:</span>
                <span className="text-white/85 leading-relaxed">
                  Pneuma Jewellers Based In <br /> (Kyalami Business Park)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── CONTROLS: Luxury Nav Arrows on Right Side ─── */}
        <div className="absolute top-6 right-6 md:top-12 md:right-12 z-40 flex gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
          </button>
        </div>

        {/* ─── CENTER: Rotating Circular Arc of Products (Mirrored: rotating from RIGHT origin) ─── */}
        <div className="absolute inset-y-0 right-0 left-0 z-10 flex items-center pointer-events-none">
          <div className="relative w-full h-full">
            {silverProducts.map((product, index) => {
              // Calculate wrapping diff relative to activeIndex
              let diff = index - activeIndex;
              const half = Math.floor(silverProducts.length / 2);
              if (diff > half) diff -= silverProducts.length;
              if (diff < -half) diff += silverProducts.length;

              // Angle for each slot (spacing of 28 degrees) - negative for right orientation
              const angle = diff * 28;

              // Hide items that are too far behind the wheel curves
              const isVisible = Math.abs(diff) <= 2;

              return (
                <div
                  key={product.id}
                  className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-auto cursor-pointer select-none origin-right"
                  style={{
                    transform: `translateY(-50%) rotate(${-angle}deg) translateX(${-radius}px) rotate(${angle}deg)`,
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? "visible" : "hidden",
                    zIndex: 20 - Math.abs(diff),
                    transition: "transform 0.85s cubic-bezier(0.25, 1, 0.28, 1), opacity 0.85s, visibility 0.85s",
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="block group">
                    {/* Curved/Arched Luxury Card (Upscaled width: w-[160px] md:w-[260px] with mirrored borders) */}
                    <div
                      className={`relative w-[160px] md:w-[260px] aspect-[4/5] bg-[#1a1a1a] rounded-r-[50px] rounded-l-[15px] md:rounded-r-[100px] md:rounded-l-[25px] overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 ${diff === 0
                        ? "ring-2 ring-brand-btn ring-offset-4 ring-offset-[#121212] scale-105"
                        : "opacity-40 scale-95 hover:opacity-75"
                        }`}
                    >
                      {/* Silver Jewel image */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 160px, 260px"
                        className="object-cover p-6 md:p-10 transition-transform duration-700 group-hover:scale-105 brightness-[1.05]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── LEFT: Active Product Description panel (Dynamic changes - Sits on LEFT) ─── */}
        <div className="absolute left-6 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-30 w-full max-w-[280px] md:max-w-[380px] pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex flex-col text-left p-8 md:p-10 bg-[#1A1A1A]/80 backdrop-blur-md rounded-sm border border-white/10 shadow-2xl text-white"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-sans text-[10px] tracking-[0.25em] text-brand-btn uppercase font-bold">
                  {activeProduct.category}
                </span>
                <span className="text-white/30">•</span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-white/70 uppercase font-bold">
                  {activeProduct.material}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-4xl text-white uppercase tracking-wide leading-tight mb-4 font-bold">
                {activeProduct.name}
              </h3>

              {/* Decorative divider */}
              <div className="w-20 h-[1px] bg-brand-btn/40 mb-5" />

              <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed mb-8 font-medium">
                {activeProduct.description}
              </p>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] tracking-widest text-white/50 uppercase">
                    Value
                  </span>
                  <span className="font-sans text-xl md:text-2xl font-bold text-white tracking-wide">
                    {activeProduct.discountedPrice}
                  </span>
                </div>

                <Link
                  href={`/product/${activeProduct.id}`}
                  className="inline-flex items-center gap-2 bg-white text-black font-sans text-[10px] tracking-[0.2em] uppercase py-3.5 px-6 hover:bg-brand-btn hover:text-white transition-all duration-300 group rounded-sm shadow-md"
                >
                  View Piece
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
