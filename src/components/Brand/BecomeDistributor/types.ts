export interface BecomeDistributorData {
  eyebrow: string;
  headlineStart: string;
  headlineHighlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export const DEFAULT_BECOME_DISTRIBUTOR_DATA: BecomeDistributorData = {
  eyebrow: "Đồng hành cùng Femivita",
  headlineStart: "Trở thành",
  headlineHighlight: "Nhà phân phối",
  description:
    "Hãy cùng chúng tôi lan tỏa giải pháp chăm sóc tiên tiến, nâng tầm sức khỏe thân mật và mang lại sự tự tin trọn vẹn cho hàng triệu phụ nữ Việt!",
  ctaLabel: "Liên hệ",
  ctaHref: "/distributors",
  image: "/images/brand/distributor.webp",
  imageAlt:
    "Trụ sở ENBIOSCIENCE cùng các chứng nhận Thuần chay an toàn, GMP Hàn Quốc và FDA Hoa Kỳ",
};

export interface BecomeDistributorProps {
  data?: BecomeDistributorData;
}
