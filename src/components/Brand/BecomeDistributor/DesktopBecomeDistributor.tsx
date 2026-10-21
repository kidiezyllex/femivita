import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { BecomeDistributorBackground, BecomeDistributorText } from "./BecomeDistributorParts";
import { BecomeDistributorProps, DEFAULT_BECOME_DISTRIBUTOR_DATA } from "./types";

/** >= 1024px: "Trở thành Nhà phân phối" banner, text on the left over the head-office photo (Figma 1440 x 637). */
export const DesktopBecomeDistributor: React.FC<BecomeDistributorProps> = ({
  data = DEFAULT_BECOME_DISTRIBUTOR_DATA,
}) => (
  <section id="become-distributor" className="relative w-full overflow-hidden bg-white px-12 py-20">
    <ScrollReveal direction="up" delay={0.05}>
      <div className="relative min-h-[597px] overflow-hidden rounded-2xl bg-ink-line">
        <BecomeDistributorBackground data={data} />
        <BecomeDistributorText
          data={data}
          className="px-[113px] py-20"
          headlineClassName="[font-size:clamp(32px,3.34vw,48px)]"
        />
      </div>
    </ScrollReveal>
  </section>
);
