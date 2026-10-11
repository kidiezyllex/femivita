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
import { MissionPromiseData } from "@/types/storyPage";
import {
  mdiClose,
  mdiContentSave,
  mdiHandHeartOutline,
  mdiPlus,
  mdiTrashCanOutline,
} from "@mdi/js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MissionPromiseEditModal: React.FC = () => {
  const { activeModal, setActiveModal, storyData, updateSection } = useStory();
  const [formData, setFormData] = useState<MissionPromiseData>(storyData.missionPromise);

  const isOpen = activeModal === "missionPromise";

  useEffect(() => {
    if (isOpen) {
      setFormData(storyData.missionPromise);
    }
  }, [isOpen, storyData.missionPromise]);

  const promiseParagraphs = formData.promiseDescription || [];

  const handlePromiseParagraphChange = (index: number, value: string) => {
    const newParagraphs = [...promiseParagraphs];
    newParagraphs[index] = value;
    setFormData({ ...formData, promiseDescription: newParagraphs });
  };

  const handleAddPromiseParagraph = () => {
    setFormData({ ...formData, promiseDescription: [...promiseParagraphs, ""] });
  };

  const handleRemovePromiseParagraph = (index: number) => {
    if (promiseParagraphs.length <= 1) return;
    setFormData({
      ...formData,
      promiseDescription: promiseParagraphs.filter((_, i) => i !== index),
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("missionPromise", formData);
    setActiveModal(null);
    toast.success("Đã cập nhật Sứ mệnh & Cam kết (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiHandHeartOutline} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Sứ mệnh & Cam kết</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="space-y-3 md:space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar p-3 md:p-4">
            {/* Mission block */}
            <div className="space-y-3 border-b border-primaryV1/10 pb-4">
              <Label className="text-sm font-bold uppercase tracking-wider text-supportV1">
                Sứ mệnh
              </Label>
              <div className="space-y-1.5">
                <Label>Tiêu đề</Label>
                <Input
                  type="text"
                  required
                  value={formData.missionTitle}
                  onChange={(e) => setFormData({ ...formData, missionTitle: e.target.value })}
                  placeholder="Sứ mệnh"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Mô tả</Label>
                <Textarea
                  rows={4}
                  required
                  value={formData.missionDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, missionDescription: e.target.value })
                  }
                  placeholder="Nội dung sứ mệnh..."
                />
              </div>
              <div className="space-y-1.5">
                <Label>Hình ảnh</Label>
                <ImageInputWithUpload
                  required
                  value={formData.missionImage}
                  onChange={(val) => setFormData({ ...formData, missionImage: val })}
                  placeholder="/images/..."
                />
              </div>
            </div>

            {/* Promise block */}
            <div className="space-y-3">
              <Label className="text-sm font-bold uppercase tracking-wider text-supportV1">
                Cam kết
              </Label>
              <div className="space-y-1.5">
                <Label>Tiêu đề</Label>
                <Input
                  type="text"
                  required
                  value={formData.promiseTitle}
                  onChange={(e) => setFormData({ ...formData, promiseTitle: e.target.value })}
                  placeholder="Cam kết"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Các đoạn mô tả cam kết</Label>
                  <Button
                    type="button"
                    onClick={handleAddPromiseParagraph}
                    size="sm"
                    variant="accentV1"
                  >
                    <Icon path={mdiPlus} size={0.8} className="flex-shrink-0" />
                    <span>Thêm đoạn</span>
                  </Button>
                </div>
                <div className="space-y-2">
                  {promiseParagraphs.map((paragraph, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <Textarea
                        rows={3}
                        required
                        value={paragraph}
                        onChange={(e) => handlePromiseParagraphChange(idx, e.target.value)}
                        placeholder={`Đoạn cam kết ${idx + 1}...`}
                        className="flex-1"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemovePromiseParagraph(idx)}
                        className="text-red-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                        title="Xóa đoạn"
                      >
                        <Icon path={mdiTrashCanOutline} size={0.8} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label>Hình ảnh</Label>
                <ImageInputWithUpload
                  required
                  value={formData.promiseImage}
                  onChange={(val) => setFormData({ ...formData, promiseImage: val })}
                  placeholder="/images/..."
                />
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
