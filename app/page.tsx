import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
}
