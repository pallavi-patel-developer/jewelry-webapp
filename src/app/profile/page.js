import { ShoppingBag, Heart, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-serif text-black uppercase tracking-widest font-bold">Dashboard</h2>
        <p className="text-black/70 text-sm font-sans font-medium">
          From your account dashboard you can view your recent orders, manage your shipping addresses, and edit your password and account details.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Solid Black Premium Card */}
        <div className="bg-black text-[#FAF6F0] p-8 rounded-sm flex flex-col gap-4 border border-black shadow-xl hover:scale-[1.03] transition-transform duration-300">
          <ShoppingBag className="w-6 h-6 text-brand-btn" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-2xl font-sans font-bold text-white">12</span>
            <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">Total Orders</span>
          </div>
        </div>

        {/* Elegant High Contrast White/Black Cards */}
        <div className="bg-white/80 p-8 rounded-sm flex flex-col gap-4 border border-black shadow-md hover:scale-[1.03] transition-transform duration-300">
          <Heart className="w-6 h-6 text-black" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-2xl font-sans font-bold text-black">8</span>
            <span className="text-xs uppercase tracking-widest text-black/60 font-semibold">Wishlist Items</span>
          </div>
        </div>

        <div className="bg-white/80 p-8 rounded-sm flex flex-col gap-4 border border-black shadow-md hover:scale-[1.03] transition-transform duration-300">
          <MapPin className="w-6 h-6 text-black" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-2xl font-sans font-bold text-black">2</span>
            <span className="text-xs uppercase tracking-widest text-black/60 font-semibold">Saved Addresses</span>
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="flex flex-col gap-6">
        {/* <div className="flex justify-between items-end border-b border-black pb-4">
          <h3 className="text-xl font-serif text-black uppercase tracking-widest font-bold">Recent Orders</h3>
          <Link href="/profile/orders" className="text-xs text-black hover:text-[#736357] font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div> */}

        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-sm">
            <thead>
              <tr className="text-black uppercase tracking-widest text-[10px] border-b border-black font-bold">
                <th className="py-4 px-2">Order ID</th>
                <th className="py-4 px-2">Date</th>
                <th className="py-4 px-2">Status</th>
                <th className="py-4 px-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="text-black font-medium">
              <tr className="border-b border-black/10 hover:bg-black/5 transition-colors cursor-pointer">
                <td className="py-4 px-2 font-bold">#AUR-10924</td>
                <td className="py-4 px-2 opacity-70">Oct 24, 2026</td>
                <td className="py-4 px-2">
                  <span className="bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Delivered</span>
                </td>
                <td className="py-4 px-2 text-right font-bold">₹12,400</td>
              </tr>
              <tr className="border-b border-black/10 hover:bg-black/5 transition-colors cursor-pointer">
                <td className="py-4 px-2 font-bold">#AUR-10871</td>
                <td className="py-4 px-2 opacity-70">Sep 15, 2026</td>
                <td className="py-4 px-2">
                  <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Shipped</span>
                </td>
                <td className="py-4 px-2 text-right font-bold">₹8,900</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
