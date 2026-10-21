import React from "react";
import { ProductFeatureInfo, ProductFeaturePhoto } from "./ProductFeatureParts";
import { ProductFeatureProps } from "./types";

/** < 768px: one column, the product details on top and the banner photo below them. */
export const MobileProductFeature: React.FC<ProductFeatureProps> = ({ product, ctaLabel }) => (
  <section className="grid grid-cols-1 bg-white">
    <div className="flex items-center justify-center overflow-hidden px-4 py-8">
      <ProductFeatureInfo product={product} ctaLabel={ctaLabel} sizes="100vw" />
    </div>

    <ProductFeaturePhoto product={product} sizes="100vw" className="aspect-square w-full" />
  </section>
);
