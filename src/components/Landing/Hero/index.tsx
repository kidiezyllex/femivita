"use client";

import { useEffect, useState } from "react";
import { DesktopHero } from "./DesktopHero";
import { MarqueeBanner } from "./MarqueeBanner";
import { MobileHero } from "./MobileHero";
import { PRODUCTS } from "./types";
import { TabletHero } from "./TabletHero";
import { useLanding } from "@/context/LandingContext";

export * from "./DesktopHero";
export * from "./MarqueeBanner";
export * from "./MobileHero";
export * from "./TabletHero";
export * from "./types";

const AUTO_SLIDE_INTERVAL = 7000;

export const Hero = () => {
  const { landingData } = useLanding();
  const marqueeText = landingData?.hero?.marqueeText || "TRẺ HÓA LÀN DA TỪ VỎ CHUỐI";
  const products = PRODUCTS;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!products.length) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <div className="w-full">
      {/* Mobile View: < 768px (Bao gồm <360px, 360px-480px, 481px-767px) */}
      <div className="block md:hidden">
        <MobileHero
          products={products}
          activeIndex={activeIndex % products.length}
          onSelectProduct={setActiveIndex}
        />
      </div>

      {/* Tablet View: 768px - 991px (Tablet dọc) */}
      <div className="hidden md:block lg:hidden">
        <TabletHero
          products={products}
          activeIndex={activeIndex % products.length}
          onSelectProduct={setActiveIndex}
        />
      </div>

      {/* Desktop View: >= 992px / 1024px+ (Tablet ngang, Laptop 1280px-1439px, Figma 1440px-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopHero
          products={products}
          activeIndex={activeIndex % products.length}
          onSelectProduct={setActiveIndex}
        />
      </div>

      {/* Marquee Banner */}
      <MarqueeBanner text={marqueeText} />
    </div>
  );
};
