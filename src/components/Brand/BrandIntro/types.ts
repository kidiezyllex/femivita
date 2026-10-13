export interface BrandIntroSlide {
  id: string;
  title: string;
  lead?: string;
  description: string;
}

export interface BrandIntroData {
  eyebrow: string;
  headline: string;
  textureImage: string;
  pictureImage: string;
  pictureAlt: string;
  prevLabel: string;
  nextLabel: string;
  slides: BrandIntroSlide[];
}

export interface BrandIntroProps {
  data: BrandIntroData;
}

// Figma only gives the copy of slide 01 (the counter reads "01 / 04"); slides 02-04 are placeholders until the copy is supplied.
const PENDING_DESCRIPTION = "Nội dung đang được cập nhật.";

export const DEFAULT_BRAND_INTRO_DATA: BrandIntroData = {
  eyebrow: "Nơi thầm kín của những câu chuyện chưa kể",
  headline:
    "Femivita là sản phẩm thuộc tập đoàn ENBIOSCIENCE CO., LTD - Trung tâm nghiên cứu và phát triển sản phẩm mỹ phẩm Hàn Quốc.",
  textureImage: "/images/brand/texture.webp",
  pictureImage: "/images/brand/lab.webp",
  pictureAlt: "Nhà nghiên cứu ENBIOSCIENCE làm việc trong phòng thí nghiệm",
  prevLabel: "Slide trước",
  nextLabel: "Slide tiếp theo",
  slides: [
    {
      id: "recovery-technology",
      title: "Công nghệ phục hồi đột phá",
      lead: "Nghiên cứu bởi tập đoàn y sinh hàng đầu Hàn Quốc ENBIOSCIENCE",
      description:
        'Femivita là thương hiệu tiên phong tại Việt Nam ứng dụng công nghệ đột phá Exosome kết hợp cùng triết lý "Pro-aging" vào chu trình chăm sóc vùng kín. Được nghiên cứu và sản xuất bởi Tập đoàn Dược mỹ phẩm Enbioscience (Hàn Quốc) với hơn 25 năm kinh nghiệm, Femivita ra đời nhằm mang lại giải pháp phục hồi tận gốc, đánh thức cơ chế tự cấp ẩm sinh lý và tôn vinh vẻ đẹp kiêu hãnh, tự tin vốn có của người phụ nữ.',
    },
    { id: "slide-2", title: "Đang cập nhật", description: PENDING_DESCRIPTION },
    { id: "slide-3", title: "Đang cập nhật", description: PENDING_DESCRIPTION },
    { id: "slide-4", title: "Đang cập nhật", description: PENDING_DESCRIPTION },
  ],
};
