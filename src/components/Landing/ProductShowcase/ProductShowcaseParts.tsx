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

/** Lineup card (Figma "SP"): white rounded card, picture on the left (on top when narrow), name, size and a "Xem sản phẩm" link. */
export const ProductCard: React.FC<{ product: ShowcaseProduct; className?: string }> = ({
  product,
  className,
}) => (
  <Link
    href={product.href}
    className={cn("group flex flex-col gap-4 rounded-[20px] bg-white p-4 md:flex-row", className)}
  >
    <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[18px] bg-[#FAF9FF] md:w-[51%] md:max-w-[320px]">
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        quality={100}
        sizes="(min-width: 1440px) 320px, (min-width: 768px) 30vw, 100vw"
        draggable={false}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <div className="flex min-w-0 flex-1 flex-col justify-center">
      <p className="font-sans text-2xl font-medium leading-[1.4] text-ink-dark xl:text-[32px]">
        {product.name}
      </p>
      <p className="font-inter text-[15px] font-light leading-[25.6px] tracking-[0.16px] text-ink-dark/60">
        {product.size}
      </p>
      <span className="flex items-center gap-4 pt-4 font-[Arial,Helvetica,sans-serif] text-base text-ink-dark">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#E6E6E6] transition-colors group-hover:border-brand">
          <Image
            src="/logos/arrow-right-small-dark.svg"
            alt=""
            width={12}
            height={12}
            draggable={false}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
        Xem sản phẩm
      </span>
    </div>
  </Link>
);

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
  const bottleY = useTransform(scrollYProgress, [0, ENTRANCE_AT], [`-${START_Y_PERCENT}%`, "0%"]);
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
