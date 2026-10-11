"use client";

import { DEFAULT_COMBO_PRODUCT_PAGE_DATA } from "@/constants/defaultProductPageData";
import { useOptionalProductPage } from "@/context/ProductPageContext";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/mdi-icon";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import { useState } from "react";
import { DesktopFixedOrderBar } from "./DesktopFixedOrderBar";
import { MobileFixedOrderBar } from "./MobileFixedOrderBar";
import { TabletFixedOrderBar } from "./TabletFixedOrderBar";
import { FixedOrderBarProps } from "./types";

export * from "./DesktopFixedOrderBar";
export * from "./MobileFixedOrderBar";
export * from "./TabletFixedOrderBar";
export * from "./types";

export const FixedOrderBar = ({ data: dataProp }: FixedOrderBarProps = {}) => {
  const productPage = useOptionalProductPage();
  const data = dataProp || productPage?.productPageData || DEFAULT_COMBO_PRODUCT_PAGE_DATA;
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40"
      animate={{ y: isVisible ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
    >
      <button
        type="button"
        onClick={() => setIsVisible((prev) => !prev)}
        aria-label={isVisible ? "Ẩn thanh đặt hàng" : "Hiện thanh đặt hàng"}
        className="absolute -top-[22px] right-0 z-50 flex h-[22px] w-10 cursor-pointer touch-manipulation select-none items-center justify-center rounded-t-md bg-gray-400 text-white"
      >
        {isVisible ? <Icon path={mdiChevronDown} className="h-5 w-5" /> : <Icon path={mdiChevronUp} className="h-5 w-5" />}
      </button>

      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileFixedOrderBar data={data} />
      </div>

      {/* Tablet View: 768px - 1023px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletFixedOrderBar data={data} />
      </div>

      {/* Desktop View: >= 1024px (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopFixedOrderBar data={data} />
      </div>
    </motion.div>
  );
};

export default FixedOrderBar;
