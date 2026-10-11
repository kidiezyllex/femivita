"use client";

import React from "react";
import { DesktopFAQSection } from "./DesktopFAQSection";
import { MobileFAQSection } from "./MobileFAQSection";
import { TabletFAQSection } from "./TabletFAQSection";
import { DEFAULT_FAQ_SECTION_DATA } from "./types";
import { useLanding } from "@/context/LandingContext";

export * from "./DesktopFAQSection";
export * from "./MobileFAQSection";
export * from "./TabletFAQSection";
export * from "./types";

export const FAQSection: React.FC = () => {
  const { landingData } = useLanding();
  const data = landingData?.faqSection || DEFAULT_FAQ_SECTION_DATA;

  return (
    <section className="w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileFAQSection data={data} />
      </div>

      {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletFAQSection data={data} />
      </div>

      {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopFAQSection data={data} />
      </div>
    </section>
  );
};

export default FAQSection;
