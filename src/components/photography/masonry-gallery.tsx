"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhotographyImage } from "@/lib/types/photography";
import { ImageLightbox } from "./image-lightbox";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MasonryGalleryProps {
  images: PhotographyImage[];
  className?: string;
  enableLightbox?: boolean;
  allImages?: PhotographyImage[];
}

// Generate sizes for masonry layout based on index for consistency
const getSizeForIndex = (index: number) => {
  const sizes = [
    { w: "md:col-span-1", h: "md:row-span-1" },
    { w: "md:col-span-2", h: "md:row-span-1" },
    { w: "md:col-span-1", h: "md:row-span-2" },
    { w: "md:col-span-2", h: "md:row-span-2" }
  ];
  return sizes[index % sizes.length];
};

export function MasonryGallery({
  images,
  className,
  enableLightbox = true,
  allImages
}: MasonryGalleryProps) {
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
          "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]",
          className
        )}
      >
        {images.map((image, index) => {
          const size = getSizeForIndex(index);
          return (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-lg",
                size.w,
                size.h
              )}
              onClick={() => handleImageClick(index)}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[250px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Title overlay */}
                {image.title && (
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 -m-4 rounded-b-lg">
                      <Typography
                        variant="body2"
                        className="text-white font-serif italic text-sm"
                      >
                        {image.title}
                      </Typography>
                    </div>
                  </div>
                )}
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

