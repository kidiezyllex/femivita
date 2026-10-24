"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ProductInfographic } from "./types";

export const PRODUCT_DETAIL_GLOW =
  "pointer-events-none absolute right-[-1134px] top-[-1221px] h-[2085px] w-[2106px] bg-[radial-gradient(closest-side,rgba(179,118,194,1),rgba(219,193,243,0))] opacity-50";

export const ProductInfographics: React.FC<{
  infographics: ProductInfographic[];
  className?: string;
  /** Deliberately about twice the displayed width: the artwork is full of small text and must stay sharp on high-DPI screens. */
  sizes: string;
}> = ({ infographics, className, sizes }) => {
  if (infographics.length === 0) return null;

  return (
    <section className={cn("mx-auto grid w-full max-w-[1440px] gap-4 bg-white", className)}>
      {infographics.map((infographic, index) => (
        <ScrollReveal key={`${infographic.src}-${index}`} direction="up" delay={index * 0.1}>
          <div
            className={cn(
              "relative aspect-square w-full overflow-hidden rounded-2xl",
              infographic.backgroundClassName,
            )}
          >
            <Image
              src={infographic.src}
              alt={infographic.alt}
              fill
              quality={100}
              sizes={sizes}
              draggable={false}
              className={cn("object-cover", infographic.objectPositionClassName)}
            />
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
};
