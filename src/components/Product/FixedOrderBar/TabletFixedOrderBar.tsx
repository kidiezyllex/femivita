"use client";

import Image from "next/image";
import { FixedOrderBarViewProps } from "./types";

export const TabletFixedOrderBar = ({ data }: FixedOrderBarViewProps) => {
  return (
    <div className="w-full border-t border-primaryV1 bg-creamBackgroundV1">
      <div className="mx-auto flex items-center justify-between gap-3 px-5 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
            <Image
              src={data.galleryImages?.[0] || "/images/product2.png"}
              alt={data.title}
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-base font-semibold leading-[140%] text-primaryV1">
              {data.title}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold leading-[160%] text-supportV1">
                {data.pricing?.price}
              </span>
              {data.pricing?.oldPrice && (
                <span className="text-xs font-normal leading-[160%] text-primaryV1/50 line-through">
                  {data.pricing.oldPrice}
                </span>
              )}
            </div>
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

export default TabletFixedOrderBar;
