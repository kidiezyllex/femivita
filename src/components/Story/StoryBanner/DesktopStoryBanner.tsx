"use client";

import { useOptionalLanding } from "@/context/LandingContext";
import { useIsPortraitViewport } from "@/hooks/useViewportOrientation";
import Image from "next/image";
import React from "react";
import { DEFAULT_STORY_BANNER_DATA, StoryBannerProps } from "./types";

export const DesktopStoryBanner: React.FC<StoryBannerProps> = ({
  data = DEFAULT_STORY_BANNER_DATA,
}) => {
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);
  const isPortrait = useIsPortraitViewport();

  const sectionHeightClass = isPortrait
    ? "h-[600px] min-h-[600px] max-h-[600px]"
    : showAdminBar
      ? "h-[calc(100vh-156px)] min-h-[calc(100vh-156px)]"
      : "h-[calc(100vh-94px)] min-h-[calc(100vh-94px)]";

  return (
    <div className={`w-full bg-creamBackgroundV1 ${sectionHeightClass} overflow-hidden`}>
      <div className="grid h-full w-full grid-cols-2 items-stretch">
        {/* Left Column: Image - Full height */}
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/story/story1.webp"
            alt={data.title || "Về Musase Banner"}
            fill
            sizes="50vw"
            className="object-cover"
            draggable={false}
            priority
            quality={100}
          />
        </div>

        {/* Right Column: Text Content - Căn giữa theo chiều cao của banner */}
        <div className="flex h-full flex-col justify-center gap-3 p-8 lg:p-12 xl:p-16 xxl:p-20">
          {/* Subtitle */}
          <span className="block text-lg uppercase leading-[160%] text-supportV1">
            {data.subtitle || "Trẻ hóa, tái tạo, bảo vệ"}
          </span>

          {/* Heading */}
          <h1 className="text-3xl font-semibold leading-[115%] tracking-normal text-primaryV1 lg:text-4xl xl:text-6xl xxl:text-[76px] xxxl:text-[80px]">
            {data.title || "Về Musase"}
          </h1>

          {/* Quote/Motto */}
          <p className="text-sm font-medium leading-[150%] text-secondaryV1 lg:text-base xl:text-xl">
            {data.quote || '"Tôn trọng vẻ đẹp tự nhiên"'}
          </p>

          {/* Description */}
          <p className="max-w-lg text-sm font-normal leading-[160%] text-secondaryV1 lg:text-base xl:text-lg xxl:text-xl">
            {data.description ||
              "Musase tận dụng sức mạnh từ thiên nhiên kết hợp với nghiên cứu khoa học để giúp da phục hồi và trẻ hóa."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesktopStoryBanner;
