import Image from "next/image";
import React from "react";
import { BrandStoryGlassCard, RatingSummary, ResearchCopy } from "./WhyFemivitaParts";
import { WhyFemivitaProps } from "./types";

export const MobileWhyFemivita: React.FC<WhyFemivitaProps> = ({ data }) => (
  <div className="flex flex-col gap-8 px-4 py-12">
    {/* Title */}
    <div className="flex flex-col items-start gap-2">
      <p className="font-google-sans text-base leading-[1.6] text-ink-muted">{data.eyebrow}</p>
      <h2 className="font-sans text-[28px] font-semibold leading-[1.3] text-black">
        {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>{" "}
        {data.headlineEnd}
      </h2>
      <RatingSummary score={data.ratingScore} count={data.ratingCount} className="mt-2" />
    </div>

    <div className="flex flex-col gap-4">
      {/* Brand story card */}
      <div className="relative h-[460px] overflow-hidden rounded-2xl">
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
        <div className="absolute inset-x-0 bottom-0 p-3">
          <BrandStoryGlassCard data={data.brandStory} />
        </div>
      </div>

      {/* Research card: copy on top, building and certificates below */}
      <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#FFFFFF_0%,#F3EBFA_100%)]">
        <ResearchCopy data={data.research} className="relative z-10 p-6 pb-2" />
        <div className="relative h-[220px] w-full">
          <Image
            src={data.research.image}
            alt={data.research.imageAlt}
            fill
            quality={100}
            sizes="100vw"
            draggable={false}
            className="object-cover object-right [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)]"
          />
        </div>
      </div>

      {/* Photo card */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
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
    </div>
  </div>
);
