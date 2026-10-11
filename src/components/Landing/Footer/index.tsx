"use client";

import React from "react";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";
import { TabletFooter } from "./TabletFooter";
import { useOptionalLanding } from "@/context/LandingContext";

export * from "./DesktopFooter";
export * from "./MobileFooter";
export * from "./TabletFooter";
export * from "./types";

export const Footer: React.FC = () => {
  const landing = useOptionalLanding();
  const footerData = landing?.landingData?.footer;

  const footerProps = {
    logoUrl: footerData?.logoUrl || "/images/large_logo.png",
    slogan:
      footerData?.slogan ||
      "Tôn trọng vẻ đẹp tự nhiên là động lực cho mọi hoạt động phát triển của thương hiệu",
    companyName: footerData?.companyName || "CÔNG TY TNHH CERY SKINLAB",
    businessLicense:
      footerData?.businessLicense ||
      "GCNĐKKD số 0111259343 do Phòng đăng ký kinh doanh - Sở tài chính thành phố Hà Nội cấp lần đầu ngày 22/10/2025.",
    address:
      footerData?.address ||
      "Tầng 9 Tòa Minori, Số 67A Trương Định, Phường Tương Mai, Quận Hoàng Mai, Hà Nội",
    phone: footerData?.phone || "038 324 9898",
    email: footerData?.email || "contact@musase.vn",
    copyright: footerData?.copyright || "@ 2026 Musase",
    socialLinks: footerData?.socialLinks,
  };

  return (
    <footer className="bg-black text-white w-full overflow-hidden">
      {/* Mobile Footer: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileFooter {...footerProps} />
      </div>

      {/* Tablet Footer: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletFooter {...footerProps} />
      </div>

      {/* Desktop Footer: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopFooter {...footerProps} />
      </div>
    </footer>
  );
};

export default Footer;
