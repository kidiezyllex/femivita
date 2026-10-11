"use client";

import BlackButton from "@/components/ui/BlackButton";
import Image from "next/image";
import { ProductUsageUpsellBannerProps } from "./types";

export const DesktopProductUsageUpsellBanner: React.FC<ProductUsageUpsellBannerProps> = ({
  usageBanner,
  upsellBanner,
  usageImageAlt,
}) => {
  return (
    <>
      {/* Usage Instructions Banner */}
      <section className="flex min-h-[720px] w-full flex-row items-stretch overflow-hidden border-b border-t border-primaryV1 bg-white">
        <div className="flex flex-1 flex-col justify-center lg:p-12 xl:p-16 xxl:p-20">
          <div className="flex flex-col gap-2 pb-4 lg:pb-4 xl:pb-5 xxl:pb-8">
            <span className="text-xl font-bold leading-[140%] text-supportV1 lg:text-2xl">
              {usageBanner.title}
            </span>
            <p className="text-base font-normal leading-[160%] text-primaryV1 lg:text-lg xl:text-xl xxl:text-2xl">
              {usageBanner.description}
            </p>
          </div>
          <div className="flex flex-col">
            {usageBanner.usageInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 border-t border-primaryV1 pb-5 pt-2 lg:pb-4"
              >
                <h4 className="font-medium leading-[160%] text-secondaryV1 lg:text-lg xl:text-xl xxl:text-[22px]">
                  {info.label}
                </h4>
                <p className="text-base font-normal leading-[160%] text-primaryV1 lg:text-lg xl:text-xl xxl:text-2xl">
                  {info.value}
                </p>
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
      <section className="flex min-h-[600px] w-full flex-row items-stretch overflow-hidden bg-[#7E6B45]">
        <div className="relative w-1/2">
          <Image
            src={upsellBanner.image}
            alt={upsellBanner.title}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center lg:p-12 xl:p-16 xxl:p-20">
          {upsellBanner.badge && (
            <div className="mb-3 w-fit border border-white px-3 py-2 lg:px-4 lg:py-3">
              <span className="text-center text-xs font-medium leading-[120%] text-white lg:text-sm">
                {upsellBanner.badge}
              </span>
            </div>
          )}
          <h2 className="mb-3 text-4xl font-semibold leading-[120%] text-white sm:text-5xl lg:text-[64px]">
            {upsellBanner.title}
          </h2>
          <p className="mb-5 text-base font-normal leading-[160%] text-white/80 lg:mb-8 lg:text-lg xl:text-xl xxl:text-2xl">
            {upsellBanner.description}
          </p>
          <BlackButton
            text={upsellBanner.buttonText}
            link={upsellBanner.buttonLink}
            className="w-fit border border-primaryV1 bg-creamBackgroundV1 text-primaryV1 hover:bg-creamBackgroundV1/90"
          />
        </div>
      </section>
    </>
  );
};

export default DesktopProductUsageUpsellBanner;
