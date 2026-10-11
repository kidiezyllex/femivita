"use client";

import BlackButton from "@/components/ui/BlackButton";
import { Icon } from "@/components/ui/mdi-icon";
import { useOptionalLanding } from "@/context/LandingContext";
import { mdiStar } from "@mdi/js";
import Image from "next/image";
import React from "react";
import {
  DEFAULT_FEATURED_PRODUCT,
  DEFAULT_PRODUCTS_SECTION_DATA,
  ProductsSectionProps,
} from "./types";

export const DesktopProductsSection: React.FC<ProductsSectionProps> = ({
  data = DEFAULT_PRODUCTS_SECTION_DATA,
}) => {
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);

  const sectionHeightClass = showAdminBar ? "h-fit py-20" : "h-fit py-20";

  const products = data.products || [];
  const featuredProduct = products[0] || DEFAULT_FEATURED_PRODUCT;
  const smallProducts = products.slice(1);

  return (
    <div
      className={`w-full bg-white ${sectionHeightClass} flex items-center justify-center overflow-hidden border-b border-t border-b-primaryV1 border-t-primaryV1 px-8 lg:p-12 xl:p-16 xxl:p-20`}
    >
      {/* Grid Container - 1440px Figma Standard */}
      <div className="grid grid-cols-2 items-center gap-5">
        {/* Left Column: Featured Product Card */}
        <div className="flex h-full flex-col justify-center overflow-hidden">
          {/* Image area */}
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#FAF8F0]">
            {/* Badge */}
            {featuredProduct.badge && (
              <div className="absolute left-2 top-2 z-10 border border-primaryV1 bg-creamBackgroundV1 px-3 py-2 text-center align-middle text-xs font-semibold leading-none tracking-normal text-primaryV1 xl:px-3.5 xl:py-3 xl:text-sm">
                {featuredProduct.badge}
              </div>
            )}
            <div className="relative h-full w-full p-5 lg:p-8">
              <Image
                src={featuredProduct.image || "/images/product2.png"}
                alt={featuredProduct.title}
                fill
                sizes="50vw"
                className="object-contain transition-transform duration-300 hover:scale-105"
                draggable={false}
                quality={100}
              />
            </div>
          </div>

          {/* Info area */}
          <div className="mt-3 flex flex-col justify-between bg-white xl:mt-4">
            <div className="w-full space-y-1.5 xl:space-y-2">
              <h3 className="line-clamp-1 align-middle text-lg font-bold leading-[130%] text-primaryV1 xl:text-2xl">
                {featuredProduct.title}
              </h3>
              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon path={mdiStar} key={i} className="h-4 w-4 text-[#D79E2E] xl:h-5 xl:w-5" />
                ))}
                <span className="ml-2 text-xs font-medium text-primaryV1 xl:text-sm">4.9</span>
              </div>
              {/* Pricing */}
              <div className="flex items-baseline gap-3">
                <span className="align-middle text-lg font-bold leading-[140%] text-supportV1 xl:text-2xl">
                  {featuredProduct.price}
                </span>
                {featuredProduct.oldPrice && (
                  <span className="align-middle text-xs font-normal leading-[160%] text-[#C9C7B1] line-through xl:text-lg xxl:text-xl">
                    {featuredProduct.oldPrice}
                  </span>
                )}
              </div>
              <BlackButton
                text="Xem chi tiết"
                minWidth="300px"
                link={featuredProduct.link || "/products"}
                className="w-[300px] min-w-[300px] justify-between px-3.5 py-3 text-sm font-semibold xl:px-4 xl:py-3 xl:text-base"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Title (Desktop Only) & Two Smaller Products */}
        <div className="flex h-full flex-col justify-between gap-5 lg:gap-8 xl:gap-10">
          {/* Desktop Section Title */}
          <div className="text-right">
            <h2 className="mb-2 text-right align-middle text-3xl font-bold leading-[115%] text-primaryV1 lg:text-4xl xl:mb-5 xl:text-5xl xxl:text-[56px] xxxl:text-[64px]">
              {data.title || "Sản phẩm của"}
              <br />
              <span className="text-supportV1">Musase</span>
            </h2>
            <p className="ml-auto max-w-[362px] text-right align-middle text-sm font-normal leading-[150%] text-secondaryV1 lg:text-base xl:text-lg xxl:max-w-[500px] xxl:text-xl">
              {data.subtitle ||
                "Musase tự hào khi các sản phẩm mà chúng tôi tạo ra 100% nguyên liệu lành tính."}
            </p>
          </div>

          {/* Smaller Products Grid */}
          <div className="grid grid-cols-2 gap-3 lg:gap-5">
            {smallProducts.map((product) => (
              <div key={product.id} className="flex flex-col overflow-hidden">
                {/* Image area */}
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#FAF8F0]">
                  <div className="relative h-full w-full p-4 lg:p-5">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="25vw"
                      className="object-contain transition-transform duration-300 hover:scale-105"
                      draggable={false}
                      quality={100}
                    />
                  </div>
                </div>

                {/* Info area */}
                <div className="mt-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="line-clamp-1 align-middle text-lg font-bold leading-[130%] text-primaryV1 xl:text-2xl">
                      {product.title}
                    </h3>
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon
                          path={mdiStar}
                          key={i}
                          className="h-4 w-4 text-[#D79E2E] xl:h-5 xl:w-5"
                        />
                      ))}
                      <span className="ml-2 text-xs font-medium text-primaryV1 xl:text-sm">
                        4.9
                      </span>
                    </div>
                    {/* Pricing */}
                    <div className="flex items-baseline gap-2">
                      <span className="align-middle text-lg font-bold leading-[140%] text-supportV1 xl:text-2xl">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-[11px] text-[#C9C7B1] line-through xl:text-xs">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                    <BlackButton
                      text="Xem chi tiết"
                      link={product.link || "/products"}
                      className="w-full justify-between px-3.5 py-3 text-sm font-semibold xl:px-4 xl:py-3 xl:text-base"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopProductsSection;
