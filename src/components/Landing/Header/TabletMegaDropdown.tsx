"use client";

import { useOptionalLanding } from "@/context/LandingContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DROPDOWN_PRODUCTS } from "./types";

interface TabletMegaDropdownProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const TabletMegaDropdown = React.forwardRef<HTMLDivElement, TabletMegaDropdownProps>(
  ({ isOpen, onClose }, ref) => {
    const landing = useOptionalLanding();
    const dropdownProducts = landing?.landingData?.header?.dropdownProducts?.length
      ? landing.landingData.header.dropdownProducts
      : DROPDOWN_PRODUCTS;

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full z-50 h-[calc(100vh-110px)] w-full overflow-hidden border-b border-t border-primaryV1 bg-creamBackgroundV1 shadow-xl"
          >
            <div className="grid h-full w-full grid-cols-2 items-stretch">
              {/* Left Column: Slogan Title & Philosophy */}
              <div className="flex flex-col justify-center overflow-y-auto border-r border-primaryV1 px-4">
                <h2 className="mb-3 text-4xl font-semibold leading-[120%] tracking-normal text-primaryV1">
                  <span className="block pb-1">TRẺ HÓA,</span>
                  <span className="block pb-1">TÁI TẠO,</span>
                  <span className="block">BẢO VỆ.</span>
                </h2>
                <p className="mb-2 text-lg font-medium leading-[160%] text-secondaryV1">
                  &quot;Tôn trọng vẻ đẹp tự nhiên&quot;
                </p>
                <p className="max-w-md text-base font-normal leading-[160%] text-secondaryV1">
                  Với Musase, tôn trọng vẻ đẹp tự nhiên là động lực cho mọi hoạt động phát triển của
                  thương hiệu.
                </p>
              </div>

              {/* Right Column: Featured Products List */}
              <div className="flex w-full flex-col gap-4 overflow-y-auto p-4 pr-8">
                {dropdownProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    onClick={onClose}
                    className="group flex cursor-pointer items-start gap-3 rounded-lg"
                  >
                    <div className="relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden bg-[#F8F7F0]">
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
                          sizes="120px"
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          draggable={false}
                          quality={100}
                        />
                      </div>
                    </div>

                    <div className="flex min-h-[80px] flex-1 flex-col justify-center text-left">
                      <h4 className="mb-1 text-xl font-bold leading-[130%] text-primaryV1 transition-colors group-hover:text-supportV1">
                        {product.title}
                      </h4>
                      <p className="mb-1.5 line-clamp-2 text-sm font-normal leading-[150%] text-secondaryV1">
                        {product.description}
                      </p>
                      <div className="flex items-baseline gap-3">
                        <span className="text-xl font-bold text-supportV1">{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-base font-normal text-[#C9C7B1] line-through">
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

TabletMegaDropdown.displayName = "TabletMegaDropdown";
