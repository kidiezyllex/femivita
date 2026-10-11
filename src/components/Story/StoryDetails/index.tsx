"use client";

import React from "react";
import { useOptionalStory } from "@/context/StoryContext";
import { DesktopStoryDetails } from "./DesktopStoryDetails";
import { MobileStoryDetails } from "./MobileStoryDetails";
import { TabletStoryDetails } from "./TabletStoryDetails";
import { DEFAULT_STORY_DETAILS_DATA, StoryDetailsProps } from "./types";

export * from "./DesktopStoryDetails";
export * from "./MobileStoryDetails";
export * from "./TabletStoryDetails";
export * from "./types";

export const StoryDetails: React.FC<StoryDetailsProps> = ({ data: dataProp }) => {
  const story = useOptionalStory();
  const data = dataProp || story?.storyData?.storyDetails || DEFAULT_STORY_DETAILS_DATA;

  return (
    <section className="w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileStoryDetails data={data} />
      </div>

      {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletStoryDetails data={data} />
      </div>

      {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopStoryDetails data={data} />
      </div>
    </section>
  );
};

export default StoryDetails;
