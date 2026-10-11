import { StoryPageData } from "@/types/storyPage";
import { DEFAULT_STORY_BANNER_DATA } from "@/components/Story/StoryBanner/types";
import { DEFAULT_STORY_DETAILS_DATA } from "@/components/Story/StoryDetails/types";
import { DEFAULT_STORY_COMBO_DATA } from "@/components/Story/StoryCombo/types";

export const DEFAULT_STORY_PAGE_DATA: StoryPageData = {
  storyBanner: DEFAULT_STORY_BANNER_DATA,
  storyDetails: DEFAULT_STORY_DETAILS_DATA,
  missionPromise: {
    missionTitle: "Sứ mệnh",
    missionDescription:
      "Musase mang đến giải pháp chống lão hóa an toàn và hiệu quả bền vững, bằng cách khai mở giá trị của vỏ chuối kết hợp công nghệ khoa học hiện đại để tạo nên những sản phẩm làm đẹp từ thiên nhiên.",
    missionImage: "/images/mission_img.webp",
    promiseTitle: "Cam kết",
    promiseDescription: [
      "Sản phẩm an toàn, lành tính, không gây kích ứng: không chứa hương liệu, không alcohol, không dầu khoáng và không paraben.",
      "Sản phẩm được sản xuất tại nhà máy đạt chuẩn CGMP và được cấp phép lưu hành toàn quốc, đảm bảo tiêu chuẩn an toàn nghiêm ngặt.",
    ],
    promiseImage: "/images/commit_img.webp",
  },
  storyCombo: DEFAULT_STORY_COMBO_DATA,
};
