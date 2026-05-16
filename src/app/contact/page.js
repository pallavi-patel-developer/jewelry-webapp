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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl mx-auto bg-brand-card/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-brand-border text-left shadow-sm">
          {/* Contact Form */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-3xl text-brand-heading uppercase">Send an Inquiry</h3>
            <form className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-transparent border-b border-brand-border pb-3 outline-none focus:border-brand-btn transition-colors placeholder:text-brand-body/60 text-brand-heading font-sans" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-transparent border-b border-brand-border pb-3 outline-none focus:border-brand-btn transition-colors placeholder:text-brand-body/60 text-brand-heading font-sans" 
              />
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                className="w-full bg-transparent border-b border-brand-border pb-3 outline-none focus:border-brand-btn transition-colors placeholder:text-brand-body/60 text-brand-heading font-sans resize-none"
              ></textarea>
              <button 
                type="button" 
                className="mt-2 bg-brand-btn text-brand-light font-sans text-xs tracking-[0.15em] uppercase py-4 px-8 rounded-sm hover:bg-brand-btn-hover transition-colors w-fit"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-10 lg:pl-12 lg:border-l border-brand-border justify-center">
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-brand-heading uppercase">Visit Our Boutique</h3>
              <p className="text-brand-body font-sans text-base leading-relaxed">
                123 Avenue of the Stars<br />
                Suite 400<br />
                Los Angeles, CA 90067
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-brand-heading uppercase">Get in Touch</h3>
              <p className="text-brand-body font-sans text-base leading-relaxed">
                Email: concierge@aurelia.com<br />
                Phone: +1 (555) 123-4567<br />
                Hours: Mon-Sat, 10am - 7pm
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
