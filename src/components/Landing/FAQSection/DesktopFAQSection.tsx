"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { useOptionalLanding } from "@/context/LandingContext";
import { useIsPortraitViewport } from "@/hooks/useViewportOrientation";
import { mdiChevronDown } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { DEFAULT_FAQ_SECTION_DATA, FAQSectionProps } from "./types";

export const DesktopFAQSection: React.FC<FAQSectionProps> = ({
  data = DEFAULT_FAQ_SECTION_DATA,
}) => {
  const landing = useOptionalLanding();
  const showAdminBar = Boolean(landing?.isEditMode && landing?.isAdmin);
  const isPortrait = useIsPortraitViewport();

  const sectionMinHeightClass = isPortrait
    ? "h-fit"
    : showAdminBar
      ? "min-h-[calc(100vh-156px)]"
      : "min-h-[calc(100vh-94px)]";

  const tabs = data?.tabs?.length ? data.tabs : [];
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || "your-skin");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "skin-1": true,
    "skin-2": true,
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
    <div
      className={`w-full bg-creamBackgroundV1 ${sectionMinHeightClass} flex items-center justify-center px-8 py-16 lg:p-12 xl:p-16 xxl:p-20`}
    >
      <div className="grid w-full grid-cols-12 items-start gap-8 lg:gap-12 xl:gap-14 xxl:gap-16">
        {/* Left Column: Title Block (5 cols) */}
        <div className="col-span-5 flex flex-col justify-center">
          {/* Subtitle */}
          <span className="block text-lg uppercase leading-[160%] text-supportV1">
            {data?.subtitle || "Câu hỏi thường gặp"}
          </span>

          {/* Title */}
          <h2 className="mb-3 text-3xl font-bold leading-[115%] text-primaryV1 lg:text-4xl xl:mb-5 xl:text-5xl xxl:text-[56px] xxxl:text-[64px]">
            {data?.title || "Tìm hiểu về"}{" "}
            {data?.highlightWord && <span className="text-accentV1">{data.highlightWord}</span>}
          </h2>

          {/* Description */}
          <p className="text-sm leading-[160%] tracking-normal text-secondaryV1 lg:text-base xl:text-lg xxl:text-xl">
            {data?.description ||
              "Câu trả lời rõ ràng cho những thắc mắc phổ biến nhất về sản phẩm, thành phần và cách Musase chăm sóc làn da bạn."}
          </p>
        </div>

        {/* Right Column: Tabs + Accordions (7 cols) */}
        <div className="col-span-7 flex w-full flex-col justify-center">
          {/* Tabs Navigation Header with Smooth Sliding Underline */}
          <div className="relative grid grid-cols-2 border-b border-primaryV1">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`cursor-pointer select-none py-3.5 text-center align-middle text-base font-semibold leading-none tracking-normal transition-colors duration-200 xl:py-4 xl:text-xl ${
                    isActive ? "font-bold text-primaryV1" : "text-primaryV1/60 hover:text-primaryV1"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}

            {/* Sliding Underline Bar: Trượt mượt trái-sang-phải / phải-sang-trái */}
            <motion.div
              className="absolute bottom-0 h-[2px] bg-primaryV1"
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
                <div
                  key={item.id}
                  className="flex flex-col border-t border-primaryV1 py-3.5 xl:py-4"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="group flex w-full cursor-pointer select-none items-center justify-between text-left focus:outline-none"
                  >
                    <span className="pr-3 text-base font-bold leading-[135%] tracking-normal text-primaryV1 transition-colors duration-200 group-hover:text-primaryV1/80 xl:text-xl">
                      {item.question}
                    </span>
                    <Icon
                      path={mdiChevronDown}
                      className={`h-5 w-5 shrink-0 text-primaryV1 transition-transform duration-300 ${
                        isOpen ? "rotate-180 transform" : ""
                      }`}
                    />
                  </button>

                  {/* Answer Content - Animated */}
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
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-base font-normal leading-[160%] tracking-normal text-secondaryV1 xl:text-lg xxl:text-xl">
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

export default DesktopFAQSection;
