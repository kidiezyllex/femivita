import { LandingPageData } from "@/types/landing";

export const DEFAULT_LANDING_PAGE_DATA: LandingPageData = {
  header: {
    topBannerText: "Miễn phí giao hàng toàn quốc với tất cả đơn hàng",
    logoUrl: "/images/logo.png",
    links: [
      { label: "Về Musase", href: "/story" },
      { label: "Liên hệ", href: "/contact" },
    ],
    dropdownProducts: [
      {
        id: "combo",
        href: "/products/combo",
        image: "/images/product2.png",
        title: "Bộ đôi ngăn ngừa lão hóa",
        description: "Giải pháp chăm sóc da toàn diện giúp duy trì độ ẩm, hỗ trợ làn da trẻ hóa theo thời gian.",
        price: "990.000 đ",
        oldPrice: "1.080.000 đ",
        badge: "Đáng mua nhất",
      },
      {
        id: "serum",
        href: "/products/serum",
        image: "/images/product3.png",
        title: "Tinh chất vỏ chuối 30ml",
        description: "Tinh chất chuyên sâu hỗ trợ chống lão hóa, mờ nếp nhăn, bảo vệ da khỏi các gốc tự do gây hại và làm đều màu da.",
        price: "590.000 đ",
      },
      {
        id: "cream",
        href: "/products/cream",
        image: "/images/product4.png",
        title: "Kem dưỡng vỏ chuối 50g",
        description: "Duy trì độ ẩm, làm mềm và phục hồi làn da",
        price: "490.000 đ",
      },
    ],
  },
  hero: {
    marqueeText: "TRẺ HÓA LÀN DA TỪ VỎ CHUỐI",
    products: [
      {
        image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787629441/musase/images/tw6gqe9ufnljmx8alluc.jpg",
        thumbnail: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787629441/musase/images/tw6gqe9ufnljmx8alluc.jpg",
        subtitle: "Trẻ hóa làn da từ Vỏ chuối",
        title: "Bộ đôi ngăn ngừa lão hóa",
        description:
          "Bộ đôi ngăn ngừa lão hóa là giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối chuyên sâu và Kem dưỡng vỏ chuối giúp duy trì độ ẩm, kích thích sản sinh collagen và làm mờ các rãnh nhăn, hỗ trợ làn da trẻ hóa theo thời gian.",
        link: "/products/combo",
      },
      {
        image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787629499/musase/images/prrmm06ja3nxhgjmvjdb.jpg",
        thumbnail: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787629499/musase/images/prrmm06ja3nxhgjmvjdb.jpg",
        subtitle: "Trẻ hóa làn da từ Vỏ chuối",
        title: "Tinh chất vỏ chuối 30ml",
        description:
          "Tinh chất vỏ chuối Musase là giải pháp chống lão hóa toàn diện dành cho làn da. Sự kết hợp giữa Chiết xuất Vỏ Chuối, Bakuchiol và hệ Peptides Matrixyl 3000 giúp hỗ trợ chống lão hóa, mờ nếp nhăn, bảo vệ da khỏi các gốc tự do gây hại và làm đều màu da.",
        link: "/products/serum",
      },
      {
        image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787629467/musase/images/gqsltvvktiwbtljowdwt.png",
        thumbnail: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787629467/musase/images/gqsltvvktiwbtljowdwt.png",
        subtitle: "Trẻ hóa làn da từ Vỏ chuối",
        title: "Kem dưỡng vỏ chuối 50g",
        description:
          "Kem dưỡng ẩm Musase kết hợp tinh chất vỏ chuối, Bakuchiol và Peptide Matrixyl 3000, giúp duy trì độ ẩm, cải thiện độ sáng, hỗ trợ phục hồi và nuôi dưỡng làn da tươi trẻ theo thời gian.",
        link: "/products/cream",
      },
    ],
  },
  brandStory: {
    title: "Câu chuyện thương hiệu",
    quote: "",
    description:
      'Mỗi ngày, hàng tấn vỏ chuối bị bỏ đi sau khi lấy ruột, vô tình bị gắn nhãn "rác thải nông nghiệp". Nhưng với chúng tôi, thiên nhiên chưa bao giờ tạo ra những điều vô nghĩa. Phía sau lớp vỏ tưởng chừng bỏ đi ấy là một nguồn dưỡng chất dồi dào chờ được đánh thức. Chúng tôi tin rằng, chỉ cần đủ thấu hiểu và khai thác đúng cách, điều bị coi là bỏ đi hoàn toàn có thể trở thành giá trị bền vững cho cuộc sống.',
    bgImage: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787631909/musase/images/rmut7hdobeazzubkodag.png",
    ctaText: "Xem thêm",
    ctaLink: "/story",
  },
  dualAntiAging: {
    subtitle: "CHIẾT XUẤT THỰC VẬT",
    title: "Sức mạnh chống\nlão hóa kép từ",
    highlightWord: "vỏ chuối",
    labels: ["Chống lão hóa,", "Dưỡng ẩm,", "Lành tính."],
    description:
      "Trong vỏ chuối có chứa hoạt chất Beta-carotene giúp chống lão hóa vượt trội nhờ cơ chế kép tác động trực tiếp vào cấu trúc da. Một mặt, hỗ trợ kích thích tăng sinh Procollagen tự nhiên, giúp lấp đầy rãnh nhăn và tái tạo độ đàn hồi từ bên trong.\n\nMặt khác, hoạt chất này chủ động ức chế enzym MMP-1 – tác nhân chính làm đứt gãy các sợi collagen khi da lão hóa. Vừa thúc đẩy tái tạo, vừa ngăn chặn phân hủy collagen, giúp làn da duy trì độ căng mịn và giữ trọn vẻ trẻ trung bền vững.",
    image: "https://res.cloudinary.com/dxrmfi8xm/image/upload/v1787630181/musase/images/h8qftd3khhobjsacfnh2.jpg",
  },
  productsSection: {
    subtitle: "Musase tự hào khi các sản phẩm mà chúng tôi tạo ra 100% nguyên liệu lành tính.",
    title: "Sản phẩm của",
    products: [
      {
        id: "combo",
        title: "Bộ đôi ngăn ngừa lão hóa",
        description: "Giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối và Kem dưỡng ẩm giúp duy trì độ ẩm và làm mờ rãnh nhăn.",
        badge: "Đáng mua nhất",
        image: "/images/product2.png",
        volume: "Bộ sản phẩm",
        price: "990.000 đ",
        oldPrice: "1.080.000 đ",
        link: "/products/combo",
      },
      {
        id: "serum",
        title: "Tinh chất vỏ chuối 30ml",
        description: "Tinh chất chuyên sâu hỗ trợ chống lão hóa, mờ nếp nhăn, bảo vệ da khỏi các gốc tự do và làm đều màu da.",
        image: "/images/product3.png",
        volume: "30ml",
        price: "590.000 đ",
        link: "/products/serum",
      },
      {
        id: "cream",
        title: "Kem dưỡng vỏ chuối 50g",
        description: "Kem dưỡng ẩm chuyên sâu kết hợp tinh chất vỏ chuối và Peptide giúp duy trì độ ẩm và nuôi dưỡng làn da tươi trẻ.",
        image: "/images/product4.png",
        volume: "50g",
        price: "490.000 đ",
        link: "/products/cream",
      },
    ],
  },
  faqSection: {
    subtitle: "Câu hỏi thường gặp",
    title: "Tìm hiểu về",
    highlightWord: "làn da của bạn",
    description: "Câu trả lời rõ ràng cho những thắc mắc phổ biến nhất về sản phẩm, thành phần và cách Musase chăm sóc làn da bạn.",
    tabs: [
      {
        id: "your-skin",
        label: "Làn da của bạn",
        items: [
          {
            id: "skin-1",
            question: "Khi nào làn da bắt đầu xuất hiện dấu hiệu lão hóa?",
            answer:
              "Lão hóa da không chỉ bắt đầu khi nếp nhăn xuất hiện. Ngay từ khi hàng rào bảo vệ da suy yếu, làn da có thể trở nên khô hơn, xỉn màu, kém đàn hồi và dễ chịu tác động từ môi trường. Việc chăm sóc da sớm với các sản phẩm hỗ trợ chống oxy hóa, duy trì độ ẩm và bảo vệ hàng rào da sẽ giúp làn da khỏe mạnh hơn theo thời gian.",
          },
          {
            id: "skin-2",
            question: "Những dấu hiệu nào cho thấy làn da đang cần được bảo vệ?",
            answer:
              "Các dấu hiệu phổ biến bao gồm da thường xuyên khô ráp, thiếu sức sống, dễ mất nước, xuất hiện nếp nhăn nhỏ hoặc kém săn chắc. Đây có thể là biểu hiện cho thấy hàng rào bảo vệ tự nhiên của da đang bị ảnh hưởng và cần được chăm sóc đúng cách.",
          },
        ],
      },
      {
        id: "musase-essence",
        label: "Tinh chất vỏ chuối từ Musase",
        items: [
          {
            id: "essence-1",
            question: "Vỏ chuối có thực sự giúp trẻ hóa làn da không?",
            answer:
              "Tinh chất vỏ chuối không phải là giải pháp thay đổi làn da chỉ sau một đêm. Tuy nhiên, nhờ đặc tính chống oxy hóa và khả năng hỗ trợ duy trì độ ẩm, vỏ chuối có thể góp phần nuôi dưỡng làn da khỏe mạnh, hỗ trợ cải thiện vẻ ngoài căng mịn và tươi trẻ theo thời gian.",
          },
          {
            id: "essence-2",
            question: "Musase phù hợp với những làn da nào?",
            answer:
              "Musase phù hợp với những làn da bắt đầu quan tâm đến vấn đề chống lão hóa, đặc biệt là làn da có dấu hiệu khô ráp, thiếu sức sống, kém đàn hồi hoặc xuất hiện các dấu hiệu lão hóa. Musase nói không với hương liệu, ở đây chúng tôi hướng đến trải nghiệm chăm sóc da dịu lành và lâu dài.",
          },
          {
            id: "essence-3",
            question: "Điều gì tạo nên sự khác biệt trong công thức chống lão hóa của Musase?",
            answer:
              "Musase kết hợp giữa tinh chất vỏ chuối - nguồn nguyên liệu thiên nhiên giàu các hợp chất chống oxy hóa - cùng những hoạt chất được nghiên cứu trong chăm sóc da như Bakuchiol và Matrixyl. Sự kết hợp này giúp hỗ trợ bảo vệ làn da trước tác động của gốc tự do, duy trì độ ẩm, cải thiện độ săn chắc và hỗ trợ làm giảm sự xuất hiện của các dấu hiệu lão hóa theo thời gian.",
          },
          {
            id: "essence-4",
            question: "Nên sử dụng Serum và Kem dưỡng như thế nào để đạt hiệu quả tốt nhất?",
            answer:
              "Sau bước làm sạch và cân bằng da, sử dụng Tinh chất Vỏ chuối Musase để bổ sung dưỡng chất, sau đó khóa ẩm bằng Kem dưỡng để duy trì độ ẩm và hỗ trợ hàng rào bảo vệ da. Sử dụng đều đặn trong chu trình chăm sóc da hằng ngày để tối ưu hiệu quả chăm sóc.",
          },
        ],
      },
    ],
  },
  ctaSection: {
    title: "Bắt đầu hành trình trẻ hóa làn da cùng Musase",
    description: "Để Musase đồng hành cùng bạn trong chu trình chăm sóc da phù hợp.",
    bgImage: "/images/cta-bg.webp",
    buttonText: "Nhận tư vấn ngay",
  },
  footer: {
    brandName: "Musase",
    logoUrl: "/images/large_logo.png",
    slogan: "Tôn trọng vẻ đẹp tự nhiên là động lực cho mọi hoạt động phát triển của thương hiệu",
    companyName: "CÔNG TY TNHH CERY SKINLAB",
    businessLicense: "GCNĐKKD số 0111259343 do Phòng đăng ký kinh doanh - Sở tài chính thành phố Hà Nội cấp lần đầu ngày 22/10/2025.",
    address: "Tầng 9 Tòa Minori, Số 67A Trương Định, Phường Tương Mai, Quận Hoàng Mai, Hà Nội",
    phone: "038 324 9898",
    email: "contact@musase.vn",
    copyright: "@ 2026 Musase",
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      tiktok: "https://tiktok.com",
    },
  },
};
