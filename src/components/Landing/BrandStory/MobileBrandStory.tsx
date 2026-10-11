"use client";

import BlackButton from "@/components/ui/BlackButton";
import Image from "next/image";
import React from "react";
import { BrandStoryProps, DEFAULT_BRAND_STORY_DATA } from "./types";

export const MobileBrandStory: React.FC<BrandStoryProps> = ({
  data = DEFAULT_BRAND_STORY_DATA,
}) => {
  return (
    <div className="relative flex h-[calc(100vh-94px)] min-h-[calc(100vh-94px)] w-full items-center justify-center overflow-hidden px-5 py-16">
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

      {/* Card Content container - Mobile Optimized */}
      <div className="relative z-10 flex w-full flex-col items-center rounded-[6px] bg-[#FEFBF4] px-5 py-10 text-center shadow-lg">
        {/* Title */}
        <h2 className="mb-3 break-words text-center align-middle text-2xl font-bold leading-[140%] tracking-normal text-primaryV1">
          {data.title}
        </h2>

        {/* Description */}
        <p className="mb-10 break-words text-center align-middle text-base font-medium leading-[160%] tracking-normal text-secondaryV1">
          {data.description}
        </p>

        {/* CTA Button */}
        <div className="flex w-full justify-center">
          <BlackButton
            text={data.ctaText || "Xem thêm"}
            link={data.ctaLink || "/story"}
            className="w-full justify-between px-4 py-3 text-base font-semibold"
          />
        </div>
      </div>
    </div>
  );
};
export default MobileBrandStory;
