"use client";

import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/ScrollReveal";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { BenefitItem, ProductCard } from "./ProductShowcaseParts";
import { ProductShowcaseProps } from "./types";

const BOTTLE_START_SCALE = 1;
const BOTTLE_END_SCALE = 1.2;
const BOTTLE_START_ROTATE = 26.24; // the original (Figma) angle
const BOTTLE_END_ROTATE = 0;

/** Main product: zooms in and straightens up as the stage scrolls into view, and reverses when scrolling back up. */
const MobileHeroProduct: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "center center"],
  });
  // The spring eases the motion so it trails the scroll slightly instead of snapping to it.
  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.6,
    restDelta: 0.0005,
  });
  const rotate = useTransform(progress, [0, 1], [BOTTLE_START_ROTATE, BOTTLE_END_ROTATE]);
  const scale = useTransform(progress, [0, 1], [BOTTLE_START_SCALE, BOTTLE_END_SCALE]);

  return (
    <div ref={stageRef} className="relative h-[480px] w-full overflow-hidden">
      <div className="absolute left-1/2 top-1/2 w-[620px] -translate-x-1/2 -translate-y-1/2">
        <motion.div style={{ rotate, scale }} className="will-change-transform">
          <Image
            src={src}
            alt={alt}
            width={1024}
            height={1024}
            quality={100}
            sizes="620px"
            draggable={false}
            className="h-auto w-full max-w-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export const MobileProductShowcase: React.FC<ProductShowcaseProps> = ({ data }) => (
  <div className="relative overflow-clip bg-brand-lavender">
    {/* Background stays pinned to the top of the viewport while the content scrolls over it. Its negative bottom margin takes it out of the flow. */}
    <div
      aria-hidden
      // pt (not margin: it would collapse through the wrapper) lowers the image by 100px; that strip is white like the image top, so no lavender shows.
      className="pointer-events-none sticky top-0 -mb-[100svh] h-[100svh] w-full bg-[linear-gradient(to_bottom,#FFFFFF_100px,transparent_100px)] pt-[100px]"
    >
      <Image
        src="/images/product-showcase/background.jpg"
        alt=""
        width={2720}
        height={4096}
        quality={100}
        sizes="100vw"
        draggable={false}
        className="h-auto w-full"
      />
    </div>

    {/* Content sits in its own relative layer so it paints above the background image */}
    <div className="relative">
      {/* Title */}
      <ScrollReveal direction="up" delay={0.05}>
        <div className="flex flex-col items-center gap-2 px-4 pt-12 text-center">
          <p className="font-google-sans text-base leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="font-sans text-[32px] font-semibold leading-[1.3] text-black">
            {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollStagger className="grid grid-cols-2 gap-x-4 gap-y-6 px-4 pt-8" staggerDelay={0.1}>
        {data.benefits.map((benefit) => (
          <ScrollStaggerItem key={benefit.title} className="min-w-0">
            <BenefitItem benefit={benefit} className="mx-auto w-full max-w-[220px]" />
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>

      {/* Hero product stage */}
      <MobileHeroProduct src={data.heroImage} alt={data.heroImageAlt} />

      {/* Product lineup */}
      <div className="flex flex-col gap-6 px-4 pb-10 pt-12">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-sans text-[32px] font-semibold leading-[1.3] text-black">
              {data.lineupTitleStart}{" "}
              <span className="text-brand-text">{data.lineupTitleHighlight}</span>
            </h3>
            <PillLinkButton href={data.lineupCtaHref} label={data.lineupCtaLabel} />
          </div>
        </ScrollReveal>

        <ScrollStagger className="grid grid-cols-1 gap-y-4" staggerDelay={0.1}>
          {data.products.map((product) => (
            <ScrollStaggerItem key={product.id}>
              <ProductCard product={product} />
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </div>
  </div>
);
