import type { Metadata } from 'next';
import StoryContent from './StoryContent';

export const metadata: Metadata = {
  title: 'Câu chuyện thương hiệu - Hành trình làm đẹp từ vỏ chuối',
  description:
    'Musase ra đời từ khát vọng biến vỏ chuối - thứ tưởng chừng là phế phẩm nông nghiệp - thành tinh chất vỏ chuối quý giá cho làn da. Tìm hiểu sứ mệnh và cam kết của Musase Skincare trong hành trình chăm sóc từ vỏ chuối.',
  keywords: [
    'Musase', 'Musase Skincare', 'câu chuyện thương hiệu Musase', 'làm đẹp từ vỏ chuối',
    'vỏ chuối chống lão hoá', 'tinh chất vỏ chuối', 'chăm sóc từ vỏ chuối',
    'sứ mệnh Musase', 'mỹ phẩm bền vững', 'nguyên liệu tự nhiên Việt Nam',
  ],
  alternates: {
    canonical: '/story',
  },
  openGraph: {
    title: 'Câu chuyện thương hiệu Musase - Hành trình làm đẹp từ vỏ chuối',
    description:
      'Tìm hiểu vì sao Musase Skincare chọn vỏ chuối làm nguyên liệu cốt lõi để tạo nên các sản phẩm chống lão hóa và chăm sóc da tự nhiên, lành tính.',
    url: 'https://www.musase.vn/story',
  },
};

export default function StoryPage() {
  return <StoryContent />;
}
