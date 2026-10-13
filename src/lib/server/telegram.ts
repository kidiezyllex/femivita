const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const formatVietnamTime = (date: Date) =>
  new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    dateStyle: "short",
    timeStyle: "medium",
  }).format(date);

export async function sendTelegramMessage(text: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHANNEL_ID;

  if (!botToken || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHANNEL_ID is not configured");
    return;
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to send Telegram notification:", response.status, errorText.slice(0, 500));
    }
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
}

export function formatOrderTelegramMessage(order: {
  name: string;
  phone: string;
  address: string;
  product: string;
  source?: string;
}) {
  const lines = [
    "<b>Đơn hàng mới</b>",
    `Thời gian: ${escapeHtml(formatVietnamTime(new Date()))}`,
    `Họ và tên: ${escapeHtml(order.name)}`,
    `Số điện thoại: ${escapeHtml(order.phone)}`,
    `Sản phẩm: ${escapeHtml(order.product)}`,
    `Địa chỉ giao hàng: ${escapeHtml(order.address)}`,
    `Nguồn: ${escapeHtml(order.source || "Không xác định")}`,
  ];
  return lines.join("\n");
}

export function formatLeadTelegramMessage(lead: {
  name: string;
  phone: string;
  source?: string;
}) {
  const lines = [
    "<b>Liên hệ mới</b>",
    `Thời gian: ${escapeHtml(formatVietnamTime(new Date()))}`,
    `Họ và tên: ${escapeHtml(lead.name)}`,
    `Số điện thoại: ${escapeHtml(lead.phone)}`,
    `Nguồn: ${escapeHtml(lead.source || "Không xác định")}`,
  ];
  return lines.join("\n");
}

export function formatDistributorTelegramMessage(request: {
  applicantType: string;
  name?: string;
  business?: string;
  phone?: string;
  email: string;
  message?: string;
}) {
  const lines = [
    "<b>Đăng ký nhà phân phối mới</b>",
    `Thời gian: ${escapeHtml(formatVietnamTime(new Date()))}`,
    `Bạn là: ${escapeHtml(request.applicantType)}`,
    `Họ và tên: ${escapeHtml(request.name || "Không cung cấp")}`,
    `Doanh nghiệp: ${escapeHtml(request.business || "Không cung cấp")}`,
    `Số điện thoại: ${escapeHtml(request.phone || "Không cung cấp")}`,
    `Email: ${escapeHtml(request.email)}`,
    `Nội dung: ${escapeHtml(request.message || "Không có")}`,
  ];
  return lines.join("\n");
}
