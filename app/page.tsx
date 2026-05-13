import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { PillarsSection } from "@/components/pillars-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <PillarsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
