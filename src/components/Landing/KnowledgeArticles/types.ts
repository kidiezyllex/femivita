import { KNOWLEDGE_ARTICLES } from "@/components/Knowledge/articles";

export interface KnowledgeArticle {
  id: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface KnowledgeArticlesData {
  eyebrow: string;
  headlineStart: string;
  headlineHighlight: string;
  ctaLabel: string;
  ctaHref: string;
  readMoreLabel: string;
  articles: KnowledgeArticle[];
}

export interface KnowledgeArticlesProps {
  data: KnowledgeArticlesData;
}

const HOME_ARTICLE_COUNT = 3;

// The home section shows the newest posts that belong to a topic (announcements and promotions are skipped),
// taken from the same data as the /knowledge page.
const HOME_ARTICLES: KnowledgeArticle[] = KNOWLEDGE_ARTICLES.filter((article) => article.categoryIds.length > 0)
  .flatMap(({ image, ...article }) => (image ? [{ ...article, image }] : []))
  .slice(0, HOME_ARTICLE_COUNT)
  .map(({ id, category, date, image, imageAlt, title, excerpt, href }) => ({
    id,
    category,
    date,
    image,
    imageAlt,
    title,
    excerpt,
    href,
  }));

export const DEFAULT_KNOWLEDGE_ARTICLES_DATA: KnowledgeArticlesData = {
  eyebrow: "Kiến thức",
  headlineStart: "Gel cảm hứng",
  headlineHighlight: "vùng Y",
  ctaLabel: "Xem thêm",
  ctaHref: "/knowledge",
  readMoreLabel: "Đọc thêm",
  articles: HOME_ARTICLES,
};
