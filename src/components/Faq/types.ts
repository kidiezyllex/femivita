import { SITE_CONTACT } from "@/constants/site";
import {
  ABOUT_QUESTIONS,
  FOAM_QUESTIONS,
  GEL_VENUS_QUESTIONS,
  INTIMATE_HEALTH_QUESTIONS,
} from "./questions";

export interface FaqRichSegment {
  text: string;
  /** Segments with a link are highlighted in the brand colour. */
  href?: string;
}

export interface FaqCategory {
  id: string;
  label: string;
}

export interface FaqQuestion {
  id: string;
  question: string;
  answer: string;
  categoryId?: string;
}

export interface FaqGroupData {
  id: string;
  title: string;
  /** Optional filter list shown under the group title. */
  categories?: FaqCategory[];
  questions: FaqQuestion[];
}

export interface FaqPageData {
  supportEyebrow: string;
  supportIntro: FaqRichSegment[];
  supportFollowUp: FaqRichSegment[];
  ctaLabel: string;
  ctaHref: string;
  emptyMessage: string;
  groups: FaqGroupData[];
}

const ASK_LINK = { text: "đặt câu hỏi cho Femivita", href: `mailto:${SITE_CONTACT.email}` };
const PHONE_LINK = { text: "0914 14 2464", href: `tel:${SITE_CONTACT.telephone}` };

export const DEFAULT_FAQ_PAGE_DATA: FaqPageData = {
  supportEyebrow: "HỖ TRỢ VÀ CÂU HỎI THƯỜNG GẶP",
  supportIntro: [
    { text: "Vui lòng liên hệ với bộ phận chăm sóc khách hàng của Femivita bằng cách điền vào " },
    ASK_LINK,
    { text: " hoặc gọi miễn phí cho chúng tôi theo số " },
    PHONE_LINK,
    { text: " từ 9:00 sáng đến 6:00 chiều theo giờ Việt Nam" },
  ],
  supportFollowUp: [
    { text: "Bạn vẫn còn thắc mắc ư? Bạn có thể gọi cho chúng tôi theo số " },
    PHONE_LINK,
    { text: " hoặc điền vào " },
    ASK_LINK,
    { text: " để được hỗ trợ thêm." },
  ],
  ctaLabel: "Đặt câu hỏi cho Femivita",
  // Figma gives no link and there is no contact page yet, so the button opens the contact email.
  ctaHref: `mailto:${SITE_CONTACT.email}`,
  emptyMessage: "Nội dung đang được cập nhật.",
  groups: [
    {
      id: "about",
      title: "Về Femivita",
      categories: [
        { id: "about", label: "Về Femivita" },
        { id: "gel-venus", label: "Gel Venus" },
        { id: "foam", label: "Bọt vệ sinh" },
      ],
      questions: [...ABOUT_QUESTIONS, ...GEL_VENUS_QUESTIONS, ...FOAM_QUESTIONS],
    },
    {
      id: "intimate-health",
      title: "Sức khoẻ thân mật",
      questions: INTIMATE_HEALTH_QUESTIONS,
    },
  ],
};
