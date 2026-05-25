"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft, Heart, Bookmark, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Load cart from localStorage once component mounts
  useEffect(() => {
    setMounted(true);
    const savedCart = localStorage.getItem("aurelia-cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart items", e);
      }
    }
  }, []);

  // Update cart in state and sync with localStorage
  const updateCart = (newItems) => {
    setCartItems(newItems);
    localStorage.setItem("aurelia-cart", JSON.stringify(newItems));
  };

  // Quantity increase handler
  const handleQtyIncrease = (itemId, size) => {
    const updated = cartItems.map((item) => 
      (item.id === itemId && item.selectedSize === size)
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateCart(updated);
  };

  // Quantity decrease handler
  const handleQtyDecrease = (itemId, size) => {
    const updated = cartItems.map((item) => {
      if (item.id === itemId && item.selectedSize === size) {
        const newQty = item.quantity - 1;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean);
    updateCart(updated);
  };

  // Remove item handler
  const handleRemoveItem = (itemId, size) => {
    const updated = cartItems.filter(
      (item) => !(item.id === itemId && item.selectedSize === size)
    );
    updateCart(updated);
  };

  // Subtotal and Order Math
  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseInt(item.discountedPrice.replace(/[^\d]/g, "")) || 0;
    return acc + price * item.quantity;
  }, 0);

  const shipping = 0; // Free shipping for luxury items
  const taxRate = 0.03; // 3% GST for jewelry
  const estimatedTax = subtotal * taxRate;
  const total = subtotal + shipping + estimatedTax;

  // Render minimal loading state during SSR/hydration to prevent mismatches
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-brand-bg">
        <Navbar />
        <main className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-black/60">
            <ShoppingBag className="w-8 h-8 animate-bounce text-black/40" />
            <p className="font-sans text-xs uppercase tracking-widest font-semibold">Loading shopping bag...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />

      <main className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-black pb-10">
            <Link href="/silver" className="flex items-center gap-2 text-black/60 hover:text-black transition-colors w-fit group font-bold">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs uppercase tracking-widest font-sans font-medium">Back to Silver Collection</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-black uppercase tracking-widest font-bold">
              Your Shopping Bag
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items List */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex flex-col sm:flex-row gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-sm border border-black shadow-md hover:shadow-lg transition-all duration-300">
                    {/* Item Image */}
                    <div className="relative w-full sm:w-40 aspect-square bg-black/5 rounded-sm overflow-hidden flex items-center justify-center p-4 border border-black/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 160px"
                        className="object-contain p-4"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-col flex-grow justify-between py-2">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-1">
                          <h3 className="font-serif text-xl text-black uppercase tracking-wide font-bold">
                            {item.name}
                          </h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest font-sans text-black/60 font-semibold">
                            <span>SKU: {item.sku || `AUR-Ag-${item.id}`}</span>
                            <span>Metal: {item.metal || item.material || "925 Sterling Silver"}</span>
                          </div>
                          <p className="text-black text-sm font-sans mt-1 font-medium">
                            Size: <span className="font-bold text-black">{item.selectedSize}</span>
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-black/40 hover:text-black transition-colors p-2 cursor-pointer" title="Save for Later">
                            <Bookmark className="w-4 h-4" strokeWidth={1.5} />
                          </button>
                          <button className="text-black/40 hover:text-black transition-colors p-2 cursor-pointer" title="Move to Wishlist">
                            <Heart className="w-4 h-4" strokeWidth={1.5} />
                          </button>
                          <button 
                            onClick={() => handleRemoveItem(item.id, item.selectedSize)}
                            className="text-black/40 hover:text-red-800 transition-colors p-2 cursor-pointer" 
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-black rounded-sm overflow-hidden bg-white">
                          <button 
                            onClick={() => handleQtyDecrease(item.id, item.selectedSize)}
                            className="p-2 hover:bg-black/10 transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4 text-black" />
                          </button>
                          <span className="px-4 font-sans text-sm text-black font-bold">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => handleQtyIncrease(item.id, item.selectedSize)}
                            className="p-2 hover:bg-black/10 transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4 text-black" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="flex flex-col items-end">
                          <span className="text-lg font-sans text-black font-bold">
                            ₹{((parseInt(item.discountedPrice.replace(/[^\d]/g, "")) || 0) * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-white/60 rounded-sm border border-dashed border-black shadow-md">
                  <p className="text-black font-serif text-xl mb-6 italic font-medium">Your bag is currently empty.</p>
                  <Link href="/silver" className="bg-black text-[#FAF6F0] px-8 py-4 uppercase tracking-[0.2em] text-xs font-sans hover:bg-[#736357] transition-colors rounded-sm inline-block font-bold shadow-md">
                    Explore Silver Collection
                  </Link>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-black text-[#FAF6F0] p-10 rounded-sm shadow-2xl flex flex-col gap-8 sticky top-32 border border-black">
                <h2 className="text-2xl font-serif uppercase tracking-[0.2em] border-b border-white/10 pb-6 font-bold text-white">
                  Summary
                </h2>

                <div className="flex flex-col gap-4 font-sans text-sm tracking-wide">
                  <div className="flex justify-between opacity-80 font-medium">
                    <span>Subtotal</span>
                    <span className="font-bold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between opacity-80 font-medium">
                    <span>Shipping</span>
                    <span className="font-bold text-green-400">{shipping === 0 ? "Complimentary" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between opacity-80 font-medium">
                    <span>Estimated GST (3%)</span>
                    <span className="font-bold">₹{estimatedTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xl font-serif border-t border-white/10 pt-6 mt-2 uppercase tracking-[0.1em] font-bold text-white">
                    <span>Total</span>
                    <span className="font-sans font-bold">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  onClick={() => alert(`Order placed successfully for a total of ₹${total.toLocaleString()}!`)}
                  className="w-full bg-[#FAF6F0] text-black py-5 px-8 font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.02] transition-all duration-300 mt-4 rounded-sm shadow-lg cursor-pointer"
                  disabled={cartItems.length === 0}
                >
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
      <Footer />
    </div>
  );
}
