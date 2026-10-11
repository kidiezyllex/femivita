"use client";

import Image from "next/image";
import React, { useState } from "react";
import { DEFAULT_DUAL_ANTI_AGING_DATA, DualAntiAgingProps } from "./types";

export const MobileDualAntiAging: React.FC<DualAntiAgingProps> = ({
  data = DEFAULT_DUAL_ANTI_AGING_DATA,
}) => {
  const [activeLabelIdx, setActiveLabelIdx] = useState(0);

  return (
    <div className="w-full overflow-hidden bg-creamBackgroundV1 px-5 py-10">
      <div className="flex max-w-full flex-col">
        {/* Header: Subtitle & Title */}
        <div className="flex flex-col">
          <span className="mb-3 block text-sm font-medium uppercase leading-[120%] text-supportV1">
            {data.subtitle}
          </span>
          <h2 className="mb-3 break-words text-[32px] font-bold leading-[140%] tracking-normal text-primaryV1">
            {data.title}{" "}
            {data.highlightWord && <span className="text-accentV1">{data.highlightWord}</span>}
          </h2>
        </div>

        {/* Feature Image for Mobile */}
        <div className="mb-5 flex w-full justify-center">
          <div className="relative w-full overflow-hidden">
            <Image
              src={data.image || "/images/dual_anti_aging_img.webp"}
              alt={data.title}
              width={1200}
              height={1200}
              className="h-auto w-full object-cover"
              quality={100}
              draggable={false}
              priority
            />
          </div>
        </div>

        {/* Labels List */}
        <div className="mb-2 flex min-w-[140px] shrink-0 flex-col lg:min-w-[170px] xl:min-w-[200px]">
          {data.labels?.map((label, index) => (
            <div
              key={label + index}
              onClick={() => setActiveLabelIdx(index)}
              className={`cursor-pointer select-none text-left align-middle text-[24px] font-bold leading-[140%] transition-colors duration-300 ${
                index === activeLabelIdx ? "text-primaryV1" : "text-[#C9C7B1] hover:text-primaryV1"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="break-words text-base font-normal leading-[160%] text-[#2D3035]">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MobileDualAntiAging;
