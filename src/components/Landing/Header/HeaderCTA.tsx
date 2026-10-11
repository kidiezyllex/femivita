import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HEADER_CTA } from "./types";

interface HeaderCTAProps {
  onClick?: () => void;
  className?: string;
}

export const HeaderCTA: React.FC<HeaderCTAProps> = ({ onClick, className }) => (
  <Link
    href={HEADER_CTA.href}
    onClick={onClick}
    className={cn(
      "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-light py-2 pl-4 pr-2 font-inter text-sm font-medium leading-normal text-white transition-colors hover:bg-brand",
      className,
    )}
  >
    {HEADER_CTA.label}
    <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-white">
      <Image
        src="/logos/arrow-right.svg"
        alt=""
        width={18}
        height={18}
        quality={100}
        draggable={false}
      />
    </span>
  </Link>
);
