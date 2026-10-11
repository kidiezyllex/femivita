"use client";

import React from "react";
import { useOptionalStory } from "@/context/StoryContext";
import { DesktopStoryCombo } from "./DesktopStoryCombo";
import { MobileStoryCombo } from "./MobileStoryCombo";
import { TabletStoryCombo } from "./TabletStoryCombo";
import { DEFAULT_STORY_COMBO_DATA, StoryComboProps } from "./types";

export * from "./DesktopStoryCombo";
export * from "./MobileStoryCombo";
export * from "./TabletStoryCombo";
export * from "./types";

export const StoryCombo: React.FC<StoryComboProps> = ({ data: dataProp }) => {
  const story = useOptionalStory();
  const data = dataProp || story?.storyData?.storyCombo || DEFAULT_STORY_COMBO_DATA;

  return (
    <section className="w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileStoryCombo data={data} />
      </div>

      {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletStoryCombo data={data} />
      </div>

      {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopStoryCombo data={data} />
      </div>
    </section>
  );
};

export default StoryCombo;
