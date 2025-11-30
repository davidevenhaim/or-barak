"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import { PhotographyImage } from "@/lib/types/photography";

interface ImageLightboxProps {
  images: PhotographyImage[];
  initialIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
}

export function ImageLightbox({
  images,
  initialIndex,
  open,
  onOpenChange,
  title
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const currentImage = images[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!currentImage) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='max-w-7xl w-full h-[90vh] p-0 gap-0 bg-black/95 border-none'
        showCloseButton={true}
      >
        <DialogTitle className='sr-only'>
          {title || currentImage.title || "Photography Collection"}
        </DialogTitle>
        <div className='relative w-full h-full flex items-center justify-center'>
          {/* Image */}
          <div className='relative w-full h-full flex items-center justify-center p-4 md:p-8'>
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className='object-contain'
              priority
            />
          </div>
          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant='ghost'
                size='icon-lg'
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none'
                onClick={goToPrevious}
                aria-label='Previous image'
              >
                <Icon name='mdi:chevron-left' className='w-8 h-8' />
              </Button>
              <Button
                variant='ghost'
                size='icon-lg'
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none'
                onClick={goToNext}
                aria-label='Next image'
              >
                <Icon name='mdi:chevron-right' className='w-8 h-8' />
              </Button>
            </>
          )}
          {/* Image Info */}
          {/*
          #TODO: Decide if we need this. or remove completely.
           {(currentImage.title || currentImage.category) && (
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6'>
              <div className='max-w-4xl mx-auto'>
                {currentImage.title && (
                  <Typography
                    variant='h4'
                    className='text-white font-serif italic mb-2'
                  >
                    {currentImage.title}
                  </Typography>
                )}
                {currentImage.category && (
                  <Typography
                    variant='body2'
                    className='text-amber-500 uppercase text-sm font-medium tracking-wider'
                  >
                    {currentImage.category}
                  </Typography>
                )}
              </div>
            </div>
          )} */}
          {/* Image Counter */}
          {images.length > 1 && (
            <div className='absolute top-4 right-4 bg-black/50 px-4 py-2 rounded-md'>
              <Typography variant='body2' className='text-white text-sm'>
                {currentIndex + 1} / {images.length}
              </Typography>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
