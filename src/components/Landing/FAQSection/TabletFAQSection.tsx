"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { mdiChevronDown } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { DEFAULT_FAQ_SECTION_DATA, FAQSectionProps } from "./types";

export const TabletFAQSection: React.FC<FAQSectionProps> = ({
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
    <div className="w-full overflow-hidden bg-creamBackgroundV1 px-8 py-16">
      <div className="mx-auto flex flex-col gap-5">
        {/* Header Block */}
        <div className="flex flex-col">
          <span className="mb-2 text-base uppercase leading-[160%] text-supportV1">
            {data?.subtitle || "Câu hỏi thường gặp"}
          </span>

          <h2 className="mb-2 text-4xl font-bold leading-[125%] text-primaryV1">
            {data?.title || "Tìm hiểu về"}{" "}
            {data?.highlightWord && <span className="text-accentV1">{data.highlightWord}</span>}
          </h2>

          <p className="text-base leading-[160%] text-secondaryV1">
            {data?.description ||
              "Câu trả lời rõ ràng cho những thắc mắc phổ biến nhất về sản phẩm, thành phần và cách Musase chăm sóc làn da bạn."}
          </p>
        </div>

        {/* Tabs + Accordions */}
        <div className="w-full">
          {/* Tabs Navigation Header with Smooth Sliding Underline */}
          <div className="relative grid grid-cols-2 border-b border-primaryV1/20">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`cursor-pointer select-none py-4 text-center align-middle text-lg font-semibold leading-none transition-colors duration-200 ${
                    isActive ? "font-bold text-primaryV1" : "text-primaryV1/60 hover:text-primaryV1"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}

            {/* Sliding Underline Bar */}
            <motion.div
              className="absolute -bottom-0.5 h-[2px] bg-primaryV1"
              initial={false}
              animate={{
                left: `${(activeTabIndex / tabCount) * 100}%`,
                width: `${100 / tabCount}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
              }}
            />
          </div>

          {/* Accordion Questions List */}
          <div className="flex flex-col">
            {activeTab.items?.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div key={item.id} className="flex flex-col border-t border-primaryV1 py-4">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="group flex w-full cursor-pointer select-none items-center justify-between text-left focus:outline-none"
                  >
                    <span className="pr-3 text-lg font-bold leading-[140%] text-primaryV1 transition-colors duration-200 group-hover:text-primaryV1/80">
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
                          marginTop: 10,
                        }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm font-normal leading-[160%] text-secondaryV1">
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
export default TabletFAQSection;
