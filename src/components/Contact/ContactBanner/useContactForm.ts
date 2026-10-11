"use client";

import { useState } from "react";
import { toast } from "react-toastify";

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

export const useContactForm = (source: string) => {
  const [name, setNameRaw] = useState("");
  const [phone, setPhoneRaw] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(name);
    const phoneError = validatePhone(phone);

    if (nameError || phoneError) {
      setErrors({ name: nameError, phone: phoneError });
      toast.warning(nameError || phoneError || "Vui lòng kiểm tra lại thông tin.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const leadPayload = { name: name.trim(), phone, source };

      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      }).catch((error) => console.error("Failed to submit lead to sheet:", error));

      const telegramRes = await fetch("/api/notifications/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "lead", ...leadPayload }),
      });

      if (!telegramRes.ok) {
        throw new Error("Failed to send Telegram notification");
      }

      toast.success("Đăng ký nhận tư vấn thành công! Musase sẽ liên hệ lại với bạn sớm nhất.");
      setNameRaw("");
      setPhoneRaw("");
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
    errors,
    isSubmitting,
    handleSubmit,
  };
};
