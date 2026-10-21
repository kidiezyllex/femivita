"use client";

import { FaqAccordionItem } from "@/components/Faq/FaqAccordionItem";
import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { ProductDetailFaq, ProductDetailVariant } from "./types";

const LAYOUT: Record<
  ProductDetailVariant,
  { section: string; grid: string; intro: string; list: string }
> = {
  mobile: { section: "px-4 py-16", grid: "grid gap-12", intro: "", list: "min-w-0" },
  tablet: { section: "px-8 py-24", grid: "grid gap-12", intro: "", list: "min-w-0" },
  desktop: {
    section: "px-8 py-[200px]",
    grid: "grid grid-cols-12 gap-x-4 gap-y-12",
    intro: "col-span-4 col-start-2",
    list: "col-span-5 col-start-7 min-w-0",
  },
};

/** Product FAQ on a grey band: heading and button on the left, accordion on the right (Figma "FAQ"). */
export const ProductFaq: React.FC<{ faq: ProductDetailFaq; variant: ProductDetailVariant }> = ({
  faq,
  variant,
}) => {
  const layout = LAYOUT[variant];
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <section id="product-faq" className={cn("w-full bg-ink-surface", layout.section)}>
      <div className={cn("mx-auto max-w-[1440px]", layout.grid)}>
        <ScrollReveal direction="up" delay={0.05} className={layout.intro}>
          <div className="flex max-w-[324px] flex-col gap-2">
            <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{faq.eyebrow}</p>
            <h2 className="font-sans font-bold leading-[1.3] text-gray-700 [font-size:clamp(32px,3.34vw,48px)]">
              {faq.titleStart}
              <br />
              <span className="text-brand-text">{faq.titleHighlight}</span>
            </h2>
            <p className="font-google-sans text-base leading-[1.6] text-[#5E634D]">
              {faq.description}
            </p>
            <div className="pt-8">
              <PillLinkButton href={faq.ctaHref} label={faq.ctaLabel} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15} className={layout.list}>
          <div>
            {faq.items.map((item) => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                isOpen={item.id === openId}
                onToggle={() => setOpenId(item.id === openId ? null : item.id)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
