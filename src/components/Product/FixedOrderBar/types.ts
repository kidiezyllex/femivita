export interface FixedOrderBarData {
  title: string;
  galleryImages?: string[];
  pricing?: {
    price: string;
    oldPrice?: string;
  };
}

export interface FixedOrderBarViewProps {
  data: FixedOrderBarData;
}

export interface FixedOrderBarProps {
  data?: FixedOrderBarData;
}
