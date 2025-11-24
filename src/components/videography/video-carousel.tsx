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
import { useTranslations } from "next-intl";

interface VideoCarouselProps {
  videos: VideoItem[];
}

export function VideoCarousel({ videos }: VideoCarouselProps) {
  const t = useTranslations();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className='space-y-6'>
        <Typography
          variant='h4'
          className='uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium'
        >
          {t("videography_more_projects")}
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
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
