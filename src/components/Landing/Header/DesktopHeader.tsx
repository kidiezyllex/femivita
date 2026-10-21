"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { DesktopMegaDropdown } from "./DesktopMegaDropdown";
import { HeaderCTA } from "./HeaderCTA";
import { HeaderLogo } from "./HeaderLogo";
import { HEADER_MENUS, NAV_LINKS } from "./types";

const NAV_ITEM_CLASS =
  "flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-3 py-1 font-google-sans text-base leading-[1.6] text-ink transition-colors hover:text-brand xl:px-4";

const MENU_PANEL_ID = "desktop-header-menu";

interface MenuTriggerProps {
  label: string;
  menuId: string;
  isOpen: boolean;
  /** The current page belongs to this menu. */
  isActive?: boolean;
  onToggle: (menuId: string) => void;
}

const MenuTrigger: React.FC<MenuTriggerProps> = ({ label, menuId, isOpen, isActive, onToggle }) => (
  <button
    type="button"
    aria-haspopup="true"
    aria-expanded={isOpen}
    aria-controls={MENU_PANEL_ID}
    onClick={() => onToggle(menuId)}
    className={cn(
      NAV_ITEM_CLASS,
      isActive && "text-brand",
      isOpen && "text-brand-text hover:text-brand-text",
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
    />
  </button>
);

interface DesktopHeaderProps {
  isSolid?: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isSolid = true }) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const pathname = usePathname();
  const cardRef = useRef<HTMLDivElement>(null);

  const isDropdownOpen = openMenuId !== null;
  const closeMenu = () => setOpenMenuId(null);
  const toggleMenu = (id: string) => setOpenMenuId((current) => (current === id ? null : id));

  useEffect(() => {
    if (!isDropdownOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!cardRef.current?.contains(event.target as Node)) closeMenu();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  const showCard = isSolid || isDropdownOpen;

  return (
    <header className="relative z-50 w-full">
      <div className="p-4 xl:px-4">
        <div
          ref={cardRef}
          className={cn(
            "rounded-[8px] transition-[background-color,box-shadow] duration-300",
            showCard
              ? "bg-white shadow-[0_4px_24px_rgba(30,30,30,0.08)]"
              : "bg-transparent shadow-none",
          )}
        >
          <div
            className={cn(
              "mx-4 flex h-[72px] items-center border-b transition-colors duration-300 xl:mx-6",
              isDropdownOpen ? "border-brand-rule/30" : "border-transparent",
            )}
          >
            {/* Logo */}
            <div className="flex h-full w-40 shrink-0 flex-col items-start pb-4 pt-2 xl:w-[200px]">
              <HeaderLogo onClick={closeMenu} />
            </div>

            {/* Navigation Bar 123*/}
            <nav className="flex h-full min-w-0 flex-1 items-center justify-center gap-2 xl:gap-8">
              {/* Product menu trigger */}
              <MenuTrigger
                label="Sản phẩm"
                menuId="products"
                isOpen={openMenuId === "products"}
                onToggle={toggleMenu}
              />

              {/* Links; items with a menuId open their panel instead of navigating */}
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);

                if (link.menuId) {
                  return (
                    <MenuTrigger
                      key={link.href + link.label}
                      label={link.label}
                      menuId={link.menuId}
                      isOpen={openMenuId === link.menuId}
                      isActive={isActive}
                      onToggle={toggleMenu}
                    />
                  );
                }

                return (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(NAV_ITEM_CLASS, isActive && "text-brand")}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Language Switch */}
              <button type="button" aria-label="Ngôn ngữ" className={NAV_ITEM_CLASS}>
                <span>VN</span>
                <Image
                  src="/logos/caret-down-dark.svg"
                  alt=""
                  width={18}
                  height={18}
                  quality={100}
                  draggable={false}
                />
              </button>
            </nav>

            {/* CTA */}
            <div className="flex h-full shrink-0 items-center justify-end xl:w-[200px]">
              <HeaderCTA variant={showCard ? "soft" : "solid"} onClick={closeMenu} />
            </div>
          </div>

          <DesktopMegaDropdown
            id={MENU_PANEL_ID}
            menu={openMenuId ? (HEADER_MENUS[openMenuId] ?? null) : null}
            onClose={closeMenu}
          />
        </div>
      </div>
    </header>
  );
};
