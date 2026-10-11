export interface ProductItem {
  image: string;
  thumbnail: string;
  subtitle: string;
  title: string;
  description: string;
  link?: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    image: "/images/hero/hero1.webp",
    thumbnail: "/images/hero/hero1.webp",
    subtitle: "Trẻ hóa làn da từ Vỏ chuối",
    title: "Bộ đôi ngăn ngừa lão hóa",
    description:
      "Bộ đôi ngăn ngừa lão hóa là giải pháp chăm sóc da toàn diện, kết hợp giữa Tinh chất vỏ chuối chuyên sâu và Kem dưỡng vỏ chuối giúp duy trì độ ẩm, kích thích sản sinh collagen và làm mờ các rãnh nhăn, hỗ trợ làn da trẻ hóa theo thời gian.",
    link: "/products/combo",
  },
  {
    image: "/images/hero/hero2.webp",
    thumbnail: "/images/hero/hero2.webp",
    subtitle: "Trẻ hóa làn da từ Vỏ chuối",
    title: "Tinh chất vỏ chuối 30ml",
    description:
      "Tinh chất vỏ chuối Musase là giải pháp chống lão hóa toàn diện dành cho làn da. Sự kết hợp giữa Chiết xuất Vỏ Chuối, Bakuchiol và hệ Peptides Matrixyl 3000 giúp hỗ trợ chống lão hóa, mờ nếp nhăn, bảo vệ da khỏi các gốc tự do gây hại và làm đều màu da.",
    link: "/products/serum",
  },
  {
    image: "/images/hero/hero3.webp",
    thumbnail: "/images/hero/hero3.webp",
    subtitle: "Trẻ hóa làn da từ Vỏ chuối",
    title: "Kem dưỡng vỏ chuối 50g",
    description:
      "Kem dưỡng ẩm Musase kết hợp tinh chất vỏ chuối, Bakuchiol và Peptide Matrixyl 3000, giúp duy trì độ ẩm, cải thiện độ sáng, hỗ trợ phục hồi và nuôi dưỡng làn da tươi trẻ theo thời gian.",
    link: "/products/cream",
  },
];

export interface HeroChildProps {
  products: ProductItem[];
  activeIndex: number;
  onSelectProduct: (index: number) => void;
}
