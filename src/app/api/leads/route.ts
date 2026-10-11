import { NextRequest } from "next/server";
import { apiSuccess, apiError } from "@/lib/server/response";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const source = typeof body?.source === "string" ? body.source.trim() : "";

    if (!name || !phone) {
      return apiError("Vui lòng nhập đầy đủ họ tên và số điện thoại.", 400);
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("GOOGLE_SHEET_WEBHOOK_URL is not configured");
      return apiError("Internal server error", 500);
    }

    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, source }),
    });

    const sheetResult = await sheetResponse.json().catch(() => null);

    if (!sheetResponse.ok || !sheetResult?.success) {
      console.error("Failed to write lead to Google Sheet:", sheetResult);
      return apiError("Internal server error", 500);
    }

    return apiSuccess({ name, phone, source });
  } catch (error) {
    console.error("Error submitting lead:", error);
    return apiError("Internal server error", 500);
  }
}
