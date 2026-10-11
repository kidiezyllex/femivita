"use client";

import React from "react";
import { DesktopProductHeroSection } from "./DesktopProductHeroSection";
import { TabletProductHeroSection } from "./TabletProductHeroSection";
import { MobileProductHeroSection } from "./MobileProductHeroSection";
import { ProductHeroSectionProps } from "./types";

export * from "./DesktopProductHeroSection";
export * from "./TabletProductHeroSection";
export * from "./MobileProductHeroSection";
export * from "./types";

export const ProductHeroSection: React.FC<ProductHeroSectionProps> = (props) => {
  return (
    <div className="w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileProductHeroSection {...props} />
      </div>

      {/* Tablet View: 768px - 1023px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletProductHeroSection {...props} />
      </div>

      {/* Desktop View: >= 1024px (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopProductHeroSection {...props} />
      </div>
    </div>
  );
};

export default ProductHeroSection;
