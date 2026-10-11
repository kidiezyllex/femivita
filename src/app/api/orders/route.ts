import { NextRequest } from "next/server";
import { apiSuccess, apiError } from "@/lib/server/response";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const address = typeof body?.address === "string" ? body.address.trim() : "";
    const product = typeof body?.product === "string" ? body.product.trim() : "";
    const source = typeof body?.source === "string" ? body.source.trim() : "";

    if (!name || !phone || !address || !product) {
      return apiError("Vui lòng nhập đầy đủ thông tin đặt hàng.", 400);
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("GOOGLE_SHEET_WEBHOOK_URL is not configured");
      return apiError("Internal server error", 500);
    }

    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, address, product, source }),
    });

    const sheetResultText = await sheetResponse.text();
    const sheetResult = (() => {
      try {
        return JSON.parse(sheetResultText);
      } catch {
        return null;
      }
    })();

    if (!sheetResponse.ok || !sheetResult?.success) {
      console.error(
        "Failed to write order to Google Sheet:",
        sheetResponse.status,
        sheetResultText.slice(0, 500),
      );
      return apiError("Internal server error", 500);
    }

    return apiSuccess({ name, phone, address, product, source });
  } catch (error) {
    console.error("Error submitting order:", error);
    return apiError("Internal server error", 500);
  }
}
