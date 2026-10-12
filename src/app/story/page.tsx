import { buildPageMetadata } from '@/lib/seo';
import StoryContent from './StoryContent';

export const metadata = buildPageMetadata({
  title: 'Câu chuyện thương hiệu',
  description:
    'Femivita - Chăm sóc vùng Y cho mọi giai đoạn của cuộc sống. Tìm hiểu câu chuyện thương hiệu và những nghiên cứu của Tập đoàn ENBIOSCIENCE đứng sau Gel Venus Y Passion và Zone Fresh Mousse.',
  path: '/story',
  keywords: ['câu chuyện thương hiệu Femivita', 'về Femivita'],
});

export default function StoryPage() {
  return <StoryContent />;
}
