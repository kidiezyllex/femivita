export interface DistributorRichSegment {
  text: string;
  /** Segments with a link are highlighted in the brand colour. */
  href?: string;
}

export interface DistributorSelectOption {
  value: string;
  label: string;
}

export interface DistributorFormLabels {
  typeLabel: string;
  typePlaceholder: string;
  typeOptions: DistributorSelectOption[];
  nameLabel: string;
  namePlaceholder: string;
  businessLabel: string;
  businessPlaceholder: string;
  phoneLabel: string;
  phonePrefix: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  optionalNote: string;
  privacyConsent: DistributorRichSegment[];
  smsConsent: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
  typeRequiredError: string;
  emailInvalidError: string;
  phoneInvalidError: string;
  consentRequiredError: string;
}

export interface DistributorsData {
  eyebrow: string;
  headlineStart: string;
  headlineHighlight: string;
  paragraphs: string[];
  form: DistributorFormLabels;
}

export interface DistributorsProps {
  data?: DistributorsData;
}

export const DEFAULT_DISTRIBUTORS_DATA: DistributorsData = {
  eyebrow: "Đồng hành cùng Femivita",
  headlineStart: "Trở thành",
  headlineHighlight: "Nhà phân phối",
  paragraphs: [
    "Thương hiệu đang mở rộng hệ thống Đại lý & Đối tác phân phối trên toàn quốc. Khi trở thành nhà phân phối của Femivita, bạn sẽ nhận chiết khấu hấp dẫn, doanh số cao, cùng những chính sách tốt nhất, đồng thời được hỗ trợ trọn bộ tư liệu truyền thông, đào tạo kiến thức chuyên sâu và kịch bản tư vấn.",
    "Hãy cùng chúng tôi lan tỏa giải pháp chăm sóc tiên tiến, nâng tầm sức khỏe thân mật và mang lại sự tự tin trọn vẹn cho hàng triệu phụ nữ Việt!",
    "Bạn có thể gọi cho chúng tôi theo số 0357940318 hoặc điền vào form dưới đây.",
  ],
  form: {
    typeLabel: "Bạn là?",
    typePlaceholder: "Chọn một tùy chọn",
    // Figma only shows the placeholder; these two options come from the intro copy ("Đại lý & Đối tác phân phối").
    typeOptions: [
      { value: "Đại lý", label: "Đại lý" },
      { value: "Đối tác phân phối", label: "Đối tác phân phối" },
    ],
    nameLabel: "Tên của bạn",
    namePlaceholder: "Điền tên của bạn",
    businessLabel: "Doanh nghiệp của bạn",
    businessPlaceholder: "Điền tên Doanh nghiệp của bạn",
    // Figma labels this field "Thông tin thêm" with a US "+1" prefix (template leftover); it is the phone number.
    phoneLabel: "Số điện thoại",
    phonePrefix: "+84",
    phonePlaceholder: "0912 345 678",
    emailLabel: "Email",
    emailPlaceholder: "name@email.com",
    messageLabel: "Thông tin thêm",
    messagePlaceholder: "Bạn muốn nói gì với Femivita?",
    optionalNote: "(không bắt buộc)",
    // Policy pages do not exist yet, so these links 404 for now.
    privacyConsent: [
      { text: "Tôi đã đọc và đồng ý với " },
      { text: "Chính sách quyền riêng tư", href: "/privacy" },
      { text: " và " },
      { text: "Điều khoản và Điều kiện", href: "/terms" },
      { text: " của thương hiệu Femivita." },
    ],
    smsConsent:
      "Tôi đồng ý nhận cuộc gọi và tin nhắn văn bản. Tôi hiểu rằng sự đồng ý của mình không phải là điều kiện để mua hàng hoặc sử dụng các dịch vụ của Femivita. Cước phí tin nhắn và dữ liệu có thể được áp dụng; tần suất tin nhắn có thể thay đổi. Để hủy nhận tin nhắn văn bản, hãy nhắn tin STOP tới số 0914 14 2464. Để được trợ giúp, hãy nhắn tin HELP tới số 0914 14 2464.",
    submitLabel: "Gửi thông tin",
    submittingLabel: "Đang gửi...",
    successMessage: "Cảm ơn bạn! Femivita sẽ liên hệ với bạn sớm nhất.",
    errorMessage: "Không gửi được thông tin. Vui lòng thử lại sau.",
    typeRequiredError: "Vui lòng chọn một tùy chọn.",
    emailInvalidError: "Vui lòng nhập email hợp lệ.",
    phoneInvalidError: "Số điện thoại không hợp lệ.",
    consentRequiredError: "Vui lòng đồng ý với chính sách để tiếp tục.",
  },
};

export interface OfficialChannel {
  id: string;
  name: string;
  image: { src: string; alt: string };
  /** "direct": Femivita's own pages and shop. "distributor": pages run by official distributors. Used by the header "Mua chính hãng" menu. */
  group: "direct" | "distributor";
  /** Page the card opens; cards without one are not links. */
  href?: string;
}

export interface OfficialChannelsData {
  eyebrow: string;
  headlineStart: string;
  headlineHighlight: string;
  paragraphs: string[];
  channels: OfficialChannel[];
  /** Cards shown before "Xem thêm" is pressed. */
  initialCount: number;
  moreLabel: string;
}

export interface OfficialChannelsProps {
  data?: OfficialChannelsData;
}

// The 9 channels listed on https://www.femivita.vn/kenhbanhang (screenshots saved in public/images/distributors/channels).
export const DEFAULT_OFFICIAL_CHANNELS_DATA: OfficialChannelsData = {
  eyebrow: "Nhà phân phối chính thức Femivita",
  headlineStart: "Kênh bán hàng",
  headlineHighlight: "chính thức của Femivita",
  paragraphs: [
    "Mọi các kênh khác không thuộc danh sách được nêu dưới đây đều là giả mạo, hàng giả hàng nhái.",
    "Chúng tôi liên tục cập nhật các kênh bán mới nhất, liên hệ với chúng tôi để được hỗ trợ.",
  ],
  channels: [
    {
      id: "femivita-hanquoc",
      group: "direct",
      name: "Fanpage: Femivita- Gel cảm hứng số 1 Hàn Quốc",
      image: { src: "/images/distributors/channels/ch1.webp", alt: "Trang Facebook: Femivita- Gel cảm hứng số 1 Hàn Quốc" },
      href: "https://www.facebook.com/femivita.hanquoc/",
    },
    {
      id: "gia-dinh-yeu-thuong",
      group: "distributor",
      name: "Fanpage: Gia Đình Yêu Thương",
      image: { src: "/images/distributors/channels/ch2.webp", alt: "Trang Facebook: Gia Đình Yêu Thương" },
      href: "https://www.facebook.com/giadinhyeuthuon/",
    },
    {
      id: "hoi-chi-em-u40-50-60",
      group: "distributor",
      name: "Hội chị em U40-50-60",
      image: { src: "/images/distributors/channels/ch3.webp", alt: "Trang Facebook: Hội chị em U40-50-60" },
      href: "https://www.facebook.com/hoichiemGenS/",
    },
    {
      id: "hoi-chi-em-tham-kin",
      group: "distributor",
      name: "Hội chị em thầm kín",
      image: { src: "/images/distributors/channels/ch4.webp", alt: "Trang Facebook: Hội chị em thầm kín" },
      href: "https://www.facebook.com/hoichiemthamkinGenS/",
    },
    {
      id: "tam-su-dan-ba",
      group: "distributor",
      name: "Fanpage: Tâm sự đàn bà",
      image: { src: "/images/distributors/channels/ch5.webp", alt: "Trang Facebook: Tâm sự đàn bà" },
      href: "https://www.facebook.com/TamsuDanBaGenS/",
    },
    {
      id: "femivita-korea",
      group: "direct",
      name: "Fanpage: Femivita-Gel đánh thức khoái cảm Hàn Quốc",
      image: { src: "/images/distributors/channels/ch6.webp", alt: "Trang Facebook: Femivita-Gel đánh thức khoái cảm Hàn Quốc" },
      href: "https://www.facebook.com/femivita.korea/",
    },
    {
      id: "shopee-femivita-vn",
      group: "direct",
      name: "Shopee: Femivita Việt Nam",
      image: { src: "/images/distributors/channels/ch7.webp", alt: "Trang Shopee: Femivita Việt Nam" },
      href: "https://shopee.vn/femivitavn",
    },
    {
      id: "gel-cham-soc-co-be",
      group: "direct",
      name: "Fanpage: Gel chăm sóc cô bé số 1 Hàn Quốc",
      image: { src: "/images/distributors/channels/ch8.webp", alt: "Trang Facebook: Gel chăm sóc cô bé số 1 Hàn Quốc" },
      href: "https://www.facebook.com/venus.femivita/",
    },
    {
      id: "femivita-vietnam",
      group: "direct",
      name: "Fanpage: Femivita Việt Nam",
      image: { src: "/images/distributors/channels/ch9.webp", alt: "Trang Facebook: Femivita Việt Nam" },
      href: "https://www.facebook.com/femivitavietnam/",
    },
  ],
  initialCount: 6,
  moreLabel: "Xem thêm",
};
