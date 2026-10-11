"use client";

import { Icon } from "@/components/ui/mdi-icon";
import { useLanding } from "@/context/LandingContext";
import { EditableContextLike } from "@/types/editableContext";
import { mdiPencilOutline } from "@mdi/js";
import React from "react";
import { Button } from "../ui/button";

interface SectionEditWrapperProps {
  sectionKey: string;
  sectionTitle: string;
  children: React.ReactNode;
  contextValue?: EditableContextLike;
}

export const SectionEditWrapper: React.FC<SectionEditWrapperProps> = ({
  sectionKey,
  sectionTitle,
  children,
  contextValue,
}) => {
  const landing = useLanding();
  const { isEditMode, isAdmin, setActiveModal } = contextValue ?? landing;

  if (!isEditMode || !isAdmin) {
    return <>{children}</>;
  }

  const isHeader = sectionKey === "header" || sectionKey === "megaDropdown";

  return (
    <div className="group/section relative">
      {/* Floating Edit Badge & Trigger Button */}
      <div
        className={`absolute right-4 opacity-90 transition-opacity group-hover/section:opacity-100 ${
          isHeader ? "top-20 z-[110]" : "top-5 z-40"
        }`}
      >
        <Button
          variant="accentV1"
          type="button"
          onClick={() => setActiveModal(sectionKey)}
          className="shadow-lg"
        >
          <Icon path={mdiPencilOutline} size={0.8} />
          <span>Sửa: {sectionTitle}</span>
        </Button>
      </div>

      {/* Subtle outline on hover in edit mode */}
      <div className="transition-all group-hover/section:ring-2 group-hover/section:ring-[#C6893F]/40">
        {children}
      </div>
    </div>
  );
};
