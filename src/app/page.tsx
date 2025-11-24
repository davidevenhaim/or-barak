import { HeroSection, VideoSlider, QuickLinksSection } from "@/components/home";
import {
  quickLinks,
  videos,
  videosSectionId
} from "@/components/home/hero-constants";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("site_title"),
    description: t("site_description"),
    openGraph: {
      title: t("site_title"),
      description: t("site_description"),
      type: "website"
    }
  };
}

export default async function Home() {
  const t = await getTranslations();

  return (
    <div>
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
      />

      {/* <PartnershipSection
        partners={partners}
        sectionTitle={t("home_partners_title")}
      /> */}

      <QuickLinksSection
        links={quickLinks}
        sectionTitle={t("home_quicklinks_title")}
        sectionDescription={t("home_quicklinks_description")}
      />
    </div>
  );
}
