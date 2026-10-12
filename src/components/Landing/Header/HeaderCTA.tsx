import { PillLinkButton } from "@/components/ui/PillLinkButton";
import React from "react";
import { HEADER_CTA } from "./types";

interface HeaderCTAProps {
  onClick?: () => void;
  className?: string;
}

export const HeaderCTA: React.FC<HeaderCTAProps> = ({ onClick, className }) => (
  <PillLinkButton
    href={HEADER_CTA.href}
    label={HEADER_CTA.label}
    onClick={onClick}
    className={className}
  />
);
