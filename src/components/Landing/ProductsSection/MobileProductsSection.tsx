"use client";

import BlackButton from "@/components/ui/BlackButton";
import { Icon } from "@/components/ui/mdi-icon";
import { mdiStar } from "@mdi/js";
import Image from "next/image";
import React from "react";
import { DEFAULT_PRODUCTS_SECTION_DATA, ProductsSectionProps } from "./types";

export const MobileProductsSection: React.FC<ProductsSectionProps> = ({
  data = DEFAULT_PRODUCTS_SECTION_DATA,
}) => {
  const products = data.products || [];
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.min(Math.max(index, 0), products.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div className="w-full overflow-hidden border-b border-t border-b-primaryV1 border-t-primaryV1 bg-white px-5 py-10">
      <div className="max-w-full">
        {/* Section Header */}
        <div className="mb-3 flex flex-col">
          <h2 className="mb-3 break-words text-[32px] font-bold leading-[140%] text-primaryV1">
            {data.title || "Sản phẩm của"}
            <br />
            <span className="text-supportV1">Musase</span>
          </h2>
          <p className="break-words text-base font-normal leading-[160%] text-secondaryV1">
            {data.subtitle ||
              "Musase tự hào khi các sản phẩm mà chúng tôi tạo ra 100% nguyên liệu lành tính."}
          </p>
        </div>

        {/* Product Cards Slider - Full Width per Slide */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex w-full touch-auto snap-x snap-mandatory flex-row overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product, idx) => (
            <div
              key={product.id || idx}
              className="flex w-full shrink-0 snap-center flex-col overflow-hidden"
            >
              {/* Image area */}
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#FAF8F0]">
                {product.badge && (
                  <div className="absolute left-2 top-2 z-10 text-nowrap border border-primaryV1 bg-creamBackgroundV1 px-3 py-2 text-xs font-semibold leading-none text-primaryV1">
                    {product.badge}
                  </div>
                )}
                <div className="relative h-full w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    height={1000}
                    width={1000}
                    sizes="(max-width: 768px) 85vw, 340px"
                    className="object-contain"
                    draggable={false}
                    quality={100}
                  />
                </div>
              </div>

              {/* Info area */}
              <div className="mt-4 flex flex-1 flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-[24px] font-bold leading-snug text-primaryV1">
                    {product.title}
                  </h3>
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon path={mdiStar} key={i} className="h-4 w-4 text-[#D79E2E]" />
                    ))}
                    <span className="ml-1 text-xs font-medium text-primaryV1">4.9</span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-[24px] font-bold leading-[160%] text-supportV1">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-[18px] leading-[160%] text-[#C9C7B1] line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <BlackButton
                    text="Xem chi tiết"
                    link={product.link || "/products"}
                    className="w-full justify-between px-4 py-3 text-base font-semibold"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination */}
        {products.length > 1 && (
          <div className="flex items-center justify-center gap-2 pt-5">
            {products.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToSlide(index)}
                aria-label={`Chuyển tới sản phẩm ${index + 1}`}
                className={`h-2 cursor-pointer touch-manipulation rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-primaryV1"
                    : "w-2 bg-primaryV1/30 hover:bg-primaryV1/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default MobileProductsSection;
