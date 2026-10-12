"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const TabletHero: React.FC = () => (
  <section className="relative h-[520px] w-full overflow-hidden">
    <Image
      src="/images/hero/femivita-hero-desktop.webp"
      alt=""
      fill
      priority
      quality={100}
      sizes="100vw"
      draggable={false}
      className="object-cover object-[72%_center]"
    />

    <div className="relative flex h-full items-end px-8 pb-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[60%] font-sans font-semibold leading-[1.3] [font-size:clamp(28px,4vw,36px)]"
      >
        <span className="block text-black">Rũ bỏ mọi lo âu</span>
        <span className="block text-brand-text">Tự tin đón nhận yêu thương</span>
      </motion.h1>
    </div>
  </section>
);

