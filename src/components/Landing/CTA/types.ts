import { CTASectionData } from "@/types/landing";

export interface CTAProps {
  data?: CTASectionData;
  onSubmitSuccess?: () => void;
}

export const DEFAULT_CTA_DATA: CTASectionData = {
  title: "Bắt đầu hành trình trẻ hóa làn da cùng Musase",
  description: "Để Musase đồng hành cùng bạn trong chu trình chăm sóc da phù hợp.",
  bgImage: "/images/cta-bg.webp",
  buttonText: "Nhận tư vấn ngay",
};
