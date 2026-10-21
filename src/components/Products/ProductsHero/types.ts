import { ProductsPageData } from "../types";

export type ProductsHeroProps = Pick<
  ProductsPageData,
  "heroLineOneStart" | "heroLineOneHighlight" | "heroLineTwo"
>;
