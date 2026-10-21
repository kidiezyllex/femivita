import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ProductsHeroProps } from "./types";

/** Figma places the photo slightly oversized and shifted up. */
export const ProductsHeroPhoto: React.FC<{ className?: string }> = ({ className }) => (
  <div className="absolute left-[0.02%] top-[-3.7%] h-[107.27%] w-[107.34%]">
    <Image
      src="/images/products/hero.webp"
      alt=""
      fill
      priority
      quality={100}
      sizes="100vw"
      draggable={false}
      className={cn("object-cover", className)}
    />
  </div>
);

export const ProductsHeroTitle: React.FC<ProductsHeroProps & { className?: string }> = ({
  heroLineOneStart,
  heroLineOneHighlight,
  heroLineTwo,
  className,
}) => (
  <h1 className={cn("font-sans font-bold leading-[1.3] text-gray-700", className)}>
    <span className="block">
      {heroLineOneStart}
      <span className="text-brand-text">{heroLineOneHighlight}</span>
    </span>
    <span className="block">{heroLineTwo}</span>
  </h1>
);
