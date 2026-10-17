"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { BrandIntroSlide } from "./types";

export const useBrandIntroSlider = (total: number) => {
  const [index, setIndex] = useState(0);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);

  return { index, isFirst: index === 0, isLast: index === total - 1, prev, next };
};

const pad = (value: number) => String(value).padStart(2, "0");

/** Blurred blobs and the rotated texture behind the slider card (positions from Figma, card is 1344 x 600). */
export const BrandIntroDecor: React.FC<{ textureImage: string }> = ({ textureImage }) => (
  <>
    <div
      aria-hidden
      className="absolute bottom-[-18.24%] left-[calc(50%+36.5px)] top-[55.17%] w-[405px] -translate-x-1/2 bg-[rgba(232,243,243,0.6)] blur-[107.5px]"
    />
    <div
      aria-hidden
      className="absolute left-[93px] top-[-12px] flex h-[794.757px] w-[898.249px] items-center justify-center"
    >
      <div className="flex-none -scale-y-100 rotate-[104.07deg]">
        <div className="relative h-[769px] w-[626.635px]">
          <Image
            src={textureImage}
            alt=""
            fill
            sizes="627px"
            draggable={false}
            className="object-cover"
          />
        </div>
      </div>
    </div>
    <div
      aria-hidden
      className="absolute bottom-[-123.56px] left-[-310.5px] flex h-[674.56px] w-[661.131px] items-center justify-center"
    >
      <div className="flex-none rotate-[18.06deg]">
        <div className="h-[540.185px] w-[519.222px] bg-brand-deep blur-[107.5px]" />
      </div>
    </div>
  </>
);

export const IntroPicture: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => (
  <div className={cn("relative overflow-hidden rounded-[20px]", className)}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 660px, (min-width: 768px) 50vw, 100vw"
      quality={100}
      draggable={false}
      className="object-cover"
    />
  </div>
);

export const SlideCounter: React.FC<{ current: number; total: number; className?: string }> = ({
  current,
  total,
  className,
}) => (
  <div className={cn("flex items-start text-white [font-family:Arial,Helvetica,sans-serif]", className)}>
    <p className="text-[56px] leading-[56px] md:text-[72px] md:leading-[72px] lg:text-[96px] lg:leading-[96px]">
      {pad(current)}
    </p>
    <div className="flex items-center justify-center py-2">
      <p className="text-2xl leading-8 tracking-[0.24px]">/ {pad(total)}</p>
    </div>
  </div>
);

const SliderButton: React.FC<{
  label: string;
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}> = ({ label, direction, disabled, onClick }) => (
  <button
    type="button"
    aria-label={label}
    disabled={disabled}
    onClick={onClick}
    className={cn(
      "flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors",
      disabled
        ? "cursor-default border-brand-light"
        : "cursor-pointer border-white hover:bg-white/10",
    )}
  >
    <Image
      src={disabled ? "/logos/slider-arrow-purple.svg" : "/logos/slider-arrow-white.svg"}
      alt=""
      width={16}
      height={16}
      draggable={false}
      className={direction === "prev" ? "rotate-180" : undefined}
    />
  </button>
);

export const SliderButtons: React.FC<{
  prevLabel: string;
  nextLabel: string;
  isFirst: boolean;
  isLast: boolean;
  onPrev: () => void;
  onNext: () => void;
}> = ({ prevLabel, nextLabel, isFirst, isLast, onPrev, onNext }) => (
  <div className="flex gap-2">
    <SliderButton label={prevLabel} direction="prev" disabled={isFirst} onClick={onPrev} />
    <SliderButton label={nextLabel} direction="next" disabled={isLast} onClick={onNext} />
  </div>
);

export const SlideText: React.FC<{ slide: BrandIntroSlide; className?: string }> = ({
  slide,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className={cn("absolute inset-x-0 top-0 flex w-full max-w-[437px] flex-col", className)}
  >
    <h3 className="font-sans text-xl font-medium leading-[1.4] text-white lg:text-2xl">{slide.title}</h3>
    <div className="flex flex-col gap-6 pt-6">
      {slide.lead && (
        <p className="font-google-sans text-base leading-[1.6] text-white/80">{slide.lead}</p>
      )}
      <p className="font-google-sans text-sm leading-[1.6] text-white/80">{slide.description}</p>
    </div>
  </motion.div>
);
