"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";

const heroImages = [
  "/images/hero-hand-v2.png",
  "/images/hero-hand-v5.png",
  "/images/hero-hand-v3.png",
  "/images/hero-hand-v6.png"
];

const heroContent = [
  {
    titleLine1: "ELEGANT",
    titleLine2: "JEWELRY",
    description: "Discover exquisite jewelry inspired by the beauty of the heavens. Each piece is crafted to bring elegance and grace to your most cherished occasions."
  },
  {
    titleLine1: "TIMELESS",
    titleLine2: "BEAUTY",
    description: "Embrace the legacy of fine craftsmanship. Our exclusive collection highlights the pure brilliance of diamonds matched with timeless designs."
  },
  {
    titleLine1: "LUXURY",
    titleLine2: "COLLECTION",
    description: "Experience the ultimate expression of luxury. Carefully curated pieces that symbolize your unique journey and unforgettable moments."
  },
  {
    titleLine1: "CELESTIAL",
    titleLine2: "GRACE",
    description: "Adorn yourself with the stars. Each piece is a masterwork designed to capture the breathtaking beauty of the cosmos."
  },
  {
    titleLine1: "GREEN",
    titleLine2: "EMERALD",
    description: "Discover the regal charm of emeralds. Handcrafted with precision and passion, our emerald collection adds a touch of royal elegance to your look."
  }
];
import CategoryMenu from "./CategoryMenu";
import MarqueeBanner from "./MarqueeBanner";
import ProductCarousel from "./ProductCarousel";
import CollectionBanner from "./CollectionBanner";
import CircleCarousel from "./CircleCarousel";
import SilverSection from "./SilverSection";
import Image from "next/image";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const wheelTimeout = useRef(null);
  const imageContainerRef = useRef(null);

  // Custom Cursor State
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const getImageStyles = (index) => {
    switch (index) {
      case 0: // hero-hand-v2.png
        return "scale-125 md:scale-[1.45] -translate-y-12 md:-translate-y-24";
      case 1: // hero-hand-v5.png - scale down significantly to match v2's visual size
        return "scale-75 md:scale-95 -translate-y-2 md:-translate-y-4";
      case 2: // hero-hand-v3.png
        return "scale-100 md:scale-[1.15] -translate-y-6 md:-translate-y-12";
      case 3: // hero-hand-v6.png
        return "scale-75 md:scale-[0.85] -translate-y-8 md:-translate-y-16";
      default:
        return "scale-125 md:scale-[1.45] -translate-y-12 md:-translate-y-24";
    }
  };

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX - 40); // Offset by half the width of the cursor (80px)
    cursorY.set(e.clientY - 40);
  };

  useEffect(() => {
    const el = imageContainerRef.current;
    if (!el) return;

    const handleNativeWheel = (e) => {
      e.preventDefault(); // Stop page scrolling while cycling images

      if (wheelTimeout.current) return;

      if (Math.abs(e.deltaY) < 20) return;

      if (e.deltaY > 0) {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      } else if (e.deltaY < 0) {
        setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
      }

      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 50);
    };

    // passive: false is required to allow e.preventDefault()
    el.addEventListener('wheel', handleNativeWheel, { passive: false });

    return () => {
      el.removeEventListener('wheel', handleNativeWheel);
    };
  }, []);

  return (
    <main className="relative w-full flex-grow flex flex-col px-6 md:px-12 py-10 overflow-hidden">



      {/* Huge Background Text Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-0 md:top-4 left-0 w-full text-center pointer-events-none z-0 flex flex-col items-center justify-center"
      >
        <div className="relative w-full flex flex-col items-center justify-center mt-4">
          <h1
            className="text-[12vw] md:text-[10vw] lg:text-[8.5rem] leading-none text-brand-heading tracking-[0.3em] relative z-10 px-4 md:px-12 inline-block uppercase font-bold"
            style={{ fontFamily: "'TAN Pearl', serif", textShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}
          >
            Aurelia
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-2 text-brand-btn"
          >
            <Sparkle className="w-6 h-6 fill-current" />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content 3-Column Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center mt-28 md:mt-48 max-w-[1600px] mx-auto w-full">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col space-y-4 mb-32 md:pr-16 md:self-center z-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col space-y-4 min-h-[200px]"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-heading leading-[1.1] uppercase">
                {heroContent[currentImageIndex].titleLine1} <br />
                <span className="text-brand-heading/90">{heroContent[currentImageIndex].titleLine2}</span>
              </h2>

              <div className="flex flex-col space-y-2">
                <Sparkle className="w-4 h-4 text-brand-btn fill-current" />
                <div className="w-48 h-[1px] bg-brand-heading/20"></div>
              </div>

              <p className="text-brand-body font-sans text-sm md:text-base leading-relaxed max-w-[280px]">
                {heroContent[currentImageIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <button className="flex items-center gap-3 bg-[#3d2f25] text-brand-light rounded-sm py-4 px-10 w-fit hover:bg-brand-heading transition-colors group shadow-lg mt-8 uppercase tracking-[0.2em] font-sans text-[10px] font-bold">
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </button>
        </motion.div>

        {/* Center Column - Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative h-[60vh] md:h-[75vh] w-full flex justify-center items-end order-first md:order-none z-10 -mt-16 md:mt-0 pt-10"
        >
          {/* Arched Frame Background */}
          <div className="absolute inset-x-0 bottom-30 top-10 bg-[#D9B35F]/30 rounded-t-full border border-white/40 shadow-inner z-0 pointer-events-none"></div>

          <motion.div
            ref={imageContainerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full h-full min-h-[400px] cursor-none"
          >
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentImageIndex]}
                  alt="Mannequin hand wearing diamond rings"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className={`object-contain object-center ${getImageStyles(currentImageIndex)}`}
                  style={{ mixBlendMode: "multiply" }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center pb-20 h-full space-y-6 md:self-center z-20 items-start md:items-end"
        >
          <div className="flex flex-col md:items-end space-y-2">
            <h3 className="text-xl md:text-2xl font-serif text-brand-heading md:text-right leading-snug tracking-[0.1em] uppercase opacity-80">
              A Celestial Touch <br />
              For Timeless Moments
            </h3>

            <div className="flex flex-col md:items-end space-y-0">
              <Sparkle className="w-4 h-4 text-brand-btn fill-current" />
              <div className="w-48 h-[1px] bg-brand-heading/20"></div>
            </div>
          </div>

          <CategoryMenu />
        </motion.div>

      </div>

      <MarqueeBanner />

      {/* Product Carousel below marquee */}
      <ProductCarousel />

      {/* Collection Banner */}
      <CollectionBanner />

      {/* Circle Carousel */}
      <CircleCarousel />

      {/* Silver Section Banner */}
      <SilverSection />

      {/* Custom Tracking Cursor */}
      <AnimatePresence>
        {isHoveringImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              position: "fixed",
              top: 0,
              left: 0,
              pointerEvents: "none",
              zIndex: 9999,
            }}
            className="w-20 h-20 bg-brand-heading text-brand-light rounded-full flex items-center justify-center text-[10px] tracking-[0.2em] font-bold uppercase shadow-2xl"
          >
            Scroll
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Botanical Elements (Corner Leaves) */}
      <div className="absolute top-0 right-260 w-200 h-94 opacity-80 pointer-events-none z-0 rotate-[-340deg]">
        <Image
          src="/images/leaf-gold.png"
          alt="Decorative Leaf"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-4 -right-25 lg-30 w-100 h-80 opacity-170 pointer-events-none z-0 rotate-[670deg] scale-x-[-1]">
        <Image
          src="/images/leaf-gold.png"
          alt="Decorative Leaf"
          fill
          className="object-contain"
        />
      </div>
    </main>
  );
}
