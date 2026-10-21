"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HeaderMenu } from "./types";

interface DesktopMegaDropdownProps {
  id: string;
  /** Menu to show; null closes the panel. */
  menu: HeaderMenu | null;
  onClose?: () => void;
}

/** Menu that unfolds inside the header card (Figma: 600px card = 72px nav row + 528px panel). */
export const DesktopMegaDropdown: React.FC<DesktopMegaDropdownProps> = ({ id, menu, onClose }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false}>
      {menu && (
        <motion.div
          id={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 528, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <motion.div
            key={menu.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="grid h-[528px] grid-cols-12 gap-x-4 px-4 py-10 xl:px-6"
          >
            <nav
              aria-label={menu.label}
              className="col-span-5 flex flex-col border-r border-brand-rule/30 p-10 xl:col-span-4"
            >
              {menu.links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "group flex items-center border-b border-brand-rule/30 py-4 font-google-sans text-base leading-[1.6] transition-colors hover:text-brand-text",
                      isActive ? "text-brand-text" : "text-black",
                    )}
                  >
                    <span className="min-w-0 flex-1">{link.label}</span>
                    <Image
                      src="/logos/caret-right-dark.svg"
                      alt=""
                      width={24}
                      height={24}
                      draggable={false}
                      className="-mr-[3px] ml-8 shrink-0 -translate-x-2 opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="col-span-5 col-start-8 px-4 xl:col-span-4 xl:col-start-9">
              <div className="relative h-full overflow-hidden rounded-[20px] bg-[#FAF9FF]">
                <Image
                  src={menu.image.src}
                  alt={menu.image.alt}
                  fill
                  quality={100}
                  sizes="(min-width: 1280px) 400px, 320px"
                  draggable={false}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
