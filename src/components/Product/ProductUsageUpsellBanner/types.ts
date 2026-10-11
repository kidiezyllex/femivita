import {
  ProductPageUpsellBanner,
  ProductPageUsageInstructionBanner,
} from "@/types/productPage";

export interface ProductUsageUpsellBannerProps {
  usageBanner: ProductPageUsageInstructionBanner;
  upsellBanner: ProductPageUpsellBanner;
  usageImageAlt: string;
}
