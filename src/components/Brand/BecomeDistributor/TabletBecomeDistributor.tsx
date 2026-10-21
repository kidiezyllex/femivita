import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { BecomeDistributorBackground, BecomeDistributorText } from "./BecomeDistributorParts";
import { BecomeDistributorProps, DEFAULT_BECOME_DISTRIBUTOR_DATA } from "./types";

/** 768px - 1023px: card at least 400px tall. */
export const TabletBecomeDistributor: React.FC<BecomeDistributorProps> = ({
  data = DEFAULT_BECOME_DISTRIBUTOR_DATA,
}) => (
  <section id="become-distributor" className="relative w-full overflow-hidden bg-white px-8 py-16">
    <ScrollReveal direction="up" delay={0.05}>
      <div className="relative min-h-[400px] overflow-hidden rounded-2xl bg-ink-line">
        <BecomeDistributorBackground data={data} />
        <BecomeDistributorText data={data} className="px-16 py-16" headlineClassName="text-[32px]" />
      </div>
    </ScrollReveal>
  </section>
);
