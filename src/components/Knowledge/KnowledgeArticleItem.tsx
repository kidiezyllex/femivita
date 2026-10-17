import { ArrowLink } from "@/components/ui/ArrowLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { KnowledgeListArticle } from "./types";

interface KnowledgeArticleItemProps {
  article: KnowledgeListArticle;
  readMoreLabel: string;
}

export const KnowledgeArticleItem: React.FC<KnowledgeArticleItemProps> = ({
  article,
  readMoreLabel,
}) => (
  <article className="flex flex-col gap-[17px] py-6 md:p-6 lg:p-10">
    <div className="flex flex-wrap items-center gap-2 font-google-sans text-base leading-[1.6] text-ink-muted">
      <span>{article.category}</span>
      <Image src="/logos/dot.svg" alt="" width={3} height={4} draggable={false} />
      <span>{article.date}</span>
    </div>

    <Link
      href={article.href}
      className="relative block aspect-[492/348] w-full overflow-hidden rounded-lg"
    >
      <Image
        src={article.image}
        alt={article.imageAlt}
        fill
        quality={100}
        sizes="(min-width: 1440px) 492px, (min-width: 768px) 45vw, 100vw"
        draggable={false}
        className="object-cover object-[50%_79%]"
      />
    </Link>

    <div className="flex flex-col font-google-sans text-ink-dark">
      <h3 className="text-2xl font-bold leading-[1.4] lg:text-[32px]">
        <Link href={article.href} className="transition-colors hover:text-brand">
          {article.title}
        </Link>
      </h3>
      <p className="text-base leading-[1.6] lg:text-xl">{article.excerpt}</p>
    </div>

    <ArrowLink href={article.href} label={readMoreLabel} />
  </article>
);
