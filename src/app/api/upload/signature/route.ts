import { NextRequest } from "next/server";
import { cloudinary } from "@/lib/server/cloudinary";
import { requireAuth, UnauthorizedError } from "@/lib/server/authGuard";
import { apiSuccess, apiError } from "@/lib/server/response";

const UPLOAD_FOLDER = "musase/images";

export async function POST(req: NextRequest) {
  try {
    await requireAuth(req);

    const timestamp = Math.round(Date.now() / 1000);
    const paramsToSign = {
      timestamp,
      folder: UPLOAD_FOLDER,
      transformation: "w_1500,h_1500,c_limit,q_auto",
    };

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET as string
    );

    return apiSuccess({
      signature,
      timestamp,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      folder: UPLOAD_FOLDER,
      transformation: paramsToSign.transformation,
    });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return apiError(error.message, 401);
    }
    console.error("Generate upload signature error:", error);
    return apiError("Internal server error", 500);
  }
}
