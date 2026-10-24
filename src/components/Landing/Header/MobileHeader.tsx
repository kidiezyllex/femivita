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
import { HeaderBuyButton } from "./HeaderBuyButton";
import { HeaderLogo } from "./HeaderLogo";
import { BUY_MENU, BuyMenuChild, HEADER_MENUS, NAV_LINKS } from "./types";

const SITE_PHONE_DISPLAY = "0914 14 2464";

const ROW_CLASS =
  "flex w-full items-center justify-between gap-4 border-b border-ink/10 py-4 text-left font-google-sans text-lg transition-colors hover:text-brand";

// Panels slide sideways: deeper (direction 1) enters from the right, back (-1) from the left.
const PANEL_VARIANTS = {
  enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%" }),
};

/** Panel ids: a HEADER_MENUS key, "buy" for the "Mua chính hãng" list, or "buy/<item id>" for the sub-list of one of its items. */
const BUY_PANEL_ID = BUY_MENU.id;
const buyItemPanelId = (itemId: string) => `${BUY_PANEL_ID}/${itemId}`;
const parentPanelId = (panelId: string | null) => (panelId?.startsWith(`${BUY_PANEL_ID}/`) ? BUY_PANEL_ID : null);

const BackRow: React.FC<{ label: string; onBack: () => void }> = ({ label, onBack }) => (
  <button
    type="button"
    onClick={onBack}
    aria-label="Quay lại"
    className="flex w-full cursor-pointer items-center gap-2 border-b border-ink/10 py-4 text-left font-google-sans text-lg text-ink transition-colors hover:text-brand"
  >
    <Icon path={mdiChevronLeft} className="size-6 shrink-0" />
    <span>{label}</span>
  </button>
);

/** Channel or distributor link of the buy menu; channels carry the same icon tile as on desktop. */
const BuyChildRow: React.FC<{ child: BuyMenuChild; onNavigate: () => void }> = ({ child, onNavigate }) => {
  const content = (
    <>
      {child.icon && (
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-pink">
          {child.icon.fullColor ? (
            <Image src={child.icon.src} alt="" width={24} height={24} draggable={false} />
          ) : (
            <span
              aria-hidden
              className="size-6 bg-brand"
              style={{
                maskImage: `url(${child.icon.src})`,
                WebkitMaskImage: `url(${child.icon.src})`,
                maskSize: "24px 24px",
                WebkitMaskSize: "24px 24px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
          )}
        </span>
      )}
      <span className="min-w-0 flex-1">{child.label}</span>
    </>
  );
  const className = cn(ROW_CLASS, "justify-start text-ink");

  return child.external ? (
    <a href={child.href} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className={className}>
      {content}
    </a>
  ) : (
    <Link href={child.href} onClick={onNavigate} className={className}>
      {content}
    </Link>
  );
};

interface MobileMenuNavProps {
  /** null shows the main list; otherwise the panel with that id (see BUY_PANEL_ID). */
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
  const isBuyPanel = activeMenuId === BUY_PANEL_ID;
  const buyItem = BUY_MENU.items.find((item) => buyItemPanelId(item.id) === activeMenuId);

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
          key={activeMenuId ?? "main"}
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
              <BackRow label={menu.label} onBack={onBack} />
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
          ) : isBuyPanel ? (
            <>
              <BackRow label={BUY_MENU.label} onBack={onBack} />
              <ul>
                {BUY_MENU.items.map((item) =>
                  item.children ? (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onOpenMenu(buyItemPanelId(item.id))}
                        aria-haspopup="true"
                        className={cn(ROW_CLASS, "cursor-pointer text-ink")}
                      >
                        <span>{item.label}</span>
                        <Icon path={mdiChevronRight} className="size-6 shrink-0" />
                      </button>
                    </li>
                  ) : (
                    <li key={item.id}>
                      <Link href={item.href ?? "#"} onClick={onNavigate} className={cn(ROW_CLASS, "text-ink")}>
                        <span>{item.label}</span>
                        <Icon path={mdiChevronRight} className="size-6 shrink-0" />
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </>
          ) : buyItem?.children ? (
            <>
              <BackRow label={buyItem.label} onBack={onBack} />
              <ul>
                {buyItem.children.map((child) => (
                  <li key={child.id}>
                    <BuyChildRow child={child} onNavigate={onNavigate} />
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
  const goBack = () => {
    setDirection(-1);
    setActiveMenuId(parentPanelId(activeMenuId));
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
              onBack={goBack}
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
                <HeaderBuyButton
                  isOpen={false}
                  onCard={false}
                  onClick={() => openMenu(BUY_PANEL_ID)}
                  className="w-full justify-between"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
