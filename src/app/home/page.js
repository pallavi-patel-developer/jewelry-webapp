import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
