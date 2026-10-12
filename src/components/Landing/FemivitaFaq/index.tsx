"use client";

import React from "react";
import { DesktopFemivitaFaq } from "./DesktopFemivitaFaq";
import { MobileFemivitaFaq } from "./MobileFemivitaFaq";
import { TabletFemivitaFaq } from "./TabletFemivitaFaq";
import { DEFAULT_FEMIVITA_FAQ_DATA, FemivitaFaqData } from "./types";

export * from "./DesktopFemivitaFaq";
export * from "./FemivitaFaqPanel";
export * from "./MobileFemivitaFaq";
export * from "./TabletFemivitaFaq";
export * from "./types";

interface FemivitaFaqSectionProps {
  data?: FemivitaFaqData;
}

export const FemivitaFaq: React.FC<FemivitaFaqSectionProps> = ({
  data = DEFAULT_FEMIVITA_FAQ_DATA,
}) => (
  <section id="femivita-faq" className="relative w-full overflow-hidden">
    {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
    <div className="block md:hidden">
      <MobileFemivitaFaq data={data} />
    </div>

    {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
    <div className="hidden md:block lg:hidden">
      <TabletFemivitaFaq data={data} />
    </div>

    {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
    <div className="hidden lg:block">
      <DesktopFemivitaFaq data={data} />
    </div>
  </section>
);

export default FemivitaFaq;
