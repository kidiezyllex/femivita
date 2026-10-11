"use client";

import BlackButton from "@/components/ui/BlackButton";
import { Icon } from "@/components/ui/mdi-icon";
import { mdiStar } from "@mdi/js";
import Image from "next/image";
import React from "react";
import { DEFAULT_PRODUCTS_SECTION_DATA, ProductsSectionProps } from "./types";

export const TabletProductsSection: React.FC<ProductsSectionProps> = ({
  data = DEFAULT_PRODUCTS_SECTION_DATA,
}) => {
  const products = data.products || [];

  return (
    <div className="w-full overflow-hidden border-b border-t border-b-primaryV1 border-t-primaryV1 bg-white px-8 py-16">
      {/* Section Header */}
      <div className="mb-5 flex flex-col justify-between gap-3">
        <div>
          <h2 className="mb-2 text-4xl font-bold leading-[120%] text-primaryV1">
            {data.title || "Sản phẩm của Musase"}
          </h2>
          <p className="text-base font-normal leading-[150%] text-secondaryV1">
            {data.subtitle ||
              "Musase tự hào khi các sản phẩm mà chúng tôi tạo ra 100% nguyên liệu lành tính."}
          </p>
        </div>
      </div>

      {/* 3-Column Tablet Product Grid */}
      <div className="grid grid-cols-3 items-stretch gap-3">
        {products.map((product, idx) => (
          <div key={product.id || idx} className="flex h-full flex-col overflow-hidden bg-white">
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
                  fill
                  sizes="33vw"
                  className="object-contain transition-transform duration-300 hover:scale-105"
                  draggable={false}
                  quality={100}
                />
              </div>
            </div>

            {/* Info area */}
            <div className="mt-3 flex flex-1 flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="line-clamp-1 text-base font-bold leading-snug text-primaryV1">
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
                <div className="flex flex-wrap items-baseline gap-2 pt-0.5">
                  <span className="text-base font-bold text-supportV1">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-xs text-[#C9C7B1] line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>

              <div className="pt-3">
                <BlackButton
                  text="Xem chi tiết"
                  link={product.link || "/products"}
                  className="min-h-[38px] w-full justify-between p-2.5 px-3 py-3 text-sm font-semibold"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TabletProductsSection;
