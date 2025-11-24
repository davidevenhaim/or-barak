"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ImageCard } from "./image-card";
import { ImageLightbox } from "./image-lightbox";
import { PhotographyImage } from "@/lib/types/photography";
import { cn } from "@/lib/utils";

interface SelectedWorksSliderProps {
  images: PhotographyImage[];
  allImages?: PhotographyImage[];
  className?: string;
}

export function SelectedWorksSlider({
  images,
  allImages,
  className
}: SelectedWorksSliderProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const imagesForLightbox = allImages || images;

  const handleImageClick = (index: number) => {
    const clickedImage = images[index];
    const fullIndex = imagesForLightbox.findIndex(
      (img) => img.id === clickedImage.id
    );

    setLightboxIndex(fullIndex >= 0 ? fullIndex : index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps"
        }}
        className={cn("w-full relative", className)}
      >
        <CarouselContent className='-ml-2 md:-ml-4'>
          {images.map((image, index) => (
            <CarouselItem
              key={image.id}
              className='pl-2 md:pl-4 basis-full sm:basis-2/3 lg:basis-1/2'
            >
              <ImageCard
                image={image}
                index={index}
                size='large'
                onClick={() => handleImageClick(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden md:flex -left-8 lg:-left-12' />
        <CarouselNext className='hidden md:flex -right-8 lg:-right-12' />
      </Carousel>

      <ImageLightbox
        images={imagesForLightbox}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </>
  );
}
