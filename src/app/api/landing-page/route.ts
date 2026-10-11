import { NextRequest } from "next/server";
import { connectMongo } from "@/lib/server/mongodb";
import { LandingPage } from "@/lib/server/models/LandingPage";
import { requireAuth, UnauthorizedError } from "@/lib/server/authGuard";
import { apiSuccess, apiError } from "@/lib/server/response";
import { DEFAULT_LANDING_PAGE_DATA } from "@/constants/defaultLandingData";

const ALLOWED_SECTIONS = [
  "header",
  "hero",
  "brandStory",
  "dualAntiAging",
  "productsSection",
  "faqSection",
  "ctaSection",
  "footer",
];

export async function GET() {
  try {
    await connectMongo();
    let page = await LandingPage.findOne({ isActive: true }).exec();

    if (!page) {
      page = await LandingPage.create({
        ...DEFAULT_LANDING_PAGE_DATA,
        isActive: true,
      });
    }

    return apiSuccess(page);
  } catch (error) {
    console.error("Error fetching landing page data:", error);
    return apiSuccess(DEFAULT_LANDING_PAGE_DATA);
  }
}

export async function PUT(req: NextRequest) {
  try {
    await requireAuth(req);

    const body = await req.json();
    const unknownFields = Object.keys(body || {}).filter(
      (key) => !ALLOWED_SECTIONS.includes(key)
    );
    if (unknownFields.length > 0) {
      return apiError(
        `property ${unknownFields.join(", ")} should not exist`,
        400
      );
    }

    await connectMongo();
    let page = await LandingPage.findOne({ isActive: true }).exec();

    if (!page) {
      page = await LandingPage.create({
        ...DEFAULT_LANDING_PAGE_DATA,
        ...body,
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
    console.error("Error updating landing page:", error);
    return apiError("Internal server error", 500);
  }
}
