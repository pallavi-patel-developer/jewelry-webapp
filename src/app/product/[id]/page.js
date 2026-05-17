"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";

export default function ProductPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const product = products.find((p) => p.id.toString() === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [relatedOffset, setRelatedOffset] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const allRelated = products.filter((p) => p.id !== product?.id);
  const relatedProducts = [...allRelated, ...allRelated].slice(relatedOffset, relatedOffset + 4);
  const handleNext = () => setRelatedOffset((prev) => (prev + 1) % allRelated.length);
  const handlePrev = () => setRelatedOffset((prev) => (prev - 1 + allRelated.length) % allRelated.length);

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

  const images = product.images || [product.image, product.image, product.image, product.image];

  const prevImage = () =>
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg selection:bg-brand-heading selection:text-brand-light">
      <Navbar />

      <main className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Image Gallery */}
          <div className="flex flex-col gap-3 sticky top-8">

            {/* Main Image with Arrows */}
            <div
              className="relative w-full aspect-[4/5] bg-brand-hero/50 overflow-hidden rounded-md flex items-center justify-center group"
              style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <Image
                src={images[activeImage]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-12 lg:p-16"
                style={{
                  mixBlendMode: "multiply",
                  transform: isZoomed ? "scale(2.5)" : "scale(1)",
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transition: isZoomed
                    ? "transform 0.1s ease, transform-origin 0s"
                    : "transform 0.3s ease",
                }}
              />

              {/* Left Arrow */}
              <button
                onClick={(e) => { e.preventDefault(); prevImage(); }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm border border-brand-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow-sm z-10"
              >
                <ChevronLeft className="w-5 h-5 text-brand-heading" strokeWidth={1.5} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={(e) => { e.preventDefault(); nextImage(); }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm border border-brand-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow-sm z-10"
              >
                <ChevronRight className="w-5 h-5 text-brand-heading" strokeWidth={1.5} />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.preventDefault(); setActiveImage(i); }}
                    aria-label={`Go to image ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      activeImage === i ? "bg-brand-heading w-4" : "bg-brand-heading/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`relative aspect-square rounded-sm overflow-hidden border-2 transition-all duration-200 bg-brand-hero/30 cursor-pointer ${
                    activeImage === i
                      ? "border-brand-heading"
                      : "border-transparent hover:border-brand-border"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    sizes="10vw"
                    className="object-contain p-2"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </button>
              ))}
            </div>
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
                    className={`border transition-all duration-300 font-sans text-sm tracking-wider py-3 px-6 rounded-sm ${
                      selectedSize === size
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

        {/* You May Also Like */}
        <section className="mt-20 pt-12 border-t border-brand-border/40">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif text-brand-heading">You may also like</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Show previous products"
                className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-brand-body border border-brand-border rounded-full px-4 py-2 hover:border-brand-heading hover:text-brand-heading transition-all duration-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} /> PREV
              </button>
              <button
                onClick={handleNext}
                aria-label="Show next products"
                className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-brand-body border border-brand-border rounded-full px-4 py-2 hover:border-brand-heading hover:text-brand-heading transition-all duration-200"
              >
                NEXT <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((item, idx) => (
              <Link
                key={`${item.id}-${idx}`}
                href={`/product/${item.id}`}
                className="flex flex-col items-center group"
              >
                {/* Arch Card */}
                <div
                  className="relative w-full bg-[#EDE5DA] overflow-hidden flex items-center justify-center mb-3"
                  style={{
                    borderRadius: "9999px 9999px 0 0",
                    aspectRatio: "3 / 4",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col items-center text-center w-full px-1">
                  <p className="font-sans text-[11px] text-brand-body tracking-wide uppercase mb-1 line-clamp-2">
                    {item.name}
                  </p>
                  <p className="font-sans text-sm text-brand-heading font-medium mb-3">
                    {item.discountedPrice}
                  </p>
                  <button className="w-full border border-brand-border text-brand-heading font-sans text-[10px] tracking-[0.15em] uppercase py-2 px-3 hover:bg-brand-heading hover:text-white hover:border-brand-heading transition-all duration-200 rounded-sm">
                    Add to Bag
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
