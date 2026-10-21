export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink extends FooterLink {
  id: "facebook" | "shopee" | "zalo";
  icon: string;
  /** The icon carries its own colours (Shopee, Zalo); otherwise it is a one-colour glyph painted in the brand colour. */
  fullColor?: boolean;
}

export interface FooterOffice {
  label: string;
  address: string;
}

export interface FooterContent {
  logo: { src: string; alt: string; width: number; height: number };
  slogan: string;
  contactLabel: string;
  email: string;
  offices: FooterOffice[];
  orderLabel: string;
  orderPhone: string;
  orderPhoneHref: string;
  purchaseLabel: string;
  socialLabel: string;
  socialLinks: FooterSocialLink[];
  distributorLabel: string;
  distributors: string[];
  policyLabel: string;
  policyLinks: FooterLink[];
  copyright: string;
}

export interface FooterProps {
  data: FooterContent;
}

// Social and policy URLs are placeholders: Figma does not specify them.
export const DEFAULT_FOOTER_CONTENT: FooterContent = {
  logo: {
    src: "/logos/femivita-logo-white.svg",
    alt: "Femivita",
    width: 400,
    height: 89,
  },
  slogan: "Nơi thầm kín của những câu chuyện chưa kể",
  contactLabel: "Liên hệ",
  email: "infor@femivita.vn",
  offices: [
    { label: "Hà Nội", address: "19 Nguyễn Sơn, Long Biên, thành phố Hà Nội" },
    {
      label: "HCM",
      address: "57/34 Điện Biên Phủ, P15, quận Bình Thạnh, thành phố Hồ Chí Minh",
    },
  ],
  orderLabel: "Xử lý đặt hàng",
  orderPhone: "+849 14 14 24 64",
  orderPhoneHref: "tel:+84914142464",
  purchaseLabel: "Mua chính hãng",
  socialLabel: "Kênh trực tiếp",
  socialLinks: [
    { id: "facebook", label: "Facebook", href: "https://facebook.com", icon: "/logos/social-facebook.svg" },
    { id: "shopee", label: "Shopee", href: "https://shopee.vn", icon: "/logos/social-shopee.svg", fullColor: true },
    { id: "zalo", label: "Zalo", href: "https://zalo.me/0838098866", icon: "/logos/social-zalo.svg", fullColor: true },
  ],
  distributorLabel: "Nhà phân phối:",
  distributors: [
    "Gia Đình Yêu Thương",
    "Femivita - Gel đánh thức khoái cảm Hàn Quốc",
    "Gel Venus - Chăm sóc cô bé số 1 Hàn Quốc",
  ],
  policyLabel: "Chính sách",
  policyLinks: [
    { label: "Bảo mật", href: "/privacy" },
    { label: "Điều khoản", href: "/terms" },
  ],
  copyright: "© 2026 Femivita",
};
