import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Silver Collection | Aurelia Jewelry",
  description: "Explore our exclusive Silver Collection collection.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-bg">
      <Navbar />
      <main className="flex-grow">
        <ProductGrid title="Silver Collection" />
      </main>
    </div>
  );
}
