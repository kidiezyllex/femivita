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

// The four certificates are listed once here; the carousel repeats them (LOOP_REPEAT in index.tsx) so Swiper's
// `loop` mode has enough slides to scroll endlessly. `loop` is used without `freeMode`, because the two combined
// made the strip keep drifting by itself after a drag.
const BASE_CERTIFICATES: Omit<BrandCertificate, "id">[] = [
  {
    title: "Tiêu chuẩn FDA",
    subtitle: "(Cục quản lý dược Hoa Kỳ)",
    image: "/images/brand/cert-iso.webp",
    imageAlt: "Giấy chứng nhận International Industrial Certification của ENBIOSCIENCE",
  },
  {
    title: "Chứng nhận Vegan",
    subtitle: "(Thuần chay)",
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

export const CERTIFICATE_COUNT = BASE_CERTIFICATES.length;

export const DEFAULT_BRAND_CERTIFICATES_DATA: BrandCertificatesData = {
  eyebrow: "Chứng nhận của chúng tôi",
  headlineHighlight: "Thương hiệu tin cậy cho tất cả phụ nữ",
  headlineRest: " trên hành trình chăm sóc bản thân.",
  prevLabel: "Chứng nhận trước",
  nextLabel: "Chứng nhận tiếp theo",
  certificates: BASE_CERTIFICATES.map((cert, i) => ({
    ...cert,
    id: `certificate-${i + 1}`,
  })),
};
