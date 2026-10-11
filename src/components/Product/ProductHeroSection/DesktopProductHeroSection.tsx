"use client";

import BlackButton from "@/components/ui/BlackButton";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Icon } from "@/components/ui/mdi-icon";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsPortraitViewport } from "@/hooks/useViewportOrientation";
import { mdiCartVariant, mdiMinus, mdiPlus } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ProductHeroSectionProps } from "./types";

export const DesktopProductHeroSection: React.FC<ProductHeroSectionProps> = ({
  data,
  showAddToCart,
}) => {
  const isPortrait = useIsPortraitViewport();
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

  return (
    // Màn máy tính desktop bên a Tuấn là xl
    <section className="w-full bg-creamBackgroundV1 p-8 md:p-16 md:py-8 lg:p-12 xl:p-16 xxl:p-20">
      {/* Preload toàn bộ gallery images để chuyển ảnh không phải chờ tải lại */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0"
      >
        {data.galleryImages.map((img, index) => (
          <Image key={index} src={img} alt="" width={80} height={80} priority sizes="80px" />
        ))}
      </div>

      <div className="grid grid-cols-2 items-start lg:gap-12 xl:gap-14 xxl:gap-16">
        {/* Left Column: Image Gallery */}
        <div className={`flex w-full ${isPortrait ? "flex-col gap-3" : "flex-row gap-3"}`}>
          {!isPortrait && (
            <div className="flex w-20 shrink-0 flex-col gap-3">
              {data.galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative h-20 w-20 shrink-0 cursor-pointer overflow-hidden border transition-colors duration-200 focus:outline-none ${
                    activeImageIndex === index
                      ? "border-primaryV1"
                      : "border-primaryV1/20 hover:border-primaryV1/40"
                  }`}
                >
                  {!thumbsLoaded[index] && (
                    <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
                  )}
                  <Image
                    src={img || "/images/product3.png"}
                    alt={`${data.title} ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                    draggable={false}
                    onLoad={() => setThumbsLoaded((prev) => ({ ...prev, [index]: true }))}
                  />
                </button>
              ))}
            </div>
          )}

          <div className="relative aspect-square w-full overflow-hidden">
            {!mainImageLoaded[data.galleryImages[activeImageIndex] || data.galleryImages[0]] && (
              <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
            )}
            <AnimatePresence initial={false}>
              <motion.div
                key={data.galleryImages[activeImageIndex] || data.galleryImages[0]}
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 h-full w-full will-change-transform"
              >
                <Image
                  src={
                    data.galleryImages[activeImageIndex] ||
                    data.galleryImages[0] ||
                    "/images/product3.png"
                  }
                  alt={`${data.title} Musase`}
                  fill
                  sizes="50vw"
                  className="object-cover"
                  draggable={false}
                  priority
                  quality={100}
                  onLoad={() => {
                    const key = data.galleryImages[activeImageIndex] || data.galleryImages[0];
                    setMainImageLoaded((prev) => ({ ...prev, [key]: true }));
                  }}
                />
              </motion.div>
            </AnimatePresence>
            {data.badge && (
              <div className="absolute left-2 top-2 z-10">
                <div className="border border-primaryV1 bg-creamBackgroundV1 px-4 py-3 text-center align-middle text-base font-semibold leading-none tracking-normal text-primaryV1">
                  {data.badge}
                </div>
              </div>
            )}
          </div>

          {isPortrait && (
            <div className="flex w-full touch-pan-x select-none flex-row gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {data.galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative h-[76px] w-[76px] shrink-0 cursor-pointer overflow-hidden border transition-colors duration-200 focus:outline-none ${
                    activeImageIndex === index
                      ? "border-primaryV1"
                      : "border-primaryV1/20 hover:border-primaryV1/40"
                  }`}
                >
                  {!thumbsLoaded[index] && (
                    <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
                  )}
                  <Image
                    src={img || "/images/product3.png"}
                    alt={`${data.title} ${index + 1}`}
                    fill
                    sizes="76px"
                    className="object-cover"
                    draggable={false}
                    onLoad={() => setThumbsLoaded((prev) => ({ ...prev, [index]: true }))}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col text-left">
          <h1 className="mb-3 text-3xl font-semibold leading-[100%] tracking-normal text-primaryV1 xl:text-4xl">
            {data.title}
          </h1>

          <p className="mb-5 text-base font-normal leading-[160%] tracking-normal text-secondaryV1 xl:text-lg xxl:text-xl">
            {data.description}
          </p>

          <div className="mb-5 flex w-full flex-wrap items-center justify-between gap-2 border-b border-t border-primaryV1 py-2 text-sm font-semibold italic text-secondaryV1">
            {data.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="mb-5 flex flex-col">
            {data.pricing.oldPrice && (
              <span className="mb-3 text-[32px] font-bold leading-[120%] text-[#C9C7B1] line-through">
                {data.pricing.oldPrice}
              </span>
            )}
            <div className="mb-5 flex items-center gap-10">
              <span className="text-5xl font-semibold text-supportV1">{data.pricing.price}</span>
              {data.pricing.discountLabel && (
                <div className="bg-supportV1 px-4 py-3">
                  <span className="text-center text-sm font-medium leading-[120%] text-white">
                    {data.pricing.discountLabel}
                  </span>
                </div>
              )}
            </div>
            {/* CTA / Add to cart button */}
            <div className="w-full">
              {data.onCtaClick ? (
                <BlackButton
                  text="Mua ngay"
                  icon={mdiCartVariant}
                  onClick={data.onCtaClick}
                  className="w-full justify-center gap-3"
                />
              ) : (
                <Link
                  href={`/order${data.productSlug ? `?product=${data.productSlug}` : ""}`}
                  className="block w-full"
                >
                  <BlackButton
                    text="Mua ngay"
                    icon={mdiCartVariant}
                    className="w-full justify-center gap-3"
                  />
                </Link>
              )}
            </div>
          </div>
          {/* Combo Checklist */}
          {hasBundleItems && data.bundleItems && (
            <div className="w-full border border-primaryV1 py-5">
              <div className="mb-4 px-5">
                <h4 className="font-medium leading-[160%] text-secondaryV1 xl:text-xl xxl:text-[22px]">
                  Combo sản phẩm bao gồm:
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                {data.bundleItems.map((item, idx) => (
                  <Link
                    key={`${item.title}-${idx}`}
                    href={item.link || "#"}
                    className="flex cursor-pointer items-center gap-3 px-5 transition-colors hover:bg-primaryV1/5"
                  >
                    <div className="relative h-[60px] w-[60px] shrink-0">
                      <Image
                        src={item.image || "/images/product3.png"}
                        alt={item.title || "Sản phẩm"}
                        fill
                        className="object-cover"
                        draggable={false}
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                      <span className="font-bold leading-[140%] text-primaryV1 xl:text-xl xxl:text-2xl">
                        {item.title}
                      </span>
                      <span className="font-medium leading-[160%] text-supportV1 xl:text-xl xxl:text-[22px]">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Accordion Sections */}
          <div className="flex flex-col">
            <div className="border-b border-primaryV1">
              <button
                onClick={() => toggleSection("suitability")}
                className="flex w-full cursor-pointer items-center justify-between py-5 font-medium leading-[160%] text-secondaryV1 focus:outline-none xl:text-xl xxl:text-[22px]"
              >
                <span>Phù hợp cho</span>
                {openSections.suitability ? (
                  <Icon path={mdiMinus} className="h-6 w-6 text-primaryV1" />
                ) : (
                  <Icon path={mdiPlus} className="h-6 w-6 text-primaryV1" />
                )}
              </button>
              {openSections.suitability && (
                <div className="flex items-center gap-2 pb-5 font-normal leading-[160%] text-primaryV1 xl:text-base xxl:text-lg xxl:text-xl">
                  <span className="text-lg">✓</span> {data.suitability}
                </div>
              )}
            </div>

            <div className="border-b border-primaryV1">
              <button
                onClick={() => toggleSection("uses")}
                className="flex w-full cursor-pointer items-center justify-between py-5 font-medium leading-[160%] text-secondaryV1 focus:outline-none xl:text-xl xxl:text-[22px]"
              >
                <span>Công dụng</span>
                {openSections.uses ? (
                  <Icon path={mdiMinus} className="h-6 w-6 text-primaryV1" />
                ) : (
                  <Icon path={mdiPlus} className="h-6 w-6 text-primaryV1" />
                )}
              </button>
              {openSections.uses && (
                <div className="flex flex-col gap-3 pb-5 font-normal leading-[160%] text-primaryV1 xl:text-base xxl:text-lg xxl:text-xl">
                  {data.uses.map((use) => (
                    <p key={use}>• {use}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-primaryV1">
              <button
                onClick={() => toggleSection("ingredients")}
                className="flex w-full cursor-pointer items-center justify-between py-5 font-medium leading-[160%] text-secondaryV1 focus:outline-none xl:text-xl xxl:text-[22px]"
              >
                <span>Thành phần chính</span>
                {openSections.ingredients ? (
                  <Icon path={mdiMinus} className="h-6 w-6 text-primaryV1" />
                ) : (
                  <Icon path={mdiPlus} className="h-6 w-6 text-primaryV1" />
                )}
              </button>
              {openSections.ingredients && (
                <div className="flex flex-col gap-3 pb-5 font-normal leading-[160%] text-primaryV1 xl:text-base xxl:text-lg xxl:text-xl">
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
                  {data.ingredientsDetail && data.ingredientsDetail.length > 0 && (
                    <div>
                      <Drawer
                        direction="left"
                        theme="light"
                        open={isIngredientsDrawerOpen}
                        onOpenChange={setIsIngredientsDrawerOpen}
                      >
                        <DrawerTrigger asChild>
                          <button className="group flex cursor-pointer items-center gap-2">
                            <Icon
                              path={mdiPlus}
                              size={1.1}
                              className="shrink-0 text-secondaryV1 group-hover:text-supportV1"
                            />
                            <span className="text-lg text-secondaryV1 group-hover:text-supportV1">
                              Xem thành phần chi tiết
                            </span>
                          </button>
                        </DrawerTrigger>
                        <DrawerContent
                          title="Thành phần chi tiết"
                          className="bottom-0 top-[60px] h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] gap-0 overflow-y-auto px-12 py-10 xl:px-16 xxl:px-20"
                        >
                          <div className="flex flex-col gap-5">
                            {data.ingredientsDetail.map((item, idx) => (
                              <div
                                key={`${item.title}-${idx}`}
                                className="flex flex-col gap-3 pt-5"
                              >
                                <h4 className="text-xl font-medium leading-[160%] text-secondaryV1 xxl:text-[22px]">
                                  {item.title}
                                </h4>
                                <p className="text-lg font-normal leading-[160%] text-primaryV1">
                                  {item.content}
                                </p>
                              </div>
                            ))}
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

export default DesktopProductHeroSection;
