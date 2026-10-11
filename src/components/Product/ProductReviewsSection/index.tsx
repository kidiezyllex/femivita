"use client";

import React, { useState } from "react";
import { ProductPageReview } from "@/types/productPage";
import { DesktopProductReviewsSection } from "./DesktopProductReviewsSection";
import { TabletProductReviewsSection } from "./TabletProductReviewsSection";
import { MobileProductReviewsSection } from "./MobileProductReviewsSection";
import { ProductReviewsSectionProps } from "./types";

export * from "./DesktopProductReviewsSection";
export * from "./TabletProductReviewsSection";
export * from "./MobileProductReviewsSection";
export * from "./types";

const DEFAULT_REVIEWS: ProductPageReview[] = [
  {
    name: "Minh Anh",
    stars: 4,
    content:
      "Serum thấm nhanh, còn kem dưỡng giúp da giữ được độ ẩm cả ngày nên sáng hôm sau da mềm và căng hơn. Sau một thời gian sử dụng, mình thấy da đều màu và trông có sức sống hơn.",
  },
  {
    name: "Thu Trang",
    stars: 5,
    content:
      "Trước đây mình chỉ dùng serum nên da vẫn hơi khô. Khi chuyển sang dùng cả combo của Musase thì cảm giác da đủ ẩm hơn hẳn. Mình thích nhất là chất kem không quá dày, dùng cùng nhau rất dễ chịu và không gây bí.",
  },
  {
    name: "Ngọc Linh",
    stars: 4,
    content:
      "Da mình nhạy cảm nên không dùng được Retinol nên đổi sang loại này. Sau gần một tháng sử dụng đều đặn, da nhìn mịn hơn, vùng da quanh khóe miệng cũng đỡ nhăn, trông trẻ hẳn.",
  },
];

export const ProductReviewsSection: React.FC<ProductReviewsSectionProps> = ({
  ratingValue = "4.9",
  ratingCount = "120 người",
  reviews = DEFAULT_REVIEWS,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 3;
  const totalPages = Math.ceil(reviews.length / pageSize) || 1;

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const displayedReviews = reviews.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const viewProps = {
    ratingValue,
    ratingCount,
    displayedReviews,
    currentPage,
    totalPages,
    onPrev: handlePrev,
    onNext: handleNext,
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
      <div className="block md:hidden">
        <MobileProductReviewsSection {...viewProps} />
      </div>

      {/* Tablet View: 768px - 1023px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
      <div className="hidden md:block lg:hidden">
        <TabletProductReviewsSection {...viewProps} />
      </div>

      {/* Desktop View: >= 1024px (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
      <div className="hidden lg:block">
        <DesktopProductReviewsSection {...viewProps} />
      </div>
    </div>
  );
};

export default ProductReviewsSection;
