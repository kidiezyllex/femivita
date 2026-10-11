"use client";

import React, { useState, useEffect } from "react";
import { useLanding } from "@/context/LandingContext";
import { Icon } from "@/components/ui/mdi-icon";
import { mdiBookOpenPageVariantOutline, mdiClose, mdiContentSave } from "@mdi/js";
import { BrandStoryData } from "@/types/landing";
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

export const BrandStoryEditModal: React.FC = () => {
  const { activeModal, setActiveModal, landingData, updateSection } = useLanding();
  const [formData, setFormData] = useState<BrandStoryData>(landingData.brandStory);

  const isOpen = activeModal === "brandStory";

  useEffect(() => {
    if (isOpen) {
      setFormData(landingData.brandStory);
    }
  }, [isOpen, landingData.brandStory]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("brandStory", formData);
    setActiveModal(null);
    toast.success("Đã cập nhật Câu chuyện thương hiệu (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiBookOpenPageVariantOutline} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Câu chuyện thương hiệu</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="space-y-3 md:space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar p-3 md:p-4">
            <div className="space-y-1.5">
              <Label>Tiêu đề</Label>
              <Input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Tiêu đề câu chuyện..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Nội dung câu chuyện</Label>
              <Textarea
                rows={6}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Nội dung chi tiết..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Chữ trên nút (CTA)</Label>
                <Input
                  type="text"
                  required
                  value={formData.ctaText}
                  onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                  placeholder="Xem thêm..."
                />
              </div>
              <div className="space-y-1.5">
                <Label>Đường dẫn nút (Link)</Label>
                <Input
                  type="text"
                  value={formData.ctaLink || "/story"}
                  onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
                  placeholder="/story"
                />
              </div>
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


