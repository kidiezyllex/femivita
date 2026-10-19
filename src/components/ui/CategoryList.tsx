import { cn } from "@/lib/utils";
import React from "react";

export interface CategoryItem {
  id: string;
  label: string;
}

interface CategoryListProps {
  label: string;
  categories: CategoryItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

/** Category filter: a vertical list with a left rule from lg up, a scrollable row with a bottom rule below. */
export const CategoryList: React.FC<CategoryListProps> = ({
  label,
  categories,
  activeId,
  onSelect,
}) => (
  <nav aria-label={label}>
    <ul className="hide-scrollbar flex gap-2 overflow-x-auto lg:flex-col lg:gap-6 lg:overflow-visible">
      {categories.map((category) => {
        const isActive = category.id === activeId;

        return (
          <li key={category.id} className="shrink-0">
            <button
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(category.id)}
              className={cn(
                "block w-full cursor-pointer whitespace-nowrap border-b px-4 py-2 text-left font-[Arial,Helvetica,sans-serif] text-base leading-4 tracking-[0.16px] transition-colors lg:border-b-0 lg:border-l-2",
                isActive
                  ? "border-brand-text text-brand-text"
                  : "border-ink-line text-ink-dark hover:text-brand-text",
              )}
            >
              {category.label}
            </button>
          </li>
        );
      })}
    </ul>
  </nav>
);
