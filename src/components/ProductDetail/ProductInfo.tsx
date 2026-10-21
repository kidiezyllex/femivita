"use client";

import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { ProductDetailData, ProductDetailItem } from "./types";

const ITEM_ICON: Record<"check" | "dot", string> = {
  check: "/logos/product-check.svg",
  dot: "/logos/product-dot-outline.svg",
};

const DetailItem: React.FC<{ item: ProductDetailItem }> = ({ item }) => (
  <div className={cn("flex gap-2", item.icon === "dot" ? "items-start" : "items-center")}>
    {item.icon !== "none" && (
      <Image
        src={ITEM_ICON[item.icon]}
        alt=""
        width={20}
        height={20}
        draggable={false}
        className={cn("shrink-0", item.icon === "dot" && "mt-1")}
      />
    )}
    <p
      className={cn(
        "min-w-0 flex-1 font-google-sans text-lg leading-[1.6]",
        item.icon === "dot" ? "text-[#6A6A6A]" : "text-[#3D4A3A]",
      )}
    >
      {item.heading && <span className="font-semibold">{item.heading} </span>}
      {item.text}
    </p>
  </div>
);

/** Name, summary, buy button and the collapsible detail sections (Figma "service-box"). */
export const ProductInfo: React.FC<{ product: ProductDetailData; titleClassName?: string }> = ({
  product,
  titleClassName = "text-[32px]",
}) => {
  // Figma shows every section expanded.
  const [openIds, setOpenIds] = useState<string[]>(() =>
    product.sections.map((section) => section.id),
  );
  const toggle = (id: string) =>
    setOpenIds((current) =>
      current.includes(id) ? current.filter((openId) => openId !== id) : [...current, id],
    );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4 border-b border-brand-rule pb-10">
        <div className="flex flex-col">
          <h1 className={cn("font-sans font-semibold leading-[1.4] text-black", titleClassName)}>
            {product.name}
          </h1>
          <p className="font-google-sans text-lg font-semibold leading-[1.6] text-[#6A6A6A]">
            {product.size}
          </p>
        </div>

        <div className="flex flex-col font-google-sans text-lg leading-[1.6] text-[#5E634D]">
          <p className="font-semibold">{product.tagline}</p>
          <p>{product.summary}</p>
        </div>

        <div className="flex items-center">
          <PillLinkButton href={product.ctaHref} label={product.ctaLabel} variant="brand" />
        </div>
      </div>

      <div>
        {product.sections.map((section) => {
          const isOpen = openIds.includes(section.id);

          return (
            <div key={section.id} className="border-b border-brand-rule">
              <h2>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`product-section-${section.id}`}
                  onClick={() => toggle(section.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-google-sans text-xl leading-[1.6] text-[#5E634D]">
                    {section.title}
                  </span>
                  <Image
                    src={isOpen ? "/logos/faq-minus.svg" : "/logos/faq-plus.svg"}
                    alt=""
                    width={24}
                    height={24}
                    draggable={false}
                    className="shrink-0"
                  />
                </button>
              </h2>

              <div
                id={`product-section-${section.id}`}
                aria-hidden={!isOpen}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-[10px] pb-4">
                    {section.items.map((item) => (
                      <DetailItem key={item.heading ?? item.text} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
