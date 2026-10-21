"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { cn } from "@/lib/utils";
import { mdiClose, mdiMapMarkerOutline, mdiPhoneOutline } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { DEFAULT_FOOTER_CONTENT } from "../Footer/types";
import { HeaderCTA } from "./HeaderCTA";
import { HeaderLogo } from "./HeaderLogo";
import { HEADER_MENUS, NAV_LINKS } from "./types";

const SITE_PHONE_DISPLAY = "0914 14 2464";

interface MenuAccordionProps {
  menuId: string;
  label: string;
  isOpen: boolean;
  isActive?: boolean;
  onToggle: (menuId: string) => void;
  onNavigate: () => void;
}

/** Accordion for one HEADER_MENUS entry: the same links as the desktop panel, without its picture. */
const MenuAccordion: React.FC<MenuAccordionProps> = ({
  menuId,
  label,
  isOpen,
  isActive,
  onToggle,
  onNavigate,
}) => {
  const menu = HEADER_MENUS[menuId];
  if (!menu) return null;

  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => onToggle(menuId)}
        aria-expanded={isOpen}
        aria-controls={`mobile-menu-${menuId}`}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between py-4 font-google-sans text-lg transition-colors",
          isOpen ? "text-brand-text" : isActive ? "text-brand" : "text-ink",
        )}
      >
        <span>{label}</span>
        <Image
          src={isOpen ? "/logos/caret-down-brand.svg" : "/logos/caret-down-dark.svg"}
          alt=""
          width={18}
          height={18}
          quality={100}
          draggable={false}
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`mobile-menu-${menuId}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="pb-2 pl-4">
              {menu.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="block border-t border-brand-rule/30 py-3 font-google-sans text-base text-black transition-colors hover:text-brand-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // The bar stays white until the drawer has finished folding away.
  const [isClosing, setIsClosing] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const pathname = usePathname();

  const handleClose = () => {
    if (isOpen) setIsClosing(true);
    setIsOpen(false);
    setOpenMenuId(null);
  };
  const toggleMenu = (id: string) => setOpenMenuId((current) => (current === id ? null : id));

  return (
    <header
      className={cn(
        "relative z-50 flex h-[90px] w-full items-center justify-between px-3",
        isOpen || isClosing ? "bg-white" : "bg-transparent",
      )}
    >
      {/* Logo */}
      <HeaderLogo onClick={handleClose} className="h-[34px] w-28" imageClassName="w-[95px]" />

      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
        aria-label={isOpen ? "Đóng menu" : "Mở menu"}
        aria-expanded={isOpen}
        className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-brand-light transition-colors hover:bg-brand focus:outline-none"
      >
        {isOpen ? (
          <Icon path={mdiClose} className="size-5 text-white" />
        ) : (
          <Image
            src="/logos/menu.svg"
            alt=""
            width={20}
            height={20}
            quality={100}
            draggable={false}
          />
        )}
      </button>

      <AnimatePresence onExitComplete={() => setIsClosing(false)}>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={handleClose}
            className="fixed inset-0 top-[90px] z-40 bg-black/40"
          />
        )}
        {isOpen && (
          <motion.div
            key="drawer"
            data-lenis-prevent
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 top-[90px] z-50 flex flex-col justify-between overflow-y-auto overscroll-contain bg-white"
          >
            <div className="p-4">
              <MenuAccordion
                menuId="products"
                label="Sản phẩm"
                isOpen={openMenuId === "products"}
                onToggle={toggleMenu}
                onNavigate={handleClose}
              />

              {/* Other links; items with a menuId are accordions like on desktop */}
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);

                if (link.menuId) {
                  return (
                    <MenuAccordion
                      key={link.href + link.label}
                      menuId={link.menuId}
                      label={link.label}
                      isOpen={openMenuId === link.menuId}
                      isActive={isActive}
                      onToggle={toggleMenu}
                      onNavigate={handleClose}
                    />
                  );
                }

                return (
                  <Link
                    key={link.href + link.label}
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

            {/* Contact info and CTA at the bottom of the menu */}
            <div className="flex flex-col gap-4 border-t border-ink/10 p-4">
              <ul className="flex flex-col gap-4 font-google-sans text-base leading-[1.5] text-ink-muted">
                <li>
                  <a
                    href={DEFAULT_FOOTER_CONTENT.orderPhoneHref}
                    className="flex items-center gap-3 transition-colors hover:text-brand"
                  >
                    <Icon size={0.8} path={mdiPhoneOutline} className="shrink-0" />
                    <span>{SITE_PHONE_DISPLAY}</span>
                  </a>
                </li>
                {DEFAULT_FOOTER_CONTENT.offices.map((office) => (
                  <li key={office.label} className="flex items-start gap-3">
                    <Icon size={1} path={mdiMapMarkerOutline} className="mt-0.5 shrink-0" />
                    <span>
                      {office.label}: {office.address}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center border-t border-ink/10 pt-4">
                <HeaderCTA onClick={handleClose} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
