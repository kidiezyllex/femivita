"use client";

import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { OrderBanner } from "@/components/Order/OrderBanner";
import { Suspense } from "react";

export default function OrderContent() {
  return (
    <div className="flex flex-col bg-[#FAF8F0] text-[#333333]">
      <Header />
      <main className="w-full flex-1">
        <Suspense fallback={null}>
          <OrderBanner />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
