"use client";

import { CategoryList } from "@/components/ui/CategoryList";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLenis } from "lenis/react";
import React, { useMemo, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  const filtered = useMemo(
    () =>
      categoryId === ALL_CATEGORY_ID
        ? data.articles
        : data.articles.filter((article) => article.categoryIds.includes(categoryId)),
    [data.articles, categoryId],
  );
  // An article can belong to several categories. Inside a category tab its card shows that tab's label;
  // under "Tất cả" each card shows the article's own first category.
  const activeCategoryLabel =
    categoryId === ALL_CATEGORY_ID
      ? undefined
      : data.categories.find((category) => category.id === categoryId)?.label;
  const pageCount = Math.max(1, Math.ceil(filtered.length / data.pageSize));
  const visible = filtered.slice((page - 1) * data.pageSize, page * data.pageSize);

  // Header card is 104px tall; keep the top of the list just below it.
  const HEADER_OFFSET = 104;

  // After switching category, bring the top of the list back into view if the visitor had scrolled past it.
  const scrollToListTop = () => {
    const section = sectionRef.current;
    if (!section) return;

    const top = section.getBoundingClientRect().top;
    if (top >= HEADER_OFFSET) return;

    if (lenis) {
      lenis.scrollTo(section, { offset: -HEADER_OFFSET });
    } else {
      window.scrollTo({ top: window.scrollY + top - HEADER_OFFSET, behavior: "smooth" });
    }
  };

  const selectCategory = (id: string) => {
    setCategoryId(id);
    setPage(1);
    scrollToListTop();
  };

  return (
    <section
      ref={sectionRef}
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
                  <KnowledgeArticleItem
                    article={article}
                    readMoreLabel={data.readMoreLabel}
                    categoryLabel={activeCategoryLabel}
                  />
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
