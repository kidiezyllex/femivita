import { Footer } from '@/components/Landing/Footer';
import { Header } from '@/components/Landing/Header';
import { KnowledgeList } from '@/components/Knowledge';
import { PageHero } from '@/components/ui/PageHero';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Kiến thức',
  description:
    'Kiến thức về sức khỏe tình dục, sức khỏe sinh sản và sức khỏe phụ khoa từ Femivita: chăm sóc vùng kín đúng cách, Gel Venus và các công nghệ phục hồi.',
  path: '/knowledge',
  keywords: ['kiến thức sức khỏe tình dục', 'kiến thức chăm sóc vùng kín', 'sức khỏe phụ khoa'],
});

export default function KnowledgePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header overlay />
      <main className="w-full flex-1">
        <PageHero title="Kiến thức" />
        <KnowledgeList />
        <Footer />
      </main>
    </div>
  );
}
