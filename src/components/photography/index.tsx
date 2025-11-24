"use client";

import { Container } from "@/components/ui/container";
import { ImageGallery } from "./image-gallery";
import { MasonryGallery } from "./masonry-gallery";
import { SelectedWorksSlider } from "./selected-works-slider";
import {
  selectedWorks,
  topImages,
  fullCatalog,
  getAllPhotographyImages
} from "@/lib/content/photography";
import { useTranslations } from "next-intl";
import ImageSectionTitle from "./image-section-title";
import PhotographyHeader from "./header";

const Photography = () => {
  const t = useTranslations();
  const allImages = getAllPhotographyImages();

  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 overflow-x-hidden max-w-full'>
      <Container className='py-8 sm:py-12 md:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24'>
          <PhotographyHeader />

          <PhotographySection title={t("photography_selected_works")}>
            <SelectedWorksSlider images={selectedWorks} allImages={allImages} />
          </PhotographySection>

          <PhotographySection
            title={t("photography_top_works", { count: topImages.length })}
          >
            <ImageGallery
              images={topImages}
              columns={2}
              size='large'
              allImages={allImages}
            />
          </PhotographySection>

          <PhotographySection title={t("photography_full_catalog")}>
            <MasonryGallery images={fullCatalog} allImages={allImages} />
          </PhotographySection>
        </div>
      </Container>
    </div>
  );
};

type PhotographySectionProps = {
  title: string;
  children: React.ReactNode;
};

const PhotographySection = ({ title, children }: PhotographySectionProps) => {
  return (
    <section className='space-y-6 sm:space-y-8'>
      <ImageSectionTitle>{title}</ImageSectionTitle>
      {children}
    </section>
  );
};

export default Photography;
