"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft, Heart, Bookmark } from "lucide-react";
import { products } from "@/data/products";

// Dummy cart items for demonstration
const dummyCartItems = [
  { ...products[0], quantity: 1, selectedSize: "7", sku: "AUR-RG-001", metal: "18k White Gold" },
  { ...products[2], quantity: 1, selectedSize: "18 inch", sku: "AUR-NC-042", metal: "18k Rose Gold" },
];

export default function CartPage() {
  const subtotal = dummyCartItems.reduce((acc, item) => {
    const price = parseInt(item.discountedPrice.replace("₹", "").replace(",", ""));
    return acc + price * item.quantity;
  }, 0);

  const shipping = 0; // Free shipping for luxury items
  const taxRate = 0.03; // 3% GST for jewelry
  const estimatedTax = subtotal * taxRate;
  const total = subtotal + shipping + estimatedTax;

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />

      <main className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-brand-border pb-10">
            <Link href="/home" className="flex items-center gap-2 text-brand-body hover:text-brand-heading transition-colors w-fit group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs uppercase tracking-widest font-sans font-medium">Back to Shopping</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-heading uppercase tracking-widest">
              Your Shopping Bag
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items List */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {dummyCartItems.length > 0 ? (
                dummyCartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 bg-white/40 backdrop-blur-sm rounded-sm border border-brand-border/30">
                    {/* Item Image */}
                    <div className="relative w-full sm:w-40 aspect-square bg-brand-hero/50 rounded-sm overflow-hidden flex items-center justify-center p-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-4"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-col flex-grow justify-between py-2">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-1">
                          <h3 className="font-serif text-xl text-brand-heading uppercase tracking-wide">
                            {item.name}
                          </h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest font-sans text-brand-body/70">
                            <span>SKU: {item.sku}</span>
                            <span>Metal: {item.metal}</span>
                          </div>
                          <p className="text-brand-body text-sm font-sans mt-1">
                            Size: <span className="font-semibold">{item.selectedSize}</span>
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-brand-body/40 hover:text-brand-heading transition-colors p-2" title="Save for Later">
                            <Bookmark className="w-4 h-4" strokeWidth={1.5} />
                          </button>
                          <button className="text-brand-body/40 hover:text-brand-heading transition-colors p-2" title="Move to Wishlist">
                            <Heart className="w-4 h-4" strokeWidth={1.5} />
                          </button>
                          <button className="text-brand-body/40 hover:text-red-800 transition-colors p-2" title="Remove">
                            <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-brand-border rounded-sm">
                          <button className="p-2 hover:bg-brand-border/20 transition-colors">
                            <Minus className="w-4 h-4 text-brand-heading" />
                          </button>
                          <span className="px-4 font-sans text-sm text-brand-heading font-medium">
                            {item.quantity}
                          </span>
                          <button className="p-2 hover:bg-brand-border/20 transition-colors">
                            <Plus className="w-4 h-4 text-brand-heading" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="flex flex-col items-end">
                          <span className="text-lg font-sans text-brand-heading font-medium">
                            {item.discountedPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-white/20 rounded-sm border border-dashed border-brand-border">
                  <p className="text-brand-body font-serif text-xl mb-6 italic">Your bag is currently empty.</p>
                  <Link href="/" className="bg-brand-btn text-brand-light px-8 py-4 uppercase tracking-[0.2em] text-xs font-sans hover:bg-brand-btn-hover transition-colors rounded-sm inline-block">
                    Start Shopping
                  </Link>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-brand-heading text-brand-light p-10 rounded-sm shadow-xl flex flex-col gap-8 sticky top-32">
                <h2 className="text-2xl font-serif uppercase tracking-[0.2em] border-b border-white/10 pb-6">
                  Summary
                </h2>

                <div className="flex flex-col gap-4 font-sans text-sm tracking-wide">
                  <div className="flex justify-between opacity-80">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between opacity-80">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Complimentary" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between opacity-80">
                    <span>Estimated GST (3%)</span>
                    <span>₹{estimatedTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xl font-serif border-t border-white/10 pt-6 mt-2 uppercase tracking-[0.1em]">
                    <span>Total</span>
                    <span className="font-sans">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full bg-brand-light text-brand-heading py-5 px-8 font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors mt-4 rounded-sm">
                  Proceed to Checkout
                </button>

                <p className="text-[10px] text-center opacity-60 font-sans tracking-widest uppercase mt-2">
                  Secured by Aurelia Encrypted Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
