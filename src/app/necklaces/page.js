import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Necklaces | Aurelia Jewelry",
  description: "Explore our exclusive Necklaces collection.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-bg">
      <Navbar />
      <main className="flex-grow">
        <ProductGrid title="Necklaces" />
      </main>
    </div>
  );
}
