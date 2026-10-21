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
      // Same copy as the "Về Femivita" group on /faq.
      items: toItems(ABOUT_QUESTIONS),
    },
    {
      id: "intimate-health",
      label: "Sức khoẻ thân mật",
      // Same copy as the "Sức khoẻ thân mật" group on /faq.
      items: toItems(INTIMATE_HEALTH_QUESTIONS),
    },
  ],
};
