"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { FaqGroup } from "./FaqGroup";
import { FaqSupport } from "./FaqSupport";
import { DEFAULT_FAQ_PAGE_DATA, FaqPageData } from "./types";

export * from "./types";

interface FaqContentProps {
  data?: FaqPageData;
}

/** FAQ page body: a support block, the question groups, then a second support block (Figma 1440 wide). */
export const FaqContent: React.FC<FaqContentProps> = ({ data = DEFAULT_FAQ_PAGE_DATA }) => (
  <section
    id="faq-content"
    className="mx-auto w-full max-w-[1440px] bg-white px-4 py-12 md:px-8 md:py-16 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:py-20"
  >
    <ScrollReveal direction="up" delay={0.05} className="pb-12 lg:col-span-6 lg:col-start-7 lg:pb-16">
      <FaqSupport
        eyebrow={data.supportEyebrow}
        segments={data.supportIntro}
        ctaLabel={data.ctaLabel}
        ctaHref={data.ctaHref}
      />
    </ScrollReveal>

    {data.groups.map((group) => (
      <ScrollReveal key={group.id} direction="up" delay={0.05} className="lg:col-span-12">
        <FaqGroup group={group} emptyMessage={data.emptyMessage} />
      </ScrollReveal>
    ))}

    <ScrollReveal direction="up" delay={0.05} className="py-12 lg:col-span-6 lg:py-16">
      <FaqSupport
        segments={data.supportFollowUp}
        ctaLabel={data.ctaLabel}
        ctaHref={data.ctaHref}
      />
    </ScrollReveal>
  </section>
);

export default FaqContent;
