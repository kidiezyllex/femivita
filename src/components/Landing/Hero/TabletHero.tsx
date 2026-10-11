"use client";

import BlackButton from "@/components/ui/BlackButton";
import { Skeleton } from "@/components/ui/skeleton";
import { useOptionalLanding } from "@/context/LandingContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { HeroChildProps } from "./types";

export const TabletHero: React.FC<HeroChildProps> = ({
  products,
  activeIndex,
  onSelectProduct,
}) => {
  const activeProduct = products[activeIndex];
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);
  const [mainImageLoaded, setMainImageLoaded] = React.useState<Record<string, boolean>>({});
  const [thumbsLoaded, setThumbsLoaded] = React.useState<Record<number, boolean>>({});

  // Chiều cao Header trên tablet: TopBanner (48px) + TabletHeader (60px) = 94px (hoặc 156px khi có AdminEditBar)
  const heroHeightClass = showAdminBar
    ? "h-[calc(100vh-156px)] min-h-[calc(100vh-156px)]"
    : "h-[calc(100vh-94px)] min-h-[calc(100vh-94px)]";

  // 768px - 991px
  return (
    <section
      className={`flex w-full flex-row overflow-hidden bg-creamBackgroundV1 ${heroHeightClass}`}
    >
      {/* Preload toàn bộ ảnh sản phẩm để chuyển slide/thumbnail không phải chờ tải lại */}
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0">
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <Image src={product.image} alt="" width={64} height={64} priority sizes="64px" />
            <Image src={product.thumbnail} alt="" width={64} height={64} priority sizes="64px" />
          </React.Fragment>
        ))}
      </div>

      {/* Left Image Section */}
      <div className="relative h-full w-1/2 overflow-hidden bg-creamBackgroundV1">
        {!mainImageLoaded[activeProduct.image] && (
          <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
        )}
        <AnimatePresence initial={false}>
          <motion.div
            key={activeProduct.image}
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
              src={activeProduct.image}
              alt={activeProduct.title}
              fill
              className="object-cover"
              priority
              quality={100}
              draggable={false}
              sizes="50vw"
              onLoad={() =>
                setMainImageLoaded((prev) => ({ ...prev, [activeProduct.image]: true }))
              }
            />
          </motion.div>
        </AnimatePresence>

        {/* Thumbnails */}
        <div className="absolute bottom-5 left-5 z-10 flex gap-3">
          {products.map((product, index) => (
            <button
              key={product.thumbnail + index}
              type="button"
              onClick={() => onSelectProduct(index)}
              aria-label={`Chọn ${product.title}`}
              className={`relative h-16 w-16 cursor-pointer overflow-hidden border-2 transition-opacity hover:opacity-80 ${
                index === activeIndex
                  ? "border-primaryV1 shadow-md"
                  : "border-transparent shadow-sm"
              }`}
            >
              {!thumbsLoaded[index] && (
                <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
              )}
              <Image
                src={product.thumbnail}
                alt={`Thumb ${index + 1}`}
                fill
                className="object-cover"
                quality={100}
                draggable={false}
                sizes="64px"
                onLoad={() => setThumbsLoaded((prev) => ({ ...prev, [index]: true }))}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Text Section */}
      <div className="flex w-1/2 items-center justify-center border-l border-l-primaryV1/30 px-8">
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h1 className="mb-3 text-lg text-supportV1">
                <span className="font-semibold">Musase</span> -{" "}
                <span className="italic">{activeProduct.subtitle}</span>
              </h1>
              <h2 className="mb-3 text-4xl font-semibold leading-[120%] tracking-normal text-primaryV1">
                {activeProduct.title}
              </h2>
              <p className="mb-5 line-clamp-5 text-base leading-relaxed text-secondaryV1">
                {activeProduct.description}
              </p>
            </motion.div>
          </AnimatePresence>
          <BlackButton
            text="Xem chi tiết sản phẩm"
            className="w-full justify-between gap-8 px-5 py-4 text-base"
          />
        </div>
      </div>
    </section>
  );
};
