import { BecomeDistributor } from "@/components/Brand/BecomeDistributor";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { PRODUCT_DETAIL_GLOW, ProductInfographics } from "./ProductDetailParts";
import { ProductFaq } from "./ProductFaq";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductDetailLayoutProps } from "./types";

/** >= 1024px: 12-column grid, the gallery sticks while the info scrolls (Figma 1440 wide). */
export const DesktopProductDetail: React.FC<ProductDetailLayoutProps> = ({ product }) => (
  <>
    {/* overflow-clip (not hidden) so the sticky gallery still sticks to the viewport */}
    <section className="relative w-full overflow-clip bg-white px-8 pb-[200px] pt-[200px]">
      <div aria-hidden className={PRODUCT_DETAIL_GLOW} />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10">
        <div className="sticky top-[120px] col-span-5 col-start-2 self-start">
          <ProductGallery images={product.gallery} className="h-[550px]" sizes="560px" />
        </div>
        <ScrollReveal direction="up" delay={0.1} className="col-span-5 col-start-7 pl-10">
          <ProductInfo product={product} />
        </ScrollReveal>
      </div>
    </section>

    <ProductInfographics
      infographics={product.infographics}
      className="grid-cols-2 p-12"
      sizes="660px"
    />

    <ProductFaq faq={product.faq} variant="desktop" />

    <BecomeDistributor data={product.banner} />
  </>
);
