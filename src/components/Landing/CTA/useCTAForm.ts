"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export const useCTAForm = (source: string, onSubmitSuccess?: () => void) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.warning("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    setIsSubmitting(true);

    try {
      const leadPayload = { name, phone, source };

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

      toast.success(
        "Đăng ký nhận tư vấn thành công! Musase sẽ liên hệ lại với bạn sớm nhất."
      );
      setName("");
      setPhone("");
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
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
    isSubmitting,
    handleSubmit,
  };
};
