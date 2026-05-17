"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

const VISIBLE = 7;

export default function ProductCarousel() {
  const [offset, setOffset] = useState(0);

  // Repeat products so we always have enough to fill 7 slots
  const looped = [...products, ...products, ...products];
  const visible = looped.slice(offset, offset + VISIBLE);

  const handleNext = () => setOffset((prev) => (prev + 1) % products.length);
  const handlePrev = () =>
    setOffset((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="w-full px-4 md:px-10 py-6 relative z-20">
      <div className="flex items-center gap-2 md:gap-3">

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous products"
          className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-border bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:border-brand-heading transition-all duration-200 shadow-sm"
        >
          <ChevronLeft className="w-4 h-4 text-brand-heading" strokeWidth={1.5} />
        </button>

        {/* 7-Column Arch Grid */}
        <div className="flex-1 grid grid-cols-7 gap-2">
          {visible.map((product, idx) => (
            <Link
              key={`${product.id}-${offset}-${idx}`}
              href={`/product/${product.id}`}
              className="flex flex-col items-center group"
            >
              {/* Arch Box */}
              <div
                className="relative w-full bg-[#EDE5DA] overflow-hidden flex items-center justify-center"
                style={{
                  borderRadius: "9999px 9999px 0 0",
                  aspectRatio: "3 / 4",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 14vw, 10vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              {/* Name */}
              <p className="text-[9px] md:text-[10px] font-sans text-brand-heading uppercase tracking-wide text-center mt-1 leading-tight line-clamp-2 w-full px-0.5">
                {product.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next products"
          className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-border bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:border-brand-heading transition-all duration-200 shadow-sm"
        >
          <ChevronRight className="w-4 h-4 text-brand-heading" strokeWidth={1.5} />
        </button>

      </div>
    </div>
  );
}
