import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Liên hệ Musase Skincare - Tư vấn chăm sóc từ vỏ chuối',
  description:
    'Liên hệ Musase Skincare để được tư vấn các sản phẩm tinh chất vỏ chuối, kem dưỡng vỏ chuối và giải pháp chăm sóc từ vỏ chuối giúp chống lão hóa, dưỡng da an toàn, lành tính.',
  keywords: [
    'liên hệ Musase', 'Musase Skincare', 'tư vấn chăm sóc từ vỏ chuối',
    'mua tinh chất vỏ chuối', 'mua kem dưỡng vỏ chuối', 'đại lý Musase',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Liên hệ Musase Skincare',
    description:
      'Kết nối với Musase Skincare để được tư vấn miễn phí về các sản phẩm chăm sóc từ vỏ chuối phù hợp với làn da của bạn.',
    url: 'https://www.musase.vn/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
