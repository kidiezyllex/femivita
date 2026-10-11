import { StoryBannerData } from "@/components/Story/StoryBanner/types";
import { StoryDetailsData } from "@/components/Story/StoryDetails/types";
import { StoryComboData } from "@/components/Story/StoryCombo/types";

export interface MissionPromiseData {
  missionTitle: string;
  missionDescription: string;
  missionImage: string;
  promiseTitle: string;
  promiseDescription: string[];
  promiseImage: string;
}

export interface StoryPageData {
  storyBanner: StoryBannerData;
  storyDetails: StoryDetailsData;
  missionPromise: MissionPromiseData;
  storyCombo: StoryComboData;
  isActive?: boolean;
  updatedAt?: string;
}
