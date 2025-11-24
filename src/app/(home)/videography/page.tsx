import Videography from "@/components/videography";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: `${t("videography_title")} | ${t("site_title")}`,
    description: t("videography_description"),
    openGraph: {
      title: `${t("videography_title")} | ${t("site_title")}`,
      description: t("videography_description"),
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
      title: `${t("videography_title")} | ${t("site_title")}`,
      description: t("videography_description"),
      images: ["/images/or-primary.jpg"]
    }
  };
}

const VideographyPage = () => {
  return <Videography />;
};

export default VideographyPage;
