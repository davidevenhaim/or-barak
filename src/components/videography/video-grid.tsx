"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { VideoItem } from "@/lib/types/videography";
import { Typography } from "@/components/ui/typography";
import { VideoCard } from "./video-card";
import { VideoDialog } from "./video-dialog";

interface VideoGridProps {
  videos: VideoItem[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  const t = useTranslations();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsDialogOpen(true);
  };

  // First 2 videos are large, next 3 are small
  const largeVideos = videos.slice(0, 2);
  const smallVideos = videos.slice(2, 5);

  return (
    <>
      <div className='sm:items-start items-center space-y-4 text-center sm:text-left'>
        <Typography
          variant='h4'
          className='uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium'
        >
          {t("videography_subtitle")}
        </Typography>
        <div className='h-px w-1/2 bg-zinc-800 mx-auto sm:mx-0 my-6' />
        <Typography
          variant='body2'
          className='text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto sm:mx-0'
        >
          {t("videography_description")}
        </Typography>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6'>
        {largeVideos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            index={index}
            size='large'
            onClick={() => handleVideoClick(video)}
          />
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
        {smallVideos.map((video, index) => (
          <VideoCard
            key={index + 2}
            video={video}
            index={index + 2}
            size='small'
            onClick={() => handleVideoClick(video)}
          />
        ))}
      </div>
      <VideoDialog
        video={selectedVideo}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
