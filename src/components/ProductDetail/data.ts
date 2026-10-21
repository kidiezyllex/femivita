import { FOAM_QUESTIONS } from "@/components/Faq/questions";
import { ProductDetailData } from "./types";

const PENDING_ANSWER = "Nội dung đang được cập nhật.";

// "Trọn bộ cảm hứng" banner shown at the bottom of every product page.
const PRODUCT_BANNER: ProductDetailData["banner"] = {
  eyebrow: "Sản phẩm của chúng tôi",
  headlineStart: "Trọn bộ",
  headlineHighlight: "Cảm hứng",
  description:
    "Trong suốt cuộc đời, cơ thể của người phụ nữ phải trải qua những thay đổi về thể chất và nội tiết gây ra những bất tiện khó nói.\n“Chăm sóc vùng Y cho mọi giai đoạn của cuộc sống” là tôn chỉ mà Femivita hướng đến.",
  ctaLabel: "Xem toàn bộ sản phẩm",
  ctaHref: "/products",
  image: "/images/products/banner.webp",
  imageAlt: "Gel Venus Y Passion và Zone Fresh Mousse trên nền hoa tím và cam",
};

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
  banner: PRODUCT_BANNER,
};

// Zone Fresh Mousse has no Figma page: the copy comes from the /faq answers and the packaging, and the layout reuses the Gel Venus page.
const ZONE_FRESH_MOUSSE: ProductDetailData = {
  slug: "zone-fresh-mousse",
  name: "Bọt vệ sinh Zone Fresh Mousse",
  size: "150ml | 5.07FL.OZ",
  seoDescription:
    "Bọt vệ sinh lợi khuẩn Probiotics Zone Fresh Mousse của Femivita: chuẩn pH 4.5, chiết xuất sen, Prebiotic và Exosome, làm sạch dịu nhẹ vùng kín mỗi ngày, khử mùi và bảo vệ hệ lợi khuẩn.",
  gallery: [
    {
      src: "/images/products/zone-fresh-mousse-in-hand.webp",
      alt: "Bàn tay cầm chai bọt vệ sinh Zone Fresh Mousse trên nền lụa tím nhạt",
    },
    {
      src: "/images/products/zone-fresh-mousse.webp",
      alt: "Bọt vệ sinh Zone Fresh Mousse và hộp sản phẩm",
    },
  ],
  tagline: "LÀM SẠCH DỊU NHẸ & BẢO VỆ VÙNG KÍN",
  summary:
    "Zone Fresh Mousse là bọt vệ sinh lợi khuẩn Probiotics dành cho vùng Y, với công thức sinh học chuẩn pH 4.5 cùng chiết xuất sen, Prebiotic và Exosome. Sản phẩm làm sạch dịu nhẹ, khử mùi, ngăn ngừa vi khuẩn gây mùi và giúp duy trì hệ lợi khuẩn tự nhiên mà không làm khô rát. Không cồn, không paraben, không hương liệu hóa học tổng hợp nồng gắt.",
  ctaLabel: "Mua chính hãng",
  ctaHref: "/order",
  sections: [
    {
      id: "suitable-for",
      title: "Phù hợp cho:",
      items: [
        {
          icon: "check",
          text: "Phụ nữ từ 18 tuổi, kể cả phụ nữ mang thai, sau sinh hoặc trong kỳ kinh nguyệt, không dị ứng với thành phần nào của sản phẩm.",
        },
      ],
    },
    {
      id: "benefits",
      title: "Công dụng",
      items: [
        {
          icon: "dot",
          heading: "Làm sạch dịu nhẹ mỗi ngày:",
          text: "Bọt mịn đã qua kiểm nghiệm da liễu, làm sạch nhẹ nhàng 1–2 lần/ngày, giữ vùng Y sạch thoáng mà không làm khô rát hay ảnh hưởng đến môi trường sinh lý.",
        },
        {
          icon: "dot",
          heading: "Cân bằng pH, nuôi dưỡng lợi khuẩn:",
          text: "Độ pH 4.5 tạo điều kiện lý tưởng cho hệ lợi khuẩn Lactobacillus phát triển, đồng thời ức chế vi khuẩn có hại và nấm ngứa.",
        },
        {
          icon: "dot",
          heading: "Khử mùi, ngăn vi khuẩn xâm nhập:",
          text: "Chiết xuất tự nhiên giúp khử mùi hiệu quả và làm dịu cảm giác ngứa ngáy, nhất là trong những thời điểm vùng Y nhạy cảm như kỳ kinh hay sau sinh.",
        },
      ],
    },
    {
      id: "usage",
      title: "Cách sử dụng",
      items: [
        { icon: "none", heading: "Bước 1:", text: "Làm ướt vùng kín bằng nước sạch." },
        { icon: "none", heading: "Bước 2:", text: "Nhấn vòi xịt lấy khoảng 1–2 lần bơm bọt ra lòng bàn tay." },
        {
          icon: "none",
          heading: "Bước 3:",
          text: "Thoa rửa nhẹ nhàng lớp bọt mịn vào vùng bên ngoài (môi lớn, môi bé) từ trước ra sau trong khoảng 30–60 giây. Không thụt rửa sâu vào bên trong âm đạo.",
        },
        { icon: "none", heading: "Bước 4:", text: "Rửa lại thật sạch bằng nước và dùng khăn mềm lau khô nhẹ nhàng." },
      ],
    },
    {
      id: "ingredients",
      title: "Thành phần chính",
      items: [
        {
          icon: "none",
          text: "Chiết xuất sen (Lotus Extract), Prebiotic và Exosome. Công thức không cồn, không paraben.",
        },
      ],
    },
  ],
  // The infographics of the Gel Venus page are specific to that product; this page has none yet.
  infographics: [],
  faq: {
    eyebrow: "FAQs",
    titleStart: "Câu hỏi về",
    titleHighlight: "Zone Fresh Mousse",
    description: "Câu trả lời rõ ràng cho những thắc mắc phổ biến nhất về bọt vệ sinh Zone Fresh.",
    ctaLabel: "Các thắc mắc khác",
    ctaHref: "/faq",
    items: FOAM_QUESTIONS.slice(0, 4),
  },
  banner: PRODUCT_BANNER,
};

export const PRODUCT_DETAILS: Record<string, ProductDetailData> = {
  [GEL_VENUS_Y_PASSION.slug]: GEL_VENUS_Y_PASSION,
  [ZONE_FRESH_MOUSSE.slug]: ZONE_FRESH_MOUSSE,
};

export const getProductDetail = (slug: string): ProductDetailData | undefined => PRODUCT_DETAILS[slug];
