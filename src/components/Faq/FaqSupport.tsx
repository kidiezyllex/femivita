import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { cn } from "@/lib/utils";
import React from "react";
import { FaqRichSegment } from "./types";

interface FaqSupportProps {
  segments: FaqRichSegment[];
  ctaLabel: string;
  ctaHref: string;
  eyebrow?: string;
  className?: string;
}

/** "Need more help" block: a sentence with highlighted contact links and a call-to-action button. */
export const FaqSupport: React.FC<FaqSupportProps> = ({
  segments,
  ctaLabel,
  ctaHref,
  eyebrow,
  className,
}) => (
  <div className={cn("flex flex-col", className)}>
    <div className="flex flex-col gap-4 lg:pr-6">
      {eyebrow && <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{eyebrow}</p>}
      <p className="font-sans text-2xl font-medium leading-[1.4] text-ink-dark md:text-[28px] lg:text-[32px]">
        {segments.map((segment, index) =>
          segment.href ? (
            <a
              key={index}
              href={segment.href}
              className="text-brand-text transition-colors hover:text-brand"
            >
              {segment.text}
            </a>
          ) : (
            <span key={index}>{segment.text}</span>
          ),
        )}
      </p>
    </div>
    <div className="pt-6 lg:pt-10">
      <PillLinkButton href={ctaHref} label={ctaLabel} />
    </div>
  </div>
);
