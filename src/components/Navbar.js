"use client";

import { Menu, ShoppingBag, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full relative z-50 pt-8 pb-6 px-6 md:px-12 flex justify-between items-center"
    >
      <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-brand-border"></div>
      <div className="flex items-center gap-4 cursor-pointer group">
        <Menu className="w-6 h-6 text-brand-heading group-hover:text-brand-btn-hover transition-colors" strokeWidth={1.5} />
        <span className="text-sm font-sans tracking-[0.2em] text-brand-heading group-hover:text-brand-btn-hover transition-colors uppercase font-medium">Menu</span>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="text-brand-heading hover:text-brand-btn-hover transition-colors" aria-label="Shopping Bag">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <button className="text-brand-heading hover:text-brand-btn-hover transition-colors" aria-label="User Profile">
          <User className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  );
}
