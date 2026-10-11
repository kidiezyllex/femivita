"use client";

import { BrandStory } from "@/components/Landing/BrandStory";
import { CTA } from "@/components/Landing/CTA";
import { DualAntiAging } from "@/components/Landing/DualAntiAging";
import { FAQSection } from "@/components/Landing/FAQSection";
import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { Hero } from "@/components/Landing/Hero";
import { ProductsSection } from "@/components/Landing/ProductsSection";
import { LandingProvider } from "@/context/LandingContext";

export default function HomeContent() {
  return (
    <LandingProvider initialEditMode={false}>
      <div className="flex min-h-screen flex-col bg-[#FAF8F0] text-[#333333]">
        <Header />
        <main className="w-full flex-1">
          <Hero />
          <BrandStory />
          <DualAntiAging />
          <ProductsSection />
          <FAQSection />
          <CTA />
          <Footer />
        </main>
      </div>
    </LandingProvider>
  );
}
