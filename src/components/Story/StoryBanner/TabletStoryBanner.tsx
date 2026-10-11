"use client";

import { useOptionalLanding } from "@/context/LandingContext";
import Image from "next/image";
import React from "react";
import { DEFAULT_STORY_BANNER_DATA, StoryBannerProps } from "./types";

export const TabletStoryBanner: React.FC<StoryBannerProps> = ({
  data = DEFAULT_STORY_BANNER_DATA,
}) => {
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);

  // Chiều cao Header trên tablet: TopBanner (48px) + TabletHeader (60px) = 94px (hoặc 156px khi có AdminEditBar)
  const heightClass = showAdminBar
    ? "h-[calc(100vh-156px)] min-h-[calc(100vh-156px)]"
    : "h-[calc(100vh-94px)] min-h-[calc(100vh-94px)]";

  return (
    <div className="w-full overflow-hidden bg-creamBackgroundV1">
      <div className={`grid grid-cols-2 items-stretch ${heightClass}`}>
        {/* Left Column: Image */}
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

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center gap-3 px-8 py-16">
          {/* Subtitle */}
          <span className="text-base uppercase leading-[160%] text-supportV1">
            {data.subtitle || "Trẻ hóa, tái tạo, bảo vệ"}
          </span>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-[120%] text-primaryV1">
            {data.title || "Về Musase"}
          </h1>

          {/* Quote/Motto */}
          <p className="text-base font-medium leading-[150%] text-secondaryV1">
            {data.quote || '"Tôn trọng vẻ đẹp tự nhiên"'}
          </p>

          {/* Description */}
          <p className="text-base font-normal leading-[160%] text-secondaryV1">
            {data.description ||
              "Musase tận dụng sức mạnh từ thiên nhiên kết hợp với nghiên cứu khoa học để giúp da phục hồi và trẻ hóa."}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TabletStoryBanner;
