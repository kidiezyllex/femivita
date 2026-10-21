import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { BecomeDistributorProps, DEFAULT_BECOME_DISTRIBUTOR_DATA } from "./types";

/** < 768px: the card is only as tall as its text. */
export const MobileBecomeDistributor: React.FC<BecomeDistributorProps> = ({
  data = DEFAULT_BECOME_DISTRIBUTOR_DATA,
}) => (
  <section id="become-distributor" className="relative w-full overflow-hidden bg-white px-4 py-12">
    <ScrollReveal direction="up" delay={0.05}>
      <div className="relative overflow-hidden rounded-2xl bg-ink-line">
        {/* Head-office photo filling the card, anchored to the right */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.image}
            alt={data.imageAlt}
            draggable={false}
            className="h-full w-full object-cover object-right"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">
                {data.eyebrow}
              </p>
              <h2 className="font-sans text-[32px] font-bold leading-[1.3] text-gray-700">
                {data.headlineStart}
                <br></br>
                <span className="text-brand-text">{data.headlineHighlight}</span>
              </h2>
            </div>
            <p className="mt-24 whitespace-pre-line font-google-sans text-base leading-[1.6] text-[#171717]/60">
              {data.description}
            </p>
            <div>
              <PillLinkButton href={data.ctaHref} label={data.ctaLabel} />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);
