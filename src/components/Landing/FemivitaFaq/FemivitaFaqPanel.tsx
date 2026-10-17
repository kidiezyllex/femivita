"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { FemivitaFaqTab } from "./types";

interface FemivitaFaqPanelProps {
  tabs: FemivitaFaqTab[];
  emptyMessage: string;
  className?: string;
}

export const FemivitaFaqPanel: React.FC<FemivitaFaqPanelProps> = ({
  tabs,
  emptyMessage,
  className,
}) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
  const [openItemId, setOpenItemId] = useState<string | null>(activeTab?.items[0]?.id ?? null);

  if (!activeTab) return null;

  const handleSelectTab = (tab: FemivitaFaqTab) => {
    setActiveTabId(tab.id);
    setOpenItemId(tab.items[0]?.id ?? null);
  };

  return (
    <div className={cn("flex min-w-0 flex-col", className)}>
      {/* Tabs */}
      <div role="tablist" className="flex border-b border-primaryV1">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`faq-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`faq-panel-${tab.id}`}
              onClick={() => handleSelectTab(tab)}
              className={cn(
                "flex h-[68px] min-w-0 flex-1 cursor-pointer items-center justify-center border-b border-primaryV1 px-4 text-center font-sans text-base font-semibold leading-none text-primaryV1 transition-opacity md:px-6 md:text-lg xl:text-xl",
                isActive ? "border-b-2" : "opacity-70 hover:opacity-100",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Questions */}
      <div role="tabpanel" id={`faq-panel-${activeTab.id}`} aria-labelledby={`faq-tab-${activeTab.id}`}>
        {activeTab.items.length === 0 ? (
          <p className="border-b border-[#5A4E7D]/80 py-8 font-google-sans text-base leading-[1.6] text-[#141414]/60">
            {emptyMessage}
          </p>
        ) : (
          activeTab.items.map((item) => {
            const isOpen = item.id === openItemId;

            return (
              <div key={item.id} className="border-b border-[#5A4E7D]/80">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    onClick={() => setOpenItemId(isOpen ? null : item.id)}
                    className="flex w-full cursor-pointer items-center justify-between gap-8 pt-8 pb-4 text-left"
                  >
                    <span className="font-google-sans text-lg leading-[1.6] text-black xl:text-xl">
                      {item.question}
                    </span>
                    <Image
                      src={isOpen ? "/logos/faq-minus.svg" : "/logos/faq-plus.svg"}
                      alt=""
                      width={32}
                      height={32}
                      quality={100}
                      draggable={false}
                      className="shrink-0"
                    />
                  </button>
                </h3>

                <div
                  id={`faq-answer-${item.id}`}
                  aria-hidden={!isOpen}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 font-google-sans text-base leading-[1.6] text-[#141414]/60">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
