import React from "react";
import { ProductsHeroPhoto, ProductsHeroTitle } from "./ProductsHeroParts";
import { ProductsHeroProps } from "./types";

/** >= 1024px: Figma "Hero", 1440 x 600. The header overlays its top edge. */
export const DesktopProductsHero: React.FC<ProductsHeroProps> = (props) => (
  <section className="relative h-[600px] w-full overflow-hidden">
    <ProductsHeroPhoto className="object-center" />

    <div className="relative flex h-full items-end px-12 pb-10">
      <ProductsHeroTitle
        {...props}
        className="h-[300px] [font-size:clamp(32px,3.34vw,48px)]"
      />
    </div>
  </section>
);
