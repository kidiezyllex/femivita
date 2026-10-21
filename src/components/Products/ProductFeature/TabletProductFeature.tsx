import { cn } from "@/lib/utils";
import React from "react";
import { ProductFeatureInfo, ProductFeaturePhoto } from "./ProductFeatureParts";
import { ProductFeatureProps } from "./types";

/** 768px - 1023px: two columns, the photo side alternates with `reverse`. */
export const TabletProductFeature: React.FC<ProductFeatureProps> = ({
  product,
  ctaLabel,
  reverse = false,
}) => (
  <section className="grid grid-cols-2 bg-white">
    <ProductFeaturePhoto
      product={product}
      sizes="50vw"
      className={cn("min-h-[420px] w-full", reverse ? "order-1" : "order-2")}
    />

    <div
      className={cn(
        "flex items-center justify-center overflow-hidden px-10 py-8",
        reverse ? "order-2" : "order-1",
      )}
    >
      <ProductFeatureInfo product={product} ctaLabel={ctaLabel} sizes="50vw" />
    </div>
  </section>
);
