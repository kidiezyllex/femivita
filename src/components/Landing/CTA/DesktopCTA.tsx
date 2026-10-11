"use client";

import Image from "next/image";
import React from "react";
import { CTAProps, DEFAULT_CTA_DATA } from "./types";
import { useCTAForm } from "./useCTAForm";

export const DesktopCTA: React.FC<CTAProps> = ({ data = DEFAULT_CTA_DATA, onSubmitSuccess }) => {
  const { name, setName, phone, setPhone, isSubmitting, handleSubmit } = useCTAForm(
    "Desktop CTA Form",
    onSubmitSuccess,
  );

  return (
    <div className="relative flex min-h-[450px] w-full items-center overflow-hidden p-12 lg:p-16 xl:p-20 xxl:p-[120px]">
      {/* Background Image using Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage || "/images/cta-bg.webp"}
          alt="CTA Background"
          fill
          sizes="100vw"
          className="object-cover"
          draggable={false}
          priority
        />
        {/* Dark overlay for text readability against bright background images */}
        <div className="pointer-events-none absolute inset-0 bg-[#414141]/20" />
      </div>

      {/* Content Container (Constrained on ultrawide screens) */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1920px] grid-cols-1 items-center gap-10 lg:grid-cols-2 xl:gap-12">
        {/* Left Column: Text */}
        <div className="flex max-w-[620px] flex-col text-white">
          <h2 className="text-3xl font-semibold leading-[130%] tracking-normal text-white lg:text-4xl xl:text-[44px] xxl:text-[48px]">
            {data.title}
          </h2>
          <p className="mt-2 text-sm font-normal leading-[160%] tracking-normal text-white/80 lg:text-base xl:mt-3">
            {data.description}
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[600px] flex-col gap-2 lg:ml-auto"
          >
            {/* Row 1: Name Input */}
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              required
              disabled={isSubmitting}
              className="w-full border-0 bg-white px-5 py-4 text-base text-primaryV1 transition-colors duration-300 placeholder:text-base placeholder:font-normal placeholder:leading-[160%] placeholder:tracking-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1 xl:px-5 xl:py-5 xl:placeholder:text-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Row 2: Phone Input and Submit Button */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="tel"
                placeholder="Số điện thoại của bạn"
                required
                disabled={isSubmitting}
                className="w-full border-0 bg-white px-5 py-4 text-base text-primaryV1 transition-colors duration-300 placeholder:text-base placeholder:font-normal placeholder:leading-[160%] placeholder:tracking-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1 xl:px-5 xl:py-5 xl:placeholder:text-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full shrink-0 cursor-pointer select-none items-center justify-between gap-2 border border-primaryV1 bg-white px-5 py-4 text-center align-middle text-base font-semibold leading-none tracking-normal text-primaryV1 transition-colors hover:bg-neutral-50 focus:outline-none disabled:opacity-50 xl:px-5 xl:py-5 xl:text-xl"
              >
                <span>{isSubmitting ? "Đang gửi..." : data.buttonText || "Nhận tư vấn ngay"}</span>
                <Image
                  src="/logos/PhoneCall.png"
                  alt="PhoneCall"
                  height={20}
                  width={20}
                  className="h-5 w-5 shrink-0"
                  draggable={false}
                  priority
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DesktopCTA;
