import { NextRequest } from "next/server";
import { connectMongo } from "@/lib/server/mongodb";
import { StoryPage } from "@/lib/server/models/StoryPage";
import { requireAuth, UnauthorizedError } from "@/lib/server/authGuard";
import { apiSuccess, apiError } from "@/lib/server/response";
import { DEFAULT_STORY_PAGE_DATA } from "@/constants/defaultStoryPageData";

const ALLOWED_SECTIONS = ["storyBanner", "storyDetails", "missionPromise", "storyCombo"];

export async function GET() {
  try {
    await connectMongo();
    let page = await StoryPage.findOne({ isActive: true }).exec();

    if (!page) {
      page = await StoryPage.create({
        ...DEFAULT_STORY_PAGE_DATA,
        isActive: true,
      });
    }

    return apiSuccess(page);
  } catch (error) {
    console.error("Error fetching story page data:", error);
    return apiSuccess(DEFAULT_STORY_PAGE_DATA);
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
    let page = await StoryPage.findOne({ isActive: true }).exec();

    if (!page) {
      page = await StoryPage.create({
        ...DEFAULT_STORY_PAGE_DATA,
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
    console.error("Error updating story page:", error);
    return apiError("Internal server error", 500);
  }
}
