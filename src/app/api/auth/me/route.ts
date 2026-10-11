import { NextRequest } from "next/server";
import { requireAuth, UnauthorizedError } from "@/lib/server/authGuard";
import { apiSuccess, apiError } from "@/lib/server/response";

export async function GET(req: NextRequest) {
  try {
    const user = await requireAuth(req);
    return apiSuccess(user);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return apiError(error.message, 401);
    }
    console.error("Get profile error:", error);
    return apiError("Internal server error", 500);
  }
}
