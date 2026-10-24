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
  /** Page the card opens; cards without one are not links. */
  href?: string;
}

export interface OfficialChannelsData {
  eyebrow: string;
  headlineStart: string;
  headlineHighlight: string;
  paragraphs: string[];
  channels: OfficialChannel[];
  moreLabel: string;
  moreHref: string;
}

export interface OfficialChannelsProps {
  data?: OfficialChannelsData;
}

// Figma repeats one placeholder fanpage six times; swap in the real channels (and their links) here.
const FANPAGE_IMAGE = {
  src: "/images/header/header-buy-distributor.webp",
  alt: "Trang Facebook Gia Đình Yêu Thương, nhà phân phối chính thức của Femivita",
};

export const DEFAULT_OFFICIAL_CHANNELS_DATA: OfficialChannelsData = {
  eyebrow: "Nhà phân phối chính thức Femivita",
  headlineStart: "Kênh bán hàng",
  headlineHighlight: "chính thức của Femivita",
  paragraphs: [
    "Mọi các kênh khác không thuộc danh sách được nêu dưới đây đều là giả mạo, hàng giả hàng nhái.",
    "Chúng tôi liên tục cập nhật các kênh bán mới nhất, liên hệ với chúng tôi để được hỗ trợ.",
  ],
  channels: Array.from({ length: 6 }, (_, index) => ({
    id: `fanpage-${index + 1}`,
    name: "Fanpage Gia đình yêu thương",
    image: FANPAGE_IMAGE,
  })),
  moreLabel: "Xem thêm",
  moreHref: "https://facebook.com",
};
