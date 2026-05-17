"use client";

import Link from "next/link";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-[#15110d] to-black border-t border-[#D4AF37]/20 text-white relative z-20 overflow-hidden select-none">
      
      {/* Decorative Golden Ambient Light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[150px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ─── MAIN FOOTER CONTENT ─── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/home" className="flex items-center gap-2 mb-6 group">
              <span className="font-serif text-3xl tracking-[0.2em] text-[#D4AF37] font-bold uppercase transition-all duration-300 group-hover:text-white">
                AURELIA
              </span>
              <Sparkles className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
            </Link>

            <p className="font-sans text-xs text-white/60 leading-relaxed mb-6 max-w-[320px]">
              A celestial touch for timeless moments. Designing pure perfection in gold, silver, and diamonds. Each piece is handcrafted to carry a story of grace and luxury.
            </p>

            {/* Social Icons with Gold circular outline using inline SVGs */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-white/70 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 shadow-md"
                  title={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Collections Links (2.5 cols) */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="font-serif text-lg text-[#D4AF37] font-bold uppercase tracking-widest mb-6 relative">
              Collections
              <span className="absolute bottom-[-6px] left-0 w-8 h-[1px] bg-[#D4AF37]" />
            </h4>
            <ul className="flex flex-col gap-3 text-left">
              {[
                { name: "Gold Collection", href: "/gold" },
                { name: "Silver Collection", href: "/rings" },
                { name: "Wedding Bands", href: "/rings" },
                { name: "Diamond Series", href: "/gold" },
                { name: "Exclusive Minimal", href: "/home" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-white/50 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Care Links (2.5 cols) */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="font-serif text-lg text-[#D4AF37] font-bold uppercase tracking-widest mb-6 relative">
              Customer Care
              <span className="absolute bottom-[-6px] left-0 w-8 h-[1px] bg-[#D4AF37]" />
            </h4>
            <ul className="flex flex-col gap-3 text-left">
              {[
                { name: "Bespoke Consulting", href: "/about" },
                { name: "Order Tracking", href: "/cart" },
                { name: "Jewelry Care Guide", href: "/about" },
                { name: "Shipping & Returns", href: "/about" },
                { name: "Lifetime Warranty", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-white/50 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter input (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-serif text-lg text-[#D4AF37] font-bold uppercase tracking-widest mb-6 relative">
              Newsletter
              <span className="absolute bottom-[-6px] left-0 w-8 h-[1px] bg-[#D4AF37]" />
            </h4>
            <p className="font-sans text-[11px] text-white/60 leading-relaxed mb-6 text-left">
              Subscribe to receive exclusive previews, private sales, and luxury lifestyle guides.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full flex items-center border-b border-[#D4AF37]/30 focus-within:border-[#D4AF37] transition-colors duration-300 pb-2.5 relative"
            >
              <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="email"
                placeholder="your.email@luxury.com"
                className="w-full bg-transparent pl-7 pr-10 outline-none font-sans text-xs tracking-wider text-white placeholder:text-white/20"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:scale-110 transition-transform duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* ─── BOTTOM SECTION: Copyright & Payment Accents ─── */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:items-start text-center md:text-left gap-1">
            <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest">
              © 2026 AURELIA LUXURY. ALL RIGHTS RESERVED.
            </p>
            <p className="font-sans text-[9px] text-[#D4AF37]/65 uppercase tracking-wider font-semibold">
              Handcrafted in Pure Brilliance by Pallavi Jewelry (PJ).
            </p>
          </div>

          {/* Golden outline Luxury Payment Badges */}
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "APPLE PAY"].map((pay) => (
              <span
                key={pay}
                className="font-sans text-[8px] tracking-[0.15em] text-[#D4AF37] border border-[#D4AF37]/35 rounded px-2.5 py-1 font-bold uppercase bg-black/40 backdrop-blur-sm"
              >
                {pay}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
