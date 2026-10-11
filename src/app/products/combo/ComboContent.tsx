"use client";

import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { ComboProduct } from "@/components/Product/ComboProduct";
import { ProductPageProvider } from "@/context/ProductPageContext";

export default function ComboContent() {
  return (
    <ProductPageProvider slug="combo">
      <div className="flex min-h-screen flex-col bg-creamBackgroundV1">
        <Header />
        <main className="w-full flex-1">
          <ComboProduct />
        </main>
        <Footer />
        {/* <FixedOrderBar /> */}
      </div>
    </ProductPageProvider>
  );
}
