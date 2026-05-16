import { ShoppingBag, Trash2, Heart } from "lucide-react";
import Image from "next/image";
import { products } from "@/data/products";

export default function WishlistPage() {
  const wishlistItems = [products[1], products[3], products[4]];

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-serif text-brand-heading uppercase tracking-widest">My Wishlist</h2>
        <p className="text-brand-body text-sm font-sans">
          Your saved pieces for later consideration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistItems.map((item) => (
          <div key={item.id} className="flex flex-col group border border-brand-border/30 rounded-sm overflow-hidden bg-white/20 p-4">
            <div className="relative w-full aspect-square bg-brand-hero/10 rounded-sm overflow-hidden flex items-center justify-center p-8 mb-4">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-contain p-8 group-hover:scale-110 transition-transform duration-700" 
                style={{ mixBlendMode: "multiply" }}
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-body/40 hover:text-red-700 transition-colors shadow-sm">
                <Trash2 className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex flex-col gap-1 items-center text-center">
              <h3 className="font-serif text-lg text-brand-heading uppercase tracking-wide">{item.name}</h3>
              <span className="font-sans text-brand-heading font-medium">{item.discountedPrice}</span>
            </div>

            <button className="mt-6 w-full bg-brand-heading text-brand-light py-4 px-6 text-[10px] uppercase tracking-widest font-sans font-bold rounded-sm hover:bg-black transition-colors flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              Move to Bag
            </button>
          </div>
        ))}

        {wishlistItems.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center gap-6 border border-dashed border-brand-border rounded-sm">
             <Heart className="w-12 h-12 text-brand-border" strokeWidth={1} />
             <p className="text-brand-body font-serif text-xl italic">Your wishlist is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}
