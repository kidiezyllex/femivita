"use client";

import BlackButton from "@/components/ui/BlackButton";
import { Skeleton } from "@/components/ui/skeleton";
import { useOptionalLanding } from "@/context/LandingContext";
import { useIsPortraitViewport } from "@/hooks/useViewportOrientation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeroChildProps } from "./types";

export const DesktopHero: React.FC<HeroChildProps> = ({
  products,
  activeIndex,
  onSelectProduct,
}) => {
  const activeProduct = products[activeIndex];
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);
  const isPortrait = useIsPortraitViewport();
  const [thumbsLoaded, setThumbsLoaded] = React.useState<Record<number, boolean>>({});
  const [direction, setDirection] = React.useState(1);
  const prevIndexRef = React.useRef(activeIndex);

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

  const slideVariants = {
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

  const heroHeightClass = isPortrait
    ? ""
    : showAdminBar
      ? "h-[calc(100vh-142px)] min-h-[calc(100vh-142px)]"
      : "h-[calc(100vh-94px)] min-h-[calc(100vh-94px)]";

  return (
    <section
      className={`w-full bg-creamBackgroundV1 ${heroHeightClass} ${isPortrait ? "" : "overflow-hidden"}`}
    >
      {/* Preload toàn bộ ảnh sản phẩm để chuyển slide/thumbnail không phải chờ tải lại */}
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0">
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <Image src={product.image} alt="" width={80} height={80} priority sizes="80px" />
            <Image src={product.thumbnail} alt="" width={80} height={80} priority sizes="80px" />
          </React.Fragment>
        ))}
      </div>

      <div className={`flex w-full flex-row items-stretch ${isPortrait ? "" : "h-full"}`}>
        {/* Left Column: Image Gallery (Tương tự ComboProduct) */}
        <div
          className={`flex w-1/2 flex-row items-stretch border-r border-r-primaryV1 bg-creamBackgroundV1 ${isPortrait ? "" : "h-full overflow-hidden"}`}
        >
          {/* Thumbnails Column */}
          {!isPortrait && (
            <div className="z-10 flex shrink-0 flex-col justify-center gap-3 pl-5 pr-3 lg:pl-8 xl:pl-10 min-[1440px]:pl-12">
              {products.map((product, index) => (
                <button
                  key={product.thumbnail + index}
                  type="button"
                  onClick={() => onSelectProduct(index)}
                  aria-label={`Chọn ${product.title}`}
                  className={`relative h-[76px] w-[76px] shrink-0 cursor-pointer overflow-hidden border transition-colors duration-200 focus:outline-none min-[1440px]:h-20 min-[1440px]:w-20 ${
                    index === activeIndex
                      ? "border-primaryV1"
                      : "border-primaryV1/20 hover:border-primaryV1/50"
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
                    sizes="(max-width: 1439px) 76px, 80px"
                    onLoad={() => setThumbsLoaded((prev) => ({ ...prev, [index]: true }))}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main Product Image - Full height section */}
          <div
            className={`relative flex-1 select-none overflow-hidden ${isPortrait ? "" : "h-full"}`}
          >
            {isPortrait ? (
              <>
                {/* Ảnh ẩn dùng để đo và set chiều cao container theo tỷ lệ thật của ảnh đang active */}
                <Image
                  key={`spacer-${activeProduct.image}`}
                  src={activeProduct.image}
                  alt=""
                  aria-hidden="true"
                  width={1200}
                  height={1200}
                  className="invisible h-auto w-full"
                  draggable={false}
                  sizes="100vw"
                />
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeProduct.image}
                    custom={direction}
                    variants={slideVariants}
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
                    />
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
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
                    height={2000}
                    width={2000}
                    className="object-cover"
                    priority
                    quality={100}
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            )}

            {/* Dots Indicator - chỉ hiện khi portrait để thay thế thumbnail column */}
            {isPortrait && (
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
            )}
          </div>
        </div>

        {/* Right Text Section - Căn giữa theo chiều cao của hero */}
        <div
          className={`flex w-1/2 items-center justify-center bg-creamBackgroundV1 p-8 lg:px-12 xl:px-14 min-[1440px]:px-16 xxl:px-20 ${isPortrait ? "" : "h-full"}`}
        >
          <div className="flex w-full flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <h1 className="mb-2 text-base text-supportV1 lg:text-lg xl:mb-3 xl:text-lg min-[1440px]:text-xl">
                  <span className="font-semibold">Musase</span> -{" "}
                  <span className="italic">{activeProduct.subtitle}</span>
                </h1>
                <h2 className="mb-3 text-4xl font-semibold leading-[120%] tracking-normal text-primaryV1 lg:text-5xl xl:text-[52px] min-[1440px]:text-6xl xxl:text-[80px] xxxl:text-[80px]">
                  {activeProduct.title}
                </h2>
                <p className="mb-5 min-h-[60px] text-sm leading-relaxed text-secondaryV1 lg:text-base xl:text-lg xxl:text-xl">
                  {activeProduct.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <Link href={activeProduct.link || "/products"} className="w-fit">
              <BlackButton text="Xem chi tiết sản phẩm" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopHero;
