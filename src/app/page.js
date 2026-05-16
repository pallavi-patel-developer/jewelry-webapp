"use client";

import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RootLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-hero/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-btn/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        {/* Login Card */}
        <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-sm p-10 shadow-2xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif text-brand-heading uppercase tracking-[0.2em] mb-3">AURELIA</h1>
            <p className="text-xs text-brand-body uppercase tracking-widest font-medium opacity-60">Welcome back to excellence</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-body font-bold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-body/40" strokeWidth={1.5} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-transparent border-b border-brand-border py-3 pl-8 outline-none focus:border-brand-btn transition-colors font-sans text-brand-heading"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] uppercase tracking-widest text-brand-body font-bold">Password</label>
                <Link href="#" className="text-[10px] uppercase tracking-widest text-brand-btn font-bold hover:text-brand-btn-hover">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-body/40" strokeWidth={1.5} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-transparent border-b border-brand-border py-3 pl-8 outline-none focus:border-brand-btn transition-colors font-sans text-brand-heading"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-body/40 hover:text-brand-heading"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Link href="/home" className="bg-brand-heading text-brand-light w-full py-5 px-8 font-sans text-xs font-bold uppercase tracking-[0.3em] hover:bg-black transition-all mt-6 shadow-xl active:scale-[0.98] rounded-sm text-center">
              Sign In
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-brand-body font-sans">
              Don't have an account?{" "}
              <Link href="/signup" className="text-brand-btn font-bold hover:text-brand-btn-hover underline underline-offset-4">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-center text-[10px] text-brand-body/40 uppercase tracking-[0.2em] font-medium">
          Pure Brilliance • Timeless Design • Aurelia
        </p>
      </motion.div>
    </div>
  );
}
