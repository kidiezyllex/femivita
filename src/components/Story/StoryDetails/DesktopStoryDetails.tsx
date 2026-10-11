"use client";

import React from "react";
import { DEFAULT_STORY_DETAILS_DATA, StoryDetailsProps } from "./types";

export const DesktopStoryDetails: React.FC<StoryDetailsProps> = ({
  data = DEFAULT_STORY_DETAILS_DATA,
}) => {
  const paragraphs = data.paragraphs || DEFAULT_STORY_DETAILS_DATA.paragraphs || [];

  return (
    <div className="w-full overflow-hidden bg-[#7E6B45] px-8 py-20 text-center text-white lg:p-12 xl:p-16 xxl:p-20">
      <div className="flex flex-col items-center">
        {/* Subtitle */}
        <span className="mb-5 block text-xl font-bold leading-[140%] tracking-normal text-white lg:text-2xl xl:mb-5">
          {data.subtitle || "Câu chuyện thương hiệu"}
        </span>

        {/* Heading */}
        <h2 className="mb-5 text-center text-3xl font-semibold uppercase leading-[130%] tracking-normal text-[#C9C7B1] lg:text-4xl xl:mb-5 xl:text-[48px]">
          {data.title || "Về MUSASE"}
        </h2>

        {/* Paragraphs - 1440px Figma Standard */}
        <div className="flex max-w-[1000px] flex-col gap-3 text-center text-base font-normal leading-[160%] tracking-normal text-white/80 lg:text-lg xl:text-xl xxl:max-w-[1300px] xxl:text-2xl">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DesktopStoryDetails;
