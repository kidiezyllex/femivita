"use client";

import React from "react";
import { DesktopBrandStory } from "./DesktopBrandStory";
import { MobileBrandStory } from "./MobileBrandStory";
import { TabletBrandStory } from "./TabletBrandStory";
import { DEFAULT_BRAND_STORY_DATA } from "./types";
import { useLanding } from "@/context/LandingContext";

export * from "./DesktopBrandStory";
export * from "./MobileBrandStory";
export * from "./TabletBrandStory";
export * from "./types";

export const BrandStory: React.FC = () => {
  const { landingData } = useLanding();
  const data = landingData?.brandStory || DEFAULT_BRAND_STORY_DATA;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileBrandStory data={data} />
      </div>

      {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletBrandStory data={data} />
      </div>

      {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopBrandStory data={data} />
      </div>
    </section>
  );
};

export default BrandStory;
