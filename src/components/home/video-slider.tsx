"use client";

import { useState } from "react";
import Image from "next/image";
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
import { Icon } from "@/components/ui/icon";

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function isYouTubeUrl(url: string): boolean {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  videoUrl: string;
  category?: VideoCategory;
}

export enum VideoCategory {
  DirectedFilmedEdited = "directed_filmed_edited",
  HeadProducer = "head_producer",
  ExecutiveProducer = "executive_producer",
  BTS_PARTIAL = "bts_partial"
}

interface VideoSliderProps {
  videos: Video[];
  sectionTitle: string;
  sectionDescription?: string;
  sectionId: string;
  backgroundVideoUrl?: string;
}

function VideoCard({ video }: { video: Video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isYouTube = isYouTubeUrl(video.videoUrl);
  const youtubeId = isYouTube ? getYouTubeVideoId(video.videoUrl) : null;

  const thumbnail =
    video.thumbnailUrl || (youtubeId ? getYouTubeThumbnail(youtubeId) : "");

  const handlePlay = () => {
    if (isYouTube) {
      setIsPlaying(true);
    }
  };

  return (
    <Card className='group overflow-hidden border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] h-full flex flex-col m-1 sm:m-2'>
      <CardContent className='p-0 flex flex-col h-full'>
        {/* Video Player */}
        <div className='relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0'>
          {isYouTube && youtubeId ? (
            <>
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                  className='w-full h-full'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={handlePlay}
                  className='relative w-full h-full group/play touch-manipulation'
                >
                  <Image
                    src={thumbnail}
                    alt={video.title}
                    fill
                    className='object-cover group-hover/play:scale-110 transition-transform duration-700'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                  {/* Play button overlay */}
                  <div className='absolute inset-0 flex items-center justify-center bg-black/20 group-hover/play:bg-black/30 transition-colors'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-500 flex items-center justify-center group-hover/play:scale-110 transition-transform shadow-lg'>
                      <Icon
                        name='lucide:play'
                        className='w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1'
                      />
                    </div>
                  </div>
                </button>
              )}
            </>
          ) : (
            <video
              src={video.videoUrl}
              poster={thumbnail}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
              controls
              preload='metadata'
            />
          )}

          {video.category && !isPlaying && (
            <Badge
              variant='secondary'
              className='absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-xs sm:text-sm'
            >
              {video.category}
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className='p-4 sm:p-5 md:p-6 flex flex-col flex-1 min-h-0'>
          <Typography
            variant='h6'
            className='mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors whitespace-pre-line'
          >
            {video.title}
          </Typography>
          <Typography
            variant='body2'
            className='text-zinc-600 dark:text-zinc-400 flex-1 text-sm sm:text-base whitespace-pre-line'
          >
            {video.description}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export function VideoSlider({
  videos,
  sectionTitle,
  sectionDescription,
  sectionId,
  backgroundVideoUrl
}: VideoSliderProps) {
  const backgroundVideoId = backgroundVideoUrl
    ? getYouTubeVideoId(backgroundVideoUrl)
    : null;
  const youtubeEmbedUrl = backgroundVideoId
    ? `https://www.youtube.com/embed/${backgroundVideoId}?autoplay=1&loop=1&mute=1&playlist=${backgroundVideoId}&controls=0&modestbranding=1&rel=0&playsinline=1`
    : undefined;

  return (
    <section
      id={sectionId}
      className='py-12 sm:py-16 md:py-20 pt-8 sm:pt-10 overflow-x-hidden max-w-full relative bg-black dark:bg-black md:bg-transparent md:dark:bg-transparent'
    >
      {/* Background Video */}
      <div className='hidden md:block absolute inset-0 w-full h-full overflow-hidden z-0'>
        {youtubeEmbedUrl ? (
          <iframe
            src={youtubeEmbedUrl}
            className='absolute inset-0 w-full h-full object-cover pointer-events-none'
            allow='autoplay; encrypted-media'
            allowFullScreen={false}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              transform: "scale(1.1)",
              transformOrigin: "center center"
            }}
          />
        ) : (
          <div className='absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950' />
        )}
        {/* Overlay for better content readability while keeping video clear */}
        <div className='absolute inset-0 bg-gradient-to-br from-zinc-50/70 via-white/60 to-zinc-50/70 dark:from-zinc-950/70 dark:via-black/60 dark:to-zinc-950/70' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 w-full relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-10 md:mb-12'>
          <div className='h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6 sm:mb-8 mx-auto' />
          <Typography
            variant='h2'
            className='mb-3 sm:mb-4 px-4 bg-gradient-to-r from-zinc-900 via-amber-700 to-zinc-900 dark:from-zinc-50 dark:via-amber-400 dark:to-zinc-50 bg-clip-text text-transparent'
          >
            {sectionTitle}
          </Typography>
          {sectionDescription && (
            <Typography
              variant='subtitle1'
              className='text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4 text-sm sm:text-base'
            >
              {sectionDescription}
            </Typography>
          )}
          <div className='h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-6 sm:mt-8 mx-auto' />
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className='w-full max-w-6xl mx-auto relative overflow-hidden'
        >
          <CarouselContent className='-ml-2 md:-ml-4'>
            {videos.map((video) => (
              <CarouselItem
                key={video.id}
                className='pl-2 mb-2 md:pl-4 md:basis-1/2 lg:basis-1/3 py-2 flex'
              >
                <VideoCard video={video} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex -left-12 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-amber-500 hover:text-white hover:border-amber-500 min-w-[44px] min-h-[44px]' />
          <CarouselNext className='hidden md:flex -right-12 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-amber-500 hover:text-white hover:border-amber-500 min-w-[44px] min-h-[44px]' />
        </Carousel>
      </div>
    </section>
  );
}
