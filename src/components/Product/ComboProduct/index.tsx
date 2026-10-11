"use client";

import { ProductHeroSection } from "@/components/Product/ProductHeroSection";
import { ProductReviewsSection } from "@/components/Product/ProductReviewsSection";
import { UsageStepsSection } from "@/components/Product/UsageStepsSection";
import { useOptionalProductPage } from "@/context/ProductPageContext";
import { DEFAULT_COMBO_PRODUCT_PAGE_DATA } from "@/constants/defaultProductPageData";

export const ComboProduct = () => {
  const productPage = useOptionalProductPage();
  const data = productPage?.productPageData || DEFAULT_COMBO_PRODUCT_PAGE_DATA;

  return (
    <>
      {/* Product Hero Section */}
      <ProductHeroSection data={{ ...data, productSlug: "combo" }} />

      {/* Usage Steps Banners */}
      <UsageStepsSection usageSteps={data.usageSteps} />

      {/* Reviews Section */}
      <ProductReviewsSection
        ratingValue={data.ratingValue}
        ratingCount={data.ratingCount}
        reviews={data.reviews}
      />
    </>
  );
};
export default ComboProduct;
