"use client";

import React from "react";

interface MarqueeBannerProps {
  text?: string;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  text = "TRẺ HÓA LÀN DA TỪ VỎ CHUỐI",
}) => {
  return (
    <div className="select-none overflow-hidden bg-[#7E6B45] py-3 xs:py-4 md:py-5 lg:py-5">
      <div className="flex w-max animate-marquee gap-5 md:gap-10">
        {Array.from({ length: 2 }).map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex shrink-0 gap-5 md:gap-10"
            aria-hidden={groupIndex === 1}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <span
                key={index}
                className="whitespace-nowrap text-xl font-semibold leading-[130%] tracking-normal text-white xs:text-2xl md:text-3xl lg:text-[40px] xl:text-[48px]"
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
