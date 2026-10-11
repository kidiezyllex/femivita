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
import { ProductCard, ProductsSectionData } from "@/types/landing";
import {
  mdiClose,
  mdiContentSave,
  mdiPackageVariantClosed,
  mdiPlus,
  mdiTrashCanOutline,
} from "@mdi/js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductsEditModal: React.FC = () => {
  const { activeModal, setActiveModal, landingData, updateSection } = useLanding();
  const [formData, setFormData] = useState<ProductsSectionData>(landingData.productsSection);

  const isOpen = activeModal === "productsSection";

  useEffect(() => {
    if (isOpen) {
      setFormData(landingData.productsSection);
    }
  }, [isOpen, landingData.productsSection]);

  const handleProductChange = (index: number, field: keyof ProductCard, value: string) => {
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
          id: `product-${Date.now()}`,
          title: "Sản phẩm mới",
          description: "Mô tả sản phẩm chống lão hóa...",
          badge: "",
          image: "/images/product2.png",
          volume: "50ml",
          price: "500.000 đ",
          oldPrice: "",
          link: "/products",
        },
      ],
    });
  };

  const handleRemoveProduct = (index: number) => {
    if (formData.products.length <= 1) {
      toast.warning("Cần có ít nhất 1 sản phẩm.");
      return;
    }
    const newProducts = formData.products.filter((_, i) => i !== index);
    setFormData({ ...formData, products: newProducts });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("productsSection", formData);
    setActiveModal(null);
    toast.success(
      "Đã cập nhật Section Danh sách Sản phẩm (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!",
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiPackageVariantClosed} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Danh sách Sản phẩm</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="custom-scrollbar max-h-[70vh] space-y-3 overflow-y-auto p-3 md:space-y-4 md:p-4">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Phụ đề (Subtitle)</Label>
                <Input
                  type="text"
                  required
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Phụ đề..."
                />
              </div>
              <div className="space-y-1.5">
                <Label>Tiêu đề chính</Label>
                <Input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Tiêu đề chính..."
                />
              </div>
            </div>

            {/* Product Cards List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <Label>Danh sách Thẻ sản phẩm ({formData.products.length})</Label>
                <Button type="button" onClick={handleAddProduct} size="sm" variant="accentV1">
                  <Icon path={mdiPlus} size={0.8} className="flex-shrink-0" />
                  <span>Thêm thẻ sản phẩm</span>
                </Button>
              </div>

              <div className="space-y-3">
                {formData.products.map((prod, idx) => (
                  <div
                    key={prod.id || idx}
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
                        title="Xóa sản phẩm"
                      >
                        <Icon path={mdiTrashCanOutline} size={0.8} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div className="space-y-1.5 md:col-span-2">
                        <Label>Tên sản phẩm</Label>
                        <Input
                          type="text"
                          required
                          value={prod.title}
                          onChange={(e) => handleProductChange(idx, "title", e.target.value)}
                          placeholder="Tên sản phẩm..."
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Huy hiệu (Badge)</Label>
                        <Input
                          type="text"
                          placeholder="vd: Đáng mua nhất"
                          value={prod.badge || ""}
                          onChange={(e) => handleProductChange(idx, "badge", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Mô tả ngắn</Label>
                      <Textarea
                        rows={2}
                        required
                        value={prod.description}
                        onChange={(e) => handleProductChange(idx, "description", e.target.value)}
                        placeholder="Mô tả tóm tắt..."
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div className="space-y-1.5">
                        <Label>Giá bán</Label>
                        <Input
                          type="text"
                          required
                          value={prod.price}
                          onChange={(e) => handleProductChange(idx, "price", e.target.value)}
                          placeholder="vd: 500.000 đ"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Giá gốc (Gạch chân)</Label>
                        <Input
                          type="text"
                          placeholder="vd: 1.080.000 đ"
                          value={prod.oldPrice || ""}
                          onChange={(e) => handleProductChange(idx, "oldPrice", e.target.value)}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Dung tích / Quy cách</Label>
                        <Input
                          type="text"
                          placeholder="vd: 30ml / Bộ sản phẩm"
                          value={prod.volume}
                          onChange={(e) => handleProductChange(idx, "volume", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Đường dẫn chi tiết (Link)</Label>
                      <Input
                        type="text"
                        required
                        value={prod.link}
                        onChange={(e) => handleProductChange(idx, "link", e.target.value)}
                        placeholder="/products/..."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label>Hình ảnh sản phẩm</Label>
                      <ImageInputWithUpload
                        required
                        value={prod.image}
                        onChange={(val) => handleProductChange(idx, "image", val)}
                        placeholder="/images/..."
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
