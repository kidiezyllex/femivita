"use client";

import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/ScrollReveal";
import React from "react";
import { BenefitItem, ProductCard, ShowcaseStage } from "./ProductShowcaseParts";
import { ProductShowcaseProps } from "./types";

export const TabletProductShowcase: React.FC<ProductShowcaseProps> = ({ data }) => (
  <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#EDE6F8_55%,#C3B2E8_100%)]">
    {/* Title */}
    <ScrollReveal direction="up" delay={0.05}>
      <div className="flex flex-col items-center gap-2 px-8 pt-16">
        <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
        <h2 className="font-sans text-4xl font-semibold leading-[1.3] text-black">
          {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>
        </h2>
      </div>
    </ScrollReveal>

    {/* Benefits */}
    <ScrollStagger className="grid grid-cols-2 justify-items-center gap-8 px-8 pt-12" staggerDelay={0.12}>
      {data.benefits.map((benefit) => (
        <ScrollStaggerItem key={benefit.title}>
          <BenefitItem benefit={benefit} />
        </ScrollStaggerItem>
      ))}
    </ScrollStagger>

    {/* Hero product stage */}
    <ShowcaseStage data={data} />

    {/* Product lineup */}
    <div className="flex flex-col gap-8 px-8 pb-12 pt-8">
      <ScrollReveal direction="up" delay={0.05}>
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-sans text-4xl font-semibold leading-[1.3] text-black">
            {data.lineupTitleStart}{" "}
            <span className="text-brand-text">{data.lineupTitleHighlight}</span>
          </h3>
          <PillLinkButton href={data.lineupCtaHref} label={data.lineupCtaLabel} />
        </div>
      </ScrollReveal>

      <ScrollStagger className="grid grid-cols-2 gap-x-6 gap-y-8" staggerDelay={0.1}>
        {data.products.map((product) => (
          <ScrollStaggerItem key={product.id}>
            <ProductCard product={product} />
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>
    </div>
  </div>
);

