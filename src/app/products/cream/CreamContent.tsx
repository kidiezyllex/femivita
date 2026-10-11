"use client";

import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { CreamProduct } from "@/components/Product/CreamProduct";
import { ProductPageProvider } from "@/context/ProductPageContext";

export default function CreamContent() {
  return (
    <ProductPageProvider slug="cream">
      <div className="min-h-screen bg-creamBackgroundV1 flex flex-col">
        <Header />
        <main className="flex-1 w-full">
          <CreamProduct />
        </main>
        <Footer />
        {/* <FixedOrderBar data={CREAM_PRODUCT_DATA} /> */}
      </div>
    </ProductPageProvider>
  );
}
