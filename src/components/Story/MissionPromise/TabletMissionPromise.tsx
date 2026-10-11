"use client";

import Image from "next/image";
import { DEFAULT_MISSION_PROMISE_DATA, MissionPromiseProps } from "./types";

export const TabletMissionPromise: React.FC<MissionPromiseProps> = ({
  data = DEFAULT_MISSION_PROMISE_DATA,
}) => {
  return (
    <section className="w-full bg-creamBackgroundV1">
      <div className="grid w-full grid-cols-2 items-stretch gap-0 overflow-hidden bg-creamBackgroundV1">
        {/* Cell 1: Mission Text */}
        <div className="flex min-h-[420px] w-full flex-col items-center justify-center bg-creamBackgroundV1 px-8 text-center">
          <h2 className="mb-2 text-2xl font-bold uppercase tracking-wider text-supportV1">
            {data.missionTitle}
          </h2>
          <p className="max-w-[560px] text-lg leading-relaxed text-primaryV1">
            {data.missionDescription}
          </p>
        </div>

        {/* Cell 2: Mission Image */}
        <div className="relative min-h-[420px] w-full overflow-hidden">
          <Image
            src={data.missionImage || "/images/mission_img.webp"}
            alt={data.missionTitle || "Sứ mệnh Musase"}
            height={3000}
            width={3000}
            className="h-full w-full object-cover"
            draggable={false}
            priority
            quality={100}
          />
        </div>

        {/* Cell 3: Promise Image */}
        <div className="relative order-3 flex min-h-[420px] w-full items-center justify-center overflow-hidden">
          <Image
            src={data.promiseImage || "/images/commit_img.webp"}
            alt={data.promiseTitle || "Cam kết Musase"}
            height={3000}
            width={3000}
            className="h-full w-full object-cover"
            draggable={false}
            quality={100}
          />
        </div>

        {/* Cell 4: Promise Text */}
        <div className="order-4 flex min-h-[420px] w-full flex-col items-center justify-center bg-creamBackgroundV1 px-8 text-center">
          <h2 className="mb-2 text-2xl font-bold uppercase tracking-wider text-supportV1">
            {data.promiseTitle}
          </h2>
          <div className="flex max-w-[560px] flex-col gap-3 text-lg leading-relaxed text-primaryV1">
            {data.promiseDescription.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabletMissionPromise;
