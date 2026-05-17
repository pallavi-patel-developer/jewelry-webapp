import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Aurelia Jewelry",
  description: "Learn more about the heritage and craftsmanship behind Aurelia.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-bg">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 md:py-32 max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl text-black md:text-7xl font-serif text-brand-heading uppercase tracking-widest mb-8">
          Our Heritage
        </h1>

        <p className="text-brand-body font-sans text-base md:text-lg leading-relaxed mb-6">
          Founded on the principle that true elegance is timeless, Aurelia Jewelry has been crafting exquisite pieces for those who appreciate the extraordinary. Our journey began with a simple desire: to capture the celestial beauty of the heavens and translate it into wearable art.
        </p>

        <p className="text-brand-body font-sans text-base md:text-lg leading-relaxed">
          Every diamond, every gemstone, and every ounce of gold is meticulously selected and shaped by our master artisans. We believe that jewelry is more than an accessory; it is a legacy passed down through generations. Welcome to the world of Aurelia.
        </p>
      </main>
      <Footer />
    </div>
  );
}
