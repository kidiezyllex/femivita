"use client";

import React from "react";
import { DesktopKnowledgeArticles } from "./DesktopKnowledgeArticles";
import { MobileKnowledgeArticles } from "./MobileKnowledgeArticles";
import { TabletKnowledgeArticles } from "./TabletKnowledgeArticles";
import { DEFAULT_KNOWLEDGE_ARTICLES_DATA, KnowledgeArticlesData } from "./types";

export * from "./DesktopKnowledgeArticles";
export * from "./KnowledgeArticleCard";
export * from "./MobileKnowledgeArticles";
export * from "./TabletKnowledgeArticles";
export * from "./types";

interface KnowledgeArticlesSectionProps {
  data?: KnowledgeArticlesData;
}

export const KnowledgeArticles: React.FC<KnowledgeArticlesSectionProps> = ({
  data = DEFAULT_KNOWLEDGE_ARTICLES_DATA,
}) => (
  <section id="knowledge-articles" className="relative w-full overflow-hidden">
    {/* Mobile View: < 768px (<360px Edge Case, 360px-480px Standard, 481px-767px Landscape/Phablet) */}
    <div className="block md:hidden">
      <MobileKnowledgeArticles data={data} />
    </div>

    {/* Tablet View: 768px - 991px (Tablet dọc: iPad 10.2", iPad Air, Galaxy Tab) */}
    <div className="hidden md:block lg:hidden">
      <TabletKnowledgeArticles data={data} />
    </div>

    {/* Desktop View: >= 992px / 1024px+ (Tablet ngang 1024-1279px, Laptop 1280-1439px, Figma chuẩn 1440-1919px, >=1920px) */}
    <div className="hidden lg:block">
      <DesktopKnowledgeArticles data={data} />
    </div>
  </section>
);

export default KnowledgeArticles;
