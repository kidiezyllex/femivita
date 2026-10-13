import Image from "next/image";
import React from "react";
import { ProductsPageData } from "./types";

type ProductsHeroProps = Pick<ProductsPageData, "heroLineOneStart" | "heroLineOneHighlight" | "heroLineTwo">;

/** Product list banner (Figma "Hero", 1440 x 600). The header overlays its top edge. */
export const ProductsHero: React.FC<ProductsHeroProps> = ({
  heroLineOneStart,
  heroLineOneHighlight,
  heroLineTwo,
}) => (
  <section className="relative h-[600px] w-full overflow-hidden md:h-[520px] lg:h-[600px]">
    {/* Figma places the photo slightly oversized and shifted up */}
    <div className="absolute left-[0.02%] top-[-3.7%] h-[107.27%] w-[107.34%]">
      <Image
        src="/images/products/hero.webp"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        draggable={false}
        className="object-cover object-[65%_center] lg:object-center"
      />
    </div>

    <div className="relative flex h-full items-end px-4 pb-10 md:px-8 lg:px-12">
      <h1 className="font-sans font-semibold leading-[1.3] text-black [font-size:clamp(32px,3.34vw,48px)] lg:h-[300px]">
        <span className="block">
          {heroLineOneStart}
          <span className="text-brand-text">{heroLineOneHighlight}</span>
        </span>
        <span className="block">{heroLineTwo}</span>
      </h1>
    </div>
  </section>
);
