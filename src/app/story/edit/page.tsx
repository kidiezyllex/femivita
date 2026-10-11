"use client";

import { AdminLoginDialog } from "@/components/Admin/AdminLoginDialog";
import { SectionEditWrapper } from "@/components/Admin/SectionEditWrapper";
import { StoryModalsContainer } from "@/components/Admin/modals/story/StoryModalsContainer";
import { CTA } from "@/components/Landing/CTA";
import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { MissionPromise } from "@/components/Story/MissionPromise";
import { StoryBanner } from "@/components/Story/StoryBanner";
import { StoryCombo } from "@/components/Story/StoryCombo";
import { StoryDetails } from "@/components/Story/StoryDetails";
import { StoryProvider, useStory } from "@/context/StoryContext";

function EditStoryPageContent() {
  const story = useStory();

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F0] text-[#333333]">
      {/* Admin Login Dialog */}
      <AdminLoginDialog contextValue={story} />

      {/* Header */}
      <Header adminBarContext={story} />

      <main className="w-full flex-1">
        {/* Story Banner */}
        <SectionEditWrapper
          sectionKey="storyBanner"
          sectionTitle="Banner giới thiệu"
          contextValue={story}
        >
          <StoryBanner />
        </SectionEditWrapper>

        {/* Story Details */}
        <SectionEditWrapper
          sectionKey="storyDetails"
          sectionTitle="Câu chuyện thương hiệu"
          contextValue={story}
        >
          <StoryDetails />
        </SectionEditWrapper>

        {/* Mission & Promise */}
        <SectionEditWrapper
          sectionKey="missionPromise"
          sectionTitle="Sứ mệnh & Cam kết"
          contextValue={story}
        >
          <MissionPromise />
        </SectionEditWrapper>

        {/* Story Combo */}
        <SectionEditWrapper
          sectionKey="storyCombo"
          sectionTitle="Section Combo giới thiệu"
          contextValue={story}
        >
          <StoryCombo />
        </SectionEditWrapper>
      </main>

      <CTA />
      <Footer />

      {/* Edit Form Modals for all Story sections */}
      <StoryModalsContainer />
    </div>
  );
}

export default function EditStoryPage() {
  return (
    <StoryProvider initialEditMode={true}>
      <EditStoryPageContent />
    </StoryProvider>
  );
}
