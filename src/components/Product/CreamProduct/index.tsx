"use client";

import { ProductHeroSection } from "@/components/Product/ProductHeroSection";
import { ProductReviewsSection } from "@/components/Product/ProductReviewsSection";
import { ProductUsageUpsellBanner } from "@/components/Product/ProductUsageUpsellBanner";
import { DEFAULT_CREAM_PRODUCT_PAGE_DATA } from "@/constants/defaultProductPageData";
import { useOptionalProductPage } from "@/context/ProductPageContext";

export const CREAM_PRODUCT_DATA = DEFAULT_CREAM_PRODUCT_PAGE_DATA;

export const CreamProduct = () => {
  const productPage = useOptionalProductPage();
  const data = productPage?.productPageData || DEFAULT_CREAM_PRODUCT_PAGE_DATA;
  const usageBanner =
    data.usageInstructionBanner || DEFAULT_CREAM_PRODUCT_PAGE_DATA.usageInstructionBanner!;
  const upsellBanner = data.upsellBanner || DEFAULT_CREAM_PRODUCT_PAGE_DATA.upsellBanner!;

  return (
    <>
      {/* Product Hero Section */}
      <ProductHeroSection data={{ ...data, productSlug: "cream" }} />

      {/* Usage Instructions Banner + Combo Upsell Banner */}
      <ProductUsageUpsellBanner
        usageBanner={usageBanner}
        upsellBanner={upsellBanner}
        usageImageAlt="Cách sử dụng Kem dưỡng vỏ chuối"
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
export default CreamProduct;
