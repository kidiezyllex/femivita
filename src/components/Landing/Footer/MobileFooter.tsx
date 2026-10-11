"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterProps, getFooterNavGroups } from "./types";

export const MobileFooter: React.FC<FooterProps> = ({
  logoUrl = "/images/mobile_logo.png",
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
    <div className="w-full overflow-hidden">
      <div className="max-w-full px-5 pt-10">
        {/* Brand Header: Logo & Slogan */}
        <div className="mb-5 flex flex-col items-start gap-5">
          <Link
            href="/"
            className="relative flex h-[76px] max-h-[76px] flex-shrink-0 cursor-pointer justify-center transition-transform hover:opacity-95"
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
          <p className="break-words text-lg font-normal leading-[140%] text-white/90">{slogan}</p>
        </div>

        {/* Links Section: 2-column flexible grid */}
        <div className="mb-5">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold leading-tight text-[#F9F6EA]">
                  {footerNavGroups[0].title}
                </h4>
                <ul className="flex flex-col">
                  {footerNavGroups[0].links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="block py-2 text-base font-normal leading-snug text-[#D0D0D0] transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold leading-tight text-[#F9F6EA]">
                  {footerNavGroups[2].title}
                </h4>
                <ul className="flex flex-col">
                  {footerNavGroups[2].links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="block py-2 text-base font-normal leading-snug text-[#D0D0D0] transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold leading-tight text-[#F9F6EA]">
                {footerNavGroups[1].title}
              </h4>
              <ul className="flex flex-col">
                {footerNavGroups[1].links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="block py-2 text-base font-normal leading-snug text-[#D0D0D0] transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Company Legal Information */}
        <div className="mb-5 flex flex-col gap-3 break-words text-sm text-white/80">
          <span className="block text-sm font-medium leading-[130%] text-white">
            Công ty chịu trách nhiệm đưa sản phẩm ra thị trường
          </span>
          <h5 className="text-lg font-semibold leading-[150%] text-white">{companyName}</h5>
          <p className="text-sm font-medium leading-[140%]">{businessLicense}</p>
          <p className="text-sm font-normal leading-[140%]">{address}</p>
          <p className="text-sm font-normal leading-[140%]">Điện thoại: {phone}</p>
        </div>

        {/* Bottom copyright & terms row */}
        <div className="mb-5 flex flex-row items-center justify-between gap-3 py-2">
          <span className="text-base font-normal leading-[16px] text-white">{copyright}</span>
          <div className="flex items-center gap-3">
            <Link
              href="#privacy"
              className="cursor-pointer py-1 text-base font-normal leading-[16px] text-[#7A7A7A] transition-colors duration-150 hover:text-neutral-300 hover:underline active:text-white"
            >
              Bảo mật
            </Link>
            <Link
              href="#terms"
              className="cursor-pointer py-1 text-base font-normal leading-[16px] text-[#7A7A7A] transition-colors duration-150 hover:text-neutral-300 hover:underline active:text-white"
            >
              Điều khoản
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileFooter;
