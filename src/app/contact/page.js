import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact Us | Aurelia Jewelry",
  description: "Get in touch with the Aurelia team for inquiries and bespoke appointments.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 md:py-32 max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-serif text-brand-heading uppercase tracking-widest mb-6">
          Contact Us
        </h1>
        
        <p className="text-brand-body font-sans text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          We invite you to reach out for bespoke appointments, general inquiries, or assistance with finding the perfect piece.
        </p>
        
        <div className="flex flex-col md:flex-row gap-12 text-left bg-brand-card/50 backdrop-blur-sm p-10 md:p-16 rounded-2xl border border-brand-border">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-brand-heading uppercase">Visit Our Boutique</h3>
            <p className="text-brand-body font-sans text-sm">
              123 Avenue of the Stars<br />
              Suite 400<br />
              Los Angeles, CA 90067
            </p>
          </div>
          
          <div className="hidden md:block w-px bg-brand-border h-full"></div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-brand-heading uppercase">Get in Touch</h3>
            <p className="text-brand-body font-sans text-sm">
              Email: concierge@aurelia.com<br />
              Phone: +1 (555) 123-4567<br />
              Hours: Mon-Sat, 10am - 7pm
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
