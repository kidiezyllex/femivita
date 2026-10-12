import { PillLinkButton } from "@/components/ui/PillLinkButton";
import React from "react";
import { FemivitaFaqPanel } from "./FemivitaFaqPanel";
import { FemivitaFaqProps } from "./types";

export const TabletFemivitaFaq: React.FC<FemivitaFaqProps> = ({ data }) => (
  <div className="relative overflow-hidden bg-white px-8 pb-16 pt-20">
    {/* Top gradient that continues the lavender of the previous section */}
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-[534px] bg-[linear-gradient(180deg,#C3B2E8_29px,rgba(228,222,228,0)_465px)]"
    />

    <div className="relative flex flex-col gap-12">
      {/* Intro */}
      <div className="flex flex-col items-start gap-2">
        <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
        <h2 className="font-sans text-4xl font-semibold leading-[1.3] text-black">
          {data.titleStart} <span className="text-brand-text">{data.titleHighlight}</span>
        </h2>
        <p className="font-google-sans text-base leading-[1.6] text-secondaryV1">
          {data.description}
        </p>
        <PillLinkButton href={data.ctaHref} label={data.ctaLabel} className="mt-4" />
      </div>

      {/* Tabs and questions */}
      <FemivitaFaqPanel tabs={data.tabs} emptyMessage={data.emptyMessage} />
    </div>
  </div>
);
