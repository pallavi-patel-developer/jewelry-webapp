"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function SilverSection() {
  const categories = [
    {
      title: "Rings",
      image: "/images/ring.png",
      href: "/rings",
    },
    {
      title: "Couple Rings",
      image: "/images/silver-couple-rings.png",
      href: "/rings",
    },
    {
      title: "Earrings",
      image: "/images/earring.png",
      href: "/earrings",
    },
  ];

  return (
    <div className="w-full px-4 md:px-10 pb-24 relative z-20 overflow-visible select-none">
      
      {/* ─── MAIN BANNER BOX ─── */}
      <div className="relative w-full h-[55vh] md:h-[65vh] rounded-sm overflow-hidden border border-brand-border/20 shadow-xl bg-black">
        
        {/* Background Moody Silver Rings Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/silver-banner-rings.png"
            alt="Discover Your Sparkle"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.75] contrast-[1.05] transition-transform duration-[8000ms] hover:scale-105"
            priority
          />
          {/* Moody Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent pointer-events-none" />
        </div>

        {/* Text Content Overlay */}
        <div className="absolute inset-y-0 left-8 md:left-16 flex flex-col justify-center z-10 max-w-[85%] md:max-w-[45%] text-white">
          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-wide uppercase leading-tight font-bold mb-4"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            Discover <br />
            Your Sparkle
          </h2>
          
          <p className="font-sans text-[11px] md:text-xs text-white/80 leading-relaxed max-w-[320px] mb-8 font-medium">
            Welcoming in The Spring Season With An Enchanting Emerald, Diamond & Silver Daze With Earrings.
          </p>

          {/* Action Pill Buttons */}
          <div className="flex gap-4">
            <Link
              href="/home"
              className="bg-white text-black font-sans text-[10px] tracking-[0.2em] uppercase font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              Buy Now
            </Link>
            <Link
              href="/about"
              className="border border-white/60 text-white font-sans text-[10px] tracking-[0.2em] uppercase font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

      {/* ─── BOTTOM OVERLAPPING CATEGORY CARDS ─── */}
      <div className="relative max-w-[1200px] mx-auto px-2 md:px-8 -mt-16 md:-mt-24 z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white/95 backdrop-blur-md rounded-[24px] p-6 shadow-xl border border-brand-border/10 flex flex-col justify-between items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="w-full">
                {/* Small Tag */}
                <span className="font-sans text-[9px] tracking-widest text-brand-body/60 uppercase block mb-1">
                  Categories
                </span>
                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-brand-heading font-bold uppercase tracking-wide mb-4">
                  {cat.title}
                </h3>

                {/* Card Product Image */}
                <div className="relative w-full aspect-video bg-gradient-to-b from-[#FAF6F0]/20 to-[#F5EDE0]/40 rounded-xl overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={cat.href}
                className="mt-6 inline-flex items-center justify-between w-full bg-black/90 text-white py-3 px-5 rounded-full font-sans text-[9px] tracking-[0.15em] uppercase hover:bg-brand-btn transition-colors duration-300"
              >
                <span>Check More Product</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </Link>
            </div>
          ))}

          {/* Overlapping Next circle button (exactly like screen shot on right edge) */}
          <button 
            className="absolute right-[-16px] md:right-[-32px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/90 text-white flex items-center justify-center hover:bg-brand-btn shadow-2xl z-40 transition-all duration-300 hover:scale-105 border border-white/10 hidden md:flex"
            aria-label="Next categories"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>

        </div>
      </div>

    </div>
  );
}
