import { api } from "./api";
import { LandingPageData } from "@/types/landing";
import { DEFAULT_LANDING_PAGE_DATA } from "@/constants/defaultLandingData";

/**
 * Sanitize landing page payload to only include whitelisted section properties.
 * Backend NestJS DTO rejects non-whitelisted fields: _id, isActive, createdAt, updatedAt, __v
 */
export const sanitizeLandingPagePayload = (
  data: Partial<LandingPageData>
): Record<string, any> => {
  const allowedSections: (keyof LandingPageData)[] = [
    "header",
    "hero",
    "brandStory",
    "dualAntiAging",
    "productsSection",
    "faqSection",
    "ctaSection",
    "footer",
  ];

  const payload: Record<string, any> = {};
  for (const section of allowedSections) {
    if (data[section] !== undefined) {
      payload[section] = data[section];
    }
  }

  return payload;
};

export const landingService = {
  async getLandingPage(): Promise<LandingPageData> {
    try {
      const response = await api.get<any>("/landing-page");
      const data = response.data?.data || response.data;
      if (data && data.hero) {
        return data;
      }
      return DEFAULT_LANDING_PAGE_DATA;
    } catch (error) {
      console.warn("Failed to load landing page from backend API, using default content:", error);
      return DEFAULT_LANDING_PAGE_DATA;
    }
  },

  async updateLandingPage(data: Partial<LandingPageData>): Promise<LandingPageData> {
    const payload = sanitizeLandingPagePayload(data);
    const response = await api.put<any>("/landing-page", payload);
    return response.data?.data || response.data;
  },

  async resetLandingPage(): Promise<LandingPageData> {
    const response = await api.post<any>("/landing-page/reset");
    return response.data?.data || response.data;
  },
};

