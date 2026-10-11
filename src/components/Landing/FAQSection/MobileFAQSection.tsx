"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { mdiChevronDown } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { DEFAULT_FAQ_SECTION_DATA, FAQSectionProps } from "./types";

export const MobileFAQSection: React.FC<FAQSectionProps> = ({
  data = DEFAULT_FAQ_SECTION_DATA,
}) => {
  const tabs = data?.tabs?.length ? data.tabs : [];
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || "your-skin");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "skin-1": true,
    "skin-2": false,
    "essence-1": true,
  });

  const activeTabIndex = Math.max(
    0,
    tabs.findIndex((tab) => tab.id === activeTabId),
  );
  const activeTab = tabs[activeTabIndex] || tabs[0] || { label: "FAQ", items: [] };

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const tabCount = tabs.length || 2;

  return (
    <div className="w-full overflow-hidden bg-creamBackgroundV1 px-5 py-10">
      <div className="flex max-w-full flex-col gap-3">
        {/* Header Block */}
        <div className="flex flex-col">
          <span className="mb-3 block text-sm font-medium uppercase leading-[120%] text-supportV1">
            {data?.subtitle || "Câu hỏi thường gặp"}
          </span>

          <h2 className="mb-3 break-words text-[32px] font-bold leading-[140%] text-primaryV1">
            {data?.title || "Tìm hiểu về"} <br />
            {data?.highlightWord && <span className="text-accentV1">{data.highlightWord}</span>}
          </h2>

          <p className="break-words text-base font-normal leading-[160%] text-secondaryV1">
            {data?.description ||
              "Câu trả lời rõ ràng cho những thắc mắc phổ biến nhất về sản phẩm, thành phần và cách Musase chăm sóc làn da bạn."}
          </p>
        </div>

        {/* Tabs + Accordions */}
        <div className="w-full">
          {/* Tabs Navigation Header */}
          <div className="relative flex select-none flex-row border-b border-primaryV1">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative h-20 min-w-0 flex-1 cursor-pointer touch-manipulation select-none whitespace-normal p-5 px-4 text-center align-middle text-lg font-semibold leading-none transition-colors duration-200 ${
                    isActive
                      ? "border-b-2 font-bold text-primaryV1"
                      : "text-primaryV1/60 hover:text-primaryV1"
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeFaqTabUnderlineMobile"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-primaryV1"
                      transition={{
                        type: "tween",
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Accordion Questions List */}
          <div className="flex flex-col">
            {activeTab.items?.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 border-b border-primaryV1 py-5 last:border-b-0 last:pb-0"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="group flex w-full cursor-pointer touch-manipulation select-none items-start justify-between gap-2 text-left focus:outline-none"
                  >
                    <span className="break-words text-[24px] font-bold leading-[140%] text-primaryV1 transition-colors duration-200 group-hover:text-primaryV1/80">
                      {item.question}
                    </span>
                    <Icon
                      path={mdiChevronDown}
                      className={`h-5 w-5 shrink-0 text-primaryV1 transition-transform duration-300 ${
                        isOpen ? "rotate-180 transform" : ""
                      }`}
                    />
                  </button>

                  {/* Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="break-words text-base font-normal leading-[160%] text-secondaryV1">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileFAQSection;
