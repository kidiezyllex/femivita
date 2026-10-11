"use client";

import React from "react";
import { StoryBannerEditModal } from "./StoryBannerEditModal";
import { StoryDetailsEditModal } from "./StoryDetailsEditModal";
import { MissionPromiseEditModal } from "./MissionPromiseEditModal";
import { StoryComboEditModal } from "./StoryComboEditModal";

export const StoryModalsContainer: React.FC = () => {
  return (
    <>
      <StoryBannerEditModal />
      <StoryDetailsEditModal />
      <MissionPromiseEditModal />
      <StoryComboEditModal />
    </>
  );
};
