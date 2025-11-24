import Photography from "@/components/photography";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: `${t("photography_title")} | ${t("site_title")}`,
    description: t("photography_description"),
    openGraph: {
      title: `${t("photography_title")} | ${t("site_title")}`,
      description: t("photography_description"),
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
      title: `${t("photography_title")} | ${t("site_title")}`,
      description: t("photography_description"),
      images: ["/images/or-primary.jpg"]
    }
  };
}

const PhotographyPage = () => {
  return <Photography />;
};

export default PhotographyPage;
