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
import { Textarea } from "@/components/ui/textarea";
import { useStory } from "@/context/StoryContext";
import { StoryDetailsData } from "@/components/Story/StoryDetails/types";
import { mdiBookOpenPageVariantOutline, mdiClose, mdiContentSave, mdiPlus, mdiTrashCanOutline } from "@mdi/js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const StoryDetailsEditModal: React.FC = () => {
  const { activeModal, setActiveModal, storyData, updateSection } = useStory();
  const [formData, setFormData] = useState<StoryDetailsData>(storyData.storyDetails);

  const isOpen = activeModal === "storyDetails";

  useEffect(() => {
    if (isOpen) {
      setFormData(storyData.storyDetails);
    }
  }, [isOpen, storyData.storyDetails]);

  const paragraphs = formData.paragraphs || [];

  const handleParagraphChange = (index: number, value: string) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = value;
    setFormData({ ...formData, paragraphs: newParagraphs });
  };

  const handleAddParagraph = () => {
    setFormData({ ...formData, paragraphs: [...paragraphs, ""] });
  };

  const handleRemoveParagraph = (index: number) => {
    if (paragraphs.length <= 1) return;
    setFormData({ ...formData, paragraphs: paragraphs.filter((_, i) => i !== index) });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("storyDetails", formData);
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Phụ đề</Label>
                <Input
                  type="text"
                  required
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Câu chuyện thương hiệu"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Tiêu đề</Label>
                <Input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Về MUSASE"
                />
              </div>
            </div>

            {/* Paragraphs list */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <Label>Các đoạn nội dung</Label>
                <Button type="button" onClick={handleAddParagraph} size="sm" variant="accentV1">
                  <Icon path={mdiPlus} size={0.8} className="flex-shrink-0" />
                  <span>Thêm đoạn</span>
                </Button>
              </div>
              <div className="space-y-2">
                {paragraphs.map((paragraph, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <Textarea
                      rows={4}
                      required
                      value={paragraph}
                      onChange={(e) => handleParagraphChange(idx, e.target.value)}
                      placeholder={`Đoạn nội dung ${idx + 1}...`}
                      className="flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveParagraph(idx)}
                      className="text-red-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                      title="Xóa đoạn"
                    >
                      <Icon path={mdiTrashCanOutline} size={0.8} />
                    </button>
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
