"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkle } from "lucide-react";
import { products } from "@/data/products";

export default function CircleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(480);

  // Responsive radius calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(240); // smaller radius on mobile
      } else if (window.innerWidth < 1024) {
        setRadius(380); // tablet
      } else {
        setRadius(460); // desktop
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

  return (
    <div className="w-full px-4 md:px-10 pb-12 relative z-20 overflow-hidden select-none">
      {/* Outer Editorial Container */}
      <div className="relative w-full h-[65vh] md:h-[80vh] bg-[#FAF6F0] rounded-sm border border-brand-border/30 shadow-md flex items-center overflow-hidden">
        
        {/* ─── LEFT: Massive Curved Brand Shield (Center of Wheel) ─── */}
        <div 
          className="absolute -left-[30vh] md:-left-[40vh] w-[80vh] md:w-[100vh] h-[80vh] md:w-[100vh] h-[80vh] md:h-[100vh] rounded-full bg-[#736357] text-[#FAF6F0] flex items-center justify-end pr-20 md:pr-32 z-30 shadow-2xl transition-all duration-500"
          style={{
            boxShadow: "10px 0px 40px rgba(0,0,0,0.15)",
          }}
        >
          {/* Inner Text Brand block */}
          <div className="flex flex-col items-center text-center max-w-[280px] md:max-w-[320px] pr-2 md:pr-8">
            {/* Top gold line */}
            <div className="w-24 h-[1px] bg-[#FAF6F0]/30 mb-4" />
            
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-[#FAF6F0]/70 uppercase mb-2">
              Aurelia Luxury
            </p>
            
            <h2 className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-[#FAF6F0] uppercase leading-none font-bold mb-2">
              NEW
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-[#FAF6F0]/90 uppercase leading-none font-medium mb-3">
              COLLECTION
            </h2>
            
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkle className="w-3.5 h-3.5 text-brand-btn fill-current" />
            </div>

            <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-brand-btn uppercase font-semibold">
              RATICS JEWELRY
            </p>

            {/* Bottom gold line */}
            <div className="w-24 h-[1px] bg-[#FAF6F0]/30 mt-5" />
          </div>
        </div>

        {/* ─── CONTROLS: Luxury Nav Arrows ─── */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-40 flex gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/10 backdrop-blur-md text-[#FAF6F0] flex items-center justify-center hover:bg-black/35 hover:scale-105 transition-all duration-300 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/10 backdrop-blur-md text-[#FAF6F0] flex items-center justify-center hover:bg-black/35 hover:scale-105 transition-all duration-300 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* ─── RIGHT: Rotating Circular Arc of Products ─── */}
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
                  <Link href={`/product/${product.id}`} className="block group">
                    {/* Curved/Arched Luxury Card */}
                    <div 
                      className={`relative w-[180px] md:w-[260px] aspect-[4/5] bg-white rounded-l-[40px] rounded-r-[10px] md:rounded-l-[80px] md:rounded-r-[20px] overflow-hidden shadow-lg border border-brand-border/20 transition-all duration-500 ${
                        diff === 0 
                          ? "ring-2 ring-brand-btn ring-offset-4 ring-offset-[#FAF6F0] scale-105" 
                          : "opacity-75 scale-95 hover:opacity-100"
                      }`}
                    >
                      {/* Luxury Silk BG embedded */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 180px, 260px"
                        className="object-cover p-6 md:p-10 transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Floating details overlay on hover */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 md:p-6 text-white flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[9px] uppercase tracking-widest text-brand-btn font-semibold mb-1">
                          Exclusive Collection
                        </span>
                        <h4 className="font-serif text-xs md:text-sm uppercase tracking-wide mb-1 leading-tight line-clamp-1">
                          {product.name}
                        </h4>
                        <span className="font-sans text-[10px] md:text-xs text-white/90">
                          {product.discountedPrice}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
