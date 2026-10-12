import { ArrowLink } from "@/components/ui/ArrowLink";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { WhyFemivitaData } from "./types";

const FULL_STARS = 4;

export const RatingSummary: React.FC<{
  score: string;
  count: string;
  className?: string;
}> = ({ score, count, className }) => (
  <div className={cn("flex shrink-0 flex-col gap-2", className)}>
    <div className="flex h-3 gap-1" aria-hidden>
      {Array.from({ length: FULL_STARS }).map((_, index) => (
        <Image
          key={index}
          src="/logos/star.svg"
          alt=""
          width={12}
          height={12}
          quality={100}
          draggable={false}
        />
      ))}
      <Image src="/logos/star-half.svg" alt="" width={12} height={12} quality={100} draggable={false} />
    </div>
    <p className="whitespace-nowrap font-google-sans text-sm font-medium leading-[1.2] text-secondaryV1">
      {score} ({count} đánh giá)
    </p>
  </div>
);

export const ResearchCopy: React.FC<{
  data: WhyFemivitaData["research"];
  className?: string;
}> = ({ data, className }) => (
  <div className={cn("flex flex-col gap-2", className)}>
    <div className="font-sans font-medium text-black">
      <p className="text-base leading-[1.4]">{data.lead}</p>
      <p className="whitespace-nowrap text-xl leading-[1.4]">
        {data.organizationPrefix} {data.organization}
      </p>
    </div>
    <p className="w-[220px] max-w-full font-google-sans text-xs font-medium leading-[1.6] text-black/80">
      {data.highlight}
    </p>
    <p className="w-[220px] max-w-full font-google-sans text-xs leading-[1.6] text-black/60">
      {data.description}
    </p>
  </div>
);

export const BrandStoryGlassCard: React.FC<{
  data: WhyFemivitaData["brandStory"];
  className?: string;
}> = ({ data, className }) => (
  <div
    className={cn(
      "flex flex-col items-start justify-center gap-4 rounded-xl border border-brand-border bg-white/60 p-4",
      className,
    )}
  >
    <p className="font-google-sans text-xl font-medium leading-[1.6] text-ink-dark">{data.title}</p>
    <ArrowLink href={data.linkHref} label={data.linkLabel} />
  </div>
);
