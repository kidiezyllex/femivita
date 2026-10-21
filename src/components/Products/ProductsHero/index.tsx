import React from "react";
import { DesktopProductsHero } from "./DesktopProductsHero";
import { MobileProductsHero } from "./MobileProductsHero";
import { TabletProductsHero } from "./TabletProductsHero";
import { ProductsHeroProps } from "./types";

export * from "./DesktopProductsHero";
export * from "./MobileProductsHero";
export * from "./TabletProductsHero";
export * from "./types";

/** Product list banner: one layout per breakpoint. */
export const ProductsHero: React.FC<ProductsHeroProps> = (props) => (
  <>
    {/* Mobile: < 768px */}
    <div className="block md:hidden">
      <MobileProductsHero {...props} />
    </div>

    {/* Tablet: 768px - 1023px */}
    <div className="hidden md:block lg:hidden">
      <TabletProductsHero {...props} />
    </div>

    {/* Desktop: >= 1024px */}
    <div className="hidden lg:block">
      <DesktopProductsHero {...props} />
    </div>
  </>
);

export default ProductsHero;
