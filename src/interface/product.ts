export interface IProductVariant {
  _id?: string;
  id: number;
  text: string;
  slug?: string;
  price: number;
  originalPrice: number;
  stock?: number;
  available: boolean;
  href?: string;
  openInNewTab?: boolean;
}

export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  categoryId: {
    _id: string;
    name: string;
  };
  image: string;
  tags: string[];
  status: string;
  available: boolean;
  description?: string;
  rating?: {
    value: number;
    count: number;
  };
  variants?: {
    title: string;
    list: IProductVariant[];
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface IProductDetail extends IProduct {
  meta: {
    title: string;
    description: string;
    image: string | null;
  };
  faq: {
    question: string;
    answer: string;
    _id?: string;
  }[];
  tutorial: string;
  description: string;
  policy: string;
  info: string;
  buyOptions: {
    _id?: string;
    title: string;
    type: string;
    description?: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
  }[];
  min: number;
  max: number;
  discounts: any[];
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  status?: string;
  productCount?: number;
}

export interface IApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  meta?: {
    timestamp: string;
    apiVersion: string;
  };
}
