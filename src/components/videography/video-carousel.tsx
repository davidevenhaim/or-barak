"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { VideoItem } from "@/lib/types/videography";
import { VideoCard } from "./video-card";
import { VideoDialog } from "./video-dialog";
import { Typography } from "@/components/ui/typography";
import { useBoolean } from "@/hooks/use-boolean";

interface VideoCarouselProps {
  videos: VideoItem[];
  title: string;
}

export function VideoCarousel({ videos, title }: VideoCarouselProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const isDialogOpen = useBoolean();

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
    isDialogOpen.onTrue();
  };

  return (
    <>
      <div className='space-y-6'>
        <Typography
          variant='h4'
          className='uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium'
        >
          {title}
        </Typography>
        <Carousel
          opts={{
            align: "start",
            loop: false
          }}
          className='w-full'
        >
          <CarouselContent className='-ml-2 md:-ml-4'>
            {videos.map((video, index) => (
              <CarouselItem
                key={index}
                className='pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
              >
                <VideoCard
                  video={video}
                  index={index}
                  size='small'
                  onClick={() => handleVideoClick(video)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='-left-12 border-zinc-800 bg-black/80 hover:bg-amber-500 hover:text-white hover:border-amber-500 text-white' />
          <CarouselNext className='-right-12 border-zinc-800 bg-black/80 hover:bg-amber-500 hover:text-white hover:border-amber-500 text-white' />
        </Carousel>
      </div>
      <VideoDialog
        video={selectedVideo}
        open={isDialogOpen.value}
        onOpenChange={isDialogOpen.onToggle}
      />
    </>
  );
}
