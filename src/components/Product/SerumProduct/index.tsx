"use client";

import { ProductHeroSection } from "@/components/Product/ProductHeroSection";
import { ProductReviewsSection } from "@/components/Product/ProductReviewsSection";
import { ProductUsageUpsellBanner } from "@/components/Product/ProductUsageUpsellBanner";
import { DEFAULT_SERUM_PRODUCT_PAGE_DATA } from "@/constants/defaultProductPageData";
import { useOptionalProductPage } from "@/context/ProductPageContext";

export const SERUM_PRODUCT_DATA = DEFAULT_SERUM_PRODUCT_PAGE_DATA;

export const SerumProduct = () => {
  const productPage = useOptionalProductPage();
  const data = productPage?.productPageData || DEFAULT_SERUM_PRODUCT_PAGE_DATA;
  const usageBanner =
    data.usageInstructionBanner || DEFAULT_SERUM_PRODUCT_PAGE_DATA.usageInstructionBanner!;
  const upsellBanner = data.upsellBanner || DEFAULT_SERUM_PRODUCT_PAGE_DATA.upsellBanner!;

  return (
    <>
      {/* Product Hero Section */}
      <ProductHeroSection data={{ ...data, productSlug: "serum" }} />

      {/* Usage Instructions Banner + Combo Upsell Banner */}
      <ProductUsageUpsellBanner
        usageBanner={usageBanner}
        upsellBanner={upsellBanner}
        usageImageAlt="Cách sử dụng Tinh chất vỏ chuối"
      />

      {/* Reviews Section */}
      <ProductReviewsSection
        ratingValue={data.ratingValue}
        ratingCount={data.ratingCount}
        reviews={data.reviews}
      />
    </>
  );
};
export default SerumProduct;
