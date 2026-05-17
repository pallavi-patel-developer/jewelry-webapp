"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";

export default function SilverShowcase() {
  const [startIndex, setStartIndex] = useState(0);
  const [favorites, setFavorites] = useState({});

  // Filter products for Silver Collection (White gold, Platinum, or silver items)
  const silverProducts = products.filter(
    (p) =>
      p.material.toLowerCase().includes("white gold") ||
      p.material.toLowerCase().includes("platinum") ||
      p.name.toLowerCase().includes("silver") ||
      p.category === "Rings" ||
      p.id === 4 ||
      p.id === 5
  );

  const handleNext = () => {
    if (startIndex + 2 < silverProducts.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full pb-20 relative z-20 select-none">
      {/* Container - Black Theme Background with Silver/Gold borders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] p-8 md:p-12 -mx-6 md:-mx-12 border-y border-white/10 shadow-[0_45px_100px_10px_rgba(0,0,0,0.75)]">

        {/* ─── LEFT PANEL: Text Description Block with Gold & Silver highlights ─── */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <h2 className="font-serif text-3xl md:text-5xl uppercase leading-tight font-bold mb-4">
            <span className="text-white">Silver &</span> <br className="hidden md:inline" />
            <span className="text-[#D4AF37] filter drop-shadow-sm">Engagement Ring</span>
          </h2>

          <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed mb-8 max-w-[340px] font-medium">
            Experience the stunning brilliance of silver jewellery. Find the perfect silver ornament for any special occasion, from wedding bands and engagement rings to elegant anniversary gifts with golden highlights.
          </p>

          <Link
            href="/rings"
            className="border-2 border-[#D4AF37] text-[#D4AF37] font-sans text-[10px] tracking-[0.2em] uppercase font-bold py-3 px-8 rounded-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg"
          >
            More Product
          </Link>
        </div>

        {/* ─── RIGHT PANEL: Carousel Block (8 cols) ─── */}
        <div className="lg:col-span-8 flex flex-col relative w-full overflow-hidden">

          {/* Nav Controls - Top Right (Gold/Black theme) */}
          <div className="flex justify-end gap-2 mb-6 z-30">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all border ${startIndex === 0
                ? "bg-[#1E1E1E] text-white/20 border-white/5 cursor-not-allowed"
                : "bg-black text-[#D4AF37] border-white/10 hover:bg-[#D4AF37] hover:text-black shadow-md"
                }`}
              aria-label="Previous items"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + 2 >= silverProducts.length}
              className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all border ${startIndex + 2 >= silverProducts.length
                ? "bg-[#1E1E1E] text-white/20 border-white/5 cursor-not-allowed"
                : "bg-black text-[#D4AF37] border-white/10 hover:bg-[#D4AF37] hover:text-black shadow-md"
                }`}
              aria-label="Next items"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Product Cards Slider Wrapper (Black & Silver-Gold themed cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {silverProducts.slice(startIndex, startIndex + 2).map((product) => (
              <div
                key={product.id}
                className="bg-[#1C1C1C] rounded-[24px] p-6 shadow-2xl border border-white/10 flex flex-col justify-between relative group hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image & Badges Container */}
                <div className="relative w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      {/* Category Tag */}
                      <span className="font-sans text-[10px] text-white/60 uppercase block font-semibold">
                        {product.category}
                      </span>
                      {/* Sale Badge - Golden */}
                      <span className="inline-block bg-[#D4AF37] text-black text-[8px] tracking-wider uppercase px-2.5 py-0.5 mt-1 rounded-sm font-bold">
                        Sale
                      </span>
                    </div>

                    {/* Heart wishlist button - Gold hover */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${favorites[product.id] ? "fill-[#D4AF37] text-[#D4AF37]" : "text-white/60"
                          }`}
                      />
                    </button>
                  </div>

                  {/* Ring Image - Black gradient background with silver highlight overlay */}
                  <div className="relative w-full aspect-square flex items-center justify-center bg-gradient-to-b from-black/40 to-black/80 rounded-xl p-4 overflow-hidden mb-6 border border-white/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 brightness-[1.05]"
                    />
                  </div>
                </div>

                {/* Info & CTA details - Silver & Gold accented */}
                <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  {/* Prices */}
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-sm font-bold text-white">
                      {product.discountedPrice}
                    </span>
                    <span className="font-sans text-xs text-white/40 line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Add To Cart CTA Button - Solid Golden Accent */}
                  <Link
                    href={`/product/${product.id}`}
                    className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-white text-black py-2.5 px-4 rounded-sm font-sans text-[9px] tracking-[0.1em] uppercase font-bold transition-all duration-300 shadow-md"
                  >
                    <span>Add To Cart</span>
                    <ShoppingCart className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
