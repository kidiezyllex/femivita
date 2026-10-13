import { BecomeDistributor } from '@/components/Brand/BecomeDistributor';
import { BrandCertificates } from '@/components/Brand/BrandCertificates';
import { BrandIntro } from '@/components/Brand/BrandIntro';
import { Footer } from '@/components/Landing/Footer';
import { Header } from '@/components/Landing/Header';
import { PageHero } from '@/components/ui/PageHero';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Về thương hiệu',
  description:
    'Femivita là sản phẩm thuộc tập đoàn ENBIOSCIENCE CO., LTD - Trung tâm nghiên cứu và phát triển sản phẩm mỹ phẩm Hàn Quốc. Tìm hiểu công nghệ phục hồi đột phá và các chứng nhận của thương hiệu.',
  path: '/story',
  keywords: ['về thương hiệu Femivita', 'câu chuyện thương hiệu Femivita', 'chứng nhận Femivita'],
});

export default function StoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header overlay />
      <main className="w-full flex-1">
        <PageHero title="Về thương hiệu" />
        <BrandIntro />
        <BrandCertificates />
        <BecomeDistributor />
        <Footer />
      </main>
    </div>
  );
}
