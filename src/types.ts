export interface ImageType {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface ServiceType {
  title: string;
  description: string;
  price: string;
  icon: React.ComponentType<{ className?: string }>;
}
