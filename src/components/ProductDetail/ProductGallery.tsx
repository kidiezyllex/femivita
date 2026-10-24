"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { ProductGalleryImage } from "./types";

interface ProductGalleryProps {
  images: ProductGalleryImage[];
  className?: string;
  sizes?: string;
}

const ArrowButton: React.FC<{ label: string; direction: "prev" | "next"; onClick: () => void }> = ({
  label,
  direction,
  onClick,
}) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className={cn(
      "absolute top-[calc(50%+21px)] flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm transition-colors hover:bg-brand-pink",
      direction === "prev" ? "left-2" : "right-2",
    )}
  >
    <Image
      src="/logos/pager-arrow-purple.svg"
      alt=""
      width={16}
      height={16}
      draggable={false}
      className={direction === "prev" ? "rotate-180" : undefined}
    />
  </button>
);

/** Image slider with arrows and a dot indicator (Figma "product-img", 550px high on desktop). */
export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  className,
  sizes = "100vw",
}) => {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (step: number) => setIndex((current) => (current + step + count) % count);

  return (
    <div className={cn("relative overflow-hidden rounded-[20px] bg-white", className)}>
      {images.map((image, i) => (
        <Image
          key={`${image.src}-${i}`}
          src={image.src}
          alt={image.alt}
          fill
          priority={i === 0}
          quality={100}
          sizes={sizes}
          draggable={false}
          aria-hidden={i !== index}
          className={cn(
            "object-cover transition-opacity duration-500",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      {count > 1 && (
        <>
          <ArrowButton label="Ảnh trước" direction="prev" onClick={() => go(-1)} />
          <ArrowButton label="Ảnh tiếp theo" direction="next" onClick={() => go(1)} />

          <div className="absolute inset-x-0 bottom-3 flex justify-center">
            <div className="flex gap-2 rounded-full bg-white px-4 py-1">
              {images.map((image, i) => (
                <button
                  key={`${image.src}-${i}`}
                  type="button"
                  aria-label={`Xem ảnh ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "size-2 cursor-pointer rounded-full transition-colors",
                    i === index ? "bg-black" : "bg-[#D0D0D0] hover:bg-ink-muted",
                  )}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
