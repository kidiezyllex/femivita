export interface DropdownProductItem {
  id: string;
  href: string;
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  badge?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Về thương hiệu", href: "/story" },
  { label: "Kiến thức", href: "/knowledge" },
  { label: "Nhà phân phối", href: "/distributors" },
];

export const HEADER_CTA: NavLinkItem = { label: "Mua chính hãng", href: "/order" };

export const DROPDOWN_PRODUCTS: DropdownProductItem[] = [
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
];
