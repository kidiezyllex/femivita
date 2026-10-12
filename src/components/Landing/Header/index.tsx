"use client";

import { AdminEditBar } from "@/components/Admin/AdminEditBar";
import { useOptionalLanding } from "@/context/LandingContext";
import { cn } from "@/lib/utils";
import { EditableContextLike } from "@/types/editableContext";
import React, { useEffect, useState } from "react";
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
  /**
   * Lay the header over the first section (e.g. the Hero) instead of pushing it down.
   * The header is transparent at the top of the page and turns white once the page is scrolled.
   */
  overlay?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ adminBarContext, overlay = false }) => {
  const landing = useOptionalLanding();
  const ctx = adminBarContext ?? landing;
  const showAdminBar = Boolean(ctx?.isEditMode && ctx?.isAdmin);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [overlay]);

  const isSolid = !overlay || isScrolled;

  // Spacer heights: header is 90px (mobile), 60px (tablet) or 104px (desktop, per Figma); the admin bar adds 48/56/62px.
  let spacerClass: string;
  if (overlay) {
    spacerClass = showAdminBar ? "h-12 xs:h-14 sm:h-[62px]" : "h-0";
  } else {
    spacerClass = showAdminBar
      ? "h-[138px] xs:h-[146px] sm:h-[152px] md:h-[122px] lg:h-[166px]"
      : "h-[90px] md:h-[60px] lg:h-[104px]";
  }

  return (
    <div className="w-full">
      {/* Spacer to offset the fixed header */}
      <div className={spacerClass} />

      <div className="fixed left-0 top-0 z-[100] w-screen">
        {/* Admin Bar at the very top (above the header) */}
        <AdminEditBar contextValue={adminBarContext} />

        <div className={cn("transition-colors duration-300", isSolid ? "bg-white" : "bg-transparent")}>
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
    </div>
  );
};
