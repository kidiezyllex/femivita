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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useProductPage } from "@/context/ProductPageContext";
import {
  ProductPageBundleItem,
  ProductPageData,
  ProductPageIngredient,
  ProductPageIngredientDetail,
  ProductPageReview,
  ProductPageUpsellBanner,
  ProductPageUsageInfoItem,
  ProductPageUsageInstructionBanner,
  ProductPageUsageStep,
} from "@/types/productPage";
import {
  mdiClose,
  mdiContentSave,
  mdiPackageVariantClosedCheck,
  mdiPlus,
  mdiTrashCanOutline,
} from "@mdi/js";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductPageEditModal: React.FC = () => {
  const { activeModal, setActiveModal, productPageData, updateSection } = useProductPage();
  const [formData, setFormData] = useState<ProductPageData>(productPageData);
  const pathname = usePathname();

  const isOpen = activeModal === "productPage";
  const isCombo = pathname?.includes("/products/combo");
  const isCreamOrSerum =
    pathname?.includes("/products/cream") || pathname?.includes("/products/serum");

  useEffect(() => {
    if (isOpen) {
      setFormData(productPageData);
    }
  }, [isOpen, productPageData]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    (Object.keys(formData) as (keyof ProductPageData)[]).forEach((key) => {
      updateSection(key, formData[key] as any);
    });
    setActiveModal(null);
    toast.success("Đã cập nhật trang sản phẩm (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  // ---- Tags ----
  const handleTagChange = (index: number, value: string) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData({ ...formData, tags: newTags });
  };
  const handleAddTag = () => setFormData({ ...formData, tags: [...formData.tags, "Tag mới"] });
  const handleRemoveTag = (index: number) =>
    setFormData({ ...formData, tags: formData.tags.filter((_, i) => i !== index) });

  // ---- Gallery ----
  const handleGalleryChange = (index: number, value: string) => {
    const newImages = [...formData.galleryImages];
    newImages[index] = value;
    setFormData({ ...formData, galleryImages: newImages });
  };
  const handleAddGalleryImage = () =>
    setFormData({
      ...formData,
      galleryImages: [...formData.galleryImages, "/images/product2.png"],
    });
  const handleRemoveGalleryImage = (index: number) => {
    if (formData.galleryImages.length <= 1) {
      toast.warning("Cần giữ lại ít nhất 1 ảnh trong thư viện.");
      return;
    }
    setFormData({
      ...formData,
      galleryImages: formData.galleryImages.filter((_, i) => i !== index),
    });
  };

  // ---- Bundle Items ----
  const handleBundleChange = (index: number, field: keyof ProductPageBundleItem, value: string) => {
    const newItems = [...formData.bundleItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData({ ...formData, bundleItems: newItems });
  };
  const handleAddBundleItem = () =>
    setFormData({
      ...formData,
      bundleItems: [
        ...formData.bundleItems,
        { image: "/images/product3.png", title: "Sản phẩm mới", price: "0 đ", link: "/products" },
      ],
    });
  const handleRemoveBundleItem = (index: number) =>
    setFormData({ ...formData, bundleItems: formData.bundleItems.filter((_, i) => i !== index) });

  // ---- Uses ----
  const handleUseChange = (index: number, value: string) => {
    const newUses = [...formData.uses];
    newUses[index] = value;
    setFormData({ ...formData, uses: newUses });
  };
  const handleAddUse = () =>
    setFormData({ ...formData, uses: [...formData.uses, "Công dụng mới"] });
  const handleRemoveUse = (index: number) =>
    setFormData({ ...formData, uses: formData.uses.filter((_, i) => i !== index) });

  // ---- Key Ingredients ----
  const handleKeyIngredientChange = (
    index: number,
    field: keyof ProductPageIngredient,
    value: string,
  ) => {
    const newList = [...formData.keyIngredients];
    newList[index] = { ...newList[index], [field]: value };
    setFormData({ ...formData, keyIngredients: newList });
  };
  const handleAddKeyIngredient = () =>
    setFormData({
      ...formData,
      keyIngredients: [
        ...formData.keyIngredients,
        { name: "Thành phần mới", description: "Mô tả..." },
      ],
    });
  const handleRemoveKeyIngredient = (index: number) =>
    setFormData({
      ...formData,
      keyIngredients: formData.keyIngredients.filter((_, i) => i !== index),
    });

  // ---- Ingredients Detail (INCI) ----
  const handleIngredientDetailChange = (
    index: number,
    field: keyof ProductPageIngredientDetail,
    value: string,
  ) => {
    const newList = [...formData.ingredientsDetail];
    newList[index] = { ...newList[index], [field]: value };
    setFormData({ ...formData, ingredientsDetail: newList });
  };
  const handleAddIngredientDetail = () =>
    setFormData({
      ...formData,
      ingredientsDetail: [
        ...formData.ingredientsDetail,
        { title: "Thành phần mới", content: "Danh sách INCI..." },
      ],
    });
  const handleRemoveIngredientDetail = (index: number) =>
    setFormData({
      ...formData,
      ingredientsDetail: formData.ingredientsDetail.filter((_, i) => i !== index),
    });

  // ---- Usage Steps ----
  const handleUsageStepChange = (
    index: number,
    field: keyof ProductPageUsageStep,
    value: string,
  ) => {
    const newSteps = [...formData.usageSteps];
    newSteps[index] = { ...newSteps[index], [field]: value } as ProductPageUsageStep;
    setFormData({ ...formData, usageSteps: newSteps });
  };
  const handleAddUsageStep = () =>
    setFormData({
      ...formData,
      usageSteps: [
        ...formData.usageSteps,
        {
          step: `BƯỚC ${formData.usageSteps.length + 1}`,
          title: "Bước mới",
          description: "Mô tả bước sử dụng...",
          texture: "Dạng kem",
          image: "/images/mission_img.webp",
          imageSide: "right",
        },
      ],
    });
  const handleRemoveUsageStep = (index: number) => {
    if (formData.usageSteps.length <= 1) {
      toast.warning("Cần giữ lại ít nhất 1 bước sử dụng.");
      return;
    }
    setFormData({ ...formData, usageSteps: formData.usageSteps.filter((_, i) => i !== index) });
  };

  // ---- Reviews ----
  const handleReviewChange = (
    index: number,
    field: keyof ProductPageReview,
    value: string | number,
  ) => {
    const newReviews = [...formData.reviews];
    newReviews[index] = { ...newReviews[index], [field]: value } as ProductPageReview;
    setFormData({ ...formData, reviews: newReviews });
  };
  const handleAddReview = () =>
    setFormData({
      ...formData,
      reviews: [
        ...formData.reviews,
        { name: "Khách hàng mới", stars: 5, content: "Nội dung đánh giá..." },
      ],
    });
  const handleRemoveReview = (index: number) =>
    setFormData({ ...formData, reviews: formData.reviews.filter((_, i) => i !== index) });

  // ---- Usage Instruction Banner ----
  const usageInstructionBanner: ProductPageUsageInstructionBanner =
    formData.usageInstructionBanner || {
      title: "CÁCH SỬ DỤNG",
      description: "",
      image: "/images/mission_img.webp",
      usageInfo: [],
    };

  const handleUsageInstructionBannerChange = (
    field: keyof Omit<ProductPageUsageInstructionBanner, "usageInfo">,
    value: string,
  ) => {
    setFormData({
      ...formData,
      usageInstructionBanner: { ...usageInstructionBanner, [field]: value },
    });
  };

  const handleUsageInfoChange = (
    index: number,
    field: keyof ProductPageUsageInfoItem,
    value: string,
  ) => {
    const newList = [...usageInstructionBanner.usageInfo];
    newList[index] = { ...newList[index], [field]: value };
    setFormData({
      ...formData,
      usageInstructionBanner: { ...usageInstructionBanner, usageInfo: newList },
    });
  };

  const handleAddUsageInfo = () =>
    setFormData({
      ...formData,
      usageInstructionBanner: {
        ...usageInstructionBanner,
        usageInfo: [...usageInstructionBanner.usageInfo, { label: "Nhãn mới:", value: "Giá trị" }],
      },
    });

  const handleRemoveUsageInfo = (index: number) =>
    setFormData({
      ...formData,
      usageInstructionBanner: {
        ...usageInstructionBanner,
        usageInfo: usageInstructionBanner.usageInfo.filter((_, i) => i !== index),
      },
    });

  // ---- Upsell Banner ----
  const upsellBanner: ProductPageUpsellBanner = formData.upsellBanner || {
    badge: "",
    title: "",
    description: "",
    image: "/images/product2.png",
    buttonText: "Xem chi tiết sản phẩm",
    buttonLink: "/products/combo",
  };

  const handleUpsellBannerChange = (field: keyof ProductPageUpsellBanner, value: string) => {
    setFormData({ ...formData, upsellBanner: { ...upsellBanner, [field]: value } });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiPackageVariantClosedCheck} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Trang sản phẩm: {formData.title}</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="custom-scrollbar max-h-[70vh] overflow-y-auto p-3 md:p-4">
            <Tabs defaultValue="info">
              <TabsList variant="line" className="mb-4 h-auto flex-wrap">
                <TabsTrigger value="info">Thông tin & Giá</TabsTrigger>
                <TabsTrigger value="gallery">Thư viện ảnh</TabsTrigger>
                {isCombo && <TabsTrigger value="bundle">Combo Bundle</TabsTrigger>}
                <TabsTrigger value="content">Nội dung & Thành phần</TabsTrigger>
                {isCombo && <TabsTrigger value="usage">Cách dùng</TabsTrigger>}
                {isCreamOrSerum && <TabsTrigger value="banners">Banner</TabsTrigger>}
                <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
              </TabsList>

              {/* --- Tab: Info & Pricing --- */}
              <TabsContent value="info" className="space-y-4">
                <div className="space-y-1.5">
                  <Label>Tên sản phẩm</Label>
                  <Input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Mô tả</Label>
                  <Textarea
                    rows={3}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Huy hiệu (Badge)</Label>
                  <Input
                    type="text"
                    placeholder="vd: Đáng mua nhất"
                    value={formData.badge || ""}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label>Tags tính năng ({formData.tags.length})</Label>
                    <Button type="button" onClick={handleAddTag} size="sm" variant="accentV1">
                      <Icon path={mdiPlus} size={0.7} />
                      <span>Thêm tag</span>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {formData.tags.map((tag, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Input
                          type="text"
                          value={tag}
                          onChange={(e) => handleTagChange(idx, e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(idx)}
                          className="p-1 text-red-500 hover:text-red-400"
                        >
                          <Icon path={mdiTrashCanOutline} size={0.8} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3 md:grid-cols-3">
                  <div className="space-y-1.5">
                    <Label>Giá gốc (gạch chân)</Label>
                    <Input
                      type="text"
                      value={formData.pricing.oldPrice}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pricing: { ...formData.pricing, oldPrice: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Giá bán</Label>
                    <Input
                      type="text"
                      required
                      value={formData.pricing.price}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pricing: { ...formData.pricing, price: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Nhãn giảm giá</Label>
                    <Input
                      type="text"
                      placeholder="vd: GIẢM 8%"
                      value={formData.pricing.discountLabel || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pricing: { ...formData.pricing, discountLabel: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
              </TabsContent>

              {/* --- Tab: Gallery --- */}
              <TabsContent value="gallery" className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Ảnh thư viện ({formData.galleryImages.length})</Label>
                  <Button
                    type="button"
                    onClick={handleAddGalleryImage}
                    size="sm"
                    variant="accentV1"
                  >
                    <Icon path={mdiPlus} size={0.7} />
                    <span>Thêm ảnh</span>
                  </Button>
                </div>
                <div className="space-y-3">
                  {formData.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-2"
                    >
                      <div className="flex-1">
                        <ImageInputWithUpload
                          value={img}
                          onChange={(val) => handleGalleryChange(idx, val)}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveGalleryImage(idx)}
                        className="mt-2 p-1 text-red-500 hover:text-red-400"
                      >
                        <Icon path={mdiTrashCanOutline} size={0.8} />
                      </button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* --- Tab: Bundle --- */}
              {isCombo && (
                <TabsContent value="bundle" className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Sản phẩm trong Combo ({formData.bundleItems.length})</Label>
                    <Button
                      type="button"
                      onClick={handleAddBundleItem}
                      size="sm"
                      variant="accentV1"
                    >
                      <Icon path={mdiPlus} size={0.7} />
                      <span>Thêm sản phẩm</span>
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {formData.bundleItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="space-y-3 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="rounded bg-primaryV1/10 px-2 py-1 text-xs font-semibold text-primaryV1">
                            Sản phẩm #{idx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveBundleItem(idx)}
                            className="p-1 text-red-500 hover:text-red-400"
                          >
                            <Icon path={mdiTrashCanOutline} size={0.8} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                          <div className="space-y-1.5">
                            <Label>Tên sản phẩm</Label>
                            <Input
                              type="text"
                              required
                              value={item.title}
                              onChange={(e) => handleBundleChange(idx, "title", e.target.value)}
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label>Giá</Label>
                            <Input
                              type="text"
                              required
                              value={item.price}
                              onChange={(e) => handleBundleChange(idx, "price", e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <Label>Link chi tiết</Label>
                          <Input
                            type="text"
                            required
                            value={item.link}
                            onChange={(e) => handleBundleChange(idx, "link", e.target.value)}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label>Ảnh sản phẩm</Label>
                          <ImageInputWithUpload
                            value={item.image}
                            onChange={(val) => handleBundleChange(idx, "image", val)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              )}

              {/* --- Tab: Content & Ingredients --- */}
              <TabsContent value="content" className="space-y-5">
                <div className="space-y-1.5">
                  <Label>Phù hợp cho (Suitability)</Label>
                  <Input
                    type="text"
                    required
                    value={formData.suitability}
                    onChange={(e) => setFormData({ ...formData, suitability: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label>Công dụng ({formData.uses.length})</Label>
                    <Button type="button" onClick={handleAddUse} size="sm" variant="accentV1">
                      <Icon path={mdiPlus} size={0.7} />
                      <span>Thêm dòng</span>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {formData.uses.map((use, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Input
                          type="text"
                          value={use}
                          onChange={(e) => handleUseChange(idx, e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveUse(idx)}
                          className="p-1 text-red-500 hover:text-red-400"
                        >
                          <Icon path={mdiTrashCanOutline} size={0.8} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label>Thành phần nổi bật ({formData.keyIngredients.length})</Label>
                    <Button
                      type="button"
                      onClick={handleAddKeyIngredient}
                      size="sm"
                      variant="accentV1"
                    >
                      <Icon path={mdiPlus} size={0.7} />
                      <span>Thêm thành phần</span>
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {formData.keyIngredients.map((ing, idx) => (
                      <div
                        key={idx}
                        className="space-y-2 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3"
                      >
                        <div className="flex items-center justify-between">
                          <Input
                            type="text"
                            required
                            className="mr-2 flex-1"
                            placeholder="Tên thành phần"
                            value={ing.name}
                            onChange={(e) => handleKeyIngredientChange(idx, "name", e.target.value)}
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveKeyIngredient(idx)}
                            className="p-1 text-red-500 hover:text-red-400"
                          >
                            <Icon path={mdiTrashCanOutline} size={0.8} />
                          </button>
                        </div>
                        <Textarea
                          rows={2}
                          required
                          placeholder="Mô tả công dụng..."
                          value={ing.description}
                          onChange={(e) =>
                            handleKeyIngredientChange(idx, "description", e.target.value)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label>
                      Chi tiết thành phần INCI (Drawer) ({formData.ingredientsDetail.length})
                    </Label>
                    <Button
                      type="button"
                      onClick={handleAddIngredientDetail}
                      size="sm"
                      variant="accentV1"
                    >
                      <Icon path={mdiPlus} size={0.7} />
                      <span>Thêm mục</span>
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {formData.ingredientsDetail.map((detail, idx) => (
                      <div
                        key={idx}
                        className="space-y-2 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3"
                      >
                        <div className="flex items-center justify-between">
                          <Input
                            type="text"
                            required
                            className="mr-2 flex-1"
                            placeholder="Tiêu đề (vd: Thành phần TINH CHẤT VỎ CHUỐI)"
                            value={detail.title}
                            onChange={(e) =>
                              handleIngredientDetailChange(idx, "title", e.target.value)
                            }
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveIngredientDetail(idx)}
                            className="p-1 text-red-500 hover:text-red-400"
                          >
                            <Icon path={mdiTrashCanOutline} size={0.8} />
                          </button>
                        </div>
                        <Textarea
                          rows={4}
                          required
                          placeholder="Danh sách INCI đầy đủ..."
                          value={detail.content}
                          onChange={(e) =>
                            handleIngredientDetailChange(idx, "content", e.target.value)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* --- Tab: Usage Steps --- */}
              {isCombo && (
                <TabsContent value="usage" className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Các bước sử dụng ({formData.usageSteps.length})</Label>
                    <Button type="button" onClick={handleAddUsageStep} size="sm" variant="accentV1">
                      <Icon path={mdiPlus} size={0.7} />
                      <span>Thêm bước</span>
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {formData.usageSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="space-y-3 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="rounded bg-primaryV1/10 px-2 py-1 text-xs font-semibold text-primaryV1">
                            {step.step || `Bước #${idx + 1}`}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveUsageStep(idx)}
                            className="p-1 text-red-500 hover:text-red-400"
                          >
                            <Icon path={mdiTrashCanOutline} size={0.8} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                          <div className="space-y-1.5">
                            <Label>Nhãn bước</Label>
                            <Input
                              type="text"
                              required
                              placeholder="vd: BƯỚC 1"
                              value={step.step}
                              onChange={(e) => handleUsageStepChange(idx, "step", e.target.value)}
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label>Kết cấu</Label>
                            <Input
                              type="text"
                              required
                              value={step.texture}
                              onChange={(e) =>
                                handleUsageStepChange(idx, "texture", e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <Label>Tiêu đề</Label>
                          <Input
                            type="text"
                            required
                            value={step.title}
                            onChange={(e) => handleUsageStepChange(idx, "title", e.target.value)}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label>Mô tả</Label>
                          <Textarea
                            rows={2}
                            required
                            value={step.description}
                            onChange={(e) =>
                              handleUsageStepChange(idx, "description", e.target.value)
                            }
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label>Vị trí ảnh</Label>
                          <div className="flex gap-3">
                            <label className="flex items-center gap-2 text-sm text-primaryV1">
                              <input
                                type="radio"
                                name={`imageSide-${idx}`}
                                checked={step.imageSide === "left"}
                                onChange={() => handleUsageStepChange(idx, "imageSide", "left")}
                              />
                              Trái
                            </label>
                            <label className="flex items-center gap-2 text-sm text-primaryV1">
                              <input
                                type="radio"
                                name={`imageSide-${idx}`}
                                checked={step.imageSide === "right"}
                                onChange={() => handleUsageStepChange(idx, "imageSide", "right")}
                              />
                              Phải
                            </label>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <Label>Ảnh minh họa</Label>
                          <ImageInputWithUpload
                            value={step.image}
                            onChange={(val) => handleUsageStepChange(idx, "image", val)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              )}

              {/* --- Tab: Banners (Usage Instruction + Upsell) --- */}
              {isCreamOrSerum && (
                <TabsContent value="banners" className="space-y-5">
                  <div className="space-y-3 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3">
                    <Label className="text-sm font-semibold">Banner Cách sử dụng</Label>
                    <div className="space-y-1.5">
                      <Label>Tiêu đề</Label>
                      <Input
                        type="text"
                        value={usageInstructionBanner.title}
                        onChange={(e) =>
                          handleUsageInstructionBannerChange("title", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Mô tả</Label>
                      <Textarea
                        rows={3}
                        value={usageInstructionBanner.description}
                        onChange={(e) =>
                          handleUsageInstructionBannerChange("description", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Ảnh minh họa</Label>
                      <ImageInputWithUpload
                        value={usageInstructionBanner.image}
                        onChange={(val) => handleUsageInstructionBannerChange("image", val)}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <Label>Thông tin sử dụng ({usageInstructionBanner.usageInfo.length})</Label>
                        <Button
                          type="button"
                          onClick={handleAddUsageInfo}
                          size="sm"
                          variant="accentV1"
                        >
                          <Icon path={mdiPlus} size={0.7} />
                          <span>Thêm dòng</span>
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {usageInstructionBanner.usageInfo.map((info, idx) => (
                          <div key={idx} className="flex gap-2">
                            <Input
                              type="text"
                              placeholder="Nhãn (vd: Liều lượng:)"
                              value={info.label}
                              onChange={(e) => handleUsageInfoChange(idx, "label", e.target.value)}
                            />
                            <Input
                              type="text"
                              placeholder="Giá trị"
                              value={info.value}
                              onChange={(e) => handleUsageInfoChange(idx, "value", e.target.value)}
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveUsageInfo(idx)}
                              className="p-1 text-red-500 hover:text-red-400"
                            >
                              <Icon path={mdiTrashCanOutline} size={0.8} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3">
                    <Label className="text-sm font-semibold">Banner Upsell (Combo)</Label>
                    <div className="space-y-1.5">
                      <Label>Huy hiệu (Badge)</Label>
                      <Input
                        type="text"
                        placeholder="vd: ĐÁNG MUA NHẤT"
                        value={upsellBanner.badge || ""}
                        onChange={(e) => handleUpsellBannerChange("badge", e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Tiêu đề</Label>
                      <Input
                        type="text"
                        value={upsellBanner.title}
                        onChange={(e) => handleUpsellBannerChange("title", e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Mô tả</Label>
                      <Textarea
                        rows={3}
                        value={upsellBanner.description}
                        onChange={(e) => handleUpsellBannerChange("description", e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label>Nội dung nút bấm</Label>
                        <Input
                          type="text"
                          value={upsellBanner.buttonText}
                          onChange={(e) => handleUpsellBannerChange("buttonText", e.target.value)}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Link nút bấm</Label>
                        <Input
                          type="text"
                          value={upsellBanner.buttonLink}
                          onChange={(e) => handleUpsellBannerChange("buttonLink", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label>Ảnh minh họa</Label>
                      <ImageInputWithUpload
                        value={upsellBanner.image}
                        onChange={(val) => handleUpsellBannerChange("image", val)}
                      />
                    </div>
                  </div>
                </TabsContent>
              )}

              {/* --- Tab: Reviews --- */}
              <TabsContent value="reviews" className="space-y-4">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label>Điểm đánh giá trung bình</Label>
                    <Input
                      type="text"
                      placeholder="vd: 4.9"
                      value={formData.ratingValue}
                      onChange={(e) => setFormData({ ...formData, ratingValue: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Số lượng đánh giá</Label>
                    <Input
                      type="text"
                      placeholder="vd: 120 người"
                      value={formData.ratingCount}
                      onChange={(e) => setFormData({ ...formData, ratingCount: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label>Đánh giá của khách hàng ({formData.reviews.length})</Label>
                  <Button type="button" onClick={handleAddReview} size="sm" variant="accentV1">
                    <Icon path={mdiPlus} size={0.7} />
                    <span>Thêm đánh giá</span>
                  </Button>
                </div>
                <div className="space-y-3">
                  {formData.reviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="space-y-2 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3"
                    >
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div className="space-y-1.5">
                          <Label>Tên khách hàng</Label>
                          <Input
                            type="text"
                            required
                            value={review.name}
                            onChange={(e) => handleReviewChange(idx, "name", e.target.value)}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label>Số sao (1-5)</Label>
                          <Input
                            type="number"
                            min={1}
                            max={5}
                            required
                            value={review.stars}
                            onChange={(e) =>
                              handleReviewChange(idx, "stars", Number(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Textarea
                          rows={2}
                          required
                          className="flex-1"
                          value={review.content}
                          onChange={(e) => handleReviewChange(idx, "content", e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveReview(idx)}
                          className="p-1 text-red-500 hover:text-red-400"
                        >
                          <Icon path={mdiTrashCanOutline} size={0.8} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setActiveModal(null)}>
              <Icon path={mdiClose} size={0.8} className="flex-shrink-0" />
              <span>Hủy</span>
            </Button>
            <Button type="submit" variant="primaryV1">
              <Icon path={mdiContentSave} size={0.8} className="flex-shrink-0" />
              <span>Cập nhật Trang sản phẩm</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
