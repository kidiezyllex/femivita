"use client";

import React from "react";
import { HeroEditModal } from "./HeroEditModal";
import { BrandStoryEditModal } from "./BrandStoryEditModal";
import { DualAntiAgingEditModal } from "./DualAntiAgingEditModal";
import { ProductsEditModal } from "./ProductsEditModal";
import { FAQEditModal } from "./FAQEditModal";
import { CTAEditModal } from "./CTAEditModal";
import { HeaderEditModal } from "./HeaderEditModal";
import { FooterEditModal } from "./FooterEditModal";
import { MegaDropdownEditModal } from "./MegaDropdownEditModal";

export const SectionModalsContainer: React.FC = () => {
  return (
    <>
      <HeroEditModal />
      <BrandStoryEditModal />
      <DualAntiAgingEditModal />
      <ProductsEditModal />
      <FAQEditModal />
      <CTAEditModal />
      <HeaderEditModal />
      <FooterEditModal />
      <MegaDropdownEditModal />
    </>
  );
};
