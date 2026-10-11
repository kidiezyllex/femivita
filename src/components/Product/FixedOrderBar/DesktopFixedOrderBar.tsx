"use client";

import Image from "next/image";
import { FixedOrderBarViewProps } from "./types";

export const DesktopFixedOrderBar = ({ data }: FixedOrderBarViewProps) => {
  return (
    <div className="w-full border-t border-primaryV1 bg-creamBackgroundV1">
      <div className="flex items-center justify-between gap-3 px-5 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-[50px] w-[50px] shrink-0 overflow-hidden">
            <Image
              src={data.galleryImages?.[0] || "/images/product2.png"}
              alt={data.title}
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          <div className="flex min-w-0 gap-3">
            <span className="truncate text-[24px] font-semibold leading-[140%] text-primaryV1">
              {data.title}
            </span>
            <span className="text-[24px] font-bold leading-[140%] text-supportV1">
              {data.pricing?.price}
            </span>
            {data.pricing?.oldPrice && (
              <span className="text-[22px] font-normal leading-[160%] text-primaryV1/50 line-through">
                {data.pricing.oldPrice}
              </span>
            )}
          </div>
        </div>

        <button
          type="button"
          className="flex shrink-0 cursor-pointer select-none items-center gap-2 bg-black px-4 py-3 text-white hover:bg-eerieBlackV1"
        >
          <span className="whitespace-nowrap text-base font-semibold leading-none">Liên hệ</span>
          <Image
            src="/logos/PhoneCall.png"
            alt="PhoneCall"
            height={16}
            width={16}
            className="h-4 w-4 shrink-0 brightness-0 invert"
            draggable={false}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default DesktopFixedOrderBar;
