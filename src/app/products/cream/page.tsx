import type { Metadata } from 'next';
import CreamContent from './CreamContent';
import { buildProductJsonLd } from '@/lib/productJsonLd';
import { DEFAULT_CREAM_PRODUCT_PAGE_DATA } from '@/constants/defaultProductPageData';

export const metadata: Metadata = {
  title: 'Kem Dưỡng Vỏ Chuối - Dưỡng Ẩm Và Chống Lão Hóa Da | Musase',
  description:
    'Kem dưỡng vỏ chuối Musase giúp dưỡng ẩm chuyên sâu, làm dịu và nuôi dưỡng làn da khỏe mạnh từ bên trong. Chăm sóc từ vỏ chuối - vỏ chuối chống lão hoá an toàn, không hương liệu, không paraben.',
  keywords: [
    'kem dưỡng vỏ chuối', 'tinh chất vỏ chuối', 'Musase Skincare', 'làm đẹp từ vỏ chuối',
    'vỏ chuối chống lão hoá', 'chăm sóc từ vỏ chuối', 'kem dưỡng ẩm da',
    'kem dưỡng lành tính', 'mỹ phẩm thiên nhiên',
  ],
  alternates: {
    canonical: '/products/cream',
  },
  openGraph: {
    title: 'Kem Dưỡng Vỏ Chuối Musase - Dưỡng Ẩm Và Chống Lão Hóa Da',
    description:
      'Kem dưỡng chiết xuất từ vỏ chuối giúp dưỡng ẩm chuyên sâu, làm dịu da và hỗ trợ trẻ hóa làn da tự nhiên, lành tính cho mọi loại da.',
    url: 'https://www.musase.vn/products/cream',
  },
};

export default function CreamPage() {
  const productJsonLd = buildProductJsonLd(DEFAULT_CREAM_PRODUCT_PAGE_DATA);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <CreamContent />
    </>
  );
}
