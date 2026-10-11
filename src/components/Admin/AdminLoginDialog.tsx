"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@/components/ui/mdi-icon";
import { useLanding } from "@/context/LandingContext";
import { LoginContextLike } from "@/types/editableContext";
import { mdiAccountOutline, mdiEye, mdiEyeOff, mdiLock } from "@mdi/js";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

interface AdminLoginDialogProps {
  contextValue?: LoginContextLike;
}

export const AdminLoginDialog: React.FC<AdminLoginDialogProps> = ({ contextValue }) => {
  const landing = useLanding();
  const { showLoginModal, setShowLoginModal, loginAdmin, isAdmin } = contextValue ?? landing;
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCloseAndRedirect = () => {
    setShowLoginModal(false);
    // Bỏ hậu tố "/edit" khỏi pathname hiện tại (ví dụ: "/edit" -> "/", "/story/edit" -> "/story")
    const currentPath =
      pathname || (typeof window !== "undefined" ? window.location.pathname : "/edit");
    const targetPath = currentPath.replace(/\/edit\/?$/, "") || "/";

    if (typeof window !== "undefined") {
      window.location.href = targetPath;
    } else {
      router.push(targetPath);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    setIsSubmitting(true);
    try {
      await loginAdmin({ username, password });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={showLoginModal && !isAdmin}
      onOpenChange={(open) => {
        if (!open) {
          handleCloseAndRedirect();
        } else {
          setShowLoginModal(true);
        }
      }}
    >
      <DialogContent size="small">
        {/* Header */}
        <div className="relative bg-[#3D4A3A] p-5 text-center text-white">
          <div className="mb-3 flex justify-center">
            <div className="relative h-9 w-36">
              <Image
                src="/images/logo.png"
                alt="Musase"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
          <DialogTitle className="justify-center text-xl font-bold tracking-normal text-white">
            Đăng nhập Quản trị viên
          </DialogTitle>
          <DialogDescription className="mt-1 text-center text-sm text-white/80">
            Nhập thông tin xác thực để vào chế độ chỉnh sửa Landing Page
          </DialogDescription>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          <div className="space-y-2">
            <Label className="block text-xs font-semibold uppercase tracking-wider text-primaryV1">
              Tài khoản (Username / Email)
            </Label>
            <div className="relative">
              <Icon
                path={mdiAccountOutline}
                className="pointer-events-none absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-secondaryV1"
              />
              <Input
                type="text"
                required
                placeholder="adminmusase@gmail.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-primaryV1/30 !bg-white pl-10 text-primaryV1 placeholder:text-[#C9C7B1] focus:border-primaryV1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="block text-xs font-semibold uppercase tracking-wider text-primaryV1">
              Mật khẩu (Password)
            </Label>
            <div className="relative">
              <Icon
                path={mdiLock}
                className="pointer-events-none absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-secondaryV1"
              />
              <Input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Nhập mật khẩu admin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-primaryV1/30 !bg-white pl-10 pr-10 text-primaryV1 placeholder:text-[#C9C7B1] focus:border-primaryV1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-secondaryV1 hover:text-primaryV1"
              >
                {showPassword ? (
                  <Icon path={mdiEyeOff} className="h-4 w-4" />
                ) : (
                  <Icon path={mdiEye} className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="!h-12 w-full rounded bg-eerieBlackV1 text-sm font-semibold text-white shadow-md hover:bg-eerieBlackV1/90 active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? "Đang xác thực..." : "Xác nhận & Vào chế độ chỉnh sửa"}
            </Button>

            <button
              type="button"
              onClick={handleCloseAndRedirect}
              className="w-full cursor-pointer text-center text-xs font-medium text-secondaryV1 underline underline-offset-4 transition-colors hover:text-primaryV1"
            >
              ← Quay lại trang chủ khách xem (Không chỉnh sửa)
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
