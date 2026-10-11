"use client";

import { useOptionalStory } from "@/context/StoryContext";
import { DesktopMissionPromise } from "./DesktopMissionPromise";
import { MobileMissionPromise } from "./MobileMissionPromise";
import { TabletMissionPromise } from "./TabletMissionPromise";
import { DEFAULT_MISSION_PROMISE_DATA, MissionPromiseProps } from "./types";

export * from "./DesktopMissionPromise";
export * from "./MobileMissionPromise";
export * from "./TabletMissionPromise";
export * from "./types";

export const MissionPromise: React.FC<MissionPromiseProps> = ({ data: dataProp }) => {
  const story = useOptionalStory();
  const data = dataProp || story?.storyData?.missionPromise || DEFAULT_MISSION_PROMISE_DATA;

  return (
    <>
      {/* Mobile MissionPromise: < 768px */}
      <div className="block md:hidden">
        <MobileMissionPromise data={data} />
      </div>

      {/* Tablet MissionPromise: 768px - 991px */}
      <div className="hidden md:block lg:hidden">
        <TabletMissionPromise data={data} />
      </div>

      {/* Desktop MissionPromise: >= 992px */}
      <div className="hidden lg:block">
        <DesktopMissionPromise data={data} />
      </div>
    </>
  );
};

export default MissionPromise;
