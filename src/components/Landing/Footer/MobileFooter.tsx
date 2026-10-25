"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useFooterTone } from "./FooterParts";
import { FooterProps } from "./types";

/**
 * Mobile footer, written out in full (no shared parts) so it can be styled on its own.
 * Only the colours come from the tone (dark / light) through `useFooterTone`.
 */
export const MobileFooter: React.FC<FooterProps> = ({ data }) => {
  const {
    tone,
    border,
    label,
    slogan,
    value,
    valueMuted,
    policyLink,
    copyright,
    logoSrc,
    mobileBackground,
  } = useFooterTone();

  return (
    <div className="relative px-4 py-12">
      {/* Tall background picture; it already carries its own gradient */}
      <Image
        src={mobileBackground}
        alt=""
        fill
        quality={100}
        sizes="100vw"
        draggable={false}
        className="object-cover object-top"
      />

      {/* Dark footer only: a black veil so the white text stands out from the bright picture */}
      {tone === "dark" && <div aria-hidden className="absolute inset-0 bg-black/40" />}

      <div className="relative flex flex-col">
        {/* Logo and slogan */}
        <div className="flex flex-col gap-4 pb-6">
          <Link href="/" aria-label={data.logo.alt} className="block w-full max-w-[260px]">
            <Image
              src={logoSrc ?? data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height}
              draggable={false}
              priority
              className="h-auto w-full"
            />
          </Link>
          <p className={cn("font-google-sans text-lg font-medium leading-[1.4]", slogan)}>
            {data.slogan}
          </p>
        </div>

        {/* Contact */}
        <div className={cn("flex flex-col border-t pt-6", border)}>
          <p className={cn("font-google-sans text-base leading-[1.6]", label)}>
            {data.contactLabel}
          </p>

          <ul className="flex w-full flex-col pl-4">
            <li className={cn("border-b py-6", border)}>
              <p className={cn("font-google-sans text-base leading-[1.6]", value)}>
                Email:{" "}
                <a href={`mailto:${data.email}`} className="hover:underline">
                  {data.email}
                </a>
              </p>
            </li>
            <li className={cn("border-b py-6", border)}>
              {data.offices.map((office) => (
                <p
                  key={office.label}
                  className={cn("font-google-sans text-base leading-[1.6]", value)}
                >
                  {office.label}: <span>{office.address}</span>
                </p>
              ))}
            </li>
            <li className="py-6">
              <p className={cn("font-google-sans text-base leading-[1.6]", value)}>
                {data.orderLabel}:{" "}
                <a href={data.orderPhoneHref} className="font-semibold hover:underline">
                  {data.orderPhone}
                </a>
              </p>
            </li>
          </ul>
        </div>

        {/* Purchase: direct channels and distributors */}
        <div className={cn("flex flex-col gap-4 border-t py-6", border)}>
          <p className={cn("font-google-sans text-base leading-[1.6]", label)}>
            {data.purchaseLabel}
          </p>

          <div className="flex w-full flex-col pl-4">
            <div className="flex flex-col gap-2 pb-6">
              <p className={cn("font-google-sans text-lg leading-[1.6]", valueMuted)}>
                {data.socialLabel}
              </p>
              <div className="flex gap-2">
                {data.socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover flex size-10 items-center justify-center rounded-lg border border-black/[0.02] bg-brand-pink transition-opacity"
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

            <div className={cn("flex flex-col gap-2 border-t pt-6", border)}>
              <p className={cn("font-google-sans text-lg leading-[1.6]", valueMuted)}>
                {data.distributorLabel}
              </p>
              <ul
                className={cn(
                  "flex flex-col gap-1 font-google-sans text-base leading-[1.6]",
                  value,
                )}
              >
                {data.distributors.map((distributor) => (
                  <li key={distributor} className="truncate">
                    {distributor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Policy */}
        <div className={cn("flex flex-col gap-4 border-y py-6", border)}>
          <p className={cn("font-google-sans text-base leading-[1.6]", label)}>
            {data.policyLabel}
          </p>

          <ul className="flex flex-col gap-4 pl-4">
            {data.policyLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className={cn("text-lg", policyLink)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p
          className={cn(
            "pt-6 font-inter text-[15px] font-light leading-[14.4px] tracking-[0.16px]",
            copyright,
          )}
        >
          {data.copyright}
        </p>
      </div>
    </div>
  );
};
