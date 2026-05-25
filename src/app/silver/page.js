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

// Curated 925 Sterling Silver Products Data
const silverProducts = [
  {
    id: 101,
    name: "Argent Wave Band",
    category: "Rings",
    originalPrice: "₹1,800",
    discountedPrice: "₹1,400",
    rating: 5,
    image: "/images/silver-couple-rings.png",
    description: "A sculpted fluid band crafted in high-polish 925 sterling silver, representing the continuous ebb and flow of life's precious moments.",
    sizes: ["6", "7", "8", "9", "10"],
    material: "925 Sterling Silver",
    finish: "Rhodium Plating (Anti-Tarnish)"
  },
  {
    id: 102,
    name: "Elysian Silver Choker",
    category: "Necklaces",
    originalPrice: "₹2,900",
    discountedPrice: "₹2,300",
    rating: 5,
    image: "/images/necklace.png",
    description: "An elegant, closely-fitted silver collar holding a series of brilliant-cut micro-diamonds. Captures the light majestically at every angle.",
    sizes: ["14 inch", "16 inch"],
    material: "925 Sterling Silver",
    finish: "Platinum-Guard Polish"
  },
  {
    id: 103,
    name: "Aurora Droplet Earrings",
    category: "Earrings",
    originalPrice: "₹1,500",
    discountedPrice: "₹1,100",
    rating: 4,
    image: "/images/earring.png",
    description: "Handcrafted drop earrings featuring a tear-shaped cubic zirconia suspended on a delicate sterling silver wire. Subtle luxury for everyday wear.",
    sizes: ["Standard"],
    material: "925 Sterling Silver",
    finish: "Hypoallergenic E-Coating"
  },
  {
    id: 104,
    name: "Starlight Tennis Bracelet",
    category: "Bracelets",
    originalPrice: "₹4,600",
    discountedPrice: "₹3,800",
    rating: 5,
    image: "/images/bracelet.png",
    description: "A continuous strand of perfectly matched brilliant gemstones claw-set in fine 925 sterling silver. Designed to grace the wrist with timeless sparkle.",
    sizes: ["Small", "Medium", "Large"],
    material: "925 Sterling Silver",
    finish: "Premium Rhodium Finish"
  },
  {
    id: 105,
    name: "Luna Phase Pendant",
    category: "Pendants",
    originalPrice: "₹1,650",
    discountedPrice: "₹1,250",
    rating: 4,
    image: "/images/pendant.png",
    description: "An intricate pendant depicting the delicate phases of the moon, inset with sparkling diamond accents and suspended on a whisper-thin chain.",
    sizes: ["18 inch", "20 inch"],
    material: "925 Sterling Silver",
    finish: "Hand-Polished High Shine"
  },
  {
    id: 106,
    name: "Ag925 Herringbone Chain",
    category: "Chains",
    originalPrice: "₹2,500",
    discountedPrice: "₹1,950",
    rating: 5,
    image: "/images/necklace.png",
    description: "A classic liquid-like flat herringbone chain engineered with interlinked silver scales. Lays perfectly flat on the collarbone for a sleek look.",
    sizes: ["16 inch", "18 inch", "20 inch"],
    material: "925 Sterling Silver",
    finish: "Mirror-Polished Rhodium"
  },
  {
    id: 107,
    name: "Solitaire Platinum Halo",
    category: "Rings",
    originalPrice: "₹5,100",
    discountedPrice: "₹4,200",
    rating: 5,
    image: "/images/ring.png",
    description: "A breathtaking ring featuring a round-cut central stone elevated in a delicate silver basket, surrounded by a double halo of glistening gems.",
    sizes: ["6", "7", "8"],
    material: "925 Sterling Silver",
    finish: "Platinum Overlay"
  },
  {
    id: 108,
    name: "Minimalist Silver Hoops",
    category: "Earrings",
    originalPrice: "₹1,250",
    discountedPrice: "₹950",
    rating: 4,
    image: "/images/earring.png",
    description: "Feather-light, medium-sized sleek silver hoops built with an invisible click closure. The ultimate tarnish-resistant staple for daily style.",
    sizes: ["Medium (25mm)"],
    material: "925 Sterling Silver",
    finish: "Anti-Oxidation Coating"
  }
];

// 6 Featured Categories with images and short details
const featuredCategories = [
  {
    title: "Silver Rings",
    description: "Sculpted masterpieces crafted for everlasting memories.",
    image: "/images/ring.png",
    tag: "Rings"
  },
  {
    title: "Silver Necklaces",
    description: "Delicate contours that capture the light at every turn.",
    image: "/images/necklace.png",
    tag: "Necklaces"
  },
  {
    title: "Silver Earrings",
    description: "Timeless drops and hoops to frame your natural radiance.",
    image: "/images/earring.png",
    tag: "Earrings"
  },
  {
    title: "Silver Bracelets",
    description: "Artisan links that dance gracefully with your movements.",
    image: "/images/bracelet.png",
    tag: "Bracelets"
  },
  {
    title: "Silver Chains",
    description: "Pure 925 links engineered for styling versatility.",
    image: "/images/necklace.png",
    tag: "Chains"
  },
  {
    title: "Silver Pendants",
    description: "Meaningful amulets to carry your unique story.",
    image: "/images/pendant.png",
    tag: "Pendants"
  }
];

// Why Choose Features list
const whyChooseFeatures = [
  {
    title: "Hypoallergenic",
    description: "100% free from nickel and lead. Safe and gentle for even the most sensitive skin types.",
    icon: ShieldCheck
  },
  {
    title: "Tarnish Resistant",
    description: "Shielded with premium rhodium plating to maintain its dazzling white gold luster.",
    icon: Sparkles
  },
  {
    title: "Premium Craftsmanship",
    description: "Individually hand-polished and detailed by master artisans with decades of heritage.",
    icon: Award
  },
  {
    title: "Everyday Wear",
    description: "Engineered with optimal silver purity and copper strength for daily durability.",
    icon: Clock
  },
  {
    title: "Lightweight Comfort",
    description: "Ergonomically contoured designs that feel feather-light and fit like a second skin.",
    icon: Feather
  },
  {
    title: "Authentic 925 Hallmark",
    description: "Each item carries the official 'Ag925' stamp, certifying maximum silver purity.",
    icon: Check
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "The shine on the Elysian Choker is absolutely brilliant. It feels exactly like white gold but with the perfect weight of sterling silver. I wear it every single day!",
    author: "Eleanor V.",
    location: "Mumbai",
    rating: 5,
    initials: "EV"
  },
  {
    quote: "Aurelia has completely redefined silver jewelry for me. The hypoallergenic quality is real—no irritation at all, and the tarnish resistance has kept it completely brand new.",
    author: "Charlotte M.",
    location: "Delhi",
    rating: 5,
    initials: "CM"
  },
  {
    quote: "I ordered the Argent Wave rings and was blown away by the level of craftsmanship. The hallmark is beautifully engraved, and the premium packaging was pure luxury.",
    author: "Isabella K.",
    location: "Bangalore",
    rating: 5,
    initials: "IK"
  }
];


export default function PremiumSilverCollectionPage() {
  // Navigation & Menu States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // E-commerce Functional States
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Interactive UI Feedback States
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info"); // 'success' | 'info' | 'wishlist'
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
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
        metal: item.material || "925 Sterling Silver",
        sku: item.sku || `AUR-Ag-${item.id}`
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

  // Newsletter Submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    triggerToast("Thank you for joining the Silver Society!", "success");
    setNewsletterEmail("");
  };

  // Filtered Products for Best Sellers section
  const filteredBestSellers = activeCategoryFilter === "All"
    ? silverProducts
    : silverProducts.filter(p => p.category === activeCategoryFilter);

  // Smooth Scroll Helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-body font-sans antialiased overflow-x-hidden relative selection:bg-brand-heading selection:text-brand-light">

      <Navbar />

      {/* ─── FLOATABLE NOTIFICATION TOASTS ─── */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-55%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 30, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50 transform -translate-x-1/2 px-6 py-4 rounded-sm bg-brand-heading text-brand-light shadow-2xl border border-brand-border/30 flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-wider"
          >
            {toastType === "success" && <ShoppingCart className="w-4 h-4 text-brand-btn" />}
            {toastType === "wishlist" && <Heart className="w-4 h-4 text-red-400 fill-red-400" />}
            {toastType === "info" && <Sparkle className="w-4 h-4 text-brand-btn animate-spin" />}
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">

        {/* ─── 1. HERO BANNER SECTION ─── */}
        <section className="relative w-full min-h-[80vh] flex items-center py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-br from-brand-bg via-[#FAF6F0] to-brand-border/30">

          {/* Subtle Glow & Decorative Grayscale Gradients */}
          <div className="absolute top-1/4 left-1/3 w-[30vw] h-[30vw] bg-radial from-white to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-[45vw] h-[45vw] bg-radial from-brand-btn/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

          {/* Floating animated abstract brand particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[1, 2, 3, 4].map((item, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 6 + idx * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  top: `${20 + idx * 18}%`,
                  left: `${15 + idx * 22}%`,
                }}
                className="absolute w-2.5 h-2.5 bg-gradient-to-r from-brand-btn to-white rounded-full opacity-20 shadow-[0_0_10px_var(--color-brand-btn)]"
              />
            ))}
          </div>

          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">

            {/* Left side: Premium Text Editorial Layout */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <span className="w-8 h-[1px] bg-brand-btn" />
                <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] text-brand-btn font-extrabold uppercase">
                  PREMIUM SILVER COLLECTION
                </span>
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-heading font-light leading-[1.05] tracking-wide mb-6 uppercase">
                925 Sterling <br className="hidden sm:inline" />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-heading via-brand-body to-brand-btn">Silver</span>
              </h2>

              <p className="font-serif italic text-lg md:text-2xl text-brand-btn leading-relaxed mb-6 font-medium max-w-xl">
                “Crafted for timeless elegance and everyday luxury.”
              </p>

              <p className="font-sans text-sm md:text-base text-brand-body leading-relaxed max-w-xl mb-10">
                Discover handcrafted sterling silver jewelry designed with precision, comfort, and modern sophistication. Individually treated with advanced anti-tarnish rhodium shielding for lasting brilliance.
              </p>

              {/* Action Buttons with Brushed Metal Micro-Transitions */}
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection("categories")}
                  className="bg-brand-heading text-brand-light hover:bg-black font-sans text-xs font-bold tracking-[0.25em] uppercase py-4 md:py-5 px-8 md:px-10 rounded-sm shadow-xl hover:shadow-brand-btn/10 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
                >
                  Explore Collection
                </button>
                <button
                  onClick={() => scrollToSection("best-sellers")}
                  className="border border-brand-heading text-brand-heading hover:bg-brand-heading hover:text-brand-light font-sans text-xs font-bold tracking-[0.25em] uppercase py-4 md:py-5 px-8 md:px-10 rounded-sm active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
                >
                  Shop Best Sellers
                </button>
              </div>
            </motion.div>

            {/* Right side: High-contrast large jewelry image with visual effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-[3660px]  p-1 shadow-[0_30px_70px_rgba(91,70,54,0.12)] rounded-sm group">

                {/* Micro soft-glow border overlays */}
                {/* <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-brand-btn/20 transition-colors duration-700 pointer-events-none" /> */}

                {/* Leaf Gold Decoration Background */}
                <div className="absolute top-48 -right-49 w-106 h-136 rotate-245 opacity-90 z-20 pointer-events-none group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000">
                  <Image
                    src="/images/leaf-gold.png"
                    alt="Gold Decorative Leaf"
                    fill
                    sizes="350px"
                    className="object-contain"
                  />
                </div>

                <div className="relative w-full h-full flex items-center justify-center rounded-sm overflow-hidden">
                  <Image
                    src="/images/girl_in_silver.png"
                    alt="Breathtaking Editorial Portrait of a Girl wearing 925 Sterling Silver Jewelry"
                    fill
                    priority
                    sizes="(max-width: 3024px) 120vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Hallmark-Badge */}
                <div className="absolute bottom-6 left-6 bg-brand-heading text-brand-light px-3 py-1 font-serif text-[10px] tracking-[0.2em] uppercase font-bold shadow-md rounded-sm">
                  Hallmark Ag925
                </div>
              </div>
            </motion.div>

          </div>
        </section>


        {/* ─── 2. FEATURED CATEGORIES SECTION ─── */}
        <section id="categories" className="py-24 px-6 md:px-12 lg:px-20 bg-brand-card border-y border-brand-border/40">
          <div className="max-w-[1400px] mx-auto">

            {/* Editorial Heading */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-brand-btn uppercase font-extrabold block mb-3">
                Curated Architecture
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-brand-heading tracking-[0.1em] uppercase font-bold">
                Featured Categories
              </h3>
              <div className="w-12 h-[1px] bg-brand-border mx-auto mt-5" />
            </div>

            {/* Responsive Grid with Luxury Spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCategories.map((cat, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={idx}
                  className="bg-brand-card border border-brand-border p-6 hover:shadow-[0_25px_55px_rgba(91,70,54,0.12)] hover:border-brand-btn transition-all duration-500 rounded-sm group flex flex-col justify-between"
                >
                  <div>
                    {/* Floating Glow Outline */}
                    <div className="relative w-full aspect-square bg-[#FAF6F0] rounded-sm overflow-hidden flex items-center justify-center p-6 mb-6 border border-brand-border/30">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                        style={{ mixBlendMode: "multiply" }}
                      />

                      {/* Interactive overlay icon */}
                      {/* <div className="absolute inset-0 bg-brand-heading/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="bg-white/95 text-brand-heading font-sans text-[10px] tracking-[0.2em] uppercase font-bold py-3 px-6 shadow-md rounded-sm border border-brand-border"
                        >
                          Explore
                        </motion.span>
                      </div> */}
                    </div>

                    <span className="font-sans text-[9px] tracking-widest text-brand-btn uppercase block mb-1 font-bold">
                      Collection Item
                    </span>
                    <h4 className="font-serif text-xl md:text-2xl text-brand-heading font-semibold uppercase tracking-wide mb-2 group-hover:text-brand-btn transition-colors">
                      {cat.title}
                    </h4>
                    <p className="font-sans text-xs text-brand-body leading-relaxed mb-6 font-medium">
                      {cat.description}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveCategoryFilter(cat.tag);
                      scrollToSection("best-sellers");
                      triggerToast(`Filtered by ${cat.tag}`, "info");
                    }}
                    className="inline-flex items-center justify-between w-full bg-brand-heading text-brand-light hover:bg-black py-4 px-5 rounded-sm font-sans text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 cursor-pointer"
                  >
                    <span>Discover Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-btn" strokeWidth={2.5} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ─── 3. WHY CHOOSE 925 STERLING SILVER SECTION ─── */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-brand-bg/30 border-b border-brand-border/40">
          <div className="max-w-[1400px] mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-brand-btn uppercase font-extrabold block mb-3">
                Crafted Excellence
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-brand-heading tracking-[0.1em] uppercase font-bold">
                Why Choose 925 Sterling Silver
              </h3>
              <div className="w-12 h-[1px] bg-brand-border mx-auto mt-5" />
            </div>

            {/* Informative Icon Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {whyChooseFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    key={idx}
                    className="bg-brand-card border border-brand-border p-8 rounded-sm hover:shadow-[0_15px_40px_rgba(91,70,54,0.05)] hover:border-brand-btn transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-brand-bg rounded-sm flex items-center justify-center text-brand-heading mb-6 border border-brand-border/50 group-hover:bg-brand-heading group-hover:text-brand-light transition-all duration-500">
                      <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                    </div>

                    <h4 className="font-serif text-lg md:text-xl text-brand-heading font-semibold uppercase tracking-wider mb-3">
                      {feat.title}
                    </h4>

                    <p className="font-sans text-xs md:text-sm text-brand-body leading-relaxed font-medium">
                      {feat.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ─── 4. MATERIAL INFORMATION SHOWCASE ─── */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-brand-card">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left side: Premium Image Display with 925 Badge overlay */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative w-full aspect-video md:aspect-[4/3] bg-[#FAF6F0] border border-brand-border p-6 shadow-2xl rounded-sm group overflow-hidden">
                <Image
                  src="/images/silver-couple-rings.png"
                  alt="High Purity Ag925 Hallmark Engraved Details"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Elegant floating hallmark inspired 925 stamp */}
                <div className="absolute top-6 left-6 bg-brand-card/95 backdrop-blur-sm border border-brand-border text-brand-heading px-4 py-2 font-serif font-extrabold text-sm tracking-[0.25em] shadow-lg uppercase rounded-sm">
                  Ag 925 Stamp
                </div>
              </div>
            </motion.div>

            {/* Right side: Educational Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-brand-btn" />
                <span className="font-sans text-[10px] tracking-[0.3em] text-brand-btn uppercase font-extrabold">
                  THE SCIENCE OF LUSTER
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-5xl text-brand-heading tracking-wide uppercase font-bold mb-6">
                The Heritage of <br />
                925 Sterling Silver
              </h3>

              <div className="space-y-6 text-brand-body font-sans text-xs md:text-sm leading-relaxed font-medium">
                <div>
                  <h4 className="font-serif text-brand-heading font-bold text-sm tracking-widest uppercase mb-1.5">
                    What is 925 Sterling Silver?
                  </h4>
                  <p>
                    Sterling silver is an alloy made of 92.5% pure silver and 7.5% copper. Pure silver alone is exceptionally soft and malleable, making it unsuitable for durable jewelry. The addition of copper provides essential structural strength while preserving the breathtaking bright luster of pure silver.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-brand-heading font-bold text-sm tracking-widest uppercase mb-1.5">
                    Advanced Protective Treatment
                  </h4>
                  <p>
                    Each piece in our premium collection is enveloped in a microscopic protective layer of rhodium—a rare, precious metal from the platinum family. This exquisite finish guards against oxidation, completely blocks tarnish, and yields an ultra-reflective sheen.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-brand-heading font-bold text-sm tracking-widest uppercase mb-1.5">
                    Everyday Wear & Versatility
                  </h4>
                  <p>
                    Silver's brilliant cool tone stands as the ultimate canvas for self-expression. Uniquely engineered to adapt to body warmth, our rings and bracelets provide unparalleled lightweight, ergonomic comfort, allowing you to build layers that feel like natural extensions of yourself.
                  </p>
                </div>
              </div>

              {/* Minimalist Hallmark Box Graphic */}
              <div className="mt-8 p-4 border border-brand-border rounded-sm flex items-center justify-around w-full bg-brand-bg/25 border-dashed">
                <div className="text-center">
                  <span className="font-serif text-[10px] text-brand-btn block tracking-widest uppercase">Purity</span>
                  <span className="font-serif text-brand-heading font-bold text-base tracking-widest">Ag 92.5%</span>
                </div>
                <div className="h-8 w-[1px] bg-brand-border" />
                <div className="text-center">
                  <span className="font-serif text-[10px] text-brand-btn block tracking-widest uppercase">Shield</span>
                  <span className="font-serif text-brand-heading font-bold text-base tracking-widest">Rhodium</span>
                </div>
                <div className="h-8 w-[1px] bg-brand-border" />
                <div className="text-center">
                  <span className="font-serif text-[10px] text-brand-btn block tracking-widest uppercase">Origin</span>
                  <span className="font-serif text-brand-heading font-bold text-base tracking-widest">Artisan Hand</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>


        {/* ─── 5. BEST SELLING PRODUCTS SECTION ─── */}
        <section id="best-sellers" className="py-24 px-6 md:px-12 lg:px-20 bg-brand-bg/40 border-t border-brand-border/40">
          <div className="max-w-[1400px] mx-auto">

            {/* Header Content */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-border pb-8">
              <div>
                <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] text-brand-btn uppercase font-extrabold block mb-3">
                  Highly Coveted
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-brand-heading tracking-[0.05em] uppercase font-bold m-0">
                  Best Selling Products
                </h3>
              </div>

              {/* Luxury Minimalist Category Tabs */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 md:mt-0">
                {["All", "Rings", "Necklaces", "Earrings", "Bracelets"].map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategoryFilter(category);
                      triggerToast(`Filtered by ${category}`, "info");
                    }}
                    className={`font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold relative pb-2 transition-all duration-300 cursor-pointer ${activeCategoryFilter === category
                      ? "text-brand-heading font-extrabold"
                      : "text-brand-body/50 hover:text-brand-heading"
                      }`}
                  >
                    {category}
                    {activeCategoryFilter === category && (
                      <motion.span
                        layoutId="activeCategoryBorder"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-btn"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredBestSellers.map((product) => {
                  const isInWishlist = wishlist.some((item) => item.id === product.id);
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      key={product.id}
                      className="bg-brand-card border border-brand-border p-5 rounded-sm relative flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(91,70,54,0.06)] hover:border-brand-btn transition-all duration-500"
                    >
                      {/* Top Bar inside Card */}
                      <div className="relative w-full">
                        <div className="flex justify-between items-start mb-2 absolute top-0 left-0 right-0 z-20">
                          <span className="font-sans text-[8px] md:text-[9px] tracking-widest text-brand-heading uppercase font-extrabold block bg-[#FAF6F0]/90 backdrop-blur-sm border border-brand-border/50 px-2 py-0.5 rounded-sm">
                            {product.category}
                          </span>

                          {/* Wishlist toggle button */}
                          <button
                            onClick={() => handleToggleWishlist(product)}
                            className="w-7 h-7 rounded-full bg-white/90 border border-brand-border flex items-center justify-center text-brand-heading hover:bg-red-50 hover:text-red-400 transition-colors shadow-sm cursor-pointer"
                            aria-label="Add to wishlist"
                          >
                            <Heart
                              className={`w-3.5 h-3.5 transition-colors ${isInWishlist ? "fill-red-400 text-red-400" : "text-brand-heading"}`}
                            />
                          </button>
                        </div>

                        {/* Image Frame with hover Zoom */}
                        <div className="relative w-full aspect-square bg-[#FAF6F0] rounded-sm overflow-hidden flex items-center justify-center p-4 mb-5 border border-brand-border/30 mt-4">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 20vw"
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 brightness-[1.03]"
                            style={{ mixBlendMode: "multiply" }}
                          />

                          {/* Slide-up Quick View Button on Hover */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 flex items-center justify-center">
                            <button
                              onClick={() => setQuickViewProduct(product)}
                              className="bg-brand-heading text-brand-light hover:bg-black text-[9px] tracking-[0.2em] font-sans font-bold uppercase py-2.5 px-5 shadow-md border border-brand-border/10 rounded-sm cursor-pointer inline-flex items-center gap-1.5 transition-all"
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

                          <h4 className="font-serif text-sm md:text-base text-brand-heading uppercase tracking-wider font-bold group-hover:text-brand-btn transition-colors duration-300 truncate mb-1">
                            {product.name}
                          </h4>

                          <p className="text-[10px] text-brand-body/70 font-sans tracking-wide mb-4">
                            {product.material} • {product.finish}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-brand-border mt-auto">
                          <div className="flex items-baseline gap-2">
                            <span className="font-sans text-sm font-bold text-brand-heading">
                              {product.discountedPrice}
                            </span>
                            <span className="font-sans text-[10px] text-brand-body/50 line-through">
                              {product.originalPrice}
                            </span>
                          </div>

                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-brand-btn hover:bg-brand-btn-hover text-brand-light p-2.5 rounded-sm hover:scale-105 active:scale-[0.97] transition-all cursor-pointer border-0"
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
        <section className="relative w-auto h-[60vh] md:h-[65vh] overflow-hidden flex items-center justify-center text-center bg-black border-y border-brand-border/40 select-none">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/silver-banner-rings.png"
              alt="Discover Your Sparkle - Aurelia Silver Campaign"
              fill
              sizes="100vw"
              className="object-cover object-center brightness-[0.45] contrast-[1.05] transition-transform duration-[12000ms] hover:scale-105"
            />
            {/* Dark moody gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/85 pointer-events-none" />
          </div>

          {/* Glowing particle effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-radial from-white/10 to-transparent rounded-full blur-[80px] pointer-events-none" />

          {/* Text Overlays */}
          <div className="relative z-10 max-w-4xl px-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="font-sans text-[10px] md:text-xs tracking-[0.45em] text-brand-btn uppercase font-bold block mb-4">
                AURELIA EDITORIAL CAMPAIGN
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-[0.15em] uppercase leading-tight mb-6">
                Minimal Luxury. <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FAF6F0] to-brand-btn">Timeless Silver.</span>
              </h2>
              <p className="font-sans text-xs md:text-sm text-white/70 max-w-md mx-auto leading-relaxed tracking-wider uppercase font-medium mt-6">
                Discover the pure, uninterrupted shine of artisan craftsmanship. Welcoming a new standard of sterling silver design.
              </p>
            </motion.div>
          </div>
        </section>


        {/* ─── 7. CUSTOMER TESTIMONIALS SECTION ─── */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-brand-card">
          <div className="max-w-[1400px] mx-auto">

            {/* Heading */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-sans text-[10px] tracking-[0.3em] text-brand-btn uppercase font-extrabold block mb-3">
                Voices of Satisfaction
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-brand-heading tracking-[0.1em] uppercase font-bold">
                Customer Testimonials
              </h3>
              <div className="w-12 h-[1px] bg-brand-border mx-auto mt-5" />
            </div>

            {/* Testimonials minimalist grids */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={idx}
                  className="bg-[#FAF6F0] border border-brand-border p-8 rounded-sm hover:shadow-[0_15px_40px_rgba(91,70,54,0.05)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 text-amber-400 mb-6">
                      {[...Array(test.rating)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-serif italic text-sm md:text-base text-brand-body leading-relaxed mb-6 font-medium">
                      “{test.quote}”
                    </p>
                  </div>

                  {/* Customer details */}
                  <div className="flex items-center gap-4 pt-6 border-t border-brand-border mt-6">
                    <div className="w-10 h-10 rounded-full bg-brand-heading text-brand-light flex items-center justify-center font-sans font-bold text-xs">
                      {test.initials}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs text-brand-heading uppercase tracking-widest">
                        {test.author}
                      </h4>
                      <span className="text-[10px] text-brand-body/60 uppercase tracking-widest">
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
              className="absolute inset-0 bg-brand-heading/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-brand-card border border-brand-border rounded-sm p-6 md:p-10 w-full max-w-[900px] shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 p-2 text-brand-heading hover:text-brand-btn transition-colors rounded-full hover:bg-brand-bg cursor-pointer border-0"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                {/* Product Image Frame */}
                <div className="md:col-span-6 relative aspect-square bg-[#FAF6F0] border border-brand-border/50 rounded-sm overflow-hidden flex items-center justify-center p-6">
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
                <div className="md:col-span-6 flex flex-col items-start">
                  <span className="font-sans text-[9px] tracking-widest text-brand-btn uppercase block mb-1 font-bold">
                    {quickViewProduct.category}
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl text-brand-heading font-bold uppercase tracking-wider mb-2">
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
                    <span className="text-[10px] text-brand-body/60 ml-2 font-sans font-bold uppercase">5.0 (48 Reviews)</span>
                  </div>

                  {/* Price info */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="font-sans text-xl font-bold text-brand-heading">
                      {quickViewProduct.discountedPrice}
                    </span>
                    <span className="font-sans text-sm text-brand-body/50 line-through">
                      {quickViewProduct.originalPrice}
                    </span>
                    <span className="text-[10px] tracking-wider text-green-600 bg-green-50 px-2 py-0.5 border border-green-200 rounded-sm font-sans font-extrabold uppercase">
                      Special Offer
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-brand-body leading-relaxed mb-6 font-medium">
                    {quickViewProduct.description}
                  </p>

                  {/* Specs */}
                  <div className="w-full bg-[#FAF6F0] border border-brand-border p-4 rounded-sm flex flex-col gap-2 font-sans text-xs font-semibold mb-6">
                    <div className="flex justify-between">
                      <span className="text-brand-body/60">Composition:</span>
                      <span className="text-brand-heading">{quickViewProduct.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-body/60">Protective Coating:</span>
                      <span className="text-brand-heading">{quickViewProduct.finish}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 w-full">
                    <button
                      onClick={() => {
                        handleAddToCart(quickViewProduct);
                        setQuickViewProduct(null);
                      }}
                      className="flex-grow bg-brand-heading hover:bg-black text-brand-light font-sans text-xs font-bold tracking-[0.25em] uppercase py-4 rounded-sm shadow-md transition-all active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2 border-0"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add To Cart</span>
                    </button>
                    <button
                      onClick={() => {
                        handleToggleWishlist(quickViewProduct);
                        setQuickViewProduct(null);
                      }}
                      className="border border-brand-border text-brand-heading hover:bg-[#FAF6F0] p-4 rounded-sm transition-all cursor-pointer bg-transparent"
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
