"use client";

import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { SerumProduct } from "@/components/Product/SerumProduct";
import { ProductPageProvider } from "@/context/ProductPageContext";

export default function SerumContent() {
  return (
    <ProductPageProvider slug="serum">
      <div className="flex min-h-screen flex-col bg-creamBackgroundV1">
        <Header />
        <main className="w-full flex-1">
          <SerumProduct />
        </main>
        <Footer />
        {/* <FixedOrderBar data={SERUM_PRODUCT_DATA} /> */}
      </div>
    </ProductPageProvider>
  );
}
