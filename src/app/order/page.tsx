import type { Metadata } from 'next';
import OrderContent from './OrderContent';

export const metadata: Metadata = {
  title: 'Đặt hàng Musase Skincare - Sản phẩm chăm sóc từ vỏ chuối',
  description:
    'Đặt hàng nhanh các sản phẩm Musase Skincare: Bộ đôi ngừa lão hóa, Tinh chất vỏ chuối, Kem dưỡng vỏ chuối. Giao hàng toàn quốc.',
  keywords: [
    'đặt hàng Musase', 'mua tinh chất vỏ chuối', 'mua kem dưỡng vỏ chuối',
    'mua combo Musase', 'Musase Skincare',
  ],
  alternates: {
    canonical: '/order',
  },
  openGraph: {
    title: 'Đặt hàng Musase Skincare',
    description:
      'Hoàn tất đơn hàng để Musase Skincare đồng hành cùng làn da của bạn.',
    url: 'https://www.musase.vn/order',
  },
};

export default function OrderPage() {
  return <OrderContent />;
}
