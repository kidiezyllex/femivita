import React from "react";
import { DesktopProductFeature } from "./DesktopProductFeature";
import { MobileProductFeature } from "./MobileProductFeature";
import { TabletProductFeature } from "./TabletProductFeature";
import { ProductFeatureProps } from "./types";

export * from "./DesktopProductFeature";
export * from "./MobileProductFeature";
export * from "./TabletProductFeature";
export * from "./types";

/** One product row of the product list: one layout per breakpoint. */
export const ProductFeature: React.FC<ProductFeatureProps> = (props) => (
  <>
    {/* Mobile: < 768px */}
    <div className="block md:hidden">
      <MobileProductFeature {...props} />
    </div>

    {/* Tablet: 768px - 1023px */}
    <div className="hidden md:block lg:hidden">
      <TabletProductFeature {...props} />
    </div>

    {/* Desktop: >= 1024px */}
    <div className="hidden lg:block">
      <DesktopProductFeature {...props} />
    </div>
  </>
);

export default ProductFeature;
