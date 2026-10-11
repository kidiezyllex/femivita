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
import { useLanding } from "@/context/LandingContext";
import { HeroData } from "@/types/landing";
import {
  mdiClose,
  mdiContentSave,
  mdiPlus,
  mdiTrashCanOutline,
  mdiViewCarouselOutline,
} from "@mdi/js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const HeroEditModal: React.FC = () => {
  const { activeModal, setActiveModal, landingData, updateSection } = useLanding();
  const [formData, setFormData] = useState<HeroData>(landingData.hero);

  const isOpen = activeModal === "hero";

  useEffect(() => {
    if (isOpen) {
      setFormData(landingData.hero);
    }
  }, [isOpen, landingData.hero]);

  const handleProductChange = (index: number, field: string, value: string) => {
    const newProducts = [...formData.products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setFormData({ ...formData, products: newProducts });
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      products: [
        ...formData.products,
        {
          image: "/images/hero/hero1.webp",
          thumbnail: "/images/hero/hero1.webp",
          subtitle: "Sản phẩm mới",
          title: "Tên sản phẩm",
          description: "Mô tả sản phẩm chống lão hóa...",
          link: "/products",
        },
      ],
    });
  };

  const handleRemoveProduct = (index: number) => {
    if (formData.products.length <= 1) {
      toast.warning("Cần giữ lại ít nhất 1 sản phẩm trình chiếu.");
      return;
    }
    const newProducts = formData.products.filter((_, i) => i !== index);
    setFormData({ ...formData, products: newProducts });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("hero", formData);
    setActiveModal(null);
    toast.success("Đã cập nhật Hero Section (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiViewCarouselOutline} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Hero Section</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="custom-scrollbar max-h-[70vh] space-y-3 overflow-y-auto p-3 md:space-y-4 md:p-4">
            {/* Marquee text */}
            <div className="space-y-1.5">
              <Label>Dòng chữ chạy Marquee</Label>
              <Input
                type="text"
                required
                value={formData.marqueeText}
                onChange={(e) => setFormData({ ...formData, marqueeText: e.target.value })}
                placeholder="Nhập dòng chữ chạy..."
              />
            </div>

            {/* Products List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <Label>Danh sách Sản phẩm trình chiếu ({formData.products.length})</Label>
                <Button type="button" onClick={handleAddProduct} size="sm" variant="accentV1">
                  <Icon path={mdiPlus} size={0.8} className="flex-shrink-0" />
                  <span>Thêm sản phẩm</span>
                </Button>
              </div>

              <div className="space-y-3">
                {formData.products.map((product, idx) => (
                  <div
                    key={idx}
                    className="relative space-y-3 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3 md:p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-primaryV1/10 px-2 py-1 text-xs font-semibold text-primaryV1">
                        Sản phẩm #{idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveProduct(idx)}
                        className="cursor-pointer p-1 text-red-500 transition-colors hover:text-red-400"
                        title="Xóa sản phẩm này"
                      >
                        <Icon path={mdiTrashCanOutline} size={0.8} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label>Tiêu đề chính</Label>
                        <Input
                          type="text"
                          required
                          value={product.title}
                          onChange={(e) => handleProductChange(idx, "title", e.target.value)}
                          placeholder="Tên sản phẩm..."
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Phụ đề (Subtitle)</Label>
                        <Input
                          type="text"
                          required
                          value={product.subtitle}
                          onChange={(e) => handleProductChange(idx, "subtitle", e.target.value)}
                          placeholder="Phụ đề ngắn..."
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Mô tả sản phẩm</Label>
                      <Textarea
                        rows={3}
                        required
                        value={product.description}
                        onChange={(e) => handleProductChange(idx, "description", e.target.value)}
                        placeholder="Mô tả chi tiết sản phẩm..."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label>Hình ảnh sản phẩm (URL/Path)</Label>
                      <ImageInputWithUpload
                        required
                        value={product.image}
                        onChange={(val) => {
                          const newProducts = [...formData.products];
                          newProducts[idx] = {
                            ...newProducts[idx],
                            image: val,
                            thumbnail: val,
                          };
                          setFormData({ ...formData, products: newProducts });
                        }}
                        placeholder="/images/hero/..."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label>Link sản phẩm</Label>
                      <Input
                        type="text"
                        value={product.link || ""}
                        onChange={(e) => handleProductChange(idx, "link", e.target.value)}
                        placeholder="/products/ten-san-pham"
                      />
                    </div>
                  </div>
                ))}
              </div>
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
