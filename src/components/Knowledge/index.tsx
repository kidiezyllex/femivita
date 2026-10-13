"use client";

import { CategoryList } from "@/components/ui/CategoryList";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React, { useMemo, useState } from "react";
import { KnowledgeArticleItem } from "./KnowledgeArticleItem";
import { KnowledgePagination } from "./KnowledgePagination";
import { ALL_CATEGORY_ID, DEFAULT_KNOWLEDGE_LIST_DATA, KnowledgeListData } from "./types";

export * from "./types";

interface KnowledgeListSectionProps {
  data?: KnowledgeListData;
}

/** "Kiến thức" listing: category filter on the left, two-column article grid and pagination on the right. */
export const KnowledgeList: React.FC<KnowledgeListSectionProps> = ({
  data = DEFAULT_KNOWLEDGE_LIST_DATA,
}) => {
  const [categoryId, setCategoryId] = useState(ALL_CATEGORY_ID);
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      categoryId === ALL_CATEGORY_ID
        ? data.articles
        : data.articles.filter((article) => article.categoryId === categoryId),
    [data.articles, categoryId],
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / data.pageSize));
  const visible = filtered.slice((page - 1) * data.pageSize, page * data.pageSize);

  const selectCategory = (id: string) => {
    setCategoryId(id);
    setPage(1);
  };

  return (
    <section
      id="knowledge-list"
      className="mx-auto w-full max-w-[1440px] bg-white px-4 py-10 md:px-8 md:py-16 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:py-20"
    >
      <div className="pb-6 lg:col-span-2 lg:pb-0">
        <div className="lg:sticky lg:top-[104px] lg:py-10">
          <CategoryList
            label={data.categoryLabel}
            categories={data.categories}
            activeId={categoryId}
            onSelect={selectCategory}
          />
        </div>
      </div>

      <div className="min-w-0 lg:col-span-10">
        {visible.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {visible.map((article, index) => (
                <ScrollReveal key={article.id} direction="up" delay={(index % 2) * 0.1}>
                  <KnowledgeArticleItem article={article} readMoreLabel={data.readMoreLabel} />
                </ScrollReveal>
              ))}
            </div>
            <KnowledgePagination
              page={page}
              pageCount={pageCount}
              prevLabel={data.prevLabel}
              nextLabel={data.nextLabel}
              onChange={setPage}
            />
          </>
        ) : (
          <p className="py-10 font-google-sans text-lg leading-[1.6] text-ink-muted lg:px-10">
            {data.emptyMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default KnowledgeList;
