"use client";

import { useOptionalLanding } from "@/context/LandingContext";
import { useIsPortraitViewport } from "@/hooks/useViewportOrientation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DROPDOWN_PRODUCTS } from "./types";

interface DesktopMegaDropdownProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const DesktopMegaDropdown = React.forwardRef<HTMLDivElement, DesktopMegaDropdownProps>(
  ({ isOpen, onClose }, ref) => {
    const landing = useOptionalLanding();
    const dropdownProducts = landing?.landingData?.header?.dropdownProducts?.length
      ? landing.landingData.header.dropdownProducts
      : DROPDOWN_PRODUCTS;
    const isPortrait = useIsPortraitViewport();
    const dropdownHeightClass = isPortrait ? "h-[600px]" : "h-[calc(100vh-110px)]";

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute left-0 top-full z-50 ${dropdownHeightClass} w-full overflow-hidden border-b border-t border-primaryV1 bg-creamBackgroundV1 shadow-xl`}
          >
            <div className="grid h-full w-full grid-cols-1 items-stretch md:grid-cols-2">
              {/* Left Column: Slogan Title & Philosophy */}
              <div className="flex flex-col justify-center overflow-y-auto border-b border-primaryV1 px-5 py-8 md:border-b-0 md:border-r md:px-10 md:py-12 lg:p-12 xl:p-16 xxl:p-20">
                <h2 className="mb-3 text-3xl font-semibold leading-[120%] tracking-normal text-primaryV1 md:text-4xl lg:text-5xl xl:text-[64px] xxl:text-[72px]">
                  <span className="block pb-1">TRẺ HÓA,</span>
                  <span className="block pb-1">TÁI TẠO,</span>
                  <span className="block">BẢO VỆ.</span>
                </h2>
                <p className="mb-2 text-base font-medium leading-[160%] text-secondaryV1 md:text-lg lg:text-[22px]">
                  &quot;Tôn trọng vẻ đẹp tự nhiên&quot;
                </p>
                <p className="max-w-md text-sm font-normal leading-[160%] text-secondaryV1 md:text-base lg:text-lg xl:text-xl xxl:text-2xl">
                  Với Musase, tôn trọng vẻ đẹp tự nhiên là động lực cho mọi hoạt động phát triển của
                  thương hiệu.
                </p>
              </div>

              {/* Right Column: Featured Products List */}
              <div className="flex w-full flex-col gap-3 overflow-y-auto p-4 lg:pr-12 xl:pr-16 xxl:pr-20">
                {dropdownProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    onClick={onClose}
                    className="group flex cursor-pointer items-start gap-3 rounded-lg"
                  >
                    <div className="h- relative flex w-20 shrink-0 items-center justify-center overflow-hidden bg-[#F8F7F0] sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36">
                      {product.badge && (
                        <div className="absolute left-1.5 top-1.5 z-10 border border-primaryV1 bg-creamBackgroundV1 px-2 py-1 text-[10px] font-semibold leading-none text-primaryV1 sm:left-2 sm:top-2 sm:px-3 sm:py-2 sm:text-xs">
                          {product.badge}
                        </div>
                      )}
                      <div className="relative h-full w-full">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 1024px) 120px, 160px"
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          draggable={false}
                          quality={100}
                        />
                      </div>
                    </div>

                    <div className="flex min-h-[80px] flex-1 flex-col justify-center text-left">
                      <h4 className="mb-1 text-base font-bold leading-[130%] text-primaryV1 transition-colors group-hover:text-supportV1 sm:text-lg md:text-xl xl:text-2xl">
                        {product.title}
                      </h4>
                      <p className="mb-1.5 line-clamp-2 text-xs font-normal leading-[150%] text-secondaryV1 sm:text-sm lg:text-base">
                        {product.description}
                      </p>
                      <div className="flex items-baseline gap-3">
                        <span className="text-base font-bold text-supportV1 sm:text-lg md:text-xl">
                          {product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-xs font-normal text-[#C9C7B1] line-through sm:text-sm md:text-base">
                            {product.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

DesktopMegaDropdown.displayName = "DesktopMegaDropdown";
