"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Heart, 
  User, 
  MapPin, 
  Settings, 
  LogOut 
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", href: "/profile", icon: LayoutDashboard },
  { name: "My Orders", href: "/profile/orders", icon: ShoppingBag },
  { name: "Wishlist", href: "/profile/wishlist", icon: Heart },
  { name: "Personal Info", href: "/profile/information", icon: User },
  { name: "Address Book", href: "/profile/addresses", icon: MapPin },
];

export default function ProfileLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-serif text-brand-heading uppercase tracking-widest">My Account</h1>
              <p className="text-brand-body text-xs font-sans tracking-wider opacity-60">Welcome back, Pallavi</p>
            </div>

            <nav className="flex flex-col gap-1">
              {sidebarLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-all duration-300 font-sans text-sm tracking-wide ${
                      isActive 
                      ? "bg-black text-[#FAF6F0] shadow-xl font-bold translate-x-1" 
                      : "text-black hover:bg-black/5 font-semibold"
                    }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.5} />
                    {link.name}
                  </Link>
                );
              })}
              
              <button className="flex items-center gap-4 px-4 py-3 mt-4 rounded-sm transition-all duration-300 font-sans text-sm tracking-wide text-red-700 hover:bg-black hover:text-red-400 font-semibold shadow-sm border border-transparent hover:border-red-900/30">
                <LogOut className="w-4 h-4" strokeWidth={1.5} />
                Logout
              </button>
            </nav>
          </aside>

          {/* Content Area */}
          <div className="flex-grow min-h-[60vh] bg-white/70 backdrop-blur-md rounded-sm border border-black p-8 md:p-12 shadow-2xl">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
