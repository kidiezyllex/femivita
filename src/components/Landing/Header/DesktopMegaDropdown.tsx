"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BuyMenuChild, BuyMenuImage, BuyMenuItem, HeaderBuyMenu, HeaderMenu } from "./types";

interface DesktopMegaDropdownProps {
  id: string;
  /** Menu to show; null closes the panel. */
  menu: HeaderMenu | HeaderBuyMenu | null;
  onClose?: () => void;
}

const ROW_BORDER = "border-b border-brand-rule/30";

const Caret: React.FC<{ visible?: boolean }> = ({ visible = false }) => (
  <Image
    src="/logos/caret-right-dark.svg"
    alt=""
    width={24}
    height={24}
    draggable={false}
    className={cn(
      "-mr-[3px] shrink-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100",
      visible ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0",
    )}
  />
);

/** Picture column, always square. A `width`/`height` picture is an oversized crop placed by its own classes. */
const MenuPicture: React.FC<{ image: BuyMenuImage }> = ({ image }) => (
  <div
    className={cn(
      // Square, as wide as the column but never taller than the 448px of the panel; pinned to the right.
      "relative ml-auto aspect-square w-[min(100%,448px)] overflow-hidden rounded-[20px] bg-[#FAF9FF]",
      image.bordered && "border border-brand-rule/30",
    )}
  >
    {image.width && image.height ? (
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        // Crops are small webp files already: served as they are, because the AVIF re-encode (even at q=100) softens the small print.
        unoptimized
        draggable={false}
        className={image.className}
      />
    ) : (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        quality={100}
        // About twice the displayed width (max 448px) so the picture stays sharp on high-DPI screens; see docs/IMAGE-SHARPNESS.md.
        sizes="900px"
        draggable={false}
        className="object-cover"
      />
    )}
  </div>
);

/** Flat menu: one list of links and a picture; a link with its own picture swaps it in while hovered or focused. */
const FlatMenuBody: React.FC<{ menu: HeaderMenu; onClose?: () => void }> = ({ menu, onClose }) => {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const picture = menu.links.find((link) => link.href === activeHref)?.image ?? menu.image;

  return (
    <>
      <nav
        aria-label={menu.label}
        className="col-span-5 flex flex-col border-r border-brand-rule/30 p-10 xl:col-span-4"
        onMouseLeave={() => setActiveHref(null)}
        onBlur={() => setActiveHref(null)}
      >
        {menu.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            onMouseEnter={() => setActiveHref(link.href)}
            onFocus={() => setActiveHref(link.href)}
            className={cn(
              "group flex items-center py-4 font-google-sans text-base leading-[1.6] transition-colors hover:text-brand-text",
              ROW_BORDER,
              pathname === link.href ? "text-brand-text" : "text-black",
            )}
          >
            <span className="min-w-0 flex-1">{link.label}</span>
            <Caret />
          </Link>
        ))}
      </nav>

      <div className="col-span-5 col-start-8 px-4 xl:col-span-4 xl:col-start-9">
        <MenuPicture key={picture.src} image={picture} />
      </div>
    </>
  );
};

const ChildRow: React.FC<{ child: BuyMenuChild; onClose?: () => void }> = ({ child, onClose }) => {
  const content = (
    <>
      {child.icon && (
        <span className="flex size-12 shrink-0 items-center justify-center rounded-[9.6px] bg-brand-pink">
          {child.icon.fullColor ? (
            <Image src={child.icon.src} alt="" width={29} height={29} draggable={false} />
          ) : (
            <span
              aria-hidden
              className="size-7 bg-brand"
              style={{
                maskImage: `url(${child.icon.src})`,
                WebkitMaskImage: `url(${child.icon.src})`,
                maskSize: "28px 28px",
                WebkitMaskSize: "28px 28px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
          )}
        </span>
      )}
      <span className="min-w-0 flex-1">{child.label}</span>
      <Caret />
    </>
  );
  const className = cn(
    "group flex items-center gap-4 py-3 font-google-sans text-base leading-[1.6] text-[#3D3935] transition-colors hover:text-brand-text",
    ROW_BORDER,
    child.icon && "min-h-[66px]",
  );

  return child.external ? (
    <a
      href={child.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClose}
      className={className}
    >
      {content}
    </a>
  ) : (
    <Link href={child.href} onClick={onClose} className={className}>
      {content}
    </Link>
  );
};

/**
 * "Mua chính hãng": the left list opens a sub-list in the middle column while an item is hovered or focused
 * (the other items fade to 60%), and an item can swap the picture on the right.
 */
const BuyMenuBody: React.FC<{ menu: HeaderBuyMenu; onClose?: () => void }> = ({
  menu,
  onClose,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active: BuyMenuItem | undefined = menu.items.find(
    (item) => item.id === activeId && item.children,
  );
  const picture = active?.image ?? menu.image;

  return (
    <>
      <nav
        aria-label={menu.label}
        className="col-span-4 flex flex-col border-r border-brand-rule/30 p-8 pt-4"
      >
        {menu.items.map((item) => {
          const isActive = item.id === active?.id;
          const rowClass = cn(
            "group flex w-full cursor-pointer items-center py-5 text-left font-google-sans text-base leading-[1.6] transition-colors hover:text-brand-text",
            ROW_BORDER,
            active && !isActive ? "text-black/60" : "text-[#3D3935]",
          );

          if (!item.children) {
            return (
              <Link key={item.id} href={item.href ?? "#"} onClick={onClose} className={rowClass}>
                <span className="min-w-0 flex-1">{item.label}</span>
                <Caret />
              </Link>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              aria-expanded={isActive}
              onMouseEnter={() => setActiveId(item.id)}
              onFocus={() => setActiveId(item.id)}
              onClick={() => setActiveId(item.id)}
              className={rowClass}
            >
              <span className="min-w-0 flex-1">{item.label}</span>
              <Caret visible={isActive} />
            </button>
          );
        })}
      </nav>

      {active?.children && (
        <div
          key={active.id}
          data-lenis-prevent
          className="col-span-4 col-start-5 flex flex-col p-8 pt-4"
        >
          {active.children.map((child) => (
            <ChildRow key={child.id} child={child} onClose={onClose} />
          ))}
        </div>
      )}

      <div className="col-span-4 col-start-9 px-4">
        <MenuPicture key={picture.src} image={picture} />
      </div>
    </>
  );
};

/** Menu that unfolds inside the header card (Figma: 600px card = 72px nav row + 528px panel). */
export const DesktopMegaDropdown: React.FC<DesktopMegaDropdownProps> = ({ id, menu, onClose }) => (
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
          {"items" in menu ? (
            <BuyMenuBody menu={menu} onClose={onClose} />
          ) : (
            <FlatMenuBody menu={menu} onClose={onClose} />
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
