"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const DesktopHero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax trôi nhẹ nhàng của ảnh nền theo đà cuộn Lenis
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.25]);
  const textY = useTransform(scrollYProgress, [0, 0.65], [0, 35]);

  return (
    <section ref={containerRef} className="relative h-[600px] w-full overflow-hidden">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <Image
          src="/images/hero/femivita-hero-desktop.webp"
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          draggable={false}
          className="object-cover"
        />
      </motion.div>

      <div className="relative flex h-full items-end px-12 py-10">
        <div className="grid h-[300px] w-full grid-cols-12 content-start gap-x-4">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ opacity: textOpacity, y: textY }}
            className="col-span-8 col-start-2 font-sans font-bold leading-[1.3] [font-size:clamp(32px,3.34vw,48px)]"
          >
            <span className="block text-gray-700">Rũ bỏ mọi lo âu</span>
            <span className="block text-brand-text">Tự tin đón nhận yêu thương</span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};
