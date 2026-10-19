import { KNOWLEDGE_ARTICLES } from "./articles";

export interface KnowledgeCategory {
  id: string;
  label: string;
}

export interface KnowledgeListArticle {
  id: string;
  /** Categories the article is listed under. Empty means it only shows under "Tất cả". */
  categoryIds: string[];
  /** Label shown on the card (the article's first category, or "Tin tức"). */
  category: string;
  date: string;
  /** Cover image; articles without one get a branded placeholder. */
  image?: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface KnowledgeListData {
  categoryLabel: string;
  /** First entry is the "show everything" category. */
  categories: KnowledgeCategory[];
  articles: KnowledgeListArticle[];
  pageSize: number;
  readMoreLabel: string;
  emptyMessage: string;
  prevLabel: string;
  nextLabel: string;
}

export const ALL_CATEGORY_ID = "all";

// Labels and ids follow the categories of https://www.femivita.vn/tintuc (the Figma frame only shows the first four).
export const KNOWLEDGE_CATEGORIES: KnowledgeCategory[] = [
  { id: ALL_CATEGORY_ID, label: "Tất cả" },
  { id: "sexual-health", label: "Sức khoẻ tình dục" },
  { id: "reproductive-health", label: "Sức khoẻ sinh sản" },
  { id: "gynecological-health", label: "Sức khoẻ phụ khoa" },
  { id: "married-life", label: "Đời sống vợ chồng" },
];

export const DEFAULT_KNOWLEDGE_LIST_DATA: KnowledgeListData = {
  categoryLabel: "Danh mục bài viết",
  categories: KNOWLEDGE_CATEGORIES,
  articles: KNOWLEDGE_ARTICLES,
  pageSize: 6,
  readMoreLabel: "Đọc thêm",
  emptyMessage: "Chưa có bài viết trong danh mục này.",
  prevLabel: "Trước",
  nextLabel: "Sau",
};
