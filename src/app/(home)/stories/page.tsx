import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { StoriesHeader, StoryCard } from "@/components/stories";
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
      type: "website"
    }
  };
}

export default async function StoriesPage() {
  const posts = await getAllStories();
  const t = await getTranslations();

  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900'>
      <Container className='py-20'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <StoriesHeader
            title={t("stories_title")}
            description={t("stories_description")}
          />

          {/* Posts Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {posts.map((post, index) => (
              <StoryCard
                key={post.slug}
                post={post}
                index={index}
                readMoreText={t("read_more")}
              />
            ))}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className='text-center py-32'>
              <Card className='inline-block p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50'>
                <Typography variant='h3' className='mb-4 text-zinc-400'>
                  {t("stories_empty_state")}
                </Typography>
              </Card>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
