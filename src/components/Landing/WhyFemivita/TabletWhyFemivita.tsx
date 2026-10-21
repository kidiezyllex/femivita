"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import React from "react";
import { BrandStoryGlassCard, RatingSummary, ResearchCopy } from "./WhyFemivitaParts";
import { WhyFemivitaProps } from "./types";

export const TabletWhyFemivita: React.FC<WhyFemivitaProps> = ({ data }) => (
  <div className="flex flex-col gap-10 px-8 py-16">
    {/* Title */}
    <ScrollReveal direction="up" delay={0.05}>
      <div className="flex flex-col items-start gap-2">
        <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
        <div className="flex w-full items-end justify-between gap-8">
          <h2 className="font-sans text-4xl font-semibold leading-[1.3] text-black">
            {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>{" "}
            {data.headlineEnd}
          </h2>
          <RatingSummary score={data.ratingScore} count={data.ratingCount} className="items-end" />
        </div>
      </div>
    </ScrollReveal>

    <div className="flex flex-col gap-4">
      {/* Brand story card */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="relative h-[520px] overflow-hidden rounded-2xl">
          <Image
            src={data.brandStory.image}
            alt={data.brandStory.imageAlt}
            fill
            quality={100}
            sizes="100vw"
            draggable={false}
            className="object-cover object-[50%_85%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(228.08deg,#DCD5CD_4.115%,rgba(200,193,185,0)_23.414%)]" />
          <div className="absolute bottom-0 left-0 p-4">
            <BrandStoryGlassCard data={data.brandStory} className="w-[378px]" />
          </div>
        </div>
      </ScrollReveal>

      {/* Research card */}
      <ScrollReveal direction="up" delay={0.25}>
        <div className="relative aspect-[2/1] overflow-hidden rounded-2xl">
          <Image
            src={data.research.image}
            alt={data.research.imageAlt}
            fill
            quality={100}
            sizes="100vw"
            draggable={false}
            className="object-cover object-[86%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(40.6deg,#E5D3F5_6.67%,rgba(229,211,245,0)_39.6%)]" />
          <ResearchCopy
            data={data.research}
            className="absolute left-[34px] top-[67px] w-[249px]"
          />
        </div>
      </ScrollReveal>

      {/* Photo card */}
      <ScrollReveal direction="up" delay={0.35}>
        <div className="relative aspect-[2/1] overflow-hidden rounded-2xl">
          <Image
            src={data.photo.image}
            alt={data.photo.imageAlt}
            fill
            quality={100}
            sizes="100vw"
            draggable={false}
            className="object-cover"
          />
        </div>
      </ScrollReveal>
    </div>
  </div>
);
