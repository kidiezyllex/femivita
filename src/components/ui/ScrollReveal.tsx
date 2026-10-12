"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import React, { useRef } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
}

/**
 * ScrollReveal component:
 * Kích hoạt hiệu ứng xuất hiện mượt mà (Fade, Slide, Scale) khi phần tử cuộn vào màn hình.
 * Hoàn toàn tương thích và đồng bộ với đà lướt (inertia delay) của Lenis.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 36,
  once = true,
  amount = 0.15,
  className = "",
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance, x: 0, scale: 1 };
      case "down":
        return { opacity: 0, y: -distance, x: 0, scale: 1 };
      case "left":
        return { opacity: 0, x: distance, y: 0, scale: 1 };
      case "right":
        return { opacity: 0, x: -distance, y: 0, scale: 1 };
      case "scale":
        return { opacity: 0, scale: 0.92, x: 0, y: 0 };
      case "fade":
      default:
        return { opacity: 0, x: 0, y: 0, scale: 1 };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier: khởi động êm, đáp đất mượt
        },
      }}
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface ScrollStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay: number; delayChildren: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delayChildren,
      staggerChildren: custom.staggerDelay,
    },
  }),
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * ScrollStagger:
 * Container kích hoạt hiệu ứng xuất hiện so le (staggered cascade) cho danh sách card/element con.
 */
export const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  staggerDelay = 0.12,
  delayChildren = 0.1,
  once = true,
  amount = 0.15,
  className = "",
}) => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={{ staggerDelay, delayChildren }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export interface ScrollParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

/**
 * ScrollParallax:
 * Tạo chuyển động trôi thị sai (Parallax float) theo tiến trình cuộn của Lenis.
 */
export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  offset = 40,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

/**
 * ScrollProgressBar:
 * Thanh chỉ báo tiến trình cuộn trang siêu mỏng với dải màu sang trọng ở mép trên cùng màn hình.
 */
export const ScrollProgressBar: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      className={`fixed top-0 left-0 right-0 z-[110] h-[3px] bg-gradient-to-r from-brand via-[#E3D0B9] to-brand-text pointer-events-none ${className}`}
    />
  );
};
