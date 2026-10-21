"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { ProductsHeroProps } from "./types";

/** < 768px: same banner as the home hero (picture, size and title position); only the title text differs. */
export const MobileProductsHero: React.FC<ProductsHeroProps> = ({
  heroLineOneStart,
  heroLineOneHighlight,
  heroLineTwo,
}) => (
  <section className="relative aspect-[375/656.25] h-screen w-full overflow-hidden">
    <Image
      src="/images/hero/femivita-hero-mobile.webp"
      alt=""
      fill
      priority
      quality={100}
      sizes="100vw"
      draggable={false}
      className="object-cover"
    />

    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-[23.7%] mx-auto w-[83%] text-center font-sans font-semibold leading-[1.3] [font-size:clamp(20px,6vw,28px)]"
    >
      <span className="block text-black">
        {heroLineOneStart}
        <span className="text-brand-text">{heroLineOneHighlight}</span>
      </span>
      <span className="block text-black">{heroLineTwo}</span>
    </motion.h1>
  </section>
);
