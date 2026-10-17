export interface WhyFemivitaData {
  eyebrow: string;
  headlineStart: string;
  headlineHighlight: string;
  headlineEnd: string;
  ratingScore: string;
  ratingCount: string;
  brandStory: {
    image: string;
    imageAlt: string;
    title: string;
    linkLabel: string;
    linkHref: string;
  };
  research: {
    image: string;
    imageAlt: string;
    lead: string;
    organizationPrefix: string;
    organization: string;
    highlight: string;
    description: string;
  };
  photo: {
    image: string;
    imageAlt: string;
  };
}

export interface WhyFemivitaProps {
  data: WhyFemivitaData;
}

export const DEFAULT_WHY_FEMIVITA_DATA: WhyFemivitaData = {
  eyebrow: "Tại sao phái đẹp tin dùng Femivita?",
  headlineStart: "Phụ nữ hiện đại",
  headlineHighlight: "chọn Gel Venus",
  headlineEnd: "để thăng hoa trong chuyện yêu",
  ratingScore: "4.9",
  ratingCount: "1.202",
  brandStory: {
    image: "/images/why-femivita/products-bathroom.webp",
    imageAlt: "Sản phẩm Femivita Zone Fresh Mousse và Venus Y Passion trên bàn đá cẩm thạch",
    title: "Femivita - Chăm sóc vùng Y cho mọi giai đoạn của cuộc sống",
    linkLabel: "Câu chuyện thương hiệu",
    linkHref: "/story",
  },
  research: {
    image: "/images/why-femivita/enbioscience-research.webp",
    imageAlt: "Trụ sở ENBIOSCIENCE cùng các chứng nhận Vegan, GMP Hàn Quốc và FDA Hoa Kỳ",
    lead: "Nghiên cứu, phát triển bởi",
    organizationPrefix: "Tập đoàn",
    organization: "ENBIOSCIENCE",
    highlight: "Không Gây Kích Ứng",
    description:
      "Được kiểm nghiệm độ an toàn, dịu nhẹ tối đa cho những vùng da nhạy cảm nhất, không gây mẩn đỏ hay khó chịu.",
  },
  photo: {
    image: "/images/why-femivita/product-in-hands.webp",
    imageAlt: "Bàn tay cầm sản phẩm Femivita Venus Y Passion",
  },
};
