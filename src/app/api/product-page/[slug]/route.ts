import { NextRequest } from "next/server";
import { connectMongo } from "@/lib/server/mongodb";
import { ProductPage } from "@/lib/server/models/ProductPage";
import { requireAuth, UnauthorizedError } from "@/lib/server/authGuard";
import { apiSuccess, apiError } from "@/lib/server/response";
import {
  DEFAULT_COMBO_PRODUCT_PAGE_DATA,
  DEFAULT_CREAM_PRODUCT_PAGE_DATA,
  DEFAULT_SERUM_PRODUCT_PAGE_DATA,
} from "@/constants/defaultProductPageData";

const DEFAULT_DATA_BY_SLUG: Record<string, any> = {
  combo: DEFAULT_COMBO_PRODUCT_PAGE_DATA,
  cream: DEFAULT_CREAM_PRODUCT_PAGE_DATA,
  serum: DEFAULT_SERUM_PRODUCT_PAGE_DATA,
};

const getDefaultData = (slug: string) =>
  DEFAULT_DATA_BY_SLUG[slug] || { ...DEFAULT_COMBO_PRODUCT_PAGE_DATA, slug };

const ALLOWED_FIELDS = [
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

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  try {
    await connectMongo();
    let page = await ProductPage.findOne({ slug, isActive: true }).exec();

    if (!page) {
      page = await ProductPage.create({
        ...getDefaultData(slug),
        slug,
        isActive: true,
      });
    }

    return apiSuccess(page);
  } catch (error) {
    console.error(`Error fetching product page for slug "${slug}":`, error);
    return apiSuccess(getDefaultData(slug));
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  try {
    await requireAuth(req);

    const body = await req.json();
    const unknownFields = Object.keys(body || {}).filter(
      (key) => !ALLOWED_FIELDS.includes(key)
    );
    if (unknownFields.length > 0) {
      return apiError(
        `property ${unknownFields.join(", ")} should not exist`,
        400
      );
    }

    await connectMongo();
    let page = await ProductPage.findOne({ slug, isActive: true }).exec();

    if (!page) {
      page = await ProductPage.create({
        ...getDefaultData(slug),
        ...body,
        slug,
        isActive: true,
      });
      return apiSuccess(page);
    }

    Object.keys(body).forEach((key) => {
      if (body[key] !== undefined) {
        page[key] = body[key];
      }
    });

    await page.save();
    return apiSuccess(page);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return apiError(error.message, 401);
    }
    console.error(`Error updating product page for slug "${slug}":`, error);
    return apiError("Internal server error", 500);
  }
}
