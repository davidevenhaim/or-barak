import { Container } from "@/components/ui/container";
import {
  StoriesHeader,
  StoryCard,
  ComingSoonSection
} from "@/components/stories";
import { getAllStories } from "@/lib/content/post";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: `${t("stories_title")} | ${t("site_title")}`,
    description: t("stories_description"),
    openGraph: {
      title: `${t("stories_title")} | ${t("site_title")}`,
      description: t("stories_description"),
      type: "website",
      images: [
        {
          url: "/images/or-primary.jpg",
          alt: t("site_title")
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("stories_title")} | ${t("site_title")}`,
      description: t("stories_description"),
      images: ["/images/or-primary.jpg"]
    }
  };
}

export default async function StoriesPage() {
  const posts = await getAllStories();
  const t = await getTranslations();

  return (
    <div className='min-h-screen bg-black dark:bg-black'>
      <Container className='py-4 md:py-8'>
        <div className='max-w-7xl mx-auto space-y-16 md:space-y-8'>
          {/* Header */}
          <StoriesHeader title={t("stories_title_and_perspectives")} />

          {/* Stories Grid */}
          {posts.length > 0 && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
              {posts.map((post, index) => (
                <StoryCard
                  key={post.slug}
                  post={post}
                  index={index}
                  readStoryText={t("stories_read_story")}
                  isHighlighted={index === 0}
                />
              ))}
            </div>
          )}

          {/* Coming Soon Section */}
          <ComingSoonSection
            title={t("stories_coming_soon_title")}
            subtitle={t("stories_coming_soon_subtitle")}
            text={t("stories_coming_soon_text")}
          />
        </div>
      </Container>
    </div>
  );
}
