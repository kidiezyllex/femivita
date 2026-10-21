import { BecomeDistributor } from "@/components/Brand/BecomeDistributor";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { PRODUCT_DETAIL_GLOW, ProductInfographics } from "./ProductDetailParts";
import { ProductFaq } from "./ProductFaq";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductDetailLayoutProps } from "./types";

/** < 768px: everything in one column. */
export const MobileProductDetail: React.FC<ProductDetailLayoutProps> = ({ product }) => (
  <>
    <section className="relative w-full overflow-clip bg-white px-4 pb-8 pt-24">
      <div aria-hidden className={PRODUCT_DETAIL_GLOW} />

      <div className="relative mx-auto grid max-w-[1440px] gap-8">
        <ProductGallery images={product.gallery} className="h-[360px]" sizes="100vw" />
        <ScrollReveal direction="up" delay={0.1}>
          <ProductInfo product={product} titleClassName="text-[28px]" />
        </ScrollReveal>
      </div>
    </section>

    <ProductInfographics infographics={product.infographics} className="p-4" sizes="100vw" />

    <ProductFaq faq={product.faq} variant="mobile" />

    <BecomeDistributor data={product.banner} />
  </>
);
