import React from "react";
import { DesktopBecomeDistributor } from "./DesktopBecomeDistributor";
import { MobileBecomeDistributor } from "./MobileBecomeDistributor";
import { TabletBecomeDistributor } from "./TabletBecomeDistributor";
import { BecomeDistributorProps } from "./types";

export * from "./DesktopBecomeDistributor";
export * from "./MobileBecomeDistributor";
export * from "./TabletBecomeDistributor";
export * from "./types";

/** "Trở thành Nhà phân phối" banner: one layout per breakpoint. */
export const BecomeDistributor: React.FC<BecomeDistributorProps> = (props) => (
  <>
    {/* Mobile: < 768px */}
    <div className="block md:hidden">
      <MobileBecomeDistributor {...props} />
    </div>

    {/* Tablet: 768px - 1023px */}
    <div className="hidden md:block lg:hidden">
      <TabletBecomeDistributor {...props} />
    </div>

    {/* Desktop: >= 1024px */}
    <div className="hidden lg:block">
      <DesktopBecomeDistributor {...props} />
    </div>
  </>
);

export default BecomeDistributor;
