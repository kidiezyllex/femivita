"use client";

import React from "react";
import { DesktopProductShowcase } from "./DesktopProductShowcase";
import { MobileProductShowcase } from "./MobileProductShowcase";
import { TabletProductShowcase } from "./TabletProductShowcase";
import { DEFAULT_PRODUCT_SHOWCASE_DATA, ProductShowcaseData } from "./types";

export * from "./DesktopProductShowcase";
export * from "./MobileProductShowcase";
export * from "./TabletProductShowcase";
export * from "./types";

interface ProductShowcaseSectionProps {
  data?: ProductShowcaseData;
}

export const ProductShowcase: React.FC<ProductShowcaseSectionProps> = ({
  data = DEFAULT_PRODUCT_SHOWCASE_DATA,
}) => (
  // overflow-clip (not hidden) so the mobile background can stay sticky while the content scrolls
  <section id="product-showcase" className="relative w-full overflow-clip">
    {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
    <div className="block md:hidden">
      <MobileProductShowcase data={data} />
    </div>

    {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
    <div className="hidden md:block lg:hidden">
      <TabletProductShowcase data={data} />
    </div>

    {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
    <div className="hidden lg:block">
      <DesktopProductShowcase data={data} />
    </div>
  </section>
);

export default ProductShowcase;
