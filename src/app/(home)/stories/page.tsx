import { Container } from "@/components/ui/container";
import { StoriesHeader, ComingSoonSection } from "@/components/stories";
import { getAllStories } from "@/lib/content/post";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getYouTubeVideoId } from "@/lib/utils/youtube.utils";

const storiesBackgroundVideoUrl = "https://www.youtube.com/watch?v=9C6_ARsosqs";

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
  const hasStories = posts.length > 0;
  const backgroundVideoId = getYouTubeVideoId(storiesBackgroundVideoUrl);
  const backgroundVideoEmbedUrl = backgroundVideoId
    ? `https://www.youtube.com/embed/${backgroundVideoId}?autoplay=1&loop=1&mute=1&playlist=${backgroundVideoId}&controls=0&modestbranding=1&rel=0&playsinline=1`
    : undefined;

  return (
    <div
      className='min-h-screen bg-black dark:bg-black relative overflow-hidden'
      data-has-stories={hasStories}
    >
      <div className='absolute inset-0 w-full h-full overflow-hidden pointer-events-none'>
        {backgroundVideoEmbedUrl ? (
          <iframe
            src={backgroundVideoEmbedUrl}
            title='Stories background video'
            className='absolute inset-0 w-full h-full object-cover'
            allow='autoplay; encrypted-media'
            allowFullScreen={false}
            loading='lazy'
            aria-hidden='true'
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              transform: "scale(1.1)",
              transformOrigin: "center center",
              opacity: 0.8
            }}
          />
        ) : (
          <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-black via-zinc-900 to-black' />
        )}
        <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 backdrop-blur-[1px]' />
      </div>

      <Container className='py-4 md:py-8 relative z-10'>
        <div className='max-w-7xl mx-auto space-y-16 md:space-y-8'>
          {/* Header */}
          <StoriesHeader title={t("stories_title_and_perspectives")} />

          {/* Stories Grid */}
          {/* {posts.length > 0 && (
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
          )} */}

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
