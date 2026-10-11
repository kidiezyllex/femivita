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
import { DropdownProduct, HeaderData } from "@/types/landing";
import { mdiClose, mdiContentSave, mdiMenuOpen, mdiPlus, mdiTrashCanOutline } from "@mdi/js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MegaDropdownEditModal: React.FC = () => {
  const { activeModal, setActiveModal, landingData, updateSection } = useLanding();
  const [formData, setFormData] = useState<HeaderData>(landingData.header);

  const isOpen = activeModal === "megaDropdown";

  useEffect(() => {
    if (isOpen) {
      setFormData(landingData.header);
    }
  }, [isOpen, landingData.header]);

  const dropdownProducts = formData.dropdownProducts || [];

  const handleProductChange = (index: number, field: keyof DropdownProduct, value: string) => {
    const newProducts = [...dropdownProducts];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setFormData({ ...formData, dropdownProducts: newProducts });
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      dropdownProducts: [
        ...dropdownProducts,
        {
          id: `product-${Date.now()}`,
          href: "/products",
          image: "/images/product2.png",
          title: "Sản phẩm mới",
          description: "Mô tả ngắn về sản phẩm...",
          price: "0 đ",
          oldPrice: "",
          badge: "",
        },
      ],
    });
  };

  const handleRemoveProduct = (index: number) => {
    if (dropdownProducts.length <= 1) {
      toast.warning("Cần giữ lại ít nhất 1 sản phẩm trong Mega Dropdown.");
      return;
    }
    setFormData({
      ...formData,
      dropdownProducts: dropdownProducts.filter((_, i) => i !== index),
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("header", formData);
    setActiveModal(null);
    toast.success("Đã cập nhật Mega Dropdown (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiMenuOpen} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Mega Dropdown (Menu Danh mục sản phẩm)</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="custom-scrollbar max-h-[70vh] space-y-3 overflow-y-auto p-3 md:space-y-4 md:p-4">
            {/* Products List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Danh sách Sản phẩm trong Menu ({dropdownProducts.length})</Label>
                <Button type="button" onClick={handleAddProduct} size="sm" variant="accentV1">
                  <Icon path={mdiPlus} size={0.8} className="flex-shrink-0" />
                  <span>Thêm sản phẩm</span>
                </Button>
              </div>

              <div className="space-y-3">
                {dropdownProducts.map((product, idx) => (
                  <div
                    key={product.id || idx}
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

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div className="space-y-1.5 md:col-span-2">
                        <Label>Tên sản phẩm</Label>
                        <Input
                          type="text"
                          required
                          value={product.title}
                          onChange={(e) => handleProductChange(idx, "title", e.target.value)}
                          placeholder="Tên sản phẩm..."
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Huy hiệu (Badge)</Label>
                        <Input
                          type="text"
                          placeholder="vd: Đáng mua nhất"
                          value={product.badge || ""}
                          onChange={(e) => handleProductChange(idx, "badge", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Mô tả ngắn</Label>
                      <Textarea
                        rows={2}
                        required
                        value={product.description}
                        onChange={(e) => handleProductChange(idx, "description", e.target.value)}
                        placeholder="Mô tả tóm tắt..."
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label>Giá bán</Label>
                        <Input
                          type="text"
                          required
                          value={product.price}
                          onChange={(e) => handleProductChange(idx, "price", e.target.value)}
                          placeholder="vd: 500.000 đ"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Giá gốc (Gạch chân)</Label>
                        <Input
                          type="text"
                          placeholder="vd: 1.080.000 đ"
                          value={product.oldPrice || ""}
                          onChange={(e) => handleProductChange(idx, "oldPrice", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Đường dẫn chi tiết (Link)</Label>
                      <Input
                        type="text"
                        required
                        value={product.href}
                        onChange={(e) => handleProductChange(idx, "href", e.target.value)}
                        placeholder="/products/..."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label>Hình ảnh sản phẩm (URL/Path)</Label>
                      <ImageInputWithUpload
                        required
                        value={product.image}
                        onChange={(val) => {
                          const newProducts = [...dropdownProducts];
                          newProducts[idx] = { ...newProducts[idx], image: val };
                          setFormData({ ...formData, dropdownProducts: newProducts });
                        }}
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
              <span>Cập nhật Mega Dropdown</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
