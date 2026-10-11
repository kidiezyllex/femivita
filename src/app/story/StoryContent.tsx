"use client";

import { Header } from "@/components/Landing/Header";
import { StoryBanner } from "@/components/Story/StoryBanner";
import { StoryDetails } from "@/components/Story/StoryDetails";
import { MissionPromise } from "@/components/Story/MissionPromise";
import { StoryCombo } from "@/components/Story/StoryCombo";
import { Footer } from "@/components/Landing/Footer";
import { CTA } from "@/components/Landing/CTA";
import { StoryProvider } from "@/context/StoryContext";

export default function StoryContent() {
  return (
    <StoryProvider initialEditMode={false}>
      <div className="min-h-screen bg-[#FAF8F0] text-[#333333] flex flex-col">
        <Header />
        <main className="flex-1 w-full">
          <StoryBanner />
          <StoryDetails />
          <MissionPromise />
          <StoryCombo />
        </main>
        <CTA />
        <Footer />
      </div>
    </StoryProvider>
  );
}
