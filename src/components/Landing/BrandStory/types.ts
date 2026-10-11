import { BrandStoryData } from "@/types/landing";

export interface BrandStoryProps {
  data?: BrandStoryData;
}

export const DEFAULT_BRAND_STORY_DATA: BrandStoryData = {
  title: "Câu chuyện thương hiệu",
  description:
    'Mỗi ngày, hàng tấn vỏ chuối bị bỏ đi sau khi lấy ruột, vô tình bị gắn nhãn "rác thải nông nghiệp". Nhưng với chúng tôi, thiên nhiên chưa bao giờ tạo ra những điều vô nghĩa. Phía sau lớp vỏ tưởng chừng bỏ đi ấy là một nguồn dưỡng chất dồi dào chờ được đánh thức. Chúng tôi tin rằng, chỉ cần đủ thấu hiểu và khai thác đúng cách, điều bị coi là bỏ đi hoàn toàn có thể trở thành giá trị bền vững cho cuộc sống.',
  bgImage: "/images/brand_story_bg.webp",
  ctaText: "Xem thêm",
  ctaLink: "/story",
};
