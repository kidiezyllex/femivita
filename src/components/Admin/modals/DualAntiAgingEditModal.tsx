"use client";

import React, { useState, useEffect } from "react";
import { useLanding } from "@/context/LandingContext";
import { Icon } from "@/components/ui/mdi-icon";
import {
  mdiShieldCheckOutline,
  mdiClose,
  mdiContentSave,
  mdiPlus,
  mdiTrashCanOutline,
} from "@mdi/js";
import { DualAntiAgingData } from "@/types/landing";
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

export const DualAntiAgingEditModal: React.FC = () => {
  const { activeModal, setActiveModal, landingData, updateSection } = useLanding();
  const [formData, setFormData] = useState<DualAntiAgingData>(landingData.dualAntiAging);

  const isOpen = activeModal === "dualAntiAging";

  useEffect(() => {
    if (isOpen) {
      setFormData(landingData.dualAntiAging);
    }
  }, [isOpen, landingData.dualAntiAging]);

  const handleLabelChange = (index: number, value: string) => {
    const newLabels = [...formData.labels];
    newLabels[index] = value;
    setFormData({ ...formData, labels: newLabels });
  };

  const handleAddLabel = () => {
    setFormData({ ...formData, labels: [...formData.labels, "Nhãn mới"] });
  };

  const handleRemoveLabel = (index: number) => {
    if (formData.labels.length <= 1) return;
    const newLabels = formData.labels.filter((_, i) => i !== index);
    setFormData({ ...formData, labels: newLabels });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("dualAntiAging", formData);
    setActiveModal(null);
    toast.success("Đã cập nhật Section Lão hóa kép (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiShieldCheckOutline} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Sức mạnh Chống lão hóa kép</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="space-y-3 md:space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar p-3 md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Phụ đề (Badge/Subtitle)</Label>
                <Input
                  type="text"
                  required
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Phụ đề..."
                />
              </div>
              <div className="space-y-1.5">
                <Label>Từ nhấn mạnh (Màu vàng cam)</Label>
                <Input
                  type="text"
                  value={formData.highlightWord || "vỏ chuối"}
                  onChange={(e) => setFormData({ ...formData, highlightWord: e.target.value })}
                  placeholder="vỏ chuối"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Tiêu đề chính</Label>
              <Textarea
                rows={2}
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Tiêu đề chính..."
              />
            </div>

            {/* Labels list */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <Label>Danh sách Nhãn đặc tính</Label>
                <Button
                  type="button"
                  onClick={handleAddLabel}
                  size="sm"
                  variant="accentV1"
                >
                  <Icon path={mdiPlus} size={0.8} className="flex-shrink-0" />
                  <span>Thêm nhãn</span>
                </Button>
              </div>
              <div className="space-y-2">
                {formData.labels.map((label, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <Input
                      type="text"
                      required
                      value={label}
                      onChange={(e) => handleLabelChange(idx, e.target.value)}
                      placeholder="Tên nhãn đặc tính..."
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveLabel(idx)}
                      className="text-red-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                      title="Xóa nhãn"
                    >
                      <Icon path={mdiTrashCanOutline} size={0.8} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Nội dung mô tả khoa học</Label>
              <Textarea
                rows={6}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Nội dung mô tả..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Hình ảnh</Label>
              <ImageInputWithUpload
                required
                value={formData.image}
                onChange={(val) => setFormData({ ...formData, image: val })}
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


