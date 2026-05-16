import { ShoppingBag, Heart, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-serif text-brand-heading uppercase tracking-widest">Dashboard</h2>
        <p className="text-brand-body text-sm font-sans">
          From your account dashboard you can view your recent orders, manage your shipping addresses, and edit your password and account details.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-brand-hero/30 p-8 rounded-sm flex flex-col gap-4 border border-brand-border/20">
          <ShoppingBag className="w-6 h-6 text-brand-btn" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-2xl font-sans font-bold text-brand-heading">12</span>
            <span className="text-xs uppercase tracking-widest text-brand-body font-medium">Total Orders</span>
          </div>
        </div>
        <div className="bg-brand-hero/30 p-8 rounded-sm flex flex-col gap-4 border border-brand-border/20">
          <Heart className="w-6 h-6 text-brand-btn" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-2xl font-sans font-bold text-brand-heading">8</span>
            <span className="text-xs uppercase tracking-widest text-brand-body font-medium">Wishlist Items</span>
          </div>
        </div>
        <div className="bg-brand-hero/30 p-8 rounded-sm flex flex-col gap-4 border border-brand-border/20">
          <MapPin className="w-6 h-6 text-brand-btn" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-2xl font-sans font-bold text-brand-heading">2</span>
            <span className="text-xs uppercase tracking-widest text-brand-body font-medium">Saved Addresses</span>
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-brand-border/50 pb-4">
          <h3 className="text-xl font-serif text-brand-heading uppercase tracking-widest">Recent Orders</h3>
          <Link href="/profile/orders" className="text-xs text-brand-btn font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-sm">
            <thead>
              <tr className="text-brand-body/60 uppercase tracking-widest text-[10px] border-b border-brand-border/30">
                <th className="py-4 px-2">Order ID</th>
                <th className="py-4 px-2">Date</th>
                <th className="py-4 px-2">Status</th>
                <th className="py-4 px-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="text-brand-heading">
              <tr className="border-b border-brand-border/10 hover:bg-brand-hero/10 transition-colors cursor-pointer">
                <td className="py-4 px-2 font-medium">#AUR-10924</td>
                <td className="py-4 px-2 opacity-70">Oct 24, 2026</td>
                <td className="py-4 px-2">
                  <span className="bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Delivered</span>
                </td>
                <td className="py-4 px-2 text-right font-medium">₹12,400</td>
              </tr>
              <tr className="border-b border-brand-border/10 hover:bg-brand-hero/10 transition-colors cursor-pointer">
                <td className="py-4 px-2 font-medium">#AUR-10871</td>
                <td className="py-4 px-2 opacity-70">Sep 15, 2026</td>
                <td className="py-4 px-2">
                  <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Shipped</span>
                </td>
                <td className="py-4 px-2 text-right font-medium">₹8,900</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
