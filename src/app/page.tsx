import {
  HeroSection,
  VideoSlider,
  PartnershipSection,
  QuickLinksSection,
  NewsletterSection,
  type Video,
  type Partner,
  type QuickLink
} from "@/components/home";
import { getTranslations } from "next-intl/server";

// Mock data - replace with actual data from CMS or database
const videos: Video[] = [
  {
    id: "1",
    title: "Cinematic Showcase 2024",
    description:
      "A stunning compilation of visual storytelling and creative excellence.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "Videography"
  },
  {
    id: "2",
    title: "Behind The Scenes",
    description:
      "Exclusive look at the creative process and production workflow.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Documentary"
  },
  {
    id: "3",
    title: "Urban Stories",
    description:
      "Capturing the essence of city life through dynamic cinematography.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Commercial"
  },
  {
    id: "4",
    title: "Documentary",
    description: "Capturing the essence of documentary filmmaking.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Documentary"
  },
  {
    id: "5",
    title: "Commercial",
    description: "Capturing the essence of commercial filmmaking.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Commercial"
  }
];

const partners: Partner[] = [
  {
    id: "1",
    name: "Partner 1",
    logoUrl: "https://via.placeholder.com/160x80/000000/FFFFFF/?text=Partner+1"
  },
  {
    id: "2",
    name: "Partner 2",
    logoUrl: "https://via.placeholder.com/160x80/000000/FFFFFF/?text=Partner+2"
  },
  {
    id: "3",
    name: "Partner 3",
    logoUrl: "https://via.placeholder.com/160x80/000000/FFFFFF/?text=Partner+3"
  },
  {
    id: "4",
    name: "Partner 4",
    logoUrl: "https://via.placeholder.com/160x80/000000/FFFFFF/?text=Partner+4"
  },
  {
    id: "5",
    name: "Partner 5",
    logoUrl: "https://via.placeholder.com/160x80/000000/FFFFFF/?text=Partner+5"
  }
];

const quickLinks: QuickLink[] = [
  {
    id: "1",
    title: "Videography",
    description: "Explore my latest video productions and cinematic work",
    href: "/videography",
    icon: "lucide:video",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "2",
    title: "Photography",
    description: "Browse through my photography portfolio and collections",
    href: "/photography",
    icon: "lucide:camera",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "3",
    title: "Journal",
    description: "Read about my creative journey and behind-the-scenes stories",
    href: "/journal",
    icon: "lucide:book-open",
    color: "from-amber-500 to-amber-600"
  },
  {
    id: "4",
    title: "Contact",
    description: "Let's collaborate on your next creative project",
    href: "/contact",
    icon: "lucide:mail",
    color: "from-green-500 to-green-600"
  }
];

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
      {/* Hero Section */}
      <HeroSection
        title={t("home_hero_name")}
        subtitle={t("home_hero_subtitle")}
        description={t("home_hero_description")}
        backgroundImage='https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071'
        // backgroundVideo="/videos/hero-background.mp4" // Uncomment and add your video
      />

      {/* Video Slider */}
      <VideoSlider
        videos={videos}
        sectionTitle={t("home_videos_title")}
        sectionDescription={t("home_videos_description")}
      />

      {/* Quick Links */}
      <QuickLinksSection
        links={quickLinks}
        sectionTitle={t("home_quicklinks_title")}
        sectionDescription={t("home_quicklinks_description")}
      />

      {/* Partnership Section */}
      <PartnershipSection
        partners={partners}
        sectionTitle={t("home_partners_title")}
      />

      {/* Newsletter Section */}
      <NewsletterSection
        sectionTitle={t("home_newsletter_title")}
        sectionDescription={t("home_newsletter_description")}
        successMessage={t("home_newsletter_success")}
        submitButtonText={t("home_newsletter_submit")}
        emailPlaceholder={t("home_newsletter_email_placeholder")}
        namePlaceholder={t("home_newsletter_name_placeholder")}
      />
    </div>
  );
}
