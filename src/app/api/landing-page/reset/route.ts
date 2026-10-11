import { NextRequest } from "next/server";
import { connectMongo } from "@/lib/server/mongodb";
import { LandingPage } from "@/lib/server/models/LandingPage";
import { requireAuth, UnauthorizedError } from "@/lib/server/authGuard";
import { apiSuccess, apiError } from "@/lib/server/response";
import { DEFAULT_LANDING_PAGE_DATA } from "@/constants/defaultLandingData";

export async function POST(req: NextRequest) {
  try {
    await requireAuth(req);

    await connectMongo();
    let page = await LandingPage.findOne({ isActive: true }).exec();

    if (page) {
      Object.assign(page, DEFAULT_LANDING_PAGE_DATA);
      await page.save();
      return apiSuccess(page);
    }

    page = await LandingPage.create({
      ...DEFAULT_LANDING_PAGE_DATA,
      isActive: true,
    });
    return apiSuccess(page);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return apiError(error.message, 401);
    }
    console.error("Error resetting landing page:", error);
    return apiError("Internal server error", 500);
  }
}
