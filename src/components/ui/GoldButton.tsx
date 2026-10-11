"use client";

import { cn } from "@/lib/utils";
import React from 'react';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const GoldButton: React.FC<GoldButtonProps> = ({
  children = "GO PREMIUM",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative z-[2] flex items-center justify-center gap-2 overflow-hidden",
        "w-[200px] min-h-[48px] h-[40px] rounded-[40px]",
        "bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] via-50% to-[#bf953f] to-[#aa771c]",
        "bg-[length:200%_100%] shadow-[5px_5px_10px_rgba(0,0,0,0.144)]",
        "text-[0.8em] font-semibold text-amber-950",
        "cursor-pointer transition-transform duration-300 ease-out",
        "hover:scale-95 active:scale-95",
        "touch-manipulation",
        "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent",
        "after:translate-x-[-200%] after:animate-[gold-shimmer_3s_ease-in-out_infinite]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GoldButton;
