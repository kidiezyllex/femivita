"use client";

import Image from "next/image";
import React from "react";
import { CTAProps, DEFAULT_CTA_DATA } from "./types";
import { useCTAForm } from "./useCTAForm";

export const MobileCTA: React.FC<CTAProps> = ({ data = DEFAULT_CTA_DATA, onSubmitSuccess }) => {
  const { name, setName, phone, setPhone, isSubmitting, handleSubmit } = useCTAForm(
    "Mobile CTA Form",
    onSubmitSuccess,
  );

  return (
    <div className="relative flex h-[calc(100vh-94px)] min-h-[calc(100vh-94px)] w-full items-center overflow-hidden px-5 py-12">
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
        <div className="pointer-events-none absolute inset-0 bg-[#414141]/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex w-full flex-col gap-5">
        {/* Text Section */}
        <div className="flex flex-col gap-2 text-white">
          <h2 className="text-[32px] font-bold leading-[130%] text-white">{data.title}</h2>
          <p className="break-words text-base font-normal leading-[160%] tracking-normal text-white/80">
            {data.description}
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
            {/* Input Name */}
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              required
              disabled={isSubmitting}
              className="w-full rounded-none border-0 bg-white px-5 py-5 text-[18px] text-primaryV1 transition-colors duration-300 placeholder:text-[18px] placeholder:font-normal placeholder:leading-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Input Phone & Button */}
            <input
              type="tel"
              placeholder="Số điện thoại của bạn"
              required
              disabled={isSubmitting}
              className="w-full rounded-none border-0 bg-white px-5 py-5 text-[18px] text-primaryV1 transition-colors duration-300 placeholder:text-[18px] placeholder:font-normal placeholder:leading-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-h-[46px] w-full cursor-pointer touch-manipulation select-none items-center justify-start gap-3 rounded-none border border-primaryV1 bg-white p-5 text-center align-middle text-xl font-semibold leading-tight text-primaryV1 transition-colors hover:bg-neutral-50 focus:outline-none active:bg-neutral-100 disabled:opacity-50"
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
          </form>
        </div>
      </div>
    </div>
  );
};
export default MobileCTA;
