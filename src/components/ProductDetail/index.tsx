import { BecomeDistributor } from "@/components/Brand/BecomeDistributor";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ProductFaq } from "./ProductFaq";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductDetailData } from "./types";

export * from "./data";
export * from "./types";

const GLOW =
  "pointer-events-none absolute right-[-1134px] top-[-1221px] h-[2085px] w-[2106px] bg-[radial-gradient(closest-side,rgba(179,118,194,1),rgba(219,193,243,0))] opacity-50";

/** Product detail body: gallery and info, two infographics, FAQ and the "all products" banner. The footer is added by the page. */
export const ProductDetailContent: React.FC<{ product: ProductDetailData }> = ({ product }) => (
  <>
    {/* overflow-clip (not hidden) so the sticky gallery still sticks to the viewport */}
    <section className="relative w-full overflow-clip bg-white px-4 pb-16 pt-[120px] md:px-8 md:pt-[140px] lg:pb-[200px] lg:pt-[200px]">
      <div aria-hidden className={GLOW} />

      <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:gap-x-4">
        <div className="lg:sticky lg:top-[120px] lg:col-span-5 lg:col-start-2 lg:self-start">
          <ProductGallery images={product.gallery} />
        </div>
        <ScrollReveal direction="up" delay={0.1} className="lg:col-span-5 lg:col-start-7 lg:pl-10">
          <ProductInfo product={product} />
        </ScrollReveal>
      </div>
    </section>

    <section className="mx-auto grid w-full max-w-[1440px] gap-4 bg-white p-4 md:grid-cols-2 md:p-8 lg:p-12">
      {product.infographics.map((infographic, index) => (
        <ScrollReveal key={infographic.src} direction="up" delay={index * 0.1}>
          <div
            className={cn(
              "relative aspect-square w-full overflow-hidden rounded-2xl",
              infographic.backgroundClassName,
            )}
          >
            <Image
              src={infographic.src}
              alt={infographic.alt}
              fill
              quality={100}
              sizes="(min-width: 1440px) 660px, (min-width: 768px) 50vw, 100vw"
              draggable={false}
              className={cn("object-cover", infographic.objectPositionClassName)}
            />
          </div>
        </ScrollReveal>
      ))}
    </section>

    <ProductFaq faq={product.faq} />

    <BecomeDistributor data={product.banner} />
  </>
);

export default ProductDetailContent;
