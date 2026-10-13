import type { BecomeDistributorData } from "@/components/Brand/BecomeDistributor";
import type { FaqQuestion } from "@/components/Faq/types";

export interface ProductGalleryImage {
  src: string;
  alt: string;
}

export interface ProductDetailItem {
  /** "check" and "dot" show the matching icon before the text; "none" shows plain text. */
  icon: "check" | "dot" | "none";
  heading?: string;
  text: string;
}

export interface ProductDetailSection {
  id: string;
  title: string;
  items: ProductDetailItem[];
}

export interface ProductInfographic {
  src: string;
  alt: string;
  /** Background behind the image, used when the artwork is shorter than its frame. */
  backgroundClassName?: string;
  /** object-position of the artwork inside the square frame. */
  objectPositionClassName?: string;
}

export interface ProductDetailFaq {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  items: FaqQuestion[];
}

export interface ProductDetailData {
  slug: string;
  name: string;
  size: string;
  seoDescription: string;
  gallery: ProductGalleryImage[];
  tagline: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string;
  sections: ProductDetailSection[];
  infographics: ProductInfographic[];
  faq: ProductDetailFaq;
  banner: BecomeDistributorData;
}
