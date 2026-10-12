"use client";

import React from "react";
import { DesktopWhyFemivita } from "./DesktopWhyFemivita";
import { MobileWhyFemivita } from "./MobileWhyFemivita";
import { TabletWhyFemivita } from "./TabletWhyFemivita";
import { DEFAULT_WHY_FEMIVITA_DATA, WhyFemivitaData } from "./types";

export * from "./DesktopWhyFemivita";
export * from "./MobileWhyFemivita";
export * from "./TabletWhyFemivita";
export * from "./types";

interface WhyFemivitaSectionProps {
  data?: WhyFemivitaData;
}

export const WhyFemivita: React.FC<WhyFemivitaSectionProps> = ({
  data = DEFAULT_WHY_FEMIVITA_DATA,
}) => (
  <section id="why-femivita" className="relative w-full overflow-hidden bg-white">
    {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
    <div className="block md:hidden">
      <MobileWhyFemivita data={data} />
    </div>

    {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
    <div className="hidden md:block lg:hidden">
      <TabletWhyFemivita data={data} />
    </div>

    {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
    <div className="hidden lg:block">
      <DesktopWhyFemivita data={data} />
    </div>
  </section>
);

export default WhyFemivita;
