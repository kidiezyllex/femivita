"use client";

import { useIsPortraitViewport } from "@/hooks/useViewportOrientation";
import Image from "next/image";
import { DEFAULT_MISSION_PROMISE_DATA, MissionPromiseProps } from "./types";

export const DesktopMissionPromise: React.FC<MissionPromiseProps> = ({
  data = DEFAULT_MISSION_PROMISE_DATA,
}) => {
  const isPortrait = useIsPortraitViewport();

  // Khi viewport dọc (height > width), giới hạn chiều cao cố định để tránh các ô bị kéo giãn quá mức theo vh
  const textCellHeightClass = isPortrait ? "min-h-[512px]" : "min-h-[calc(100vh-94px)]";
  const imageCellHeightClass = isPortrait ? "max-h-[512px]" : "max-h-[calc(100vh-94px)]";

  return (
    <section className="w-full bg-creamBackgroundV1">
      <div className="grid w-full grid-cols-1 items-stretch gap-0 overflow-hidden bg-creamBackgroundV1 md:grid-cols-2">
        {/* Cell 1: Mission Text */}
        <div
          className={`flex ${textCellHeightClass} w-full flex-col items-center justify-center bg-creamBackgroundV1 px-8 text-center sm:px-12 md:px-16 lg:px-20`}
        >
          {/* Title */}
          <h2 className="mb-2 text-xl font-bold uppercase tracking-wider text-supportV1 md:text-2xl">
            {data.missionTitle}
          </h2>
          {/* Description */}
          <p className="max-w-[560px] text-base leading-relaxed text-primaryV1 md:text-lg lg:text-xl xxl:max-w-[640px] xxl:text-2xl">
            {data.missionDescription}
          </p>
        </div>

        {/* Cell 2: Mission Image */}
        <div className={`relative ${imageCellHeightClass} w-full overflow-hidden`}>
          <Image
            src={data.missionImage || "/images/mission_img.webp"}
            alt={data.missionTitle || "Sứ mệnh Musase"}
            height={3000}
            width={3000}
            className="object-contain"
            draggable={false}
            priority
            quality={100}
          />
        </div>

        {/* Cell 3: Promise Image */}
        <div
          className={`relative flex ${imageCellHeightClass} w-full items-center justify-center overflow-hidden md:order-3`}
        >
          <Image
            src={data.promiseImage || "/images/commit_img.webp"}
            alt={data.promiseTitle || "Cam kết Musase"}
            height={3000}
            width={3000}
            className="h-auto w-full object-contain"
            draggable={false}
            quality={100}
          />
        </div>

        {/* Cell 4: Promise Text */}
        <div
          className={`flex ${textCellHeightClass} w-full flex-col items-center justify-center bg-creamBackgroundV1 px-8 text-center sm:px-12 md:order-4 md:px-16 lg:px-20`}
        >
          {/* Title */}
          <h2 className="mb-2 text-xl font-bold uppercase tracking-wider text-supportV1 md:text-2xl">
            {data.promiseTitle}
          </h2>
          {/* Description */}
          <div className="flex flex-col gap-3 text-base leading-relaxed text-primaryV1 md:text-lg lg:text-xl xxl:text-2xl">
            {data.promiseDescription.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopMissionPromise;
