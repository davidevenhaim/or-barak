import { Container } from "@/components/container";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
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

export default function Home() {
  const t = useTranslations();

  return (
    <div className='min-h-screen'>
      <Container className='py-20'>
        <div className='flex flex-col items-center justify-center text-center gap-6'>
          <Typography variant='h1' className='max-w-3xl'>
            {t("home_hero_name")}
          </Typography>
          <Typography variant='subtitle1' className='max-w-2xl'>
            {t("home_hero_subtitle")}
          </Typography>
          <Typography variant='body1' className='max-w-xl mt-4'>
            {t("home_hero_description")}
          </Typography>
        </div>
      </Container>
    </div>
  );
}
