"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, ShoppingBag, User, Heart, ShoppingCart, Star, Eye, X, Check,
  Shield, Sparkles, Award, Clock, Feather, ArrowRight, Camera,
  ChevronRight, ChevronLeft, Send, Sparkle, ShieldCheck, HelpCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Curated Premium CMF Gold Products Data
const goldProducts = [
  {
    id: 201,
    name: "CMF Wave Band",
    category: "Rings",
    originalPrice: "₹2,500",
    discountedPrice: "₹1,900",
    rating: 5,
    image: "/images/gold-collection-ring.png",
    description: "A beautifully sculpted fluid wave band finished in premium CMF Gold. Hand-polished to a mirror-like golden reflection that captures modern elegance.",
    sizes: ["6", "7", "8", "9", "10"],
    material: "Premium CMF Gold",
    finish: "18K Gold Electroplating"
  },
  {
    id: 202,
    name: "Aurelia Celestial Pendant",
    category: "Necklaces",
    originalPrice: "₹4,200",
    discountedPrice: "₹3,400",
    rating: 5,
    image: "/images/gold-collection-necklace.png",
    description: "An exquisite high-polish gold celestial pendant that lays perfectly against the skin, delivering a radiant, warm golden sheen.",
    sizes: ["16 inch", "18 inch"],
    material: "Premium CMF Gold",
    finish: "Micro-Polished Luster Polish"
  },
  {
    id: 203,
    name: "Royal Glow Droplet Hoops",
    category: "Earrings",
    originalPrice: "₹2,100",
    discountedPrice: "₹1,650",
    rating: 4,
    image: "/images/gold-collection-earring.png",
    description: "Classic drop hoops cast in structural alloy and finished with a thick, tarnish-resistant CMF Gold coating. Feather-light for daily wear.",
    sizes: ["Standard"],
    material: "Premium CMF Gold",
    finish: "Hypoallergenic Protective Shield"
  },
  {
    id: 204,
    name: "Eternal Tennis Link",
    category: "Bracelets",
    originalPrice: "₹5,800",
    discountedPrice: "₹4,800",
    rating: 5,
    image: "/images/bracelet.png",
    description: "A gorgeous line of brilliant hand-set diamond-cut stones on a robust links bracelet finished in luxurious, high-luster CMF Gold.",
    sizes: ["Small", "Medium", "Large"],
    material: "Premium CMF Gold",
    finish: "Premium 18K Electroplating"
  },
  {
    id: 205,
    name: "Imperial Solar Medallion",
    category: "Pendants",
    originalPrice: "₹2,800",
    discountedPrice: "₹2,200",
    rating: 5,
    image: "/images/pendant.png",
    description: "A gorgeous gold medallion depicting fine sunburst details, suspended on a whisper-thin CMF Gold link chain. A statement of modern fashion.",
    sizes: ["18 inch", "20 inch"],
    material: "Premium CMF Gold",
    finish: "Brushed Satin and Mirror Polish"
  },
  {
    id: 206,
    name: "Monarch Liquid Chain",
    category: "Chains",
    originalPrice: "₹3,900",
    discountedPrice: "₹3,100",
    rating: 4,
    image: "/images/necklace.png",
    description: "A classic liquid-style flat herringbone chain engineered with precision golden links. Reflects light majestically with every movement.",
    sizes: ["16 inch", "18 inch", "20 inch"],
    material: "Premium CMF Gold",
    finish: "Anti-Tarnish Protective Shield"
  },
  {
    id: 207,
    name: "Crown Solitaire Glow",
    category: "Rings",
    originalPrice: "₹4,900",
    discountedPrice: "₹3,950",
    rating: 5,
    image: "/images/ring.png",
    description: "A stunning round solitaire crown ring elevated in a gold basket, plated with deep warm 18K CMF Gold over structural sterling base.",
    sizes: ["6", "7", "8"],
    material: "Premium CMF Gold",
    finish: "18K Gold Mirror Finish"
  },
  {
    id: 208,
    name: "Modernist Crescent Studs",
    category: "Earrings",
    originalPrice: "₹1,800",
    discountedPrice: "₹1,350",
    rating: 4,
    image: "/images/earring.png",
    description: "Feather-light, minimal crescent-shaped studs finished in premium CMF Gold. Ergonomically contoured for optimal comfort and everyday luxury.",
    sizes: ["Standard"],
    material: "Premium CMF Gold",
    finish: "Anti-Oxidation Luster Shield"
  }
];

// 6 Luxury Categories with warm descriptions
const featuredCategories = [
  {
    title: "Gold Rings",
    description: "Sculpted bands finished in rich gold, crafted for everlasting promises.",
    image: "/images/gold-collection-ring.png",
    tag: "Rings"
  },
  {
    title: "Gold Necklaces",
    description: "Delicate neckpieces reflecting pure light, warmth, and opulence.",
    image: "/images/gold-collection-necklace.png",
    tag: "Necklaces"
  },
  {
    title: "Gold Earrings",
    description: "Timeless drop earrings and studs designed to frame your natural radiance.",
    image: "/images/gold-collection-earring.png",
    tag: "Earrings"
  },
  {
    title: "Gold Bracelets",
    description: "Artisan gold links that wrap your wrist in premium luxury.",
    image: "/images/bracelet.png",
    tag: "Bracelets"
  },
  {
    title: "Gold Chains",
    description: "Liquid-gold statement chains engineered for everyday styling versatility.",
    image: "/images/necklace.png",
    tag: "Chains"
  },
  {
    title: "Gold Pendants",
    description: "Symbolic warm golden charms designed to carry your unique stories.",
    image: "/images/pendant.png",
    tag: "Pendants"
  }
];

// 6 Why Choose CMF Gold Features list
const whyChooseFeatures = [
  {
    title: "Luxury Finish",
    description: "Thick layers of premium 18K gold are chemically bonded to deliver an identical solid gold appearance.",
    icon: Award
  },
  {
    title: "Tarnish Resistant",
    description: "Sealed with a micro-thin protective shield to prevent tarnish and maintain a luminous golden reflection.",
    icon: Sparkles
  },
  {
    title: "Lightweight Comfort",
    description: "Engineered using high-strength structural alloys, ensuring comfort without sacrificing visual weight.",
    icon: Feather
  },
  {
    title: "Modern Elegance",
    description: "Designed by master creators to bridge classic heritage aesthetics with high-fashion minimal trends.",
    icon: Sparkle
  },
  {
    title: "Premium Craftsmanship",
    description: "Individually micro-polished and tested for gold thickness, weight stability, and hallmark alignment.",
    icon: ShieldCheck
  },
  {
    title: "Everyday Luxury",
    description: "Designed for resilience, allowing you to seamlessly integrate premium gold brilliance into daily wear.",
    icon: Clock
  }
];

// Gold-themed Testimonials data
const testimonials = [
  {
    quote: "The gold color is absolutely gorgeous, and the luster is identical to my 18K solid jewelry. I was highly skeptical of CMF Gold, but it has not tarnished after months of constant wear!",
    author: "Elena R.",
    location: "Mumbai",
    rating: 5,
    initials: "ER"
  },
  {
    quote: "Stunning craftsmanship and incredible weight. The Aurelia Celestial Pendant catches the light majestically, and the hypoallergenic base keeps my sensitive skin completely irritation-free.",
    author: "Sofia G.",
    location: "Delhi",
    rating: 5,
    initials: "SG"
  },
  {
    quote: "I am absolutely in love with the Monarch Liquid Chain. The brushed satin gold finish looks extremely high-fashion and expensive. Truly a world-class luxury shopping experience.",
    author: "Mira T.",
    location: "Bangalore",
    rating: 5,
    initials: "MT"
  }
];

export default function PremiumGoldCollectionPage() {
  // Navigation & Menu States
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // E-commerce Functional States
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Interactive UI Feedback States
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info"); // 'success' | 'info' | 'wishlist'
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");

  // Load initial cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("aurelia-cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        const mapped = parsed.map(item => ({
          ...item,
          size: item.size || item.selectedSize || "Standard"
        }));
        setCart(mapped);
      } catch (e) {
        console.error("Error reading cart from localStorage", e);
      }
    }
  }, []);

  // Sticky Navbar reveal controller
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 120) {
        setShowNavbar(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false); // Hide on scroll down
        } else {
          setShowNavbar(true); // Show on scroll up
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Utility toast messenger
  const triggerToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage("");
    }, 3500);
  };

  // Add to Cart
  const handleAddToCart = (product, sizeSelected = "Standard") => {
    setCart((prev) => {
      let updated;
      const exists = prev.find((item) => item.id === product.id && item.size === sizeSelected);
      if (exists) {
        updated = prev.map((item) =>
          (item.id === product.id && item.size === sizeSelected)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updated = [...prev, { ...product, size: sizeSelected, quantity: 1 }];
      }

      // Save formatted array to localStorage for /cart page
      const formatted = updated.map(item => ({
        ...item,
        selectedSize: item.size || "Standard",
        metal: item.material || "Premium CMF Gold",
        sku: item.sku || `AUR-Au-${item.id}`
      }));
      localStorage.setItem("aurelia-cart", JSON.stringify(formatted));
      return updated;
    });
    triggerToast(`Added ${product.name} to Cart`, "success");
  };

  // Toggle Wishlist
  const handleToggleWishlist = (product) => {
    const isFav = wishlist.some((item) => item.id === product.id);
    if (isFav) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      triggerToast(`Removed ${product.name} from Wishlist`, "info");
    } else {
      setWishlist((prev) => [...prev, product]);
      triggerToast(`Saved ${product.name} to Wishlist`, "wishlist");
    }
  };

  // Filtered Products for Best Sellers section
  const filteredBestSellers = activeCategoryFilter === "All"
    ? goldProducts
    : goldProducts.filter(p => p.category === activeCategoryFilter);

  // Smooth Scroll Helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F3E8] text-[#85766C] font-sans antialiased overflow-x-hidden relative selection:bg-[#5B4636] selection:text-white">

      <Navbar />

      {/* ─── FLOATABLE NOTIFICATION TOASTS ─── */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-55%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 30, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50 transform -translate-x-1/2 px-6 py-4 rounded-sm bg-[#5B4636] text-white shadow-2xl border border-[#E7D7C5]/30 flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-wider"
          >
            {toastType === "success" && <ShoppingCart className="w-4 h-4 text-[#C89B5E]" />}
            {toastType === "wishlist" && <Heart className="w-4 h-4 text-red-400 fill-red-400" />}
            {toastType === "info" && <Sparkle className="w-4 h-4 text-[#C89B5E] animate-spin" />}
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">

        {/* ─── 1. HERO BANNER SECTION ─── */}
        <section className="relative w-full min-h-[85vh] flex items-center py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-br from-[#F9F3E8] via-[#FFF8F0] to-[#E7D7C5]/40">

          {/* Soft Golden Glow & Lights */}
          <div className="absolute top-1/4 left-1/3 w-[35vw] h-[35vw] bg-radial from-[#E7C89A]/30 to-transparent opacity-70 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-[45vw] h-[45vw] bg-radial from-[#C89B5E]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

          {/* Floating animated gold particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[1, 2, 3, 4, 5].map((item, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5 + idx * 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  top: `${15 + idx * 16}%`,
                  left: `${10 + idx * 20}%`,
                }}
                className="absolute w-2 h-2 bg-gradient-to-r from-[#C89B5E] to-white rounded-full opacity-35 shadow-[0_0_10px_#C89B5E]"
              />
            ))}
          </div>

          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">

            {/* Left side: Premium Text Editorial Layout */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <span className="w-8 h-[1px] bg-[#C89B5E]" />
                <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] text-[#C89B5E] font-extrabold uppercase">
                  PREMIUM CMF GOLD
                </span>
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#5B4636] font-light leading-[1.05] tracking-wide mb-6 uppercase">
                CMF Gold <br className="hidden sm:inline" />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#5B4636] via-[#85766C] to-[#C89B5E]">Collection</span>
              </h2>

              <p className="font-serif italic text-lg md:text-2xl text-[#C89B5E] leading-relaxed mb-6 font-medium max-w-xl">
                “Luxury gold finish crafted for modern elegance.”
              </p>

              <p className="font-sans text-sm md:text-base text-[#85766C] leading-relaxed max-w-xl mb-10 font-medium">
                Experience timeless beauty with premium CMF Gold jewelry designed to elevate every occasion. Individually styled with rich golden reflections and soft, premium lighting that represents a modern fashion statement.
              </p>

              {/* Action Buttons with Warm Brushed Metal Transitions */}
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection("categories")}
                  className="bg-[#5B4636] text-white hover:bg-black font-sans text-xs font-bold tracking-[0.25em] uppercase py-4 md:py-5 px-8 md:px-10 rounded-sm shadow-xl hover:shadow-[#C89B5E]/10 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer border-0"
                >
                  Explore Collection
                </button>
                <button
                  onClick={() => scrollToSection("best-sellers")}
                  className="border border-[#5B4636] text-[#5B4636] hover:bg-[#5B4636] hover:text-white font-sans text-xs font-bold tracking-[0.25em] uppercase py-4 md:py-5 px-8 md:px-10 rounded-sm active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer bg-transparent"
                >
                  Shop Luxury Pieces
                </button>
              </div>
            </motion.div>

            {/* Right side: High-contrast large campaign model image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-[3660px]  p-1 shadow-[0_30px_70px_rgba(91,70,54,0.12)] rounded-sm group">

                {/* Floating Gold Leaf Overlay */}
                <div className="absolute top-48 -right-49 w-106 h-136 rotate-245 opacity-90 z-20 pointer-events-none group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000">
                  <Image
                    src="/images/leaf-gold.png"
                    alt="Gold Decorative Leaf"
                    fill
                    sizes="350px"
                    className="object-contain"
                  />
                </div>

                <div className="relative w-full h-full flex items-center justify-center rounded-sm overflow-hidden bg-[#FFFDF9]">
                  <Image
                    src="/images/girl_in_gold.png"
                    alt="CMF Gold Campaign Model"
                    fill
                    priority
                    sizes="(max-width: 3024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Hallmark Badge */}
                <div className="absolute bottom-6 left-6 bg-[#5B4636] text-white px-3.5 py-1 font-serif text-[10px] tracking-[0.2em] uppercase font-bold shadow-md rounded-sm">
                  Hallmark Au CMF
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── 2. FEATURED CATEGORIES SECTION ─── */}
        <section id="categories" className="py-24 px-6 md:px-12 lg:px-20 bg-[#FFFDF9] border-y border-[#E7D7C5]/40">
          <div className="max-w-[1400px] mx-auto">

            {/* Editorial Heading */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-[#C89B5E] uppercase font-extrabold block mb-3">
                Curated Luxury Lines
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-[#5B4636] tracking-[0.1em] uppercase font-bold">
                Featured Categories
              </h3>
              <div className="w-12 h-[1px] bg-[#E7D7C5] mx-auto mt-5" />
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCategories.map((cat, idx) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    key={idx}
                    className="group flex flex-col justify-between p-8 bg-[#FFF8F0] border border-[#E7D7C5]/40 rounded-sm hover:border-[#C89B5E]/60 hover:shadow-[0_20px_50px_rgba(200,155,94,0.08)] transition-all duration-500 cursor-pointer"
                  >
                    <div>
                      {/* Category Image Box */}
                      <div className="relative w-full aspect-square bg-[#FFFDF9] rounded-sm overflow-hidden flex items-center justify-center p-6 mb-6 border border-[#E7D7C5]/30">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                          style={{ mixBlendMode: "multiply" }}
                        />
                      </div>

                      <span className="font-sans text-[9px] tracking-widest text-[#C89B5E] uppercase block mb-1 font-bold">
                        CMF Gold Collection
                      </span>
                      <h4 className="font-serif text-xl md:text-2xl text-[#5B4636] font-semibold uppercase tracking-wide mb-2 group-hover:text-[#C89B5E] transition-colors">
                        {cat.title}
                      </h4>
                      <p className="font-sans text-xs text-[#85766C] leading-relaxed mb-6 font-medium">
                        {cat.description}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveCategoryFilter(cat.tag);
                        scrollToSection("best-sellers");
                      }}
                      className="font-sans text-[10px] tracking-[0.25em] text-[#5B4636] uppercase font-bold flex items-center gap-2 group-hover:text-[#C89B5E] transition-all bg-transparent border-0 cursor-pointer text-left"
                    >
                      <span>Explore {cat.tag}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 3. WHAT IS CMF GOLD SECTION ─── */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FFF8F0]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left side: Premium macro close-up generated image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-square w-full max-w-[550px] shadow-[0_20px_50px_rgba(91,70,54,0.1)] rounded-sm border border-[#E7D7C5]/40 overflow-hidden bg-[#FFFDF9]">
                <Image
                  src="/images/gold_what_is_cmf.png"
                  alt="Gold Jewelry Macro Photography"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-[4000ms]"
                />

                {/* Circular Seal Overlay */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C89B5E]/50 rounded-full flex flex-col items-center justify-center bg-[#FFFDF9]/95 backdrop-blur-sm shadow-xl rotate-12 select-none z-10 pointer-events-none p-3 text-center">
                  <div className="border border-dashed border-[#C89B5E]/40 w-full h-full rounded-full flex flex-col items-center justify-center p-2">
                    <span className="font-serif text-[10px] tracking-[0.25em] text-[#C89B5E] uppercase font-bold leading-none block mb-0.5">CMF AU</span>
                    <span className="text-[7px] text-[#85766C] uppercase tracking-widest leading-none block">CERTIFIED</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side: Modern Educational Layout */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <span className="w-8 h-[1px] bg-[#C89B5E]" />
                <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] text-[#C89B5E] font-extrabold uppercase">
                  METALS & CRAFTSMANSHIP
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-5xl text-[#5B4636] tracking-[0.05em] uppercase font-bold leading-tight mb-8">
                What is CMF Gold?
              </h3>

              <div className="w-full flex flex-col gap-6">
                <div className="flex gap-4 items-start pb-5 border-b border-[#E7D7C5]/40">
                  <div className="w-2 h-2 rounded-full bg-[#C89B5E] mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#5B4636] uppercase tracking-wider mb-2">
                      Premium Gold Finish
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-[#85766C] leading-relaxed">
                      CMF Gold utilizes a state-of-the-art molecular bonding process where thick layers of pure 18K gold are securely electroplated over high-durability structural alloy, giving the identical luxury sheen of heavy solid gold.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start pb-5 border-b border-[#E7D7C5]/40">
                  <div className="w-2 h-2 rounded-full bg-[#C89B5E] mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#5B4636] uppercase tracking-wider mb-2">
                      Modern Craftsmanship
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-[#85766C] leading-relaxed">
                      Each piece undergoes individual thermal treatment and precise micro-polishing to remove imperfections and create a flawless surface before the 18K golden deposition process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#C89B5E] mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#5B4636] uppercase tracking-wider mb-2">
                      Long-lasting Shine & Comfort
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-[#85766C] leading-relaxed">
                      Equipped with a micro-thin tarnish-resistant protective seal. Fully hypoallergenic, lightweight, tarnish resistant, and ergonomically balanced for a luxury feel and worry-free wear.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── 4. WHY CHOOSE CMF GOLD SECTION ─── */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#F9F3E8] border-t border-[#E7D7C5]/40">
          <div className="max-w-[1400px] mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-sans text-[10px] tracking-[0.3em] text-[#C89B5E] uppercase font-extrabold block mb-3">
                Uncompromising Quality
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-[#5B4636] tracking-[0.1em] uppercase font-bold">
                Why Choose CMF Gold
              </h3>
              <div className="w-12 h-[1px] bg-[#E7D7C5] mx-auto mt-5" />
            </div>

            {/* Grid of features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    key={idx}
                    className="group bg-[#FFFDF9] border border-[#E7D7C5]/50 p-8 rounded-sm hover:shadow-[0_15px_40px_rgba(200,155,94,0.06)] hover:border-[#C89B5E]/50 transition-all duration-300 flex flex-col items-start text-left"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#FFF8F0] flex items-center justify-center mb-6 border border-[#E7D7C5]/30 group-hover:bg-[#C89B5E] transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-[#C89B5E] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#5B4636] uppercase tracking-wider mb-3">
                      {feat.title}
                    </h4>

                    <p className="font-sans text-xs md:text-sm text-[#85766C] leading-relaxed">
                      {feat.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 5. BEST SELLING CMF GOLD PRODUCTS ─── */}
        <section id="best-sellers" className="py-24 px-6 md:px-12 lg:px-20 bg-[#FFFDF9] border-t border-[#E7D7C5]/40">
          <div className="max-w-[1400px] mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-xl text-left">
                <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] text-[#C89B5E] uppercase font-extrabold block mb-3">
                  Aurelia Gold Catalog
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-[#5B4636] uppercase tracking-[0.05em] font-bold">
                  Best Sellers
                </h3>
              </div>

              {/* Dynamic Filtering Tabs */}
              <div className="flex flex-wrap gap-2">
                {["All", "Rings", "Necklaces", "Earrings", "Bracelets"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveCategoryFilter(tab)}
                    className={`px-5 py-2.5 rounded-sm font-sans text-[10px] font-bold uppercase tracking-widest cursor-pointer border transition-all duration-300 ${activeCategoryFilter === tab
                      ? "bg-[#5B4636] text-white border-[#5B4636]"
                      : "bg-transparent text-[#5B4636] border-[#E7D7C5] hover:border-[#5B4636]"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredBestSellers.map((product) => {
                  const isWish = wishlist.some(item => item.id === product.id);
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      key={product.id}
                      className="group bg-[#FFF8F0] border border-[#E7D7C5]/40 rounded-sm p-5 hover:border-[#C89B5E]/50 hover:shadow-[0_20px_45px_rgba(200,155,94,0.06)] transition-all duration-500 flex flex-col justify-between relative"
                    >
                      {/* Wishlist Icon */}
                      <button
                        onClick={() => handleToggleWishlist(product)}
                        className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 shadow-md border border-[#E7D7C5]/30 flex items-center justify-center text-[#5B4636] hover:scale-110 active:scale-[0.9] hover:bg-white transition-all cursor-pointer"
                        aria-label="Toggle Wishlist"
                      >
                        <Heart className={`w-3.5 h-3.5 transition-colors ${isWish ? "fill-red-500 text-red-500" : "text-[#5B4636]"}`} />
                      </button>

                      {/* Image Box */}
                      <div className="w-full aspect-square bg-[#FFFDF9] rounded-sm overflow-hidden mb-5 border border-[#E7D7C5]/20 relative flex items-center justify-center p-4">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 20vw"
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                            style={{ mixBlendMode: "multiply" }}
                          />

                          {/* Slide-up Quick View Button on Hover */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 flex items-center justify-center">
                            <button
                              onClick={() => setQuickViewProduct(product)}
                              className="bg-[#5B4636] text-white hover:bg-black text-[9px] tracking-[0.2em] font-sans font-bold uppercase py-2.5 px-5 shadow-md border border-[#E7D7C5]/10 rounded-sm cursor-pointer inline-flex items-center gap-1.5 transition-all"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Quick View</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Details & Action */}
                      <div className="w-full flex-grow flex flex-col justify-between">
                        <div>
                          {/* Stars */}
                          <div className="flex items-center gap-0.5 mb-1.5 text-amber-400">
                            {[...Array(5)].map((_, starIdx) => (
                              <Star
                                key={starIdx}
                                className={`w-3 h-3 ${starIdx < product.rating ? "fill-amber-400" : "text-gray-200"}`}
                              />
                            ))}
                          </div>

                          <h4 className="font-serif text-sm md:text-base text-[#5B4636] uppercase tracking-wider font-bold group-hover:text-[#C89B5E] transition-colors duration-300 truncate mb-1">
                            {product.name}
                          </h4>

                          <p className="text-[10px] text-[#85766C]/70 font-sans tracking-wide mb-4 font-semibold">
                            {product.material} • {product.finish}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-[#E7D7C5]/60 mt-auto">
                          <div className="flex items-baseline gap-2">
                            <span className="font-sans text-sm font-bold text-[#5B4636]">
                              {product.discountedPrice}
                            </span>
                            <span className="font-sans text-[10px] text-[#85766C]/50 line-through">
                              {product.originalPrice}
                            </span>
                          </div>

                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-[#C89B5E] hover:bg-[#5B4636] text-white p-2.5 rounded-sm hover:scale-105 active:scale-[0.97] transition-all cursor-pointer border-0 shadow-md"
                            aria-label="Add to cart"
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ─── 6. LUXURY EDITORIAL BANNER ─── */}
        <section className="relative w-auto h-[60vh] md:h-[65vh] overflow-hidden flex items-center justify-center text-center bg-black border-y border-[#E7D7C5]/40 select-none">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gold_what_is_cmf.png"
              alt="Luxury Gold Campaign Showcase"
              fill
              sizes="100vw"
              className="object-cover object-center brightness-[0.4] contrast-[1.05] transition-transform duration-[12000ms] hover:scale-105"
            />
            {/* Dark warm campaign gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/85 pointer-events-none" />
          </div>

          {/* Luminous soft golden blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-radial from-[#C89B5E]/20 to-transparent rounded-full blur-[90px] pointer-events-none" />

          {/* Text Overlays */}
          <div className="relative z-10 max-w-4xl px-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <span className="font-sans text-[10px] md:text-xs tracking-[0.45em] text-[#C89B5E] uppercase font-bold block mb-4">
                AURELIA EDITORIAL CAMPAIGN
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-[0.12em] uppercase leading-tight mt-16">
                Crafted in Gold. <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF8F0] to-[#C89B5E]">Designed for Elegance.</span>
              </h2>
              <p className="font-sans text-xs md:text-sm text-white/70 max-w-md mx-auto leading-relaxed tracking-wider uppercase font-medium mt-6">
                Discover the pure, uninterrupted shine of high-fashion jewelry. Welcoming a new standard of 18K electroplated gold design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── 7. CUSTOMER TESTIMONIALS SECTION ─── */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FFF8F0] border-b border-[#E7D7C5]/40">
          <div className="max-w-[1400px] mx-auto">

            {/* Heading */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-sans text-[10px] tracking-[0.3em] text-[#C89B5E] uppercase font-extrabold block mb-3">
                Voices of Satisfaction
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-[#5B4636] tracking-[0.1em] uppercase font-bold">
                Customer Testimonials
              </h3>
              <div className="w-12 h-[1px] bg-[#E7D7C5] mx-auto mt-5" />
            </div>

            {/* Testimonials grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={idx}
                  className="bg-[#FFFDF9] border border-[#E7D7C5] p-8 rounded-sm hover:shadow-[0_15px_40px_rgba(200,155,94,0.05)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 text-amber-400 mb-6">
                      {[...Array(test.rating)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-serif italic text-sm md:text-base text-[#85766C] leading-relaxed mb-6 font-medium">
                      “{test.quote}”
                    </p>
                  </div>

                  {/* Customer details */}
                  <div className="flex items-center gap-4 pt-6 border-t border-[#E7D7C5] mt-6">
                    <div className="w-10 h-10 rounded-full bg-[#5B4636] text-white flex items-center justify-center font-sans font-bold text-xs">
                      {test.initials}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs text-[#5B4636] uppercase tracking-widest">
                        {test.author}
                      </h4>
                      <span className="text-[10px] text-[#85766C]/60 uppercase tracking-widest font-semibold block">
                        Verified Buyer • {test.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* ─── PREMIUM QUICK VIEW MODAL ─── */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            {/* Backdrop shadow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewProduct(null)}
              className="absolute inset-0 bg-[#5B4636]/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#FFFDF9] border border-[#E7D7C5] rounded-sm p-6 md:p-10 w-full max-w-[900px] shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 p-2 text-[#5B4636] hover:text-[#C89B5E] transition-colors rounded-full hover:bg-[#FFF8F0] cursor-pointer border-0"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                {/* Product Image Frame */}
                <div className="md:col-span-6 relative aspect-square bg-[#FFF8F0] border border-[#E7D7C5]/50 rounded-sm overflow-hidden flex items-center justify-center p-6">
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain p-6"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>

                {/* Content Segment */}
                <div className="md:col-span-6 flex flex-col items-start text-left">
                  <span className="font-sans text-[9px] tracking-widest text-[#C89B5E] uppercase block mb-1 font-bold">
                    {quickViewProduct.category}
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl text-[#5B4636] font-bold uppercase tracking-wider mb-2">
                    {quickViewProduct.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mb-4 text-amber-400">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        className={`w-3.5 h-3.5 ${sIdx < quickViewProduct.rating ? "fill-amber-400" : "text-gray-200"}`}
                      />
                    ))}
                    <span className="text-[10px] text-[#85766C]/60 ml-2 font-sans font-bold uppercase">5.0 (32 Reviews)</span>
                  </div>

                  {/* Price info */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="font-sans text-xl font-bold text-[#5B4636]">
                      {quickViewProduct.discountedPrice}
                    </span>
                    <span className="font-sans text-sm text-[#85766C]/50 line-through">
                      {quickViewProduct.originalPrice}
                    </span>
                    <span className="text-[10px] tracking-wider text-green-600 bg-green-50 px-2 py-0.5 border border-green-200 rounded-sm font-sans font-extrabold uppercase">
                      Special Offer
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-[#85766C] leading-relaxed mb-6 font-semibold">
                    {quickViewProduct.description}
                  </p>

                  {/* Specs */}
                  <div className="w-full bg-[#FFF8F0] border border-[#E7D7C5] p-4 rounded-sm flex flex-col gap-2 font-sans text-xs font-semibold mb-6">
                    <div className="flex justify-between">
                      <span className="text-[#85766C]/60">Composition:</span>
                      <span className="text-[#5B4636]">{quickViewProduct.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#85766C]/60">Protective Coating:</span>
                      <span className="text-[#5B4636]">{quickViewProduct.finish}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 w-full">
                    <button
                      onClick={() => {
                        handleAddToCart(quickViewProduct);
                        setQuickViewProduct(null);
                      }}
                      className="flex-grow bg-[#5B4636] hover:bg-black text-white font-sans text-xs font-bold tracking-[0.25em] uppercase py-4 rounded-sm shadow-md transition-all active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2 border-0"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add To Cart</span>
                    </button>
                    <button
                      onClick={() => {
                        handleToggleWishlist(quickViewProduct);
                        setQuickViewProduct(null);
                      }}
                      className="border border-[#E7D7C5] text-[#5B4636] hover:bg-[#FFF8F0] p-4 rounded-sm transition-all cursor-pointer bg-transparent"
                      aria-label="Add to Wishlist"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
