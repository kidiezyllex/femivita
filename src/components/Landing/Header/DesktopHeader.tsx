"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { HeaderCTA } from "./HeaderCTA";
import { HeaderLogo } from "./HeaderLogo";
import { NAV_LINKS } from "./types";

const NAV_ITEM_CLASS =
  "flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-3 py-1 font-google-sans text-base leading-[1.6] text-ink transition-colors hover:text-brand xl:px-4";

export const DesktopHeader: React.FC = () => {
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
    <header className="relative z-50 w-full">
      <div className="p-4 xl:px-5">
        <div className="flex h-[72px] items-center px-4 xl:px-6">
          {/* Logo */}
          <div className="flex h-full w-40 shrink-0 flex-col items-start pb-4 pt-2 xl:w-[200px]">
            <HeaderLogo onClick={() => setIsDropdownOpen(false)} />
          </div>

          {/* Navigation Bar */}
          <nav className="flex h-full min-w-0 flex-1 items-center justify-center gap-2 xl:gap-8">
            {/* Mega Dropdown Trigger */}
            <div ref={triggerRef}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                // onClick={() => setIsDropdownOpen((prev) => !prev)}
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
                  className={cn(
                    "transition-transform duration-200",
                    isDropdownOpen && "rotate-180",
                  )}
                />
              </button>
            </div>

            {/* Links */}
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setIsDropdownOpen(false)}
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
            <HeaderCTA onClick={() => setIsDropdownOpen(false)} />
          </div>
        </div>
      </div>

      {/* Mega Dropdown Menu */}
      {/* <DesktopMegaDropdown
        ref={dropdownRef}
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      /> */}
    </header>
  );
};
