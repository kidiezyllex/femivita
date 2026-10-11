"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { mdiChevronLeft, mdiChevronRight, mdiStar } from "@mdi/js";
import React from "react";
import { ProductReviewsSectionViewProps } from "./types";

export const DesktopProductReviewsSection: React.FC<ProductReviewsSectionViewProps> = ({
  ratingValue,
  ratingCount,
  displayedReviews,
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) => {
  return (
    <section className="flex w-full flex-row items-start justify-center bg-creamBackgroundV1 lg:gap-12 lg:p-12 xl:gap-14 xl:p-16 xxl:gap-16 xxl:p-20">
      {/* Left Rating Circle */}
      <div className="flex shrink-0 flex-col items-center justify-center">
        <div className="flex h-[400px] w-[400px] flex-col items-center justify-center rounded-full border border-supportV1 px-5 text-center">
          <span className="text-[160px] font-semibold leading-[120%] text-supportV1">
            {ratingValue}
          </span>
          <div className="flex items-center gap-1 text-base text-primaryV1">
            <span>Được đánh giá bởi</span>
            <span className="font-semibold">{ratingCount}</span>
          </div>
        </div>
      </div>

      {/* Right Reviews List */}
      <div className="flex w-[768px] flex-col items-start gap-5 xxl:gap-8">
        <div className="w-full border-b border-[#6A6A6A] pb-5">
          <h3 className="text-2xl font-bold leading-[140%] text-black">Đánh giá của khách hàng</h3>
        </div>

        <div className="flex w-full flex-col gap-5 xxl:gap-10">
          {displayedReviews.map((review, idx) => (
            <div
              key={idx}
              className="flex w-full flex-row border-b border-primaryV1 pb-5 xl:gap-10 xxl:gap-[120px] xxl:pb-8"
            >
              <div className="flex w-[200px] shrink-0 flex-col gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      path={mdiStar}
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.stars ? "text-[#D79E2E]" : "text-[#C9C7B1]"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-normal leading-[160%] text-primaryV1">
                  {review.name}
                </span>
              </div>
              <p className="flex-1 text-base font-normal leading-[160%] text-primaryV1">
                {review.content}
              </p>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="flex w-full items-center justify-center gap-[120px]">
            <div className="flex items-center gap-3">
              <button
                onClick={onPrev}
                disabled={currentPage === 0}
                className={`p-3 transition-opacity focus:outline-none ${
                  currentPage === 0
                    ? "cursor-not-allowed bg-accentV1 opacity-40"
                    : "cursor-pointer bg-accentV1 hover:bg-accentV1/90"
                }`}
                aria-label="Previous reviews"
              >
                <Icon path={mdiChevronLeft} className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={onNext}
                disabled={currentPage >= totalPages - 1}
                className={`p-3 transition-opacity focus:outline-none ${
                  currentPage >= totalPages - 1
                    ? "cursor-not-allowed bg-accentV1 opacity-40"
                    : "cursor-pointer bg-accentV1 hover:bg-accentV1/90"
                }`}
                aria-label="Next reviews"
              >
                <Icon path={mdiChevronRight} className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="h-[3px] flex-1 bg-primaryV1/20">
              <div
                className="h-full bg-accentV1 transition-[width] duration-300"
                style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopProductReviewsSection;
