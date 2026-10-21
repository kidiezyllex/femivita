"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { cn } from "@/lib/utils";
import { mdiChevronLeft, mdiChevronRight, mdiClose, mdiMapMarkerOutline, mdiPhoneOutline } from "@mdi/js";
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

const ROW_CLASS =
  "flex w-full items-center justify-between gap-4 border-b border-ink/10 py-4 text-left font-google-sans text-lg transition-colors hover:text-brand";

// Panels slide sideways: deeper (direction 1) enters from the right, back (-1) from the left.
const PANEL_VARIANTS = {
  enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%" }),
};

interface MobileMenuNavProps {
  /** null shows the main list; otherwise the sub-list of that HEADER_MENUS entry. */
  activeMenuId: string | null;
  direction: number;
  onOpenMenu: (menuId: string) => void;
  onBack: () => void;
  onNavigate: () => void;
}

/** Main list with a right arrow on items that have a menu; the arrow slides to a page with that menu's links. */
const MobileMenuNav: React.FC<MobileMenuNavProps> = ({
  activeMenuId,
  direction,
  onOpenMenu,
  onBack,
  onNavigate,
}) => {
  const pathname = usePathname();
  const menu = activeMenuId ? HEADER_MENUS[activeMenuId] : null;

  const menuRow = (menuId: string, label: string, isActive?: boolean) => (
    <li key={menuId}>
      <button
        type="button"
        onClick={() => onOpenMenu(menuId)}
        aria-haspopup="true"
        className={cn(ROW_CLASS, "cursor-pointer", isActive ? "text-brand" : "text-ink")}
      >
        <span>{label}</span>
        <Icon path={mdiChevronRight} className="size-6 shrink-0" />
      </button>
    </li>
  );

  return (
    <div className="relative min-h-[300px] flex-1 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={menu ? menu.id : "main"}
          custom={direction}
          variants={PANEL_VARIANTS}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 overflow-y-auto overscroll-contain bg-white p-4 pt-0"
        >
          {menu ? (
            <>
              <button
                type="button"
                onClick={onBack}
                aria-label="Quay lại"
                className="flex w-full cursor-pointer items-center gap-2 border-b border-ink/10 py-4 text-left font-google-sans text-lg text-ink transition-colors hover:text-brand"
              >
                <Icon path={mdiChevronLeft} className="size-6 shrink-0" />
                <span>{menu.label}</span>
              </button>
              <ul>
                {menu.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className={cn(ROW_CLASS, pathname === link.href ? "text-brand" : "text-ink")}
                    >
                      <span>{link.label}</span>
                      <Icon path={mdiChevronRight} className="size-6 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul>
              {menuRow("products", "Sản phẩm")}
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);

                if (link.menuId) return menuRow(link.menuId, link.label, isActive);

                return (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className={cn(ROW_CLASS, isActive ? "text-brand" : "text-ink")}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // The bar stays white until the drawer has finished folding away.
  const [isClosing, setIsClosing] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);

  const handleClose = () => {
    if (isOpen) setIsClosing(true);
    setIsOpen(false);
    setActiveMenuId(null);
  };
  const openMenu = (id: string) => {
    setDirection(1);
    setActiveMenuId(id);
  };
  const backToMain = () => {
    setDirection(-1);
    setActiveMenuId(null);
  };

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
            <MobileMenuNav
              activeMenuId={activeMenuId}
              direction={direction}
              onOpenMenu={openMenu}
              onBack={backToMain}
              onNavigate={handleClose}
            />

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

              <div className="border-t border-ink/10 pt-4">
                <HeaderCTA onClick={handleClose} className="w-full justify-between" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
