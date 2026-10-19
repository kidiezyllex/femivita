import { ArrowLink } from "@/components/ui/ArrowLink";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { KnowledgeArticle } from "./types";

interface KnowledgeArticleCardProps {
  article: KnowledgeArticle;
  readMoreLabel: string;
  /** Smaller type and image for narrow columns (tablet) */
  compact?: boolean;
  className?: string;
  imageClassName?: string;
}

export const KnowledgeArticleCard: React.FC<KnowledgeArticleCardProps> = ({
  article,
  readMoreLabel,
  compact = false,
  className,
  imageClassName,
}) => (
  <article className={cn("relative flex flex-col gap-[17px]", className)}>
    <div className="flex flex-wrap items-center gap-2 font-google-sans text-sm leading-[1.6] text-ink-muted xl:text-base">
      <span>{article.category}</span>
      <Image src="/logos/dot.svg" alt="" width={3} height={4} draggable={false} />
      <span>{article.date}</span>
    </div>

    <Link
      href={article.href}
      className={cn(
        "relative block aspect-[292.44/178] w-full overflow-hidden rounded-lg",
        imageClassName,
      )}
    >
      <Image
        src={article.image}
        alt={article.imageAlt}
        fill
        quality={100}
        sizes="(min-width: 1280px) 292px, (min-width: 768px) 33vw, 100vw"
        draggable={false}
        className="object-cover"
      />
    </Link>

    <div className="flex flex-col font-google-sans text-ink-dark">
      <h3 className={cn("leading-[1.6]", compact ? "text-lg" : "text-xl")}>
        <Link href={article.href} className="transition-colors hover:text-brand">
          {article.title}
        </Link>
      </h3>
      <p className="line-clamp-2 text-base leading-[1.6]">{article.excerpt}</p>
    </div>

    <ArrowLink href={article.href} label={readMoreLabel} />
  </article>
);
