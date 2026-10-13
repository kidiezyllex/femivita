import { DEFAULT_FEMIVITA_FAQ_DATA } from "@/components/Landing/FemivitaFaq/types";
import { SITE_CONTACT } from "@/constants/site";

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

const PENDING_ANSWER = "Nội dung đang được cập nhật.";
// Figma repeats this one question six times in each group (placeholder). Only its answer exists, taken from the home FAQ.
const PLACEHOLDER_QUESTION = "Femivita có nguồn gốc, xuất xứ từ đâu?";
const KNOWN_ANSWER =
  DEFAULT_FEMIVITA_FAQ_DATA.tabs[0]?.items.find((item) => item.id === "femivita-origin")?.answer ??
  PENDING_ANSWER;

const placeholderQuestions = (groupId: string, categoryId?: string): FaqQuestion[] =>
  Array.from({ length: 6 }, (_, i) => ({
    id: `${groupId}-${i + 1}`,
    question: PLACEHOLDER_QUESTION,
    answer: groupId === "about" && i === 0 ? KNOWN_ANSWER : PENDING_ANSWER,
    categoryId,
  }));

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
        // Figma spells this "Gen Venus"; the product is Gel Venus.
        { id: "gel-venus", label: "Gel Venus" },
        { id: "foam", label: "Bọt vệ sinh" },
      ],
      questions: placeholderQuestions("about", "about"),
    },
    {
      id: "intimate-health",
      title: "Sức khoẻ thân mật",
      questions: placeholderQuestions("intimate-health"),
    },
  ],
};
