"use client";

import BlackButton from "@/components/ui/BlackButton";
import Image from "next/image";
import React from "react";
import { DEFAULT_STORY_COMBO_DATA, StoryComboProps } from "./types";

export const DesktopStoryCombo: React.FC<StoryComboProps> = ({
  data = DEFAULT_STORY_COMBO_DATA,
}) => {
  return (
    <div
      className={`flex w-full flex-col justify-center overflow-hidden border-t border-t-primaryV1 bg-white px-8 lg:p-12 xl:p-16 xxl:p-20`}
    >
      <div className="grid grid-cols-2 items-center gap-10 lg:gap-12 xl:gap-14 xxl:gap-16">
        {/* Left Column: Image Container with Badge */}
        <div className="flex h-full flex-col justify-center overflow-hidden">
          <div className="relative flex aspect-square w-full max-w-[580px] items-center justify-center overflow-hidden bg-[#FAF8F0] xl:max-w-[660px]">
            {/* Badge */}
            {data.badge && (
              <div className="absolute left-2 top-2 z-10 border border-primaryV1 bg-creamBackgroundV1 px-3.5 py-3 text-center align-middle text-sm font-semibold leading-none tracking-normal text-primaryV1 xl:px-4 xl:py-3 xl:text-base">
                {data.badge}
              </div>
            )}
            <div className="relative h-full w-full p-8 lg:p-12">
              <Image
                src={data.image || "/images/dual_anti_aging_img.webp"}
                alt={data.badge || "Đáng mua nhất"}
                fill
                sizes="50vw"
                className="object-contain transition-transform duration-300 hover:scale-105"
                draggable={false}
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Text Content - 1440px Figma Standard */}
        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col gap-3">
            {/* Subtitle */}
            <span className="block text-lg uppercase leading-[160%] text-supportV1">
              {data.subtitle || "Mua combo giảm 8%"}
            </span>
            {/* Heading */}
            <h2 className="text-4xl font-semibold leading-[120%] text-primaryV1 xxl:text-[80px]">
              {data.title || "Bộ đôi ngăn ngừa lão hóa"}
            </h2>
            {/* Description */}
            <p className="text-sm leading-relaxed tracking-normal text-secondaryV1 lg:text-base xl:text-lg xxl:mb-10 xxl:text-xl">
              {data.description ||
                "Bộ đôi ngăn ngừa lão hóa là giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối chuyên sâu và Kem dưỡng vỏ chuối giúp duy trì độ ẩm, kích thích sản sinh collagen và làm mờ các rãnh nhăn, hỗ trợ làn da trẻ hóa theo thời gian."}
            </p>
          </div>
          {/* CTA Button */}
          <BlackButton
            text={data.ctaText || "Xem chi tiết sản phẩm"}
            link={data.ctaLink || "/products/combo"}
            className="w-fit px-5 py-4 text-base xl:text-lg xxl:text-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default DesktopStoryCombo;
