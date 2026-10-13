"use client";

import { CategoryList } from "@/components/ui/CategoryList";
import React, { useState } from "react";
import { FaqAccordionItem } from "./FaqAccordionItem";
import { FaqGroupData } from "./types";

interface FaqGroupProps {
  group: FaqGroupData;
  emptyMessage: string;
}

/** One FAQ topic: title (and optional category filter) on the left, the accordion on the right. */
export const FaqGroup: React.FC<FaqGroupProps> = ({ group, emptyMessage }) => {
  const [categoryId, setCategoryId] = useState(group.categories?.[0]?.id);
  const [openId, setOpenId] = useState<string | null>(null);

  const questions = group.categories
    ? group.questions.filter((question) => question.categoryId === categoryId)
    : group.questions;

  const selectCategory = (id: string) => {
    setCategoryId(id);
    setOpenId(null);
  };

  return (
    <section
      aria-labelledby={`faq-group-${group.id}`}
      className="border-t border-brand-rule lg:flex lg:gap-4"
    >
      <div className="pb-4 pt-8 lg:flex-1">
        <div className="lg:sticky lg:top-[104px]">
          <h2
            id={`faq-group-${group.id}`}
            className="font-[Arial,Helvetica,sans-serif] text-2xl leading-[1.45] text-ink-dark lg:text-[31px] lg:leading-[44.8px]"
          >
            {group.title}
          </h2>
          {group.categories && (
            <div className="pt-4 lg:py-10">
              <CategoryList
                label={group.title}
                categories={group.categories}
                activeId={categoryId ?? ""}
                onSelect={selectCategory}
              />
            </div>
          )}
        </div>
      </div>

      <div className="min-w-0 lg:flex-1">
        {questions.length > 0 ? (
          questions.map((question) => (
            <FaqAccordionItem
              key={question.id}
              item={question}
              isOpen={question.id === openId}
              onToggle={() => setOpenId(question.id === openId ? null : question.id)}
            />
          ))
        ) : (
          <p className="border-b border-brand-rule py-8 font-google-sans text-base leading-[1.6] text-[#141414]/60">
            {emptyMessage}
          </p>
        )}
      </div>
    </section>
  );
};
