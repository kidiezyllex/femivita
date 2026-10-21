import React from "react";
import { DesktopProductDetail } from "./DesktopProductDetail";
import { MobileProductDetail } from "./MobileProductDetail";
import { TabletProductDetail } from "./TabletProductDetail";
import { ProductDetailLayoutProps } from "./types";

export * from "./data";
export * from "./DesktopProductDetail";
export * from "./MobileProductDetail";
export * from "./TabletProductDetail";
export * from "./types";

/** Product detail body: one layout per breakpoint. The footer is added by the page. */
export const ProductDetailContent: React.FC<ProductDetailLayoutProps> = ({ product }) => (
  <>
    {/* Mobile: < 768px */}
    <div className="block md:hidden">
      <MobileProductDetail product={product} />
    </div>

    {/* Tablet: 768px - 1023px */}
    <div className="hidden md:block lg:hidden">
      <TabletProductDetail product={product} />
    </div>

    {/* Desktop: >= 1024px */}
    <div className="hidden lg:block">
      <DesktopProductDetail product={product} />
    </div>
  </>
);

export default ProductDetailContent;
