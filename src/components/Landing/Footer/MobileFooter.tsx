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

export const MobileFooter: React.FC<FooterProps> = ({ data }) => (
  <div className="relative px-5 pb-8 pt-16">
    <FooterBackground />

    <div className="relative flex flex-col">
      {/* Logo and slogan */}
      <div className="flex flex-col gap-5 pb-10">
        <FooterLogo data={data.logo} className="max-w-[260px]" />
        <FooterSlogan text={data.slogan} className="max-w-[260px] text-xl" />
      </div>

      {/* Contact, purchase and policy groups */}
      <div className="flex flex-col gap-2 border-t border-white pt-6">
        <FooterLabel>{data.contactLabel}</FooterLabel>
        <FooterContactList data={data} />
      </div>

      <div className="flex flex-col gap-4 border-t border-white py-6">
        <FooterLabel>{data.purchaseLabel}</FooterLabel>
        <FooterPurchaseInfo data={data} />
      </div>

      <div className="flex flex-col gap-4 border-y border-white py-6">
        <FooterLabel>{data.policyLabel}</FooterLabel>
        <FooterPolicyList links={data.policyLinks} />
      </div>

      <FooterCopyright text={data.copyright} className="pt-6" />
    </div>
  </div>
);
