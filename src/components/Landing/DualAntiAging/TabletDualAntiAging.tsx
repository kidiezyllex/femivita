"use client";

import Image from "next/image";
import React, { useState } from "react";
import { DEFAULT_DUAL_ANTI_AGING_DATA, DualAntiAgingProps } from "./types";

export const TabletDualAntiAging: React.FC<DualAntiAgingProps> = ({
  data = DEFAULT_DUAL_ANTI_AGING_DATA,
}) => {
  const [activeLabelIdx, setActiveLabelIdx] = useState(0);

  return (
    <div className="w-full overflow-hidden bg-creamBackgroundV1 px-8 py-16">
      <div className="flex flex-col gap-5">
        {/* Top Header */}
        <div className="flex flex-col">
          <span className="mb-2 text-base uppercase leading-[160%] text-supportV1">
            {data.subtitle}
          </span>
          <h2 className="text-4xl font-bold leading-[125%] text-primaryV1">
            {data.title}{" "}
            {data.highlightWord && <span className="text-accentV1">{data.highlightWord}</span>}
          </h2>
        </div>

        {/* Middle Section: Labels & Description & Image */}
        <div className="flex flex-row items-center gap-5">
          {/* Left Column: Labels + Description */}
          <div className="flex w-1/2 flex-col gap-5">
            {/* Labels List */}
            <div className="flex shrink-0 flex-col">
              {data.labels?.map((label, index) => (
                <div
                  key={label + index}
                  onClick={() => setActiveLabelIdx(index)}
                  className={`cursor-pointer select-none text-left align-middle text-xl font-bold leading-[140%] transition-colors duration-300 ${
                    index === activeLabelIdx
                      ? "text-primaryV1"
                      : "text-[#C9C7B1] hover:text-primaryV1"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-base font-normal leading-[165%] text-[#2D3035]">
              {data.description}
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-1/2 items-center justify-center">
            <div className="relative w-full overflow-hidden">
              <Image
                src={data.image || "/images/dual_anti_aging_img.webp"}
                alt={data.title}
                width={2048}
                height={2048}
                sizes="45vw"
                className="h-auto w-full object-cover"
                quality={100}
                draggable={false}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabletDualAntiAging;
