import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductGrid({ title }) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-16 z-10 relative">
      <h1 className="text-4xl md:text-5xl font-serif text-brand-heading uppercase tracking-widest mb-12 text-center">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`} className="flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-square bg-[#e8dfd8] overflow-hidden rounded-sm mb-6 flex items-center justify-center">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-12 group-hover:scale-110 transition-transform duration-700" 
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <h3 className="font-serif text-xl text-brand-heading tracking-wide uppercase">{item.name}</h3>
              <div className="flex items-center gap-3">
                <p className="font-sans text-brand-body/60 text-sm tracking-[0.1em] line-through">{item.originalPrice}</p>
                <p className="font-sans text-brand-heading font-medium text-sm tracking-[0.1em]">{item.discountedPrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
