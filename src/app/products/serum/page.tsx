import type { Metadata } from 'next';
import SerumContent from './SerumContent';
import { buildProductJsonLd } from '@/lib/productJsonLd';
import { DEFAULT_SERUM_PRODUCT_PAGE_DATA } from '@/constants/defaultProductPageData';

export const metadata: Metadata = {
  title: 'Serum Tinh Chất Vỏ Chuối - Chống Lão Hóa Chuyên Sâu | Musase',
  description:
    'Serum tinh chất vỏ chuối Musase kết hợp Bakuchiol và Peptides Matrixyl 3000, giúp vỏ chuối chống lão hoá hiệu quả, làm mờ nếp nhăn, dưỡng ẩm chuyên sâu và trẻ hóa làn da tự nhiên, lành tính.',
  keywords: [
    'tinh chất vỏ chuối', 'serum vỏ chuối', 'serum chống lão hóa', 'Musase Skincare',
    'vỏ chuối chống lão hoá', 'làm đẹp từ vỏ chuối', 'chăm sóc từ vỏ chuối',
    'serum Bakuchiol', 'Matrixyl 3000', 'trẻ hóa làn da',
  ],
  alternates: {
    canonical: '/products/serum',
  },
  openGraph: {
    title: 'Serum Tinh Chất Vỏ Chuối Musase - Chống Lão Hóa Chuyên Sâu',
    description:
      'Giải pháp chống lão hóa toàn diện từ tinh chất vỏ chuối, Bakuchiol và Peptides Matrixyl 3000 - an toàn, lành tính cho mọi loại da.',
    url: 'https://www.musase.vn/products/serum',
  },
};

export default function SerumPage() {
  const productJsonLd = buildProductJsonLd(DEFAULT_SERUM_PRODUCT_PAGE_DATA);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <SerumContent />
    </>
  );
}
