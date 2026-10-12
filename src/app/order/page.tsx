import { buildPageMetadata } from '@/lib/seo';
import OrderContent from './OrderContent';

export const metadata = buildPageMetadata({
  title: 'Đặt hàng',
  description:
    'Đặt mua chính hãng Gel Venus Y Passion và Bọt vệ sinh lợi khuẩn Probiotics Zone Fresh Mousse từ Femivita.',
  path: '/order',
  keywords: ['đặt hàng Femivita', 'mua Gel Venus Y Passion chính hãng', 'mua Zone Fresh Mousse'],
});

export default function OrderPage() {
  return <OrderContent />;
}
