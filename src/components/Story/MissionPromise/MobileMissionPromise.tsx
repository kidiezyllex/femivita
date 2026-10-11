"use client";

import Image from "next/image";
import { DEFAULT_MISSION_PROMISE_DATA, MissionPromiseProps } from "./types";

export const MobileMissionPromise: React.FC<MissionPromiseProps> = ({
  data = DEFAULT_MISSION_PROMISE_DATA,
}) => {
  return (
    <section className="w-full bg-creamBackgroundV1">
      <div className="flex w-full flex-col overflow-hidden bg-creamBackgroundV1">
        {/* Mission Image */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={data.missionImage || "/images/mission_img.webp"}
            alt={data.missionTitle || "Sứ mệnh Musase"}
            height={3000}
            width={3000}
            className="h-auto w-full object-contain"
            draggable={false}
            priority
            quality={100}
          />
        </div>
        {/* Mission Text */}
        <div className="flex w-full flex-col items-center justify-center bg-creamBackgroundV1 px-5 py-10 text-center">
          <h2 className="mb-2 text-[24px] font-bold uppercase leading-[140%] tracking-wider text-supportV1">
            {data.missionTitle}
          </h2>
          <p className="text-lg leading-[160%] text-primaryV1">{data.missionDescription}</p>
        </div>
        {/* Promise Image */}
        <div className="relative flex w-full items-center justify-center overflow-hidden">
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

        {/* Promise Text */}
        <div className="flex w-full flex-col items-center justify-center bg-creamBackgroundV1 px-5 py-10 text-center">
          <h2 className="mb-2 text-[24px] font-bold uppercase leading-[140%] tracking-wider text-supportV1">
            {data.promiseTitle}
          </h2>
          <div className="flex flex-col gap-3 text-lg leading-[160%] text-primaryV1">
            {data.promiseDescription.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileMissionPromise;
