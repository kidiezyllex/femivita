"use client";

import { useOptionalLanding } from "@/context/LandingContext";
import { useIsPortraitViewport } from "@/hooks/useViewportOrientation";
import Image from "next/image";
import { UsageStepsSectionProps } from "./types";

export const DesktopUsageStepsSection = ({ usageSteps }: UsageStepsSectionProps) => {
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);
  const isPortrait = useIsPortraitViewport();

  const sectionMinHeightClass = isPortrait
    ? "h-[600px] min-h-[600px] max-h-[600px]"
    : showAdminBar
      ? "h-[calc(100vh-156px)] min-h-[calc(100vh-156px)]"
      : "h-[calc(100vh-94px)] min-h-[calc(100vh-94px)]";

  return (
    <>
      {usageSteps.map((usage, index) => (
        <section
          key={index}
          className={`w-full border-primaryV1 bg-white ${index === 0 ? "border-t" : "border-b border-t"} flex flex-row items-stretch ${sectionMinHeightClass} overflow-hidden`}
        >
          {usage.imageSide === "left" && (
            <div className="relative w-1/2">
              <Image
                src={usage.image || "/images/product3.png"}
                alt={usage.title || "Hướng dẫn sử dụng"}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
          )}
          <div className="flex flex-1 flex-col justify-center lg:p-12 xl:p-16 xxl:p-20">
            <div className="flex flex-col gap-2 pb-8">
              <span className="text-2xl font-bold leading-[140%] text-supportV1">{usage.step}</span>
              <h2 className="text-5xl font-semibold leading-[130%] text-primaryV1">
                {usage.title}
              </h2>
              <p className="text-lg font-normal leading-[160%] text-primaryV1">
                {usage.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 border-t border-primaryV1 pt-2">
              <h4 className="font-medium leading-[160%] text-secondaryV1 xl:text-xl xxl:text-[22px]">
                Kết cấu:
              </h4>
              <p className="text-lg font-normal leading-[160%] text-primaryV1">{usage.texture}</p>
            </div>
          </div>
          {usage.imageSide === "right" && (
            <div className="relative w-1/2">
              <Image
                src={usage.image || "/images/product3.png"}
                alt={usage.title || "Hướng dẫn sử dụng"}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default DesktopUsageStepsSection;
