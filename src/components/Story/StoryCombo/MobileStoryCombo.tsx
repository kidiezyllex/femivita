"use client";

import BlackButton from "@/components/ui/BlackButton";
import Image from "next/image";
import React from "react";
import { DEFAULT_STORY_COMBO_DATA, StoryComboProps } from "./types";

export const MobileStoryCombo: React.FC<StoryComboProps> = ({
  data = DEFAULT_STORY_COMBO_DATA,
}) => {
  return (
    <div className="w-full overflow-hidden border-t border-t-primaryV1 bg-white px-5 py-10">
      <div className="flex max-w-full flex-col">
        {/* Top Image Container for Mobile */}
        <div className="mb-5 flex w-full justify-center">
          <div className="relative flex aspect-square w-full max-w-[400px] items-center justify-center overflow-hidden bg-[#FAF8F0]">
            {/* Badge */}
            {data.badge && (
              <div className="absolute left-2 top-2 z-10 border border-primaryV1 bg-creamBackgroundV1 px-4 py-3 text-base font-semibold text-primaryV1">
                {data.badge}
              </div>
            )}
            <div className="relative h-full w-full p-5">
              <Image
                src={data.image || "/images/dual_anti_aging_img.webp"}
                alt={data.badge || "Đáng mua nhất"}
                fill
                sizes="100vw"
                className="object-contain"
                draggable={false}
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Content Below */}
        <div className="flex flex-col">
          {/* Subtitle */}
          <span className="mb-3 block text-base uppercase leading-[160%] text-supportV1">
            {data.subtitle || "Mua combo giảm 8%"}
          </span>

          {/* Heading */}
          <h2 className="mb-3 text-[32px] font-bold leading-[130%] text-primaryV1">
            {data.title || "Bộ đôi ngăn ngừa lão hóa"}
          </h2>

          {/* Description */}
          <p className="mb-10 break-words text-base leading-[160%] text-secondaryV1">
            {data.description ||
              "Bộ đôi ngăn ngừa lão hóa là giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối chuyên sâu và Kem dưỡng vỏ chuối giúp duy trì độ ẩm, kích thích sản sinh collagen và làm mờ các rãnh nhăn, hỗ trợ làn da trẻ hóa theo thời gian."}
          </p>

          {/* CTA Button */}
          <BlackButton
            text={data.ctaText || "Xem chi tiết sản phẩm"}
            link={data.ctaLink || "/products/combo"}
            className="min-h-[44px] w-full touch-manipulation select-none justify-between gap-3 p-4 text-sm font-semibold"
          />
        </div>
      </div>
    </div>
  );
};
export default MobileStoryCombo;
