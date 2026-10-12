import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterContent } from "./types";

const LABEL_CLASS = "font-google-sans text-base leading-[1.6] text-white/80";
const VALUE_CLASS = "font-google-sans text-lg leading-[1.6] text-white";

export const FooterBackground: React.FC = () => (
  <>
    <Image
      src="/images/footer/background.webp"
      alt=""
      fill
      quality={100}
      sizes="100vw"
      draggable={false}
      className="object-cover"
    />
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-[1255px] bg-[linear-gradient(180deg,#967AD3_78px,rgba(189,172,219,0.5)_666px,rgba(228,222,228,0)_1255px)]"
    />
  </>
);

export const FooterLogo: React.FC<{ data: FooterContent["logo"]; className?: string }> = ({
  data,
  className,
}) => (
  <Link href="/" aria-label={data.alt} className={cn("block w-full max-w-[400px]", className)}>
    <Image
      src={data.src}
      alt={data.alt}
      width={data.width}
      height={data.height}
      draggable={false}
      priority
      className="h-auto w-full"
    />
  </Link>
);

export const FooterSlogan: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <p className={cn("font-google-sans font-medium leading-[1.4] text-white/80", className)}>
    {text}
  </p>
);

export const FooterLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <p className={cn(LABEL_CLASS, "opacity-80", className)}>{children}</p>;

export const FooterContactList: React.FC<{ data: FooterContent }> = ({ data }) => (
  <ul className="flex w-full flex-col">
    <li className="border-b border-white py-8">
      <p className={VALUE_CLASS}>
        Email:{" "}
        <a href={`mailto:${data.email}`} className="font-semibold hover:underline">
          {data.email}
        </a>
      </p>
    </li>
    <li className="border-b border-white py-8">
      {data.offices.map((office) => (
        <p key={office.label} className={VALUE_CLASS}>
          {office.label}: <span className="font-semibold">{office.address}</span>
        </p>
      ))}
    </li>
    <li className="py-8">
      <p className={VALUE_CLASS}>
        {data.orderLabel}:{" "}
        <a href={data.orderPhoneHref} className="font-semibold hover:underline">
          {data.orderPhone}
        </a>
      </p>
    </li>
  </ul>
);

export const FooterPurchaseInfo: React.FC<{ data: FooterContent }> = ({ data }) => (
  <div className="flex w-full flex-col">
    <div className="flex flex-col gap-2 pb-8">
      <p className={cn(VALUE_CLASS, "text-white/80")}>{data.socialLabel}</p>
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
          </a>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-2 border-t border-white py-8">
      <p className={cn(VALUE_CLASS, "text-white/80")}>{data.distributorLabel}</p>
      <ul className={cn(VALUE_CLASS, "flex flex-col gap-1 font-semibold")}>
        {data.distributors.map((distributor) => (
          <li key={distributor} className="truncate">
            {distributor}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const FooterPolicyList: React.FC<{ links: FooterContent["policyLinks"] }> = ({ links }) => (
  <ul className="flex flex-col gap-8">
    {links.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="font-inter text-lg font-light leading-7 tracking-[0.2px] text-white underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-white"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

export const FooterCopyright: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <p
    className={cn(
      "font-inter text-[15px] font-light leading-[14.4px] tracking-[0.16px] text-white",
      className,
    )}
  >
    {text}
  </p>
);
