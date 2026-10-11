"use client";

import BlackButton from "@/components/ui/BlackButton";
import { useOptionalLanding } from "@/context/LandingContext";
import { useIsPortraitViewport } from "@/hooks/useViewportOrientation";
import Image from "next/image";
import React from "react";
import { BrandStoryProps, DEFAULT_BRAND_STORY_DATA } from "./types";

export const DesktopBrandStory: React.FC<BrandStoryProps> = ({
  data = DEFAULT_BRAND_STORY_DATA,
}) => {
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);
  const isPortrait = useIsPortraitViewport();

  const sectionHeightClass = isPortrait
    ? "h-[600px] min-h-[600px] max-h-[600px]"
    : showAdminBar
      ? "h-[calc(110vh-156px)] min-h-[calc(110vh-156px)]"
      : "h-[calc(110vh-94px)] min-h-[calc(110vh-94px)]";

  return (
    <div
      className={`relative w-full ${sectionHeightClass} flex items-center justify-center overflow-hidden p-5 lg:p-10 xl:p-14 xxl:p-20`}
    >
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

      {/* Card Content container - 1440px Figma Standard căn giữa hoàn hảo */}
      <div className="relative z-10 my-auto flex w-full max-w-[65%] flex-col items-center rounded-[6px] bg-[#FEFBF4] px-8 py-8 text-center shadow-xl lg:p-12 xl:p-14 xxl:p-16">
        {/* Title */}
        <h2 className="mb-4 text-center align-middle text-4xl font-semibold leading-[120%] tracking-normal text-primaryV1 lg:text-5xl xl:mb-5 xl:text-[52px] min-[1440px]:text-6xl xxl:text-[80px] xxxl:text-[80px]">
          {data.title}
        </h2>

        {/* Description */}
        <p className="mb-5 text-center align-middle text-sm leading-[160%] tracking-normal text-secondaryV1 lg:text-base xl:mb-8 xl:text-lg xxl:text-[20px] xxxl:text-[22px]">
          {data.description}
        </p>

        {/* CTA Button */}
        <div className="flex w-full max-w-[360px] justify-center xl:max-w-[400px]">
          <BlackButton
            text={data.ctaText || "Xem thêm"}
            link={data.ctaLink || "/story"}
            className="w-full justify-between gap-5 p-4 text-base xl:gap-[68px] xl:p-5 xl:text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopBrandStory;
