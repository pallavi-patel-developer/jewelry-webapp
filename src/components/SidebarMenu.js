import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const menuData = [
  {
    title: "Shop By Category",
    links: [
      { label: "Rings", href: "/rings" },
      { label: "Earrings", href: "/earrings" },
      { label: "Necklaces", href: "/necklaces" },
      { label: "Bracelets", href: "/bracelets" }
    ]
  },
  {
    title: "Shop By Gender",
    links: [
      { label: "For Her", href: "/for-her" },
      { label: "For Him", href: "/for-him" }
    ]
  },
  {
    title: "Material",
    links: [
      { label: "Gold", href: "/gold" },
      { label: "Silver", href: "/silver" }
    ]
  },
  {
    title: "Price Range",
    links: [
      { label: "Under $500", href: "#" },
      { label: "$500 - $1,000", href: "#" },
      { label: "$1,000 - $5,000", href: "#" },
      { label: "Over $5,000", href: "#" }
    ]
  },
  {
    title: "Collection",
    links: [
      { label: "New Arrivals", href: "#" },
      { label: "Best Sellers", href: "#" },
      { label: "Trending Bridal", href: "#" }
    ]
  },
  {
    title: "Offers",
    links: [
      { label: "On Sale", href: "#" },
      { label: "Buy 1 Get 1", href: "#" },
      { label: "Discounted Items", href: "#" }
    ]
  }
];

export default function SidebarMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-heading/30 backdrop-blur-sm z-[100]"
          />

          {/* Sidebar Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[85vw] md:w-[400px] bg-brand-bg shadow-2xl z-[101] overflow-y-auto flex flex-col border-r border-brand-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-brand-border">
              <h2 className="text-2xl font-serif text-brand-heading uppercase tracking-widest">Menu</h2>
              <button 
                onClick={onClose}
                className="text-brand-heading hover:text-brand-btn-hover transition-colors p-2 -mr-2 rounded-full hover:bg-brand-border/50"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow p-6 md:p-8 flex flex-col gap-8 pb-32">
              {menuData.map((section, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h3 className="text-sm font-sans tracking-[0.2em] text-brand-heading font-bold uppercase mb-2">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-3 pl-2">
                    {section.links.map((link, linkIdx) => (
                      <Link 
                        key={linkIdx} 
                        href={link.href} 
                        onClick={onClose}
                        className="text-brand-body font-serif text-xl hover:text-brand-btn-hover hover:translate-x-1 transition-all duration-300 w-fit"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
