export interface PhotographyImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  width?: number;
  height?: number;
}

export interface PhotographySection {
  id: string;
  title: string;
  images: PhotographyImage[];
}

