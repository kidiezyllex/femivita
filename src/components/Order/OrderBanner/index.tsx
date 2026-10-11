"use client";

import { useOptionalLanding } from "@/context/LandingContext";
import { DesktopOrderBanner } from "./DesktopOrderBanner";
import { MobileOrderBanner } from "./MobileOrderBanner";
import { TabletOrderBanner } from "./TabletOrderBanner";

export * from "./DesktopOrderBanner";
export * from "./MobileOrderBanner";
export * from "./TabletOrderBanner";
export * from "./types";
export * from "./useOrderForm";

export const OrderBanner = () => {
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);

  const bannerHeightClass = showAdminBar
    ? "min-h-[calc(100vh-156px)]"
    : "min-h-[calc(100vh-94px)]";

  return (
    <>
      {/* Mobile OrderBanner: < 768px */}
      <div className="block md:hidden">
        <MobileOrderBanner bannerHeightClass={bannerHeightClass} />
      </div>

      {/* Tablet OrderBanner: 768px - 991px */}
      <div className="hidden md:block lg:hidden">
        <TabletOrderBanner bannerHeightClass={bannerHeightClass} />
      </div>

      {/* Desktop OrderBanner: >= 992px */}
      <div className="hidden lg:block">
        <DesktopOrderBanner />
      </div>
    </>
  );
};

export default OrderBanner;
