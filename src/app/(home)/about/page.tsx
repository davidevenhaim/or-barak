import About from "@/components/about";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: `${t("about_title")} | ${t("site_title")}`,
    description: t("about_description"),
    openGraph: {
      title: `${t("about_title")} | ${t("site_title")}`,
      description: t("about_description"),
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

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
