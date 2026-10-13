import React from "react";
import { ProductFeature } from "./ProductFeature";
import { ProductsHero } from "./ProductsHero";
import { DEFAULT_PRODUCTS_PAGE_DATA, ProductsPageData } from "./types";

export * from "./types";

interface ProductsContentProps {
  data?: ProductsPageData;
}

/** Product list page body: the hero followed by alternating product rows. */
export const ProductsContent: React.FC<ProductsContentProps> = ({ data = DEFAULT_PRODUCTS_PAGE_DATA }) => (
  <>
    <ProductsHero
      heroLineOneStart={data.heroLineOneStart}
      heroLineOneHighlight={data.heroLineOneHighlight}
      heroLineTwo={data.heroLineTwo}
    />
    {data.features.map((product, index) => (
      <ProductFeature
        key={product.id}
        product={product}
        ctaLabel={data.ctaLabel}
        reverse={index % 2 === 1}
      />
    ))}
  </>
);

export default ProductsContent;
