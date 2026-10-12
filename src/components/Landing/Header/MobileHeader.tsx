"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { cn } from "@/lib/utils";
import { mdiChevronRight, mdiClose } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HeaderCTA } from "./HeaderCTA";
import { HeaderLogo } from "./HeaderLogo";
import { DROPDOWN_PRODUCTS, NAV_LINKS } from "./types";

export const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const pathname = usePathname();

  const handleClose = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header className="relative z-50 flex h-[90px] w-full items-center justify-between overflow-x-hidden px-3">
      {/* Logo */}
      <HeaderLogo onClick={handleClose} className="h-[34px] w-28" imageClassName="w-[95px]" />

      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Đóng menu" : "Mở menu"}
        aria-expanded={isOpen}
        className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-brand-light transition-colors hover:bg-brand focus:outline-none"
      >
        {isOpen ? (
          <Icon path={mdiClose} className="size-4 text-white" />
        ) : (
          <Image src="/logos/menu.svg" alt="" width={16} height={16} quality={100} draggable={false} />
        )}
      </button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 top-[90px] z-40 bg-black/40 backdrop-blur-sm"
            />

            {/* Slide Down Menu Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 top-[90px] z-50 flex flex-col justify-between overflow-y-auto bg-white shadow-2xl"
            >
              <div className="p-4">
                {/* Accordion: Sản phẩm */}
                <div className="border-b border-ink/10">
                  <button
                    type="button"
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    aria-expanded={isProductsOpen}
                    className="flex w-full cursor-pointer items-center justify-between pb-4 font-google-sans text-lg text-ink"
                  >
                    <span>Sản phẩm</span>
                    <Image
                      src="/logos/caret-down.svg"
                      alt=""
                      width={18}
                      height={18}
                      quality={100}
                      draggable={false}
                      className={cn("transition-transform duration-200", isProductsOpen && "rotate-180")}
                    />
                  </button>

                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-4 overflow-hidden pb-4"
                      >
                        {DROPDOWN_PRODUCTS.map((prod) => (
                          <Link
                            key={prod.id}
                            href={prod.href}
                            onClick={handleClose}
                            className="relative flex items-start gap-3 pr-8 transition-all active:scale-[0.99]"
                          >
                            <div className="relative h-20 w-20 shrink-0 overflow-hidden">
                              <Image
                                src={prod.image}
                                alt={prod.title}
                                className="object-contain"
                                height="400"
                                width="400"
                                quality={100}
                                draggable={false}
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate font-google-sans text-lg text-ink">
                                {prod.title}
                              </p>
                              <div className="mt-0.5 flex items-baseline gap-2">
                                <span className="text-base font-semibold text-brand">
                                  {prod.price}
                                </span>
                                {prod.oldPrice && (
                                  <span className="text-sm text-neutral-400 line-through">
                                    {prod.oldPrice}
                                  </span>
                                )}
                              </div>
                            </div>
                            <Icon
                              path={mdiChevronRight}
                              className="pointer-events-none absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-ink"
                            />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Navigation Links */}
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleClose}
                      className={cn(
                        "block border-b border-ink/10 py-4 font-google-sans text-lg transition-colors hover:text-brand",
                        isActive ? "text-brand" : "text-ink",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Language & CTA inside Menu */}
              <div className="flex items-center justify-between border-t border-ink/10 p-5">
                <span className="font-google-sans text-base text-ink">VN</span>
                <HeaderCTA onClick={handleClose} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
