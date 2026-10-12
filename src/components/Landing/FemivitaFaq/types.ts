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

// Figma only provides the answer of the first question and no content for the second tab,
// so the missing answers use this placeholder until real copy is supplied.
const PENDING_ANSWER = "Nội dung đang được cập nhật.";

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
      items: [
        {
          id: "femivita-origin",
          question: "Femivita có nguồn gốc, xuất xứ từ đâu?",
          answer:
            "Femivita được nghiên cứu và sản xuất bởi Tập đoàn Enbioscience (Hàn Quốc, thành lập từ năm 2001) và đã được Bộ Y tế Hàn Quốc cũng như Việt Nam cấp phép lưu hành. Sản phẩm do Công ty TNHH Thương mại & Đầu tư APH Việt Nam nhập khẩu và phân phối độc quyền.",
        },
        {
          id: "femivita-where-to-buy",
          question: "Tôi có thể mua Femivita ở đâu?",
          answer: PENDING_ANSWER,
        },
        {
          id: "femivita-privacy",
          question:
            "Tôi rất ngại khi mua các sản phẩm chăm sóc thầm kín, Femivita đảm bảo tính bảo mật như thế nào?",
          answer: PENDING_ANSWER,
        },
        {
          id: "femivita-difference",
          question:
            "Sự khác biệt lớn nhất giữa Femivita và các thương hiệu chăm sóc vùng kín thông thường trên thị trường là gì?",
          answer: PENDING_ANSWER,
        },
      ],
    },
    {
      id: "intimate-health",
      label: "Sức khoẻ thân mật",
      items: [],
    },
  ],
};
