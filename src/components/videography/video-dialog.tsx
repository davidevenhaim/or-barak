"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  getYouTubeVideoId,
  getYouTubeEmbedUrl,
  isYouTubeUrl
} from "@/lib/utils/youtube.utils";
import { VideoItem } from "@/lib/types/videography";

interface VideoDialogProps {
  video: VideoItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VideoDialog({ video, open, onOpenChange }: VideoDialogProps) {
  if (!video) return null;

  const isYouTube = isYouTubeUrl(video.url);
  const youtubeId = isYouTube ? getYouTubeVideoId(video.url) : null;
  const embedUrl = youtubeId ? getYouTubeEmbedUrl(youtubeId, true) : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='max-w-5xl w-full p-0 bg-black border-zinc-800'
        showCloseButton={true}
      >
        <DialogTitle className='sr-only'>{video.title}</DialogTitle>
        <div className='aspect-video w-full bg-black'>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className='w-full h-full'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title={video.title}
            />
          ) : (
            <div className='w-full h-full flex items-center justify-center text-white'>
              <p className='text-zinc-400'>Video player not available</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
