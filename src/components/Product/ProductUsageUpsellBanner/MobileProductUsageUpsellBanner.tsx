"use client";

import BlackButton from "@/components/ui/BlackButton";
import Image from "next/image";
import { ProductUsageUpsellBannerProps } from "./types";

export const MobileProductUsageUpsellBanner: React.FC<ProductUsageUpsellBannerProps> = ({
  usageBanner,
  upsellBanner,
  usageImageAlt,
}) => {
  return (
    <>
      {/* Usage Instructions Banner */}
      <section className="flex w-full flex-col items-stretch overflow-hidden border-b border-t border-primaryV1 bg-white">
        <div className="relative aspect-square w-full">
          <Image
            src={usageBanner.image}
            alt={usageImageAlt}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
        <div className="flex flex-col justify-center p-5">
          <div className="flex flex-col gap-2 pb-4">
            <span className="text-xl font-bold leading-[140%] text-supportV1">
              {usageBanner.title}
            </span>
            <p className="text-lg font-normal leading-[160%] text-primaryV1">
              {usageBanner.description}
            </p>
          </div>
          <div className="flex flex-col">
            {usageBanner.usageInfo.map((info, idx) => (
              <div key={idx} className="flex flex-col gap-2 border-t border-primaryV1 pt-2">
                <h4 className="text-lg font-medium leading-[160%] text-secondaryV1">
                  {info.label}
                </h4>
                <p className="text-lg font-normal leading-[160%] text-primaryV1">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Upsell Banner */}
      <section className="flex w-full flex-col items-stretch overflow-hidden bg-[#7E6B45]">
        <div className="relative aspect-square w-full">
          <Image
            src={upsellBanner.image}
            alt={upsellBanner.title}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
        <div className="flex flex-col justify-center p-5">
          {upsellBanner.badge && (
            <div className="mb-3 w-fit border border-white px-4 py-3 text-base font-semibold">
              Đáng mua nhất
            </div>
          )}
          <h2 className="mb-3 text-3xl font-semibold leading-[120%] text-white">
            {upsellBanner.title}
          </h2>
          <p className="mb-5 text-base font-normal leading-[160%] text-white/80">
            {upsellBanner.description}
          </p>
          <BlackButton
            text={upsellBanner.buttonText}
            link={upsellBanner.buttonLink}
            className="min-h-[44px] w-full touch-manipulation select-none justify-between gap-3 border border-primaryV1 bg-creamBackgroundV1 p-4 text-sm font-semibold text-primaryV1 hover:bg-creamBackgroundV1/90"
          />
        </div>
      </section>
    </>
  );
};

export default MobileProductUsageUpsellBanner;
