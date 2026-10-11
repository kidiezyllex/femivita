"use client";

import { cn } from "@/lib/utils";
import React from 'react';

interface GoldOutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const GoldOutlineButton: React.FC<GoldOutlineButtonProps> = ({
  children = "SUBSCRIBE",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "group relative flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-1000",
        "w-[140px] h-[40px] rounded-[10px] border-none",
        "bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)]",
        "bg-[length:250%_auto] bg-left",
        "hover:bg-right active:scale-95",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex items-center justify-center transition-all duration-1000",
          "w-[97%] h-[90%] rounded-[8px]",
          "bg-[rgba(0,0,0,0.842)] text-[#ffd277]",
          "group-hover:bg-right" // Matches the CSS: .Btn:hover::before { background-position: right; }
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default GoldOutlineButton;
