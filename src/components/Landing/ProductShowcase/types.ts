export interface ShowcaseBenefit {
  title: string;
  highlight: string;
  description: string;
}

export interface ShowcaseProduct {
  id: string;
  name: string;
  size: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface ProductShowcaseData {
  eyebrow: string;
  headlineStart: string;
  headlineHighlight: string;
  benefits: ShowcaseBenefit[];
  heroImage: string;
  heroImageAlt: string;
  spotlight: {
    name: string;
    size: string;
    thumbnail: string;
    href: string;
  };
  lineupTitleStart: string;
  lineupTitleHighlight: string;
  lineupCtaLabel: string;
  lineupCtaHref: string;
  products: ShowcaseProduct[];
}

export interface ProductShowcaseProps {
  data: ProductShowcaseData;
}

const FOAM_PRODUCT = {
  name: "Bọt vệ sinh lợi khuẩn Probiotics cho vùng Y",
  size: "20ml | 0.67FL.OZ",
  image: "/images/products/zone-fresh-mousse/sp2.webp",
  imageAlt: "Bọt vệ sinh lợi khuẩn Probiotics Zone Fresh Mousse cho vùng Y",
  href: "/products/zone-fresh-mousse",
};

export const DEFAULT_PRODUCT_SHOWCASE_DATA: ProductShowcaseData = {
  eyebrow: "Sản phẩm của chúng tôi",
  headlineStart: "Gel cảm hứng",
  headlineHighlight: "vùng Y",
  benefits: [
    {
      title: "Khơi dậy",
      highlight: "cảm hứng",
      description: "Tạo nên những khoảnh khắc gần gũi đầy lãng mạn và sự tự tin cho phái đẹp.",
    },
    {
      title: "Chăm sóc sức khỏe",
      highlight: "hiệu quả",
      description: "Chống viêm, dưỡng ẩm và giàu dưỡng chất.",
    },
    {
      title: "Cân bằng",
      highlight: "tự nhiên",
      description: "Tùy chỉnh cho từng loại da, duy trì độ pH và làm dịu làn da.",
    },
    {
      title: "Trải nghiệm",
      highlight: "đặc biệt",
      description: "Mang lại một cảm giác không thể quên khi gần gũi",
    },
  ],
  heroImage: "/images/product-showcase/hero-bottle.png",
  heroImageAlt: "Gel Venus Y Passion",
  spotlight: {
    name: "Gel Venus Y Passion",
    size: "20ml | 0.67FL.OZ",
    thumbnail: "/images/product-showcase/gel-venus-thumbnail.png",
    href: "/products/gel-venus-y-passion",
  },
  lineupTitleStart: "Trọn bộ",
  lineupTitleHighlight: "cảm hứng",
  lineupCtaLabel: "Xem toàn bộ sản phẩm",
  lineupCtaHref: "/products",
  products: [
    { id: "zone-fresh-mousse", ...FOAM_PRODUCT },
    {
      id: "gel-venus-y-passion",
      name: "Gel Venus Y Passion",
      size: "20ml | 0.67FL.OZ",
      image: "/images/products/gel-venus-y-passion/sp2.webp",
      imageAlt: "Gel Venus Y Passion và hộp sản phẩm",
      href: "/products/gel-venus-y-passion",
    },
  ],
};
