import { cn } from "@/lib/utils";
import React from "react";
import { ProductFeatureInfo, ProductFeaturePhoto } from "./ProductFeatureParts";
import { ProductFeatureProps } from "./types";

/** >= 1024px: two columns, 720px tall but never taller than the screen. */
export const DesktopProductFeature: React.FC<ProductFeatureProps> = ({
  product,
  ctaLabel,
  reverse = false,
}) => (
  <section className="grid h-[720px] max-h-screen grid-cols-2 bg-white">
    <ProductFeaturePhoto
      product={product}
      sizes="50vw"
      className={cn("min-h-[420px] w-full", reverse ? "order-1" : "order-2")}
    />

    <div
      className={cn(
        "flex items-center justify-center overflow-hidden px-20 py-14",
        reverse ? "order-2" : "order-1",
      )}
    >
      <ProductFeatureInfo
        product={product}
        ctaLabel={ctaLabel}
        sizes="400px"
        imageClassName="max-w-[min(400px,calc(100vh_-_300px))]"
      />
    </div>
  </section>
);
