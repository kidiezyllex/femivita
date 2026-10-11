"use client";

import { ImageInputWithUpload } from "@/components/Admin/ImageInputWithUpload";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@/components/ui/mdi-icon";
import { Textarea } from "@/components/ui/textarea";
import { useStory } from "@/context/StoryContext";
import { StoryComboData } from "@/components/Story/StoryCombo/types";
import { mdiClose, mdiContentSave, mdiGiftOutline } from "@mdi/js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const StoryComboEditModal: React.FC = () => {
  const { activeModal, setActiveModal, storyData, updateSection } = useStory();
  const [formData, setFormData] = useState<StoryComboData>(storyData.storyCombo);

  const isOpen = activeModal === "storyCombo";

  useEffect(() => {
    if (isOpen) {
      setFormData(storyData.storyCombo);
    }
  }, [isOpen, storyData.storyCombo]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("storyCombo", formData);
    setActiveModal(null);
    toast.success("Đã cập nhật Section Combo giới thiệu (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiGiftOutline} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Section Combo giới thiệu</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="space-y-3 md:space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar p-3 md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Nhãn (Badge)</Label>
                <Input
                  type="text"
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  placeholder="Đáng mua nhất"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Phụ đề</Label>
                <Input
                  type="text"
                  required
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Mua combo giảm 8%"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Tiêu đề</Label>
              <Input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Bộ đôi ngăn ngừa lão hóa"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Mô tả</Label>
              <Textarea
                rows={4}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Nội dung mô tả..."
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
                  placeholder="Xem chi tiết sản phẩm"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Đường dẫn nút (Link)</Label>
                <Input
                  type="text"
                  value={formData.ctaLink || "/products/combo"}
                  onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
                  placeholder="/products/combo"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Hình ảnh</Label>
              <ImageInputWithUpload
                required
                value={formData.image || ""}
                onChange={(val) => setFormData({ ...formData, image: val })}
                placeholder="/images/..."
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setActiveModal(null)}>
              <Icon path={mdiClose} size={0.8} className="flex-shrink-0" />
              <span>Hủy</span>
            </Button>
            <Button type="submit" variant="primaryV1">
              <Icon path={mdiContentSave} size={0.8} className="flex-shrink-0" />
              <span>Cập nhật Section</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
