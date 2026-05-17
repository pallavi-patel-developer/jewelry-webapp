"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle } from "lucide-react";
import { products } from "@/data/products";

export default function CollectionBanner() {
  const [visibleCount, setVisibleCount] = useState(4);

  // Filter products for warm gold metals (Yellow Gold, Rose Gold, etc.)
  const baseGold = products.filter(
    (p) =>
      p.material.toLowerCase().includes("gold") &&
      !p.material.toLowerCase().includes("white gold")
  );

  // Expand to 8 premium gold masterpieces for perfect pagination experience!
  const goldProducts = [
    ...baseGold,
    {
      id: 201,
      name: "Aurelia Royal Crown Ring",
      originalPrice: "₹2,400",
      discountedPrice: "₹1,950",
      image: "/images/ring.png",
      category: "Rings",
      material: "22k Yellow Gold",
      description: "A spectacular crown-shaped luxury ring forged in absolute pure gold."
    },
    {
      id: 202,
      name: "Celestial Sun Drop Earrings",
      originalPrice: "₹1,800",
      discountedPrice: "₹1,400",
      image: "/images/earring.png",
      category: "Earrings",
      material: "18k Yellow Gold",
      description: "Golden droplets reflecting the ultimate radiance of the morning sun."
    },
    {
      id: 203,
      name: "Eternity Bloom Pendant",
      originalPrice: "₹3,400",
      discountedPrice: "₹2,800",
      image: "/images/necklace.png",
      category: "Pendants",
      material: "18k Rose Gold",
      description: "A beautiful rose gold flower pendant embedded with brilliant pavé diamonds."
    },
    {
      id: 204,
      name: "Majestic Golden Band",
      originalPrice: "₹1,600",
      discountedPrice: "₹1,300",
      image: "/images/ring.png",
      category: "Rings",
      material: "18k Yellow Gold",
      description: "A solid, classic golden band showcasing understated modern architecture."
    },
    {
      id: 205,
      name: "Imperial Gold Choker",
      originalPrice: "₹5,200",
      discountedPrice: "₹4,500",
      image: "/images/necklace.png",
      category: "Necklaces",
      material: "22k Yellow Gold",
      description: "A breathtaking pure gold choker that captures royal legacy and heritage."
    }
  ];

  return (
    <div className="w-full pb-8 relative z-20">
      {/* ─── GOLD SECTION BANNER ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[42vh] rounded-none overflow-hidden border-y border-brand-border/30 shadow-[0_35px_90px_10px_rgba(0,0,0,0.35)] -mx-6 md:-mx-12">

        {/* ─── LEFT PANEL: Gold Collection with Silk Background ─── */}
        <div className="relative flex flex-col justify-center px-8 md:px-12 py-8 overflow-hidden bg-[#F5EDE0]">

          {/* Background Silk + Necklace Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gold-collection-necklace.png"
              alt="Gold Collection"
              fill
              sizes="50vw"
              className="object-cover object-right md:object-center transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5EDE0]/80 via-[#F5EDE0]/40 to-transparent pointer-events-none" />
          </div>

          {/* Decorative leaf — top left */}
          <div className="absolute top-0 left-0 w-24 h-36 opacity-30 pointer-events-none z-10">
            <Image src="/images/leaf-gold.png" alt="" fill className="object-contain" />
          </div>
          {/* Decorative leaf — bottom left */}
          <div className="absolute bottom-0 left-0 w-20 h-28 opacity-25 pointer-events-none rotate-180 z-10">
            <Image src="/images/leaf-gold.png" alt="" fill className="object-contain" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-[60%] md:max-w-[55%]">
            <p className="font-sans text-[10px] tracking-[0.3em] text-brand-btn uppercase mb-2 font-semibold">
              Timeless Elegance
            </p>

            {/* Decorative line */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[1px] bg-brand-btn/50" />
              <Sparkle className="w-3 h-3 text-brand-btn fill-current" />
              <div className="w-6 h-[1px] bg-brand-btn/50" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-brand-heading uppercase leading-none mb-1 font-bold">
              Gold
            </h2>
            <p className="font-sans text-xs tracking-[0.3em] text-brand-heading/80 uppercase mb-4 font-bold">
              Collection
            </p>

            <p className="font-sans text-[11px] text-brand-body leading-relaxed mb-6 max-w-[200px] font-medium">
              Crafted in pure gold, designed for every precious moment of your life. Shine with elegance, forever.
            </p>

            <Link
              href="/gold"
              className="inline-flex items-center gap-3 border border-brand-heading text-brand-heading font-sans text-[10px] tracking-[0.2em] uppercase py-2.5 px-5 hover:bg-brand-heading hover:text-white transition-all duration-300 group bg-white/60 backdrop-blur-sm rounded-sm"
            >
              Explore More Collection
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* ─── RIGHT PANEL: Gold Rings with Silk Background (Full Height) ─── */}
        <div className="relative flex flex-col justify-center px-8 md:px-12 py-8 overflow-hidden bg-[#FAF6F0]">

          {/* Background Silk + Ring Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gold-collection-ring.png"
              alt="Gold Rings"
              fill
              sizes="50vw"
              className="object-cover object-right transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/90 via-[#FAF6F0]/30 to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-[65%]">
            <p className="font-sans text-[10px] tracking-[0.3em] text-brand-btn uppercase mb-2 font-semibold">
              Pure · Precious · Perfect
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[1px] bg-brand-btn/50" />
              <Sparkle className="w-3 h-3 text-brand-btn fill-current" />
              <div className="w-6 h-[1px] bg-brand-btn/50" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-heading uppercase leading-none mb-1 font-bold">
              Gold Rings
            </h2>
            <p className="font-sans text-xs tracking-[0.3em] text-brand-heading/80 uppercase mb-4 font-bold">
              Premium Rings
            </p>
            <p className="font-sans text-[11px] text-brand-body leading-relaxed mb-6 max-w-[220px] font-medium">
              From minimal bands to statement luxury pieces, find your perfect sparkle for any grand occasion.
            </p>
            <Link
              href="/rings"
              className="inline-flex items-center gap-3 border border-brand-heading text-brand-heading font-sans text-[10px] tracking-[0.2em] uppercase py-2.5 px-5 hover:bg-brand-heading hover:text-white transition-all duration-300 group bg-white/60 backdrop-blur-sm rounded-sm"
            >
              Shop Rings
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

      </div>

      {/* ─── GOLD CIRCULAR PRODUCTS GALLERY ─── */}
      <div className="max-w-[1200px] mx-auto px-4 mt-24 relative z-30 select-none">
        {/* Title / Heading */}
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#736357] uppercase font-bold block mb-2">
            The Golden Hour
          </span>
          <h3 className="font-serif text-2xl md:text-4xl text-black tracking-[0.15em] uppercase font-bold">
            GOLD ESSENTIALS
          </h3>
          <div className="w-12 h-[1.5px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Circular Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {goldProducts.slice(0, visibleCount).map((product) => (
            <Link 
              href={`/product/${product.id}`}
              key={product.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Card Image Wrapper */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-black/5 bg-[#FAF6F0] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.2)] flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.35)] group-hover:border-[#D4AF37]/40">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 160px, 220px"
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  style={{ mixBlendMode: "multiply" }}
                />
                
                {/* Floating Add Cart Quick Pill on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black font-sans text-[9px] tracking-widest uppercase font-bold py-2.5 px-5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Detail
                  </span>
                </div>
              </div>

              {/* Text details below circle */}
              <h4 className="font-serif text-sm text-brand-heading uppercase tracking-wider font-bold mt-5 text-center group-hover:text-[#D4AF37] transition-colors duration-300 max-w-[180px] truncate">
                {product.name}
              </h4>
              <p className="font-sans text-xs text-brand-body/70 mt-1 font-semibold">
                {product.discountedPrice}
              </p>
            </Link>
          ))}
        </div>

        {/* Dynamic Action Buttons: Load More / Show Less Toggle */}
        <div className="flex justify-center mt-14">
          {visibleCount < goldProducts.length ? (
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 4, goldProducts.length))}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-black text-white px-9 py-4 font-sans text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:scale-105 shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-white/10"
            >
              <span className="relative z-10">Load More Products</span>
              <svg
                className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(4)}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-black text-white px-9 py-4 font-sans text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:scale-105 shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-white/10"
            >
              <span className="relative z-10">Show Less Products</span>
              <svg
                className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
