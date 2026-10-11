"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { DEFAULT_ORDER_PRODUCT_OPTIONS } from "./types";

const VN_PHONE_REGEX = /^(03|05|07|08|09)\d{8}$/;

const validateName = (value: string): string | undefined => {
  const trimmed = value.trim();
  if (!trimmed) return "Vui lòng nhập họ tên.";
  if (trimmed.length < 2) return "Họ tên quá ngắn.";
  if (trimmed.length > 100) return "Họ tên quá dài.";
  if (/\d/.test(trimmed)) return "Họ tên không được chứa số.";
  if (/[^a-zA-ZÀ-ỹà-ỹ\s'-]/.test(trimmed)) return "Họ tên chứa ký tự không hợp lệ.";
  return undefined;
};

const validatePhone = (value: string): string | undefined => {
  const trimmed = value.trim();
  if (!trimmed) return "Vui lòng nhập số điện thoại.";
  if (!/^\d+$/.test(trimmed)) return "Số điện thoại chỉ được chứa chữ số.";
  if (trimmed.length !== 10) return "Số điện thoại phải có đúng 10 chữ số.";
  if (!VN_PHONE_REGEX.test(trimmed)) return "Số điện thoại không đúng định dạng Việt Nam.";
  return undefined;
};

const validateAddress = (value: string): string | undefined => {
  const trimmed = value.trim();
  if (!trimmed) return "Vui lòng nhập địa chỉ nhận hàng.";
  if (trimmed.length < 10) return "Địa chỉ quá ngắn, vui lòng nhập chi tiết hơn.";
  if (trimmed.length > 300) return "Địa chỉ quá dài.";
  return undefined;
};

export const useOrderForm = (source: string) => {
  const searchParams = useSearchParams();
  const productParam = searchParams?.get("product") ?? null;

  const productOptions = DEFAULT_ORDER_PRODUCT_OPTIONS;
  const [name, setNameRaw] = useState("");
  const [phone, setPhoneRaw] = useState("");
  const [address, setAddressRaw] = useState("");
  const [productSlug, setProductSlug] = useState(
    productOptions.find((option) => option.slug === productParam)?.slug ||
      productOptions[0].slug,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});

  const setName = (value: string) => {
    setNameRaw(value);
    setErrors((prev) => (prev.name ? { ...prev, name: undefined } : prev));
  };

  const setPhone = (value: string) => {
    // Chỉ cho phép nhập chữ số, chặn mọi ký tự khác ngay khi gõ
    const digitsOnly = value.replace(/\D/g, "");
    setPhoneRaw(digitsOnly);
    setErrors((prev) => (prev.phone ? { ...prev, phone: undefined } : prev));
  };

  const setAddress = (value: string) => {
    setAddressRaw(value);
    setErrors((prev) => (prev.address ? { ...prev, address: undefined } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    const addressError = validateAddress(address);

    if (nameError || phoneError || addressError) {
      setErrors({ name: nameError, phone: phoneError, address: addressError });
      toast.warning(nameError || phoneError || addressError || "Vui lòng kiểm tra lại thông tin.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const selectedProduct = productOptions.find((option) => option.slug === productSlug);
      const orderPayload = {
        name: name.trim(),
        phone,
        address: address.trim(),
        product: selectedProduct
          ? `${selectedProduct.name} - ${selectedProduct.price}`
          : productSlug,
        source,
      };

      fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      }).catch((error) => console.error("Failed to submit order to sheet:", error));

      const telegramRes = await fetch("/api/notifications/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "order", ...orderPayload }),
      });

      if (!telegramRes.ok) {
        throw new Error("Failed to send Telegram notification");
      }

      toast.success("Đặt hàng thành công! Musase sẽ liên hệ lại với bạn sớm nhất.");
      setNameRaw("");
      setPhoneRaw("");
      setAddressRaw("");
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
  };
};
