"use client";

import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { FemivitaFaqPanel } from "./FemivitaFaqPanel";
import { FemivitaFaqProps } from "./types";

export const DesktopFemivitaFaq: React.FC<FemivitaFaqProps> = ({ data }) => (
  <div className="relative flex min-h-[920px] items-center overflow-hidden bg-white pb-20 pt-[120px]">
    {/* Top gradient that continues the lavender of the previous section */}
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-[534px] bg-[linear-gradient(180deg,#C3B2E8_29px,rgba(228,222,228,0)_465px)]"
    />

    <div className="relative flex w-full items-start gap-12 px-8 xl:gap-[130px] xl:px-[161px]">
      {/* Intro */}
      <ScrollReveal direction="right" delay={0.05}>
        <div className="flex w-[260px] shrink-0 flex-col items-start gap-2 xl:w-[324px]">
          <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="whitespace-nowrap font-sans font-semibold leading-[1.3] text-black [font-size:clamp(32px,3.34vw,48px)]">
            {data.titleStart}
            <br />
            <span className="text-brand-text">{data.titleHighlight}</span>
          </h2>
          <p className="font-google-sans text-base leading-[1.6] text-secondaryV1">
            {data.description}
          </p>
          <div className="flex h-[82px] w-full items-end pt-10">
            <PillLinkButton href={data.ctaHref} label={data.ctaLabel} />
          </div>
        </div>
      </ScrollReveal>

      {/* Tabs and questions */}
      <ScrollReveal direction="left" delay={0.15} className="flex-1">
        <FemivitaFaqPanel tabs={data.tabs} emptyMessage={data.emptyMessage} className="w-full" />
      </ScrollReveal>
    </div>
  </div>
);

