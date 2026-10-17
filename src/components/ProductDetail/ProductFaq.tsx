"use client";

import { FaqAccordionItem } from "@/components/Faq/FaqAccordionItem";
import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React, { useState } from "react";
import { ProductDetailFaq } from "./types";

/** Product FAQ on a grey band: heading and button on the left, accordion on the right (Figma "FAQ"). */
export const ProductFaq: React.FC<{ faq: ProductDetailFaq }> = ({ faq }) => {
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <section
      id="product-faq"
      className="w-full bg-ink-surface px-4 py-16 md:px-8 md:py-24 lg:px-8 lg:py-[200px]"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:gap-x-4">
        <ScrollReveal direction="up" delay={0.05} className="lg:col-span-4 lg:col-start-2">
          <div className="flex max-w-[324px] flex-col gap-2">
            <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{faq.eyebrow}</p>
            <h2 className="font-sans font-bold leading-[1.3] text-gray-700 [font-size:clamp(32px,3.34vw,48px)]">
              {faq.titleStart}
              <br />
              <span className="text-brand-text">{faq.titleHighlight}</span>
            </h2>
            <p className="font-google-sans text-base leading-[1.6] text-[#5E634D]">{faq.description}</p>
            <div className="pt-10">
              <PillLinkButton href={faq.ctaHref} label={faq.ctaLabel} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15} className="min-w-0 lg:col-span-5 lg:col-start-7">
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
