"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import React from "react";
import { BrandStoryGlassCard, RatingSummary, ResearchCopy } from "./WhyFemivitaParts";
import { WhyFemivitaProps } from "./types";

export const DesktopWhyFemivita: React.FC<WhyFemivitaProps> = ({ data }) => (
  <div className="grid grid-cols-12 gap-x-4 gap-y-10 px-12 py-20">
    {/* Title */}
    <div className="col-span-12 flex flex-col items-start gap-2">
      <ScrollReveal direction="up" delay={0.05} className="w-full">
        <p className="font-google-sans text-lg italic leading-[1.6] text-ink-muted">
          {data.eyebrow}
        </p>
        <div className="flex w-full items-end justify-between">
          <h2 className="font-sans font-bold leading-[1.3] text-gray-700 [font-size:clamp(32px,3.34vw,48px)]">
            {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>
            <br />
            {data.headlineEnd}
          </h2>
          <RatingSummary score={data.ratingScore} count={data.ratingCount} className="items-end" />
        </div>
      </ScrollReveal>
    </div>

    {/* Brand story card */}
    <div className="relative col-span-6 h-[680px]">
      <ScrollReveal direction="up" delay={0.15} className="h-full">
        <div className="relative h-full overflow-hidden rounded-2xl">
          <Image
            src={data.brandStory.image}
            alt={data.brandStory.imageAlt}
            width={1200}
            height={1400}
            quality={100}
            sizes="(min-width: 992px) 50vw, 100vw"
            draggable={false}
            className="absolute left-[-4.01%] top-[-26.05%] h-[126.12%] w-[108.1%] max-w-none transition-transform duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(228.08deg,#DCD5CD_4.115%,rgba(200,193,185,0)_23.414%)]" />
          <div className="absolute bottom-0 left-0 p-5">
            <ScrollReveal direction="up" delay={0.3}>
              <BrandStoryGlassCard data={data.brandStory} className="w-[378px]" />
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </div>

    {/* Research & photo cards */}
    <div className="col-span-6 flex h-[680px] flex-col gap-4">
      <ScrollReveal direction="left" delay={0.2} className="relative flex-1">
        <div className="relative h-full overflow-hidden rounded-2xl max-xl:bg-[linear-gradient(180deg,#FFFFFF_0%,#F3EBFA_100%)]">
          {/* Below 1280px the card is too narrow for text beside the building, so the image sits in the lower half */}
          <div className="absolute inset-x-0 bottom-0 top-1/2 xl:top-0">
            <Image
              src={data.research.image}
              alt={data.research.imageAlt}
              fill
              quality={100}
              sizes="(min-width: 992px) 50vw, 100vw"
              draggable={false}
              className="object-cover object-right transition-transform duration-700 ease-out hover:scale-105 max-xl:[mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)] xl:object-[86%_center]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(40.6deg,#E5D3F5_6.67%,rgba(229,211,245,0)_39.6%)]" />
          <ResearchCopy
            data={data.research}
            className="absolute left-6 top-6 w-[249px] xl:left-[34px] xl:top-[67px]"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.3} className="relative flex-1">
        <div className="relative h-full overflow-hidden rounded-2xl">
          <Image
            src={data.photo.image}
            alt={data.photo.imageAlt}
            fill
            quality={100}
            sizes="(min-width: 992px) 50vw, 100vw"
            draggable={false}
            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>
      </ScrollReveal>
    </div>
  </div>
);
