"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";

// Helper function to extract numeric price value for accurate math sorting/filtering
const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  const numStr = priceStr.replace(/[^\d]/g, "");
  return parseInt(numStr, 10) || 0;
};

export default function SilverShowcase() {
  const [startIndex, setStartIndex] = useState(0);
  const [favorites, setFavorites] = useState({});
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  // Filter products for Silver Collection (White gold, Platinum, or silver items)
  const baseSilver = products.filter(
    (p) =>
      p.material.toLowerCase().includes("white gold") ||
      p.material.toLowerCase().includes("platinum") ||
      p.name.toLowerCase().includes("silver") ||
      p.category === "Rings" ||
      p.id === 4 ||
      p.id === 5
  );

  // Expand to 8 products with gorgeous mock variations to demo load more perfectly!
  const silverProducts = [
    ...baseSilver,
    {
      id: 101,
      name: "Platinum Solitaire Band",
      originalPrice: "₹2,900",
      discountedPrice: "₹2,400",
      image: "/images/silver-couple-rings.png",
      category: "Rings",
      material: "Platinum",
      description: "A breathtakingly pure platinum band holding a flawless solitaire diamond."
    },
    {
      id: 102,
      name: "Aurelia Silver Hoop",
      originalPrice: "₹1,400",
      discountedPrice: "₹1,150",
      image: "/images/earring.png",
      category: "Earrings",
      material: "Sterling Silver",
      description: "Beautifully polished sterling silver hoops for daily understated charm."
    },
    {
      id: 103,
      name: "Luna Sterling Choker",
      originalPrice: "₹3,100",
      discountedPrice: "₹2,650",
      image: "/images/necklace.png",
      category: "Necklaces",
      material: "Sterling Silver",
      description: "A gorgeous choker catching moonlight and sparkling from every facet."
    },
    {
      id: 104,
      name: "Imperial Emerald Ring",
      originalPrice: "₹4,800",
      discountedPrice: "₹3,900",
      image: "/images/ring.png",
      category: "Rings",
      material: "18k White Gold",
      description: "Stunning royal emerald set inside a gorgeous halo of white gold."
    }
  ];

  // Dynamic Multi-Dimensional Filter computation
  const filteredSilverProducts = silverProducts.filter((product) => {
    // 1. Material Filter
    const matMatches =
      selectedMaterial === "All" ||
      product.material.toLowerCase().includes(selectedMaterial.toLowerCase());

    // 2. Price Filter
    const priceVal = parsePrice(product.discountedPrice);
    let priceMatches = true;
    if (selectedPriceRange === "under2k") {
      priceMatches = priceVal < 2000;
    } else if (selectedPriceRange === "2kto3k") {
      priceMatches = priceVal >= 2000 && priceVal <= 3000;
    } else if (selectedPriceRange === "over3k") {
      priceMatches = priceVal > 3000;
    }

    return matMatches && priceMatches;
  });

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
      {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] p-8 md:p-12 -mx-6 md:-mx-12 border-y border-white/10 shadow-[0_45px_100px_10px_rgba(0,0,0,0.75)]">

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

        <div className="lg:col-span-8 flex flex-col relative w-full overflow-hidden">

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {silverProducts.slice(startIndex, startIndex + 2).map((product) => (
              <div
                key={product.id}
                className="bg-[#1C1C1C] rounded-[24px] p-6 shadow-2xl border border-white/10 flex flex-col justify-between relative group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-sans text-[10px] text-white/60 uppercase block font-semibold">
                        {product.category}
                      </span>
                      <span className="inline-block bg-[#D4AF37] text-black text-[8px] tracking-wider uppercase px-2.5 py-0.5 mt-1 rounded-sm font-bold">
                        Sale
                      </span>
                    </div>

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

                <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-sm font-bold text-white">
                      {product.discountedPrice}
                    </span>
                    <span className="font-sans text-xs text-white/40 line-through">
                      {product.originalPrice}
                    </span>
                  </div>

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

      </div> */}

      {/* ─── CIRCULAR PRODUCTS GALLERY ─── */}
      <div className="max-w-[1200px] mx-auto px-4 mt-20 relative z-30">
        {/* Title / Heading */}
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#736357] uppercase font-bold block mb-2">
            Curated Treasures
          </span>
          <h3 className="font-serif text-2xl md:text-4xl text-black tracking-[0.15em] uppercase font-bold">
            SILVER ESSENTIALS
          </h3>
          <div className="w-12 h-[1.5px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* ─── PREMIUM MINIMALIST FILTER BAR ─── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-black/5 pb-6">
          {/* Left: Material selection tabs */}
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-sans text-[9px] tracking-widest text-[#736357] uppercase font-bold mr-2">
              Material:
            </span>
            {["All", "White Gold", "Platinum", "Sterling Silver"].map((material) => (
              <button
                key={material}
                onClick={() => {
                  setSelectedMaterial(material);
                  setVisibleCount(4); // Reset pagination on filter change
                }}
                className={`font-sans text-[10px] tracking-[0.2em] uppercase font-bold relative pb-2 transition-all duration-300 ${selectedMaterial === material
                  ? "text-black font-extrabold"
                  : "text-black/40 hover:text-black/80"
                  }`}
              >
                {material}
                {selectedMaterial === material && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right: Price selection dropdown */}
          <div className="flex items-center gap-4">
            <span className="font-sans text-[9px] tracking-widest text-[#736357] uppercase font-bold">
              Price Range:
            </span>
            <div className="relative">
              <select
                value={selectedPriceRange}
                onChange={(e) => {
                  setSelectedPriceRange(e.target.value);
                  setVisibleCount(4); // Reset pagination on filter change
                }}
                className="appearance-none bg-[#FAF6F0] text-black font-sans text-[10px] tracking-[0.15em] uppercase font-bold py-2.5 pl-4 pr-10 rounded-full border border-black/10 focus:outline-none focus:border-[#D4AF37] cursor-pointer shadow-sm transition-all"
              >
                <option value="All">All Prices</option>
                <option value="under2k">Under ₹2,000</option>
                <option value="2kto3k">₹2,000 - ₹3,000</option>
                <option value="over3k">Over ₹3,000</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/50">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Circular Cards Grid or Empty State */}
        {filteredSilverProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#FAF6F0] rounded-3xl border border-black/5 shadow-inner">
            <span className="font-serif italic text-lg text-black/40 block mb-4">
              No matching treasures found
            </span>
            <button
              onClick={() => {
                setSelectedMaterial("All");
                setSelectedPriceRange("All");
                setVisibleCount(4);
              }}
              className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-white bg-black py-3 px-8 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-md"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {filteredSilverProducts.slice(0, visibleCount).map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="flex flex-col items-center group cursor-pointer select-none"
                >
                  {/* Circular Card Image Wrapper */}
                  <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-black/5 bg-[#FAF6F0] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.25)] flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.45)] group-hover:border-[#D4AF37]/30">
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
                  <h4 className="font-serif text-sm text-black uppercase tracking-wider font-bold mt-5 text-center group-hover:text-[#D4AF37] transition-colors duration-300 max-w-[180px] truncate">
                    {product.name}
                  </h4>
                  <p className="font-sans text-xs text-black/50 mt-1 font-semibold">
                    {product.discountedPrice}
                  </p>
                </Link>
              ))}
            </div>

            {/* Dynamic Action Buttons: Load More / Show Less Toggle */}
            {filteredSilverProducts.length > 4 && (
              <div className="flex justify-center mt-14">
                {visibleCount < filteredSilverProducts.length ? (
                  <button
                    onClick={() => setVisibleCount((prev) => Math.min(prev + 4, filteredSilverProducts.length))}
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
            )}
          </>
        )}
      </div>

    </div >
  );
}
