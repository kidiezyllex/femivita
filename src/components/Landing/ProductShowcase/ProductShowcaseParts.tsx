"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
 * Enhanced with scroll-linked floating parallax synced to Lenis inertia.
 */
export const ShowcaseStage: React.FC<{ data: ProductShowcaseData }> = ({ data }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });

  // Parallax trôi nổi theo đà cuộn Lenis
  const bottleY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const bottleRotate = useTransform(scrollYProgress, [0, 1], [24.5, 28]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.05, 0.96]);

  return (
    <div ref={stageRef} className="relative aspect-[1440/1301] w-full">
      <motion.div
        aria-hidden
        style={{ scale: glowScale }}
        className="absolute left-[51.2%] top-[16.9%] aspect-[600.683/972.798] w-[41.7%] rotate-[25.59deg]"
      >
        <Image
          src="/images/product-showcase/glow.svg"
          alt=""
          fill
          draggable={false}
          className="max-w-none"
        />
      </motion.div>

      <motion.div
        style={{ y: bottleY, rotate: bottleRotate }}
        className="absolute left-[7.15%] top-[-9.75%] h-auto w-[95.5%] max-w-none"
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute left-[18.8%] top-[30.1%]"
      >
        <SpotlightCard data={data.spotlight} />
      </motion.div>
    </div>
  );
};
