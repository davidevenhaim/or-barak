"use client";

import { Container } from "@/components/container";
import { Typography } from "@/components/ui/typography";
import { ImageGallery } from "./image-gallery";
import { MasonryGallery } from "./masonry-gallery";
import {
  selectedWorks,
  topImages,
  fullCatalog,
  getAllPhotographyImages
} from "@/lib/content/photography";
import { useTranslations } from "next-intl";

const Photography = () => {
  const t = useTranslations();
  const allImages = getAllPhotographyImages();

  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900'>
      <Container className='py-12 md:py-20'>
        <div className='max-w-7xl mx-auto space-y-16 md:space-y-24'>
          {/* Header */}
          <div className='text-center space-y-4'>
            <Typography
              variant='h1'
              className='font-serif italic text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-zinc-50'
            >
              {t("photography_collection_title")}
            </Typography>
            <Typography
              variant='body1'
              className='text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto'
            >
              {t("photography_collection_description")}
            </Typography>
          </div>

          {/* Selected Works Section */}
          <section className='space-y-8'>
            <div className='flex items-center justify-between'>
              <Typography
                variant='h2'
                className='text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium'
              >
                {t("photography_selected_works")}
              </Typography>
            </div>
            <ImageGallery
              images={selectedWorks}
              columns={3}
              size='small'
              allImages={allImages}
            />
          </section>

          {/* Top 20 Section */}
          <section className='space-y-8'>
            <div className='flex items-center justify-between'>
              <Typography
                variant='h2'
                className='text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium'
              >
                {t("photography_top_works", { count: topImages.length })}
              </Typography>
            </div>
            <ImageGallery
              images={topImages}
              columns={2}
              size='large'
              allImages={allImages}
            />
          </section>

          {/* Full Catalog Section */}
          <section className='space-y-8'>
            <div className='flex items-center justify-between'>
              <Typography
                variant='h2'
                className='text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium'
              >
                {t("photography_full_catalog")}
              </Typography>
            </div>
            <MasonryGallery images={fullCatalog} allImages={allImages} />
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Photography;
