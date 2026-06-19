"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhotographyImage } from "@/lib/types/photography";
import { ImageLightbox } from "./image-lightbox";
import { cn } from "@/lib/utils";

interface MagazineGalleryProps {
  images: PhotographyImage[];
  className?: string;
  enableLightbox?: boolean;
  allImages?: PhotographyImage[];
}

type Orientation = "landscape" | "portrait" | "square";

// Decide orientation from intrinsic dimensions. Images without width/height
// (both are optional on PhotographyImage) safely fall back to a standard
// square cell so they never break the grid.
const getOrientation = (image: PhotographyImage): Orientation => {
  if (!image.width || !image.height) return "square";
  const ratio = image.width / image.height;
  if (ratio >= 1.15) return "landscape";
  if (ratio <= 0.87) return "portrait";
  return "square";
};

// Magazine spans only kick in from md+ so phones stay on a simple 2-col grid
// where every image is a uniform standard cell.
const spanClasses: Record<Orientation, string> = {
  landscape: "md:col-span-2",
  portrait: "md:row-span-2",
  square: ""
};

export function MagazineGallery({
  images,
  className,
  enableLightbox = true,
  allImages
}: MagazineGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const imagesForLightbox = allImages || images;

  const handleImageClick = (index: number) => {
    if (!enableLightbox) return;

    const clickedImage = images[index];
    const fullIndex = imagesForLightbox.findIndex(
      (img) => img.id === clickedImage.id
    );

    setLightboxIndex(fullIndex >= 0 ? fullIndex : index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",
          "auto-rows-[200px] md:auto-rows-[240px]",
          className
        )}
        style={{ gridAutoFlow: "dense" }}
      >
        {images.map((image, index) => {
          const orientation = getOrientation(image);
          return (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 12) * 0.03 }}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-lg",
                spanClasses[orientation]
              )}
              onClick={() => handleImageClick(index)}
            >
              <div className='relative w-full h-full overflow-hidden bg-zinc-100 dark:bg-zinc-900'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                  sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw'
                />
                {/* Overlay on hover */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
              </div>
            </motion.div>
          );
        })}
      </div>

      {enableLightbox && (
        <ImageLightbox
          images={imagesForLightbox}
          initialIndex={lightboxIndex}
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
        />
      )}
    </>
  );
}
