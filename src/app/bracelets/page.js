import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bracelets | Aurelia Jewelry",
  description: "Explore our exclusive Bracelets collection.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-bg">
      <Navbar />
      <main className="flex-grow">
        <ProductGrid title="Bracelets" />
      </main>
      <Footer />
    </div>
  );
}
