import { PillLinkButton } from "@/components/ui/PillLinkButton";
import React from "react";
import { KnowledgeArticleCard } from "./KnowledgeArticleCard";
import { KnowledgeArticlesProps } from "./types";

export const TabletKnowledgeArticles: React.FC<KnowledgeArticlesProps> = ({ data }) => (
  <div className="bg-brand-lavender px-8 pt-12">
    <div className="overflow-hidden rounded-2xl bg-white">
      {/* Title */}
      <div className="flex items-end justify-between gap-4 px-8 pt-12">
        <div className="flex flex-col items-start gap-2">
          <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="font-sans text-4xl font-semibold leading-[1.3] text-black">
            {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>
          </h2>
        </div>
        <PillLinkButton href={data.ctaHref} label={data.ctaLabel} />
      </div>

      <div className="mt-12 border-t border-ink-line" />

      {/* Articles */}
      <div className="grid grid-cols-3 divide-x divide-ink-line">
        {data.articles.map((article) => (
          <KnowledgeArticleCard
            key={article.id}
            article={article}
            readMoreLabel={data.readMoreLabel}
            compact
            className="px-6 py-10"
          />
        ))}
      </div>
    </div>
  </div>
);
