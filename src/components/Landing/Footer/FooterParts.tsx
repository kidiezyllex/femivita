"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { createContext, useContext } from "react";
import { FooterContent } from "./types";

/** "dark" is the purple footer on most pages; "light" is the pale footer used on the product detail pages. */
export type FooterTone = "dark" | "light";

interface FooterToneStyles {
  label: string;
  slogan: string;
  value: string;
  valueMuted: string;
  border: string;
  borderBottom: string;
  policyLink: string;
  copyright: string;
  background: string;
  /** Tall picture made for the mobile footer. */
  mobileBackground: string;
  logoSrc?: string;
}

const TONE_STYLES: Record<FooterTone, FooterToneStyles> = {
  dark: {
    label: "text-white/80",
    slogan: "text-white/80",
    value: "text-white",
    valueMuted: "text-white/80",
    border: "border-white",
    borderBottom: "border-b-white",
    policyLink:
      "font-inter font-light leading-7 tracking-[0.2px] text-white underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-white",
    copyright: "text-white",
    background: "/images/footer/background.webp",
    mobileBackground: "/images/footer/footer-mobile.webp",
  },
  light: {
    label: "text-brand-text",
    slogan: "text-gray-700",
    value: "text-gray-700",
    valueMuted: "text-brand-text",
    border: "border-brand",
    borderBottom: "border-b-brand",
    policyLink:
      "font-google-sans leading-[1.6] text-gray-700 transition-colors hover:text-brand-text",
    copyright: "text-brand-text",
    background: "/images/footer/background-light.webp",
    mobileBackground: "/images/footer/footer-product-mobile.webp",
    logoSrc: "/logos/femivita-logo.svg",
  },
};

const FooterToneContext = createContext<FooterTone>("dark");

export const FooterToneProvider = FooterToneContext.Provider;

export const useFooterTone = () => {
  const tone = useContext(FooterToneContext);

  return { tone, ...TONE_STYLES[tone] };
};

const LABEL_CLASS = "font-google-sans text-base leading-[1.6]";
const VALUE_CLASS = "font-google-sans text-lg leading-[1.6]";

interface FooterBackgroundProps {
  mobile?: boolean;
  className?: string;
}

export const FooterBackground: React.FC<FooterBackgroundProps> = ({
  mobile = false,
  className,
}) => {
  const { tone, background, mobileBackground } = useFooterTone();

  return (
    <>
      <Image
        src={mobile ? mobileBackground : background}
        alt=""
        fill
        quality={100}
        sizes="100vw"
        draggable={false}
        className={cn("object-cover", mobile && "object-top", className)}
      />
      {tone === "dark" && !mobile && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[1255px] bg-[linear-gradient(180deg,#967AD3_78px,rgba(189,172,219,0.5)_666px,rgba(228,222,228,0)_1255px)]"
        />
      )}
      {/* Dark footer only: a black veil so the white text stands out from the bright picture. Tune the opacity (/20) here. */}
      {tone === "dark" && <div aria-hidden className="absolute inset-0 bg-black/20" />}
    </>
  );
};

export const FooterLogo: React.FC<{ data: FooterContent["logo"]; className?: string }> = ({
  data,
  className,
}) => {
  const { logoSrc } = useFooterTone();

  return (
    <Link href="/" aria-label={data.alt} className={cn("block w-full max-w-[400px]", className)}>
      <Image
        src={logoSrc ?? data.src}
        alt={data.alt}
        width={data.width}
        height={data.height}
        draggable={false}
        priority
        className="h-auto w-full"
      />
    </Link>
  );
};

export const FooterSlogan: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const { slogan } = useFooterTone();

  return (
    <p className={cn("font-google-sans font-medium leading-[1.4]", slogan, className)}>{text}</p>
  );
};

export const FooterLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const { label } = useFooterTone();

  return <p className={cn(LABEL_CLASS, label, "opacity-80", className)}>{children}</p>;
};

export const FooterContactList: React.FC<{ data: FooterContent }> = ({ data }) => {
  const { border, value } = useFooterTone();

  return (
    <ul className="flex w-full flex-col">
      <li className={cn("border-b py-8", border)}>
        <p className={cn(VALUE_CLASS, value)}>
          Email:{" "}
          <a href={`mailto:${data.email}`} className="font-semibold hover:underline">
            {data.email}
          </a>
        </p>
      </li>
      <li className={cn("border-b py-8", border)}>
        {data.offices.map((office) => (
          <p key={office.label} className={cn(VALUE_CLASS, value)}>
            {office.label}: <span className="font-semibold">{office.address}</span>
          </p>
        ))}
      </li>
      <li className="py-8">
        <p className={cn(VALUE_CLASS, value)}>
          {data.orderLabel}:{" "}
          <a href={data.orderPhoneHref} className="font-semibold hover:underline">
            {data.orderPhone}
          </a>
        </p>
      </li>
    </ul>
  );
};

export const FooterPurchaseInfo: React.FC<{ data: FooterContent }> = ({ data }) => {
  const { border, value, valueMuted } = useFooterTone();

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col gap-2 pb-8">
        <p className={cn(VALUE_CLASS, valueMuted)}>{data.socialLabel}</p>
        <div className="flex gap-2">
          {data.socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-lg border border-black/[0.02] bg-brand-pink transition-opacity hover:opacity-80"
            >
              {social.fullColor ? (
                <Image
                  src={social.icon}
                  alt=""
                  width={28}
                  height={28}
                  draggable={false}
                  className="size-7"
                />
              ) : (
                <span
                  aria-hidden
                  className="size-7 bg-brand"
                  style={{
                    maskImage: `url(${social.icon})`,
                    WebkitMaskImage: `url(${social.icon})`,
                    maskSize: "28px 28px",
                    WebkitMaskSize: "28px 28px",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className={cn("flex flex-col gap-2 border-t py-8", border)}>
        <p className={cn(VALUE_CLASS, valueMuted)}>{data.distributorLabel}</p>
        <ul className={cn(VALUE_CLASS, value, "flex flex-col gap-1 font-semibold")}>
          {data.distributors.map((distributor) => (
            <li key={distributor} className="truncate">
              {distributor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const FooterPolicyList: React.FC<{ links: FooterContent["policyLinks"] }> = ({ links }) => {
  const { policyLink } = useFooterTone();

  return (
    <ul className="flex flex-col gap-8">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <Link href={link.href} className={cn("text-lg", policyLink)}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const FooterCopyright: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const { copyright } = useFooterTone();

  return (
    <p
      className={cn(
        "font-inter text-[15px] font-light leading-[14.4px] tracking-[0.16px]",
        copyright,
        className,
      )}
    >
      {text}
    </p>
  );
};
