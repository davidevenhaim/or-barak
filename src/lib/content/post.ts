// lib/content/posts.ts
import { JournalPost } from "@/lib/types/journal";

const POSTS: JournalPost[] = [
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
    coverImage: "/images/journal/seeing-in-the-dark.jpg",
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
    publishedAt: "2025-10-12T09:00:00.000Z",
    tags: ["industry", "ethics"],
    coverImage: "/images/journal/money-vs-honesty.jpg"
  }
];

export async function getAllJournalPosts(): Promise<JournalPost[]> {
  // In the future this can fetch from CMS.
  // For now return posts sorted by date desc.
  return [...POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getJournalPostBySlug(
  slug: string
): Promise<JournalPost | null> {
  const post = POSTS.find((p) => p.slug === slug);
  return post ?? null;
}
