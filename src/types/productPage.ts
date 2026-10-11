export interface ProductPagePricing {
  oldPrice: string;
  price: string;
  discountLabel?: string;
}

export interface ProductPageBundleItem {
  image: string;
  title: string;
  price: string;
  link: string;
}

export interface ProductPageIngredient {
  name: string;
  description: string;
}

export interface ProductPageIngredientDetail {
  title: string;
  content: string;
}

export interface ProductPageUsageStep {
  step: string;
  title: string;
  description: string;
  texture: string;
  image: string;
  imageSide: "left" | "right";
}

export interface ProductPageReview {
  name: string;
  stars: number;
  content: string;
}

export interface ProductPageUsageInfoItem {
  label: string;
  value: string;
}

export interface ProductPageUsageInstructionBanner {
  title: string;
  description: string;
  image: string;
  usageInfo: ProductPageUsageInfoItem[];
}

export interface ProductPageUpsellBanner {
  badge?: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export interface ProductPageData {
  slug: string;
  title: string;
  description: string;
  badge?: string;
  tags: string[];
  pricing: ProductPagePricing;
  galleryImages: string[];
  bundleItems: ProductPageBundleItem[];
  suitability: string;
  uses: string[];
  keyIngredients: ProductPageIngredient[];
  ingredientsDetail: ProductPageIngredientDetail[];
  usageSteps: ProductPageUsageStep[];
  reviews: ProductPageReview[];
  ratingValue: string;
  ratingCount: string;
  usageInstructionBanner?: ProductPageUsageInstructionBanner;
  upsellBanner?: ProductPageUpsellBanner;
}
