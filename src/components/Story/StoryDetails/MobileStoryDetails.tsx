"use client";

import React from "react";
import { DEFAULT_STORY_DETAILS_DATA, StoryDetailsProps } from "./types";

export const MobileStoryDetails: React.FC<StoryDetailsProps> = ({
  data = DEFAULT_STORY_DETAILS_DATA,
}) => {
  const paragraphs = data.paragraphs || DEFAULT_STORY_DETAILS_DATA.paragraphs || [];

  return (
    <div className="w-full overflow-hidden bg-[#7E6B45] px-5 py-10 text-center text-white">
      <div className="flex max-w-full flex-col items-center">
        {/* Subtitle */}
        <span className="mb-3 block text-lg font-normal leading-[160%] tracking-wide text-white">
          {data.subtitle || "Câu chuyện thương hiệu"}
        </span>

        {/* Heading */}
        <h2 className="mb-3 break-words text-center text-[32px] font-bold leading-[140%] text-[#C9C7B1]">
          {data.title || "Về MUSASE"}
        </h2>

        {/* Paragraphs */}
        <div className="flex flex-col gap-3 break-words text-center text-lg font-normal leading-[160%] text-white/80">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MobileStoryDetails;
