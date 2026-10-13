import { Footer } from '@/components/Landing/Footer';
import { Header } from '@/components/Landing/Header';
import { ProductsContent } from '@/components/Products';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Sản phẩm',
  description:
    'Sản phẩm Femivita: Gel Venus Y Passion và Bọt vệ sinh lợi khuẩn Probiotics Zone Fresh Mousse, chăm sóc vùng Y dịu nhẹ, không gây kích ứng.',
  path: '/products',
  keywords: ['sản phẩm Femivita', 'mua Gel Venus Y Passion', 'mua Zone Fresh Mousse'],
});

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header overlay />
      <main className="w-full flex-1">
        <ProductsContent />
        <Footer />
      </main>
    </div>
  );
}
