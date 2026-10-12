// SITE_URL falls back to the domain in the footer email (infor@femivita.vn); set NEXT_PUBLIC_SITE_URL to override it.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://femivita.vn").replace(/\/$/, "");

export const SITE_NAME = "Femivita";

export const SITE_TITLE = "Femivita - Chăm sóc vùng Y cho mọi giai đoạn của cuộc sống";

export const SITE_DESCRIPTION =
  "Femivita - Gel Venus Y Passion và Bọt vệ sinh lợi khuẩn Probiotics Zone Fresh Mousse giúp chăm sóc vùng Y dịu nhẹ, không gây kích ứng. Nghiên cứu và phát triển bởi Tập đoàn ENBIOSCIENCE.";

export const SITE_SHORT_DESCRIPTION =
  "Gel Venus Y Passion và Bọt vệ sinh lợi khuẩn Probiotics Zone Fresh Mousse - chăm sóc vùng Y dịu nhẹ, không gây kích ứng cho mọi giai đoạn của cuộc sống.";

export const SITE_KEYWORDS = [
  "Femivita",
  "Gel Venus Y Passion",
  "Zone Fresh Mousse",
  "gel vùng Y",
  "chăm sóc vùng Y",
  "chăm sóc vùng kín",
  "bọt vệ sinh lợi khuẩn",
  "probiotics vùng kín",
  "dung dịch vệ sinh phụ nữ",
  "sức khoẻ thân mật",
  "ENBIOSCIENCE",
];

export const SITE_OG_IMAGE = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Femivita - Gel Venus Y Passion chăm sóc vùng Y",
};

export const SITE_CONTACT = {
  email: "infor@femivita.vn",
  telephone: "+84914142464",
};
