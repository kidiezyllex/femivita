"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from 'react';

interface GoldTextProps {
  children: React.ReactNode;
  className?: string;
  absolute?: boolean;
  as?: React.ElementType;
}

const GoldText: React.FC<GoldTextProps> = ({ children, className, absolute = true, as: Component = "span" }) => {
  const MotionComponent = motion(Component as any);
  return (
    <MotionComponent
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        absolute && "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "font-times tracking-[5px] text-[40px] md:text-[150px] font-bold",
        "bg-clip-text text-transparent select-none whitespace-nowrap py-1",
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(to right, #cb9b51 0%, #d4af37 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #d4af37 78%, #cb9b51 100%)',
        WebkitBackgroundClip: 'text',
      }}
    >
      {children}
    </MotionComponent>
  );
};

export default GoldText;

