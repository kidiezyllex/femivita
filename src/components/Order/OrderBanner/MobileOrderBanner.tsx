"use client";

import BlackButton from "@/components/ui/BlackButton";
import { mdiPhoneInTalkOutline } from "@mdi/js";
import Image from "next/image";
import { OrderBannerProps } from "./types";
import { useOrderForm } from "./useOrderForm";

export const MobileOrderBanner: React.FC<OrderBannerProps> = () => {
  const {
    name,
    setName,
    phone,
    setPhone,
    address,
    setAddress,
    productSlug,
    setProductSlug,
    productOptions,
    errors,
    isSubmitting,
    handleSubmit,
  } = useOrderForm("Mobile Order Form");

  return (
    <div className="flex w-full flex-col">
      {/* Image */}
      <div className="w-full overflow-hidden">
        <Image
          src="/images/commit_img.webp"
          alt="Đặt hàng Musase Skincare - Sản phẩm chăm sóc từ vỏ chuối"
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
          Đặt hàng ngay hôm nay
        </span>

        {/* Heading */}
        <h1 className="mb-3 text-[32px] font-bold leading-[130%] text-primaryV1">
          Hoàn tất đơn hàng{" "}
          <span className="text-accentV1">để Musase đồng hành cùng làn da của bạn.</span>
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
            {errors.name && <span className="text-sm font-medium text-red-500">{errors.name}</span>}
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

          <div className="flex w-full flex-col gap-1">
            <input
              type="text"
              placeholder="Địa chỉ nhận hàng"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.address)}
              className={`w-full border bg-white px-5 py-5 text-lg text-primaryV1 transition-colors duration-300 placeholder:text-lg placeholder:font-normal placeholder:tracking-normal placeholder:text-[#C9C7B1] placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-primaryV1 ${
                errors.address ? "border-red-500" : "border-secondaryV1"
              }`}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && (
              <span className="text-sm font-medium text-red-500">{errors.address}</span>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {productOptions.map((option) => (
              <button
                key={option.slug}
                type="button"
                onClick={() => setProductSlug(option.slug)}
                disabled={isSubmitting}
                className={`relative flex w-full cursor-pointer items-center justify-between gap-3 border p-3 text-left transition-colors duration-200 focus:outline-none ${
                  productSlug === option.slug
                    ? "border-primaryV1 bg-primaryV1/5"
                    : "border-secondaryV1 bg-white hover:border-primaryV1/50"
                }`}
              >
                {option.badge && (
                  <span className="absolute -top-2 left-2 rounded-full bg-accentV1 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm">
                    {option.badge}
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      productSlug === option.slug ? "border-primaryV1" : "border-secondaryV1"
                    }`}
                  >
                    {productSlug === option.slug && (
                      <span className="h-2.5 w-2.5 rounded-full bg-primaryV1" />
                    )}
                  </span>
                  <span className="text-base font-medium text-primaryV1">{option.name}</span>
                </div>
                <span className="flex shrink-0 flex-col items-center gap-2">
                  {option.originalPrice && (
                    <span className="text-base font-medium text-primaryV1/40 line-through">
                      {option.originalPrice}
                    </span>
                  )}
                  <span className="text-base font-semibold text-supportV1">{option.price}</span>
                </span>
              </button>
            ))}
          </div>

          <BlackButton
            type="submit"
            disabled={isSubmitting}
            text={isSubmitting ? "Đang gửi..." : "Đặt hàng ngay"}
            icon={mdiPhoneInTalkOutline}
            className="w-full justify-between gap-2 text-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default MobileOrderBanner;
