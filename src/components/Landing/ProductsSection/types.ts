import { ProductCard, ProductsSectionData } from "@/types/landing";

export interface ProductsSectionProps {
  data?: ProductsSectionData;
}

export const DEFAULT_FEATURED_PRODUCT: ProductCard = {
  id: "combo",
  title: "Bộ đôi ngăn ngừa lão hóa",
  price: "990.000 đ",
  oldPrice: "1.080.000 đ",
  image: "/images/product2.png",
  badge: "Đáng mua nhất",
  link: "/products/combo",
  description: "Bộ đôi tinh chất và kem dưỡng chiết xuất từ vỏ chuối",
  volume: "Combo",
};

export const DEFAULT_SMALL_PRODUCTS: ProductCard[] = [
  {
    id: "serum",
    title: "Tinh chất vỏ chuối",
    price: "490.000 đ",
    oldPrice: "540.000 đ",
    image: "/images/product1.png",
    link: "/products/serum",
    description: "Tinh chất phục hồi và trẻ hóa chuyên sâu",
    volume: "30ml",
  },
  {
    id: "cream",
    title: "Kem dưỡng vỏ chuối",
    price: "550.000 đ",
    oldPrice: "600.000 đ",
    image: "/images/product3.png",
    link: "/products/cream",
    description: "Kem dưỡng ẩm và làm sáng da",
    volume: "50g",
  },
];

export const DEFAULT_PRODUCTS_SECTION_DATA: ProductsSectionData = {
  subtitle:
    "Musase tự hào khi các sản phẩm mà chúng tôi tạo ra 100% nguyên liệu lành tính.",
  title: "Sản phẩm của\nMusase",
  products: [DEFAULT_FEATURED_PRODUCT, ...DEFAULT_SMALL_PRODUCTS],
};
