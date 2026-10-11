import { mdiMessageReplyText, mdiFlash, mdiShieldCheck } from "@mdi/js";

export const CATEGORY_MAP: Record<string, any> = {
  "chatgpt": {
    title: "Tài khoản ChatGPT",
    desc: "Mở khóa sức mạnh của GPT-4 và ChatGPT Plus chính chủ với phiên bản ổn định nhất.",
    icon: mdiMessageReplyText,
    price: "150.000đ",
    stock: "50+",
  },
  "gemini": {
    title: "Tài khoản Gemini",
    desc: "Sử dụng Gemini Advanced 1.5 Pro mạnh mẽ nhất từ Google cho xử lý dữ liệu và sáng tạo.",
    icon: mdiFlash,
    price: "120.000đ",
    stock: "35+",
  },
  "vpn": {
    title: "Tài khoản VPN Premium",
    desc: "Bảo vệ kết nối riêng tư và truy cập vượt rào cản quốc tế, hỗ trợ tốc độ cao.",
    icon: mdiShieldCheck,
    price: "250.000đ",
    stock: "120+",
  },
};
