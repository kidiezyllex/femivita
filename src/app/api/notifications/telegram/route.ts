import { NextRequest } from "next/server";
import { apiSuccess, apiError } from "@/lib/server/response";
import {
  sendTelegramMessage,
  formatOrderTelegramMessage,
  formatLeadTelegramMessage,
} from "@/lib/server/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const type = body?.type;

    if (type === "order") {
      const { name, phone, address, product, source } = body;
      if (
        typeof name !== "string" ||
        typeof phone !== "string" ||
        typeof address !== "string" ||
        typeof product !== "string"
      ) {
        return apiError("Thiếu dữ liệu đơn hàng để gửi thông báo.", 400);
      }

      await sendTelegramMessage(
        formatOrderTelegramMessage({ name, phone, address, product, source }),
      );
      return apiSuccess({ sent: true });
    }

    if (type === "lead") {
      const { name, phone, source } = body;
      if (typeof name !== "string" || typeof phone !== "string") {
        return apiError("Thiếu dữ liệu liên hệ để gửi thông báo.", 400);
      }

      await sendTelegramMessage(formatLeadTelegramMessage({ name, phone, source }));
      return apiSuccess({ sent: true });
    }

    return apiError("Loại thông báo không hợp lệ.", 400);
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    return apiError("Internal server error", 500);
  }
}
