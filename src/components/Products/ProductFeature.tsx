"use client";

import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ProductFeatureData } from "./types";

interface ProductFeatureProps {
  product: ProductFeatureData;
  ctaLabel: string;
  /** Puts the lifestyle photo on the left and the text panel on the right (from md up). */
  reverse?: boolean;
}

/** One product row: a text panel with the packshot and a lifestyle photo, 720px high at 1440 (Figma "sec1"). */
export const ProductFeature: React.FC<ProductFeatureProps> = ({ product, ctaLabel, reverse = false }) => (
  <section className="grid grid-cols-1 bg-white md:grid-cols-2 lg:h-[720px]">
    <div
      className={cn(
        "relative order-1 aspect-[4/3] w-full overflow-hidden md:aspect-auto md:min-h-[420px]",
        reverse ? "md:order-1" : "md:order-2",
      )}
    >
      <Image
        src={product.photo}
        alt={product.photoAlt}
        fill
        quality={100}
        sizes="(min-width: 768px) 50vw, 100vw"
        draggable={false}
        className="object-cover"
      />
    </div>

    <div
      className={cn(
        "order-2 flex items-center justify-center overflow-hidden px-6 py-12 md:px-10 lg:px-20 lg:py-14",
        reverse ? "md:order-2" : "md:order-1",
      )}
    >
      <ScrollReveal direction="up" delay={0.1}>
        <div className="flex flex-col items-center gap-5">
          <div className="relative size-[260px] overflow-hidden rounded-[25px] md:size-[300px] lg:size-[400px]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              quality={100}
              sizes="(min-width: 1024px) 400px, 300px"
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
    </div>
  </section>
);
