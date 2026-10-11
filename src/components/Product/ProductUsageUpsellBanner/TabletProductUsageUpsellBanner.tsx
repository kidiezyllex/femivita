"use client";

import BlackButton from "@/components/ui/BlackButton";
import Image from "next/image";
import { ProductUsageUpsellBannerProps } from "./types";

export const TabletProductUsageUpsellBanner: React.FC<ProductUsageUpsellBannerProps> = ({
  usageBanner,
  upsellBanner,
  usageImageAlt,
}) => {
  return (
    <>
      {/* Usage Instructions Banner */}
      <section className="flex min-h-[560px] w-full flex-row items-stretch overflow-hidden border-b border-t border-primaryV1 bg-white">
        <div className="flex flex-1 flex-col justify-center px-8 py-16">
          <div className="flex max-w-[420px] flex-col gap-2 pb-5">
            <span className="text-2xl font-bold leading-[140%] text-supportV1">
              {usageBanner.title}
            </span>
            <p className="text-base font-normal leading-[160%] text-primaryV1">
              {usageBanner.description}
            </p>
          </div>
          <div className="flex flex-col">
            {usageBanner.usageInfo.map((info, idx) => (
              <div key={idx} className="flex flex-col gap-2 border-t border-primaryV1 pt-2">
                <h4 className="text-lg font-medium leading-[160%] text-secondaryV1">
                  {info.label}
                </h4>
                <p className="text-base font-normal leading-[160%] text-primaryV1">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
            src={usageBanner.image}
            alt={usageImageAlt}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
      </section>

      {/* Combo Upsell Banner */}
      <section className="flex min-h-[480px] w-full flex-row items-stretch overflow-hidden bg-[#7E6B45]">
        <div className="relative w-1/2">
          <Image
            src={upsellBanner.image}
            alt={upsellBanner.title}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center px-8 py-16">
          {upsellBanner.badge && (
            <div className="mb-3 w-fit border border-white px-4 py-2">
              <span className="text-center text-sm font-medium leading-[120%] text-white">
                {upsellBanner.badge}
              </span>
            </div>
          )}
          <h2 className="mb-3 text-4xl font-semibold leading-[120%] text-white">
            {upsellBanner.title}
          </h2>
          <p className="mb-5 text-base font-normal leading-[160%] text-white/80">
            {upsellBanner.description}
          </p>
          <BlackButton
            text={upsellBanner.buttonText}
            link={upsellBanner.buttonLink}
            className="w-full justify-between gap-8 border border-primaryV1 bg-creamBackgroundV1 px-5 py-4 text-base text-primaryV1 hover:bg-creamBackgroundV1/90"
          />
        </div>
      </section>
    </>
  );
};

export default TabletProductUsageUpsellBanner;
