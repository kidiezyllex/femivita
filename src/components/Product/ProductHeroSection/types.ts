export interface ProductHeroSectionData {
  title: string;
  description: string;
  badge?: string;
  tags: string[];
  pricing: {
    oldPrice?: string;
    price: string;
    discountLabel?: string;
  };
  galleryImages: string[];
  bundleItems?: {
    image: string;
    title: string;
    price: string;
    link: string;
  }[];
  suitability: string;
  uses: string[];
  keyIngredients: {
    name: string;
    description?: string;
  }[];
  ingredientsDetail: {
    title: string;
    content: string;
  }[];
  ctaButtonText?: string;
  onCtaClick?: () => void;
  productSlug?: string;
}

export interface ProductHeroSectionProps {
  data: ProductHeroSectionData;
  showAddToCart?: boolean;
}
