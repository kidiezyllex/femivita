"use client";

import { ContactBanner } from "@/components/Contact/ContactBanner";
import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";

export default function ContactContent() {
  return (
    <div className="flex flex-col bg-[#FAF8F0] text-[#333333]">
      <Header />
      <main className="w-full flex-1">
        <ContactBanner />
      </main>
      <Footer />
    </div>
  );
}
