"use client";

import { cn } from "@/lib/utils";
import { mdiFlare } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import GoldText from "./GoldText";

interface PremiumHeaderProps {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  as?: React.ElementType;
}

const PremiumHeader: React.FC<PremiumHeaderProps> = ({
  children,
  className,
  textClassName,
  as = "h2",
}) => {
  return (
    <div className={cn("my-4 flex flex-col items-center text-center md:my-8", className)}>
      <div className="flex w-full max-w-3xl items-center gap-2 sm:gap-3">
        <div className="h-[2px] flex-1 rounded-r-full bg-gradient-to-r from-transparent via-secondary to-secondary md:h-[3px]"></div>
        <div className="hidden sm:block">
          <Icon path={mdiFlare} size={1} className="text-secondary" />
        </div>
        <div className="block sm:hidden">
          <Icon path={mdiFlare} size={0.6} className="text-secondary" />
        </div>
        <GoldText
          absolute={false}
          as={as}
          className={cn(
            "text-2xl !leading-normal !tracking-normal sm:text-4xl md:!text-5xl",
            textClassName,
          )}
        >
          {children}
        </GoldText>
        <div className="hidden sm:block">
          <Icon path={mdiFlare} size={1} className="text-secondary" />
        </div>
        <div className="block sm:hidden">
          <Icon path={mdiFlare} size={0.6} className="text-secondary" />
        </div>
        <div className="h-[2px] flex-1 rounded-l-full bg-gradient-to-l from-transparent via-secondary to-secondary md:h-[3px]"></div>
      </div>
    </div>
  );
};

export default PremiumHeader;
