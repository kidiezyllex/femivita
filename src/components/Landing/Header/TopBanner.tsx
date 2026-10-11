"use client";

import { useOptionalLanding } from "@/context/LandingContext";
import React from "react";

export const TopBanner: React.FC<{ text?: string }> = ({ text }) => {
  const landing = useOptionalLanding();
  const contextText = landing?.landingData?.header?.topBannerText;
  const displayText = text || contextText || "Miễn phí giao hàng toàn quốc với tất cả đơn hàng";

  return (
    <div className="bg-eerieBlackV1 flex items-center text-white text-sm font-medium py-2 justify-center h-[34px] sm:h-[40px]">
      {displayText}
    </div>
  );
};
