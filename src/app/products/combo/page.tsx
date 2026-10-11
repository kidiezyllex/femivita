import type { Metadata } from 'next';
import ComboContent from './ComboContent';
import { buildProductJsonLd } from '@/lib/productJsonLd';
import { DEFAULT_COMBO_PRODUCT_PAGE_DATA } from '@/constants/defaultProductPageData';

export const metadata: Metadata = {
  title: 'Combo Serum Và Kem Dưỡng Vỏ Chuối - Chăm Sóc Da Toàn Diện | Musase',
  description:
    'Combo tinh chất vỏ chuối và kem dưỡng vỏ chuối Musase - giải pháp chăm sóc từ vỏ chuối toàn diện giúp vỏ chuối chống lão hoá, dưỡng ẩm chuyên sâu và trẻ hóa làn da, tiết kiệm hơn khi mua trọn bộ.',
  keywords: [
    'combo Musase', 'combo tinh chất vỏ chuối', 'combo kem dưỡng vỏ chuối',
    'Musase Skincare', 'làm đẹp từ vỏ chuối', 'vỏ chuối chống lão hoá',
    'chăm sóc từ vỏ chuối', 'bộ sản phẩm chống lão hóa',
  ],
  alternates: {
    canonical: '/products/combo',
  },
  openGraph: {
    title: 'Combo Serum Và Kem Dưỡng Vỏ Chuối Musase - Chăm Sóc Da Toàn Diện',
    description:
      'Trọn bộ tinh chất vỏ chuối và kem dưỡng vỏ chuối giúp chống lão hóa, dưỡng ẩm chuyên sâu và trẻ hóa làn da hiệu quả, tiết kiệm hơn khi mua combo.',
    url: 'https://www.musase.vn/products/combo',
  },
};

export default function ComboPage() {
  const productJsonLd = buildProductJsonLd(DEFAULT_COMBO_PRODUCT_PAGE_DATA);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ComboContent />
    </>
  );
}
