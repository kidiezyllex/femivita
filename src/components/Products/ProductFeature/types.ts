import { ProductFeatureData } from "../types";

export interface ProductFeatureProps {
  product: ProductFeatureData;
  ctaLabel: string;
  /** Puts the photo before the text on tablet and desktop (alternating rows). */
  reverse?: boolean;
}
