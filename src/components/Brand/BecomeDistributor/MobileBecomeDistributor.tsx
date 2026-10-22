import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { BecomeDistributorProps, DEFAULT_BECOME_DISTRIBUTOR_DATA } from "./types";

export const MobileBecomeDistributor: React.FC<BecomeDistributorProps> = ({
  data = DEFAULT_BECOME_DISTRIBUTOR_DATA,
}) => (
  <section id="become-distributor" className="relative w-full overflow-hidden bg-white px-4 py-12">
    <ScrollReveal direction="up" delay={0.05}>
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl px-4 py-5">
        {/* Photo, oversized and pushed down-left so only the building shows */}
        <img
          src={data.image}
          alt={data.imageAlt}
          draggable={false}
          className="absolute left-[-54.27%] top-[18.33%] h-[81.7%] w-[183.02%] max-w-none"
        />

        {/* Lavender fade from the top corner behind the title */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(171.47deg,#E0CBED_3.88%,rgba(246,240,250,0.9)_25.93%,rgba(255,255,255,0)_40.29%)]"
        />

        {/* Text and button */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-google-sans text-[14px] leading-[1.2] text-ink-muted">
              {data.eyebrow}
            </p>
            <h2 className="font-sans text-2xl font-medium leading-[1.4] text-black">
              {data.headlineStart}
              <br />
              <span className="text-brand-text">{data.headlineHighlight}</span>
            </h2>
          </div>

          <div className="self-start">
            <PillLinkButton href={data.ctaHref} label={data.ctaLabel} />
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);
