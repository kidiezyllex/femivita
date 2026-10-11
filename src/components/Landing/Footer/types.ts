import { FooterSocialLinks } from "@/types/landing";

export interface FooterProps {
  logoUrl?: string;
  slogan?: string;
  companyName?: string;
  businessLicense?: string;
  address?: string;
  phone?: string;
  email?: string;
  copyright?: string;
  socialLinks?: FooterSocialLinks;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLinkItem[];
}

const DEFAULT_SOCIAL_LINKS: Required<FooterSocialLinks> = {
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
};

export const getFooterNavGroups = (socialLinks?: FooterSocialLinks): FooterLinkGroup[] => {
  const social = { ...DEFAULT_SOCIAL_LINKS, ...socialLinks };

  return [
    {
      title: "Musase",
      links: [
        { label: "Danh mục sản phẩm", href: "#products" },
        { label: "Về Musase", href: "#about" },
        { label: "Liên hệ", href: "#contact" },
      ],
    },
    {
      title: "Danh mục sản phẩm",
      links: [
        { label: "Combo từ vỏ chuối", href: "/products/combo" },
        { label: "Tinh chất vỏ chuối 30ml", href: "/products/serum" },
        { label: "Kem dưỡng vỏ chuối 50g", href: "/products/cream" },
      ],
    },
    {
      title: "Mạng xã hội",
      links: [
        { label: "Instagram", href: social.instagram },
        { label: "Facebook", href: social.facebook },
        { label: "TikTok", href: social.tiktok },
      ],
    },
  ];
};

export const FOOTER_NAV_GROUPS: FooterLinkGroup[] = getFooterNavGroups();
