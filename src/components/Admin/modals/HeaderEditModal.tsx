"use client";

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
import { useLanding } from "@/context/LandingContext";
import { HeaderData } from "@/types/landing";
import { mdiClose, mdiContentSave, mdiPageLayoutHeader } from "@mdi/js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const HeaderEditModal: React.FC = () => {
  const { activeModal, setActiveModal, landingData, updateSection } = useLanding();
  const [formData, setFormData] = useState<HeaderData>(landingData.header);

  const isOpen = activeModal === "header";

  useEffect(() => {
    if (isOpen) {
      setFormData(landingData.header);
    }
  }, [isOpen, landingData.header]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("header", formData);
    setActiveModal(null);
    toast.success("Đã cập nhật Header (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiPageLayoutHeader} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Header</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="custom-scrollbar max-h-[70vh] space-y-3 overflow-y-auto p-3 md:space-y-4 md:p-4">
            <div className="space-y-1.5">
              <Label>Thanh thông báo trên cùng (Top Banner)</Label>
              <Input
                type="text"
                required
                value={formData.topBannerText}
                onChange={(e) => setFormData({ ...formData, topBannerText: e.target.value })}
                placeholder="Nội dung thông báo..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Đường dẫn Logo</Label>
              <Input
                type="text"
                value={formData.logoUrl || "/images/logo.png"}
                onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                placeholder="/images/logo.png"
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
              <span>Cập nhật Header</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
