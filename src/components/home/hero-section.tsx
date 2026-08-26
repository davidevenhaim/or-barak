"use client";

import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "../ui/typewriter";
import { videosSectionId } from "@/lib/content/homepage";
import { scrollToElement } from "@/components/home/scroll-handler";
import { useBoolean } from "@/hooks/use-boolean";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  backgroundVideo?: string;
  /** Photography revealed behind the text where the drifting light falls */
  revealImages?: string[];
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  revealImages = []
}: HeroSectionProps) {
  const isVideoLoaded = useBoolean(false);

  return (
    <section className='relative w-full overflow-hidden bg-black md:h-[calc(100vh-50px)]'>
      <div className='flex h-full flex-col md:flex-row'>
        {/* Portrait — top on mobile, right column on desktop */}
        <div className='relative order-1 h-[55vh] w-full md:order-2 md:h-full md:w-[55%] md:border-l md:border-white/10'>
          {backgroundVideo ? (
            <>
              {/* Fallback Image */}
              {!isVideoLoaded.value && (
                <Image
                  src={backgroundImage}
                  alt='Portrait of Or Barak'
                  fill
                  sizes='(min-width: 768px) 55vw, 100vw'
                  className='object-cover object-top'
                  priority
                />
              )}
              {/* Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className='h-full w-full object-cover'
                onLoadedData={isVideoLoaded.onTrue}
              >
                <source src={backgroundVideo} type='video/mp4' />
              </video>
            </>
          ) : (
            <Image
              src={backgroundImage}
              alt='Portrait of Or Barak'
              fill
              sizes='(min-width: 768px) 55vw, 100vw'
              className='object-cover object-top'
              priority
            />
          )}
          {/* Fade into the dark text panel below (mobile only) */}
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black md:hidden' />
        </div>

        {/* Text — below on mobile, left column on desktop */}
        <div className='relative order-2 flex w-full items-center bg-black px-6 py-14 pb-32 sm:px-10 md:order-1 md:w-[45%] md:px-12 md:py-0 md:pb-0 lg:px-16'>
          {revealImages.length > 0 && (
            <div aria-hidden className='hero-reveal'>
              <div className='grid h-full w-full grid-cols-2 grid-rows-2'>
                {revealImages.map((src) => (
                  <div key={src} className='relative overflow-hidden'>
                    <Image
                      src={src}
                      alt=''
                      fill
                      sizes='(min-width: 768px) 25vw, 50vw'
                      className='object-cover'
                      loading='lazy'
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div aria-hidden className='hero-light' />

          <div className='relative max-w-xl'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant='h1'
                className='mb-3 sm:mb-4 text-white font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-6xl'
              >
                {title}
              </Typography>
            </motion.div>

            <Typewriter className='mb-4 sm:mb-5 text-amber-400 font-semibold tracking-wider uppercase text-xs sm:text-sm md:text-base'>
              {subtitle}
            </Typewriter>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant='subtitle1'
                className='text-zinc-200 leading-relaxed whitespace-pre-line sm:text-base md:text-lg'
              >
                {description}
              </Typography>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer touch-manipulation md:bottom-10'
            onClick={() => scrollToElement(videosSectionId)}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='flex flex-col items-center gap-2'
            >
              <span className='text-white/70 text-xs sm:text-sm md:text-base'>
                Scroll
              </span>
              <div className='w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 sm:p-2'>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='w-1 h-1.5 sm:h-2 bg-white/70 rounded-full'
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
