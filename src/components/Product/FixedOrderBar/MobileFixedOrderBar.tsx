"use client";

import Image from "next/image";
import { FixedOrderBarViewProps } from "./types";

export const MobileFixedOrderBar = ({ data }: FixedOrderBarViewProps) => {
  return (
    <div className="w-full bg-creamBackgroundV1 border-t border-primaryV1">
      <div className="flex items-center justify-between gap-2 px-5 py-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="relative w-10 h-10 shrink-0 rounded-md overflow-hidden">
            <Image
              src={data.galleryImages?.[0] || "/images/product2.png"}
              alt={data.title}
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-base font-semibold leading-[100%] text-primaryV1 truncate">
              {data.title}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold leading-[160%] text-supportV1">
                {data.pricing?.price}
              </span>
              {data.pricing?.oldPrice && (
                <span className="text-xs font-normal leading-[160%] text-[#C9C7B1] line-through">
                  {data.pricing.oldPrice}
                </span>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 px-4 py-3 bg-black text-white shrink-0 cursor-pointer select-none touch-manipulation"
        >
          <span className="text-base font-semibold leading-none whitespace-nowrap">
            Liên hệ
          </span>
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

export default MobileFixedOrderBar;
