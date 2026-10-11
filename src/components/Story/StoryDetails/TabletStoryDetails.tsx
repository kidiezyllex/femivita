"use client";

import React from "react";
import { DEFAULT_STORY_DETAILS_DATA, StoryDetailsProps } from "./types";

export const TabletStoryDetails: React.FC<StoryDetailsProps> = ({
  data = DEFAULT_STORY_DETAILS_DATA,
}) => {
  const paragraphs = data.paragraphs || DEFAULT_STORY_DETAILS_DATA.paragraphs || [];

  return (
    <div className="w-full overflow-hidden bg-[#7E6B45] px-8 py-16 text-center text-white">
      <div className="mx-auto flex flex-col items-center">
        {/* Subtitle */}
        <span className="mb-4 block text-xl font-bold uppercase leading-[140%] text-white">
          {data.subtitle || "Câu chuyện thương hiệu"}
        </span>

        {/* Heading */}
        <h2 className="mb-5 text-center text-4xl font-semibold uppercase leading-[130%] text-[#C9C7B1]">
          {data.title || "Về MUSASE"}
        </h2>

        {/* Paragraphs */}
        <div className="flex flex-col gap-3 text-center text-base font-normal leading-[160%] text-white/85">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TabletStoryDetails;
