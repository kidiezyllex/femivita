import { DualAntiAgingData } from "@/types/landing";

export interface DualAntiAgingProps {
  data?: DualAntiAgingData;
}

export const DEFAULT_DUAL_ANTI_AGING_DATA: DualAntiAgingData = {
  subtitle: "Chiết xuất thực vật độc quyền",
  title: "Sức mạnh chống\nlão hóa kép từ",
  highlightWord: "vỏ chuối",
  labels: ["Chống lão hóa,", "Dưỡng ẩm,", "Lành tính."],
  description:
    "Trong vỏ chuối có chứa hoạt chất Beta-carotene giúp chống lão hóa vượt trội nhờ cơ chế kép tác động trực tiếp vào cấu trúc da. Một mặt, hỗ trợ kích thích tăng sinh Procollagen tự nhiên, giúp lấp đầy rãnh nhăn và tái tạo độ đàn hồi từ bên trong.\n\nMặt khác, hoạt chất này chủ động ức chế enzym MMP-1 – tác nhân chính làm đứt gãy các sợi collagen khi da lão hóa. Vừa thúc đẩy tái tạo, vừa ngăn chặn phân hủy collagen, giúp làn da duy trì độ căng mịn và giữ trọn vẻ trẻ trung bền vững.",
  image: "/images/dual_anti_aging_img.webp",
};
