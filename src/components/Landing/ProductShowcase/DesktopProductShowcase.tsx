import { PillLinkButton } from "@/components/ui/PillLinkButton";
import Image from "next/image";
import React from "react";
import { BenefitItem, ProductCard, ShowcaseStage } from "./ProductShowcaseParts";
import { ProductShowcaseProps } from "./types";

const HEADING_CLASS =
  "font-sans font-semibold leading-[1.3] text-black [font-size:clamp(32px,3.34vw,48px)]";

export const DesktopProductShowcase: React.FC<ProductShowcaseProps> = ({ data }) => (
  <div className="relative overflow-hidden bg-brand-lavender">
    {/* Background: shifted up 6.73% as in Figma, the bottom edge shows the section color */}
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
      <div className="flex flex-col items-center gap-2 px-8 pt-20 xl:px-[161px]">
        <p className="whitespace-nowrap font-google-sans text-lg leading-[1.6] text-ink-muted">
          {data.eyebrow}
        </p>
        <h2 className={HEADING_CLASS}>
          {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>
        </h2>
      </div>

      {/* Benefits */}
      <div className="flex items-start justify-between px-8 pt-20 xl:px-[161px]">
        {data.benefits.map((benefit) => (
          <BenefitItem key={benefit.title} benefit={benefit} />
        ))}
      </div>

      {/* Hero product stage */}
      <ShowcaseStage data={data} />

      {/* Product lineup */}
      <div className="mx-auto grid w-full max-w-[1344px] grid-cols-12 gap-x-4 gap-y-10 px-8 pb-8 pt-20 min-[1440px]:px-0">
        <h3 className={`col-span-7 col-start-2 flex items-end ${HEADING_CLASS}`}>
          <span>
            {data.lineupTitleStart}{" "}
            <span className="text-brand-text">{data.lineupTitleHighlight}</span>
          </span>
        </h3>
        <div className="col-span-3 col-start-9 flex items-end justify-end pt-10">
          <PillLinkButton href={data.lineupCtaHref} label={data.lineupCtaLabel} />
        </div>

        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} className="col-span-3" />
        ))}
      </div>
    </div>
  </div>
);
