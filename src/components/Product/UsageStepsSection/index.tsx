"use client";

import React from "react";
import { DesktopUsageStepsSection } from "./DesktopUsageStepsSection";
import { TabletUsageStepsSection } from "./TabletUsageStepsSection";
import { MobileUsageStepsSection } from "./MobileUsageStepsSection";
import { UsageStepsSectionProps } from "./types";

export * from "./DesktopUsageStepsSection";
export * from "./TabletUsageStepsSection";
export * from "./MobileUsageStepsSection";
export * from "./types";

export const UsageStepsSection: React.FC<UsageStepsSectionProps> = (props) => {
  return (
    <div className="w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileUsageStepsSection {...props} />
      </div>

      {/* Tablet View: 768px - 1023px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletUsageStepsSection {...props} />
      </div>

      {/* Desktop View: >= 1024px (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopUsageStepsSection {...props} />
      </div>
    </div>
  );
};

export default UsageStepsSection;
