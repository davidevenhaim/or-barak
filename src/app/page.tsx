import {
  HeroSection,
  VideoSlider,
  PartnershipSection,
  QuickLinksSection,
  type Video,
  type Partner,
  type QuickLink
} from "@/components/home";
import { VideoCategory } from "@/components/home/video-slider";
import { getTranslations } from "next-intl/server";

const videos: Video[] = [
  {
    id: "1",
    title: "ABF - 2025",
    description:
      "A stunning compilation of visual storytelling and creative excellence.",
    videoUrl: "https://www.youtube.com/watch?v=2e0jQjMLr7I",
    category: VideoCategory.DirectedFilmedEdited
  },
  {
    id: "2",
    title: "Limits - Short Film",
    description:
      "Exclusive look at the creative process and production workflow.",
    videoUrl: "https://youtu.be/qNF-tdjnIs0",
    category: VideoCategory.DirectedFilmedEdited
  },
  {
    id: "3",
    title: "Amir Dadon - Music Video",
    description:
      "Capturing the essence of city life through dynamic cinematography.",
    videoUrl: "https://www.youtube.com/watch?v=88P9rPT5ogs",
    category: VideoCategory.HeadProducer
  },
  {
    id: "4",
    title: "Static - Federer - Official Music Video",
    description: "Capturing the essence of documentary filmmaking.",
    videoUrl:
      "https://www.youtube.com/watch?v=pQTkDVohdnc&list=RDpQTkDVohdnc&start_radio=1",
    category: VideoCategory.ExecutiveProducer
  },
  {
    id: "5",
    title: "Full Trunk - Bereshit Music Video",
    description: "Capturing the essence of commercial filmmaking.",
    videoUrl: "https://www.youtube.com/watch?v=ECyHvyvt_mI",
    category: VideoCategory.HeadProducer
  }
];

const partners: Partner[] = [
  {
    id: "1",
    name: "McDonald's",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/McDonald's_Golden_Arches.svg"
  },
  {
    id: "2",
    name: "Ford",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
  },
  {
    id: "3",
    name: "Starbucks",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg"
  },
  {
    id: "4",
    name: "Nike",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
  },
  {
    id: "5",
    name: "Coca-Cola",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
  },
  {
    id: "6",
    name: "Toyota",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg"
  },
  {
    id: "7",
    name: "Amazon",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    id: "8",
    name: "Adidas",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
  },
  {
    id: "9",
    name: "Pepsi",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pepsi_logo.svg"
  },
  {
    id: "10",
    name: "Tesla",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
  },
  {
    id: "11",
    name: "Shell",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/6/6e/Shell_logo.svg"
  },
  {
    id: "12",
    name: "IKEA",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg"
  },
  {
    id: "13",
    name: "Uber",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
  },
  {
    id: "14",
    name: "Heineken",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Heineken_logo.svg"
  },
  {
    id: "15",
    name: "Samsung",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
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
      <HeroSection
        title={t("home_hero_name")}
        subtitle={t("home_hero_subtitle")}
        description={t("home_hero_description")}
        backgroundImage='https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071'
        // backgroundVideo="/videos/hero-background.mp4" // Uncomment and add your video
      />

      <VideoSlider
        videos={videos}
        sectionTitle={t("home_videos_title")}
        sectionDescription={t("home_videos_description")}
      />

      <PartnershipSection
        partners={partners}
        sectionTitle={t("home_partners_title")}
      />

      <QuickLinksSection
        links={quickLinks}
        sectionTitle={t("home_quicklinks_title")}
        sectionDescription={t("home_quicklinks_description")}
      />
    </div>
  );
}
