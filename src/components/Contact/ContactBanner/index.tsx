"use client";

import { useOptionalLanding } from "@/context/LandingContext";
import { DesktopContactBanner } from "./DesktopContactBanner";
import { MobileContactBanner } from "./MobileContactBanner";
import { TabletContactBanner } from "./TabletContactBanner";

export * from "./DesktopContactBanner";
export * from "./MobileContactBanner";
export * from "./TabletContactBanner";
export * from "./types";
export * from "./useContactForm";

export const ContactBanner = () => {
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);

  // Chiều cao Header trên desktop: TopBanner (48px) + DesktopHeader (60px) = 94px (hoặc 156px khi có AdminEditBar)
  const bannerHeightClass = showAdminBar
    ? "min-h-[calc(100vh-156px)]"
    : "min-h-[calc(100vh-94px)]";

  return (
    <>
      {/* Mobile ContactBanner: < 768px */}
      <div className="block md:hidden">
        <MobileContactBanner bannerHeightClass={bannerHeightClass} />
      </div>

      {/* Tablet ContactBanner: 768px - 991px */}
      <div className="hidden md:block lg:hidden">
        <TabletContactBanner bannerHeightClass={bannerHeightClass} />
      </div>

      {/* Desktop ContactBanner: >= 992px */}
      <div className="hidden lg:block">
        <DesktopContactBanner />
      </div>
    </>
  );
};

export default ContactBanner;
