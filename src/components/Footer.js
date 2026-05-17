"use client";

import Link from "next/link";
import { Mail, ArrowRight, Sparkles, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-gradient-to-b from-[#2b1810] via-[#1c0f0a] to-[#2b1810] border-t-2 border-[#D4AF37]/60 text-white relative z-20 overflow-hidden select-none">
      
      {/* Decorative Golden Ambient Light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[150px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ─── MAIN FOOTER CONTENT ─── */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
        
        {/* ROW 1: 5-Column Grid for Links & Brand */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* 1. Brand Info (span 4) */}
          <div className="col-span-2 lg:col-span-4 flex flex-col items-start text-left">
            <Link href="/home" className="flex items-center gap-2 mb-6 group">
              <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-[#D4AF37] font-bold uppercase transition-all duration-300 group-hover:text-[#FAF6F0]">
                AURELIA
              </span>
              <Sparkles className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
            </Link>
            <p className="font-sans text-xs text-[#FAF6F0]/65 leading-relaxed mb-6 max-w-[340px]">
              A celestial touch for timeless moments. Designing pure perfection in gold, silver, and diamonds. Each piece is handcrafted to carry a story of grace and luxury.
            </p>
            
            {/* 8. Social Media */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#FAF6F0]/70 hover:text-[#2b1810] hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 shadow-md"
                  title={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Shop Categories (span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm text-[#D4AF37] font-bold uppercase tracking-widest mb-6 relative">
              Shop Categories
              <span className="absolute bottom-[-6px] left-0 w-8 h-[1px] bg-[#D4AF37]" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Gold Jewelry", href: "/gold" },
                { name: "Rings", href: "/rings" },
                { name: "Earrings", href: "/earrings" },
                { name: "Necklaces", href: "/necklaces" },
                { name: "Bracelets", href: "/bracelets" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-[#FAF6F0]/50 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Customer Service (span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm text-[#D4AF37] font-bold uppercase tracking-widest mb-6 relative">
              Customer Service
              <span className="absolute bottom-[-6px] left-0 w-8 h-[1px] bg-[#D4AF37]" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Bespoke Consulting", href: "/about" },
                { name: "Order Tracking", href: "/cart" },
                { name: "Jewelry Care Guide", href: "/about" },
                { name: "Lifetime Warranty", href: "/about" },
                { name: "Book Appointment", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-[#FAF6F0]/50 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Company Links (span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm text-[#D4AF37] font-bold uppercase tracking-widest mb-6 relative">
              Company
              <span className="absolute bottom-[-6px] left-0 w-8 h-[1px] bg-[#D4AF37]" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Our Stores", href: "/contact" },
                { name: "Careers", href: "/about" },
                { name: "Press & Media", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-[#FAF6F0]/50 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Policies (span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm text-[#D4AF37] font-bold uppercase tracking-widest mb-6 relative">
              Policies
              <span className="absolute bottom-[-6px] left-0 w-8 h-[1px] bg-[#D4AF37]" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Privacy Policy", href: "/about" },
                { name: "Terms & Conditions", href: "/about" },
                { name: "Shipping Policy", href: "/about" },
                { name: "Refund & Return Policy", href: "/about" },
                { name: "Secure Shopping", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-[#FAF6F0]/50 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ROW 2: Contact Details & Newsletter Input */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 border-b border-white/10 text-left">
          
          {/* 6. Contact Details */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-start">
            <div className="flex flex-col items-start">
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
                Contact Details
              </h4>
              <div className="flex flex-col space-y-3 font-sans text-xs text-[#FAF6F0]/70">
                <a href="mailto:info@aurelia.com" className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-4 h-4 text-[#D4AF37]/80" />
                  info@aurelia.com
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors">
                  <Phone className="w-4 h-4 text-[#D4AF37]/80" />
                  +91 98765 43210
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37]/80 mt-0.5" />
                  <span>Kyalami Business Park, Midrand, South Africa</span>
                </div>
              </div>
            </div>
          </div>

          {/* 7. The Aurelia Promise (Trust Badges) */}
          <div className="flex flex-col items-start w-full">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              The Aurelia Promise
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 w-full font-sans text-xs text-[#FAF6F0]/70">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#D4AF37] block font-bold tracking-wider uppercase text-[10px]">100% Certified</span>
                  <span className="text-[11px] leading-normal text-[#FAF6F0]/50">Ethically sourced conflict-free diamonds</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
                </div>
                <div>
                  <span className="text-[#D4AF37] block font-bold tracking-wider uppercase text-[10px]">Complimentary Shipping</span>
                  <span className="text-[11px] leading-normal text-[#FAF6F0]/50">Fully insured secure worldwide delivery</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4V8h3.08c.09.28.21.55.37.79l2.42 3.23L8 15.67V17h1.33l3.67-4.89 3.67 4.89H18v-1.33l-1.87-3.65 2.42-3.23c.16-.24.28-.51.37-.79H20v11z"/></svg>
                </div>
                <div>
                  <span className="text-[#D4AF37] block font-bold tracking-wider uppercase text-[10px]">Signature Packaging</span>
                  <span className="text-[11px] leading-normal text-[#FAF6F0]/50">Complimentary handcrafted velvet box</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                </div>
                <div>
                  <span className="text-[#D4AF37] block font-bold tracking-wider uppercase text-[10px]">Lifetime Care</span>
                  <span className="text-[11px] leading-normal text-[#FAF6F0]/50">Complimentary cleaning and security checks</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 3: Copyright, Credit & Payment Icons */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* 10. Copyright & Custom Credit */}
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p className="font-sans text-[10px] text-[#FAF6F0]/40 uppercase tracking-widest">
              © 2026 AURELIA LUXURY. ALL RIGHTS RESERVED.
            </p>
            <p className="font-sans text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
              This website created by <span className="underline decoration-[#D4AF37]/40">Pallavi Patel</span> • Email: <a href="mailto:pallavipatel8080@gmail.com" className="hover:underline">pallavipatel8080@gmail.com</a>
            </p>
          </div>

          {/* 9. Payment Icons */}
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "APPLE PAY"].map((pay) => (
              <span
                key={pay}
                className="font-sans text-[8px] tracking-[0.15em] text-[#D4AF37] border border-[#D4AF37]/35 rounded px-2.5 py-1 font-bold uppercase bg-[#2b1810]/40 backdrop-blur-sm shadow-sm"
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
