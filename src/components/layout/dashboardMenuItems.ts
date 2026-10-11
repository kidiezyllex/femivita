import { MenuItem } from "@/interface/types";
import {
  mdiAccountGroupOutline,
  mdiBellOutline,
  mdiChartLine,
  mdiClipboardTextOutline,
  mdiDatabaseOutline,
  mdiPackageVariant,
  mdiTagOutline
} from "@mdi/js";

export const getDashboardMenuItems = (permissions: string[] = [], role?: string): MenuItem[] => {
  const allItems: MenuItem[] = [
    {
      id: "revenue",
      name: "Doanh thu",
      path: "/admin/revenue",
      icon: mdiChartLine,
    },
    {
      id: "order-management",
      name: "Đơn hàng",
      path: "/admin/orders",
      icon: mdiClipboardTextOutline,
    },
    // {
    //   id: "transaction-management",
    //   name: "Giao dịch",
    //   path: "/admin/transactions",
    //   icon: mdiCreditCardOutline,
    // },
    {
      id: "product-management",
      name: "Sản phẩm",
      path: "/admin/products",
      icon: mdiPackageVariant,
    },
    {
      id: "stock-management",
      name: "Kho tài khoản / key / proxy",
      path: "/admin/stocks",
      icon: mdiDatabaseOutline,
    },
    {
      id: "user-management",
      name: "Người dùng",
      path: "/admin/users",
      icon: mdiAccountGroupOutline,
    },
    {
      id: "category-management",
      name: "Danh mục",
      path: "/admin/categories",
      icon: mdiTagOutline,
    },
   
 
    {
      id: "notifications",
      name: "Thông báo",
      path: "/admin/notifications",
      icon: mdiBellOutline,
    },
  ];

  return allItems;
};
