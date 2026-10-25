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

export const MobileBrandIntro: React.FC<BrandIntroProps> = ({ data }) => {
  const total = data.slides.length;
  const { index, isFirst, isLast, prev, next } = useBrandIntroSlider(total);

  return (
    <div className="px-4 py-12">
      <ScrollReveal direction="up" delay={0.05}>
        <div className="flex flex-col gap-2">
          <p className="font-google-sans text-base leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="font-sans text-xl font-medium leading-[1.4] text-black">
            {data.headline}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} className="pt-8">
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-2xl bg-brand-panel p-4">
          <BrandIntroDecor textureImage={data.textureImage} />

          {/* Counter on the left, arrows on the same row on the right */}
          <div className="relative flex items-center justify-between gap-4">
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

          <IntroPicture
            src={data.pictureImage}
            alt={data.pictureAlt}
            className="relative aspect-[4/3] w-full"
          />

          <SlideText slide={data.slides[index]} className="relative max-w-none" />
        </div>
      </ScrollReveal>
    </div>
  );
};
