export interface DropdownProduct {
  id: string;
  href: string;
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  badge?: string;
}

export interface HeaderData {
  topBannerText: string;
  logoUrl?: string;
  links?: Array<{ label: string; href: string }>;
  dropdownProducts?: DropdownProduct[];
}

export interface HeroProduct {
  image: string;
  thumbnail: string;
  subtitle: string;
  title: string;
  description: string;
  link?: string;
}

export interface HeroData {
  marqueeText: string;
  products: HeroProduct[];
}

export interface BrandStoryData {
  title: string;
  quote?: string;
  description: string;
  bgImage: string;
  ctaText: string;
  ctaLink?: string;
}

export interface DualAntiAgingData {
  subtitle: string;
  title: string;
  highlightWord?: string;
  labels: string[];
  description: string;
  image: string;
}

export interface ProductCard {
  id: string;
  title: string;
  description: string;
  badge?: string;
  image: string;
  volume: string;
  price: string;
  oldPrice?: string;
  link: string;
}

export interface ProductsSectionData {
  subtitle: string;
  title: string;
  products: ProductCard[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQTab {
  id: string;
  label: string;
  items: FAQItem[];
}

export interface FAQSectionData {
  subtitle: string;
  title: string;
  highlightWord?: string;
  description: string;
  tabs: FAQTab[];
}

export interface CTASectionData {
  title: string;
  description: string;
  bgImage: string;
  buttonText: string;
}

export interface FooterSocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface FooterData {
  brandName?: string;
  logoUrl?: string;
  slogan?: string;
  companyName?: string;
  businessLicense?: string;
  address?: string;
  phone?: string;
  email?: string;
  copyright?: string;
  socialLinks?: FooterSocialLinks;
}

export interface LandingPageData {
  header: HeaderData;
  hero: HeroData;
  brandStory: BrandStoryData;
  dualAntiAging: DualAntiAgingData;
  productsSection: ProductsSectionData;
  faqSection: FAQSectionData;
  ctaSection: CTASectionData;
  footer?: FooterData;
  isActive?: boolean;
  updatedAt?: string;
}
