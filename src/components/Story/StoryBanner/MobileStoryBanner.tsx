"use client";

import Image from "next/image";
import React from "react";
import { DEFAULT_STORY_BANNER_DATA, StoryBannerProps } from "./types";

export const MobileStoryBanner: React.FC<StoryBannerProps> = ({
  data = DEFAULT_STORY_BANNER_DATA,
}) => {
  return (
    <div className="w-full overflow-hidden bg-creamBackgroundV1">
      <div className="flex max-w-full flex-col">
        {/* Top Image for Mobile */}
        <div className="w-full overflow-hidden">
          <Image
            src="/images/story/story1.webp"
            alt={data.title || "Về Musase Banner"}
            width={4096}
            height={4096}
            sizes="100vw"
            className="h-auto w-full object-cover"
            draggable={false}
            priority
            quality={100}
          />
        </div>

        {/* Content Below */}
        <div className="flex flex-col gap-3 p-5 pb-32">
          {/* Subtitle */}
          <span className="block text-base uppercase leading-[160%] text-supportV1">
            {data.subtitle || "Trẻ hóa, tái tạo, bảo vệ"}
          </span>

          {/* Heading */}
          <h1 className="break-words text-[32px] font-bold leading-[140%] text-primaryV1">
            {data.title || "Về Musase"}
          </h1>

          {/* Quote/Motto */}
          <p className="break-words text-lg font-semibold leading-[160%] text-secondaryV1">
            {data.quote || '"Tôn trọng vẻ đẹp tự nhiên"'}
          </p>

          {/* Description */}
          <p className="break-words text-base font-normal leading-[160%] text-secondaryV1">
            {data.description ||
              "Musase tận dụng sức mạnh từ thiên nhiên kết hợp với nghiên cứu khoa học để giúp da phục hồi và trẻ hóa."}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MobileStoryBanner;
