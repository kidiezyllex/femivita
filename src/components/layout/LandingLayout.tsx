"use client";

import { Footer } from "@/components/Landing/Footer";
import { usePathname } from "next/navigation";
import React from "react";

export const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
