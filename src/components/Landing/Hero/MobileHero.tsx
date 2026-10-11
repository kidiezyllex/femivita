"use client";

import BlackButton from "@/components/ui/BlackButton";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { HeroChildProps } from "./types";

export const MobileHero: React.FC<HeroChildProps> = ({
  products,
  activeIndex,
  onSelectProduct,
}) => {
  const activeProduct = products[activeIndex];
  const [direction, setDirection] = React.useState(1);
  const prevIndexRef = React.useRef(activeIndex);
  const [mainImageLoaded, setMainImageLoaded] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    if (activeIndex !== prevIndexRef.current) {
      if (
        (activeIndex > prevIndexRef.current &&
          !(prevIndexRef.current === 0 && activeIndex === products.length - 1)) ||
        (prevIndexRef.current === products.length - 1 && activeIndex === 0)
      ) {
        setDirection(1);
      } else {
        setDirection(-1);
      }
      prevIndexRef.current = activeIndex;
    }
  }, [activeIndex, products.length]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -300) {
      setDirection(1);
      onSelectProduct((activeIndex + 1) % products.length);
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 300) {
      setDirection(-1);
      onSelectProduct((activeIndex - 1 + products.length) % products.length);
    }
  };

  const imageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
    }),
    center: {
      x: "0%",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
    }),
  };

  const contentVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 36 : -36,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -36 : 36,
    }),
  };

  return (
    <section className="flex w-full flex-col overflow-x-hidden bg-creamBackgroundV1">
      {/* Preload toàn bộ ảnh sản phẩm để chuyển slide không phải chờ tải lại */}
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0">
        {products.map((product, index) => (
          <Image key={index} src={product.image} alt="" width={80} height={80} priority sizes="80px" />
        ))}
      </div>

      {/* Product Main Image & Dots */}
      <div className="relative aspect-square w-full select-none overflow-hidden bg-creamBackgroundV1">
        {!mainImageLoaded[activeProduct.image] && (
          <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
        )}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeProduct.image}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 h-full w-full cursor-grab touch-pan-y will-change-transform active:cursor-grabbing"
          >
            <Image
              src={activeProduct.image}
              alt={activeProduct.title}
              fill
              className="pointer-events-none object-cover"
              priority
              quality={100}
              draggable={false}
              sizes="100vw"
              onLoad={() =>
                setMainImageLoaded((prev) => ({ ...prev, [activeProduct.image]: true }))
              }
            />
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator Overlay */}
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onSelectProduct(index)}
              aria-label={`Chuyển tới slide ${index + 1}`}
              className={`h-2 cursor-pointer touch-manipulation rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-primaryV1"
                  : "w-2 bg-primaryV1/30 hover:bg-primaryV1/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Content Details */}
      <div className="flex w-full flex-col justify-center overflow-hidden p-5">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeProduct.title}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            {/* Subtitle */}
            <h1 className="mb-3 text-lg font-normal leading-snug text-supportV1">
              <span className="font-semibold">Musase</span> -{" "}
              <span className="italic">{activeProduct.subtitle}</span>
            </h1>

            {/* Main Title */}
            <h2 className="mb-3 break-words text-[32px] font-semibold leading-[120%] tracking-tight text-primaryV1">
              {activeProduct.title}
            </h2>

            {/* Description */}
            <p className="mb-10 text-base font-normal leading-[160%] text-secondaryV1">
              {activeProduct.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <div className="w-full">
          <BlackButton
            text="Xem chi tiết sản phẩm"
            className="w-full justify-between px-4 py-3 text-base font-semibold"
          />
        </div>
      </div>
    </section>
  );
};
