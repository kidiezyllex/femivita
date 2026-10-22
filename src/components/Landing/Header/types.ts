import { DEFAULT_FOOTER_CONTENT } from "../Footer/types";

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
  { label: "Kiến thức", href: "/knowledge", menuId: "knowledge" },
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
  knowledge: {
    id: "knowledge",
    label: "Kiến thức",
    links: [
      { label: "Tất cả", href: "/knowledge" },
      { label: "Sức khỏe sinh sản", href: "/knowledge?category=reproductive-health" },
      { label: "Sức khỏe tình dục", href: "/knowledge?category=sexual-health" },
      { label: "Sức khỏe phụ khoa", href: "/knowledge?category=gynecological-health" },
    ],
    image: {
      src: "/images/header/header-knowledge.webp",
      alt: "Bọt vệ sinh Zone Y Fresh và Gel Venus Y Passion bên bình thí nghiệm",
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

export interface BuyMenuImage {
  src: string;
  alt: string;
  /** Natural size; when set the picture is placed with `className` (an oversized crop) instead of filling the frame. */
  width?: number;
  height?: number;
  className?: string;
  /** Draws the thin border Figma gives the screenshot. */
  bordered?: boolean;
}

export interface BuyMenuChild {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  /** Square icon tile in front of the label. */
  icon?: { src: string; fullColor?: boolean };
}

export interface BuyMenuItem {
  id: string;
  label: string;
  /** Items without children are plain links. */
  href?: string;
  children?: BuyMenuChild[];
  /** Replaces the default picture while this item is active. */
  image?: BuyMenuImage;
}

/** "Mua chính hãng" panel: a list on the left, the active item's sub-list in the middle and a picture on the right. */
export interface HeaderBuyMenu {
  id: "buy";
  label: string;
  items: BuyMenuItem[];
  image: BuyMenuImage;
}

const FOOTER_SOCIALS = Object.fromEntries(DEFAULT_FOOTER_CONTENT.socialLinks.map((social) => [social.id, social]));

export const BUY_MENU: HeaderBuyMenu = {
  id: "buy",
  label: "Mua chính hãng",
  image: { src: "/images/header/header-knowledge.webp", alt: "Bọt vệ sinh Zone Y Fresh và Gel Venus Y Passion bên bình thí nghiệm" },
  items: [
    {
      id: "channels",
      label: "Kênh trực tiếp",
      children: [
        {
          id: "facebook",
          label: "Femivita Hàn Quốc - Dứt điểm khô hạn - Mất cảm hứng",
          href: FOOTER_SOCIALS.facebook.href,
          external: true,
          icon: { src: FOOTER_SOCIALS.facebook.icon },
        },
        {
          id: "shopee",
          label: "Femivita Shopee Shop",
          href: FOOTER_SOCIALS.shopee.href,
          external: true,
          icon: { src: FOOTER_SOCIALS.shopee.icon, fullColor: true },
        },
        {
          id: "zalo",
          label: "Liên hệ: 0838 09 8866",
          href: FOOTER_SOCIALS.zalo.href,
          external: true,
          icon: { src: FOOTER_SOCIALS.zalo.icon, fullColor: true },
        },
      ],
    },
    {
      id: "distributors",
      label: "Nhà phân phối chính thức Femivita",
      children: DEFAULT_FOOTER_CONTENT.distributors.map((name, index) => ({
        id: `distributor-${index + 1}`,
        label: name,
        href: "/distributors",
      })),
      // Figma shows the distributor's Facebook page here.
      image: {
        src: "/images/header/header-buy-distributor.webp",
        alt: "Trang Facebook Gia Đình Yêu Thương, nhà phân phối chính thức của Femivita",
        width: 662,
        height: 376,
        // Crop of the Figma frame, recomputed for the square frame (width : height stays the 1.76 of the screenshot).
        className: "absolute left-[-24.3%] top-[-5.81%] h-[111.61%] w-[196.4%] max-w-none",
        bordered: true,
      },
    },
    { id: "all-distributors", label: "Xem toàn bộ Nhà phân phối", href: "/distributors" },
  ],
};
