"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import {
  BrandIntroDecor,
  IntroPicture,
  SlideCounter,
  SliderButtons,
  SlideText,
  useBrandIntroSlider,
} from "./BrandIntroParts";
import { BrandIntroProps } from "./types";

export const TabletBrandIntro: React.FC<BrandIntroProps> = ({ data }) => {
  const total = data.slides.length;
  const { index, isFirst, isLast, prev, next } = useBrandIntroSlider(total);

  return (
    <div className="px-8 py-16">
      <ScrollReveal direction="up" delay={0.05}>
        <div className="flex flex-col gap-2">
          <p className="font-google-sans text-base leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="font-sans text-[28px] font-medium leading-[1.4] text-black">
            {data.headline}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} className="pt-12">
        <div className="relative grid min-h-[520px] grid-cols-2 gap-x-6 overflow-hidden rounded-2xl bg-brand-panel p-6">
          <BrandIntroDecor textureImage={data.textureImage} />

          <div className="relative flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-4">
              <SlideCounter current={index + 1} total={total} />
              <SliderButtons
                prevLabel={data.prevLabel}
                nextLabel={data.nextLabel}
                isFirst={isFirst}
                isLast={isLast}
                onPrev={prev}
                onNext={next}
              />
            </div>
            <SlideText slide={data.slides[index]} />
          </div>

          <IntroPicture src={data.pictureImage} alt={data.pictureAlt} className="relative" />
        </div>
      </ScrollReveal>
    </div>
  );
};
