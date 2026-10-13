export interface ProductFeatureData {
  id: string;
  name: string;
  size: string;
  /** Packshot shown in the text panel. */
  image: string;
  imageAlt: string;
  /** Lifestyle photo on the other half of the row. */
  photo: string;
  photoAlt: string;
  href: string;
}

export interface ProductsPageData {
  heroLineOneStart: string;
  heroLineOneHighlight: string;
  heroLineTwo: string;
  ctaLabel: string;
  features: ProductFeatureData[];
}

// Detail pages (Figma frame "Sản phẩm 1") do not exist yet, so the links below 404 for now.
export const DEFAULT_PRODUCTS_PAGE_DATA: ProductsPageData = {
  heroLineOneStart: "Yêu chiều ",
  heroLineOneHighlight: "“cô bé”",
  heroLineTwo: "Trọn vẹn mọi cuộc yêu",
  ctaLabel: "Xem chi tiết sản phẩm",
  features: [
    {
      id: "gel-venus-y-passion",
      name: "Gel Venus Y Passion",
      size: "20ml | 0.67FL.OZ",
      image: "/images/products/gel-venus-y-passion.webp",
      imageAlt: "Gel Venus Y Passion và hộp sản phẩm",
      photo: "/images/products/gel-venus-in-hand.webp",
      photoAlt: "Bàn tay thoa sản phẩm Femivita bên cạnh chai bọt trên nền lụa tím nhạt",
      href: "/products/gel-venus-y-passion",
    },
    {
      id: "zone-fresh-mousse",
      name: "Bọt vệ sinh lợi khuẩn Probiotics cho vùng Y",
      size: "20ml | 0.67FL.OZ",
      image: "/images/products/zone-fresh-mousse.webp",
      imageAlt: "Bọt vệ sinh lợi khuẩn Probiotics Zone Fresh Mousse và hộp sản phẩm",
      photo: "/images/products/zone-fresh-mousse-in-hand.webp",
      photoAlt: "Người phụ nữ cầm chai bọt vệ sinh Zone Fresh Mousse trong phòng tắm sáng",
      href: "/products/zone-fresh-mousse",
    },
  ],
};
