import { HeroSection, QuickLinksSection, VideoSlider } from "@/components/home";
import {
  backgroundVideoUrl,
  quickLinks,
  videos,
  videosSectionId
} from "@/lib/content/homepage";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("site_title"),
    description: t("site_description"),
    openGraph: {
      title: t("site_title"),
      description: t("site_description"),
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
      title: `${t("about_title")} | ${t("site_title")}`,
      description: t("about_description"),
      images: ["/images/or-primary.jpg"]
    }
  };
}

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className='overflow-x-hidden max-w-full'>
      <HeroSection
        title={t("home_hero_name")}
        subtitle={t("home_hero_subtitle")}
        description={t("home_hero_description")}
        backgroundImage='/images/hero-bg.jpg'
        // backgroundVideo="/videos/hero-background.mp4" // Uncomment and add your video
      />

      <VideoSlider
        videos={videos}
        sectionTitle={t("home_videos_title")}
        sectionDescription={t("home_videos_description")}
        sectionId={videosSectionId}
        backgroundVideoUrl={backgroundVideoUrl}
      />

      <QuickLinksSection
        links={quickLinks.map((l) => ({
          ...l,
          description: t(l.description),
          title: t(l.title)
        }))}
        sectionTitle={t("home_quicklinks_title")}
        sectionDescription={t("home_quicklinks_description")}
      />
    </div>
  );
}
