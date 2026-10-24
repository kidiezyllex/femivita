import { BecomeDistributor } from "@/components/Brand/BecomeDistributor";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { PRODUCT_DETAIL_GLOW, ProductInfographics } from "./ProductDetailParts";
import { ProductFaq } from "./ProductFaq";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductDetailLayoutProps } from "./types";

export const DesktopProductDetail: React.FC<ProductDetailLayoutProps> = ({ product }) => (
  <>
    <section className="relative w-full overflow-clip bg-white pb-[200px] pt-24">
      <div aria-hidden className={PRODUCT_DETAIL_GLOW} />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 items-start gap-x-4 gap-y-10">
        <div className="sticky top-[96px] col-span-5 col-start-2 self-start">
          <ProductGallery images={product.gallery} className="h-[550px]" sizes="1120px" />
        </div>
        <ScrollReveal direction="up" delay={0.1} className="col-span-5 col-start-7 pl-10">
          <ProductInfo product={product} />
        </ScrollReveal>
      </div>
    </section>

    <ProductInfographics
      infographics={product.infographics}
      className="grid-cols-2 p-12"
      sizes="1320px"
    />

    <ProductFaq faq={product.faq} variant="desktop" />

    <BecomeDistributor data={product.banner} />
  </>
);
