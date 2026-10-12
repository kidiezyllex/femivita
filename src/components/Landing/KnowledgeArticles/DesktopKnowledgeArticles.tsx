import { PillLinkButton } from "@/components/ui/PillLinkButton";
import React from "react";
import { KnowledgeArticleCard } from "./KnowledgeArticleCard";
import { KnowledgeArticlesProps } from "./types";

export const DesktopKnowledgeArticles: React.FC<KnowledgeArticlesProps> = ({ data }) => (
  <div className="bg-brand-lavender px-12 pt-20">
    <div className="overflow-hidden rounded-2xl bg-white">
      {/* Title */}
      <div className="grid grid-cols-12 gap-x-4 pt-20">
        <div className="col-span-7 col-start-2 flex flex-col items-start gap-2">
          <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="whitespace-nowrap font-sans font-semibold leading-[1.3] text-black [font-size:clamp(32px,3.34vw,48px)]">
            {data.headlineStart} <span className="text-brand-text">{data.headlineHighlight}</span>
          </h2>
        </div>
        <div className="col-span-3 col-start-9 flex items-end justify-end pt-10">
          <PillLinkButton href={data.ctaHref} label={data.ctaLabel} />
        </div>
      </div>

      <div className="mt-20 border-t border-ink-line" />

      {/* Articles */}
      <div className="mx-auto flex w-full max-w-[1118px] justify-center gap-12 px-6 xl:gap-[120px] xl:px-0">
        {data.articles.map((article, index) => (
          <div key={article.id} className="relative min-w-0 max-w-[292.44px] flex-1 py-20">
            <KnowledgeArticleCard article={article} readMoreLabel={data.readMoreLabel} />
            {index < data.articles.length - 1 && (
              <div className="absolute inset-y-0 right-[-24px] w-px bg-ink-line xl:right-[-60px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
