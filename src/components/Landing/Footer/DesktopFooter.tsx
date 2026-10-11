"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterProps, getFooterNavGroups } from "./types";

export const DesktopFooter: React.FC<FooterProps> = ({
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
      <div className="px-8 py-10 lg:px-12 xl:px-16 xxl:px-20">
        {/* Main Footer Content Grid */}
        <div className="flex items-start gap-10 lg:gap-14 xl:gap-20 xxl:gap-[120px]">
          {/* Left Column: Logo & Slogan */}
          <div className="flex w-full max-w-[260px] shrink-0 flex-col items-start gap-8 lg:max-w-[290px] xl:max-w-[320px] xl:gap-10">
            <Link
              href="/"
              className="relative my-7 block h-[76px] max-h-[76px] cursor-pointer transition-transform"
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
            <p className="text-sm font-normal leading-[130%] text-[#D0D0D0] xl:text-base xxl:text-lg xxl:text-xl">
              {slogan}
            </p>
          </div>

          {/* Right Column: Links Grid and Legal Details */}
          <div className="flex w-full min-w-0 flex-col pt-5 lg:pt-8 xl:pt-10">
            {/* Link Columns */}
            <div className="flex flex-wrap justify-between gap-8">
              {footerNavGroups.map((group, idx) => (
                <div key={idx} className="flex min-w-[140px] flex-col gap-3">
                  <h4 className="text-base font-semibold leading-[18px] text-[#F9F6EA] xl:text-lg xxl:text-xl">
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {group.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href}
                          className="inline-block cursor-pointer text-sm font-normal leading-[18px] text-[#D0D0D0] transition-colors duration-200 hover:text-white xl:text-base xxl:text-lg xxl:text-xl"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Company Legal Information */}
            <div className="mt-5 flex flex-col gap-2 border-t border-white/10 py-5">
              <span className="block text-xs font-medium leading-[120%] text-white/90 xl:text-sm xxl:text-base">
                Công ty chịu trách nhiệm đưa sản phẩm ra thị trường
              </span>
              <h5 className="text-base font-semibold leading-[160%] text-white xl:text-lg xxl:text-xl">
                {companyName}
              </h5>
              <p className="text-xs font-medium leading-[140%] text-white/80 xl:text-sm xxl:text-base">
                {businessLicense}
              </p>
              <p className="text-xs font-normal leading-[140%] text-white/80 xl:text-sm xxl:text-base">
                {address}
              </p>
              <p className="text-xs font-normal leading-[140%] text-white/80 xl:text-sm xxl:text-base">
                Điện thoại: {phone}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & terms row */}
        <div className="flex flex-row items-center justify-between gap-3 border-t border-white/10 pt-5">
          <span className="text-sm font-normal leading-[18px] text-white xl:text-base xxl:text-lg xxl:text-xl">
            {copyright}
          </span>
          <div className="flex items-center gap-5">
            <Link
              href="#privacy"
              className="cursor-pointer text-sm font-normal leading-[18px] text-[#7A7A7A] transition-colors duration-200 hover:text-neutral-300 hover:underline xl:text-base xxl:text-lg xxl:text-xl"
            >
              Bảo mật
            </Link>
            <Link
              href="#terms"
              className="cursor-pointer text-sm font-normal leading-[18px] text-[#7A7A7A] transition-colors duration-200 hover:text-neutral-300 hover:underline xl:text-base xxl:text-lg xxl:text-xl"
            >
              Điều khoản
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesktopFooter;
