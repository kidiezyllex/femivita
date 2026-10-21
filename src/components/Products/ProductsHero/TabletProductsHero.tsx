import React from "react";
import { ProductsHeroPhoto, ProductsHeroTitle } from "./ProductsHeroParts";
import { ProductsHeroProps } from "./types";

/** 768px - 1023px: 520px tall banner. */
export const TabletProductsHero: React.FC<ProductsHeroProps> = (props) => (
  <section className="relative h-[520px] w-full overflow-hidden">
    <ProductsHeroPhoto className="object-[65%_center]" />

    <div className="relative flex h-full items-end px-8 pb-10">
      <ProductsHeroTitle {...props} className="text-[32px]" />
    </div>
  </section>
);
