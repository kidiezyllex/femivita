"use client";

import { AdminEditBar } from "@/components/Admin/AdminEditBar";
import { useOptionalLanding } from "@/context/LandingContext";
import { EditableContextLike } from "@/types/editableContext";
import React from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { TabletHeader } from "./TabletHeader";

export * from "./DesktopHeader";
export * from "./DesktopMegaDropdown";
export * from "./HeaderCTA";
export * from "./HeaderLogo";
export * from "./MobileHeader";
export * from "./TabletHeader";
export * from "./TabletMegaDropdown";
export * from "./TopBanner";
export * from "./types";

interface HeaderProps {
  adminBarContext?: EditableContextLike;
}

export const Header: React.FC<HeaderProps> = ({ adminBarContext }) => {
  const landing = useOptionalLanding();
  const ctx = adminBarContext ?? landing;
  const showAdminBar = Boolean(ctx?.isEditMode && ctx?.isAdmin);

  return (
    <div className="w-full">
      {/* Spacer to offset the fixed header: 60px (mobile/tablet) or 104px (desktop, per Figma), plus the admin bar when editing */}
      <div
        className={
          showAdminBar
            ? "h-[108px] xs:h-[116px] sm:h-[122px] lg:h-[166px]"
            : "h-[60px] lg:h-[104px]"
        }
      />

      <div className="fixed top-0 left-0 w-screen z-[100]">
        {/* Admin Bar at the very top (above the header) */}
        <AdminEditBar contextValue={adminBarContext} />

        {/* Mobile Header: < 768px (<360px, 360px-480px, 481px-767px) */}
        <div className="block md:hidden">
          <MobileHeader />
        </div>

        {/* Tablet Header: 768px - 991px (Tablet dọc) */}
        <div className="hidden md:block lg:hidden">
          <TabletHeader />
        </div>

        {/* Desktop Header: >= 992px / 1024px+ (Tablet ngang, Laptop 1280-1439px, Figma 1440-1919px, >=1920px) */}
        <div className="hidden lg:block">
          <DesktopHeader />
        </div>
      </div>
    </div>
  );
};
