"use client";

import React from "react";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";
import { TabletFooter } from "./TabletFooter";
import { DEFAULT_FOOTER_CONTENT, FooterContent } from "./types";

export * from "./DesktopFooter";
export * from "./MobileFooter";
export * from "./TabletFooter";
export * from "./types";

interface FooterSectionProps {
  data?: FooterContent;
}

export const Footer: React.FC<FooterSectionProps> = ({ data = DEFAULT_FOOTER_CONTENT }) => (
  <footer className="relative w-full text-white">
    {/* Mobile Footer: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
    <div className="block md:hidden">
      <MobileFooter data={data} />
    </div>

    {/* Tablet Footer: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
    <div className="hidden md:block lg:hidden">
      <TabletFooter data={data} />
    </div>

    {/* Desktop Footer: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
    <div className="hidden lg:block">
      <DesktopFooter data={data} />
    </div>
  </footer>
);

export default Footer;
