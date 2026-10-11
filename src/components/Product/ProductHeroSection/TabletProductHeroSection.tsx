"use client";

import BlackButton from "@/components/ui/BlackButton";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Icon } from "@/components/ui/mdi-icon";
import { Skeleton } from "@/components/ui/skeleton";
import { useOptionalLanding } from "@/context/LandingContext";
import { mdiCartVariant, mdiMinus, mdiPlus } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ProductHeroSectionProps } from "./types";

export const TabletProductHeroSection: React.FC<ProductHeroSectionProps> = ({
  data,
  showAddToCart,
}) => {
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);

  // Chiều cao Header trên tablet: TopBanner (48px) + TabletHeader (60px) = 94px (hoặc 156px khi có AdminEditBar)
  const drawerOffsetClass = showAdminBar
    ? "!top-[156px] !h-[calc(100vh-156px)]"
    : "!top-[94px] !h-[calc(100vh-94px)]";

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
    <section className="w-full bg-creamBackgroundV1 px-8 py-16">
      {/* Preload toàn bộ gallery images để chuyển ảnh không phải chờ tải lại */}
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0">
        {data.galleryImages.map((img, index) => (
          <Image key={index} src={img} alt="" width={72} height={72} priority sizes="72px" />
        ))}
      </div>

      <div className="grid max-w-full grid-cols-2 items-start gap-5">
        {/* Left Column: Image Gallery */}
        <div className="flex w-full flex-col-reverse gap-3 sm:flex-row">
          <div className="scrollbar-none flex w-full shrink-0 gap-3 overflow-x-auto pb-2 sm:w-[72px] sm:flex-col sm:overflow-x-visible sm:pb-0">
            {data.galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-[72px] w-[72px] shrink-0 cursor-pointer overflow-hidden border transition-colors duration-200 focus:outline-none ${
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
                  sizes="72px"
                  className="object-cover"
                  draggable={false}
                  onLoad={() => setThumbsLoaded((prev) => ({ ...prev, [index]: true }))}
                />
              </button>
            ))}
          </div>

          <div className="relative aspect-square flex-1 overflow-hidden">
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
                <div className="border border-primaryV1 bg-creamBackgroundV1 px-3 py-2 text-center align-middle text-sm font-semibold leading-none tracking-normal text-primaryV1">
                  {data.badge}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col text-left">
          <h1 className="mb-3 text-3xl font-semibold leading-[130%] tracking-normal text-primaryV1">
            {data.title}
          </h1>

          <p className="mb-3 text-base font-normal leading-[160%] tracking-normal text-secondaryV1">
            {data.description}
          </p>

          <div className="mb-3 flex w-full flex-wrap items-center justify-between gap-2 border-b border-t border-primaryV1 py-2 text-xs font-semibold italic text-secondaryV1 sm:text-sm">
            {data.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="mb-3 flex flex-col gap-1">
            {data.pricing.oldPrice && (
              <span className="text-2xl font-bold leading-[140%] text-[#C9C7B1] line-through">
                {data.pricing.oldPrice}
              </span>
            )}
            <div className="flex items-center gap-5">
              <span className="text-4xl font-semibold leading-[130%] text-supportV1">
                {data.pricing.price}
              </span>
              {data.pricing.discountLabel && (
                <div className="bg-supportV1 px-3 py-2">
                  <span className="text-center text-xs font-medium leading-[120%] text-white">
                    {data.pricing.discountLabel}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mb-5 w-full">
            {data.onCtaClick ? (
              <BlackButton
                text="Mua ngay"
                icon={mdiCartVariant}
                onClick={data.onCtaClick}
                className="w-full justify-between gap-3 px-5 py-4 text-base"
              />
            ) : (
              <Link
                href={`/order${data.productSlug ? `?product=${data.productSlug}` : ""}`}
                className="block w-full"
              >
                <BlackButton
                  text="Mua ngay"
                  icon={mdiCartVariant}
                  className="w-full justify-between gap-3 px-5 py-4 text-base"
                />
              </Link>
            )}
          </div>

          {/* Combo Checklist */}
          {hasBundleItems && data.bundleItems && (
            <div className="mb-4 w-full border border-primaryV1 py-4">
              <div className="mb-3 px-4">
                <h4 className="text-lg font-medium leading-[160%] text-secondaryV1">
                  Combo sản phẩm bao gồm:
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                {data.bundleItems.map((item, idx) => (
                  <Link
                    key={`${item.title}-${idx}`}
                    href={item.link || "#"}
                    className="flex cursor-pointer items-center gap-3 px-4 transition-colors hover:bg-primaryV1/5"
                  >
                    <div className="relative h-[50px] w-[50px] shrink-0">
                      <Image
                        src={item.image || "/images/product3.png"}
                        alt={item.title || "Sản phẩm"}
                        fill
                        className="object-cover"
                        draggable={false}
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                      <span className="text-lg font-bold leading-[140%] text-primaryV1">
                        {item.title}
                      </span>
                      <span className="text-lg font-medium leading-[160%] text-supportV1">
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
                className="flex w-full cursor-pointer items-center justify-between py-4 text-lg font-medium leading-[160%] text-secondaryV1 focus:outline-none"
              >
                <span>Phù hợp cho</span>
                {openSections.suitability ? (
                  <Icon path={mdiMinus} className="h-5 w-5 text-primaryV1" />
                ) : (
                  <Icon path={mdiPlus} className="h-5 w-5 text-primaryV1" />
                )}
              </button>
              {openSections.suitability && (
                <div className="flex items-center gap-2 pb-4 text-base font-normal leading-[160%] text-primaryV1">
                  <span className="text-base">✓</span> {data.suitability}
                </div>
              )}
            </div>

            <div className="border-b border-primaryV1">
              <button
                onClick={() => toggleSection("uses")}
                className="flex w-full cursor-pointer items-center justify-between py-4 text-lg font-medium leading-[160%] text-secondaryV1 focus:outline-none"
              >
                <span>Công dụng</span>
                {openSections.uses ? (
                  <Icon path={mdiMinus} className="h-5 w-5 text-primaryV1" />
                ) : (
                  <Icon path={mdiPlus} className="h-5 w-5 text-primaryV1" />
                )}
              </button>
              {openSections.uses && (
                <div className="flex flex-col gap-3 pb-4 text-base font-normal leading-[160%] text-primaryV1">
                  {data.uses.map((use) => (
                    <p key={use}>• {use}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-primaryV1">
              <button
                onClick={() => toggleSection("ingredients")}
                className="flex w-full cursor-pointer items-center justify-between py-4 text-lg font-medium leading-[160%] text-secondaryV1 focus:outline-none"
              >
                <span>Thành phần chính</span>
                {openSections.ingredients ? (
                  <Icon path={mdiMinus} className="h-5 w-5 text-primaryV1" />
                ) : (
                  <Icon path={mdiPlus} className="h-5 w-5 text-primaryV1" />
                )}
              </button>
              {openSections.ingredients && (
                <div className="flex flex-col gap-3 pb-4 text-base font-normal leading-[160%] text-primaryV1">
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
                          <button className="flex cursor-pointer items-center gap-2">
                            <Image
                              src="/logos/Plus.png"
                              alt="Plus"
                              height={20}
                              width={20}
                              className="h-5 w-5"
                              draggable={false}
                              priority
                            />
                            <span className="text-base text-secondaryV1">
                              Xem thành phần chi tiết
                            </span>
                          </button>
                        </DrawerTrigger>
                        <DrawerContent
                          title="Thành phần chi tiết"
                          className={`gap-0 overflow-y-auto px-8 py-8 sm:px-12 ${drawerOffsetClass}`}
                        >
                          <div className="flex flex-col gap-3">
                            {data.ingredientsDetail.map((item, idx) => (
                              <div
                                key={`${item.title}-${idx}`}
                                className="flex flex-col gap-2 border-b border-primaryV1/10 last:border-b-0"
                              >
                                <h4 className="text-lg font-medium leading-[160%] text-secondaryV1">
                                  {item.title}
                                </h4>
                                <p className="text-base font-normal leading-[160%] text-primaryV1">
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

export default TabletProductHeroSection;
