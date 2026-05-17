import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductGrid({ title }) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-10 py-10 z-10 relative">
      <h1 className="text-2xl md:text-3xl font-serif text-brand-heading uppercase tracking-widest mb-6 text-center">
        {title}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-6">
        {products.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`} className="flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-square bg-[#e8dfd8] overflow-hidden rounded-sm mb-2 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="flex flex-col items-center text-center gap-0.5">
              <h3 className="font-serif text-xs text-brand-heading tracking-wide uppercase leading-tight">{item.name}</h3>
              <div className="flex items-center gap-2">
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
