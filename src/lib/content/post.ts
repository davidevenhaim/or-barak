// lib/content/posts.ts
import { StoryPost } from "@/lib/types/stories";

const POSTS: StoryPost[] = [
  {
    slug: "seeing-in-the-dark",
    title: "Seeing in the Dark",
    description:
      "On working with almost no light, trusting the subject’s face, and letting the moment breathe.",
    content: `
I used to think light was about control.
Now I think it's about permission.
...
    `.trim(),
    coverImage:
      "https://drive.google.com/uc?export=view&id=1x4kXSc8WRNLhcQ7SUP3QL7FcyAaPhXfM",
    publishedAt: "2025-10-20T09:00:00.000Z",
    tags: ["philosophy", "process"]
  },
  {
    slug: "money-vs-honesty",
    title: "Money vs Honesty",
    description:
      "The job pays well, but it wants me to say something I don't believe. Where's the line?",
    content: `
There's a moment in every shoot where you ask:
am I documenting, or am I selling?
...
    `.trim(),
    publishedAt: "2025-12-12T09:00:00.000Z",
    tags: ["industry", "ethics"],
    coverImage:
      "https://drive.google.com/uc?export=view&id=1QqrUyZqFnruIrKwjK4ESoanC5jfpHgW2"
  }
];

export async function getAllStories(): Promise<StoryPost[]> {
  // In the future this can fetch from CMS.
  // For now return posts sorted by date desc.
  return [...POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getStoryBySlug(slug: string): Promise<StoryPost | null> {
  const post = POSTS.find((p) => p.slug === slug);
  return post ?? null;
}
