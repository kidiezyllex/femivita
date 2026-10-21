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

export const MobileFooter: React.FC<FooterProps> = ({ data }) => {
  const { border } = useFooterTone();

  return (
    <div className="relative px-4 pb-8 pt-16">
      <FooterBackground mobile />

      <div className="relative flex flex-col">
        {/* Logo and slogan */}
        <div className="flex flex-col gap-4 pb-10">
          <FooterLogo data={data.logo} className="max-w-[260px]" />
          <FooterSlogan text={data.slogan} className="max-w-[260px] text-xl" />
        </div>

        {/* Contact, purchase and policy groups */}
        <div className={cn("flex flex-col gap-2 border-t pt-6", border)}>
          <FooterLabel>{data.contactLabel}</FooterLabel>
          <FooterContactList data={data} />
        </div>

        <div className={cn("flex flex-col gap-4 border-t py-6", border)}>
          <FooterLabel>{data.purchaseLabel}</FooterLabel>
          <FooterPurchaseInfo data={data} />
        </div>

        <div className={cn("flex flex-col gap-4 border-y py-6", border)}>
          <FooterLabel>{data.policyLabel}</FooterLabel>
          <FooterPolicyList links={data.policyLinks} />
        </div>

        <FooterCopyright text={data.copyright} className="pt-6" />
      </div>
    </div>
  );
};
