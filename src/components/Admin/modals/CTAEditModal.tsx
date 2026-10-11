"use client";

import React, { useState, useEffect } from "react";
import { useLanding } from "@/context/LandingContext";
import { Icon } from "@/components/ui/mdi-icon";
import { mdiBullhornOutline, mdiClose, mdiContentSave } from "@mdi/js";
import { CTASectionData } from "@/types/landing";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImageInputWithUpload } from "@/components/Admin/ImageInputWithUpload";

export const CTAEditModal: React.FC = () => {
  const { activeModal, setActiveModal, landingData, updateSection } = useLanding();
  const [formData, setFormData] = useState<CTASectionData>(landingData.ctaSection);

  const isOpen = activeModal === "ctaSection";

  useEffect(() => {
    if (isOpen) {
      setFormData(landingData.ctaSection);
    }
  }, [isOpen, landingData.ctaSection]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("ctaSection", formData);
    setActiveModal(null);
    toast.success("Đã cập nhật Section CTA (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiBullhornOutline} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa CTA (Đăng ký tư vấn)</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="space-y-3 md:space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar p-3 md:p-4">
            <div className="space-y-1.5">
              <Label>Tiêu đề chính CTA</Label>
              <Input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Tiêu đề kêu gọi hành động..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Mô tả phụ</Label>
              <Textarea
                rows={3}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Mô tả chi tiết..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Chữ trên nút gửi</Label>
              <Input
                type="text"
                required
                value={formData.buttonText}
                onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                placeholder="Đăng ký ngay..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Ảnh nền (Background Image)</Label>
              <ImageInputWithUpload
                required
                value={formData.bgImage}
                onChange={(val) => setFormData({ ...formData, bgImage: val })}
                placeholder="/images/..."
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setActiveModal(null)}
            >
              <Icon path={mdiClose} size={0.8} className="flex-shrink-0" />
              <span>Hủy</span>
            </Button>
            <Button
              type="submit"
              variant="primaryV1"
            >
              <Icon path={mdiContentSave} size={0.8} className="flex-shrink-0" />
              <span>Cập nhật Section</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};


