import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Musase Skincare - Làm đẹp từ vỏ chuối, chống lão hóa da tự nhiên',
  description:
    'Musase Skincare - Thương hiệu tiên phong làm đẹp từ vỏ chuối tại Việt Nam. Tinh chất vỏ chuối và kem dưỡng vỏ chuối giúp vỏ chuối chống lão hóa, dưỡng ẩm chuyên sâu, trẻ hóa làn da an toàn và lành tính.',
  keywords: [
    'Musase', 'Musase Skincare', 'làm đẹp từ vỏ chuối', 'vỏ chuối chống lão hoá',
    'tinh chất vỏ chuối', 'kem dưỡng vỏ chuối', 'chăm sóc từ vỏ chuối',
    'mỹ phẩm chiết xuất vỏ chuối', 'serum vỏ chuối', 'chống lão hóa da tự nhiên',
    'dưỡng ẩm chuyên sâu', 'trẻ hóa làn da', 'mỹ phẩm thiên nhiên lành tính',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Musase Skincare - Làm đẹp từ vỏ chuối, chống lão hóa da tự nhiên',
    description:
      'Khám phá bộ sản phẩm tinh chất vỏ chuối và kem dưỡng vỏ chuối của Musase Skincare - giải pháp chăm sóc từ vỏ chuối giúp chống lão hóa và trẻ hóa làn da bền vững.',
    url: 'https://www.musase.vn',
    images: [
      {
        url: '/images/combo/combo5.webp',
        width: 1200,
        height: 1200,
        alt: 'Musase Skincare - Bộ đôi chống lão hóa từ vỏ chuối',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musase Skincare - Làm đẹp từ vỏ chuối, chống lão hóa da tự nhiên',
    description:
      'Khám phá bộ sản phẩm tinh chất vỏ chuối và kem dưỡng vỏ chuối của Musase Skincare - giải pháp chăm sóc từ vỏ chuối giúp chống lão hóa và trẻ hóa làn da bền vững.',
    images: ['/images/combo/combo5.webp'],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
