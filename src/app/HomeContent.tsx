"use client";

import { FemivitaFaq } from "@/components/Landing/FemivitaFaq";
import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { Hero } from "@/components/Landing/Hero";
import { KnowledgeArticles } from "@/components/Landing/KnowledgeArticles";
import { ProductShowcase } from "@/components/Landing/ProductShowcase";
import { WhyFemivita } from "@/components/Landing/WhyFemivita";
import { LandingProvider } from "@/context/LandingContext";

export default function HomeContent() {
  return (
    <LandingProvider initialEditMode={false}>
      <div className="flex min-h-screen flex-col bg-[#FAF8F0] text-[#333333]">
        <Header overlay />
        <main className="w-full flex-1">
          <Hero />
          <WhyFemivita />
          <ProductShowcase />
          <KnowledgeArticles />
          <FemivitaFaq />
          {/* <BrandStory /> */}
          {/* <DualAntiAging /> */}
          {/* <ProductsSection /> */}
          {/* <FAQSection /> */}
          {/* <CTA /> */}
          <Footer />
        </main>
      </div>
    </LandingProvider>
  );
}
