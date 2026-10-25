import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ArrowLinkProps {
  href: string;
  label: string;
  className?: string;
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({ href, label, className }) => (
  <Link
    href={href}
    className={cn(
      "group -ml-1 -mr-4 -mt-1 flex w-fit items-center gap-4 rounded-full border border-transparent py-1 pl-1 pr-4 transition-colors duration-200 ease-out hover:border-brand/60",
      className,
    )}
  >
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-ink-line transition-colors duration-200 ease-out group-hover:border-brand">
      <span
        aria-hidden
        className="size-3 bg-ink-dark transition-colors duration-200 ease-out group-hover:bg-brand"
        style={{
          maskImage: "url(/logos/arrow-right-dark.svg)",
          WebkitMaskImage: "url(/logos/arrow-right-dark.svg)",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
    </span>
    <span
      data-label={label}
      className="font-[Arial,Helvetica,sans-serif] text-base leading-[14.4px] text-ink-dark transition-colors duration-200 ease-out after:invisible after:block after:h-0 after:overflow-hidden after:content-[attr(data-label)] group-hover:text-brand"
    >
      {label}
    </span>
  </Link>
);
