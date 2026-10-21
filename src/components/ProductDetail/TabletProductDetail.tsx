import { BecomeDistributor } from "@/components/Brand/BecomeDistributor";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { PRODUCT_DETAIL_GLOW, ProductInfographics } from "./ProductDetailParts";
import { ProductFaq } from "./ProductFaq";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductDetailLayoutProps } from "./types";

/** 768px - 1023px: gallery above the info, infographics in two columns. */
export const TabletProductDetail: React.FC<ProductDetailLayoutProps> = ({ product }) => (
  <>
    <section className="relative w-full overflow-clip bg-white px-8 pb-16 pt-[140px]">
      <div aria-hidden className={PRODUCT_DETAIL_GLOW} />

      <div className="relative mx-auto grid max-w-[1440px] gap-10">
        <ProductGallery images={product.gallery} className="h-[450px]" sizes="100vw" />
        <ScrollReveal direction="up" delay={0.1}>
          <ProductInfo product={product} />
        </ScrollReveal>
      </div>
    </section>

    <ProductInfographics
      infographics={product.infographics}
      className="grid-cols-2 p-8"
      sizes="50vw"
    />

    <ProductFaq faq={product.faq} variant="tablet" />

    <BecomeDistributor data={product.banner} />
  </>
);
