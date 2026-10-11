import { api } from "./api";
import { StoryPageData } from "@/types/storyPage";
import { DEFAULT_STORY_PAGE_DATA } from "@/constants/defaultStoryPageData";

/**
 * Sanitize story page payload to only include whitelisted section properties.
 */
export const sanitizeStoryPagePayload = (
  data: Partial<StoryPageData>
): Record<string, any> => {
  const allowedSections: (keyof StoryPageData)[] = [
    "storyBanner",
    "storyDetails",
    "missionPromise",
    "storyCombo",
  ];

  const payload: Record<string, any> = {};
  for (const section of allowedSections) {
    if (data[section] !== undefined) {
      payload[section] = data[section];
    }
  }

  return payload;
};

export const storyPageService = {
  async getStoryPage(): Promise<StoryPageData> {
    try {
      const response = await api.get<any>("/story-page");
      const data = response.data?.data || response.data;
      if (data && data.storyBanner) {
        return data;
      }
      return DEFAULT_STORY_PAGE_DATA;
    } catch (error) {
      console.warn("Failed to load story page from backend API, using default content:", error);
      return DEFAULT_STORY_PAGE_DATA;
    }
  },

  async updateStoryPage(data: Partial<StoryPageData>): Promise<StoryPageData> {
    const payload = sanitizeStoryPagePayload(data);
    const response = await api.put<any>("/story-page", payload);
    return response.data?.data || response.data;
  },
};
