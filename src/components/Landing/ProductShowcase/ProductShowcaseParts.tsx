"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { ProductShowcaseData, ShowcaseBenefit, ShowcaseProduct } from "./types";

export const BenefitItem: React.FC<{ benefit: ShowcaseBenefit; className?: string }> = ({
  benefit,
  className,
}) => (
  <div className={cn("flex w-[220px] max-w-full flex-col gap-2 text-center text-black", className)}>
    <p className="font-sans text-xl font-medium leading-[1.4]">
      {benefit.title}
      <br />
      <span className="text-brand-text">{benefit.highlight}</span>
    </p>
    <p className="font-google-sans text-sm leading-[1.6]">{benefit.description}</p>
  </div>
);

export const SpotlightCard: React.FC<{
  data: ProductShowcaseData["spotlight"];
  compact?: boolean;
  className?: string;
}> = ({ data, compact = false, className }) => (
  <Link
    href={data.href}
    className={cn(
      "group flex items-center gap-2 rounded-xl border border-brand-border bg-white p-2",
      className,
    )}
  >
    <span
      className={cn(
        "relative shrink-0 overflow-hidden rounded-lg bg-brand-border",
        compact ? "size-[72px]" : "size-[100px]",
      )}
    >
      <Image
        src={data.thumbnail}
        alt={data.name}
        width={3012}
        height={3012}
        quality={100}
        sizes="134px"
        draggable={false}
        className="absolute left-[-16.83%] top-[-17.85%] size-[134.83%] max-w-none"
      />
    </span>
    <span className="flex flex-col gap-2 whitespace-nowrap text-ink-dark">
      <span
        className={cn(
          "font-google-sans font-medium leading-[1.6]",
          compact ? "text-base" : "text-xl",
        )}
      >
        {data.name}
      </span>
      <span className={cn("font-google-sans leading-[1.6]", compact ? "text-sm" : "text-base")}>
        {data.size}
      </span>
    </span>
    <span className="flex size-[26px] shrink-0 items-center justify-center">
      <Image
        src="/logos/arrow-right-brand.svg"
        alt=""
        width={18}
        height={18}
        quality={100}
        draggable={false}
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </span>
  </Link>
);

export const ProductCard: React.FC<{ product: ShowcaseProduct; className?: string }> = ({
  product,
  className,
}) => (
  <Link href={product.href} className={cn("group flex flex-col gap-5", className)}>
    <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-brand-surface">
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        quality={100}
        sizes="(min-width: 1440px) 324px, (min-width: 768px) 25vw, 50vw"
        draggable={false}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col items-center md:px-4 xl:px-10">
      <p className="max-w-[250px] text-center font-google-sans text-base font-medium leading-[1.6] text-ink-dark md:text-xl">
        {product.name}
      </p>
      <p className="font-google-sans text-sm leading-[1.6] text-ink-soft md:text-base">
        {product.size}
      </p>
    </div>
  </Link>
);

/**
 * Decorative stage with the rotated hero bottle, glow and spotlight card.
 * Everything is positioned in percentages of the stage so it scales with the viewport (Figma: 1440 x 1301).
 *
 * The hero bottle and glow start a bit higher and slightly smaller, then ease
 * into their final Figma position as the user scrolls down. Because the
 * animation is driven by `scrollYProgress`, scrolling back up reverts it.
 */
const ENTRANCE_AT = 0.4;
// How far above the final position the bottle and glow start, in % of the stage height.
const START_Y_PERCENT = 14;
// How much smaller the bottle and glow start, relative to their Figma size (0.92 = 92%).
const START_SCALE = 0.92;

export const ShowcaseStage: React.FC<{ data: ProductShowcaseData }> = ({ data }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });

  // y starts at -START_Y_PERCENT of the stage height, returns to 0 by ENTRANCE_AT, then stays.
  const bottleY = useTransform(
    scrollYProgress,
    [0, ENTRANCE_AT],
    [`-${START_Y_PERCENT}%`, "0%"],
  );
  const glowY = useTransform(
    scrollYProgress,
    [0, ENTRANCE_AT],
    [`-${START_Y_PERCENT * 0.6}%`, "0%"],
  );
  // Scale from START_SCALE up to 1 (its rendered size) by ENTRANCE_AT, then stays.
  const bottleScale = useTransform(scrollYProgress, [0, ENTRANCE_AT], [START_SCALE, 1]);
  const glowScale = useTransform(scrollYProgress, [0, ENTRANCE_AT], [START_SCALE, 1]);

  return (
    <div ref={stageRef} className="relative aspect-[1440/1301] w-full">
      <motion.div
        aria-hidden
        style={{ y: glowY, scale: glowScale, transformOrigin: "50% 50%" }}
        className="absolute left-[51.2%] top-[16.9%] aspect-[600.683/972.798] w-[41.7%]"
      >
        <div
          style={{ transform: "rotate(25.59deg)", transformOrigin: "50% 50%" }}
          className="size-full"
        >
          <Image
            src="/images/product-showcase/glow.svg"
            alt=""
            fill
            draggable={false}
            className="max-w-none"
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y: bottleY, scale: bottleScale, transformOrigin: "50% 50%" }}
        className="absolute left-[7.15%] top-[-9.75%] h-auto w-[95.5%] max-w-none"
      >
        <div
          style={{ transform: "rotate(24.5deg)", transformOrigin: "50% 50%" }}
          className="h-auto w-full"
        >
          <Image
            src="/images/product-showcase/gel-venus-thumbnail.png"
            alt={data.heroImageAlt}
            width={1024}
            height={1024}
            quality={100}
            sizes="100vw"
            draggable={false}
            className="h-auto w-full max-w-none"
          />
        </div>
      </motion.div>

      <ScrollReveal
        direction="right"
        distance={30}
        delay={0.2}
        amount={0.3}
        className="absolute left-[18.8%] top-[30.1%]"
      >
        <SpotlightCard data={data.spotlight} />
      </ScrollReveal>
    </div>
  );
};
