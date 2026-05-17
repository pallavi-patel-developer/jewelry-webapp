import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductGrid({ title }) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-10 py-10 z-10 relative">
      <h1 className="text-2xl md:text-3xl font-serif text-black uppercase tracking-[0.2em] mb-10 text-center font-bold">
        {title}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
        {products.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`} className="flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-square bg-[#faf8f5] border border-black/10 group-hover:border-black transition-all duration-500 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.18)] overflow-hidden rounded-sm mb-3 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                className="object-contain p-4 group-hover:scale-[1.08] transition-transform duration-700"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <h3 className="font-serif text-xs text-black font-bold tracking-widest uppercase leading-tight group-hover:text-[#736357] transition-colors duration-300">{item.name}</h3>
              <div className="flex items-center gap-2">
                <p className="font-sans text-black/40 text-xs tracking-[0.1em] line-through">{item.originalPrice}</p>
                <p className="font-sans text-black font-bold text-sm tracking-[0.15em]">{item.discountedPrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
