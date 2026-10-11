import { cn } from "@/lib/utils";
import '@fontsource-variable/mona-sans';
import type { Metadata } from 'next';
import { Cinzel, Inter, Open_Sans, Orbitron } from "next/font/google";
import './globals.css';

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-opensans-google",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron-google",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: 'Musase Skincare - Làm đẹp từ vỏ chuối, chống lão hóa da tự nhiên',
    template: '%s | Musase'
  },
  description: 'Musase Skincare - Thương hiệu mỹ phẩm làm đẹp từ vỏ chuối, mang đến tinh chất vỏ chuối và kem dưỡng vỏ chuối giúp vỏ chuối chống lão hoá, dưỡng ẩm chuyên sâu và chăm sóc từ vỏ chuối an toàn, lành tính cho mọi loại da.',
  keywords: [
    'Musase', 'Musase Skincare', 'làm đẹp từ vỏ chuối', 'vỏ chuối chống lão hoá',
    'tinh chất vỏ chuối', 'kem dưỡng vỏ chuối', 'chăm sóc từ vỏ chuối',
    'mỹ phẩm thiên nhiên', 'chống lão hóa da', 'dưỡng ẩm da', 'chiết xuất vỏ chuối',
    'skincare thiên nhiên', 'serum chống lão hóa', 'mỹ phẩm lành tính', 'trẻ hóa làn da',
    'mỹ phẩm chiết xuất thiên nhiên Việt Nam', 'chăm sóc da chuyên sâu'
  ],
  authors: [{ name: 'Musase' }],
  creator: 'Musase',
  publisher: 'CÔNG TY TNHH CERY SKINLAB',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.musase.vn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Musase Skincare - Làm đẹp từ vỏ chuối, chống lão hóa da tự nhiên',
    description: 'Thương hiệu mỹ phẩm làm đẹp từ vỏ chuối, mang đến tinh chất vỏ chuối và kem dưỡng vỏ chuối giúp vỏ chuối chống lão hoá, dưỡng ẩm chuyên sâu và lành tính cho mọi loại da.',
    url: 'https://www.musase.vn',
    siteName: 'Musase',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musase Skincare - Làm đẹp từ vỏ chuối, chống lão hóa da tự nhiên',
    description: 'Thương hiệu mỹ phẩm làm đẹp từ vỏ chuối, mang đến tinh chất vỏ chuối và kem dưỡng vỏ chuối giúp vỏ chuối chống lão hoá, dưỡng ẩm chuyên sâu và lành tính cho mọi loại da.',
    images: ['https://res.cloudinary.com/dxrmfi8xm/image/upload/v1788096394/og_image_bmek66.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

import { LandingLayout } from '@/components/layout/LandingLayout';
import { ReactQueryClientProvider } from '@/provider/ReactQueryClientProvider';
import { ToastProvider } from '@/provider/ToastProvider';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Musase',
    url: 'https://www.musase.vn',
    logo: 'https://www.musase.vn/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84383249898',
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: 'Vietnamese',
    },
  };

  return (
    <html lang="vi" className={cn("dark scroll-smooth", openSans.variable, orbitron.variable, cinzel.variable, inter.variable)}>
      <head>
        <meta property="og:image" content="https://res.cloudinary.com/dxrmfi8xm/image/upload/v1788096394/og_image_bmek66.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Musase - Tinh chất vỏ chuối" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={cn("bg-[#050505] text-white")} suppressHydrationWarning>
        <NextTopLoader
          color="#ffffff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #ffffff,0 0 5px #ffffff"
        />
        <ReactQueryClientProvider>
          <LandingLayout>
            {children}
          </LandingLayout>
          <ToastProvider />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
