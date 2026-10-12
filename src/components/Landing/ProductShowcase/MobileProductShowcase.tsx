import { PillLinkButton } from "@/components/ui/PillLinkButton";
import Image from "next/image";
import React from "react";
import { BenefitItem, ProductCard, SpotlightCard } from "./ProductShowcaseParts";
import { ProductShowcaseProps } from "./types";

export const MobileProductShowcase: React.FC<ProductShowcaseProps> = ({ data }) => (
  <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#EDE6F8_55%,#C3B2E8_100%)]">
    {/* Title */}
    <div className="flex flex-col items-center gap-2 px-4 pt-12 text-center">
      <p className="font-google-sans text-base leading-[1.6] text-ink-muted">{data.eyebrow}</p>
      <h2 className="font-sans text-[32px] font-semibold leading-[1.3] text-black">
        {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>
      </h2>
    </div>

    {/* Benefits */}
    <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-6 px-4 pt-8">
      {data.benefits.map((benefit) => (
        <BenefitItem key={benefit.title} benefit={benefit} />
      ))}
    </div>

    {/* Hero product stage */}
    <div className="relative h-[480px] w-full overflow-hidden">
      <Image
        src={data.heroImage}
        alt={data.heroImageAlt}
        width={1024}
        height={1024}
        quality={100}
        sizes="620px"
        draggable={false}
        className="absolute left-1/2 top-1/2 h-auto w-[620px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[26.24deg]"
      />
    </div>
    <div className="flex justify-center px-4">
      <SpotlightCard data={data.spotlight} compact />
    </div>

    {/* Product lineup */}
    <div className="flex flex-col gap-6 px-4 pb-10 pt-12">
      <div className="flex flex-col items-start gap-4">
        <h3 className="font-sans text-[32px] font-semibold leading-[1.3] text-black">
          {data.lineupTitleStart}{" "}
          <span className="text-brand-text">{data.lineupTitleHighlight}</span>
        </h3>
        <PillLinkButton href={data.lineupCtaHref} label={data.lineupCtaLabel} />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
);
