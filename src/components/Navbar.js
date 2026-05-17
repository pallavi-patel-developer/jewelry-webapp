"use client";

import { useState, useEffect } from "react";
import { Menu, ShoppingBag, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import SidebarMenu from "./SidebarMenu";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the top of the page
      if (currentScrollY < 120) {
        setShowNavbar(true);
      } else {
        // If scrolling down, hide navbar. If scrolling up, show navbar.
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Outer wrapper to reserve exact space in document flow, preventing page shifting */}
      <div className="w-full h-[84px] md:h-[96px] relative z-50">
        
        {/* Inner Sticky-reveal Smart Navbar */}
        <motion.nav 
          initial={{ y: 0 }}
          animate={{ y: showNavbar ? 0 : -110 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full fixed top-0 left-0 z-50 pt-6 md:pt-8 pb-5 md:pb-6 px-6 md:px-12 flex justify-between items-center bg-[#F5EDE0]/95 backdrop-blur-md border-b border-brand-border/40 transition-all duration-300 shadow-sm"
        >
          {/* Left: Menu */}
          <div 
            className="flex items-center gap-4 cursor-pointer group flex-1"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 text-brand-heading group-hover:text-brand-btn-hover transition-colors" strokeWidth={1.5} />
            <span className="text-sm font-sans tracking-[0.2em] text-brand-heading group-hover:text-brand-btn-hover transition-colors uppercase font-medium">Menu</span>
          </div>
          
          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center justify-center gap-10 flex-1">
            <Link href="/home" className="text-sm font-sans tracking-[0.15em] text-brand-heading hover:text-brand-btn-hover transition-colors uppercase font-medium">
              Home
            </Link>
            <Link href="/about" className="text-sm font-sans tracking-[0.15em] text-brand-heading hover:text-brand-btn-hover transition-colors uppercase font-medium whitespace-nowrap">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-sans tracking-[0.15em] text-brand-heading hover:text-brand-btn-hover transition-colors uppercase font-medium whitespace-nowrap">
              Contact Us
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6 justify-end flex-1">
            <Link href="/cart" className="text-brand-heading hover:text-brand-btn-hover transition-colors" aria-label="Shopping Bag">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <Link href="/profile" className="text-brand-heading hover:text-brand-btn-hover transition-colors" aria-label="User Profile">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </Link>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
