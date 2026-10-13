export interface BrandCertificate {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export interface BrandCertificatesData {
  eyebrow: string;
  headlineHighlight: string;
  headlineRest: string;
  prevLabel: string;
  nextLabel: string;
  certificates: BrandCertificate[];
}

export interface BrandCertificatesProps {
  data: BrandCertificatesData;
}

// Figma repeats these four certificates nine times (A B C D A B C D A) so the strip looks endless.
// Titles and images are copied as designed, so some labels do not match the scan shown (e.g. the "FDA" cards).
const BASE_CERTIFICATES: Omit<BrandCertificate, "id">[] = [
  {
    title: "Tiêu chuẩn FDA",
    subtitle: "(Cục quản lý dược Hoa Kỳ)",
    image: "/images/brand/cert-iso.webp",
    imageAlt: "Giấy chứng nhận International Industrial Certification của ENBIOSCIENCE",
  },
  {
    title: "Chứng nhận Thuần Chay",
    subtitle: "(Vegan)",
    image: "/images/brand/cert-vegan.webp",
    imageAlt: "Vegan Certificate của ENBIOSCIENCE",
  },
  {
    title: "Tiêu chuẩn FDA",
    subtitle: "(Cục quản lý dược Hoa Kỳ)",
    image: "/images/brand/cert-registration.webp",
    imageAlt: "Certificate of Registration của ENBIOSCIENCE",
  },
  {
    title: "Chứng nhận GMP",
    subtitle: "(Hàn Quốc)",
    image: "/images/brand/cert-gsc.webp",
    imageAlt: "Chứng nhận ISO 22716 của ENBIOSCIENCE",
  },
];

export const CERTIFICATE_COUNT = 9;

export const DEFAULT_BRAND_CERTIFICATES_DATA: BrandCertificatesData = {
  eyebrow: "Chứng nhận của chúng tôi",
  headlineHighlight: "Thương hiệu tin cậy cho tất cả phụ nữ",
  headlineRest: " trên hành trình chăm sóc bản thân.",
  prevLabel: "Chứng nhận trước",
  nextLabel: "Chứng nhận tiếp theo",
  certificates: Array.from({ length: CERTIFICATE_COUNT }, (_, i) => ({
    ...BASE_CERTIFICATES[i % BASE_CERTIFICATES.length],
    id: `certificate-${i + 1}`,
  })),
};
