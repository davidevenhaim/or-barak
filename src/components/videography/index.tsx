import { Container } from "@/components/ui/container";
import {
  btsPaVideos,
  executiveProducerVideos,
  featuredVideos,
  headProducerVideos,
  moreVideos,
  videographyVideos
} from "@/lib/content/videography";
import VideographyHeader from "./header";
import { VideoGrid } from "./video-grid";
import { VideoCarousel } from "./video-carousel";
import { VideoRolesSection } from "./video-roles-section";
import { getTranslations } from "next-intl/server";

const Videography = async () => {
  const t = await getTranslations();
  return (
    <div className='min-h-screen bg-black dark:bg-black'>
      <Container className='py-12 md:py-20'>
        <div className='max-w-7xl mx-auto space-y-16 md:space-y-24'>
          <VideographyHeader />

          <section className='space-y-8'>
            <VideoGrid
              videos={featuredVideos}
              title={t("videography_subtitle")}
            />
          </section>

          {headProducerVideos.length > 0 && (
            <section className='space-y-8'>
              <VideoCarousel
                videos={headProducerVideos}
                title={t("videography_head_producer_videos")}
              />
            </section>
          )}

          {moreVideos.length > 0 && (
            <section className='space-y-8'>
              <VideoCarousel
                videos={moreVideos}
                title={t("videography_more_projects")}
              />
            </section>
          )}

          <section className='space-y-8'>
            <VideoRolesSection
              videos={btsPaVideos.concat(executiveProducerVideos)}
            />
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Videography;
