import { apiError, apiSuccess } from "@/lib/server/response";
import { formatDistributorTelegramMessage, sendTelegramMessage } from "@/lib/server/telegram";
import { NextRequest } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const readText = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const applicantType = readText(body?.applicantType, 100);
    const name = readText(body?.name, 100);
    const business = readText(body?.business, 150);
    const phone = readText(body?.phone, 30);
    const email = readText(body?.email, 150);
    const message = readText(body?.message, 2000);

    if (!applicantType || !EMAIL_PATTERN.test(email)) {
      return apiError("Vui lòng chọn bạn là ai và nhập email hợp lệ.", 400);
    }

    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHANNEL_ID) {
      console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHANNEL_ID is not configured");
      return apiError("Internal server error", 500);
    }

    await sendTelegramMessage(
      formatDistributorTelegramMessage({ applicantType, name, business, phone, email, message }),
    );

    return apiSuccess({ sent: true });
  } catch (error) {
    console.error("Error submitting distributor request:", error);
    return apiError("Internal server error", 500);
  }
}
