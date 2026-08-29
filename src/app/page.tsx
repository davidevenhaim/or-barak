import Contact from "@/components/contact";
import { HeroSection } from "@/components/home";
import { ImageGallery } from "@/components/photography/image-gallery";
import ImageSectionTitle from "@/components/photography/image-section-title";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { VideoGrid } from "@/components/videography/video-grid";
import { selectedWorks } from "@/lib/content/photography";
import { featuredVideos } from "@/lib/content/videography";
import { Metadata } from "next";
import Link from "next/link";
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
          url: "/images/or-2.jpg",
          alt: t("site_title")
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("about_title")} | ${t("site_title")}`,
      description: t("about_description"),
      images: ["/images/or-2.jpg"]
    }
  };
}

const heroRevealImages = [
  "/images/1y4a1193.jpg",
  "/images/la1-01.jpg",
  "/images/washington-048.jpg",
  "/images/washington-053.jpg"
];

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className='overflow-x-hidden max-w-full'>
      <section id='home' className='scroll-mt-14 sm:scroll-mt-16'>
        <HeroSection
          title={t("home_hero_name")}
          subtitle={t("home_hero_subtitle")}
          description={t("home_hero_description")}
          backgroundImage='/images/herophoto.jpg'
          revealImages={heroRevealImages}
          // backgroundVideo="/videos/hero-background.mp4" // Uncomment and add your video
        />
      </section>

      <section
        id='videography'
        className='relative isolate scroll-mt-14 sm:scroll-mt-16 bg-black'
      >
        <div aria-hidden='true' className='cinema-screening' />
        <div aria-hidden='true' className='cinema-curtain cinema-curtain--left' />
        <div
          aria-hidden='true'
          className='cinema-curtain cinema-curtain--right'
        />
        <Container className='py-8 sm:py-12 md:py-16 lg:py-20'>
          <div className='relative max-w-7xl mx-auto space-y-8 sm:space-y-12'>
            <VideoGrid
              videos={featuredVideos}
              title={t("videography_subtitle")}
            />
            <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
              <Button asChild variant='outline' size='lg'>
                <Link href='/videography'>
                  {t("home_videography_view_all")}
                </Link>
              </Button>
              <Button asChild variant='outline' size='lg'>
                <Link href='/videography#credits'>
                  {t("home_videography_credits")}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section
        id='photography'
        className='relative isolate scroll-mt-14 sm:scroll-mt-16 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900'
      >
        <div aria-hidden='true' className='camera-viewfinder' />
        <Container className='py-8 sm:py-12 md:py-16 lg:py-20'>
          <div className='relative max-w-7xl mx-auto space-y-8 sm:space-y-12'>
            <ImageSectionTitle>{t("home_photography_title")}</ImageSectionTitle>
            <ImageGallery images={selectedWorks.slice(0, 6)} columns={3} />
            <div className='flex justify-center'>
              <Button asChild variant='outline' size='lg'>
                <Link href='/photography'>
                  {t("home_photography_view_all")}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id='about' className='scroll-mt-14 sm:scroll-mt-16'>
        <Container size='narrow' className='py-8 sm:py-12 md:py-16 lg:py-20'>
          <div className='max-w-2xl mx-auto space-y-8 sm:space-y-12'>
            <ImageSectionTitle>{t("home_about_title")}</ImageSectionTitle>
            <p className='text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 text-center sm:text-start'>
              {t("home_about_content")}
            </p>
          </div>
        </Container>
      </section>

      <section id='contact' className='scroll-mt-14 sm:scroll-mt-16'>
        <Contact />
      </section>
    </div>
  );
}
