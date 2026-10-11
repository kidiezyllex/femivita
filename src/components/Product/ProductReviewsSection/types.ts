import { ProductPageReview } from "@/types/productPage";

export interface ProductReviewsSectionProps {
  ratingValue?: string;
  ratingCount?: string;
  reviews?: ProductPageReview[];
}

export interface ProductReviewsSectionViewProps {
  ratingValue: string;
  ratingCount: string;
  displayedReviews: ProductPageReview[];
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}
