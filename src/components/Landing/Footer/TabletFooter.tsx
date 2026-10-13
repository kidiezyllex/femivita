import { cn } from "@/lib/utils";
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
  useFooterTone,
} from "./FooterParts";
import { FooterProps } from "./types";

export const TabletFooter: React.FC<FooterProps> = ({ data }) => {
  const { border } = useFooterTone();

  return (
  <div className="relative px-8 pb-10 pt-20">
    <FooterBackground />

    <div className="relative flex flex-col">
      {/* Logo and slogan */}
      <div className="flex flex-col gap-6 pb-12">
        <FooterLogo data={data.logo} className="max-w-[320px]" />
        <FooterSlogan text={data.slogan} className="max-w-[320px] text-xl" />
      </div>

      {/* Contact, purchase and policy groups */}
      <div className={cn("grid grid-cols-[160px_1fr] items-start border-t py-8", border)}>
        <FooterLabel className="py-8">{data.contactLabel}</FooterLabel>
        <FooterContactList data={data} />
      </div>

      <div className={cn("grid grid-cols-[160px_1fr] items-start border-t py-8", border)}>
        <FooterLabel>{data.purchaseLabel}</FooterLabel>
        <FooterPurchaseInfo data={data} />
      </div>

      <div className={cn("grid grid-cols-[160px_1fr] items-start border-y py-8", border)}>
        <FooterLabel>{data.policyLabel}</FooterLabel>
        <FooterPolicyList links={data.policyLinks} />
      </div>

      <FooterCopyright text={data.copyright} className="pt-8" />
    </div>
  </div>
  );
};
