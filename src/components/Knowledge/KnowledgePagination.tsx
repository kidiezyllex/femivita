import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PAGER_TEXT = "font-[Arial,Helvetica,sans-serif] text-base leading-4 tracking-[0.16px]";

interface KnowledgePaginationProps {
  page: number;
  pageCount: number;
  prevLabel: string;
  nextLabel: string;
  onChange: (page: number) => void;
}

const PagerText: React.FC<{ label: string; disabled: boolean; onClick: () => void }> = ({
  label,
  disabled,
  onClick,
}) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={cn(
      PAGER_TEXT,
      "border-b border-ink-dark/60 pb-1 text-ink-muted transition-colors",
      disabled ? "cursor-default" : "cursor-pointer hover:border-brand hover:text-brand",
    )}
  >
    {label}
  </button>
);

const PagerArrow: React.FC<{
  label: string;
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}> = ({ label, direction, disabled, onClick }) => (
  <button
    type="button"
    aria-label={label}
    disabled={disabled}
    onClick={onClick}
    className={cn(
      "flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors",
      disabled ? "cursor-default border-[#808080]" : "cursor-pointer border-brand hover:bg-brand-pink",
    )}
  >
    <Image
      src={disabled ? "/logos/pager-arrow-grey.svg" : "/logos/pager-arrow-purple.svg"}
      alt=""
      width={16}
      height={16}
      draggable={false}
      className={direction === "prev" ? "rotate-180" : undefined}
    />
  </button>
);

export const KnowledgePagination: React.FC<KnowledgePaginationProps> = ({
  page,
  pageCount,
  prevLabel,
  nextLabel,
  onChange,
}) => {
  const isFirst = page <= 1;
  const isLast = page >= pageCount;

  return (
    <div className="flex flex-col gap-6 pt-12 lg:pt-20">
      <nav aria-label="Phân trang" className="flex items-center justify-center gap-6 md:gap-12">
        <PagerText label={prevLabel} disabled={isFirst} onClick={() => onChange(page - 1)} />
        <ul className="flex items-center gap-1">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
            <li key={number}>
              <button
                type="button"
                aria-current={number === page ? "page" : undefined}
                onClick={() => onChange(number)}
                className={cn(
                  PAGER_TEXT,
                  "flex size-[42px] cursor-pointer items-center justify-center rounded transition-colors",
                  number === page ? "bg-brand-text text-white" : "text-ink-dark hover:bg-brand-pink",
                )}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <PagerText label={nextLabel} disabled={isLast} onClick={() => onChange(page + 1)} />
      </nav>

      <div className="flex gap-2">
        <PagerArrow label={prevLabel} direction="prev" disabled={isFirst} onClick={() => onChange(page - 1)} />
        <PagerArrow label={nextLabel} direction="next" disabled={isLast} onClick={() => onChange(page + 1)} />
      </div>
    </div>
  );
};
