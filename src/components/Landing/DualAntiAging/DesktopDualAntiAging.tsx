"use client";

import { useOptionalLanding } from "@/context/LandingContext";
import Image from "next/image";
import React, { useState } from "react";
import { DEFAULT_DUAL_ANTI_AGING_DATA, DualAntiAgingProps } from "./types";

export const DesktopDualAntiAging: React.FC<DualAntiAgingProps> = ({
  data = DEFAULT_DUAL_ANTI_AGING_DATA,
}) => {
  const [activeLabelIdx, setActiveLabelIdx] = useState(0);
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);

  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden bg-creamBackgroundV1 px-8 lg:p-12 xl:p-16 xxl:p-20`}
    >
      <div className="grid w-full grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-14 xxl:gap-16">
        {/* Left Text Content Column */}
        <div className="flex flex-col justify-center">
          {/* Subtitle */}
          <span className="block text-lg uppercase leading-[160%] text-supportV1">
            {data.subtitle}
          </span>

          {/* Heading */}
          <h2 className="mb-3 text-3xl font-bold leading-[115%] text-primaryV1 lg:text-4xl xl:mb-5 xl:text-5xl xxl:text-[56px] xxxl:text-[64px]">
            {data.title}{" "}
            {data.highlightWord && <span className="text-accentV1">{data.highlightWord}</span>}
          </h2>

          {/* Labels and Description */}
          <div className="flex flex-row gap-5 lg:gap-8 xl:gap-10">
            {/* Labels List */}
            <div className="flex min-w-[140px] shrink-0 flex-col lg:min-w-[170px] xl:min-w-[200px]">
              {data.labels?.map((label, index) => (
                <div
                  key={label + index}
                  onClick={() => setActiveLabelIdx(index)}
                  className={`cursor-pointer select-none py-1 text-left align-middle text-xl font-bold leading-[140%] transition-colors duration-300 lg:text-2xl xl:py-2 xl:text-[28px] xxl:text-[32px] ${
                    index === activeLabelIdx
                      ? "text-primaryV1"
                      : "text-[#C9C7B1] hover:text-primaryV1"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Description Content */}
            <div className="flex-1">
              <p className="align-middle text-xs font-normal leading-[160%] text-[#2D3035] lg:text-sm xl:text-base xxl:text-lg xxl:text-xl">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex w-full items-center justify-center">
          <div className="relative w-full overflow-hidden">
            <Image
              src={data.image || "/images/dual_anti_aging_img.webp"}
              alt={data.title}
              width={4096}
              height={4096}
              sizes="50vw"
              className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105"
              quality={100}
              draggable={false}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopDualAntiAging;
