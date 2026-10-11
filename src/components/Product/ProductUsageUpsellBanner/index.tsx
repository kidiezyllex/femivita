"use client";

import { DesktopProductUsageUpsellBanner } from "./DesktopProductUsageUpsellBanner";
import { MobileProductUsageUpsellBanner } from "./MobileProductUsageUpsellBanner";
import { TabletProductUsageUpsellBanner } from "./TabletProductUsageUpsellBanner";
import { ProductUsageUpsellBannerProps } from "./types";

export * from "./DesktopProductUsageUpsellBanner";
export * from "./MobileProductUsageUpsellBanner";
export * from "./TabletProductUsageUpsellBanner";
export * from "./types";

export const ProductUsageUpsellBanner: React.FC<ProductUsageUpsellBannerProps> = (props) => {
  return (
    <div className="w-full overflow-hidden">
      {/* Mobile: < 768px */}
      <div className="block md:hidden">
        <MobileProductUsageUpsellBanner {...props} />
      </div>

      {/* Tablet: 768px - 991px */}
      <div className="hidden md:block lg:hidden">
        <TabletProductUsageUpsellBanner {...props} />
      </div>

      {/* Desktop: >= 992px */}
      <div className="hidden lg:block">
        <DesktopProductUsageUpsellBanner {...props} />
      </div>
    </div>
  );
};

export default ProductUsageUpsellBanner;
