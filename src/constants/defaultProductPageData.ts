import { ProductPageData, ProductPageUsageInstructionBanner, ProductPageUpsellBanner } from "@/types/productPage";

export const DEFAULT_COMBO_PRODUCT_PAGE_DATA: ProductPageData = {
  slug: "combo",
  title: "Bộ đôi ngăn ngừa lão hóa Vỏ Chuối",
  description:
    "Bộ đôi ngăn ngừa lão hóa là giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối chuyên sâu và Kem dưỡng vỏ chuối giúp duy trì độ ẩm, kích thích sản sinh collagen và làm mờ các rãnh nhăn, hỗ trợ làn da trẻ hóa theo thời gian.",
  badge: "Đáng mua nhất",
  tags: ["Không hương liệu", "Không alcohol", "Không dầu khoáng", "Không paraben"],
  pricing: {
    oldPrice: "1.080.000đ",
    price: "990.000 đ",
    discountLabel: "GIẢM 8%",
  },
  galleryImages: [
    "/images/combo/combo1.webp",
    "/images/combo/combo2.webp",
    "/images/combo/combo3.webp",
    "/images/combo/combo4.webp",
    "/images/combo/combo5.webp",
  ],
  bundleItems: [
    {
      image: "/images/serum/serum1.webp",
      title: "Tinh chất vỏ chuối 30ml",
      price: "590.000 đ",
      link: "/products/serum",
    },
    {
      image: "/images/cream/cream1.webp",
      title: "Kem dưỡng vỏ chuối 50g",
      price: "490.000 đ",
      link: "/products/cream",
    },
  ],
  suitability: "Thích hợp mọi loại da",
  uses: [
    "Hỗ trợ cải thiện các dấu hiệu lão hóa, mờ nếp nhăn.",
    "Kích thích tăng sinh collagen, cải thiện độ săn chắc.",
    "Làm sáng và đều màu da.",
    "Chống oxy hóa, bổ sung dưỡng chất cho làn da thiếu sức sống.",
    "Duy trì độ ẩm, hạn chế tình trạng khô ráp.",
  ],
  keyIngredients: [
    {
      name: "Chiết xuất chuối - vỏ chuối",
      description:
        "Đây là nguồn nguyên liệu lành tính giúp kích thích tăng sinh Procollagen, khôi phục độ đàn hồi, đồng thời ngăn chặn các tác nhân gây đứt gãy collagen.",
    },
    {
      name: "Bakuchiol",
      description:
        'Được ví như "Retinol tự nhiên" giúp thúc đẩy tái tạo tế bào, làm mịn bề mặt và mờ thâm mà không gây kích ứng, mang lại làn da trắng sáng.',
    },
    {
      name: "Peptide Matrixyl 3000",
      description: "Làm mờ nếp nhăn, tăng độ săn chắc và kích thích sản sinh collagen và elastin.",
    },
  ],
  ingredientsDetail: [
    {
      title: "Thành phần TINH CHẤT VỎ CHUỐI",
      content:
        "Aqua, Glycerin (and) Aqua (and) Butylene Glycol (and) Carbomer (and) Polysorbate 20 (and) Palmitoyl Tripeptide-1 (and) Palmitoyl Tetrapeptide-7 (and) Sodium Lactate, Musa Sapientum (Banana) Peel Extract (and) Water (and) Glycerin (and) 1,2-Hexanediol, Water (and) Butylene Glycol (and) Glycerin (and) Musa Sapientum (Banana) Fruit Extract, Glyceryl Stearate (and) PEG-100 Stearate, Bakuchiol, Bis-Ethoxydiglycol Cyclohexane 1,4-Dicarboxylate, Water (and) Ethyl Hexanediol (and) 1,2-Hexanediol (and) Beta-Glucan, Phenoxyethanol (and) Chlorophenesin (and) Aqua (and) Glycerin, Sodium PCA (and) Water, Ubiquinone, Coco-Caprylate/Caprate, Neopentyl Glycol Diheptanoate, Adenosine, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Disodium EDTA.",
    },
    {
      title: "Thành phần KEM DƯỠNG VỎ CHUỐI",
      content:
        "Aqua, Glycerin (and) Water (and) Glyceryl Acrylate/ Acrylic Acid Copolymer (and) 1,2-Hexanediol, Pentylene Glycol, Musa Sapientum (Banana) Peel Extract (and) Water (and) Glycerin (and) 1,2-Hexanediol, Water (and) Butylene Glycol (and) Glycerin (and) Musa Sapientum (Banana) Fruit Extract, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Squalane, Dibutyl Adipate, Phenoxyethanol (and) Chlorophenesin (and) Aqua (and) Glycerin, Jojoba Esters (and) Tocopherol, Glycerin (and) Aqua (and) Butylene Glycol (and) Carbomer (and) Polysorbate 20 (and) Palmitoyl Tripeptide-1 (and) Palmitoyl Tetrapeptide-7 (and) Sodium Lactate, Adenosine, Bakuchiol, Hydroxyethyl Urea (and) Water, Allantoin, Ubiquinone, Trehalose, Panthenol, Polyacrylate-13 (and) Polyisobutene (and) Polysorbate 20 (and) Water (and) Sorbitan Isostearate.",
    },
  ],
  usageSteps: [
    {
      step: "BƯỚC 1",
      title: "Làm sạch & Bổ sung tinh chất",
      description:
        "Làm sạch da mặt, sử dụng 4 - 6 giọt Serum - Tinh chất vỏ chuối bôi và mát xa đều da mặt và cổ.",
      texture: "Dung dịch dạng lỏng",
      image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787627759/musase/images/alhakm0q13f8edibhbqm.jpg",
      imageSide: "right",
    },
    {
      step: "BƯỚC 2",
      title: "Tái tạo & Phục hồi",
      description: "Sử dụng kem dưỡng ẩm giúp khóa lớp dưỡng chất, cấp ẩm và mềm làn da",
      texture: "Dạng kem đặc",
      image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787627785/musase/images/z3tifocllscoshxtgxvj.jpg",
      imageSide: "left",
    },
  ],
  reviews: [
    {
      name: "Minh Anh",
      stars: 4,
      content:
        "Serum thấm nhanh, còn kem dưỡng giúp da giữ được độ ẩm cả ngày nên sáng hôm sau da mềm và căng hơn. Sau một thời gian sử dụng, mình thấy da đều màu và trông có sức sống hơn.",
    },
    {
      name: "Thu Trang",
      stars: 5,
      content:
        "Trước đây mình chỉ dùng serum nên da vẫn hơi khô. Khi chuyển sang dùng cả combo của Musase thì cảm giác da đủ ẩm hơn hẳn. Mình thích nhất là chất kem không quá dày, dùng cùng nhau rất dễ chịu và không gây bí.",
    },
    {
      name: "Ngọc Linh",
      stars: 4,
      content:
        "Da mình nhạy cảm nên không dùng được Retinol nên đổi sang loại này. Sau gần một tháng sử dụng đều đặn, da nhìn mịn hơn, vùng da quanh khóe miệng cũng đỡ nhăn, trông trẻ hẳn.",
    },
  ],
  ratingValue: "4.9",
  ratingCount: "120 người",
};

const CREAM_USAGE_INSTRUCTION_BANNER: ProductPageUsageInstructionBanner = {
  title: "CÁCH SỬ DỤNG",
  description:
    "Sau bước làm sạch và cân bằng da, thoa đều kem lên mặt và cổ. Sử dụng ngày và đêm để duy trì độ ẩm và nuôi dưỡng làn da tươi trẻ. Có thể kết hợp cùng tinh chất để tăng hiệu quả.",
  image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787627871/musase/images/x5scxujfcm8knkgyl84h.png",
  usageInfo: [
    { label: "Liều lượng:", value: "Sử dụng một lượng vừa đủ" },
    { label: "Kết cấu:", value: "Kem dưỡng dạng mịn, thấm nhanh" },
    { label: "Mùi hương:", value: "Mùi thơm nhẹ nhàng tự nhiên của nguyên liệu" },
    { label: "Lưu ý:", value: "Tránh tiếp xúc với mắt, để xa tầm tay trẻ em" },
    { label: "Xuất xứ:", value: "Việt Nam" },
  ],
};

const CREAM_SERUM_UPSELL_BANNER: ProductPageUpsellBanner = {
  badge: "ĐÁNG MUA NHẤT",
  title: "Bộ đôi ngăn ngừa lão hóa",
  description:
    "Bộ đôi ngăn ngừa lão hóa là giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối chuyên sâu và Kem dưỡng vỏ chuối giúp duy trì độ ẩm, kích thích sản sinh collagen và làm mờ các rãnh nhăn, hỗ trợ làn da trẻ hóa theo thời gian.",
  image: "https://eascompany.s3.ca-east-006.backblazeb2.com/images/4f8d9e28-1ea3-4985-896a-98c7462ca4c6-T3.2 (6).png",
  buttonText: "Xem chi tiết sản phẩm",
  buttonLink: "/products/combo",
};

export const DEFAULT_CREAM_PRODUCT_PAGE_DATA: ProductPageData = {
  slug: "cream",
  title: "Kem dưỡng vỏ chuối 50g",
  description:
    "Kem dưỡng ẩm chuyên sâu kết hợp tinh chất vỏ chuối và Peptide giúp duy trì độ ẩm và nuôi dưỡng làn da tươi trẻ.",
  tags: ["Không hương liệu", "Không alcohol", "Không dầu khoáng", "Không paraben"],
  pricing: {
    oldPrice: "",
    price: "490.000 đ",
  },
  galleryImages: [
    "/images/cream/cream1.webp",
    "/images/cream/cream2.webp",
    "/images/cream/cream3.webp",
    "/images/cream/cream4.webp",
    "/images/cream/cream5.webp",
  ],
  bundleItems: [],
  suitability: "Thích hợp mọi loại da",
  uses: [
    "Duy trì độ ẩm chuyên sâu, giúp da mềm mại và căng mịn suốt cả ngày.",
    "Thúc đẩy tái tạo tế bào, làm mờ nếp nhăn và tăng độ đàn hồi giúp da săn chắc hơn",
    "Giảm hình thành sắc tố melanin, giúp làm mờ thâm nám và tàn nhang",
    "Phục hồi hàng rào bảo vệ da, giúp da khỏe mạnh và tươi trẻ hơn theo thời gian",
  ],
  keyIngredients: [
    {
      name: "2% Chiết xuất chuối - vỏ chuối, 1% Bakuchiol, 3% Peptides Matrixyl 3000",
      description: "",
    },
  ],
  ingredientsDetail: [
    {
      title: "Thành phần KEM DƯỠNG VỎ CHUỐI",
      content:
        "Aqua, Glycerin (and) Aqua (and) Butylene Glycol (and) Carbomer (and) Polysorbate 20 (and) Palmitoyl Tripeptide-1 (and) Palmitoyl Tetrapeptide-7 (and) Sodium Lactate, Musa Sapientum (Banana) Peel Extract (and) Water (and) Glycerin (and) 1,2-Hexanediol, Water (and) Butylene Glycol (and) Glycerin (and) Musa Sapientum (Banana) Fruit Extract, Glyceryl Stearate (and) PEG-100 Stearate, Bakuchiol, Bis-Ethoxydiglycol Cyclohexane 1,4-Dicarboxylate, Water (and) Ethyl Hexanediol (and) 1,2-Hexanediol (and) Beta-Glucan, Phenoxyethanol (and) Chlorophenesin (and) Aqua (and) Glycerin, Sodium PCA (and) Water, Ubiquinone, Coco-Caprylate/Caprate, Neopentyl Glycol Diheptanoate, Adenosine, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Disodium EDTA.",
    },
  ],
  usageSteps: [],
  reviews: [
    {
      name: "Minh Anh",
      stars: 4,
      content:
        "Serum thấm nhanh, còn kem dưỡng giúp da giữ được độ ẩm cả ngày nên sáng hôm sau da mềm và căng hơn. Sau một thời gian sử dụng, mình thấy da đều màu và trông có sức sống hơn.",
    },
    {
      name: "Thu Trang",
      stars: 5,
      content:
        "Trước đây mình chỉ dùng serum nên da vẫn hơi khô. Khi chuyển sang dùng cả combo của Musase thì cảm giác da đủ ẩm hơn hẳn. Mình thích nhất là chất kem không quá dày, dùng cùng nhau rất dễ chịu và không gây bí.",
    },
    {
      name: "Ngọc Linh",
      stars: 4,
      content:
        "Da mình nhạy cảm nên không dùng được Retinol nên đổi sang loại này. Sau gần một tháng sử dụng đều đặn, da nhìn mịn hơn, vùng da quanh khóe miệng cũng đỡ nhăn, trông trẻ hẳn.",
    },
  ],
  ratingValue: "4.9",
  ratingCount: "120 người",
  usageInstructionBanner: CREAM_USAGE_INSTRUCTION_BANNER,
  upsellBanner: CREAM_SERUM_UPSELL_BANNER,
};

const SERUM_USAGE_INSTRUCTION_BANNER: ProductPageUsageInstructionBanner = {
  title: "CÁCH SỬ DỤNG",
  description:
    "Lấy một lượng vừa đủ thoa đều lên mặt và cổ. Sử dụng 1 lần mỗi ngày vào buổi tối sau bước làm sạch. Có thể kết hợp cùng kem dưỡng để tăng hiệu quả.",
  image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787617374/musase/images/aoboljek7z6bc8lltow0.png",
  usageInfo: [
    { label: "Liều lượng:", value: "Sử dụng khoảng 4-6 giọt" },
    { label: "Kết cấu:", value: "Dung dịch dạng lỏng, sánh nhẹ" },
    { label: "Mùi hương:", value: "Mùi thơm nhẹ nhàng tự nhiên của nguyên liệu" },
    { label: "Lưu ý:", value: "Tránh tiếp xúc với mắt, để xa tầm tay trẻ em" },
    { label: "Xuất xứ:", value: "Việt Nam" },
  ],
};

const SERUM_UPSELL_BANNER: ProductPageUpsellBanner = {
  badge: "ĐÁNG MUA NHẤT",
  title: "Bộ đôi ngăn ngừa lão hóa",
  description:
    "Bộ đôi ngăn ngừa lão hóa là giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối chuyên sâu và Kem dưỡng vỏ chuối giúp duy trì độ ẩm, kích thích sản sinh collagen và làm mờ các rãnh nhăn, hỗ trợ làn da trẻ hóa theo thời gian.",
  image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787617401/musase/images/ltmegybv5vky456ta4vl.jpg",
  buttonText: "Xem chi tiết sản phẩm",
  buttonLink: "/products/combo",
};

export const DEFAULT_SERUM_PRODUCT_PAGE_DATA: ProductPageData = {
  slug: "serum",
  title: "Tinh chất vỏ chuối 30ml",
  description:
    "Tinh chất vỏ chuối Musase là giải pháp chống lão hóa toàn diện dành cho làn da. Sự kết hợp giữa Chiết xuất Vỏ Chuối, Bakuchiol và hệ Peptides Matrixyl 3000 giúp hỗ trợ chống lão hóa, mờ nếp nhăn, bảo vệ da khỏi các gốc tự do gây hại và làm đều màu da.",
  tags: ["Không hương liệu", "Không alcohol", "Không dầu khoáng", "Không paraben"],
  pricing: {
    oldPrice: "",
    price: "590.000 đ",
  },
  galleryImages: [
    "/images/serum/serum1.webp",
    "/images/serum/serum2.webp",
    "/images/serum/serum3.webp",
    "/images/serum/serum4.webp",
    "/images/serum/serum5.webp",
  ],
  bundleItems: [],
  suitability: "Thích hợp mọi loại da",
  uses: [
    "Hỗ trợ tăng sinh collagen và ngăn ngừa đứt gãy cấu trúc da.",
    "Thúc đẩy tái tạo tế bào, làm mờ nếp nhăn và tăng độ đàn hồi giúp da săn chắc hơn",
    "Giảm hình thành sắc tố melanin, giúp làm mờ thâm nám và tàn nhang",
    "Giúp làm mờ các rãnh nhăn sâu, nếp nhăn nông và vết chân chim trên mặt",
  ],
  keyIngredients: [
    {
      name: "1% Bakuchiol, 2% Chiết xuất chuối - vỏ chuối, 3% Peptides Matrixyl 3000",
      description: "",
    },
  ],
  ingredientsDetail: [
    {
      title: "Thành phần TINH CHẤT VỎ CHUỐI",
      content:
        "Aqua, Glycerin (and) Aqua (and) Butylene Glycol (and) Carbomer (and) Polysorbate 20 (and) Palmitoyl Tripeptide-1 (and) Palmitoyl Tetrapeptide-7 (and) Sodium Lactate, Musa Sapientum (Banana) Peel Extract (and) Water (and) Glycerin (and) 1,2-Hexanediol, Water (and) Butylene Glycol (and) Glycerin (and) Musa Sapientum (Banana) Fruit Extract, Glyceryl Stearate (and) PEG-100 Stearate, Bakuchiol, Bis-Ethoxydiglycol Cyclohexane 1,4-Dicarboxylate, Water (and) Ethyl Hexanediol (and) 1,2-Hexanediol (and) Beta-Glucan, Phenoxyethanol (and) Chlorophenesin (and) Aqua (and) Glycerin, Sodium PCA (and) Water, Ubiquinone, Coco-Caprylate/Caprate, Neopentyl Glycol Diheptanoate, Adenosine, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Disodium EDTA.",
    },
  ],
  usageSteps: [],
  reviews: [
    {
      name: "Minh Anh",
      stars: 4,
      content:
        "Serum thấm nhanh, còn kem dưỡng giúp da giữ được độ ẩm cả ngày nên sáng hôm sau da mềm và căng hơn. Sau một thời gian sử dụng, mình thấy da đều màu và trông có sức sống hơn.",
    },
    {
      name: "Thu Trang",
      stars: 5,
      content:
        "Trước đây mình chỉ dùng serum nên da vẫn hơi khô. Khi chuyển sang dùng cả combo của Musase thì cảm giác da đủ ẩm hơn hẳn. Mình thích nhất là chất kem không quá dày, dùng cùng nhau rất dễ chịu và không gây bí.",
    },
    {
      name: "Ngọc Linh",
      stars: 4,
      content:
        "Da mình nhạy cảm nên không dùng được Retinol nên đổi sang loại này. Sau gần một tháng sử dụng đều đặn, da nhìn mịn hơn, vùng da quanh khóe miệng cũng đỡ nhăn, trông trẻ hẳn.",
    },
  ],
  ratingValue: "4.9",
  ratingCount: "120 người",
  usageInstructionBanner: SERUM_USAGE_INSTRUCTION_BANNER,
  upsellBanner: SERUM_UPSELL_BANNER,
};
