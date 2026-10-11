"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface PremiumCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  backgroundPath?: string;
}

const PremiumCard: React.FC<PremiumCardProps> = ({
  children,
  className,
  innerClassName,
  backgroundPath = "",
  ...props
}) => {
  return (
    <motion.div
      {...props}
      className={cn(
        "group relative flex cursor-pointer flex-col items-stretch gap-3 overflow-hidden rounded-3xl border-2 border-accent/70 shadow-2xl transition-all duration-500 hover:border-accent sm:gap-3",
        className,
      )}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#A30101] to-[#740501]" />
      <Image
        src={backgroundPath}
        alt="background pattern"
        fill
        loading="lazy"
        className="pointer-events-none -z-10 object-cover opacity-70 mix-blend-soft-light"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
      />

      {/* Border flares */}
      <div className="absolute left-2 top-0 z-20 h-[1px] w-24 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80 blur-[1px]" />
      <div className="absolute left-2 top-[-2px] z-20 h-1.5 w-1.5 rounded-full bg-secondary/50 shadow-[0_0_15px_5px_rgba(255,255,255,0.8),0_0_30px_10px_rgba(255,255,255,0.2)]" />

      <div className="absolute bottom-0 right-2 z-20 h-[1px] w-28 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80 blur-[1px]" />
      <div className="absolute bottom-[-2px] right-2 z-20 h-1.5 w-1.5 rounded-full bg-secondary/50 shadow-[0_0_15px_5px_rgba(255,255,255,0.8),0_0_30px_10px_rgba(255,255,255,0.2)]" />

      <div className={cn("relative z-10 h-full w-full", innerClassName)}>{children}</div>
    </motion.div>
  );
};

export default PremiumCard;
