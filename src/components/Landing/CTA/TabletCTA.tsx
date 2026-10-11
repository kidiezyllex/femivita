"use client";

import Image from "next/image";
import React from "react";
import { CTAProps, DEFAULT_CTA_DATA } from "./types";
import { useCTAForm } from "./useCTAForm";

export const TabletCTA: React.FC<CTAProps> = ({ data = DEFAULT_CTA_DATA, onSubmitSuccess }) => {
  const { name, setName, phone, setPhone, isSubmitting, handleSubmit } = useCTAForm(
    "Tablet CTA Form",
    onSubmitSuccess,
  );

  return (
    <div className="relative flex min-h-[380px] w-full items-center overflow-hidden px-8 py-16">
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
        <div className="pointer-events-none absolute inset-0 bg-[#414141]/25" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex w-full flex-col gap-5">
        {/* Text Section */}
        <div className="flex max-w-[700px] flex-col text-white">
          <h2 className="text-3xl font-semibold leading-[130%] tracking-normal text-white">
            {data.title}
          </h2>
          <p className="mt-2 text-base font-normal leading-[160%] tracking-normal text-white/90">
            {data.description}
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
            {/* Row 1: Name Input */}
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              required
              disabled={isSubmitting}
              className="w-full border-0 bg-white px-5 py-4 text-base text-primaryV1 transition-colors duration-300 placeholder:text-base placeholder:font-normal placeholder:leading-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Row 2: Phone Input and Submit Button */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="tel"
                placeholder="Số điện thoại của bạn"
                required
                disabled={isSubmitting}
                className="w-full border-0 bg-white px-5 py-4 text-base text-primaryV1 transition-colors duration-300 placeholder:text-base placeholder:font-normal placeholder:leading-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full shrink-0 cursor-pointer select-none items-center justify-center gap-2 bg-white px-4 py-4 text-center align-middle text-base font-semibold leading-tight text-primaryV1 transition-colors hover:bg-neutral-50 focus:outline-none active:bg-neutral-100 disabled:opacity-50"
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
export default TabletCTA;
