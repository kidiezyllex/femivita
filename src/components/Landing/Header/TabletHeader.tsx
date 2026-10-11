"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { TabletMegaDropdown } from "./TabletMegaDropdown";
import { NAV_LINKS } from "./types";

const NAV_ITEM_CLASS =
  "flex cursor-pointer items-center justify-center gap-1 whitespace-nowrap px-2 py-1 font-google-sans text-sm leading-[1.6] text-ink transition-colors hover:text-brand";

export const TabletHeader: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-50 flex h-[60px] w-full items-center justify-between bg-white px-5 md:px-8">
      {/* Logo */}
      <HeaderLogo
        onClick={() => setIsDropdownOpen(false)}
        className="h-[34px] w-auto justify-start"
      />

      {/* Navigation */}
      <nav className="flex items-center gap-1">
        {/* Dropdown Menu Trigger */}
        <div ref={triggerRef}>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className={cn(NAV_ITEM_CLASS, isDropdownOpen && "text-brand")}
          >
            <span>Sản phẩm</span>
            <Image
              src="/logos/caret-down.svg"
              alt=""
              width={18}
              height={18}
              quality={100}
              draggable={false}
              className={cn("transition-transform duration-200", isDropdownOpen && "rotate-180")}
            />
          </button>
        </div>

        {/* Other links */}
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsDropdownOpen(false)}
              className={cn(NAV_ITEM_CLASS, isActive && "text-brand")}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Language switch */}
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

      {/* Mega Dropdown */}
      <TabletMegaDropdown
        ref={dropdownRef}
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      />
    </header>
  );
};
