"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category?: string;
}

interface VideoSliderProps {
  videos: Video[];
  sectionTitle: string;
  sectionDescription?: string;
}

export function VideoSlider({
  videos,
  sectionTitle,
  sectionDescription
}: VideoSliderProps) {
  return (
    <section className='py-20 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8 mx-auto' />
          <Typography
            variant='h2'
            className='mb-4 bg-gradient-to-r from-zinc-900 via-amber-700 to-zinc-900 dark:from-zinc-50 dark:via-amber-400 dark:to-zinc-50 bg-clip-text text-transparent'
          >
            {sectionTitle}
          </Typography>
          {sectionDescription && (
            <Typography
              variant='subtitle1'
              className='text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto'
            >
              {sectionDescription}
            </Typography>
          )}
          <div className='h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-8 mx-auto' />
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className='w-full max-w-6xl mx-auto'
        >
          <CarouselContent className='-ml-2 md:-ml-4'>
            {videos.map((video) => (
              <CarouselItem
                key={video.id}
                className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3'
              >
                <Card className='group overflow-hidden border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]'>
                  <CardContent className='p-0'>
                    {/* Video Thumbnail */}
                    <div className='relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800'>
                      <video
                        src={video.videoUrl}
                        poster={video.thumbnailUrl}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                        controls
                        preload='metadata'
                      />

                      {video.category && (
                        <Badge
                          variant='secondary'
                          className='absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md'
                        >
                          {video.category}
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className='p-6'>
                      <Typography
                        variant='h5'
                        className='mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2'
                      >
                        {video.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='text-zinc-600 dark:text-zinc-400 line-clamp-2'
                      >
                        {video.description}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='-left-12 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-amber-500 hover:text-white hover:border-amber-500' />
          <CarouselNext className='-right-12 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-amber-500 hover:text-white hover:border-amber-500' />
        </Carousel>
      </div>
    </section>
  );
}
