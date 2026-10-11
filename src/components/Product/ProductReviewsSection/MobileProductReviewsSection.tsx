"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { mdiStar } from "@mdi/js";
import React from "react";
import { ProductReviewsSectionViewProps } from "./types";

export const MobileProductReviewsSection: React.FC<ProductReviewsSectionViewProps> = ({
  ratingValue,
  ratingCount,
  displayedReviews,
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-creamBackgroundV1 px-5 py-10">
      {/* Rating Circle */}
      <div className="mb-5 flex w-full shrink-0 flex-col items-center justify-center">
        <div className="flex aspect-square w-[240px] flex-col items-center justify-center rounded-full border border-supportV1 px-4 text-center">
          <span className="text-[90px] font-semibold leading-[120%] text-supportV1">
            {ratingValue}
          </span>
          <div className="flex items-center gap-1 text-xs leading-[160%] text-primaryV1">
            <span>Được đánh giá bởi</span>
            <span className="font-semibold">{ratingCount}</span>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="flex w-full flex-col items-start gap-5">
        <div className="w-full border-b border-[#6A6A6A] pb-5">
          <h3 className="text-[24px] font-bold leading-[140%] text-black">
            Đánh giá của khách hàng
          </h3>
        </div>

        <div className="flex w-full flex-col gap-5">
          {displayedReviews.map((review, idx) => (
            <div key={idx} className="flex w-full flex-col gap-3 border-b border-primaryV1 pb-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    path={mdiStar}
                    key={i}
                    className={`h-5 w-5 ${i < review.stars ? "text-[#D79E2E]" : "text-[#C9C7B1]"}`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold leading-[160%] text-primaryV1">
                {review.name}
              </span>
              <p className="break-words text-base font-normal leading-[160%] text-primaryV1">
                {review.content}
              </p>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="flex w-full items-center justify-center gap-5">
            <div className="h-[3px] flex-1 bg-primaryV1/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileProductReviewsSection;
