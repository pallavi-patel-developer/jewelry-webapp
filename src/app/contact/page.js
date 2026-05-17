import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Aurelia Jewelry",
  description: "Get in touch with the Aurelia team for inquiries and bespoke appointments.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-bg">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 md:py-32 max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-serif text-black uppercase tracking-widest mb-6 font-bold">
          Contact Us
        </h1>
        
        <p className="text-black/75 font-sans text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
          We invite you to reach out for bespoke appointments, general inquiries, or assistance with finding the perfect piece.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-sm border border-black text-left shadow-2xl">
          {/* Contact Form */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-3xl text-black uppercase font-bold border-b border-black/10 pb-4">Send an Inquiry</h3>
            <form className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-transparent border-b border-black/30 pb-3 outline-none focus:border-black transition-colors placeholder:text-black/40 text-black font-sans font-medium" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-transparent border-b border-black/30 pb-3 outline-none focus:border-black transition-colors placeholder:text-black/40 text-black font-sans font-medium" 
              />
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                className="w-full bg-transparent border-b border-black/30 pb-3 outline-none focus:border-black transition-colors placeholder:text-black/40 text-black font-sans font-medium resize-none"
              ></textarea>
              <button 
                type="button" 
                className="mt-2 bg-black text-[#FAF6F0] font-sans text-xs tracking-[0.15em] uppercase py-4 px-8 rounded-sm hover:bg-[#736357] shadow-lg transition-colors w-fit font-bold"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-10 lg:pl-12 lg:border-l border-black/20 justify-center">
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black uppercase font-bold">Visit Our Boutique</h3>
              <p className="text-black/75 font-sans text-base leading-relaxed font-medium">
                123 Avenue of the Stars<br />
                Suite 400<br />
                Los Angeles, CA 90067
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black uppercase font-bold">Get in Touch</h3>
              <p className="text-black/75 font-sans text-base leading-relaxed font-medium">
                Email: concierge@aurelia.com<br />
                Phone: +1 (555) 123-4567<br />
                Hours: Mon-Sat, 10am - 7pm
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
