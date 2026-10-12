import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ArrowLinkProps {
  href: string;
  label: string;
  className?: string;
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({ href, label, className }) => (
  <Link href={href} className={cn("group flex items-center gap-4 pb-1", className)}>
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-ink-line transition-colors group-hover:border-brand">
      <Image
        src="/logos/arrow-right-dark.svg"
        alt=""
        width={12}
        height={12}
        quality={100}
        draggable={false}
      />
    </span>
    <span className="font-[Arial,Helvetica,sans-serif] text-base leading-[14.4px] text-ink-dark transition-colors group-hover:text-brand">
      {label}
    </span>
  </Link>
);
