"use client";

import BlackButton from "@/components/ui/BlackButton";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Icon } from "@/components/ui/mdi-icon";
import { Skeleton } from "@/components/ui/skeleton";
import { mdiCartVariant, mdiMinus, mdiPlus } from "@mdi/js";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ProductHeroSectionProps } from "./types";

export const MobileProductHeroSection: React.FC<ProductHeroSectionProps> = ({
  data,
  showAddToCart,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mainImageLoaded, setMainImageLoaded] = useState<Record<string, boolean>>({});
  const [thumbsLoaded, setThumbsLoaded] = useState<Record<number, boolean>>({});
  const [isIngredientsDrawerOpen, setIsIngredientsDrawerOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    suitability: true,
    uses: true,
    ingredients: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const hasBundleItems = data.bundleItems && data.bundleItems.length > 0;
  const shouldShowButton = showAddToCart ?? !hasBundleItems;

  return (
    <section className="mt-3 w-full overflow-hidden bg-creamBackgroundV1 p-5">
      {/* Preload toàn bộ gallery images để chuyển ảnh không phải chờ tải lại */}
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0">
        {data.galleryImages.map((img, index) => (
          <Image key={index} src={img} alt="" width={60} height={60} priority sizes="60px" />
        ))}
      </div>

      <div className="flex w-full max-w-full flex-col">
        {/* Gallery Section: Main Image on top, horizontal thumbnails underneath */}
        <div className="flex w-full flex-col">
          {/* Main Large Image */}
          <div className="relative aspect-square w-full overflow-hidden">
            {!mainImageLoaded[data.galleryImages[activeImageIndex] || data.galleryImages[0]] && (
              <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
            )}
            <Image
              src={
                data.galleryImages[activeImageIndex] ||
                data.galleryImages[0] ||
                "/images/product3.png"
              }
              alt={`${data.title} Musase`}
              fill
              sizes="100vw"
              className="object-cover"
              draggable={false}
              priority
              quality={100}
              onLoad={() => {
                const key = data.galleryImages[activeImageIndex] || data.galleryImages[0];
                setMainImageLoaded((prev) => ({ ...prev, [key]: true }));
              }}
            />
            {data.badge && (
              <div className="absolute left-2 top-2 z-10">
                <div className="border border-primaryV1 bg-creamBackgroundV1 px-4 py-3 text-base font-semibold leading-none tracking-normal text-primaryV1">
                  {data.badge}
                </div>
              </div>
            )}
          </div>

          {/* Horizontal Thumbnails Strip */}
          {data.galleryImages.length > 1 && (
            <div className="mt-3 flex w-full touch-pan-x select-none flex-row gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {data.galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative h-[60px] w-[60px] shrink-0 cursor-pointer overflow-hidden border transition-colors duration-200 focus:outline-none ${
                    activeImageIndex === index
                      ? "border-primaryV1 ring-1 ring-primaryV1"
                      : "border-primaryV1/20 opacity-70 hover:opacity-100"
                  }`}
                >
                  {!thumbsLoaded[index] && (
                    <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
                  )}
                  <Image
                    src={img || "/images/product3.png"}
                    alt={`${data.title} ${index + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                    draggable={false}
                    onLoad={() => setThumbsLoaded((prev) => ({ ...prev, [index]: true }))}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info Section */}
        <div className="mt-5 flex w-full flex-col text-left">
          <h1 className="mb-3 break-words text-[32px] font-bold leading-[130%] tracking-normal text-primaryV1">
            {data.title}
          </h1>

          <p className="mb-5 break-words text-base font-normal leading-[160%] tracking-normal text-secondaryV1">
            {data.description}
          </p>

          {/* Tags */}
          <div className="mb-5 grid w-full grid-cols-4 gap-[10px] border-b border-t border-primaryV1 py-2 text-xs font-semibold italic text-secondaryV1 selection:gap-2">
            {data.tags.map((tag) => (
              <span key={tag} className="flex-wrap text-center text-xs leading-[160%]">
                {tag}
              </span>
            ))}
          </div>

          {/* Pricing */}
          <div className="mb-5 flex flex-col">
            {data.pricing.oldPrice && (
              <span className="text-[24px] font-bold leading-[140%] text-[#C9C7B1] line-through">
                {data.pricing.oldPrice}
              </span>
            )}
            <div className="flex flex-wrap items-center justify-between gap-10">
              <span className="text-[32px] font-bold leading-[140%] text-supportV1">
                {data.pricing.price}
              </span>
              {data.pricing.discountLabel && (
                <div className="flex h-10 cursor-pointer items-center justify-center bg-supportV1 px-4 transition-colors hover:bg-supportV1/80">
                  <span className="text-center text-sm font-medium uppercase leading-none text-white">
                    {data.pricing.discountLabel}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* CTA / Add to cart button */}
          <div className="mb-3 w-full">
            {data.onCtaClick ? (
              <BlackButton
                text="Mua ngay"
                icon={mdiCartVariant}
                onClick={data.onCtaClick}
                className="w-full justify-between gap-3 py-3.5 text-base"
              />
            ) : (
              <Link
                href={`/order${data.productSlug ? `?product=${data.productSlug}` : ""}`}
                className="block w-full"
              >
                <BlackButton
                  text="Mua ngay"
                  icon={mdiCartVariant}
                  className="w-full justify-between gap-3 py-3.5 text-base"
                />
              </Link>
            )}
          </div>

          {/* Combo Checklist */}
          {hasBundleItems && data.bundleItems && (
            <div className="mb-5 w-full border border-primaryV1 py-4">
              <div className="mb-3 px-4">
                <h4 className="text-lg font-medium leading-[150%] text-secondaryV1">
                  Combo sản phẩm bao gồm:
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                {data.bundleItems.map((item, idx) => (
                  <Link
                    key={`${item.title}-${idx}`}
                    href={item.link || "#"}
                    className="flex cursor-pointer items-center gap-3 px-4 py-2 transition-colors hover:bg-primaryV1/5"
                  >
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden">
                      <Image
                        src={item.image || "/images/product3.png"}
                        alt={item.title || "Sản phẩm"}
                        fill
                        className="object-cover"
                        draggable={false}
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-2">
                      <span className="break-words text-lg font-bold leading-tight text-primaryV1">
                        {item.title}
                      </span>
                      <span className="shrink-0 text-base font-medium leading-tight text-supportV1">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Accordion Sections */}
          <div className="flex w-full flex-col">
            {/* Suitability */}
            <div className="border-b border-primaryV1">
              <button
                onClick={() => toggleSection("suitability")}
                className="flex w-full cursor-pointer touch-manipulation select-none items-center justify-between py-3.5 text-lg font-medium leading-[150%] text-secondaryV1 focus:outline-none"
              >
                <span>Phù hợp cho</span>
                {openSections.suitability ? (
                  <Icon path={mdiMinus} className="h-5 w-5 shrink-0 text-primaryV1" />
                ) : (
                  <Icon path={mdiPlus} className="h-5 w-5 shrink-0 text-primaryV1" />
                )}
              </button>
              {openSections.suitability && (
                <div className="flex items-center gap-2 break-words pb-3.5 text-base font-normal leading-[160%] text-primaryV1">
                  <span className="text-sm">✓</span> {data.suitability}
                </div>
              )}
            </div>

            {/* Uses */}
            <div className="border-b border-primaryV1">
              <button
                onClick={() => toggleSection("uses")}
                className="flex w-full cursor-pointer touch-manipulation select-none items-center justify-between py-3.5 text-lg font-medium leading-[150%] text-secondaryV1 focus:outline-none"
              >
                <span>Công dụng</span>
                {openSections.uses ? (
                  <Icon path={mdiMinus} className="h-5 w-5 shrink-0 text-primaryV1" />
                ) : (
                  <Icon path={mdiPlus} className="h-5 w-5 shrink-0 text-primaryV1" />
                )}
              </button>
              {openSections.uses && (
                <div className="flex flex-col gap-2 break-words pb-3.5 text-base font-normal leading-[160%] text-primaryV1">
                  {data.uses.map((use) => (
                    <p key={use}>• {use}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Key Ingredients */}
            <div className="border-b border-primaryV1">
              <button
                onClick={() => toggleSection("ingredients")}
                className="flex w-full cursor-pointer touch-manipulation select-none items-center justify-between py-3.5 text-lg font-medium leading-[150%] text-secondaryV1 focus:outline-none"
              >
                <span>Thành phần chính</span>
                {openSections.ingredients ? (
                  <Icon path={mdiMinus} className="h-5 w-5 shrink-0 text-primaryV1" />
                ) : (
                  <Icon path={mdiPlus} className="h-5 w-5 shrink-0 text-primaryV1" />
                )}
              </button>
              {openSections.ingredients && (
                <div className="flex flex-col gap-3 break-words pb-3.5 text-base font-normal leading-[160%] text-primaryV1">
                  {data.keyIngredients.map((ingredient, idx) => (
                    <div key={idx}>
                      <span className="font-semibold">{ingredient.name}</span>
                      {ingredient.description && (
                        <>
                          <br />
                          <span>{ingredient.description}</span>
                        </>
                      )}
                    </div>
                  ))}

                  {/* Drawer trigger */}
                  {data.ingredientsDetail && data.ingredientsDetail.length > 0 && (
                    <div className="pt-1">
                      <Drawer
                        direction="left"
                        theme="light"
                        open={isIngredientsDrawerOpen}
                        onOpenChange={setIsIngredientsDrawerOpen}
                      >
                        <DrawerTrigger asChild>
                          <button className="flex cursor-pointer touch-manipulation select-none items-center gap-2 py-2">
                            <Image
                              src="/logos/Plus.png"
                              alt="Plus"
                              height={24}
                              width={24}
                              className="h-6 w-6 shrink-0"
                              draggable={false}
                              priority
                            />
                            <span className="text-base font-medium leading-[160%] text-secondaryV1">
                              Xem thành phần chi tiết
                            </span>
                          </button>
                        </DrawerTrigger>
                        <DrawerContent
                          title="Thành phần chi tiết"
                          className="bottom-0 top-[94px] flex h-auto max-h-[calc(100vh-94px)] w-[400px] max-w-[90vw] flex-col gap-0 overflow-hidden border-0 p-0"
                        >
                          <div
                            data-vaul-no-drag=""
                            className="flex-1 touch-pan-y overflow-y-auto overscroll-contain px-5 py-5"
                          >
                            <div className="flex flex-col gap-3">
                              {data.ingredientsDetail.map((item, idx) => (
                                <div
                                  key={`${item.title}-${idx}`}
                                  className="flex flex-col gap-2 py-3"
                                >
                                  <h4 className="text-lg font-semibold leading-[140%] text-secondaryV1">
                                    {item.title}
                                  </h4>
                                  <p className="break-words text-sm font-normal leading-[160%] text-primaryV1">
                                    {item.content}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileProductHeroSection;
