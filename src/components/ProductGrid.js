import Image from "next/image";

const dummyProducts = [
  { id: 1, name: "Aurelia Signature Ring", price: "₹1,200", image: "/images/ring.png" },
  { id: 2, name: "Celestial Earrings", price: "₹850", image: "/images/earring.png" },
  { id: 3, name: "Eternity Necklace", price: "₹2,100", image: "/images/necklace.png" },
  { id: 4, name: "Royal Bracelet", price: "₹3,500", image: "/images/bracelet.png" },
  { id: 5, name: "Midnight Pendant", price: "₹950", image: "/images/pendant.png" },
  { id: 6, name: "Golden Horizon Ring", price: "₹1,500", image: "/images/ring.png" },
];

export default function ProductGrid({ title }) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-16 z-10 relative">
      <h1 className="text-4xl md:text-5xl font-serif text-brand-heading uppercase tracking-widest mb-12 text-center">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
        {dummyProducts.map((item) => (
          <div key={item.id} className="flex flex-col group cursor-pointer">
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
              <p className="font-sans text-brand-body text-sm tracking-[0.1em]">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
