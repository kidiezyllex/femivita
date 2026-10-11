"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterProps, getFooterNavGroups } from "./types";

export const TabletFooter: React.FC<FooterProps> = ({
  logoUrl = "/images/large_logo.png",
  slogan = "Tôn trọng vẻ đẹp tự nhiên là động lực cho mọi hoạt động phát triển của thương hiệu",
  companyName = "CÔNG TY TNHH CERY SKINLAB",
  businessLicense = "GCNĐKKD số 0111259343 do Phòng đăng ký kinh doanh - Sở tài chính thành phố Hà Nội cấp lần đầu ngày 22/10/2025.",
  address = "Tầng 9 Tòa Minori, Số 67A Trương Định, Phường Tương Mai, Quận Hoàng Mai, Hà Nội",
  phone = "038 324 9898",
  copyright = "@ 2026 Musase",
  socialLinks,
}) => {
  const footerNavGroups = getFooterNavGroups(socialLinks);

  return (
    <div className="w-full">
      <div className="mx-auto p-8 pt-16">
        {/* Top Section: Logo, Slogan and Links in a 2-column or structured layout */}
        <div className="grid grid-cols-12 items-start gap-5">
          {/* Brand Info (5 cols) */}
          <div className="col-span-5 flex flex-col items-start gap-3">
            <Link
              href="/"
              className="relative block h-[76px] max-h-[76px] cursor-pointer transition-transform"
            >
              <Image
                src="/images/large_logo.png"
                alt="Musase"
                height={301}
                width={1205}
                className="h-full w-auto object-contain"
                quality={100}
                draggable={false}
                priority
              />
            </Link>
            <p className="text-sm font-normal leading-[140%] text-white/90">{slogan}</p>
          </div>

          {/* Nav Links (8 cols) */}
          <div className="col-span-7 flex flex-row justify-end gap-5">
            <div className="flex w-fit flex-row flex-wrap items-start gap-5">
              {footerNavGroups.map((group, idx) => (
                <div key={idx} className="flex w-fit shrink-0 flex-col gap-3">
                  <h4 className="text-base font-semibold leading-tight text-[#F9F6EA]">
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {group.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href}
                          className="block cursor-pointer py-1 text-sm font-normal leading-snug text-[#D0D0D0] transition-colors duration-200 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Legal Information */}
        <div className="mt-5 flex flex-col gap-2 border-t border-white/10 py-5 text-sm">
          <span className="block font-medium leading-[130%] text-white/90">
            Công ty chịu trách nhiệm đưa sản phẩm ra thị trường
          </span>
          <h5 className="text-base font-semibold leading-[150%] text-white">{companyName}</h5>
          <p className="font-medium leading-[140%] text-white/80">{businessLicense}</p>
          <p className="font-normal leading-[140%] text-white/80">{address}</p>
          <p className="font-normal leading-[140%] text-white/80">Điện thoại: {phone}</p>
        </div>

        {/* Bottom copyright & terms row */}
        <div className="flex flex-row items-center justify-between gap-3 border-t border-white/10 pt-5">
          <span className="text-sm font-normal leading-[18px] text-white">{copyright}</span>
          <div className="flex items-center gap-5">
            <Link
              href="#privacy"
              className="cursor-pointer text-sm font-normal leading-[18px] text-[#7A7A7A] transition-colors duration-200 hover:text-neutral-300 hover:underline"
            >
              Bảo mật
            </Link>
            <Link
              href="#terms"
              className="cursor-pointer text-sm font-normal leading-[18px] text-[#7A7A7A] transition-colors duration-200 hover:text-neutral-300 hover:underline"
            >
              Điều khoản
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabletFooter;
