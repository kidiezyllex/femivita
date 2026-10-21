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
  /** Desktop only: id of the HEADER_MENUS panel this item opens instead of navigating. */
  menuId?: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Về thương hiệu", href: "/story" },
  { label: "Kiến thức", href: "/knowledge" },
  { label: "Nhà phân phối", href: "/distributors", menuId: "distributors" },
];


export interface HeaderMenu {
  id: string;
  /** Accessible name of the menu panel. */
  label: string;
  links: NavLinkItem[];
  image: { src: string; alt: string };
}

// Desktop menus that unfold inside the header card (Figma "Header" frames with the panel open).
export const HEADER_MENUS: Record<string, HeaderMenu> = {
  products: {
    id: "products",
    label: "Sản phẩm",
    links: [
      { label: "Tất cả sản phẩm", href: "/products" },
      { label: "Gel tăng cảm hứng Gel venus", href: "/products/gel-venus-y-passion" },
      { label: "Bọt vệ sinh Zone Y Fresh", href: "/products/zone-fresh-mousse" },
    ],
    image: {
      src: "/images/header/header-products.webp",
      alt: "Bọt vệ sinh Zone Y Fresh và Gel Venus Y Passion",
    },
  },
  distributors: {
    id: "distributors",
    label: "Nhà phân phối",
    links: [
      { label: "Nhà phân phối chính thức Femivita", href: "/distributors" },
      { label: "Trở thành nhà phân phối", href: "/distributors#distributor-form" },
    ],
    image: {
      src: "/images/header/header-distributors.webp",
      alt: "Trụ sở Enbioscience cùng các chứng nhận thuần chay, GMP Hàn Quốc và FDA Hoa Kỳ",
    },
  },
};

export const HEADER_CTA: NavLinkItem = { label: "Mua chính hãng", href: "/order" };

export const DROPDOWN_PRODUCTS: DropdownProductItem[] = [
  {
    id: "combo",
    href: "/products/combo",
    image: "/images/product2.png",
    title: "Bộ đôi ngăn ngừa lão hóa",
    description:
      "Giải pháp chăm sóc da toàn diện giúp duy trì độ ẩm, hỗ trợ làn da trẻ hóa theo thời gian.",
    price: "990.000 đ",
    oldPrice: "1.080.000 đ",
    badge: "Đáng mua nhất",
  },
  {
    id: "serum",
    href: "/products/serum",
    image: "/images/product3.png",
    title: "Tinh chất vỏ chuối 30ml",
    description:
      "Tinh chất chuyên sâu hỗ trợ chống lão hóa, mờ nếp nhăn, bảo vệ da khỏi các gốc tự do gây hại và làm đều màu da.",
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
