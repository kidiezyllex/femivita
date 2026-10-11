import { Badge } from "@/components/ui/badge";
export function getOrderStatusBadge(status: string) {
  switch (status) {
    // 1. Order Process Statuses
    case "PENDING":
      return (
        <Badge variant="amber" className="capitalize">
          Đang chờ
        </Badge>
      );
    case "ACCEPTED":
      return (
        <Badge variant="blue" className="capitalize">
          Đã chấp nhận
        </Badge>
      );
    case "PICKED_UP":
      return (
        <Badge variant="indigo" className="capitalize">
          Đã lấy hàng
        </Badge>
      );
    case "DELIVERED":
      return (
        <Badge variant="green" className="capitalize">
          Đã giao hàng
        </Badge>
      );
    case "CANCELLED":
      return (
        <Badge variant="red" className="capitalize">
          Đã hủy
        </Badge>
      );

    // 2. Payment Statuses
    case "UNPAID":
      return (
        <Badge variant="orange" className="capitalize">
          Chưa thanh toán
        </Badge>
      );
    case "PAID":
      return (
        <Badge variant="green" className="capitalize">
          Đã thanh toán
        </Badge>
      );

    // 3. Payment Methods
    case "CASH":
      return (
        <Badge variant="slate" className="capitalize">
          Tiền mặt
        </Badge>
      );
    case "WALLET":
      return (
        <Badge variant="cyan" className="capitalize">
          Ví điện tử
        </Badge>
      );

    default:
      return (
        <Badge variant="slate" className="capitalize">
          {status}
        </Badge>
      );
  }
}
