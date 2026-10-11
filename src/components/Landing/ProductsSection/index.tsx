"use client";

import React from "react";
import { DesktopProductsSection } from "./DesktopProductsSection";
import { MobileProductsSection } from "./MobileProductsSection";
import { TabletProductsSection } from "./TabletProductsSection";
import { DEFAULT_PRODUCTS_SECTION_DATA } from "./types";
import { useLanding } from "@/context/LandingContext";

export * from "./DesktopProductsSection";
export * from "./MobileProductsSection";
export * from "./TabletProductsSection";
export * from "./types";

export const ProductsSection: React.FC = () => {
  const { landingData } = useLanding();
  const data = landingData?.productsSection || DEFAULT_PRODUCTS_SECTION_DATA;

  return (
    <section className="w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileProductsSection data={data} />
      </div>

      {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletProductsSection data={data} />
      </div>

      {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopProductsSection data={data} />
      </div>
    </section>
  );
};

export default ProductsSection;
