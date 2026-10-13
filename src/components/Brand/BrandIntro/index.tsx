"use client";

import React from "react";
import { DesktopBrandIntro } from "./DesktopBrandIntro";
import { MobileBrandIntro } from "./MobileBrandIntro";
import { TabletBrandIntro } from "./TabletBrandIntro";
import { BrandIntroData, DEFAULT_BRAND_INTRO_DATA } from "./types";

export * from "./DesktopBrandIntro";
export * from "./MobileBrandIntro";
export * from "./TabletBrandIntro";
export * from "./types";

interface BrandIntroSectionProps {
  data?: BrandIntroData;
}

export const BrandIntro: React.FC<BrandIntroSectionProps> = ({ data = DEFAULT_BRAND_INTRO_DATA }) => (
  <section id="brand-intro" className="relative w-full overflow-hidden bg-white">
    {/* Mobile View: < 768px */}
    <div className="block md:hidden">
      <MobileBrandIntro data={data} />
    </div>

    {/* Tablet View: 768px - 991px */}
    <div className="hidden md:block lg:hidden">
      <TabletBrandIntro data={data} />
    </div>

    {/* Desktop View: >= 992px (Figma 1440px) */}
    <div className="hidden lg:block">
      <DesktopBrandIntro data={data} />
    </div>
  </section>
);

export default BrandIntro;
