"use client";

import React from "react";
import { DesktopDualAntiAging } from "./DesktopDualAntiAging";
import { MobileDualAntiAging } from "./MobileDualAntiAging";
import { TabletDualAntiAging } from "./TabletDualAntiAging";
import { DEFAULT_DUAL_ANTI_AGING_DATA } from "./types";
import { useLanding } from "@/context/LandingContext";

export * from "./DesktopDualAntiAging";
export * from "./MobileDualAntiAging";
export * from "./TabletDualAntiAging";
export * from "./types";

export const DualAntiAging: React.FC = () => {
  const { landingData } = useLanding();
  const data = landingData?.dualAntiAging || DEFAULT_DUAL_ANTI_AGING_DATA;

  return (
    <section className="w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileDualAntiAging data={data} />
      </div>

      {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletDualAntiAging data={data} />
      </div>

      {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopDualAntiAging data={data} />
      </div>
    </section>
  );
};

export default DualAntiAging;
