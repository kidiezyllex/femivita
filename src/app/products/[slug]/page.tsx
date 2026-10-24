import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import {
  getProductDetail,
  PRODUCT_DETAILS,
  ProductDetailContent,
} from "@/components/ProductDetail";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(PRODUCT_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductDetail(slug);
  if (!product) return {};

  return buildPageMetadata({
    title: product.name,
    description: product.seoDescription,
    path: `/products/${product.slug}`,
    keywords: [product.name, `mua ${product.name}`],
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductDetail(slug);
  if (!product) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header overlay />
      <main className="w-full flex-1">
        <ProductDetailContent product={product} />
        <Footer tone="light" />
      </main>
    </div>
  );
}
