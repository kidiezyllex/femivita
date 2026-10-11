import { FAQSectionData, FAQTab } from "@/types/landing";

export interface FAQSectionProps {
  data?: FAQSectionData;
}

export const DEFAULT_FAQ_TABS: FAQTab[] = [
  {
    id: "your-skin",
    label: "Làn da của bạn",
    items: [
      {
        id: "skin-1",
        question: "Bộ sản phẩm phù hợp với loại da nào?",
        answer:
          "Sản phẩm được nghiên cứu lành tính từ chiết xuất vỏ chuối tự nhiên, an toàn cho mọi loại da, đặc biệt là da bắt đầu xuất hiện dấu hiệu lão hóa, da thiếu ẩm hoặc nhạy cảm.",
      },
      {
        id: "skin-2",
        question: "Dùng bao lâu thì thấy hiệu quả rõ rệt?",
        answer:
          "Thông thường sau 2 - 4 tuần sử dụng đều đặn sáng và tối, làn da sẽ có sự cải thiện rõ rệt về độ ẩm, độ đàn hồi và giảm thiểu nếp nhăn li ti.",
      },
    ],
  },
  {
    id: "essence",
    label: "Tinh chất & Kem dưỡng",
    items: [
      {
        id: "essence-1",
        question: "Có thể kết hợp với các sản phẩm khác không?",
        answer:
          "Có thể kết hợp dễ dàng trong chu trình dưỡng da hàng ngày. Nên sử dụng Tinh chất trước sau đó khóa ẩm bằng Kem dưỡng vỏ chuối để đạt hiệu quả tối ưu.",
      },
      {
        id: "essence-2",
        question: "Sản phẩm có gây bết dính hay kích ứng không?",
        answer:
          "Kết cấu tinh chất mỏng nhẹ thấm nhanh, kem dưỡng khóa ẩm sâu không gây nhờn rít, đã được kiểm nghiệm độ kích ứng an toàn tuyệt đối.",
      },
    ],
  },
];

export const DEFAULT_FAQ_SECTION_DATA: FAQSectionData = {
  subtitle: "Câu hỏi thường gặp",
  title: "Tìm hiểu về",
  highlightWord: "Musase",
  description:
    "Câu trả lời rõ ràng cho những thắc mắc phổ biến nhất về sản phẩm, thành phần và cách Musase chăm sóc làn da bạn.",
  tabs: DEFAULT_FAQ_TABS,
};
