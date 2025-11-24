export interface StoryPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO string
  content: string;
  tags?: string[];
  readingTime?: number; // in minutes
  coverImage: string;
}

export interface StoryMetadata {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO string
  tags?: string[];
  readingTime?: number; // in minutes
}
