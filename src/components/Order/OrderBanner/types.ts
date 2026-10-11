export interface OrderBannerProps {
  bannerHeightClass?: string;
}

export interface OrderProductOption {
  slug: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
}

// Fallback khi chưa tải được productsSection từ /api/landing-page
export const DEFAULT_ORDER_PRODUCT_OPTIONS: OrderProductOption[] = [
  {
    slug: "combo",
    name: "Combo ngừa lão hóa Vỏ Chuối (Tinh chất + Kem dưỡng)",
    price: "990,000 đ",
    originalPrice: "1,080,000 đ",
    badge: "Đáng mua nhất",
  },
  {
    slug: "serum",
    name: "Tinh chất Vỏ Chuối 30ml",
    price: "590,000 đ",
  },
  {
    slug: "cream",
    name: "Kem dưỡng Vỏ Chuối 50g",
    price: "490,000 đ",
  },
];
