"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";
import {
  FooterBackground,
  FooterContactList,
  FooterCopyright,
  FooterLabel,
  FooterLogo,
  FooterPolicyList,
  FooterPurchaseInfo,
  FooterSlogan,
} from "./FooterParts";
import { FooterProps } from "./types";

const LABEL_WIDTH_CLASS = "w-[140px] shrink-0 min-[1440px]:w-[200px]";
const LIST_WIDTH_CLASS = "w-full max-w-[324px] min-[1440px]:w-[324px]";

export const DesktopFooter: React.FC<FooterProps> = ({ data }) => (
  <div className="relative min-h-[1440px] px-12 pb-12">
    <FooterBackground />

    <div className="relative grid w-full grid-cols-12 items-start gap-x-4">
      {/* Logo and slogan with sticky pinning */}
      <div className="sticky top-0 col-span-4 col-start-1 flex flex-col gap-[45px] pb-16 pt-[200px] xl:col-span-5 xl:col-start-2">
        <ScrollReveal direction="up" delay={0.05}>
          <FooterLogo data={data.logo} />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <FooterSlogan text={data.slogan} className="w-[278px] pt-[34px] text-2xl" />
        </ScrollReveal>
      </div>

      {/* Contact, purchase and policy groups */}
      <div className="col-span-7 col-start-6 flex min-h-[1333px] flex-col xl:col-span-5 xl:col-start-7">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex min-h-[433px] items-start justify-between border-y border-b-white border-t-white/10 pb-12 pt-[200px]">
            <FooterLabel className={cn(LABEL_WIDTH_CLASS, "py-8")}>{data.contactLabel}</FooterLabel>
            <div className={LIST_WIDTH_CLASS}>
              <FooterContactList data={data} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <div className="flex items-start justify-between border-b border-white py-12">
            <FooterLabel className={LABEL_WIDTH_CLASS}>{data.purchaseLabel}</FooterLabel>
            <div className={LIST_WIDTH_CLASS}>
              <FooterPurchaseInfo data={data} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-1 items-start justify-between border-b border-white py-12">
            <FooterLabel className={LABEL_WIDTH_CLASS}>{data.policyLabel}</FooterLabel>
            <div className={LIST_WIDTH_CLASS}>
              <FooterPolicyList links={data.policyLinks} />
            </div>
          </div>
        </ScrollReveal>

        <div className="flex h-16 items-start pt-[49px]">
          <FooterCopyright text={data.copyright} />
        </div>
      </div>
    </div>
  </div>
);

