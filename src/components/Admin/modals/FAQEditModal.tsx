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
import { useLanding } from "@/context/LandingContext";
import { FAQItem, FAQSectionData } from "@/types/landing";
import {
  mdiClose,
  mdiContentSave,
  mdiHelpCircleOutline,
  mdiPlus,
  mdiTrashCanOutline,
} from "@mdi/js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FAQEditModal: React.FC = () => {
  const { activeModal, setActiveModal, landingData, updateSection } = useLanding();
  const [formData, setFormData] = useState<FAQSectionData>(landingData.faqSection);
  const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);

  const isOpen = activeModal === "faqSection";

  useEffect(() => {
    if (isOpen) {
      setFormData(landingData.faqSection);
    }
  }, [isOpen, landingData.faqSection]);

  const currentTab = formData.tabs[selectedTabIdx] || formData.tabs[0];

  const handleTabLabelChange = (index: number, label: string) => {
    const newTabs = [...formData.tabs];
    newTabs[index] = { ...newTabs[index], label };
    setFormData({ ...formData, tabs: newTabs });
  };

  const handleAddQuestion = () => {
    const newTabs = [...formData.tabs];
    const newItems = [
      ...newTabs[selectedTabIdx].items,
      {
        id: `faq-${Date.now()}`,
        question: "Câu hỏi mới?",
        answer: "Câu trả lời chi tiết cho thắc mắc của khách hàng...",
      },
    ];
    newTabs[selectedTabIdx] = { ...newTabs[selectedTabIdx], items: newItems };
    setFormData({ ...formData, tabs: newTabs });
  };

  const handleQuestionChange = (itemIdx: number, field: keyof FAQItem, value: string) => {
    const newTabs = [...formData.tabs];
    const newItems = [...newTabs[selectedTabIdx].items];
    newItems[itemIdx] = { ...newItems[itemIdx], [field]: value };
    newTabs[selectedTabIdx] = { ...newTabs[selectedTabIdx], items: newItems };
    setFormData({ ...formData, tabs: newTabs });
  };

  const handleRemoveQuestion = (itemIdx: number) => {
    const newTabs = [...formData.tabs];
    if (newTabs[selectedTabIdx].items.length <= 1) {
      toast.warning("Mỗi tab cần có ít nhất 1 câu hỏi.");
      return;
    }
    const newItems = newTabs[selectedTabIdx].items.filter((_, i) => i !== itemIdx);
    newTabs[selectedTabIdx] = { ...newTabs[selectedTabIdx], items: newItems };
    setFormData({ ...formData, tabs: newTabs });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection("faqSection", formData);
    setActiveModal(null);
    toast.success(
      "Đã cập nhật Section Câu hỏi thường gặp (nhớ bấm Lưu ở thanh trên cùng để ghi dữ liệu)!",
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveModal(null)}>
      <DialogContent size="medium">
        <DialogHeader>
          <DialogTitle>
            <Icon path={mdiHelpCircleOutline} size={0.8} className="flex-shrink-0" />
            <span>Chỉnh sửa Câu hỏi thường gặp (FAQ)</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="custom-scrollbar max-h-[70vh] space-y-3 overflow-y-auto p-3 md:space-y-4 md:p-4">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Phụ đề (Badge)</Label>
                <Input
                  type="text"
                  required
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Phụ đề..."
                />
              </div>
              <div className="space-y-1.5">
                <Label>Từ nhấn mạnh (Màu cam)</Label>
                <Input
                  type="text"
                  value={formData.highlightWord || ""}
                  onChange={(e) => setFormData({ ...formData, highlightWord: e.target.value })}
                  placeholder="Từ khóa nổi bật..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
              <div className="space-y-1.5">
                <Label>Mô tả ngắn</Label>
                <Input
                  type="text"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Mô tả..."
                />
              </div>
            </div>

            {/* Tab selector and questions */}
            <div className="space-y-3 pt-2">
              <Label>Chọn Tab để chỉnh sửa câu hỏi</Label>
              <div className="flex gap-2 overflow-x-auto border-b border-primaryV1/20 pb-3">
                {formData.tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedTabIdx(idx)}
                    className={`cursor-pointer rounded px-4 py-2 text-sm font-semibold transition-all ${
                      selectedTabIdx === idx
                        ? "bg-primaryV1 text-creamBackgroundV1 shadow"
                        : "border border-primaryV1/20 bg-white text-primaryV1 hover:bg-creamBackgroundV1"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Edit Current Tab Label */}
              <div className="space-y-1.5">
                <Label>Tên Tab hiện tại</Label>
                <Input
                  type="text"
                  required
                  value={currentTab.label}
                  onChange={(e) => handleTabLabelChange(selectedTabIdx, e.target.value)}
                  placeholder="Tên Tab..."
                />
              </div>

              {/* Questions in this Tab */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <Label>Danh sách câu hỏi trong tab ({currentTab.items.length})</Label>
                  <Button type="button" onClick={handleAddQuestion} size="sm" variant="accentV1">
                    <Icon path={mdiPlus} size={0.8} className="flex-shrink-0" />
                    <span>Thêm câu hỏi</span>
                  </Button>
                </div>

                <div className="space-y-3">
                  {currentTab.items.map((item, idx) => (
                    <div
                      key={item.id || idx}
                      className="relative space-y-3 rounded-md border border-primaryV1/20 bg-[#FAF8F0] p-3 md:p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-primaryV1/10 px-2 py-1 text-xs font-semibold text-primaryV1">
                          Câu hỏi #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveQuestion(idx)}
                          className="cursor-pointer p-1 text-red-500 transition-colors hover:text-red-400"
                          title="Xóa câu hỏi"
                        >
                          <Icon path={mdiTrashCanOutline} size={0.8} />
                        </button>
                      </div>
                      <div className="space-y-1.5">
                        <Input
                          type="text"
                          required
                          placeholder="Nội dung câu hỏi..."
                          value={item.question}
                          onChange={(e) => handleQuestionChange(idx, "question", e.target.value)}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Textarea
                          rows={3}
                          required
                          placeholder="Nội dung câu trả lời..."
                          value={item.answer}
                          onChange={(e) => handleQuestionChange(idx, "answer", e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
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
