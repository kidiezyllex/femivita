"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import { DistributorForm } from "./DistributorForm";
import { DEFAULT_DISTRIBUTORS_DATA, DistributorsProps } from "./types";

export * from "./types";

const GLOW =
  "pointer-events-none absolute h-[2085px] w-[2106px] bg-[radial-gradient(closest-side,rgba(179,118,194,1),rgba(219,193,243,0))] opacity-50";

/** "Trở thành Nhà phân phối": intro copy and the registration form on a soft lavender background (Figma 1440 wide). */
export const Distributors: React.FC<DistributorsProps> = ({ data = DEFAULT_DISTRIBUTORS_DATA }) => (
  <section
    id="distributors"
    className="relative w-full overflow-hidden bg-white px-4 pb-16 pt-[140px] md:px-8 md:pb-24 md:pt-40 lg:pb-[200px] lg:pt-[200px]"
  >
    <div aria-hidden className={`${GLOW} right-[-1134px] top-[-1221px]`} />
    <div aria-hidden className={`${GLOW} left-[-990px] top-[calc(50%+346.9px)] -translate-y-1/2`} />

    <div className="relative mx-auto grid max-w-[1440px] gap-x-4 lg:grid-cols-12">
      <ScrollReveal direction="up" delay={0.05} className="lg:col-span-8 lg:col-start-3">
        <div className="flex flex-col items-center text-center lg:px-[120px]">
          <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h1 className="pt-2 font-sans text-[40px] font-semibold leading-[1.2] text-black md:text-[52px] lg:text-[64px]">
            {data.headlineStart}
            <br />
            <span className="text-brand-text">{data.headlineHighlight}</span>
          </h1>
          <div className="flex flex-col gap-6 pt-6">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-google-sans text-base leading-[1.6] text-[#171717]/60">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} className="pt-12 lg:col-span-8 lg:col-start-3 lg:pt-[112px]">
        <DistributorForm labels={data.form} />
      </ScrollReveal>
    </div>
  </section>
);

export default Distributors;
