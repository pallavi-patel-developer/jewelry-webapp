"use client";

import { User, Camera } from "lucide-react";
import { useState } from "react";

export default function InformationPage() {
  const [formData, setFormData] = useState({
    fullName: "Pallavi Patel",
    email: "pallavi.patel@example.com",
    mobile: "+91 98765 43210",
    dob: "1995-08-15",
    gender: "female"
  });

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2 border-b border-brand-border/50 pb-8">
        <h2 className="text-3xl font-serif text-brand-heading uppercase tracking-widest">Personal Information</h2>
        <p className="text-brand-body text-sm font-sans">
          Update your profile details and manage your account security.
        </p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
        {/* Profile Photo */}
        <div className="col-span-full flex items-center gap-8 mb-4">
          <div className="relative w-24 h-24 bg-brand-hero/20 rounded-full border-2 border-brand-border flex items-center justify-center overflow-hidden">
            <User className="w-12 h-12 text-brand-border" strokeWidth={1} />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
              <Camera className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-sans font-bold text-brand-heading uppercase tracking-widest">Profile Photo</h4>
            <p className="text-[10px] text-brand-body font-sans uppercase tracking-widest opacity-60">PNG, JPG up to 5MB</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest text-brand-body font-bold">Full Name</label>
          <input 
            type="text" 
            defaultValue={formData.fullName}
            className="bg-transparent border-b border-brand-border py-2 outline-none focus:border-brand-btn transition-colors font-sans text-brand-heading"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest text-brand-body font-bold">Email Address</label>
          <input 
            type="email" 
            defaultValue={formData.email}
            className="bg-transparent border-b border-brand-border py-2 outline-none focus:border-brand-btn transition-colors font-sans text-brand-heading"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest text-brand-body font-bold">Mobile Number</label>
          <input 
            type="tel" 
            defaultValue={formData.mobile}
            className="bg-transparent border-b border-brand-border py-2 outline-none focus:border-brand-btn transition-colors font-sans text-brand-heading"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest text-brand-body font-bold">Date of Birth</label>
          <input 
            type="date" 
            defaultValue={formData.dob}
            className="bg-transparent border-b border-brand-border py-2 outline-none focus:border-brand-btn transition-colors font-sans text-brand-heading"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest text-brand-body font-bold">Gender</label>
          <select 
            defaultValue={formData.gender}
            className="bg-transparent border-b border-brand-border py-2 outline-none focus:border-brand-btn transition-colors font-sans text-brand-heading"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="col-span-full mt-6">
          <button type="button" className="bg-brand-heading text-brand-light px-10 py-4 text-xs uppercase tracking-[0.2em] font-sans font-bold rounded-sm hover:bg-black transition-colors shadow-lg">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
