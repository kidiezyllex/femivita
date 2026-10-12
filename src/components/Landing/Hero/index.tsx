"use client";

import { DesktopHero } from "./DesktopHero";
import { MobileHero } from "./MobileHero";
import { TabletHero } from "./TabletHero";

export * from "./DesktopHero";
export * from "./MarqueeBanner";
export * from "./MobileHero";
export * from "./TabletHero";
export * from "./types";

export const Hero = () => (
  <div className="w-full">
    {/* Mobile View: < 768px (Bao gồm <360px, 360px-480px, 481px-767px) */}
    <div className="block md:hidden">
      <MobileHero />
    </div>

    {/* Tablet View: 768px - 991px (Tablet dọc) */}
    <div className="hidden md:block lg:hidden">
      <TabletHero />
    </div>

    {/* Desktop View: >= 992px / 1024px+ (Tablet ngang, Laptop 1280px-1439px, Figma 1440px-1919px, >=1920px) */}
    <div className="hidden lg:block">
      <DesktopHero />
    </div>
  </div>
);
