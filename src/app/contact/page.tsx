import { buildPageMetadata } from '@/lib/seo';
import ContactContent from './ContactContent';

export const metadata = buildPageMetadata({
  title: 'Liên hệ',
  description:
    'Liên hệ Femivita để được tư vấn về Gel Venus Y Passion, Zone Fresh Mousse và chăm sóc vùng Y. Văn phòng tại Hà Nội và TP. Hồ Chí Minh.',
  path: '/contact',
  keywords: ['liên hệ Femivita', 'tư vấn chăm sóc vùng Y'],
});

export default function ContactPage() {
  return <ContactContent />;
}
