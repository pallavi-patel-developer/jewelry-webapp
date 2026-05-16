import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Image from "next/image";

export const metadata = {
  title: "For Her | Aurelia Jewelry",
  description: "Explore our exclusive For Her collection.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-bg">
      <Navbar />

      {/* Banner Section */}
      <div className="w-full relative h-[40vh] md:h-[70vh] bg-brand-hero border-b border-brand-border">
        <Image
          src="/images/for-her-banner-new.png"
          alt="For Her Collection Banner"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <main className="flex-grow">
        <ProductGrid title="Explore The Collection" />
      </main>
    </div>
  );
}
