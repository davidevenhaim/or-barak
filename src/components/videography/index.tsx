"use client";

import { Container } from "@/components/ui/container";
import { videographyVideos } from "@/lib/content/videography";
import VideographyHeader from "./header";
import { VideoGrid } from "./video-grid";
import { VideoCarousel } from "./video-carousel";

const Videography = () => {
  // First 5 videos for the grid
  const featuredVideos = videographyVideos.slice(0, 5);
  // Remaining videos for the carousel
  const moreVideos = videographyVideos.slice(5);

  return (
    <div className='min-h-screen bg-black dark:bg-black'>
      <Container className='py-12 md:py-20'>
        <div className='max-w-7xl mx-auto space-y-16 md:space-y-24'>
          <VideographyHeader />

          <section className='space-y-8'>
            <VideoGrid videos={featuredVideos} />
          </section>

          {moreVideos.length > 0 && (
            <section className='space-y-8'>
              <VideoCarousel videos={moreVideos} />
            </section>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Videography;
