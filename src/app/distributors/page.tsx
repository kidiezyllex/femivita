import { Distributors } from '@/components/Distributors';
import { OfficialChannels } from '@/components/Distributors/OfficialChannels';
import { Footer } from '@/components/Landing/Footer';
import { Header } from '@/components/Landing/Header';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Trở thành Nhà phân phối',
  description:
    'Trở thành nhà phân phối của Femivita: chiết khấu hấp dẫn, chính sách tốt nhất, tư liệu truyền thông, đào tạo kiến thức chuyên sâu và kịch bản tư vấn. Đăng ký ngay.',
  path: '/distributors',
  keywords: ['nhà phân phối Femivita', 'đại lý Femivita', 'đăng ký nhà phân phối'],
});

export default function DistributorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header overlay />
      <main className="w-full flex-1">
        <Distributors />
        <OfficialChannels />
        <Footer />
      </main>
    </div>
  );
}
