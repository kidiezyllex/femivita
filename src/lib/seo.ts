import { SITE_KEYWORDS, SITE_NAME, SITE_OG_IMAGE } from "@/constants/site";
import type { Metadata } from "next";

interface PageMetadataInput {
  /** Page title without the brand; the root layout template appends " | Femivita". */
  title: string;
  description: string;
  /** Route path starting with "/", used for the canonical and Open Graph URL. */
  path: string;
  keywords?: string[];
}

// A page-level openGraph/twitter object replaces the layout's wholesale, so each page must carry the image too.
export function buildPageMetadata({ title, description, path, keywords = [] }: PageMetadataInput): Metadata {
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: [...keywords, ...SITE_KEYWORDS],
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "vi_VN",
      type: "website",
      images: [SITE_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SITE_OG_IMAGE.url],
    },
  };
}
