import { ABOUT_QUESTIONS, INTIMATE_HEALTH_QUESTIONS } from "@/components/Faq/questions";

export interface FemivitaFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FemivitaFaqTab {
  id: string;
  label: string;
  items: FemivitaFaqItem[];
}

export interface FemivitaFaqData {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  emptyMessage: string;
  tabs: FemivitaFaqTab[];
}

export interface FemivitaFaqProps {
  data: FemivitaFaqData;
}

/** The home page shows only a teaser of each tab; the full list is on /faq. */
const HOME_ITEMS_PER_TAB = 4;

const toItems = (questions: { id: string; question: string; answer: string }[]): FemivitaFaqItem[] =>
  questions.map(({ id, question, answer }) => ({ id, question, answer }));

export const DEFAULT_FEMIVITA_FAQ_DATA: FemivitaFaqData = {
  eyebrow: "FAQs",
  titleStart: "Câu hỏi",
  titleHighlight: "thường gặp",
  description: "Câu trả lời rõ ràng cho những thắc mắc phổ biến nhất về Femivita.",
  ctaLabel: "Xem thêm",
  ctaHref: "/faq",
  emptyMessage: "Nội dung đang được cập nhật.",
  tabs: [
    {
      id: "femivita",
      label: "Femivita",
      // The first 4 questions of the "Về Femivita" group on /faq.
      items: toItems(ABOUT_QUESTIONS.slice(0, HOME_ITEMS_PER_TAB)),
    },
    {
      id: "intimate-health",
      label: "Sức khoẻ thân mật",
      // The first 4 questions of the "Sức khoẻ thân mật" group on /faq; the rest are on that page.
      items: toItems(INTIMATE_HEALTH_QUESTIONS.slice(0, HOME_ITEMS_PER_TAB)),
    },
  ],
};
