"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { useOptionalLanding } from "@/context/LandingContext";
import { useIsPortraitViewport } from "@/hooks/useViewportOrientation";
import { mdiPhoneInTalkOutline } from "@mdi/js";
import Image from "next/image";
import { ContactBannerProps } from "./types";
import { useContactForm } from "./useContactForm";

export const DesktopContactBanner: React.FC<ContactBannerProps> = () => {
  const { name, setName, phone, setPhone, errors, isSubmitting, handleSubmit } =
    useContactForm("Desktop Contact Form");
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);
  const isPortrait = useIsPortraitViewport();

  const bannerHeightClass = isPortrait
    ? "min-h-[600px]"
    : showAdminBar
      ? "min-h-[calc(100vh-156px)]"
      : "min-h-[calc(100vh-94px)]";

  return (
    <section className={`w-full ${bannerHeightClass}`}>
      <div className="grid grid-cols-1 items-stretch md:grid-cols-2">
        {/* Left Column: Image */}
        <div className={`flex w-full justify-center ${bannerHeightClass}`}>
          <div className={`relative w-full overflow-hidden ${bannerHeightClass}`}>
            <Image
              src="/images/commit_img.webp"
              alt="Liên hệ Musase Skincare - Tư vấn chăm sóc từ vỏ chuối"
              fill
              sizes="100vw, 50vw"
              className="object-cover"
              draggable={false}
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Right Column: Text & Form */}
        <div className="flex flex-col justify-center bg-creamBackgroundV1 lg:p-12 xl:px-16 xxl:px-20">
          {/* Subtitle */}
          <span className="block text-lg uppercase leading-[160%] text-supportV1">
            Bắt đầu hành trình trẻ hóa làn da cùng Musase.
          </span>

          {/* Heading */}
          <h1 className="mb-5 text-4xl font-semibold leading-[130%] text-primaryV1 xxl:text-[48px]">
            Để Musase đồng hành{" "}
            <span className="text-accentV1">cùng bạn trong chu trình chăm sóc da phù hợp.</span>
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-3">
            {/* Row 1: Name Input */}
            <div className="flex w-full flex-col gap-1">
              <input
                type="text"
                placeholder="Nhập tên của bạn"
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.name)}
                className={`h-[62px] w-full border bg-white px-5 text-base text-primaryV1 transition-colors duration-300 placeholder:text-lg placeholder:font-normal placeholder:leading-[160%] placeholder:tracking-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1 ${
                  errors.name ? "border-red-500" : "border-secondaryV1"
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <span className="text-sm font-medium text-red-500">{errors.name}</span>
              )}
            </div>

            {/* Row 2: Phone Input and Submit Button */}
            <div className="grid grid-cols-1 items-start gap-3 xl:grid-cols-2">
              <div className="flex w-full flex-col gap-1">
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Số điện thoại của bạn"
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.phone)}
                  maxLength={10}
                  className={`h-[62px] w-full border bg-white px-5 text-base text-primaryV1 transition-colors duration-300 placeholder:text-lg placeholder:font-normal placeholder:leading-[160%] placeholder:tracking-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1 ${
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
                className="flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 border border-primaryV1 bg-black p-5 text-center align-middle text-xl font-semibold leading-none tracking-normal text-white transition-colors hover:bg-eerieBlackV1 focus:outline-none disabled:opacity-50 sm:w-auto"
              >
                {isSubmitting ? "Đang gửi..." : "Nhận tư vấn ngay"}
                <div className="relative h-5 w-5 brightness-0 invert">
                  <Image
                    src="/logos/PhoneCall.png"
                    alt="PhoneCall"
                    fill
                    draggable={false}
                    priority
                  />
                </div>
              </button>
            </div>
          </form>

          <a
            href="tel:0383249898"
            className="mt-3 flex w-fit items-center gap-2 text-base font-medium text-primaryV1 transition-colors hover:text-supportV1 xxl:text-lg xxl:text-xl"
          >
            <Icon path={mdiPhoneInTalkOutline} className="h-5 w-5" />
            <span className="font-semibold">Hotline:</span> 038 324 9898
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesktopContactBanner;
