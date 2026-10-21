"use client";

import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ProductFeatureData } from "../types";

export const ProductFeaturePhoto: React.FC<{
  product: ProductFeatureData;
  sizes: string;
  className?: string;
}> = ({ product, sizes, className }) => (
  <div className={cn("relative overflow-hidden", className)}>
    <Image
      src={product.photo}
      alt={product.photoAlt}
      fill
      quality={100}
      sizes={sizes}
      draggable={false}
      className="object-cover"
    />
  </div>
);

/** Square product picture, name, size and the CTA, revealed on scroll. */
export const ProductFeatureInfo: React.FC<{
  product: ProductFeatureData;
  ctaLabel: string;
  sizes: string;
  /** Extra classes for the square picture, e.g. a max width. */
  imageClassName?: string;
}> = ({ product, ctaLabel, sizes, imageClassName }) => (
  <ScrollReveal direction="up" delay={0.1} className="w-full">
    <div className="flex w-full flex-col items-center gap-4">
      <div className={cn("relative aspect-square w-full overflow-hidden rounded-[25px]", imageClassName)}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          quality={100}
          sizes={sizes}
          draggable={false}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center px-10">
        <h2 className="w-[250px] text-center font-google-sans text-xl font-medium leading-[1.6] text-ink-dark">
          {product.name}
        </h2>
        <p className="font-google-sans text-base leading-[1.6] text-ink-soft">{product.size}</p>
      </div>

      <PillLinkButton href={product.href} label={ctaLabel} variant="soft" />
    </div>
  </ScrollReveal>
);
