import { FaqContent } from '@/components/Faq';
import { Footer } from '@/components/Landing/Footer';
import { Header } from '@/components/Landing/Header';
import { PageHero } from '@/components/ui/PageHero';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Câu hỏi thường gặp',
  description:
    'Giải đáp những thắc mắc phổ biến nhất về Femivita: nguồn gốc xuất xứ, Gel Venus, bọt vệ sinh và chăm sóc sức khoẻ thân mật. Liên hệ 0914 14 2464 để được hỗ trợ thêm.',
  path: '/faq',
  keywords: ['câu hỏi thường gặp Femivita', 'FAQ Femivita', 'hỗ trợ khách hàng Femivita'],
});

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header overlay />
      <main className="w-full flex-1">
        <PageHero
          title="Giải đáp những thắc mắc phổ biến nhất về Femivita"
          titleClassName="max-w-[664px]"
        />
        <FaqContent />
        <Footer />
      </main>
    </div>
  );
}
