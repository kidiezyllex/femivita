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

export const DesktopBrandIntro: React.FC<BrandIntroProps> = ({ data }) => {
  const total = data.slides.length;
  const { index, isFirst, isLast, prev, next } = useBrandIntroSlider(total);

  return (
    <div className="px-12 py-20">
      <ScrollReveal direction="up" delay={0.05}>
        <div className="flex flex-col gap-2">
          <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="max-w-[1031px] font-sans text-[32px] font-medium leading-[1.4] text-black">
            {data.headline}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} className="pt-16">
        <div className="relative grid h-[600px] grid-cols-12 gap-x-4 overflow-hidden rounded-2xl bg-brand-panel p-8">
          <BrandIntroDecor textureImage={data.textureImage} />

          <div className="relative col-span-6 col-start-1 row-start-1 flex flex-col gap-[60px]">
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

          <IntroPicture
            src={data.pictureImage}
            alt={data.pictureAlt}
            className="col-span-6 col-start-7 row-start-1 self-stretch"
          />
        </div>
      </ScrollReveal>
    </div>
  );
};
