"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { mdiPhoneInTalkOutline } from "@mdi/js";
import Image from "next/image";
import { ContactBannerProps } from "./types";
import { useContactForm } from "./useContactForm";

export const MobileContactBanner: React.FC<ContactBannerProps> = ({ bannerHeightClass }) => {
  const { name, setName, phone, setPhone, errors, isSubmitting, handleSubmit } =
    useContactForm("Mobile Contact Form");

  return (
    <div className="flex w-full flex-col">
      {/* Image */}
      <div className="w-full overflow-hidden">
        <Image
          src="/images/commit_img.webp"
          alt="Liên hệ Musase Skincare - Tư vấn chăm sóc từ vỏ chuối"
          width={4096}
          height={4096}
          sizes="100vw"
          className="h-auto w-full object-cover"
          draggable={false}
          priority
          quality={100}
        />
      </div>

      {/* Text & Form */}
      <div className="flex flex-col justify-center bg-creamBackgroundV1 p-5">
        {/* Subtitle */}
        <span className="mb-3 block text-base uppercase leading-[160%] text-supportV1">
          Bắt đầu hành trình trẻ hóa làn da cùng Musase.
        </span>

        {/* Heading */}
        <h1 className="mb-3 text-[32px] font-bold leading-[130%] text-primaryV1">
          Để Musase đồng hành{" "}
          <span className="text-accentV1">cùng bạn trong chu trình chăm sóc da phù hợp.</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-col gap-1">
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.name)}
              className={`w-full border bg-white px-5 py-5 text-lg text-primaryV1 transition-colors duration-300 placeholder:text-lg placeholder:font-normal placeholder:tracking-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1 ${
                errors.name ? "border-red-500" : "border-secondaryV1"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <span className="text-sm font-medium text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="flex w-full flex-col gap-1">
            <input
              type="tel"
              inputMode="numeric"
              placeholder="Số điện thoại của bạn"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.phone)}
              maxLength={10}
              className={`w-full border bg-white px-5 py-5 text-lg text-primaryV1 transition-colors duration-300 placeholder:text-lg placeholder:font-normal placeholder:tracking-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1 ${
                errors.phone ? "border-red-500" : "border-secondaryV1"
              }`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && (
              <span className="text-sm font-medium text-red-500">{errors.phone}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full shrink-0 cursor-pointer items-center justify-between gap-2 border border-primaryV1 bg-black p-5 text-center align-middle text-lg font-semibold leading-none tracking-normal text-white transition-colors hover:bg-eerieBlackV1 focus:outline-none disabled:opacity-50"
          >
            {isSubmitting ? "Đang gửi..." : "Nhận tư vấn ngay"}
            <div className="relative h-5 w-5 brightness-0 invert">
              <Image src="/logos/PhoneCall.png" alt="PhoneCall" fill draggable={false} priority />
            </div>
          </button>
        </form>

        <a
          href="tel:0383249898"
          className="mt-3 flex w-fit items-center gap-2 text-base font-medium text-primaryV1 transition-colors hover:text-supportV1"
        >
          <Icon path={mdiPhoneInTalkOutline} className="h-5 w-5" />
          <span className="font-semibold">Hotline:</span> 038 324 9898
        </a>
      </div>
    </div>
  );
};

export default MobileContactBanner;
