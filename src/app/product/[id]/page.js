"use client";

import { useState, use } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import { ShoppingBag } from "lucide-react";

export default function ProductPage({ params }) {
  // In newer Next.js versions, params might be a promise.
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const product = products.find((p) => p.id.toString() === id);
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-brand-bg">
        <Navbar />
        <div className="flex-grow flex items-center justify-center text-brand-heading font-serif text-2xl">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg selection:bg-brand-heading selection:text-brand-light">
      <Navbar />

      <main className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full aspect-[4/5] bg-brand-hero/50 overflow-hidden rounded-md flex items-center justify-center p-12">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain p-12 lg:p-20"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col text-left">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-heading uppercase tracking-widest mb-4">
              {product.name}
            </h1>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-3xl font-sans text-brand-heading font-medium tracking-wide">
                {product.discountedPrice}
              </span>
              <span className="text-xl font-sans text-brand-body/60 line-through tracking-wide mb-1">
                {product.originalPrice}
              </span>
            </div>

            <p className="text-brand-body font-sans text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-10">
              <h3 className="text-sm font-sans tracking-[0.2em] text-brand-heading uppercase font-semibold mb-4">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border transition-all duration-300 font-sans text-sm tracking-wider py-3 px-6 rounded-sm ${selectedSize === size
                        ? "border-brand-heading bg-brand-heading text-brand-light"
                        : "border-brand-border text-brand-heading hover:border-brand-heading"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full md:w-auto bg-brand-btn text-brand-light flex items-center justify-center gap-3 py-5 px-10 rounded-sm hover:bg-brand-btn-hover transition-colors font-sans text-sm tracking-[0.2em] uppercase font-medium">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              Add to Cart
            </button>

            {/* Additional Details */}
            <div className="mt-12 pt-8 border-t border-brand-border/50 flex flex-col gap-4">
              <div className="flex items-center gap-4 text-brand-body font-sans text-sm">
                <span className="uppercase tracking-widest font-semibold w-24">Material:</span>
                <span>{product.material}</span>
              </div>
              <div className="flex items-center gap-4 text-brand-body font-sans text-sm">
                <span className="uppercase tracking-widest font-semibold w-24">Category:</span>
                <span>{product.category}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
