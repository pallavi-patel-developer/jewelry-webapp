"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

const VISIBLE = 6;

export default function ProductCarousel() {
  const [offset, setOffset] = useState(0);

  // Repeat products so we always have enough to fill 6 slots
  const looped = [...products, ...products, ...products];
  const visible = looped.slice(offset, offset + VISIBLE);

  const handleNext = () => setOffset((prev) => (prev + 1) % products.length);
  const handlePrev = () =>
    setOffset((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="w-full py-12 relative z-20 overflow-hidden bg-transparent select-none">

      {/* ─── TOP HEADING: EVERYDAY JEWELERY (Centered, Black, Letter-spaced) ─── */}
      <div className="text-center mb-8 px-4">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-black tracking-[0.25em] uppercase font-bold">
          EVERYDAY JEWELERY
        </h2>
        <div className="w-16 h-[1px] bg-black/30 mx-auto mt-3" />
      </div>

      {/* Wrapper to align everything full screen */}
      <div className="relative w-full px-6 md:px-14 flex items-center">

        {/* ─── PREV BUTTON (Upscaled & Floating on Left Edge) ─── */}
        <button
          onClick={handlePrev}
          aria-label="Previous products"
          className="absolute left-2 md:left-4 z-30 w-11 h-11 rounded-full border border-brand-border bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-lg active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 text-brand-heading" strokeWidth={2} />
        </button>

        {/* ─── 6-COLUMN ARCH GRID (Edge-to-edge / Large sizing) ─── */}
        <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5">
          {visible.map((product, idx) => (
            <Link
              key={`${product.id}-${offset}-${idx}`}
              href={`/product/${product.id}`}
              className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Massive Arch Box */}
              <div
                className="relative w-full bg-[#EDE5DA] overflow-hidden flex items-center justify-center shadow-md border border-brand-border/20 group-hover:shadow-lg transition-shadow duration-300"
                style={{
                  borderRadius: "9999px 9999px 0 0",
                  aspectRatio: "3 / 4",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-contain p-2 md:p-3 group-hover:scale-105 transition-transform duration-500"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              {/* Product Name (Upscaled slightly) */}
              <p className="text-[10px] md:text-[11px] font-sans text-brand-heading uppercase tracking-widest text-center mt-2 leading-snug line-clamp-2 w-full px-1 font-semibold">
                {product.name}
              </p>
            </Link>
          ))}
        </div>

        {/* ─── NEXT BUTTON (Upscaled & Floating on Right Edge) ─── */}
        <button
          onClick={handleNext}
          aria-label="Next products"
          className="absolute right-2 md:right-4 z-30 w-11 h-11 rounded-full border border-brand-border bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-lg active:scale-95"
        >
          <ChevronRight className="w-6 h-6 text-brand-heading" strokeWidth={2} />
        </button>

      </div>

      {/* ─── BOTTOM SUB-LABEL: AURELIA TOP GOLD STYLE (Centered, Black, same size/font) ─── */}
      <div className="text-center mt-12 px-4">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-black tracking-[0.25em] uppercase font-bold">
          AURELIA TOP GOLD STYLE
        </h2>
        <div className="w-16 h-[1px] bg-black/30 mx-auto mt-3" />
      </div>

    </div>
  );
}
