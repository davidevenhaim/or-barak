export interface PhotographyImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  width?: number;
  height?: number;
  /** Shown in the landing page's photography teaser */
  featured?: boolean;
}

export interface PhotographySection {
  id: string;
  title: string;
  images: PhotographyImage[];
}

