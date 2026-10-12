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

const SAMPLE_ARTICLE = {
  date: "07 Tháng 9, 2026",
  image: "/images/knowledge/gel-venus-exosome-nmn.webp",
  imageAlt: "Gel Venus Y Passion với công nghệ NMN và Exosome",
  title: "Gel Venus Femivita – Khác biệt để thăng hoa",
  excerpt:
    "Khi nói về chăm sóc vùng kín, nhiều phụ nữ chỉ quen thuộc với gel bôi trơn thông thường, giúp giảm ma sát nhưng không thật sự mang lại cảm xúc trọn vẹn.",
  href: "/knowledge/gel-venus-femivita-khac-biet-de-thang-hoa",
};

export const DEFAULT_KNOWLEDGE_ARTICLES_DATA: KnowledgeArticlesData = {
  eyebrow: "Kiến thức",
  headlineStart: "Gel cảm hứng",
  headlineHighlight: "vùng Y",
  ctaLabel: "Xem thêm",
  ctaHref: "/knowledge",
  readMoreLabel: "Đọc thêm",
  // Figma repeats the same sample article three times (placeholder)
  articles: [
    { id: "article-1", category: "Sức khỏe sinh sản", ...SAMPLE_ARTICLE },
    { id: "article-2", category: "Sức khỏe sinh sản", ...SAMPLE_ARTICLE },
    { id: "article-3", category: "Sức khỏe tình dục", ...SAMPLE_ARTICLE },
  ],
};
