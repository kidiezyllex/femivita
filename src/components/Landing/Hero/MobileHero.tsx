"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const MobileHero: React.FC = () => (
  <section className="relative aspect-[375/656.25] max-h-[900px] w-full overflow-hidden">
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
      className="absolute inset-x-0 mx-auto top-[23.7%] w-[83%] text-center font-sans font-semibold leading-[1.3] [font-size:clamp(20px,6vw,28px)]"
    >
      <span className="block text-black">Rũ bỏ mọi lo âu</span>
      <span className="block text-brand-text">Tự tin đón nhận yêu thương</span>
    </motion.h1>
  </section>
);

