"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkle, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function CircleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(540);
  const wheelTimeout = useRef(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  // Responsive radius calculation (upscaled sizes)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(270); // Mobile (upscaled from 230)
      } else if (window.innerWidth < 1024) {
        setRadius(420); // Tablet (upscaled from 340)
      } else {
        setRadius(540); // Desktop (upscaled from 420)
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerRef = useRef(null);

  // Active non-passive wheel scroll listener to block global page scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelActive = (e) => {
      // Check if mouse is over a product card
      const isOverCard = e.target.closest('.product-card-trigger');
      if (!isOverCard) return; // Allow natural page scroll if not over cards!

      // Force block global browser scrolling immediately!
      e.preventDefault();

      // If scroll distance is tiny, let it go
      if (Math.abs(e.deltaY) < 15) return;

      if (wheelTimeout.current) return;

      if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev + 1) % products.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
      }

      wheelTimeout.current = true;
      setTimeout(() => {
        wheelTimeout.current = false;
      }, 450); // 450ms debounce
    };

    container.addEventListener("wheel", handleWheelActive, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheelActive);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Active product reference
  const activeProduct = products[activeIndex];

  return (
    <div className="w-auto -mx-6 md:-mx-12 pb-12 relative z-20 overflow-hidden select-none">
      {/* Outer Editorial Container with Wheel Listener (Upscaled height: h-[80vh] md:h-[90vh]) */}
      <div
        ref={containerRef}
        onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
        className="relative w-full h-[75vh] md:h-[90vh] bg-[#FAF6F0] border-y border-brand-border/30 shadow-[0_35px_90px_10px_rgba(0,0,0,0.22)] flex items-center overflow-visible"
      >

        {/* ─── CLIPPING VIEWPORT: Clips the giant wheel at banner bounds while keeping shadow soft ─── */}
        <div className="absolute inset-0 overflow-hidden rounded-none z-10">

          {/* ─── LEFT: Massive Curved Brand Shield (Center of Wheel - Upscaled dimension) ─── */}
          <div
            className="absolute -left-[40vh] md:-left-[50vh] w-[90vh] md:w-[115vh] h-[90vh] md:h-[115vh] rounded-full bg-[#736357] text-[#FAF6F0] flex items-center justify-end pr-10 md:pr-16 z-30 shadow-2xl transition-all duration-500"
            style={{
              boxShadow: "15px 0px 50px rgba(43, 42, 42, 0.18)",
            }}
          >
            {/* Inner Text Brand block (Upscaled sizing) */}
            <div className="flex flex-col items-center text-center max-w-[280px] md:max-w-[340px] pb-30 pr-20">
              {/* Top gold line */}
              <div className="w-28 h-[1px] bg-[#FAF6F0]/30 mb-6" />

              <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-[#FAF6F0]/70 uppercase mb-3">
                Aurelia Luxury
              </p>

              <h2 className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-[#FAF6F0] uppercase leading-none font-bold mb-3">
                NEW
              </h2>
              <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-[#FAF6F0]/90 uppercase leading-none font-medium mb-4">
                COLLECTION
              </h2>

              <div className="flex items-center gap-2 mb-4">
                <Sparkle className="w-4 h-4 text-brand-btn fill-current" />
              </div>

              <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-brand-btn uppercase font-bold">
                RATICS JEWELRY
              </p>

              {/* Bottom gold line */}
              <div className="w-28 h-[1px] bg-[#FAF6F0]/30 mt-6" />
            </div>
          </div>

          {/* ─── CONTROLS: Luxury Nav Arrows ─── */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 z-40 flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 bg-[#736357]/80 backdrop-blur-md text-[#FAF6F0] flex items-center justify-center hover:bg-[#736357] hover:scale-105 transition-all duration-300 shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 bg-[#736357]/80 backdrop-blur-md text-[#FAF6F0] flex items-center justify-center hover:bg-[#736357] hover:scale-105 transition-all duration-300 shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
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
                    className="product-card-trigger absolute top-1/2 left-0 -translate-y-1/2 pointer-events-auto cursor-none select-none origin-left"
                    style={{
                      transform: `translateY(-50%) rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
                      opacity: isVisible ? 1 : 0,
                      visibility: isVisible ? "visible" : "hidden",
                      zIndex: 20 - Math.abs(diff),
                      transition: "transform 0.85s cubic-bezier(0.25, 1, 0.28, 1), opacity 0.85s, visibility 0.85s",
                    }}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setIsHoveringCard(true)}
                    onMouseLeave={() => setIsHoveringCard(false)}
                  >
                    <div className="block group">
                      {/* Curved/Arched Luxury Card (Upscaled width: w-[160px] md:w-[260px]) */}
                      <div
                        className={`relative w-[160px] md:w-[260px] aspect-[4/5] bg-white rounded-l-[50px] rounded-r-[15px] md:rounded-l-[100px] md:rounded-r-[25px] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.55)] border border-black transition-all duration-500 ${diff === 0
                          ? "ring-2 ring-black ring-offset-4 ring-offset-[#FAF6F0] scale-105"
                          : "opacity-60 scale-95 hover:opacity-90"
                          }`}
                      >
                        {/* Luxury Silk BG embedded */}
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 160px, 260px"
                          className="object-cover p-6 md:p-10 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div> {/* ─── END OF CLIPPING VIEWPORT ─── */}

        {/* ─── RIGHT: Active Product Description panel (Dynamic changes - Upscaled size: max-w-[380px]) ─── */}
        <div className="absolute right-6 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-30 w-full max-w-[280px] md:max-w-[380px] pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex flex-col text-left p-8 md:p-10 bg-white/80 backdrop-blur-md rounded-sm border border-black shadow-[0_30px_75px_-10px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-sans text-[10px] tracking-[0.25em] text-black uppercase font-bold">
                  {activeProduct.category}
                </span>
                <span className="text-black/30">•</span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-black/80 uppercase font-bold">
                  {activeProduct.material}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-4xl text-black uppercase tracking-wide leading-tight mb-4 font-bold">
                {activeProduct.name}
              </h3>

              {/* Decorative divider */}
              <div className="w-20 h-[1px] bg-black mb-5" />

              <p className="font-sans text-xs md:text-sm text-black leading-relaxed mb-8 font-medium">
                {activeProduct.description}
              </p>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-black/10">
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] tracking-widest text-black/60 uppercase">
                    Value
                  </span>
                  <span className="font-sans text-xl md:text-2xl font-bold text-black tracking-wide">
                    {activeProduct.discountedPrice}
                  </span>
                </div>

                <Link
                  href={`/product/${activeProduct.id}`}
                  className="inline-flex items-center gap-2 bg-black text-[#FAF6F0] font-sans text-[10px] tracking-[0.2em] uppercase py-3.5 px-6 hover:bg-[#736357] hover:text-white transition-all duration-300 group rounded-sm shadow-md"
                >
                  View Piece
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ─── CUSTOM MOUSE FOLLOWER BADGE: Matches reference image exactly ─── */}
      {isHoveringCard && (
        <div
          className="hidden md:flex fixed pointer-events-none z-50 items-center justify-center rounded-full bg-[#736357] text-[#FAF6F0] w-[84px] h-[84px] shadow-2xl -translate-x-1/2 -translate-y-1/2 select-none border border-[#FAF6F0]/20"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transition: "left 0.05s ease-out, top 0.05s ease-out",
          }}
        >
          <span className="font-serif text-[10px] tracking-[0.25em] uppercase font-bold text-center leading-none mt-0.5">
            SCROLL
          </span>
        </div>
      )}
    </div>
  );
}
