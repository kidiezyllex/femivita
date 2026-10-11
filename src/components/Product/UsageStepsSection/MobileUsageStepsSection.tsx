"use client";

import Image from "next/image";
import { UsageStepsSectionProps } from "./types";

export const MobileUsageStepsSection = ({ usageSteps }: UsageStepsSectionProps) => {
  return (
    <>
      {usageSteps.map((usage, index) => (
        <section
          key={index}
          className={`w-full border-primaryV1 bg-white ${index === 0 ? "border-t" : "border-b border-t"} flex flex-col items-stretch overflow-hidden`}
        >
          <div className="relative w-full">
            <Image
              src={usage.image || "/images/product3.png"}
              alt={usage.title || "Hướng dẫn sử dụng"}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full object-cover"
              draggable={false}
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-5 pb-[100px]">
            <div className="flex flex-col gap-2 pb-7">
              <span className="text-[24px] font-bold leading-[140%] text-supportV1">
                {usage.step}
              </span>
              <h2 className="break-words text-[24px] font-semibold leading-[130%] text-primaryV1">
                {usage.title}
              </h2>
              <p className="break-words text-lg font-normal leading-[160%] text-primaryV1">
                {usage.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 border-t border-primaryV1 pt-2">
              <h4 className="text-lg font-medium leading-[160%] text-secondaryV1">Kết cấu:</h4>
              <p className="break-words text-lg font-normal leading-[160%] text-primaryV1">
                {usage.texture}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default MobileUsageStepsSection;
