import { SITE_NAME, SITE_URL } from "@/constants/site";
import { ProductPageData } from "@/types/productPage";

function parsePrice(price: string): string {
  const digits = price.replace(/[^\d]/g, "");
  return digits || "0";
}

function parseRatingCount(ratingCount: string): string {
  const digits = ratingCount.replace(/[^\d]/g, "");
  return digits || "0";
}

export function buildProductJsonLd(data: ProductPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.title,
    description: data.description,
    image: data.galleryImages,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${data.slug}`,
      priceCurrency: "VND",
      price: parsePrice(data.pricing.price),
      availability: "https://schema.org/InStock",
    },
    ...(data.reviews.length > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: data.ratingValue,
        reviewCount: parseRatingCount(data.ratingCount),
      },
      review: data.reviews.map((r) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: r.name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.stars,
          bestRating: "5",
        },
        reviewBody: r.content,
      })),
    }),
  };
}
