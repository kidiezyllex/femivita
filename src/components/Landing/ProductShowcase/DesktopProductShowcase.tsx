"use client";

import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import React from "react";
import { BenefitItem, ProductCard, ShowcaseStage } from "./ProductShowcaseParts";
import { ProductShowcaseProps } from "./types";

const HEADING_CLASS =
  "font-sans font-bold leading-[1.3] text-gray-700 [font-size:clamp(32px,3.34vw,48px)]";

export const DesktopProductShowcase: React.FC<ProductShowcaseProps> = ({ data }) => (
  <div className="relative overflow-hidden bg-brand-lavender">
    <div className="absolute inset-x-0 top-[-6.73%] h-full">
      <Image
        src="/images/product-showcase/background.jpg"
        alt=""
        fill
        quality={100}
        sizes="100vw"
        draggable={false}
        className="object-cover"
      />
    </div>

    <div className="relative">
      {/* Title */}
      <ScrollReveal direction="up" delay={0.05}>
        <div className="flex flex-col items-center pt-20">
        <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">
            {data.eyebrow}
          </p>
          <h2 className={HEADING_CLASS}>
            {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollStagger
        className="flex items-start justify-between px-8 pt-20 xl:px-[161px]"
        staggerDelay={0.15}
      >
        {data.benefits.map((benefit) => (
          <ScrollStaggerItem key={benefit.title}>
            <BenefitItem benefit={benefit} />
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>

      {/* Hero product stage */}
      <ShowcaseStage data={data} />

      {/* Product lineup */}
      <div className="w-full pb-8 pt-20 px-12">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="grid grid-cols-12 gap-x-4 pb-10">
            <h3 className={`col-span-7 col-start-2 flex items-end ${HEADING_CLASS}`}>
              <span>
                {data.lineupTitleStart}{" "}
                <span className="text-brand-text">{data.lineupTitleHighlight}</span>
              </span>
            </h3>
            <div className="col-span-3 col-start-9 flex items-end justify-end">
              <PillLinkButton href={data.lineupCtaHref} label={data.lineupCtaLabel} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollStagger className="grid grid-cols-12 gap-x-4 gap-y-10" staggerDelay={0.1}>
          {data.products.map((product) => (
            <ScrollStaggerItem key={product.id} className="col-span-3">
              <ProductCard product={product} />
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </div>
  </div>
);
