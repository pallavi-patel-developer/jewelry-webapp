import { MapPin, Plus, Trash2, Edit3, Home, Briefcase } from "lucide-react";

const savedAddresses = [
  {
    id: 1,
    type: "Home",
    icon: Home,
    name: "Pallavi Patel",
    line1: "123 Avenue of the Stars",
    line2: "Suite 400",
    city: "Los Angeles",
    state: "CA",
    zip: "90067",
    isDefault: true
  },
  {
    id: 2,
    type: "Work",
    icon: Briefcase,
    name: "Aurelia Design Studio",
    line1: "88 Luxury Towers",
    line2: "Floor 12",
    city: "Los Angeles",
    state: "CA",
    zip: "90012",
    isDefault: false
  }
];

export default function AddressesPage() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end border-b border-brand-border/50 pb-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-serif text-brand-heading uppercase tracking-widest">Address Book</h2>
          <p className="text-brand-body text-sm font-sans">
            Manage your shipping and billing addresses for faster checkout.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-brand-heading text-brand-light px-6 py-3 text-[10px] uppercase tracking-widest font-sans font-bold rounded-sm hover:bg-black transition-colors w-fit mt-4 md:mt-0">
          <Plus className="w-4 h-4" /> Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {savedAddresses.map((address) => {
          const Icon = address.icon;
          return (
            <div key={address.id} className={`p-8 rounded-sm border flex flex-col gap-6 transition-all duration-300 ${
              address.isDefault ? "border-brand-btn bg-brand-hero/10" : "border-brand-border/30 hover:border-brand-btn/50"
            }`}>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-heading/5 rounded-sm">
                    <Icon className="w-4 h-4 text-brand-heading" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-brand-body font-bold">{address.type}</span>
                    {address.isDefault && (
                      <span className="text-[10px] text-brand-btn font-bold uppercase tracking-tighter">Default Address</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 text-brand-body/40 hover:text-brand-heading transition-colors" title="Edit">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-brand-body/40 hover:text-red-700 transition-colors" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-sans font-bold text-brand-heading">{address.name}</h4>
                <p className="font-sans text-sm text-brand-body leading-relaxed">
                  {address.line1}<br />
                  {address.line2 && <>{address.line2}<br /></>}
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
