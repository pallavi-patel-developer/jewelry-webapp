"use client";

import { useState } from "react";
import { Menu, ShoppingBag, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import SidebarMenu from "./SidebarMenu";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full relative z-50 pt-8 pb-6 px-6 md:px-12 flex justify-between items-center"
    >
      <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-brand-border"></div>
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
        <Link href="/" className="text-sm font-sans tracking-[0.15em] text-brand-heading hover:text-brand-btn-hover transition-colors uppercase font-medium">
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
        <button className="text-brand-heading hover:text-brand-btn-hover transition-colors" aria-label="Shopping Bag">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <button className="text-brand-heading hover:text-brand-btn-hover transition-colors" aria-label="User Profile">
          <User className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
    </>
  );
}
