import { PillLinkButton } from "@/components/ui/PillLinkButton";
import React from "react";
import { KnowledgeArticleCard } from "./KnowledgeArticleCard";
import { KnowledgeArticlesProps } from "./types";

export const MobileKnowledgeArticles: React.FC<KnowledgeArticlesProps> = ({ data }) => (
  <div className="bg-brand-lavender px-4 pt-8">
    <div className="overflow-hidden rounded-2xl bg-white">
      {/* Title */}
      <div className="flex flex-col items-start gap-4 px-5 pt-10">
        <div className="flex flex-col items-start gap-2">
          <p className="font-google-sans text-base leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="font-sans text-[32px] font-semibold leading-[1.3] text-black">
            {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>
          </h2>
        </div>
        <PillLinkButton href={data.ctaHref} label={data.ctaLabel} />
      </div>

      <div className="mt-8 border-t border-ink-line" />

      {/* Articles */}
      <div className="flex flex-col divide-y divide-ink-line">
        {data.articles.map((article) => (
          <KnowledgeArticleCard
            key={article.id}
            article={article}
            readMoreLabel={data.readMoreLabel}
            className="px-5 py-8"
          />
        ))}
      </div>
    </div>
  </div>
);
