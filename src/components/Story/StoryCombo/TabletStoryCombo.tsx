"use client";

import BlackButton from "@/components/ui/BlackButton";
import Image from "next/image";
import React from "react";
import { DEFAULT_STORY_COMBO_DATA, StoryComboProps } from "./types";

export const TabletStoryCombo: React.FC<StoryComboProps> = ({
  data = DEFAULT_STORY_COMBO_DATA,
}) => {
  return (
    <div className="w-full overflow-hidden border-t border-t-primaryV1 bg-white px-8 py-16">
      <div className="grid grid-cols-2 items-center gap-5">
        {/* Left Column: Image Container with Badge */}
        <div className="flex h-full flex-col justify-center overflow-hidden">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#FAF8F0]">
            {/* Badge */}
            {data.badge && (
              <div className="absolute left-2 top-2 z-10 border border-primaryV1 bg-creamBackgroundV1 px-3 py-2 text-xs font-semibold text-primaryV1">
                {data.badge}
              </div>
            )}
            <div className="relative h-full w-full p-5">
              <Image
                src={data.image || "/images/dual_anti_aging_img.webp"}
                alt={data.badge || "Đáng mua nhất"}
                fill
                sizes="50vw"
                className="object-contain"
                draggable={false}
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center gap-3">
          {/* Subtitle */}
          <span className="text-base uppercase leading-[160%] text-supportV1">
            {data.subtitle || "Mua combo giảm 8%"}
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-[120%] tracking-normal text-primaryV1">
            {data.title || "Bộ đôi ngăn ngừa lão hóa"}
          </h2>

          {/* Description */}
          <p className="text-base leading-relaxed text-secondaryV1">
            {data.description ||
              "Bộ đôi ngăn ngừa lão hóa là giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối chuyên sâu và Kem dưỡng vỏ chuối giúp duy trì độ ẩm, kích thích sản sinh collagen và làm mờ các rãnh nhăn, hỗ trợ làn da trẻ hóa theo thời gian."}
          </p>

          {/* CTA Button */}
          <BlackButton
            text={data.ctaText || "Xem chi tiết sản phẩm"}
            link={data.ctaLink || "/products/combo"}
            className="w-full gap-3 px-5 py-4 text-base font-semibold"
          />
        </div>
      </div>
    </div>
  );
};
export default TabletStoryCombo;
