import { api } from "./api";
import { ProductPageData } from "@/types/productPage";
import {
  DEFAULT_COMBO_PRODUCT_PAGE_DATA,
  DEFAULT_CREAM_PRODUCT_PAGE_DATA,
  DEFAULT_SERUM_PRODUCT_PAGE_DATA,
} from "@/constants/defaultProductPageData";

const DEFAULT_DATA_BY_SLUG: Record<string, ProductPageData> = {
  combo: DEFAULT_COMBO_PRODUCT_PAGE_DATA,
  cream: DEFAULT_CREAM_PRODUCT_PAGE_DATA,
  serum: DEFAULT_SERUM_PRODUCT_PAGE_DATA,
};

const getDefaultData = (slug: string): ProductPageData =>
  DEFAULT_DATA_BY_SLUG[slug] || { ...DEFAULT_COMBO_PRODUCT_PAGE_DATA, slug };

/**
 * Sanitize product page payload to only include whitelisted fields.
 * Backend NestJS DTO rejects non-whitelisted fields: _id, isActive, slug, createdAt, updatedAt, __v
 */
export const sanitizeProductPagePayload = (
  data: Partial<ProductPageData>
): Record<string, any> => {
  const allowedFields: (keyof ProductPageData)[] = [
    "title",
    "description",
    "badge",
    "tags",
    "pricing",
    "galleryImages",
    "bundleItems",
    "suitability",
    "uses",
    "keyIngredients",
    "ingredientsDetail",
    "usageSteps",
    "reviews",
    "ratingValue",
    "ratingCount",
    "usageInstructionBanner",
    "upsellBanner",
  ];

  const payload: Record<string, any> = {};
  for (const field of allowedFields) {
    if (data[field] !== undefined) {
      payload[field] = data[field];
    }
  }

  return payload;
};

/**
 * Legacy documents can have array-of-object fields corrupted into arrays of
 * empty arrays (e.g. usageSteps: [[],[]]) due to a past Mongoose schema bug.
 * Drop any entry that isn't a genuine plain object so rendering doesn't crash.
 */
const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const sanitizeObjectArray = <T>(list: unknown, fallback: T[]): T[] => {
  if (!Array.isArray(list)) return fallback;
  const cleaned = list.filter(isPlainObject) as T[];
  return cleaned.length > 0 || list.length === 0 ? cleaned : fallback;
};

const sanitizeBundleItems = (
  list: unknown,
  fallback: ProductPageData["bundleItems"]
): ProductPageData["bundleItems"] =>
  sanitizeObjectArray(list, fallback).map((item) => ({
    image: item.image || "/images/product3.png",
    title: item.title || "Sản phẩm",
    price: item.price || "0 đ",
    link: item.link || "/products",
  }));

const sanitizeProductPageData = (data: ProductPageData, slug: string): ProductPageData => {
  const fallback = getDefaultData(slug);
  return {
    ...data,
    // Ảnh gallery luôn lấy từ constants tĩnh, không cho phép API/CMS ghi đè
    galleryImages: fallback.galleryImages,
    bundleItems: sanitizeBundleItems(data.bundleItems, fallback.bundleItems),
    keyIngredients: sanitizeObjectArray(data.keyIngredients, fallback.keyIngredients),
    ingredientsDetail: sanitizeObjectArray(data.ingredientsDetail, fallback.ingredientsDetail),
    usageSteps: sanitizeObjectArray(data.usageSteps, fallback.usageSteps),
    reviews: sanitizeObjectArray(data.reviews, fallback.reviews),
  };
};

export const productPageService = {
  async getProductPage(slug: string): Promise<ProductPageData> {
    try {
      const response = await api.get<any>(`/product-page/${slug}`);
      const data = response.data?.data || response.data;
      if (data && data.title) {
        return sanitizeProductPageData(data, slug);
      }
      return getDefaultData(slug);
    } catch (error) {
      console.warn(`Failed to load product page "${slug}" from backend API, using default content:`, error);
      return getDefaultData(slug);
    }
  },

  async updateProductPage(slug: string, data: Partial<ProductPageData>): Promise<ProductPageData> {
    const payload = sanitizeProductPagePayload(data);
    const response = await api.put<any>(`/product-page/${slug}`, payload);
    return response.data?.data || response.data;
  },
};
