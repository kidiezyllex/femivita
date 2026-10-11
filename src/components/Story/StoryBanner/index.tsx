"use client";

import React from "react";
import { useOptionalStory } from "@/context/StoryContext";
import { DesktopStoryBanner } from "./DesktopStoryBanner";
import { MobileStoryBanner } from "./MobileStoryBanner";
import { TabletStoryBanner } from "./TabletStoryBanner";
import { DEFAULT_STORY_BANNER_DATA, StoryBannerProps } from "./types";

export * from "./DesktopStoryBanner";
export * from "./MobileStoryBanner";
export * from "./TabletStoryBanner";
export * from "./types";

export const StoryBanner: React.FC<StoryBannerProps> = ({ data: dataProp }) => {
  const story = useOptionalStory();
  const data = dataProp || story?.storyData?.storyBanner || DEFAULT_STORY_BANNER_DATA;

  return (
    <section className="w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileStoryBanner data={data} />
      </div>

      {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletStoryBanner data={data} />
      </div>

      {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopStoryBanner data={data} />
      </div>
    </section>
  );
};

export default StoryBanner;
