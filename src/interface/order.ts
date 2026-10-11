export interface IOrderItem {
  productId: {
    _id: string;
    name: string;
    description?: string;
  };
  variantId: string;
  quantity: number;
  price: number;
  name: string;
  _id?: string;
}

export interface IBillingInfo {
  fullname: string;
  email: string;
  phone: string;
  note?: string;
  _id?: string;
}

export interface IOrder {
  _id: string;
  orderCode: number | string;
  transactionCode?: string;
  status: "PENDING" | "COMPLETED" | "CANCELLED" | string;
  paymentStatus: "PENDING" | "PAID" | string;
  paymentMethod: string;
  totalAmount: number;
  userId?: string | null;
  billingInfo: IBillingInfo;
  items: IOrderItem[];
  deliveredData?: string[];
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
