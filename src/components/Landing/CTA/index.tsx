"use client";

import React from "react";
import { DesktopCTA } from "./DesktopCTA";
import { MobileCTA } from "./MobileCTA";
import { TabletCTA } from "./TabletCTA";
import { DEFAULT_CTA_DATA } from "./types";
import { useLanding } from "@/context/LandingContext";

export * from "./DesktopCTA";
export * from "./MobileCTA";
export * from "./TabletCTA";
export * from "./types";
export * from "./useCTAForm";

export const CTA: React.FC = () => {
  const { landingData } = useLanding();
  const data = landingData?.ctaSection || DEFAULT_CTA_DATA;

  return (
    <section id="cta" className="relative w-full overflow-hidden">
      {/* Mobile CTA: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileCTA data={data} />
      </div>

      {/* Tablet CTA: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletCTA data={data} />
      </div>

      {/* Desktop CTA: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopCTA data={data} />
      </div>
    </section>
  );
};

export default CTA;
