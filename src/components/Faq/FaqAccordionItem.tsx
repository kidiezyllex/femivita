import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaqQuestion } from "./types";

interface FaqAccordionItemProps {
  item: FaqQuestion;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-brand-rule">
    <h3>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        onClick={onToggle}
        className="flex min-h-[96px] w-full cursor-pointer items-center justify-between gap-8 py-8 text-left"
      >
        <span className="font-google-sans text-lg leading-[1.6] text-black lg:text-xl">
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
        <p className="pb-8 font-google-sans text-base leading-[1.6] text-[#141414]/60">{item.answer}</p>
      </div>
    </div>
  </div>
);
