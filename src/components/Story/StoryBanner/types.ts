export interface StoryBannerData {
  subtitle?: string;
  title?: string;
  quote?: string;
  description?: string;
  image?: string;
}

export interface StoryBannerProps {
  data?: StoryBannerData;
}

export const DEFAULT_STORY_BANNER_DATA: StoryBannerData = {
  subtitle: "Trẻ hóa, tái tạo, bảo vệ",
  title: "Về Musase",
  quote: '"Tôn trọng vẻ đẹp tự nhiên"',
  description:
    "Musase tận dụng sức mạnh từ thiên nhiên kết hợp với nghiên cứu khoa học để giúp da phục hồi và trẻ hóa.",
  image: "/images/story/story1.webp",
};
