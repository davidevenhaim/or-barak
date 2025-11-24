import Contact from "@/components/contact";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `${t("contact_title")} | ${t("site_title")}`,
    description: t("contact_description")
  };
}

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
