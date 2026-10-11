"use client";

import BlackButton from "@/components/ui/BlackButton";
import Image from "next/image";
import React from "react";
import { BrandStoryProps, DEFAULT_BRAND_STORY_DATA } from "./types";

export const TabletBrandStory: React.FC<BrandStoryProps> = ({
  data = DEFAULT_BRAND_STORY_DATA,
}) => {
  return (
    <div className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden px-5 py-16 md:min-h-[580px] md:px-8 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage || "/images/brand_story_bg.webp"}
          alt={data.title}
          fill
          sizes="100vw"
          className="object-cover"
          quality={100}
          draggable={false}
          priority
        />
      </div>

      {/* Card Content container - Tablet Optimized */}
      <div className="relative z-10 flex w-full max-w-[720px] flex-col items-center rounded-[6px] bg-[#FEFBF4] px-8 py-9 text-center shadow-xl md:px-12">
        {/* Title */}
        <h2 className="mb-5 text-center align-middle text-3xl font-bold leading-[120%] tracking-normal text-primaryV1 md:text-4xl lg:text-[44px]">
          {data.title}
        </h2>

        {/* Description */}
        <p className="mb-5 text-center align-middle text-base font-medium leading-[160%] tracking-normal text-secondaryV1 md:text-lg">
          {data.description}
        </p>

        {/* CTA Button */}
        <BlackButton
          text={data.ctaText || "Xem thêm"}
          link={data.ctaLink || "/story"}
          className="w-[360px] justify-between gap-8 px-5 py-4 text-base"
        />
      </div>
    </div>
  );
};
export default TabletBrandStory;
