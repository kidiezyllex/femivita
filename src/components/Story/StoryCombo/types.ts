export interface StoryComboData {
  badge?: string;
  image?: string;
  subtitle?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface StoryComboProps {
  data?: StoryComboData;
}

export const DEFAULT_STORY_COMBO_DATA: StoryComboData = {
  badge: "Đáng mua nhất",
  image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787719461/musase/images/dnpqnjfn6rjptmpgvvwa.jpg",
  subtitle: "Mua combo giảm 8%",
  title: "Bộ đôi ngăn ngừa lão hóa",
  description:
    "Bộ đôi ngăn ngừa lão hóa là giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối chuyên sâu và Kem dưỡng vỏ chuối giúp duy trì độ ẩm, kích thích sản sinh collagen và làm mờ các rãnh nhăn, hỗ trợ làn da trẻ hóa theo thời gian.",
  ctaText: "Xem chi tiết sản phẩm",
  ctaLink: "/products/combo",
};
