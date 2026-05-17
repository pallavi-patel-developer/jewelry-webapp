"use client";

import { useState } from "react";
import { Download, ChevronDown, ChevronUp, CheckCircle2, Circle } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const statusSteps = [
  "Pending",
  "Paid via UPI",
  "Confirmed",
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered"
];

const orders = [
  {
    id: "AUR-10924",
    date: "Oct 24, 2026",
    status: "Delivered",
    currentStep: 6,
    payment: "Paid via UPI",
    total: "₹12,400",
    items: [
      { name: "Aurelia Signature Ring", image: "/images/ring.png", price: "₹1,200" },
      { name: "Celestial Earrings", image: "/images/earring.png", price: "₹850" }
    ]
  },
  {
    id: "AUR-10871",
    date: "Sep 15, 2026",
    status: "Processing",
    currentStep: 3,
    payment: "Paid via UPI",
    total: "₹8,900",
    items: [
      { name: "Eternity Necklace", image: "/images/necklace.png", price: "₹2,100" }
    ]
  }
];

export default function OrdersPage() {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrder = (id) => {
    setExpandedOrder(expandedOrder === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-serif text-black uppercase tracking-widest font-bold">My Orders</h2>
        <p className="text-black/75 text-sm font-sans font-medium">
          Track your orders and view your purchase history.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {orders.map((order) => (
          <div key={order.id} className="border border-black rounded-sm overflow-hidden bg-white/20 shadow-md">
            {/* Order Header */}
            <div className="bg-black/5 p-6 flex flex-wrap gap-6 justify-between items-center border-b border-black/20">
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-black/60 font-bold">Order ID</span>
                  <span className="text-sm font-sans font-bold text-black">#{order.id}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-black/60 font-bold">Date</span>
                  <span className="text-sm font-sans text-black font-medium">{order.date}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-black/60 font-bold">Payment</span>
                  <span className="text-sm font-sans text-black font-medium">{order.payment}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-black/60 font-bold">Status</span>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter w-fit ${
                    order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-black hover:text-[#736357] transition-colors">
                  <Download className="w-3 h-3" /> Invoice
                </button>
              </div>
            </div>

            {/* Order Content */}
            <div className="p-6 flex flex-col md:flex-row gap-8 justify-between items-center border-b border-black/10">
              <div className="flex flex-col gap-6 w-full">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 bg-black/5 rounded-sm overflow-hidden flex items-center justify-center p-2 border border-black/10">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" style={{ mixBlendMode: "multiply" }} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-serif text-black uppercase tracking-wide font-semibold">{item.name}</span>
                      <span className="text-xs text-black/60 font-sans font-medium">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                <span className="text-xl font-sans font-bold text-black">{order.total}</span>
                <button 
                  onClick={() => toggleOrder(order.id)}
                  className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.2em] text-black hover:text-[#736357] transition-colors group"
                >
                  Track Your Order 
                  {expandedOrder === order.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Tracking Flow Dropdown */}
            <AnimatePresence>
              {expandedOrder === order.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-brand-hero/5"
                >
                  <div className="p-8 md:p-12">
                    <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                      {/* Connector Line (Desktop) */}
                      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-border/30 -translate-y-1/2 hidden md:block z-0"></div>
                      
                      {statusSteps.map((step, index) => {
                        const isCompleted = index <= order.currentStep;
                        const isCurrent = index === order.currentStep;
                        
                        return (
                          <div key={step} className="relative z-10 flex md:flex-col items-center gap-4 md:gap-3 text-center group">
                            {/* Circle/Check Icon */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${
                              isCompleted ? "bg-brand-heading text-white" : "bg-white border-2 border-brand-border/30 text-brand-border"
                            }`}>
                              {isCompleted ? (
                                <CheckCircle2 className="w-5 h-5" />
                              ) : (
                                <Circle className="w-5 h-5 fill-current opacity-20" />
                              )}
                            </div>
                            
                            {/* Step Text */}
                            <div className="flex flex-col md:items-center">
                              <span className={`text-[10px] uppercase tracking-widest font-sans font-bold transition-colors ${
                                isCompleted ? "text-brand-heading" : "text-brand-body/40"
                              }`}>
                                {step}
                              </span>
                              {isCurrent && (
                                <span className="text-[8px] text-brand-btn font-bold uppercase tracking-tighter animate-pulse">Current</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {order.status === "Cancelled" && (
                      <div className="mt-10 p-4 bg-red-50 border border-red-100 rounded-sm flex items-center gap-3">
                         <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                         <span className="text-xs font-sans font-bold text-red-800 uppercase tracking-widest">Order Cancelled</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
