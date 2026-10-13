import { ProductDetailData } from "./types";

const PENDING_ANSWER = "Nội dung đang được cập nhật.";

// Figma only has the detail page of Gel Venus Y Passion. Add an entry here (keyed by its slug) for every other product.
const GEL_VENUS_Y_PASSION: ProductDetailData = {
  slug: "gel-venus-y-passion",
  name: "Gel Venus Y Passion",
  size: "20ml | 0.67FL.OZ",
  seoDescription:
    "Gel Venus Y Passion của Femivita: gel chăm sóc vùng kín kết hợp estrogen tự nhiên và L-arginine, giúp cải thiện lưu thông máu và cảm giác, lấy lại cảm hứng để yêu.",
  gallery: [
    {
      src: "/images/products/gel-venus-in-hand.webp",
      alt: "Bàn tay thoa sản phẩm Femivita bên cạnh chai bọt trên nền lụa tím nhạt",
    },
    {
      src: "/images/products/gel-venus-y-passion.webp",
      alt: "Gel Venus Y Passion và hộp sản phẩm",
    },
  ],
  tagline: "CHĂM SÓC VÙNG KÍN & TẠO CẢM HỨNG",
  // Figma spells the brand "Femivta" here; corrected to "Femivita".
  summary:
    'Femivita là gel chăm sóc vùng kín kết hợp estrogen tự nhiên và L-arginine, giúp cải thiện lưu thông máu và cảm giác, lấy lại cảm hứng để "yêu" . Với công thức độc đáo bao như Exosome, Peptide NMN và các thành phần chống oxi hoá như Noni Neeceflower, sản phẩm này không chỉ hỗ trợ quá trình phục hồi và trẻ hóa vùng nhạy cảm mà còn giúp cân bằng độ pH, từ đó ngăn ngừa các vấn đề phụ khoa.',
  ctaLabel: "Mua chính hãng",
  // There is no order page yet (the header CTA points to the same route).
  ctaHref: "/order",
  sections: [
    {
      id: "suitable-for",
      title: "Phù hợp cho:",
      items: [
        {
          icon: "check",
          text: "Mọi phụ nữ trên 18 tuổi không bị dị ứng thành phần nào của sản phẩm.",
        },
      ],
    },
    {
      id: "benefits",
      title: "Công dụng",
      items: [
        {
          icon: "dot",
          heading: "Dưỡng vùng âm đạo:",
          text: "Với Axit amin, các yếu tố tăng trưởng như Peptide, Exosome, NMN giúp lưu thông máu đến cô bé, sửa chữa và tăng sinh tế bào giúp làm dày niêm mạc bên trong và bên ngoài âm đạo, ngoài ra Acid Latic và Acit Citric giúp cân bằng hệ vi sinh và pH âm đạo từ đó ngăn ngừa viêm nhiễm nấm ngứa",
        },
        {
          icon: "dot",
          heading: "Hỗ trợ sức khỏe tình dục:",
          text: 'Với Axit Amin đặc biệt cải thiện lưu lượng máu đến đến âm đạo, do đó có thể cải thiện cảm giác tình dục. Tạo cảm hứng trước khi quan hệ, dễ dàng đạt khoái cảm khi "yêu"',
        },
      ],
    },
    {
      id: "ingredients",
      title: "Thành phần chính",
      items: [
        {
          icon: "none",
          text: "Water, Butylene Glycol, Allantoin, Betaine Alcohol, Sorbitan Sesquioleate, Chlorphenesin, Arginine ,Panthenol Carbomer Ethylhexylglycerin, Lactic Acid, 1,2-Hexanediol, Polyglyceryl-10 Laurate,  Propanediol Disodium EDTA, Caffeine,  Adenosine, Glycerin, Fragrance, Citric Acid ,Sodium Hyaluronate,  Polyglutamic Acid, Dipotassium Glycyrrhizate, Hydroxyethylcellulose, Centella Asiatica Leaf Extract, Hamamelis Virginiana (Witch Hazel) Extract, Cinnamomum Cassia Bark Extract,  Dioscorea Japonica Root Extract Pueraria Mirifica Root Extract,  Morinda Citrifolia Extract, Polygonum Multiflorum Root Extract, Nicotinamide Mononucleotide,  Nelumbo Nucifera Callus Culture Extract, Rosa Hybrid Callus Culture Extract, Disodium Phosphate, Polysorbate 60, Sodium Phosphate, Acetyl Hexapeptide-8",
        },
      ],
    },
  ],
  infographics: [
    {
      src: "/images/products/gel-venus-ingredients.webp",
      alt: "5 thành phần vàng của Gel Venus Y Passion: NMN, Peptide, Axitamin, Estrogen và lợi khuẩn, công nghệ Exosome",
    },
    {
      src: "/images/products/gel-venus-usage.webp",
      alt: "Hướng dẫn sử dụng sản phẩm: làm sạch, lấy sản phẩm, bôi sản phẩm và thư giãn",
      backgroundClassName: "bg-[#F7F2F9]",
      objectPositionClassName: "object-[50%_8%]",
    },
  ],
  faq: {
    eyebrow: "FAQs",
    titleStart: "Câu hỏi về",
    titleHighlight: "Gel Venus Y Passion",
    description: "Câu trả lời rõ ràng cho những thắc mắc phổ biến nhất về Gel Venus.",
    ctaLabel: "Các thắc mắc khác",
    ctaHref: "/faq",
    // Figma only gives the answer of the first question.
    items: [
      {
        id: "side-effects",
        question: "Gel Venus có tác dụng phụ không?",
        answer:
          "Không. Gel Venus đạt các chứng nhận an toàn quốc tế như FDA (Hoa Kỳ) và ISO. Sản phẩm có nguồn gốc 100% từ thiên nhiên, thuần chay và không chứa thành phần biến đổi gen (Non-GMO), đảm bảo an toàn tuyệt đối cho làn da nhạy cảm.",
      },
      {
        id: "difference",
        question: "Gel Venus khác biệt gì so với các sản phẩm bôi trơn truyền thống?",
        answer: PENDING_ANSWER,
      },
      {
        id: "hands",
        question: "Tôi cần dùng tay để thoa Gel Venus, điều này có an toàn không?",
        answer: PENDING_ANSWER,
      },
      {
        id: "compatibility",
        question: "Gel Venus có tương thích với các sản phẩm chăm sóc cá nhân khác không?",
        answer: PENDING_ANSWER,
      },
    ],
  },
  banner: {
    eyebrow: "Sản phẩm của chúng tôi",
    headlineStart: "Trọn bộ",
    headlineHighlight: "Cảm hứng",
    description:
      "Trong suốt cuộc đời, cơ thể của người phụ nữ phải trải qua những thay đổi về thể chất và nội tiết gây ra những bất tiện khó nói.\n“Chăm sóc vùng Y cho mọi giai đoạn của cuộc sống” là tôn chỉ mà Femivita hướng đến.",
    ctaLabel: "Xem toàn bộ sản phẩm",
    ctaHref: "/products",
    image: "/images/products/banner.webp",
    imageAlt: "Gel Venus Y Passion và Zone Fresh Mousse trên nền hoa tím và cam",
  },
};

export const PRODUCT_DETAILS: Record<string, ProductDetailData> = {
  [GEL_VENUS_Y_PASSION.slug]: GEL_VENUS_Y_PASSION,
};

export const getProductDetail = (slug: string): ProductDetailData | undefined => PRODUCT_DETAILS[slug];
