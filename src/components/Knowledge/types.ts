export interface KnowledgeCategory {
  id: string;
  label: string;
}

export interface KnowledgeListArticle {
  id: string;
  categoryId: string;
  category: string;
  date: string;
  image: string;
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

// Figma repeats one sample article five times, all in "Sức khỏe tình dục" (placeholder content).
const SAMPLE_ARTICLE = {
  categoryId: "sexual-health",
  category: "Sức khỏe tình dục",
  date: "07 Tháng 9, 2026",
  image: "/images/knowledge/gel-venus-exosome-nmn.webp",
  imageAlt: "Gel Venus Y Passion với công nghệ NMN và Exosome",
  title: "Gel Venus Femivita –Khác biệt để thăng hoa",
  excerpt:
    "Khi nói về chăm sóc vùng kín, nhiều phụ nữ chỉ quen thuộc với gel bôi trơn thông thường, giúp giảm ma sát nhưng không thật sự mang lại cảm xúc trọn vẹn.",
  href: "/knowledge/gel-venus-femivita-khac-biet-de-thang-hoa",
};

export const DEFAULT_KNOWLEDGE_LIST_DATA: KnowledgeListData = {
  categoryLabel: "Danh mục bài viết",
  categories: [
    { id: ALL_CATEGORY_ID, label: "Tất cả" },
    { id: "sexual-health", label: "Sức khỏe tình dục" },
    { id: "reproductive-health", label: "Sức khỏe sinh sản" },
    { id: "gynecological-health", label: "Sức khỏe phụ khoa" },
  ],
  articles: Array.from({ length: 5 }, (_, i) => ({ ...SAMPLE_ARTICLE, id: `article-${i + 1}` })),
  pageSize: 6,
  readMoreLabel: "Đọc thêm",
  emptyMessage: "Chưa có bài viết trong danh mục này.",
  prevLabel: "Trước",
  nextLabel: "Sau",
};
