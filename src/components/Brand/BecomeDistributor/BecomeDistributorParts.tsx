import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { cn } from "@/lib/utils";
import React from "react";
import { BecomeDistributorData } from "./types";

/** Head-office photo filling the card, anchored to the right. */
export const BecomeDistributorBackground: React.FC<{ data: BecomeDistributorData }> = ({ data }) => (
  <div className="absolute inset-0 z-0">
    <img
      src={data.image}
      alt={data.imageAlt}
      draggable={false}
      className="h-full w-full object-cover object-right"
    />
  </div>
);

export const BecomeDistributorText: React.FC<{
  data: BecomeDistributorData;
  /** Padding of the breakpoint. */
  className?: string;
  headlineClassName?: string;
}> = ({ data, className, headlineClassName }) => (
  <div className={cn("relative z-10 flex flex-col justify-center", className)}>
    <div className="flex max-w-[437px] flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
        <h2 className={cn("font-sans font-bold leading-[1.3] text-gray-700", headlineClassName)}>
          {data.headlineStart}
          <br />
          <span className="text-brand-text">{data.headlineHighlight}</span>
        </h2>
      </div>
      <p className="whitespace-pre-line font-google-sans text-base leading-[1.6] text-[#171717]/60">
        {data.description}
      </p>
      <div>
        <PillLinkButton href={data.ctaHref} label={data.ctaLabel} />
      </div>
    </div>
  </div>
);
