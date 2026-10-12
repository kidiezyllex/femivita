"use client";

import { AdminLoginDialog } from "@/components/Admin/AdminLoginDialog";
import { SectionEditWrapper } from "@/components/Admin/SectionEditWrapper";
import { SectionModalsContainer } from "@/components/Admin/modals/SectionModalsContainer";
import { BrandStory } from "@/components/Landing/BrandStory";
import { CTA } from "@/components/Landing/CTA";
import { DualAntiAging } from "@/components/Landing/DualAntiAging";
import { FAQSection } from "@/components/Landing/FAQSection";
import { FemivitaFaq } from "@/components/Landing/FemivitaFaq";
import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { Hero } from "@/components/Landing/Hero";
import { KnowledgeArticles } from "@/components/Landing/KnowledgeArticles";
import { ProductShowcase } from "@/components/Landing/ProductShowcase";
import { ProductsSection } from "@/components/Landing/ProductsSection";
import { WhyFemivita } from "@/components/Landing/WhyFemivita";
import { LandingProvider } from "@/context/LandingContext";

function EditPageContent() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F0] text-[#333333]">
      {/* Admin Login Dialog */}
      <AdminLoginDialog />

      {/* Header */}
      <SectionEditWrapper
        sectionKey="megaDropdown"
        sectionTitle="Mega Dropdown (Menu Danh mục sản phẩm)"
      >
        <Header overlay />
      </SectionEditWrapper>

      <main className="w-full flex-1">
        {/* Hero Section */}
        <SectionEditWrapper sectionKey="hero" sectionTitle="Hero Slider">
          <Hero />
        </SectionEditWrapper>

        {/* Why Femivita (chưa có form chỉnh sửa trong admin) */}
        <WhyFemivita />

        {/* Product Showcase (chưa có form chỉnh sửa trong admin) */}
        <ProductShowcase />

        {/* Knowledge Articles (chưa có form chỉnh sửa trong admin) */}
        <KnowledgeArticles />

        {/* Femivita FAQ (chưa có form chỉnh sửa trong admin) */}
        <FemivitaFaq />

        {/* Brand Story */}
        <SectionEditWrapper sectionKey="brandStory" sectionTitle="Câu chuyện thương hiệu">
          <BrandStory />
        </SectionEditWrapper>

        {/* Dual Anti Aging */}
        <SectionEditWrapper sectionKey="dualAntiAging" sectionTitle="Sức mạnh chống lão hóa kép">
          <DualAntiAging />
        </SectionEditWrapper>

        {/* Products Section */}
        <SectionEditWrapper sectionKey="productsSection" sectionTitle="Danh sách sản phẩm">
          <ProductsSection />
        </SectionEditWrapper>

        {/* FAQ Section */}
        <SectionEditWrapper sectionKey="faqSection" sectionTitle="Câu hỏi thường gặp">
          <FAQSection />
        </SectionEditWrapper>

        {/* CTA Section */}
        <SectionEditWrapper sectionKey="ctaSection" sectionTitle="CTA Tư vấn">
          <CTA />
        </SectionEditWrapper>

        {/* Footer */}
        <SectionEditWrapper sectionKey="footer" sectionTitle="Chân trang (Footer)">
          <Footer />
        </SectionEditWrapper>
      </main>

      {/* Edit Form Modals for all sections */}
      <SectionModalsContainer />
    </div>
  );
}

export default function AdminEditLandingPage() {
  return (
    <LandingProvider initialEditMode={true}>
      <EditPageContent />
    </LandingProvider>
  );
}
