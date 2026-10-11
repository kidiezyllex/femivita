"use client";

import React, { useState, useEffect } from "react";
import { useLanding } from "@/context/LandingContext";
import { Icon } from "@/components/ui/mdi-icon";
import {
  mdiPageLayoutFooter,
  mdiClose,
  mdiContentSave,
} from "@mdi/js";
import { FooterData } from "@/types/landing";
import { DEFAULT_LANDING_PAGE_DATA } from "@/constants/defaultLandingData";
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

export const FooterEditModal: React.FC = () => {
  const { activeModal, setActiveModal, landingData, updateSection } = useLanding();
  const [formData, setFormData] = useState<FooterData>(
    landingData.footer || DEFAULT_LANDING_PAGE_DATA.footer || {}
  );

  const isOpen = activeModal === "footer";

  useEffect(() => {
    if (isOpen) {
      setFormData(landingData.footer || DEFAULT_LANDING_PAGE_DATA.footer || {});
    }
  }, [isOpen, landingData.footer]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("footer", formData);
    setActiveModal(null);
    toast.success("Đã cập nhật Chân trang (Footer) (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiPageLayoutFooter} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Chân trang (Footer)</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="space-y-3 md:space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar p-3 md:p-4">
            {/* Logo and Brand */}
            <div className="space-y-1.5">
              <Label>Logo chân trang (URL/Path)</Label>
              <ImageInputWithUpload
                required
                value={formData.logoUrl || "/images/large_logo.png"}
                onChange={(val) => setFormData({ ...formData, logoUrl: val })}
                placeholder="/images/large_logo.png"
              />
            </div>

            {/* Slogan */}
            <div className="space-y-1.5">
              <Label>Thông điệp / Slogan</Label>
              <Textarea
                rows={2}
                required
                value={formData.slogan || ""}
                onChange={(e) => setFormData({ ...formData, slogan: e.target.value })}
                placeholder="Tôn trọng vẻ đẹp tự nhiên..."
              />
            </div>

            {/* Company legal information */}
            <div className="space-y-1.5">
              <Label>Tên công ty chịu trách nhiệm</Label>
              <Input
                type="text"
                required
                value={formData.companyName || ""}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="vd: CÔNG TY TNHH CERY SKINLAB"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Thông tin GCNĐKKD</Label>
              <Textarea
                rows={2}
                value={formData.businessLicense || ""}
                onChange={(e) => setFormData({ ...formData, businessLicense: e.target.value })}
                placeholder="GCNĐKKD số..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Địa chỉ trụ sở / văn phòng</Label>
              <Input
                type="text"
                value={formData.address || ""}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Địa chỉ công ty..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Số điện thoại liên hệ</Label>
                <Input
                  type="text"
                  value={formData.phone || ""}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="vd: 038 324 9898"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Email liên hệ</Label>
                <Input
                  type="text"
                  value={formData.email || ""}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@musase.vn"
                />
              </div>
            </div>

            {/* Copyright */}
            <div className="space-y-1.5">
              <Label>Dòng chữ bản quyền (Copyright)</Label>
              <Input
                type="text"
                value={formData.copyright || ""}
                onChange={(e) => setFormData({ ...formData, copyright: e.target.value })}
                placeholder="@ 2026 Musase"
              />
            </div>

            {/* Social Links */}
            <div className="space-y-1.5">
              <Label>Liên kết mạng xã hội</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Input
                  type="text"
                  value={formData.socialLinks?.instagram || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialLinks: { ...formData.socialLinks, instagram: e.target.value },
                    })
                  }
                  placeholder="Instagram URL"
                />
                <Input
                  type="text"
                  value={formData.socialLinks?.facebook || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialLinks: { ...formData.socialLinks, facebook: e.target.value },
                    })
                  }
                  placeholder="Facebook URL"
                />
                <Input
                  type="text"
                  value={formData.socialLinks?.tiktok || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialLinks: { ...formData.socialLinks, tiktok: e.target.value },
                    })
                  }
                  placeholder="TikTok URL"
                />
              </div>
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

export default FooterEditModal;
