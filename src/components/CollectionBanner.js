import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle } from "lucide-react";

export default function CollectionBanner() {
  return (
    <div className="w-full px-4 md:px-10 pb-8 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[42vh] rounded-sm overflow-hidden border border-brand-border/30 shadow-md">

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
    </div>
  );
}
