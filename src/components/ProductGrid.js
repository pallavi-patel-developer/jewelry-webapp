"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/data/products";
import { SlidersHorizontal, RotateCcw, ChevronDown } from "lucide-react";

export default function ProductGrid({ title }) {
  const pathname = usePathname() || "";
  const isGenderSection = pathname.includes("/for-her") || pathname.includes("/for-him");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [selectedDiscount, setSelectedDiscount] = useState("All");
  const [selectedRingSize, setSelectedRingSize] = useState("All");
  const [selectedChainLength, setSelectedChainLength] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  // Dynamic filter options extraction
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const materials = ["All", ...Array.from(new Set(products.map((p) => p.material)))];

  const priceRanges = [
    { label: "All Prices", value: "All" },
    { label: "Under ₹1,200", value: "under-1200" },
    { label: "₹1,200 - ₹2,500", value: "1200-2500" },
    { label: "Over ₹2,500", value: "over-2500" },
  ];

  const discountOptions = [
    { label: "All Products", value: "All" },
    { label: "On Sale", value: "on-sale" },
    { label: "10% Off or More", value: "10-off" },
    { label: "25% Off or More", value: "25-off" },
    { label: "50% Off or More", value: "50-off" },
  ];

  const ringSizes = ["All", "6", "7", "8", "9", "10"];
  const chainLengths = ["All", "16 inch", "18 inch", "20 inch", "24 inch"];

  const sortOptions = [
    { label: "Featured", value: "default" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
  ];

  // Helper: Calculate discount percentage
  const getDiscountPercentage = (orig, disc) => {
    const origNum = parseInt(orig.replace(/[^0-9]/g, ""));
    const discNum = parseInt(disc.replace(/[^0-9]/g, ""));
    if (!origNum || !discNum || origNum <= discNum) return 0;
    return Math.round(((origNum - discNum) / origNum) * 100);
  };

  // Filtering Logic
  const filteredProducts = products.filter((product) => {
    // Only apply category filter if we are on for-her / for-him sections where it is shown
    const matchesCategory =
      !isGenderSection ||
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesMaterial = selectedMaterial === "All" || product.material === selectedMaterial;

    // Price Filter
    const numericPrice = parseInt(product.discountedPrice.replace(/[^0-9]/g, ""));
    let matchesPrice = true;
    if (selectedPriceRange === "under-1200") {
      matchesPrice = numericPrice < 1200;
    } else if (selectedPriceRange === "1200-2500") {
      matchesPrice = numericPrice >= 1200 && numericPrice <= 2500;
    } else if (selectedPriceRange === "over-2500") {
      matchesPrice = numericPrice > 2500;
    }

    // Discount Filter
    const pct = getDiscountPercentage(product.originalPrice, product.discountedPrice);
    let matchesDiscount = true;
    if (selectedDiscount === "on-sale") {
      matchesDiscount = pct > 0;
    } else if (selectedDiscount === "10-off") {
      matchesDiscount = pct >= 10;
    } else if (selectedDiscount === "25-off") {
      matchesDiscount = pct >= 25;
    } else if (selectedDiscount === "50-off") {
      matchesDiscount = pct >= 50;
    }

    // Ring Size Filter
    const matchesRingSize =
      selectedRingSize === "All" ||
      (product.sizes && product.sizes.includes(selectedRingSize));

    // Chain Length Filter
    const matchesChainLength =
      selectedChainLength === "All" ||
      (product.sizes && product.sizes.includes(selectedChainLength));

    return (
      matchesCategory &&
      matchesMaterial &&
      matchesPrice &&
      matchesDiscount &&
      matchesRingSize &&
      matchesChainLength
    );
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.discountedPrice.replace(/[^0-9]/g, ""));
    const priceB = parseInt(b.discountedPrice.replace(/[^0-9]/g, ""));

    if (sortBy === "price-asc") return priceA - priceB;
    if (sortBy === "price-desc") return priceB - priceA;
    return 0;
  });

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedMaterial("All");
    setSelectedPriceRange("All");
    setSelectedDiscount("All");
    setSelectedRingSize("All");
    setSelectedChainLength("All");
    setSortBy("default");
  };

  const hasActiveFilters =
    (isGenderSection && selectedCategory !== "All") ||
    selectedMaterial !== "All" ||
    selectedPriceRange !== "All" ||
    selectedDiscount !== "All" ||
    selectedRingSize !== "All" ||
    selectedChainLength !== "All" ||
    sortBy !== "default";

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-10 py-12 z-10 relative">
      
      {/* Editorial Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-serif text-black uppercase tracking-[0.25em] font-bold mb-3">
          {title}
        </h1>
        <p className="font-sans text-xs md:text-sm text-black/50 tracking-[0.15em] uppercase font-medium">
          Pure Artistry • Meticulously Curated
        </p>
      </div>

      {/* ─── PREMIUM FILTER BAR ─── */}
      <div className="border-y border-black/10 py-4 mb-10 flex flex-col md:flex-row justify-between items-center gap-4 z-20 relative">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 border border-black/20 bg-white hover:border-black font-sans text-[10px] tracking-[0.2em] uppercase py-3 px-5 rounded-sm transition-all duration-300 shadow-sm"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1.5 text-black/60 hover:text-black font-sans text-[10px] tracking-[0.2em] uppercase transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <span className="font-sans text-[10px] tracking-[0.15em] text-black/40 uppercase font-bold">
            {sortedProducts.length} Pieces Found
          </span>

          <div className="relative group">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-black/20 font-sans text-[10px] tracking-[0.2em] uppercase pl-5 pr-10 py-3 rounded-sm outline-none cursor-pointer hover:border-black transition-all shadow-sm"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/60" />
          </div>
        </div>
      </div>

      {/* ─── EXPANDABLE FILTER DRAWER ─── */}
      {showFilters && (
        <div className="bg-[#faf8f5] border border-black/10 rounded-sm p-6 md:p-8 mb-10 flex flex-col gap-8 shadow-sm transition-all duration-500 animate-fadeIn">
          
          {/* Row 1: Core Type & Metal Materials */}
          <div className={`grid grid-cols-1 ${isGenderSection ? "md:grid-cols-2" : "w-full"} gap-8`}>
            {/* Category Filter - ONLY SHOWN ON /for-her OR /for-him SECTIONS */}
            {isGenderSection && (
              <div className="flex flex-col items-start">
                <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#736357] mb-4">
                  Category / Type
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`font-sans text-[10px] tracking-[0.15em] uppercase py-2 px-4 rounded-full border transition-all duration-300 ${
                        selectedCategory === cat
                          ? "bg-[#736357] text-[#FAF6F0] border-[#736357] shadow-sm font-bold"
                          : "bg-white text-black/70 border-black/10 hover:border-black/30"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Material Filter */}
            <div className="flex flex-col items-start w-full">
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#736357] mb-4">
                Metal / Material
              </h4>
              <div className="flex flex-wrap gap-2">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`font-sans text-[10px] tracking-[0.15em] uppercase py-2 px-4 rounded-full border transition-all duration-300 ${
                      selectedMaterial === mat
                        ? "bg-[#736357] text-[#FAF6F0] border-[#736357] shadow-sm font-bold"
                        : "bg-white text-black/70 border-black/10 hover:border-black/30"
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Price Range & Discounts / Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/5 pt-6">
            {/* Price Range Filter */}
            <div className="flex flex-col items-start">
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#736357] mb-4">
                Price Range
              </h4>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedPriceRange(range.value)}
                    className={`font-sans text-[10px] tracking-[0.15em] uppercase py-2 px-4 rounded-full border transition-all duration-300 ${
                      selectedPriceRange === range.value
                        ? "bg-[#736357] text-[#FAF6F0] border-[#736357] shadow-sm font-bold"
                        : "bg-white text-black/70 border-black/10 hover:border-black/30"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Discounts / Offers Filter */}
            <div className="flex flex-col items-start">
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#736357] mb-4">
                Discounts & Offers
              </h4>
              <div className="flex flex-wrap gap-2">
                {discountOptions.map((disc) => (
                  <button
                    key={disc.value}
                    onClick={() => setSelectedDiscount(disc.value)}
                    className={`font-sans text-[10px] tracking-[0.15em] uppercase py-2 px-4 rounded-full border transition-all duration-300 ${
                      selectedDiscount === disc.value
                        ? "bg-[#736357] text-[#FAF6F0] border-[#736357] shadow-sm font-bold"
                        : "bg-white text-black/70 border-black/10 hover:border-black/30"
                    }`}
                  >
                    {disc.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Ring Sizes & Chain Lengths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/5 pt-6">
            {/* Ring Sizes Filter */}
            <div className="flex flex-col items-start">
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#736357] mb-4">
                Ring Sizes
              </h4>
              <div className="flex flex-wrap gap-2">
                {ringSizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedRingSize(sz)}
                    className={`font-sans text-[10px] tracking-[0.15em] uppercase py-2 px-4 rounded-full border transition-all duration-300 ${
                      selectedRingSize === sz
                        ? "bg-[#736357] text-[#FAF6F0] border-[#736357] shadow-sm font-bold"
                        : "bg-white text-black/70 border-black/10 hover:border-black/30"
                    }`}
                  >
                    {sz === "All" ? "All Sizes" : sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Chain Lengths Filter */}
            <div className="flex flex-col items-start">
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#736357] mb-4">
                Chain Lengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {chainLengths.map((ln) => (
                  <button
                    key={ln}
                    onClick={() => setSelectedChainLength(ln)}
                    className={`font-sans text-[10px] tracking-[0.15em] uppercase py-2 px-4 rounded-full border transition-all duration-300 ${
                      selectedChainLength === ln
                        ? "bg-[#736357] text-[#FAF6F0] border-[#736357] shadow-sm font-bold"
                        : "bg-white text-black/70 border-black/10 hover:border-black/30"
                    }`}
                  >
                    {ln === "All" ? "All Lengths" : ln}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ─── PRODUCT GRID DISPLAY ─── */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
          {sortedProducts.map((item) => {
            const discPct = getDiscountPercentage(item.originalPrice, item.discountedPrice);

            return (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="flex flex-col group cursor-pointer relative"
              >
                {/* Product Image Frame */}
                <div className="relative w-full aspect-square bg-[#faf8f5] border border-black/10 group-hover:border-black transition-all duration-500 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.18)] overflow-hidden rounded-sm mb-3 flex items-center justify-center">
                  
                  {/* Elegant gold Discount Badge if applicable */}
                  {discPct > 0 && (
                    <span className="absolute top-3 left-3 bg-[#736357] text-[#FAF6F0] font-sans text-[9px] tracking-wider uppercase py-1 px-2.5 rounded-full z-10 font-bold shadow-sm">
                      {discPct}% OFF
                    </span>
                  )}

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-contain p-4 group-hover:scale-[1.08] transition-transform duration-700"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>

                {/* Title & Price Details */}
                <div className="flex flex-col items-center text-center gap-1">
                  <h3 className="font-serif text-xs text-black font-bold tracking-widest uppercase leading-tight group-hover:text-[#736357] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="font-sans text-black/40 text-xs tracking-[0.1em] line-through">
                      {item.originalPrice}
                    </p>
                    <p className="font-sans text-black font-bold text-sm tracking-[0.15em]">
                      {item.discountedPrice}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        /* Empty State with Luxury aesthetic */
        <div className="py-20 flex flex-col items-center justify-center text-center border border-dashed border-black/10 rounded-sm bg-[#faf8f5]">
          <SlidersHorizontal className="w-8 h-8 text-black/30 mb-4 animate-pulse" />
          <h3 className="font-serif text-lg text-black font-bold uppercase tracking-wider mb-2">
            No Masterpieces Found
          </h3>
          <p className="font-sans text-xs text-black/50 tracking-wider max-w-[320px] mb-6">
            We couldn't find any jewelry pieces matching your current filters. Please adjust your criteria or reset.
          </p>
          <button
            onClick={handleResetFilters}
            className="bg-black text-[#FAF6F0] font-sans text-[10px] tracking-[0.2em] uppercase py-3.5 px-8 hover:bg-[#736357] transition-all duration-300 rounded-sm shadow-sm"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
